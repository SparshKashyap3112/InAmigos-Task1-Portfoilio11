import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Activity, 
  Database, 
  Cloud, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  Play
} from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ onOpenDemo }) {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [tokensProcessed, setTokensProcessed] = useState(482910);
  const [isProcessing, setIsProcessing] = useState(false);

  const workflows = [
    { title: 'Neural Vector Indexing', status: 'Optimal', time: '12ms', progress: 98 },
    { title: 'Autonomous Multi-Agent Task', status: 'Active', time: '45ms', progress: 84 },
    { title: 'Predictive Churn Engine', status: 'Completed', time: '28ms', progress: 100 },
  ];

  // Live token counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTokensProcessed(prev => prev + Math.floor(Math.random() * 45) + 10);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateInference = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setActiveWorkflow((prev) => (prev + 1) % workflows.length);
    }, 1000);
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Content */}
          <div className={styles.heroContent}>
            {/* Top Tag */}
            <div className={styles.heroBadge}>
              <span className={styles.badgePulseIcon}>
                <Sparkles size={14} />
              </span>
              <span className={styles.badgeText}>Next-Gen Enterprise AI Platform</span>
              <span className={styles.badgePill}>v3.5 Live</span>
            </div>

            {/* Headline */}
            <h1 className={styles.heroTitle}>
              Build Smarter. <br />
              <span className="gradient-text">Move Faster.</span> <br />
              <span className={styles.heroTitleHighlight}>Powered by AI.</span>
            </h1>

            {/* Supporting Text */}
            <p className={styles.heroDescription}>
              NexaAI helps businesses automate workflows, understand their data, and build intelligent digital experiences using modern artificial intelligence.
            </p>

            {/* CTA Action Buttons */}
            <div className={styles.heroButtons}>
              <button 
                className="btn btn-primary btn-glow"
                onClick={onOpenDemo}
                id="hero-get-started-btn"
              >
                <span>Get Started</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('#solutions')}
                id="hero-explore-solutions-btn"
              >
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Key Micro Trust Highlights */}
            <div className={styles.heroHighlights}>
              <div className={styles.highlightItem}>
                <CheckCircle2 size={16} className={styles.highlightIcon} />
                <span>Enterprise SOC2 Type II</span>
              </div>
              <div className={styles.highlightItem}>
                <ShieldCheck size={16} className={styles.highlightIcon} />
                <span>99.9% High Availability</span>
              </div>
              <div className={styles.highlightItem}>
                <Zap size={16} className={styles.highlightIcon} />
                <span>Sub-15ms Latency</span>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic AI Dashboard Visual + Floating Elements */}
          <div className={styles.heroVisualWrapper}>
            {/* Ambient Background Glow Behind Visual */}
            <div className={styles.visualGlow}></div>

            {/* Floating Glass Element: AI Neural Engine */}
            <div className={`${styles.floatingGlassBadge} ${styles.floatBadgeAI}`}>
              <div className={styles.badgeIconBox} style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                <Cpu size={18} />
              </div>
              <div className={styles.badgeInfo}>
                <span className={styles.badgeLabel}>AI Neural Core</span>
                <span className={styles.badgeVal}>Deep Reasoning v3</span>
              </div>
            </div>

            {/* Floating Glass Element: Automation */}
            <div className={`${styles.floatingGlassBadge} ${styles.floatBadgeAutomation}`}>
              <div className={styles.badgeIconBox} style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#a855f7' }}>
                <Activity size={18} />
              </div>
              <div className={styles.badgeInfo}>
                <span className={styles.badgeLabel}>Autonomous Flow</span>
                <span className={styles.badgeVal}>24/7 Active Agent</span>
              </div>
            </div>

            {/* Floating Glass Element: Analytics / Vector */}
            <div className={`${styles.floatingGlassBadge} ${styles.floatBadgeAnalytics}`}>
              <div className={styles.badgeIconBox} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                <Database size={18} />
              </div>
              <div className={styles.badgeInfo}>
                <span className={styles.badgeLabel}>Vector Search</span>
                <span className={styles.badgeVal}>0.8ms Embedding</span>
              </div>
            </div>

            {/* Floating Glass Element: Cloud */}
            <div className={`${styles.floatingGlassBadge} ${styles.floatBadgeCloud}`}>
              <div className={styles.badgeIconBox} style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                <Cloud size={18} />
              </div>
              <div className={styles.badgeInfo}>
                <span className={styles.badgeLabel}>Global Edge Mesh</span>
                <span className={styles.badgeVal}>32 Edge Regions</span>
              </div>
            </div>

            {/* Main Glass AI Dashboard */}
            <div className={styles.heroDashboard}>
              {/* Dashboard Top Header Bar */}
              <div className={styles.dashHeader}>
                <div className={styles.dashWindowControls}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <div className={styles.dashTitle}>
                  <span>nexa-runtime://prod-mesh-01</span>
                </div>
                <div className={styles.dashLiveBeacon}>
                  <span className="status-beacon"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Dashboard Metric Grid */}
              <div className={styles.dashMetricsRow}>
                <div className={styles.miniMetricCard}>
                  <span className={styles.miniMetricLabel}>Throughput</span>
                  <div className={styles.miniMetricValue}>
                    <span>{tokensProcessed.toLocaleString()}</span>
                    <span className={styles.miniMetricUnit}>t/sec</span>
                  </div>
                  <div className={styles.sparkline}>
                    <div className={styles.sparkBar} style={{ height: '40%' }}></div>
                    <div className={styles.sparkBar} style={{ height: '65%' }}></div>
                    <div className={styles.sparkBar} style={{ height: '50%' }}></div>
                    <div className={styles.sparkBar} style={{ height: '80%' }}></div>
                    <div className={styles.sparkBar} style={{ height: '95%' }}></div>
                    <div className={styles.sparkBar} style={{ height: '75%' }}></div>
                    <div className={styles.sparkBar} style={{ height: '100%' }}></div>
                  </div>
                </div>

                <div className={styles.miniMetricCard}>
                  <span className={styles.miniMetricLabel}>Neural Precision</span>
                  <div className={styles.miniMetricValue}>
                    <span>99.82%</span>
                    <span className={styles.miniMetricUnit}>F1</span>
                  </div>
                  <div className={styles.progressBarWrapper}>
                    <div className={styles.progressBarFill} style={{ width: '99.8%' }}></div>
                  </div>
                </div>
              </div>

              {/* Live Interactive Workflow Display */}
              <div className={styles.workflowDisplay}>
                <div className={styles.workflowHeader}>
                  <div className={styles.workflowTitle}>
                    <Layers size={15} className={styles.cyanIcon} />
                    <span>Real-Time Execution Pipeline</span>
                  </div>
                  <button 
                    className={styles.runSimBtn} 
                    onClick={handleSimulateInference}
                    disabled={isProcessing}
                    title="Simulate Next Inference Step"
                  >
                    <Play size={12} fill={isProcessing ? '#64748b' : '#38bdf8'} />
                    <span>{isProcessing ? 'Routing...' : 'Test Run'}</span>
                  </button>
                </div>

                <div className={styles.workflowList}>
                  {workflows.map((wf, idx) => (
                    <div 
                      key={wf.title} 
                      className={`${styles.workflowItem} ${idx === activeWorkflow ? styles.workflowItemActive : ''}`}
                      onClick={() => setActiveWorkflow(idx)}
                    >
                      <div className={styles.wfMeta}>
                        <span className={styles.wfIndex}>0{idx + 1}</span>
                        <span className={styles.wfName}>{wf.title}</span>
                      </div>
                      <div className={styles.wfStats}>
                        <span className={styles.wfTime}>{wf.time}</span>
                        <span className={`${styles.wfTag} ${wf.status === 'Optimal' ? styles.tagGreen : wf.status === 'Active' ? styles.tagCyan : styles.tagPurple}`}>
                          {wf.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code / Vector Pulse Bar */}
              <div className={styles.dashFooter}>
                <div className={styles.terminalPrompt}>
                  <span className={styles.promptSymbol}>&gt;</span>
                  <span className={styles.promptText}>
                    {isProcessing 
                      ? 'NexaAgent: Optimizing multi-node inference tree across 32 clusters...' 
                      : 'NexaAgent: Model cluster synchronized. Zero anomalies detected.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
