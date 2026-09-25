import React from 'react';
import { Bot, Building2, ShieldCheck, Clock, TrendingUp, Award, CheckCircle } from 'lucide-react';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  const stats = [
    {
      id: 'solutions',
      value: '50+',
      label: 'AI Solutions',
      description: 'Pre-trained & custom enterprise model pipelines deployed across industries.',
      icon: Bot,
      color: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.25)',
    },
    {
      id: 'businesses',
      value: '100+',
      label: 'Businesses',
      description: 'Global organizations scaling operations and accelerating intelligence.',
      icon: Building2,
      color: '#818cf8',
      glow: 'rgba(129, 140, 248, 0.25)',
    },
    {
      id: 'reliability',
      value: '99.9%',
      label: 'Platform Reliability',
      description: 'Fault-tolerant distributed edge mesh with high-availability failover.',
      icon: ShieldCheck,
      color: '#10b981',
      glow: 'rgba(16, 185, 129, 0.25)',
    },
    {
      id: 'automation',
      value: '24/7',
      label: 'Intelligent Automation',
      description: 'Autonomous agents processing tasks continuously with zero downtime.',
      icon: Clock,
      color: '#c084fc',
      glow: 'rgba(192, 132, 252, 0.25)',
    },
  ];

  const partners = [
    { name: 'ApexData', category: 'Predictive Analytics' },
    { name: 'OmniCloud', category: 'Infrastructure' },
    { name: 'SynapseBio', category: 'Health Tech' },
    { name: 'VortexFin', category: 'FinTech AI' },
    { name: 'QuantumScale', category: 'Enterprise' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        {/* Trust Badges Marquee / Bar */}
        <div className={styles.partnerBanner}>
          <span className={styles.partnerLabel}>TRUSTED BY INNOVATORS AT SCALE</span>
          <div className={styles.partnerList}>
            {partners.map((partner) => (
              <div key={partner.name} className={styles.partnerChip}>
                <Award size={14} className={styles.partnerIcon} />
                <span className={styles.partnerName}>{partner.name}</span>
                <span className={styles.partnerDot}>•</span>
                <span className={styles.partnerCat}>{partner.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={`glass-panel-interactive ${styles.statCard}`}
                style={{ '--card-glow': stat.glow }}
              >
                <div className={styles.cardHeader}>
                  <div 
                    className={styles.statIconBox} 
                    style={{ background: `rgba(255, 255, 255, 0.05)`, color: stat.color, borderColor: `${stat.color}40` }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <span className={styles.liveIndicator}>
                    <CheckCircle size={12} color="#10b981" />
                    Verified
                  </span>
                </div>

                <div className={styles.statNumberWrapper}>
                  <span className={styles.statValue} style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </div>

                <h3 className={styles.statLabel}>{stat.label}</h3>
                <p className={styles.statDescription}>{stat.description}</p>

                <div className={styles.cardGlowEffect} style={{ background: `radial-gradient(circle at bottom right, ${stat.glow}, transparent 70%)` }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
