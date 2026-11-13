import React from 'react'

const plans = [
  { name: 'Starter', price: '$0', period: '/mo', desc: 'For hobbyists and prototypes.', features: ['1 robot', 'Community support', 'Basic AI models'], cta: 'Start free', highlight: false },
  { name: 'Pro', price: '$29', period: '/mo', desc: 'For growing teams.', features: ['Unlimited robots', 'Advanced AI training', 'Priority support', 'Analytics'], cta: 'Go Pro', highlight: true },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For organizations at scale.', features: ['SSO & SAML', 'Dedicated support', 'On-prem deploy', 'SLA'], cta: 'Contact sales', highlight: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Simple, transparent pricing</h2>
          <p>Start free. Scale when you’re ready.</p>
        </div>
        <div className="grid grid-3 pricing-grid">
          {plans.map((p) => (
            <div className={`card pricing-card ${p.highlight ? 'highlight' : ''}`} key={p.name}>
              {p.highlight && <span className="badge">Most popular</span>}
              <h3>{p.name}</h3>
              <div className="price"><span className="amount">{p.price}</span><span className="period">{p.period}</span></div>
              <p className="plan-desc">{p.desc}</p>
              <ul className="plan-features">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline'} btn-block`} href="#top">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
