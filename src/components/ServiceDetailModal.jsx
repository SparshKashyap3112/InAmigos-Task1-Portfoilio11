import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import styles from './ServiceDetailModal.module.css';

export default function ServiceDetailModal({ service, onClose, onGetStarted }) {
  if (!service) return null;

  const IconComp = service.icon;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={`glass-panel ${styles.modalCard}`} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.titleGroup}>
            <div 
              className={styles.iconBox} 
              style={{ background: 'rgba(255, 255, 255, 0.05)', color: service.color, borderColor: `${service.color}40` }}
            >
              <IconComp size={24} />
            </div>
            <div>
              <span className={styles.categoryBadge}>{service.category || 'Nexa Enterprise Service'}</span>
              <h2 className={styles.modalTitle}>{service.title}</h2>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <p className={styles.fullDescription}>{service.fullDescription || service.description}</p>

          {/* Key Deliverables */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.blockHeading}>
              <Sparkles size={16} className={styles.blockIcon} />
              Key Capabilities & Deliverables
            </h4>
            <div className={styles.deliverablesGrid}>
              {(service.deliverables || [
                'Autonomous agent task routing',
                'Real-time data streaming & anomaly detection',
                'Enterprise-grade API gateway integration',
                'Comprehensive telemetry & monitoring'
              ]).map((item, idx) => (
                <div key={idx} className={styles.deliverableItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.blockHeading}>
              <Layers size={16} className={styles.blockIcon} />
              Underlying Technologies
            </h4>
            <div className={styles.techChips}>
              {(service.techStack || ['PyTorch', 'Vector Embeddings', 'FastAPI', 'Redis Cluster', 'Docker & K8s', 'WebSockets']).map((tech, idx) => (
                <span key={idx} className={styles.techChip}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <button className="btn btn-secondary" onClick={onClose}>
            <span>Close Details</span>
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              onClose();
              onGetStarted(service.title);
            }}
          >
            <span>Request {service.title}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
