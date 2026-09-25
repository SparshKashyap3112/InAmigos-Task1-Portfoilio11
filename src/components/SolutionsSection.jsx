import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ChevronRight 
} from 'lucide-react';
import styles from './SolutionsSection.module.css';

export default function SolutionsSection({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Understand',
      subtitle: 'Analyze the business problem & requirements',
      icon: Search,
      color: '#38bdf8',
      summary: 'We conduct a deep data readiness audit, map your high-friction operational workflows, and identify exact high-ROI AI intervention points.',
      points: [
        'Comprehensive data pipeline & ontology audit',
        'Operational bottleneck & ROI feasibility mapping',
        'Security, compliance & privacy guardrail blueprint',
        'Benchmark definition & success KPI criteria'
      ],
      deliverable: 'AI Architecture Blueprint & Feasibility Matrix'
    },
    {
      number: '02',
      title: 'Build',
      subtitle: 'Design & develop an AI-powered solution',
      icon: Cpu,
      color: '#818cf8',
      summary: 'Our engineering team designs custom neural architectures, fine-tunes domain models, and implements fault-tolerant multi-agent orchestrations.',
      points: [
        'Domain model fine-tuning & vector embedding synthesis',
        'Multi-agent workflow orchestration & state machine',
        'Enterprise API & database integration mesh',
        'Iterative sandbox validation & accuracy calibration'
      ],
      deliverable: 'Production-Ready AI Model & API Infrastructure'
    },
    {
      number: '03',
      title: 'Transform',
      subtitle: 'Deploy the solution & continuously improve it',
      icon: Rocket,
      color: '#10b981',
      summary: 'We deploy to isolated enterprise VPCs with zero-downtime canary rollouts, active telemetry, and autonomous learning loops.',
      points: [
        'Zero-downtime multi-region cloud deployment',
        'Live telemetry, latency & token cost optimization',
        'Continuous learning loops with human-in-the-loop audit',
        '24/7 proactive monitoring & self-healing failovers'
      ],
      deliverable: 'Scalable Enterprise Transformation & Continuous ROI'
    }
  ];

  return (
    <section id="solutions" className={styles.solutionsSection}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>How It Works</span>
          </div>
          <h2 className="section-title">
            Our 3-Step <span className="gradient-text">Transformation Lifecycle</span>
          </h2>
          <p className="section-description">
            A structured, transparent engineering methodology designed to move from initial concept to high-impact production rapidly and securely.
          </p>
        </div>

        {/* Timeline Stepper Navigation (Desktop Horizontal / Mobile Responsive) */}
        <div className={styles.timelineStepper}>
          <div className={styles.timelineProgressBar}>
            <div 
              className={styles.timelineProgressFill}
              style={{ width: `${((activeStep) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className={styles.stepButtonsRow}>
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={step.number}
                  className={`${styles.stepNavBtn} ${isActive ? styles.stepActive : ''} ${isPassed ? styles.stepPassed : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={styles.stepNavIconBox}>
                    <IconComp size={20} />
                  </div>
                  <div className={styles.stepNavMeta}>
                    <span className={styles.stepNavNumber}>STEP {step.number}</span>
                    <span className={styles.stepNavTitle}>{step.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card Showcase */}
        <div className={`glass-panel ${styles.activeStepCard}`}>
          <div className={styles.stepCardHeader}>
            <div className={styles.stepNumberBadge}>
              <span>{steps[activeStep].number}</span>
            </div>
            <div className={styles.stepTitleGroup}>
              <h3 className={styles.stepMainTitle}>{steps[activeStep].title}</h3>
              <p className={styles.stepSubtitle}>{steps[activeStep].subtitle}</p>
            </div>
          </div>

          <div className={styles.stepCardBody}>
            <div className={styles.stepContentLeft}>
              <p className={styles.stepSummaryText}>{steps[activeStep].summary}</p>
              <div className={styles.stepKeyPoints}>
                {steps[activeStep].points.map((point, idx) => (
                  <div key={idx} className={styles.stepPointItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.stepContentRight}>
              <div className={styles.deliverableCard}>
                <span className={styles.deliverableTag}>CORE MILESTONE DELIVERABLE</span>
                <h4 className={styles.deliverableName}>{steps[activeStep].deliverable}</h4>
                <div className={styles.deliverableMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>Cycle Duration:</span>
                    <span className={styles.metaVal}>1 – 3 Weeks</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>Governance:</span>
                    <span className={styles.metaVal}>SOC2 / ISO Compliant</span>
                  </div>
                </div>

                <button 
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '16px' }}
                  onClick={onOpenDemo}
                >
                  <span>Begin Step {steps[activeStep].number}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Stepper Controls */}
          <div className={styles.stepControlsFooter}>
            <button 
              className={styles.controlNavBtn}
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            >
              Previous Phase
            </button>

            <div className={styles.stepperDots}>
              {steps.map((_, i) => (
                <span 
                  key={i} 
                  className={`${styles.dot} ${i === activeStep ? styles.dotActive : ''}`}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>

            <button 
              className={styles.controlNavBtn}
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            >
              Next Phase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
