import Link from "next/link";
import { ArrowRight, Clock, Heart, Mail, MapPin, Phone, Shield, Share2, Users } from "lucide-react";
import { ContactForm } from "../../components/ContactForm";
import { InfoCard, QuickTopicRow } from "../../components/Cards";
import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell active="/contact" variant="swva">
      <PageHero
        wide
        eyebrow="We're Here for You. Always."
        title="Contact Us<br /><em>We Care. We Listen.</em>"
        body="Have a question about Pup-Lift, hypoglycemia, or your puppy's health and care? We're here to help and happy to support you every step of the way."
        image="/images/contact-hero.png"
      />
      <QuickTopicRow topics={[{ icon: Users, title: "We're Puppy People", text: "We understand how much your puppy means to you." }, { icon: Shield, title: "Trusted Guidance", text: "Our team is here to provide reliable information." }, { icon: Clock, title: "Quick Response", text: "We do our best to respond within 24 hours." }, { icon: Heart, title: "Here for You", text: "From first questions to forever homes." }]} />
      <section className="contact-layout">
        <div className="contact-panel"><h2>Send Us a Message ♡</h2><p>Fill out the form below and we'll get back to you as soon as possible.</p><ContactForm /></div>
        <aside className="contact-panel"><h2>Other Ways to Reach Us ♡</h2>
          <div className="reach-item"><span className="icon-badge"><Mail size={25} /></span><div><h3>Email Us</h3><p>info@swvachihuahua.com<br />We respond within 24 hours.</p></div></div>
          <div className="reach-item"><span className="icon-badge"><Phone size={25} /></span><div><h3>Call or Text Us</h3><p><strong>1-855-506-5425</strong><br />Mon-Fri: 9am - 6pm EST<br />Sat: 10am - 2pm EST</p></div></div>
          <div className="reach-item"><span className="icon-badge"><MapPin size={25} /></span><div><h3>Our Location</h3><p>Marion, Virginia<br />Serving families nationwide</p></div></div>
          <div className="reach-item"><span className="icon-badge"><Share2 size={25} /></span><div><h3>Follow Our Journey</h3><p>Stay connected for puppy updates, care tips, and behind-the-scenes.</p><div className="socials"><a href="#">f</a><a href="#">◎</a><a href="#">♪</a><a href="#">▶</a></div></div></div>
          <div className="reach-item"><span className="icon-badge"><Heart size={25} /></span><div><h3>Pup-Lift Help Center</h3><p>Find resources, guides, and FAQs on our Pup-Lift pages.</p><Link className="coral-btn" href="/">Go to Pup-Lift <ArrowRight size={15} /></Link></div></div>
        </aside>
      </section>
      <section className="reassurance"><img src="/images/home-hero.png" alt="Chihuahua puppy resting on a soft blanket" /><div><h2>You're Never Alone in This. ♡</h2><p>We're honored to be part of your puppy's life. Thank you for trusting Southwest Virginia Chihuahua.</p></div><p className="script-line">Tiny hearts.<br />Lifelong love. ♡</p></section>
    </PageShell>
  );
}
