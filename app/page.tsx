const links = [
  { label: "github", href: "https://github.com/A-Kimpton" },
  { label: "kimpton.io", href: "https://kimpton.io" },
  { label: "email", href: "mailto:antony@kimpton.io" },
];

const stack = [
  "software engineer @ Ctrl Hub",
  "homelab — hetzner + proxmox + raspberry pis",
  "ai workflows, voice pipelines, personal tooling",
  "side projects: games tools, family sites, crypto",
];

export default function Home() {
  return (
    <main>
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "520px",
          width: "100%",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ color: "var(--muted)", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
            ~/antony
          </div>
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Antony Kimpton
          </h1>
          <div style={{ color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            software engineer · uk
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "1.5rem" }} />

        {/* What I do */}
        <div style={{ marginBottom: "1.5rem" }}>
          {stack.map((line) => (
            <div key={line} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.4rem", fontSize: "0.85rem" }}>
              <span style={{ color: "var(--dim)" }}>▸</span>
              <span style={{ color: "var(--text)" }}>{line}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "1.25rem" }} />

        {/* Links */}
        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="profile-link"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
