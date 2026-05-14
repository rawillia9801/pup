import { AlertTriangle, Droplet, Heart, Thermometer, Utensils } from "lucide-react";
import { PageShell } from "../../components/PageShell";
import { PageHero } from "../../components/PageHero";
import { InfoCard, List, QuickTopicRow } from "../../components/Cards";

export default function WhatIsPage() {
  return (
    <PageShell active="/what-is-hypoglycemia">
      <PageHero
        title="What Is Hypoglycemia?"
        subtitle="Tiny bodies can run out of energy quickly."
        body="Hypoglycemia means dangerously low blood sugar. Toy-breed puppies have small energy reserves, so missed meals, chilling, stress, or illness can cause a rapid drop."
        image="/images/home-hero.png"
        primary={{ label: "Start Emergency Steps", href: "/emergency-steps" }}
        secondary={{ label: "Learn Prevention", href: "/prevention" }}
        sideCard={<><h3>Watch closely</h3><ol><li>Weak or limp body.</li><li>Cold, shaky, or glassy-eyed.</li><li>Not eating or unable to swallow.</li><li>Collapse, seizure, or unresponsive behavior.</li></ol></>}
      />
      <QuickTopicRow topics={[{ icon: Droplet, title: "Low Blood Sugar", text: "Glucose powers the brain and body." }, { icon: Thermometer, title: "Warmth Matters", text: "Cold puppies burn energy quickly." }, { icon: Utensils, title: "Food Helps", text: "Small meals support steady energy." }, { icon: Heart, title: "Fast Action", text: "Early support can save a life." }]} />
      <section className="card-grid">
        <InfoCard icon={Droplet} title="Why It Happens"><p>Tiny puppies have limited reserves and fast metabolisms. A skipped meal, excitement, travel, cold drafts, or stomach upset can trigger a sudden blood sugar drop.</p></InfoCard>
        <InfoCard icon={AlertTriangle} title="Why It Is Serious"><p>Low blood sugar can lead to weakness, collapse, seizures, coma, or death without prompt support. Treat it like an emergency.</p></InfoCard>
        <InfoCard icon={Heart} title="What To Do First"><List items={["Warm the puppy gently.", "Rub Pup-Lift on gums or under the tongue.", "Repeat tiny amounts if needed.", "Call your veterinarian if severe or not improving."]} /></InfoCard>
      </section>
      <div className="disclaimer"><span>Hypoglycemia is often preventable with feeding, warmth, and observation.</span><strong>It is not covered under the health guarantee because it is considered preventable.</strong></div>
    </PageShell>
  );
}
