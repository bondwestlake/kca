import React from 'react'

const testimonials = [
  { quote: 'RoboForge cut our robot development time from months to days.', name: 'Sarah Chen', role: 'CTO, LogiTech' },
  { quote: 'The no-code builder is a game changer for our small team.', name: 'Marcus Lee', role: 'Founder, AgriBot' },
  { quote: 'Deployment is seamless and the analytics are top-notch.', name: 'Priya Patel', role: 'Head of Eng, MedCare' },
]

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Loved by builders worldwide</h2>
          <p>Join thousands of teams building the future of robotics.</p>
        </div>
        <div className="grid grid-3">
          {testimonials.map((t) => (
            <div className="card testimonial-card" key={t.name}>
              <p className="quote">“{t.quote}”</p>
              <div className="author">
                <div className="avatar" aria-hidden="true">{t.name.charAt(0)}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span className="role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
