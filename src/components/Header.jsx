import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">◈</span>
          <span className="brand-name">RoboForge</span>
        </a>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#showcase">Showcase</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-ghost" href="#pricing">Sign in</a>
          <a className="btn btn-primary" href="#pricing">Get started</a>
        </div>
      </div>
    </header>
  )
}
