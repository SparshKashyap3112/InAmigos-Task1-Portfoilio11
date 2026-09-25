import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SolutionsSection from './components/SolutionsSection';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedDashboard from './components/FeaturedDashboard';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InteractiveDemoModal from './components/InteractiveDemoModal';
import Toast from './components/Toast';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [initialServiceForDemo, setInitialServiceForDemo] = useState('');
  
  // Toast state
  const [toastData, setToastData] = useState({
    message: '',
    type: 'success'
  });

  const showToast = (message, type = 'success') => {
    setToastData({ message, type });
  };

  const handleOpenDemo = (serviceTitle = '') => {
    setInitialServiceForDemo(typeof serviceTitle === 'string' ? serviceTitle : '');
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="app-wrapper">
      {/* Background Ambients */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* 2. Stats / Trust Section */}
        <StatsSection />

        {/* 3. About Section */}
        <AboutSection onOpenDemo={() => handleOpenDemo()} />

        {/* 4. Services Section */}
        <ServicesSection onOpenDemo={(srv) => handleOpenDemo(srv)} />

        {/* 5. Solutions / How It Works */}
        <SolutionsSection onOpenDemo={() => handleOpenDemo()} />

        {/* 6. Why Choose NexaAI */}
        <WhyChooseUs onOpenDemo={() => handleOpenDemo()} />

        {/* 7. Featured AI Dashboard */}
        <FeaturedDashboard onOpenDemo={() => handleOpenDemo()} />

        {/* 8. Call To Action */}
        <CallToAction onOpenDemo={() => handleOpenDemo()} />

        {/* 9. Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* 10. Footer */}
      <Footer onShowToast={showToast} />

      {/* Interactive Pilot / Demo Modal */}
      <InteractiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        initialService={initialServiceForDemo}
        onShowToast={showToast}
      />

      {/* Global Notification Toast */}
      <Toast
        message={toastData.message}
        type={toastData.type}
        onClose={() => setToastData({ message: '', type: 'success' })}
      />
    </div>
  );
}
