"use client";

import { ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="two-fields">
        <label><span>First Name *</span><input required name="firstName" placeholder="First Name *" /></label>
        <label><span>Last Name *</span><input required name="lastName" placeholder="Last Name *" /></label>
      </div>
      <label><span>Email Address *</span><input required type="email" name="email" placeholder="Email Address *" /></label>
      <label><span>Phone Number (Optional)</span><input type="tel" name="phone" placeholder="Phone Number (Optional)" /></label>
      <label><span>Subject *</span><select required name="subject"><option value="">Subject</option><option>Pup-Lift question</option><option>Puppy care</option><option>Emergency guidance</option></select></label>
      <label><span>How can we help you? *</span><textarea required name="message" placeholder="Type your message here..." /></label>
      <label className="check-label"><input required type="checkbox" name="privacy" /> I have read and agree to the <a href="#">Privacy Policy</a>.</label>
      <button className="coral-btn submit-btn" type="submit">Send Message <ArrowRight size={16} /></button>
      <p className="form-note">♡ We treat every message with care.</p>
    </form>
  );
}
