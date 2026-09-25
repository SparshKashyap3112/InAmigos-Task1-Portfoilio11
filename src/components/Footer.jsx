import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Send, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer({ onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      onShowToast('Please enter a valid email address for our newsletter.', 'error');
      return;
    }

    setSubscribed(true);
    onShowToast('Subscribed to NexaAI Intelligence Briefing!', 'success');
    setNewsletterEmail('');
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo} onClick={(e) => scrollTo(e, '#home')}>
              <div className={styles.logoIcon}>
                <Sparkles size={18} className={styles.sparkleIcon} />
              </div>
              <span className={styles.logoText}>
                Nexa<span className={styles.logoAccent}>AI</span>
              </span>
            </a>

            <p className={styles.brandDesc}>
              Empowering next-generation enterprises with autonomous AI agents, real-time predictive analytics, and high-performance cloud intelligence.
            </p>

            <div className={styles.systemStatusBadge}>
              <span className="status-beacon"></span>
              <span>All Neural Mesh Services Nominal</span>
            </div>

            {/* Social Icons */}
            <div className={styles.socialRow}>
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12" rx="1"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Discord */}
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Discord">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 9.8 9.8 0 0 0-.5 1.5 13.9 13.9 0 0 0-3 0 9.8 9.8 0 0 0-.5-1.5A14.5 14.5 0 0 0 6 6C3.5 10 3 14 3.5 18a14.9 14.9 0 0 0 4.5 2.3 11 11 0 0 0 1-1.6 9.6 9.6 0 0 1-1.6-.8l.4-.3c3.1 1.5 6.5 1.5 9.6 0l.4.3a9.6 9.6 0 0 1-1.6.8 11 11 0 0 0 1 1.6 14.9 14.9 0 0 0 4.5-2.3C21 14 20.5 10 18 6Z"/>
                  <circle cx="8.5" cy="12" r="1.5"/>
                  <circle cx="15.5" cy="12" r="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.navCol}>
            <h4 className={styles.colHeading}>Navigation</h4>
            <ul className={styles.footerList}>
              <li><a href="#home" onClick={(e) => scrollTo(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Capabilities</a></li>
              <li><a href="#solutions" onClick={(e) => scrollTo(e, '#solutions')}>Solutions Lifecycle</a></li>
              <li><a href="#why-us" onClick={(e) => scrollTo(e, '#why-us')}>The Advantage</a></li>
              <li><a href="#dashboard" onClick={(e) => scrollTo(e, '#dashboard')}>Live Console</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact Architects</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className={styles.navCol}>
            <h4 className={styles.colHeading}>AI Solutions</h4>
            <ul className={styles.footerList}>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Autonomous AI Automation</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Intelligent Predictive Analytics</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Enterprise AI Chatbots</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Custom Domain Fine-Tuning</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Reactive Web & App UI</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Serverless GPU Mesh</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colHeading}>Intelligence Briefing</h4>
            <p className={styles.newsletterText}>
              Get monthly insights on generative AI breakthroughs, autonomous agents, and enterprise architecture.
            </p>

            {subscribed ? (
              <div className={styles.subscribedNote}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>You're subscribed to NexaAI Briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <div className={styles.subscribeInputWrapper}>
                  <input
                    type="email"
                    placeholder="Enter business email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={styles.subscribeInput}
                    aria-label="Email for newsletter subscription"
                  />
                  <button type="submit" className={styles.subscribeBtn} aria-label="Subscribe">
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}

            <span className={styles.privacyNote}>
              <Shield size={12} />
              Strict zero-spam policy. Unsubscribe anytime.
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} NexaAI Technologies Inc. All rights reserved. Created for AI Website Generation.
          </p>

          <div className={styles.legalLinks}>
            <a href="#home" onClick={(e) => { e.preventDefault(); onShowToast('Privacy Policy: All data processed with zero-knowledge encryption.', 'info'); }}>Privacy Policy</a>
            <span className={styles.legalDot}>•</span>
            <a href="#home" onClick={(e) => { e.preventDefault(); onShowToast('Terms of Service: Enterprise SOC2 Level 3 Service Agreements.', 'info'); }}>Terms of Service</a>
            <span className={styles.legalDot}>•</span>
            <a href="#home" onClick={(e) => { e.preventDefault(); onShowToast('Security Whitepaper v3.5 available for download.', 'info'); }}>Security Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
