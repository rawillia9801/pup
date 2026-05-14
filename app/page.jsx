import { AlertTriangle, Binoculars, Bone, Droplet, Eye, Heart, Shield, Stethoscope, Syringe, Utensils } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InfoCard, List, QuickTopicRow } from "../components/Cards";

const quick = [
  { icon: Droplet, title: "What Hypoglycemia Is", text: "Understand dangerously low blood sugar and why it happens fast." },
  { icon: Binoculars, title: "Signs to Look For", text: "Recognize early warning signs before it becomes critical." },
  { icon: Syringe, title: "How to Administer Pup-Lift", text: "Step-by-step instructions for fast, safe support." },
  { icon: Heart, title: "What to Do After", text: "Aftercare steps to help your puppy recover safely." },
  { icon: Shield, title: "Prevention Tips", text: "Simple daily habits to help keep your puppy healthy." },
  { icon: AlertTriangle, title: "Important Disclaimer", text: "Know when to contact a veterinarian." }
];

export default function HomePage() {
  return (
    <PageShell active="/">
      <PageHero
        title={"Pup-Lift:<br /><em>Emergency Support<br />for Hypoglycemia Episodes</em>"}
        body="Fast, calm guidance for Chihuahua owners when a puppy becomes weak, limp, cold, shaky, or unresponsive."
        image="/images/home-hero.png"
        primary={{ label: "Start Emergency Steps", href: "/emergency-steps" }}
        secondary={{ label: "Learn Prevention", href: "/prevention" }}
        sideCard={<><h3>Puppy unresponsive?<br /><em>♡ Start here.</em></h3><ol><li>Warm the puppy gently but quickly.</li><li>Rub Pup-Lift on gums or under tongue.</li><li>Monitor closely and call a veterinarian.</li></ol><p className="script">Act fast. You can save your puppy's life.</p></>}
      />
      <p className="trust-note">♡ Created for tiny hearts. Backed by experience.</p>
      <QuickTopicRow topics={quick} />
      <section className="card-grid home-main-grid">
        <InfoCard icon={Droplet} title="1. What Is Hypoglycemia?"><p>Hypoglycemia is dangerously low blood sugar. In tiny puppies, especially toy Chihuahuas, it can happen suddenly and progress quickly.</p><div className="note-card">It is a medical emergency. Quick action can save your puppy's life.</div></InfoCard>
        <InfoCard icon={Bone} title="2. Common Causes"><List items={["Missed meals or not eating enough", "Stress or excitement", "Getting chilled", "Overexertion", "Illness or infection", "Vomiting or diarrhea"]} /></InfoCard>
        <InfoCard icon={AlertTriangle} title="3. Warning Signs"><List items={["Weakness", "Wobbling", "Crying", "Lethargy", "Cold body", "Glassy eyes", "Tremors or shaking", "Collapse", "Seizures", "Unresponsiveness"]} /></InfoCard>
        <InfoCard icon={Syringe} title="4. How to Administer Pup-Lift"><img className="bottle-float" src="/images/pup-lift-bottle.png" alt="Pup-Lift bottle" /><List items={["Shake gently and make sure the dropper is clean.", "Place a small amount on the gums or under the tongue.", "Do not force large amounts if swallowing is poor.", "Repeat tiny amounts every few minutes as needed.", "Once alert, offer a small meal."]} /></InfoCard>
        <InfoCard icon={Heart} title="5. After Administering"><List items={["Keep your puppy warm and comfortable.", "Observe closely for improvement.", "Offer a small meal once your puppy is alert.", "Continue monitoring for 30-60 minutes.", "Contact your veterinarian if symptoms persist."]} /></InfoCard>
        <InfoCard icon={Utensils} title="6. Prevention Matters"><List items={["Feed small, frequent meals throughout the day.", "Keep your puppy warm and cozy.", "Watch for early signs and act immediately.", "Avoid overexertion and stress.", "Monitor very small puppies extra closely."]} /></InfoCard>
      </section>
      <section className="feature-row">
        <div className="feature-panel"><div className="text"><h2>Preventable, But Serious ♡</h2><p>Hypoglycemia is preventable with proper observation and care, but it can and does happen, and it can be deadly if not treated quickly.</p><div className="note-card">Hypoglycemia is not covered under the health guarantee because it is considered preventable.</div></div><img src="/images/home-sleeping-puppy.png" alt="Sleeping Chihuahua puppy in a blanket" /></div>
        <div className="feature-panel qr"><div className="text"><h2>Scan the bottle for <em>instant instructions</em> ♡</h2><p>Every Pup-Lift bottle includes a QR code that links to emergency steps, video demos, and printable guides.</p></div><img src="/images/home-qr-bottle.png" alt="Phone and Pup-Lift bottle with QR code" /></div>
      </section>
      <section className="journey"><h2>A Simple Emergency Journey ♡</h2>{["Notice Symptoms", "Administer Pup-Lift", "Warm & Monitor", "Feed & Follow Up"].map((title, i) => <div className="journey-step" key={title}><span className="num">{i + 1}</span><div><h3>{title}</h3><p>{["Recognize the warning signs early and act quickly.", "Place small amount on gums or under tongue.", "Keep warm, watch closely, and repeat if needed.", "Once alert, offer food and continue monitoring."][i]}</p></div></div>)}</section>
      <section className="feature-row">
        <div className="faq-panel"><h2>Frequently Asked Questions ♡</h2><div className="card-grid three-mini"><InfoCard title="How often should I give it?"><p>Give a small amount every few minutes as needed until your puppy improves.</p></InfoCard><InfoCard title="When should I call a vet?"><p>Call if symptoms do not improve, return, or if your puppy has a seizure or cannot swallow.</p></InfoCard><InfoCard title="Can I use it if my puppy is cold?"><p>Yes. Warm your puppy while administering Pup-Lift.</p></InfoCard></div></div>
        <div className="feature-panel"><div className="text"><h2>From Southwest Virginia Chihuahua ♡</h2><p>Every new owner receives Pup-Lift because we care about your puppy's safety and your peace of mind.</p><p><em>- The SWVA Chihuahua Family ♡</em></p></div><img src="/images/home-woman-chihuahua.png" alt="Woman holding a Chihuahua puppy" /></div>
      </section>
    </PageShell>
  );
}
