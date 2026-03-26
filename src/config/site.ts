// ═══════════════════════════════════════════════════════════
// 🎨 CUSTOMIZE YOUR SITE HERE — Edit this file to make it yours!
// ═══════════════════════════════════════════════════════════

export const siteConfig = {
  // Your display name / username
  username: "@blizzthewolf",

  // Window title shown in the title bar
  windowTitle: "Virtual PC Console",

  // Your website URL (shown in the bio)
  websiteUrl: "www.purplepanda.cc",

  // Bio text — use HTML for bold/colored text
  bio: `hi hi!! i'm <b class="text-primary">blizzard (blizz or blizzy is also okay)</b>, i'm <b class="text-primary">17 y/o</b> and 
  i loveee sports and plushies 🧷
  i speak eng/dutch
  i'm amab (he/him) and bi`,

  // Status message shown at the bottom of bio area
  statusMessage: "Currently cycling :3 (probably)",

  // Navigation links in the menu bar — href maps to routes
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Rules", href: "/rules" },
    { label: "Interests", href: "/interests" },
    { label: "Preferences", href: "/preferences" },
    { label: "Links", href: "/links" },
    { label: "Bookmarks", href: "/bookmarks" },
  ],

  // Social links shown on the Links page
  socialLinks: [
    {
      label: "twitter",
      url: "https://twitter.com/yourhandle",
      views: 4921,
      tag: "@Rules",
      image: "",
    },
    {
      label: "spotify",
      url: "https://open.spotify.com/user/you",
      views: 708,
      tag: "@Interests",
      image: "",
    },
    {
      label: "insta",
      url: "https://instagram.com/yourhandle",
      views: 880,
      tag: "@✨",
      image: "",
    },
  ],

  // Profile pictures shown in the carousel
  profilePics: [
    "/pfp-1.png",
    "/pfp-2.png",
    "pfp-3.jpg",
  ],

  // ═══════════════════════════════════════════════════════════
  // 📄 PAGE CONTENT — Edit the content for each page below
  // ═══════════════════════════════════════════════════════════

  pages: {
    rules: {
      title: "basic dni and rules",
      emoji: "📜",
      items: [
        "no under 14",
        "no homophobic, racist, antifur etc",
        "be respectful :3",
        "ask for dm pls",
        "be kind~ 💜",
      ],
    },
    interests: {
      title: "Interests",
      emoji: "✨",
      items: [
        "furry :3",
        "sports (triathlon)",
        "computers && servers",
        "music; basically all genres",
        "",
        "",
        "photography",
      ],
    },
    preferences: {
      title: "Preferences",
      emoji: "💫",
      items: [
        "☕ Coffee over tea",
        "🌙 Night owl",
        "🎨 Dark mode everything",
        "📖 Manga > anime",
        "🎵 Lo-fi & city pop",
        "🐱 Cats > dogs (sorry)",
      ],
    },
    bookmarks: {
      title: "Bookmarks",
      emoji: "🔖",
      items: [
        { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { label: "Dribbble", url: "https://dribbble.com" },
        { label: "Are.na", url: "https://www.are.na" },
        { label: "Coolors palette generator", url: "https://coolors.co" },
        { label: "Unsplash", url: "https://unsplash.com" },
      ],
    },
  },
};
