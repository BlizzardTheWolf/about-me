import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/config/site";

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL || "http://localhost:3001";

const PrivatePage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = sessionStorage.getItem("private_token");
    return !!token;
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${AUTH_API_URL}/api/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Wrong password");
        return;
      }

      const { token } = await res.json();
      sessionStorage.setItem("private_token", token);
      setIsAuthenticated(true);
    } catch {
      setError("Could not connect to auth server");
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("private_token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="p-6 flex flex-col items-center justify-center min-h-[300px] gap-4">
          <h1 className="font-retro text-2xl text-primary font-bold">🔒 Private Area</h1>
          <p className="font-retro text-sm text-muted-foreground text-center">
            This page is for friends only. Enter the password to continue.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-xs">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="font-retro text-sm px-3 py-2 border-2 border-border bg-card text-foreground focus:outline-none focus:border-primary"
              required
              minLength={1}
              maxLength={128}
              autoFocus
            />
            {error && (
              <p className="font-retro text-xs text-accent">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="font-retro text-sm px-4 py-2 bg-primary text-primary-foreground border-2 border-border hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {loading ? "Checking..." : "Enter ➜"}
            </button>
          </form>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-retro text-2xl text-primary font-bold">
            {siteConfig.pages.private?.emoji || "🔓"} {siteConfig.pages.private?.title || "Private"}
          </h1>
          <button
            onClick={handleLogout}
            className="font-retro text-xs px-3 py-1 border-2 border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
          >
            Lock 🔒
          </button>
        </div>
        <ul className="space-y-2 font-retro text-sm">
          {(siteConfig.pages.private?.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span className="text-foreground">{typeof item === "string" ? item : item}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};

export default PrivatePage;
