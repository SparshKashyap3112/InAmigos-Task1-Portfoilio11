import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';
import styles from './CallToAction.module.css';

export default function CallToAction({ onOpenDemo }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        {/* Glowing Background Radial */}
        <div className={styles.ctaAmbientGlow}></div>

        <div className={`glass-panel ${styles.ctaCard}`}>
          {/* Top Tag */}
          <div className={styles.ctaTag}>
            <Sparkles size={14} />
            <span>Accelerate Your Transformation</span>
          </div>

          {/* Heading */}
          <h2 className={styles.ctaTitle}>
            Ready to <span className="gradient-text">Build the Future?</span>
          </h2>

          {/* Supporting Text */}
          <p className={styles.ctaText}>
            Turn your ideas into intelligent digital experiences with NexaAI. Deploy autonomous agents, optimize complex data pipelines, and unlock unprecedented operational velocity.
          </p>

          {/* Action Buttons */}
          <div className={styles.ctaButtons}>
            <button 
              className="btn btn-primary btn-glow"
              onClick={onOpenDemo}
              id="cta-start-journey-btn"
            >
              <span>Start Your Journey</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="btn btn-secondary"
              onClick={scrollToContact}
              id="cta-talk-architect-btn"
            >
              <span>Speak with an AI Architect</span>
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className={styles.guaranteeRow}>
            <div className={styles.guaranteeItem}>
              <Zap size={15} className={styles.cyanIcon} />
              <span>Rapid 14-Day Pilot Deployment</span>
            </div>
            <div className={styles.guaranteeItem}>
              <ShieldCheck size={15} className={styles.greenIcon} />
              <span>SOC2 Type II & GDPR Compliant</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Lock size={15} className={styles.purpleIcon} />
              <span>Zero-Knowledge Data Privacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
