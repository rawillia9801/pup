import { CheckCircle2, CircleX, Heart } from "lucide-react";

export function SectionTitle({ children, action }) {
  return <div className="section-title"><h2>{children} <span>♡</span></h2>{action}</div>;
}

export function InfoCard({ icon: Icon = Heart, title, children, className = "" }) {
  return (
    <article className={`info-card ${className}`}>
      <div className="icon-badge"><Icon size={28} /></div>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export function List({ items, good = false, bad = false }) {
  const Icon = bad ? CircleX : good ? CheckCircle2 : null;
  return (
    <ul className={Icon ? "icon-list" : "dot-list"}>
      {items.map((item) => <li key={item}>{Icon && <Icon size={17} />}<span>{item}</span></li>)}
    </ul>
  );
}

export function QuickTopicRow({ topics }) {
  return (
    <section className="quick-row">
      {topics.map(({ icon: Icon, title, text }) => (
        <div className="quick-item" key={title}>
          {Icon && <Icon size={35} />}
          <div><h3>{title}</h3>{text && <p>{text}</p>}</div>
        </div>
      ))}
    </section>
  );
}

export function StatRow({ items }) {
  return (
    <section className="stat-row">
      {items.map(({ icon: Icon, title, text }) => (
        <div className="stat-item" key={title}>
          {Icon && <Icon size={39} />}
          <div><strong>{title}</strong><p>{text}</p></div>
        </div>
      ))}
    </section>
  );
}

export function StepGrid({ steps, columns = "seven" }) {
  return (
    <section className={`step-grid ${columns}`}>
      {steps.map((step, index) => (
        <article className="step-card" key={step.title}>
          <span className="step-number">{index + 1}</span>
          {step.icon && <step.icon size={48} />}
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          {step.items && <List items={step.items} />}
        </article>
      ))}
    </section>
  );
}
