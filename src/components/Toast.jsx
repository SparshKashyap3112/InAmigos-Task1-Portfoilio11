import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import styles from './Toast.module.css';

export default function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconWrapper}>
        {type === 'success' && <CheckCircle2 size={18} className={styles.iconSuccess} />}
        {type === 'error' && <AlertCircle size={18} className={styles.iconError} />}
        {type === 'info' && <Info size={18} className={styles.iconInfo} />}
      </div>
      <div className={styles.content}>
        <p className={styles.message}>{message}</p>
      </div>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close notification">
        <X size={15} />
      </button>
    </div>
  );
}
