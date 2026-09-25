import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  User, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import styles from './ContactSection.module.css';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'AI Automation',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide details about your project';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      onShowToast('Please fill out all required fields correctly.', 'error');
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      onShowToast('Thank you! Your consultation request has been sent to our AI Architect team.', 'success');
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceInterest: 'AI Automation',
        message: ''
      });
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Connect With Our <span className="gradient-text">AI Architects</span>
          </h2>
          <p className="section-description">
            Whether you want to automate workflows, build custom models, or upgrade your cloud infrastructure, our engineering team is ready to assist.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Contact Form */}
          <div className={`glass-panel ${styles.formCard}`}>
            <h3 className={styles.cardHeading}>Request Technical Consultation</h3>
            <p className={styles.cardSub}>We typically respond within 2 business hours with an initial feasibility outline.</p>

            {formSubmitted ? (
              <div className={styles.successState}>
                <div className={styles.successIconBox}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                </div>
                <h4 className={styles.successTitle}>Inquiry Transmitted Successfully</h4>
                <p className={styles.successDesc}>
                  Our senior engineering architect will review your requirements and reach out via email shortly.
                </p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setFormSubmitted(false)}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                {/* Name & Email Row */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <User size={16} className={styles.inputIcon} />
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      />
                    </div>
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.label}>
                      Business Email <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} />
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      />
                    </div>
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                {/* Company & Solution Type */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-company" className={styles.label}>Company / Organization</label>
                    <div className={styles.inputWrapper}>
                      <Building size={16} className={styles.inputIcon} />
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        placeholder="e.g. Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-service" className={styles.label}>Primary Solution Interest</label>
                    <div className={styles.inputWrapper}>
                      <Layers size={16} className={styles.inputIcon} />
                      <select
                        id="contact-service"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="AI Automation">AI Automation & Agents</option>
                        <option value="Intelligent Analytics">Intelligent Analytics</option>
                        <option value="AI Chatbots">AI Chatbots & Conversational RAG</option>
                        <option value="Custom AI Solutions">Custom AI Model Training</option>
                        <option value="Web & App Development">Modern Web & App Development</option>
                        <option value="Cloud Integration">Cloud Infrastructure & GPU Clusters</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Project Overview & Requirements <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.textareaWrapper}>
                    <MessageSquare size={16} className={styles.textareaIcon} />
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Briefly describe your objectives, existing data infrastructure, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                  </div>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`btn btn-primary btn-glow ${styles.submitBtn}`}
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Send Message to Engineers'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Info */}
          <div className={styles.infoCol}>
            {/* Direct Email Card */}
            <div className={`glass-panel ${styles.infoCard}`}>
              <div className={styles.infoIconBox}>
                <Mail size={22} className={styles.cyanIcon} />
              </div>
              <div className={styles.infoDetails}>
                <span className={styles.infoLabel}>Direct Correspondence</span>
                <a href="mailto:contact@nexaai.tech" className={styles.infoValLink}>
                  contact@nexaai.tech
                </a>
                <span className={styles.infoSub}>Enterprise SLA Response Guaranteed</span>
              </div>
            </div>

            {/* Office Location Card */}
            <div className={`glass-panel ${styles.infoCard}`}>
              <div className={styles.infoIconBox}>
                <MapPin size={22} className={styles.purpleIcon} />
              </div>
              <div className={styles.infoDetails}>
                <span className={styles.infoLabel}>Global Headquarters</span>
                <p className={styles.infoValText}>
                  750 Innovation Blvd, Suite 400<br />
                  San Francisco, CA 94105, United States
                </p>
                <span className={styles.infoSub}>Available for in-person briefings</span>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className={`glass-panel ${styles.infoCard}`}>
              <div className={styles.infoIconBox}>
                <Clock size={22} className={styles.greenIcon} />
              </div>
              <div className={styles.infoDetails}>
                <div className={styles.hoursHeader}>
                  <span className={styles.infoLabel}>Operating Hours</span>
                  <div className={styles.hoursBeacon}>
                    <span className="status-beacon"></span>
                    <span>ACTIVE</span>
                  </div>
                </div>
                <p className={styles.infoValText}>
                  Monday – Friday: 9:00 AM – 6:00 PM PST<br />
                  Emergency Critical Support: 24/7/365
                </p>
                <span className={styles.infoSub}>Edge monitoring operates uninterrupted</span>
              </div>
            </div>

            {/* Quick Consultation Badge */}
            <div className={`glass-panel ${styles.quickBookCard}`}>
              <div className={styles.quickBookText}>
                <strong>Prefer an instant technical discovery call?</strong>
                <p>Book directly onto our Principal Architect’s schedule.</p>
              </div>
              <a 
                href="#contact" 
                className={styles.quickBookLink}
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast('Calendar sync opened. Schedule a 30-min discovery session.', 'info');
                }}
              >
                <span>Schedule 30-Min Discovery</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
