import React, { useState } from 'react'

const faqs = [
  { q: 'Do I need coding experience?', a: 'No. RoboForge is designed for non-engineers with a visual builder and pre-built templates.' },
  { q: 'Can I deploy to my own hardware?', a: 'Yes. Enterprise plans support on-prem and edge device deployment.' },
  { q: 'What AI models are supported?', a: 'We support popular vision, language, and control models, plus custom training on your data.' },
  { q: 'Is there a free plan?', a: 'Yes, the Starter plan is free forever for prototypes and hobby projects.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container container-narrow">
        <div className="section-head">
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know before you start.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={item.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
