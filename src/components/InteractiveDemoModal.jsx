import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Clock, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import styles from './InteractiveDemoModal.module.css';

export default function InteractiveDemoModal({ isOpen, onClose, initialService = '', onShowToast }) {
  const [teamSize, setTeamSize] = useState(25);
  const [selectedSolution, setSelectedSolution] = useState(initialService || 'AI Automation');
  const [contactEmail, setContactEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculators based on slider
  const estimatedHoursSaved = Math.round(teamSize * 18.5);
  const projectedCostReduction = Math.round(teamSize * 1450);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactEmail.trim() || !/\S+@\S+\.\S+/.test(contactEmail)) {
      onShowToast('Please provide a valid work email to receive your custom architectural pilot blueprint.', 'error');
      return;
    }

    setIsSubmitted(true);
    onShowToast('Custom AI ROI Analysis & Pilot Access Provisioned!', 'success');
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={`glass-panel ${styles.modalBox}`} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.sparkleBox}>
              <Sparkles size={20} className={styles.sparkleIcon} />
            </div>
            <div>
              <span className={styles.subTag}>NexaAI Platform Access</span>
              <h2 className={styles.title}>Estimate Your AI Velocity & ROI</h2>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className={styles.body}>
          {isSubmitted ? (
            <div className={styles.successView}>
              <div className={styles.successIconWrapper}>
                <CheckCircle2 size={44} color="#10b981" />
              </div>
              <h3 className={styles.successHeading}>Access Request Received!</h3>
              <p className={styles.successText}>
                We've generated your custom <strong>{selectedSolution}</strong> estimate. An architect invitation has been dispatched to <strong>{contactEmail}</strong> with your staging sandbox credentials.
              </p>
              <button 
                className="btn btn-primary"
                style={{ marginTop: '14px' }}
                onClick={onClose}
              >
                <span>Return to Overview</span>
              </button>
            </div>
          ) : (
            <>
              {/* Interactive Sliders / Configuration */}
              <div className={styles.configCard}>
                <div className={styles.fieldGroup}>
                  <div className={styles.fieldLabelRow}>
                    <span className={styles.fieldLabel}>Operational Team Size</span>
                    <span className={styles.fieldValueBadge}>{teamSize} Engineers / Ops</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className={styles.rangeSlider}
                  />
                  <div className={styles.sliderTicks}>
                    <span>5 Members</span>
                    <span>100 Members</span>
                    <span>200+ Members</span>
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>Primary Transformation Priority</span>
                  <div className={styles.pillGrid}>
                    {[
                      'AI Automation', 
                      'Intelligent Analytics', 
                      'AI Chatbots', 
                      'Custom AI Solutions',
                      'Web & App Development', 
                      'Cloud Integration'
                    ].map((sol) => (
                      <button
                        key={sol}
                        type="button"
                        className={`${styles.solPill} ${selectedSolution === sol ? styles.solPillActive : ''}`}
                        onClick={() => setSelectedSolution(sol)}
                      >
                        {sol}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Real-Time Impact Metric Display */}
              <div className={styles.metricsBanner}>
                <div className={styles.metricItem}>
                  <Clock size={18} className={styles.cyanIcon} />
                  <div className={styles.metricTexts}>
                    <span className={styles.calcValue}>~{estimatedHoursSaved.toLocaleString()} hrs</span>
                    <span className={styles.calcLabel}>Monthly Time Saved</span>
                  </div>
                </div>

                <div className={styles.metricDivider}></div>

                <div className={styles.metricItem}>
                  <Zap size={18} className={styles.purpleIcon} />
                  <div className={styles.calcValue}>
                    <span>${projectedCostReduction.toLocaleString()}</span>
                    <span className={styles.calcLabel}>Est. Monthly ROI</span>
                  </div>
                </div>
              </div>

              {/* Instant Claim Form */}
              <form onSubmit={handleSubmit} className={styles.claimForm}>
                <label className={styles.claimLabel}>Where should we send your full Architectural Blueprint & API keys?</label>
                <div className={styles.claimInputRow}>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className={styles.claimInput}
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-glow">
                    <span>Provision Pilot</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>

              <div className={styles.guaranteeText}>
                <ShieldCheck size={14} color="#10b981" />
                <span>Zero obligation • 14-day dedicated sandbox • Full enterprise SLA</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
