import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark">◈</span>
            <span className="brand-name">RoboForge</span>
          </a>
          <p>Build the future of robotics, one robot at a time.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#showcase">Showcase</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#faq">FAQ</a>
            <a href="#">Docs</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} RoboForge. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
