"use client";

import { useState } from "react";
import { ChevronDown, Droplet, Heart, HelpCircle } from "lucide-react";

const icons = [Droplet, HelpCircle, Heart];

export function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const Icon = icons[index % icons.length];
        const expanded = open === index;
        return (
          <div className={`faq-item ${expanded ? "open" : ""}`} key={faq.q}>
            <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
              <span className="icon-badge"><Icon size={24} /></span>
              <span>{faq.q}</span>
              <ChevronDown size={17} />
            </button>
            {expanded && <p>{faq.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
