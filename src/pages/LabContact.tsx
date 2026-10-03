import Portrait from "@/components/Portrait";
import { useRef, useState } from "react";
import { laboratory, labHeads } from "@/data/laboratory";
import { LabAddress } from "@/components/LabShared";

function HeadContact({ name, email, id }: { name: string; email: string; id: string }) {
  const input = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState({ text: "", count: 0 });
  async function copy() {
    let text;
    try { await navigator.clipboard.writeText(email); text = `Email address for ${name} copied.`; }
    catch { input.current?.focus(); input.current?.select(); text = `The address for ${name} is selected. Use your device’s Copy command, or Control+C on Windows or Command+C on Mac.`; }
    setMessage(previous => ({ text, count: previous.count + 1 }));
  }
  return <article className="lab-contact-card"><Portrait name={name} className="head-portrait" optional /><p className="eyebrow">Lab co-head</p><h2>{name}</h2><label className="email-label" htmlFor={id}>Email address for {name}</label><input id={id} ref={input} className="email-field" type="text" readOnly value={email} spellCheck={false} onFocus={event => event.currentTarget.select()} aria-describedby="lab-email-help" /><div className="actions"><a className="primary-action" href={`mailto:${email}`} aria-describedby="lab-email-help">Email {name}</a><button type="button" className="text-action" onClick={copy}>Copy email for {name}</button></div><p role="status" aria-live="polite" aria-atomic="true" className="copy-message"><span key={message.count}>{message.text}</span></p></article>;
}

export default function LabContact() {
  return <section className="portfolio-container lab-page"><p className="eyebrow">Questions and collaboration</p><h1>Contact the laboratory</h1><p className="lab-lede">You can contact either lab head about research, thesis groups, or potential collaborations. You don’t need to know the technical terms to get in touch.</p><p id="lab-email-help" className="lab-explanation">Email links open your email app. If you use email in a web browser, copy an address and paste it into a new message.</p><div className="lab-head-grid">{labHeads.map((head, index) => <HeadContact key={head.name} {...head} id={`lab-email-${index}`} />)}</div><section className="lab-location"><h2>Lab address</h2><LabAddress /><p>If something on this website is difficult to read or use, you can tell either lab head by email.</p></section></section>;
}
