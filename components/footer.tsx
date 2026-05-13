import Link from "next/link";
import { Icon } from "./icon";

type FooterLink = {
  href: string;
  label: string;
};

const links: FooterLink[] = [
  { href: "https://github.com/DahlGitHub", label: "GitHub" },
  { href: "https://www.linkedin.com/in/dahladrian/", label: "LinkedIn" },
];

const FooterItems = () => {
  return (
    <div className="flex items-center gap-6">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}

          <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="relative ">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Home" className="group">
              <Icon
                name="Logo"
                className="h-7 w-7 opacity-80 transition-opacity group-hover:opacity-100"
              />
            </Link>

            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Adrian Dahl
            </span>
          </div>

          <FooterItems />
        </div>
      </div>
    </footer>
  );
}