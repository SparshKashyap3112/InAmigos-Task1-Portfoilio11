import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Zap } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'solutions', 'why-us', 'dashboard', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => handleLinkClick(e, '#home')}>
          <div className={styles.logoIcon}>
            <Sparkles size={20} className={styles.sparkleIcon} />
            <span className={styles.logoPulse}></span>
          </div>
          <span className={styles.logoText}>
            Nexa<span className={styles.logoAccent}>AI</span>
          </span>
          <span className={styles.versionBadge}>v3.5</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`${styles.navLink} ${activeSection === link.id ? styles.activeLink : ''}`}
                >
                  {link.name}
                  {activeSection === link.id && <span className={styles.activeIndicator} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className={styles.navActions}>
          <button 
            className="btn btn-primary btn-glow"
            onClick={onOpenDemo}
            id="nav-get-started-btn"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Dropdown Menu */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileDrawerInner}>
          <div className={styles.mobileStatus}>
            <span className="status-beacon"></span>
            <span>Nexa Neural Engine Online (v3.5)</span>
          </div>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.activeMobileLink : ''}`}
                >
                  <span>{link.name}</span>
                  <Zap size={15} className={styles.linkArrow} />
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta}>
            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
            >
              <span>Launch Nexa Platform</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
