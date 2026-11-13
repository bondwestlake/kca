import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="pill">AI-powered robotics</span>
          <h1>Build your own AI robot in minutes</h1>
          <p className="lead">
            RoboForge is the no-code platform to design, train, and deploy intelligent robots.
            Drag, drop, and ship — no engineering team required.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="#pricing">Start building free</a>
            <a className="btn btn-outline btn-lg" href="#showcase">See examples</a>
          </div>
          <div className="hero-stats">
            <div><strong>12k+</strong><span>Robots built</span></div>
            <div><strong>98%</strong><span>Success rate</span></div>
            <div><strong>4.9/5</strong><span>User rating</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="robot-card">
            <div className="robot-face">
              <span className="eye" />
              <span className="eye" />
            </div>
            <div className="robot-body">
              <span className="chip" />
              <span className="chip" />
              <span className="chip" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
