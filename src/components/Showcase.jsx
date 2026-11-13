import React from 'react'

const robots = [
  { name: 'Scout', tag: 'Warehouse', desc: 'Autonomous inventory scanning and navigation.', color: '#6366f1' },
  { name: 'Companion', tag: 'Healthcare', desc: 'Assistive robot for patient care and monitoring.', color: '#ec4899' },
  { name: 'AgriBot', tag: 'Agriculture', desc: 'Precision farming with computer vision.', color: '#10b981' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Built with RoboForge</h2>
          <p>Real robots created by our community.</p>
        </div>
        <div className="grid grid-3">
          {robots.map((r) => (
            <div className="card robot-showcase" key={r.name}>
              <div className="robot-thumb" style={{ background: r.color }}>
                <div className="robot-face small">
                  <span className="eye" />
                  <span className="eye" />
                </div>
              </div>
              <div className="robot-meta">
                <span className="tag">{r.tag}</span>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
