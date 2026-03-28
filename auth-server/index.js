const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.AUTH_PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "change-me-in-production";
const PASSWORD_HASH = process.env.PASSWORD_HASH; // bcrypt hash of the password

if (!PASSWORD_HASH) {
  console.error("❌ PASSWORD_HASH environment variable is required!");
  console.error("Generate one with: node -e \"const b=require('bcryptjs');console.log(b.hashSync('yourpassword',10))\"");
  process.exit(1);
}

app.use(cors());
app.use(express.json({ limit: "1kb" }));

// Rate limiting (simple in-memory)
const attempts = new Map();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const entry = attempts.get(ip);

  if (entry) {
    // Clean old attempts
    entry.timestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS);
    if (entry.timestamps.length >= MAX_ATTEMPTS) {
      return res.status(429).json({ error: "Too many attempts. Try again later." });
    }
    entry.timestamps.push(now);
  } else {
    attempts.set(ip, { timestamps: [now] });
  }
  next();
}

app.post("/api/auth/verify", rateLimit, async (req, res) => {
  const { password } = req.body;

  if (!password || typeof password !== "string" || password.length > 128) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const valid = await bcrypt.compare(password, PASSWORD_HASH);
  if (!valid) {
    return res.status(401).json({ error: "Wrong password" });
  }

  const token = jwt.sign({ access: "private", iat: Math.floor(Date.now() / 1000) }, JWT_SECRET, {
    expiresIn: "24h",
  });

  res.json({ token });
});

app.get("/api/auth/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`🔐 Auth server running on port ${PORT}`);
});
