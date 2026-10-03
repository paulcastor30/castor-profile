import { useRef, useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Contact() {
  const emailField = useRef<HTMLInputElement>(null);
  const [copyMessage, setCopyMessage] = useState({ text: "", attempt: 0 });

  async function copyEmail() {
    let text: string;
    try {
      await navigator.clipboard.writeText(profile.email);
      text = "Email address copied. Paste it into your email app.";
    } catch {
      emailField.current?.focus();
      emailField.current?.select();
      text = "Your browser could not copy the address. It is selected in the email field. Use your device’s Copy command, or press Control+C on Windows or Command+C on Mac.";
    }
    setCopyMessage(previous => ({ text, attempt: previous.attempt + 1 }));
  }

  return (
    <section id="contact" tabIndex={-1} className="portfolio-section contact-section" aria-labelledby="contact-title">
      <div className="portfolio-container contact-layout">
        <div>
          <p className="eyebrow">Say hello</p>
          <h2 id="contact-title">Contact me</h2>
          <p className="contact-intro">Have a project in mind, a research idea, or a question? I’d be happy to hear from you. You don’t need to know the technical terms to get in touch.</p>
          <p className="contact-help">You can write to me in English, Filipino, or Cebuano.</p>
        </div>
        <div className="contact-options">
          <label className="email-label" htmlFor="contact-email">My email address</label>
          <input ref={emailField} id="contact-email" className="email-field" type="text" value={profile.email} readOnly spellCheck={false} aria-describedby="email-help" onFocus={event => event.currentTarget.select()} />
          <div className="actions">
            <a className="primary-action" href={`mailto:${profile.email}`} aria-describedby="email-help">Email me <ArrowUpRight size={18} aria-hidden="true" /></a>
            <button className="text-action" type="button" onClick={copyEmail} aria-describedby="email-help"><Copy size={16} aria-hidden="true" /> Copy email address</button>
          </div>
          <p id="email-help" className="contact-help">“Email me” opens your email app. If you use email in a web browser, copy my address and paste it into a new message.</p>
          <p className="copy-message" role="status" aria-live="polite" aria-atomic="true"><span key={copyMessage.attempt}>{copyMessage.text}</span></p>
          <a className="text-link" href={profile.github}>My code and projects on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
          <p className="contact-help">If something on this website is difficult to read or use, you can email me about it.</p>
        </div>
      </div>
    </section>
  );
}
