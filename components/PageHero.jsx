import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle, body, image, sideCard, primary, secondary, wide = false }) {
  return (
    <section className={`hero ${wide ? "hero-wide" : ""}`}>
      <div className="hero-copy">
        {eyebrow && <p className="eyebrow">{eyebrow} <span>♡</span></p>}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {body && <p className="hero-body">{body}</p>}
        {(primary || secondary) && (
          <div className="hero-buttons">
            {primary && <Link className="teal-btn" href={primary.href}><Heart size={18} /> {primary.label}</Link>}
            {secondary && <Link className="ghost-btn" href={secondary.href}>{secondary.label} <ArrowRight size={16} /></Link>}
          </div>
        )}
      </div>
      <div className="hero-art">
        <img src={image} alt="" />
      </div>
      {sideCard && <aside className="hero-side-card">{sideCard}</aside>}
    </section>
  );
}
