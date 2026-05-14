import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer({ variant = "pup", active = "/" }) {
  const swva = variant === "swva";
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Logo variant={swva ? "swva" : "pup"} />
          <p className="script-line">Tiny hearts. Lifelong love. <span aria-hidden>♡</span></p>
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="TikTok">♪</a>
            <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            {swva && <a href="mailto:info@swvachihuahua.com" aria-label="Email"><Mail size={16} /></a>}
          </div>
        </div>
        <div>
          <h3>{swva ? "Pup-Lift Education" : "Quick Links"}</h3>
          <Link href="/">Home</Link>
          <Link href="/what-is-hypoglycemia">What Is Hypoglycemia</Link>
          <Link href="/emergency-steps">Emergency Steps</Link>
          <Link href="/prevention">Prevention</Link>
          <Link href="/aftercare">Aftercare</Link>
          <Link href="/faq" className={active === "/faq" ? "active" : ""}>FAQ</Link>
          <Link href="/contact" className={active === "/contact" ? "active" : ""}>Contact</Link>
        </div>
        <div>
          <h3>{swva ? "Southwest Virginia Chihuahua" : "Emergency Reminder"} <span>♡</span></h3>
          {swva ? (
            <>
              <Link href="/">Home</Link>
              <a href="#">Available Puppies</a>
              <a href="#">About Our Program</a>
              <a href="#">Application</a>
              <Link href="/contact">Contact Us</Link>
            </>
          ) : (
            <div className="note-card small-note">Act fast. Stay calm.<br />You can save a life.<br /><br />If your puppy is unresponsive or having seizures, call your veterinarian immediately.</div>
          )}
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><Phone size={15} /> 1-855-506-5425</p>
          <p><Mail size={15} /> info@swvachihuahua.com</p>
          <p><MapPin size={15} /> Marion, Virginia<br />Serving families nationwide</p>
        </div>
        <div className="footer-card">
          <h3>{swva ? "Have Questions?" : "Part of the SWVA Family"}</h3>
          <p>{swva ? "We're happy to help!" : "Pup-Lift is provided to every new puppy family from Southwest Virginia Chihuahua."}</p>
          <Link href={swva ? "/contact" : "/"} className={swva ? "coral-btn" : "ghost-btn"}>{swva ? "Contact Our Team" : "SWVA Chihuahua"}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 {swva ? "Southwest Virginia Chihuahua" : "Pup-Lift.com"}. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | {!swva && <a href="#">Veterinary Disclaimer</a>}</span>
        <span aria-hidden>♡</span>
      </div>
    </footer>
  );
}
