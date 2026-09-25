import React from 'react';
import { 
  Sparkles, 
  Zap, 
  Clock, 
  LineChart, 
  Scale, 
  HeartHandshake, 
  Lightbulb, 
  ArrowUpRight 
} from 'lucide-react';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs({ onOpenDemo }) {
  const reasons = [
    {
      id: 'faster-workflows',
      title: 'Faster Workflows',
      metric: '4.5x',
      metricLabel: 'Speed Multiplier',
      description: 'Streamline end-to-end operational handoffs and compress multi-day manual tasks into automated sub-second executions.',
      icon: Zap,
      accentColor: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.25)'
    },
    {
      id: 'reduced-manual-effort',
      title: 'Reduced Manual Effort',
      metric: '-70%',
      metricLabel: 'Operational Overhead',
      description: 'Autonomous agents shoulder data ingestion, reconciliation, and routine audits, freeing your talent for high-leverage strategy.',
      icon: Clock,
      accentColor: '#818cf8',
      glow: 'rgba(129, 140, 248, 0.25)'
    },
    {
      id: 'data-driven-decisions',
      title: 'Data-Driven Decisions',
      metric: '99.4%',
      metricLabel: 'Forecasting Accuracy',
      description: 'Replace guesswork with deterministic predictive models that continuously analyze market signals, customer churn, and anomalies.',
      icon: LineChart,
      accentColor: '#10b981',
      glow: 'rgba(16, 185, 129, 0.25)'
    },
    {
      id: 'scalable-technology',
      title: 'Scalable Technology',
      metric: '10M+',
      metricLabel: 'Daily Inferences',
      description: 'Elastic serverless GPU clusters and distributed vector indices automatically scale up during peak spikes with zero latency spikes.',
      icon: Scale,
      accentColor: '#c084fc',
      glow: 'rgba(192, 132, 252, 0.25)'
    },
    {
      id: 'better-cx',
      title: 'Better Customer Experiences',
      metric: '<15ms',
      metricLabel: 'Average Response',
      description: 'Deliver instant, context-aware omnichannel customer support that resolves complex tickets without endless escalation loops.',
      icon: HeartHandshake,
      accentColor: '#f43f5e',
      glow: 'rgba(244, 63, 94, 0.25)'
    },
    {
      id: 'continuous-innovation',
      title: 'Continuous Innovation',
      metric: 'Auto',
      metricLabel: 'Self-Improving Models',
      description: 'Adaptive learning loops analyze model outputs, validate edge cases, and continuously fine-tune performance without downtime.',
      icon: Lightbulb,
      accentColor: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.25)'
    }
  ];

  return (
    <section id="why-us" className={styles.whySection}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>The Nexa Advantage</span>
          </div>
          <h2 className="section-title">
            Why Choose <span className="gradient-text">NexaAI</span>
          </h2>
          <p className="section-description">
            Discover how our purpose-engineered AI platform delivers unmatched velocity, precision, and enterprise ROI compared to traditional setups.
          </p>
        </div>

        {/* Large Glass Cards Grid */}
        <div className={styles.whyGrid}>
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id} 
                className={`glass-panel-interactive ${styles.whyCard}`}
                style={{ '--glow-color': item.glow }}
              >
                <div className={styles.cardTopRow}>
                  <div 
                    className={styles.iconBox}
                    style={{ background: `rgba(255, 255, 255, 0.04)`, color: item.accentColor, borderColor: `${item.accentColor}40` }}
                  >
                    <IconComp size={24} />
                  </div>
                  <div className={styles.metricBadge}>
                    <span className={styles.metricNumber} style={{ color: item.accentColor }}>{item.metric}</span>
                    <span className={styles.metricLabelText}>{item.metricLabel}</span>
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>

                <div className={styles.cardHoverAccent} style={{ background: `radial-gradient(circle at bottom right, ${item.glow}, transparent 70%)` }}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stat Banner */}
        <div className={`glass-panel ${styles.whyBanner}`}>
          <div className={styles.bannerLeft}>
            <h3 className={styles.bannerHeading}>Ready to see the difference for your enterprise?</h3>
            <p className={styles.bannerSubtext}>Get a personalized architectural ROI evaluation in under 24 hours.</p>
          </div>
          <button className="btn btn-primary btn-glow" onClick={onOpenDemo}>
            <span>Request Architecture Assessment</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
