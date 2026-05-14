import Link from "next/link";
import { ArrowRight, Heart, Mail, Shield, Syringe } from "lucide-react";
import { FAQAccordion } from "../../components/FAQAccordion";
import { PageShell } from "../../components/PageShell";
import { PageHero } from "../../components/PageHero";

const faqs = [
  ["What is hypoglycemia in puppies?", "Hypoglycemia is a dangerous drop in blood sugar. It can happen quickly in tiny puppies because their bodies have small energy reserves and fast metabolisms. Without prompt treatment, it can lead to seizures, coma, or even death."],
  ["How do I know if my puppy has hypoglycemia?", "Watch for weakness, wobbling, glassy eyes, crying, shaking, cold body, collapse, seizures, or unresponsiveness."],
  ["How often does hypoglycemia happen in puppies?", "It is most common in very small toy-breed puppies, especially during stress, missed meals, cold temperatures, or illness."],
  ["Is hypoglycemia covered under the health guarantee?", "No. Hypoglycemia is considered preventable with proper feeding, warmth, and observation, so it is not covered under the health guarantee."],
  ["How is Pup-Lift (Karo Syrup) different from sugar or honey?", "Pup-Lift is packaged for quick, clean emergency use with instructions close at hand. It is still a sugar support and does not replace veterinary care."],
  ["How much Pup-Lift should I give my puppy?", "Use only a tiny smear or a few drops at a time on the gums or under the tongue. Do not flood the mouth."],
  ["How often can I repeat doses if needed?", "Repeat tiny amounts every 3-5 minutes as needed while watching for improvement and preparing to call your veterinarian."],
  ["Can I use Pup-Lift preventively?", "Do not rely on syrup as prevention. Feed on schedule, keep your puppy warm, limit stress, and keep Pup-Lift nearby for emergencies."],
  ["What if my puppy won't swallow the syrup?", "Do not force swallowing. Rub a tiny amount on the gums or under the tongue and contact a veterinarian immediately."],
  ["When should I contact my veterinarian?", "Call immediately for seizures, collapse, unresponsiveness, inability to swallow, worsening signs, or symptoms that do not improve quickly."],
  ["Can hypoglycemia cause long-term damage?", "A quick response can help prevent serious outcomes, but severe or prolonged episodes can be dangerous and require veterinary guidance."],
  ["Should I keep Pup-Lift with me when I travel?", "Yes. Travel can raise stress and disrupt routines, so keep Pup-Lift and emergency contact information nearby."],
  ["How should I store Pup-Lift?", "Store it according to the bottle directions, sealed and clean, where it is easy to reach quickly."],
  ["Where can I learn more?", "Read the emergency, prevention, and aftercare pages, and contact the Southwest Virginia Chihuahua team with questions."]
].map(([q, a]) => ({ q, a }));

export default function FAQPage() {
  return (
    <PageShell active="/faq" variant="swva">
      <PageHero
        wide
        eyebrow="Knowledge. Preparedness. Peace of Mind."
        title="FAQ<br /><em>We're Here to Help</em>"
        body={"Find quick answers to the most common questions about hypoglycemia and using Pup-Lift. Can't find what you need? Contact our team - we're happy to help."}
        image="/images/faq-hero.png"
        primary={{ label: "Contact Our Team", href: "/contact" }}
      />
      <section className="faq-layout">
        <div className="faq-panel">
          <h2>Frequently Asked Questions ♡</h2>
          <FAQAccordion faqs={faqs} />
          <div className="faq-bottom"><p><strong>Still have questions?</strong> We're here to help!<br />Contact our team - we're happy to assist you.</p><Link href="/contact" className="coral-btn"><Mail size={16} /> Contact Our Team <ArrowRight size={16} /></Link></div>
        </div>
        <aside className="sidebar">
          <div className="soft-card"><h3>Need Immediate Help? ♡</h3><p>If your puppy is unresponsive or having a medical emergency, follow our Emergency Steps right away.</p><Link className="coral-btn" href="/emergency-steps">Go to Emergency Steps <ArrowRight size={15} /></Link></div>
          <div className="soft-card"><h3><Shield size={24} /> Important Reminder</h3><p>Hypoglycemia is preventable with proper care, nutrition, and observation, but it can and does happen.</p><p><strong>Quick action saves lives.</strong></p><p>Be prepared. You've got this. We're here for you. ♡</p></div>
          <div className="soft-card product-small"><div><h3>Pup-Lift Always Within Reach</h3><p>Fast-acting glucose source</p><p>Easy-to-use dropper bottle</p><p>Made for tiny puppies</p><p>Designed for emergencies</p></div><img src="/images/pup-lift-bottle.png" alt="Pup-Lift bottle" /></div>
          <div className="soft-card"><h3>The Southwest Virginia Chihuahua Promise ♡</h3><p>We're committed to your success and your puppy's well-being. You're never alone in this journey.</p></div>
        </aside>
      </section>
    </PageShell>
  );
}
