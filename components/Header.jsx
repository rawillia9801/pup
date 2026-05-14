import Link from "next/link";
import { ArrowLeft, Heart, Users } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  ["Home", "/"],
  ["What Is Hypoglycemia", "/what-is-hypoglycemia"],
  ["Emergency Steps", "/emergency-steps"],
  ["Prevention", "/prevention"],
  ["Aftercare", "/aftercare"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

export function Header({ active = "/", variant = "pup" }) {
  const isSwva = variant === "swva";
  return (
    <header className={`site-header ${isSwva ? "swva-header" : ""}`}>
      <Link href="/" className="logo-link"><Logo variant={isSwva ? "swva" : "pup"} /></Link>
      <nav className="main-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} className={active === href ? "active" : ""}>{label}</Link>
        ))}
      </nav>
      <div className="header-actions">
        {isSwva ? (
          <>
            <Link className="coral-btn small" href="/"><span>Pup-Lift Home</span><Heart size={15} /></Link>
            <Link className="ghost-btn small" href="/"><ArrowLeft size={14} /> Back to Main Site</Link>
          </>
        ) : (
          <>
            <Link className="teal-btn small" href="/emergency-steps">Emergency Steps <Heart size={15} /></Link>
            <Link className="ghost-btn small" href="/contact"><Users size={15} /> SWVA Chihuahua</Link>
          </>
        )}
      </div>
    </header>
  );
}
