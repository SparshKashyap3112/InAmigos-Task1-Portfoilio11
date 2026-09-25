import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  Layers, 
  ShieldCheck, 
  Server, 
  GitBranch, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection({ onOpenDemo }) {
  const [activeNode, setActiveNode] = useState('agent');

  const nodesInfo = {
    agent: {
      title: 'Autonomous Reasoning Node',
      desc: 'Orchestrates multi-turn logic, data ingestion, and decision workflows.',
      metric: '99.8% precision'
    },
    vector: {
      title: 'Real-Time Vector Pipeline',
      desc: 'High-dimensional embeddings indexed instantly for semantic search.',
      metric: '0.8ms retrieval'
    },
    security: {
      title: 'Zero-Knowledge Guardrails',
      desc: 'Sanitizes prompts and enforces strict role-based data governance.',
      metric: 'AES-256 GCM'
    }
  };

  const featureCards = [
    {
      id: 'ai-powered',
      title: 'AI-Powered',
      tag: 'Next-Gen Models',
      description: 'Purpose-built deep neural architectures engineered for dynamic real-time reasoning, domain specialization, and adaptive learning.',
      icon: Brain,
      color: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.2)'
    },
    {
      id: 'scalable',
      title: 'Scalable',
      tag: 'Edge Ready',
      description: 'Elastic distributed cloud infrastructure scaling from initial proof-of-concept to millions of concurrent operations with zero degradation.',
      icon: Layers,
      color: '#818cf8',
      glow: 'rgba(129, 140, 248, 0.2)'
    },
    {
      id: 'secure',
      title: 'Secure',
      tag: 'Enterprise Grade',
      description: 'Multi-layer encryption, SOC2 Type II certification, GDPR compliance, and private zero-knowledge execution for proprietary data.',
      icon: ShieldCheck,
      color: '#10b981',
      glow: 'rgba(16, 185, 129, 0.2)'
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>About NexaAI</span>
          </div>
          <h2 className="section-title">
            Technology That <span className="gradient-text">Works With You</span>
          </h2>
          <p className="section-description">
            NexaAI combines artificial intelligence, automation and modern web technologies to help organizations solve real-world problems and unlock exponential growth.
          </p>
        </div>

        {/* Main 2-Column About Grid */}
        <div className={styles.aboutGrid}>
          {/* Left Column: Interactive Architecture Visual Area */}
          <div className={`glass-panel ${styles.visualCard}`}>
            <div className={styles.visualCardHeader}>
              <div className={styles.architectureBadge}>
                <Cpu size={15} className={styles.cyanIcon} />
                <span>Nexa Architecture Matrix</span>
              </div>
              <div className={styles.networkStatus}>
                <span className="status-beacon"></span>
                <span>Active Mesh</span>
              </div>
            </div>

            {/* Visual Node Diagram */}
            <div className={styles.nodeDiagram}>
              <div className={styles.nodeNetworkSvg}>
                <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 80 110 L 200 40" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 80 110 L 200 180" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 200 40 L 320 110" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 200 180 L 320 110" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 200 40 L 200 180" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Node 1: Ingestion */}
              <button 
                className={`${styles.nodeBtn} ${styles.nodeIngest} ${activeNode === 'agent' ? styles.nodeBtnActive : ''}`}
                onClick={() => setActiveNode('agent')}
              >
                <Brain size={18} />
                <span>Reasoning</span>
              </button>

              {/* Node 2: Vector */}
              <button 
                className={`${styles.nodeBtn} ${styles.nodeVector} ${activeNode === 'vector' ? styles.nodeBtnActive : ''}`}
                onClick={() => setActiveNode('vector')}
              >
                <Server size={18} />
                <span>Vector DB</span>
              </button>

              {/* Node 3: Security */}
              <button 
                className={`${styles.nodeBtn} ${styles.nodeSecurity} ${activeNode === 'security' ? styles.nodeBtnActive : ''}`}
                onClick={() => setActiveNode('security')}
              >
                <ShieldCheck size={18} />
                <span>Guardrails</span>
              </button>

              {/* Node 4: Output Hub */}
              <div className={`${styles.nodeBtn} ${styles.nodeOutput}`}>
                <GitBranch size={18} />
                <span>API Gateway</span>
              </div>
            </div>

            {/* Active Node Info Inspector Bar */}
            <div className={styles.nodeInspector}>
              <div className={styles.inspectorHeader}>
                <span className={styles.inspectorTitle}>{nodesInfo[activeNode].title}</span>
                <span className={styles.inspectorMetric}>{nodesInfo[activeNode].metric}</span>
              </div>
              <p className={styles.inspectorDesc}>{nodesInfo[activeNode].desc}</p>
            </div>
          </div>

          {/* Right Column: Narrative & Mission Statement */}
          <div className={styles.aboutNarrative}>
            <div className={styles.narrativeGlass}>
              <h3 className={styles.narrativeTitle}>Engineering the Autonomous Enterprise</h3>
              <p className={styles.narrativeParagraph}>
                Founded with a mission to bridge the gap between bleeding-edge generative AI research and enterprise-scale production, NexaAI creates intuitive, high-performance systems that empower teams to work with supercharged speed.
              </p>
              <p className={styles.narrativeParagraph}>
                We do not believe in one-size-fits-all AI wrappers. Every solution we architect is tuned for real-world reliability, strict data compliance, and observable business return on investment.
              </p>

              <div className={styles.narrativePoints}>
                <div className={styles.narrativePoint}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Deep Domain Customization</strong>
                    <p>Models fine-tuned on proprietary vocabulary and specific operational workflows.</p>
                  </div>
                </div>
                <div className={styles.narrativePoint}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Frictionless Cloud Integration</strong>
                    <p>Plugs natively into AWS, GCP, Azure, Snowflake, and modern REST/GraphQL APIs.</p>
                  </div>
                </div>
              </div>

              <div className={styles.narrativeCtaRow}>
                <button className="btn btn-primary" onClick={onOpenDemo}>
                  <span>Explore Architecture</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Small Feature Cards: AI-Powered, Scalable, Secure */}
        <div className={styles.featureCardsGrid}>
          {featureCards.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={feat.id} 
                className={`glass-panel-interactive ${styles.featureCard}`}
                style={{ '--glow-color': feat.glow }}
              >
                <div className={styles.featureCardHeader}>
                  <div 
                    className={styles.featureIconBox}
                    style={{ background: `rgba(255, 255, 255, 0.04)`, color: feat.color, borderColor: `${feat.color}40` }}
                  >
                    <IconComp size={24} />
                  </div>
                  <span className={styles.featureTag}>{feat.tag}</span>
                </div>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.description}</p>
                <div className={styles.featureBottomAccent} style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
