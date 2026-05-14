import { AlertTriangle, Ban, Clock, Heart, HeartPulse, Phone, ShieldX, Stethoscope, Syringe, Thermometer, Utensils, Zap } from "lucide-react";
import { PageShell } from "../../components/PageShell";
import { PageHero } from "../../components/PageHero";
import { InfoCard, List, QuickTopicRow, SectionTitle, StatRow, StepGrid } from "../../components/Cards";

export default function EmergencyPage() {
  const steps = [
    { title: "Stay Calm & Check Your Puppy", text: "Check for signs your puppy may have low blood sugar.", items: ["Weak or limp", "Cold or trembling", "Glassy-eyed", "Wobbly or collapsed", "Unresponsive"] },
    { icon: Heart, title: "Warm the Puppy", text: "Wrap your puppy in a soft blanket and hold against your body. Use gentle warmth, never heat." },
    { icon: Syringe, title: "Administer Pup-Lift", text: "Place a very small amount on the gums or under the tongue. Rub gently." },
    { title: "Repeat Small Amounts if Needed", text: "Repeat tiny amounts every 3-5 minutes as needed until your puppy starts responding." },
    { icon: Utensils, title: "Once Alert, Offer Food", text: "Once awake and able to swallow, offer a small meal or food. Do not feed if weak." },
    { title: "Monitor Closely", text: "Watch your puppy closely for 30-60 minutes. Keep warm and comfortable." },
    { title: "Contact a Veterinarian", text: "Call immediately for severe symptoms, worsening signs, or no improvement." }
  ];
  return (
    <PageShell active="/emergency-steps">
      <div className="emergency-page">
        <PageHero title="Emergency Steps" subtitle="What to do when your puppy is weak, cold, shaky, collapsed, or unresponsive." body="Fast action can save your puppy's life. Stay calm, warm your puppy, apply Pup-Lift to the gums or under the tongue, and monitor closely while you prepare to contact your veterinarian." image="/images/emergency-hero.png" primary={{ label: "Start Step 1", href: "#steps" }} secondary={{ label: "When to Call a Vet", href: "/contact" }} sideCard={<><h3>If your puppy is unresponsive</h3><ol><li>Warm the puppy gently but quickly.</li><li>Rub Pup-Lift on the gums or under the tongue.</li><li>Wait briefly and watch for improvement.</li><li>Repeat tiny amounts every 3-5 minutes if needed.</li><li>Call your veterinarian or an emergency vet if symptoms are severe or not improving.</li></ol><p className="script">Stay calm. Act fast.<br />You can save a life.</p></>} />
        <QuickTopicRow topics={[{ icon: Clock, title: "Act within minutes", text: "Early action makes the biggest difference." }, { icon: Heart, title: "Warmth matters", text: "Gentle warmth helps stabilize recovery." }, { icon: Syringe, title: "Small amounts, repeated as needed", text: "Use tiny amounts and repeat as needed." }]} />
        <QuickTopicRow topics={[{ icon: Zap, title: "Immediate Action" }, { icon: ListIcon, title: "Step-by-Step Guide" }, { icon: Syringe, title: "Dose & Frequency" }, { icon: ShieldX, title: "What Not To Do" }, { icon: Heart, title: "Aftercare" }, { icon: AlertTriangle, title: "Emergency Warning Signs" }]} />
        <div id="steps"><StepGrid steps={steps} /></div>
        <section className="three-panels">
          <InfoCard icon={Syringe} title="Dose & Frequency"><img className="bottle-float small-bottle" src="/images/pup-lift-bottle.png" alt="Pup-Lift bottle" /><List items={["Use a small smear or a few drops at a time.", "Do not flood the mouth.", "Rub gently on gums or under the tongue.", "Repeat every 3-5 minutes as needed.", "Once alert, offer food."]} /></InfoCard>
          <InfoCard icon={Heart} title="DO"><List good items={["Keep puppy warm.", "Use small amounts.", "Rub on gums or under tongue.", "Watch breathing.", "Call the vet if needed."]} /></InfoCard>
          <InfoCard icon={Ban} title="DO NOT"><List bad items={["Do not pour large amounts into the mouth.", "Do not force swallowing.", "Do not wait too long if severe.", "Do not let puppy get chilled.", "Do not leave puppy unattended."]} /></InfoCard>
        </section>
        <SectionTitle>Emergency Warning Signs</SectionTitle>
        <section className="warning-grid">{["Seizures", "Collapse", "Blue or Very Pale Gums", "Inability to Swallow", "Unresponsiveness", "Repeated Episodes"].map((t) => <div className="mini-card" key={t}><AlertTriangle size={40} /><h3>{t}</h3><p>These signs need immediate veterinary care. Do not wait.</p></div>)}<div className="mini-card call-card"><Phone size={42} /><h3>Call Your Vet Immediately</h3><p>Proceed to emergency care without delay.</p></div></section>
        <SectionTitle>Aftercare: What to Do Next</SectionTitle>
        <StatRow items={[{ icon: Heart, title: "Warm & Observe", text: "Keep warm for at least 30-60 minutes." }, { icon: Utensils, title: "Feed a Small Meal", text: "Offer a balanced meal once alert." }, { icon: HeartPulse, title: "Keep Monitoring", text: "Watch closely for the rest of the day." }, { icon: Stethoscope, title: "Follow Up With Vet", text: "Schedule a check-up if needed." }]} />
        <div className="disclaimer"><span>Hypoglycemia is preventable with careful feeding, warmth, observation, and prompt action. <strong>It is not covered under the health guarantee because it is considered preventable.</strong></span><span>This page is emergency first-aid guidance and does not replace veterinary care.</span></div>
        <SectionTitle action={<a href="/faq">View All FAQs →</a>}>Frequently Asked Questions</SectionTitle>
        <section className="card-grid four"><InfoCard title="How often should I repeat Pup-Lift?"><p>Repeat every 3-5 minutes as needed until your puppy starts responding.</p></InfoCard><InfoCard title="What if my puppy is cold?"><p>Warm gently with blankets and body heat. Avoid direct or high heat.</p></InfoCard><InfoCard title="When should I go to the emergency vet?"><p>Go immediately for seizures, collapse, unresponsiveness, or no quick improvement.</p></InfoCard><InfoCard title="What if my puppy improves and then declines?"><p>Repeat steps and contact your vet right away.</p></InfoCard></section>
      </div>
    </PageShell>
  );
}

function ListIcon(props) {
  return <Clock {...props} />;
}
