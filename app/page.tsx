import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      <Card className="max-w-[520px] w-full font-mono text-sm border-border">
        <CardHeader className="pb-0">
          <div className="text-xs text-muted-foreground">~/antony</div>
          <h1 className="text-[1.4rem] font-bold text-foreground mt-0">Antony Kimpton</h1>
          <div className="text-[0.85rem]" style={{ color: "#a78bfa" }}>
            software engineer · uk
          </div>
        </CardHeader>

        <Separator className="mx-4 w-auto" />

        <CardContent className="flex flex-col gap-[0.4rem]">
          {stack.map((line) => (
            <div key={line} className="flex gap-3">
              <span className="text-[#333]">▸</span>
              <span className="text-foreground">{line}</span>
            </div>
          ))}
        </CardContent>

        <Separator className="mx-4 w-auto" />

        <CardContent className="flex gap-5 flex-wrap pb-4">
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
        </CardContent>
      </Card>
    </main>
  );
}
