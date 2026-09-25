import React, { useState } from 'react';
import { 
  Sparkles, 
  Workflow, 
  BarChart3, 
  MessageSquareCode, 
  Boxes, 
  Code2, 
  CloudCog, 
  ArrowRight 
} from 'lucide-react';
import styles from './ServicesSection.module.css';
import ServiceDetailModal from './ServiceDetailModal';

export default function ServicesSection({ onOpenDemo }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      shortTitle: 'Automation',
      category: 'Intelligent Orchestration',
      description: 'Automate repetitive business processes and workflows with self-healing, multi-agent AI pipelines.',
      fullDescription: 'Our AI Automation suite removes friction from repetitive enterprise workflows. By deploying autonomous agents capable of document processing, cross-system data synchronization, and contextual decision-making, we allow teams to focus on strategic initiatives.',
      icon: Workflow,
      color: '#38bdf8',
      tags: ['Autonomous Agents', 'RPA 2.0', 'Task Routing'],
      deliverables: [
        'Document & Invoice OCR extraction with 99.4% accuracy',
        'Multi-step workflow orchestration via state machines',
        'Automatic error recovery and fallback mechanisms',
        'Audit logs and human-in-the-loop validation dashboards'
      ],
      techStack: ['Python', 'LangGraph', 'Temporal', 'Redis Queue', 'FastAPI']
    },
    {
      id: 'intelligent-analytics',
      title: 'Intelligent Analytics',
      shortTitle: 'Analytics',
      category: 'Predictive Intelligence',
      description: 'Turn complex business data into useful insights with predictive modeling and real-time visualization.',
      fullDescription: 'Transform raw data into high-value intelligence. NexaAI builds custom predictive engines that detect operational anomalies, forecast market demand, and reveal hidden trends within milliseconds.',
      icon: BarChart3,
      color: '#818cf8',
      tags: ['Predictive Modeling', 'Anomaly Detection', 'BI Integration'],
      deliverables: [
        'Real-time streaming telemetry and trend forecasts',
        'Automated root-cause analysis on metric deviations',
        'Natural-language SQL queries for non-technical teams',
        'Interactive executive KPI glass dashboards'
      ],
      techStack: ['DuckDB', 'Apache Arrow', 'ClickHouse', 'TensorFlow', 'D3.js']
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots',
      shortTitle: 'Chatbots',
      category: 'Conversational AI',
      description: 'Create intelligent conversational assistants for customers and teams with deep contextual memory.',
      fullDescription: 'Enterprise conversational agents that understand subtle nuances, respect security boundaries, and resolve customer inquiries instantly across omnichannel platforms (Web, Slack, WhatsApp, Zendesk).',
      icon: MessageSquareCode,
      color: '#c084fc',
      tags: ['Omnichannel Support', 'RAG Engine', 'Context Memory'],
      deliverables: [
        'Enterprise RAG pipeline grounded on proprietary documents',
        'Multi-lingual real-time translation with sentiment awareness',
        'Seamless human escalation & agent handover',
        'Zero-hallucination fact verification guardrails'
      ],
      techStack: ['Llama 3 / Claude / GPT API', 'Qdrant Vector DB', 'WebSockets', 'LangChain']
    },
    {
      id: 'custom-ai-solutions',
      title: 'Custom AI Solutions',
      shortTitle: 'Custom AI',
      category: 'Domain-Specific Models',
      description: 'Develop AI-powered solutions tailored specifically to your unique business requirements and datasets.',
      fullDescription: 'When off-the-shelf APIs fall short, NexaAI designs custom neural architectures, fine-tunes domain models on proprietary data, and delivers bespoke algorithms with high accuracy and private deployment.',
      icon: Boxes,
      color: '#f43f5e',
      tags: ['LoRA Fine-Tuning', 'Proprietary Datasets', 'Private Models'],
      deliverables: [
        'Domain-specific tokenizers and custom embeddings',
        'Parameter-efficient fine-tuning (LoRA / QLoRA)',
        'Private on-premises or isolated VPC deployment',
        'Comprehensive benchmark & drift monitoring'
      ],
      techStack: ['PyTorch', 'Hugging Face', 'vLLM', 'Ray Distributed', 'Triton']
    },
    {
      id: 'web-app-development',
      title: 'Web & App Development',
      shortTitle: 'Web & App',
      category: 'Modern Digital Products',
      description: 'Build modern, responsive and scalable digital products engineered for smooth AI integrations.',
      fullDescription: 'We build ultra-fast, visually stunning web and mobile platforms with first-class AI capabilities baked into the user experience—from streaming generative responses to reactive interactive glass interfaces.',
      icon: Code2,
      color: '#10b981',
      tags: ['React & Next.js', 'Sub-second UX', 'Reactive AI UI'],
      deliverables: [
        'Modern reactive frontends with fluid micro-interactions',
        'Optimized streaming token UI components',
        'Mobile-responsive architectures across all viewports',
        'High Lighthouse performance scores (95+)'
      ],
      techStack: ['React 19', 'Vite', 'TypeScript', 'Node.js', 'Tailwind/Vanilla CSS']
    },
    {
      id: 'cloud-integration',
      title: 'Cloud Integration',
      shortTitle: 'Cloud AI',
      category: 'Distributed Infrastructure',
      description: 'Connect AI applications with modern cloud infrastructure, edge deployments, and secure APIs.',
      fullDescription: 'Bridge your AI workloads with global cloud platforms. We build fault-tolerant serverless architectures, configure auto-scaling GPU inference clusters, and ensure high availability at predictable costs.',
      icon: CloudCog,
      color: '#06b6d4',
      tags: ['Serverless GPU', 'Kubernetes', 'CI/CD Pipelines'],
      deliverables: [
        'Auto-scaling GPU inference nodes with zero cold start',
        'End-to-end Terraform & Infrastructure-as-Code setups',
        'Automated CI/CD pipelines for continuous model deployment',
        'Multi-region failover and distributed caching'
      ],
      techStack: ['AWS Bedrock', 'GCP Vertex', 'Azure AI', 'Kubernetes', 'Docker', 'Terraform']
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Our Expertise</span>
          </div>
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">AI Services</span>
          </h2>
          <p className="section-description">
            From autonomous workflow agents to enterprise predictive models, discover how NexaAI transforms business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div 
                key={service.id} 
                className={`glass-panel-interactive ${styles.serviceCard}`}
                style={{ '--service-color': service.color }}
              >
                <div className={styles.cardTop}>
                  <div 
                    className={styles.iconWrapper}
                    style={{ background: `rgba(255, 255, 255, 0.04)`, color: service.color, borderColor: `${service.color}40` }}
                  >
                    <IconComp size={24} />
                  </div>
                  <span className={styles.categoryTag}>{service.category}</span>
                </div>

                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>

                {/* Capability Tags */}
                <div className={styles.tagList}>
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {/* Card Action Link */}
                <button 
                  className={styles.learnMoreBtn}
                  onClick={() => setSelectedService(service)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} className={styles.arrowIcon} />
                </button>

                <div 
                  className={styles.cardHoverGlow}
                  style={{ background: `radial-gradient(circle at top right, ${service.color}22, transparent 65%)` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Detail Dialog */}
      {selectedService && (
        <ServiceDetailModal 
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onGetStarted={(serviceTitle) => {
            setSelectedService(null);
            onOpenDemo(serviceTitle);
          }}
        />
      )}
    </section>
  );
}
