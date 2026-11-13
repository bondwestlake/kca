import React from 'react'

const features = [
  { icon: '⚡', title: 'No-code builder', desc: 'Design robot behaviors with a visual drag-and-drop editor.' },
  { icon: '🧠', title: 'AI training', desc: 'Train models on your data with one click — no ML expertise needed.' },
  { icon: '🚀', title: 'One-click deploy', desc: 'Ship your robot to the cloud or edge devices instantly.' },
  { icon: '🔌', title: 'Integrations', desc: 'Connect sensors, APIs, and hardware out of the box.' },
  { icon: '📊', title: 'Analytics', desc: 'Monitor performance and usage with real-time dashboards.' },
  { icon: '🔒', title: 'Secure by default', desc: 'Enterprise-grade encryption and access controls.' },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Everything you need to build AI robots</h2>
          <p>From idea to deployment, RoboForge covers the full lifecycle.</p>
        </div>
        <div className="grid grid-3">
          {features.map((f) => (
            <div className="card feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
