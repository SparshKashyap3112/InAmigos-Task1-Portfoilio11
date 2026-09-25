import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Activity, 
  Terminal, 
  Play, 
  RefreshCw, 
  CheckCircle, 
  Server, 
  Layers, 
  Zap, 
  TrendingUp, 
  ShieldAlert, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import styles from './FeaturedDashboard.module.css';

export default function FeaturedDashboard({ onOpenDemo }) {
  const [selectedModel, setSelectedModel] = useState('nexa-deepreason');
  const [activeTab, setActiveTab] = useState('metrics'); // 'metrics' | 'logs' | 'playground'
  const [isSimulating, setIsSimulating] = useState(false);
  const [testPrompt, setTestPrompt] = useState('Analyze Q3 financial anomalies and automate report routing');
  const [simOutput, setSimOutput] = useState('');
  
  // Realtime logs state
  const [logs, setLogs] = useState([
    { id: 1, time: '21:52:04', type: 'info', text: 'Vector cluster [eu-west-1] synchronized 45,000 document embeddings' },
    { id: 2, time: '21:52:19', type: 'success', text: 'Invoice processing agent routed batch #8921 with 99.8% confidence' },
    { id: 3, time: '21:52:32', type: 'info', text: 'Auto-scaling GPU inference cluster: node count scaled to 16' },
    { id: 4, time: '21:52:48', type: 'success', text: 'Zero-knowledge guardrail validated 1,200 concurrent user sessions' },
  ]);

  // Model statistics map
  const modelStats = {
    'nexa-deepreason': {
      name: 'Nexa-DeepReason v3.5',
      latency: '14.2ms',
      precision: '99.82%',
      throughput: '3,850 tok/s',
      memory: '4.2 GB VRAM',
      status: 'Optimal'
    },
    'nexa-fastinfer': {
      name: 'Nexa-FastInfer v2.0',
      latency: '6.8ms',
      precision: '98.90%',
      throughput: '8,420 tok/s',
      memory: '1.8 GB VRAM',
      status: 'Ultra-Fast'
    },
    'nexa-visionembed': {
      name: 'Nexa-VisionEmbed v1.4',
      latency: '18.5ms',
      precision: '99.45%',
      throughput: '2,100 frames/s',
      memory: '5.6 GB VRAM',
      status: 'Multimodal'
    }
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimOutput('Initializing agent reasoning chain...');

    setTimeout(() => {
      setSimOutput('Embedding input payload (1536-dim vector)...');
    }, 400);

    setTimeout(() => {
      setSimOutput('Querying secure enterprise knowledge graph...');
    }, 800);

    setTimeout(() => {
      setSimOutput('Executing decision node: Anomaly detected in variance ledger #402. Routing automated notification to CFO channel via Webhook. Execution completed in 12.4ms (0 errors).');
      setIsSimulating(false);
      
      // Append a new log
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      setLogs(prev => [
        { id: Date.now(), time: timeStr, type: 'success', text: `Test simulation executed on [${modelStats[selectedModel].name}]: 100% success.` },
        ...prev.slice(0, 4)
      ]);
    }, 1400);
  };

  return (
    <section id="dashboard" className={styles.dashboardSection}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Live Console</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">AI Operations Console</span>
          </h2>
          <p className="section-description">
            Experience our unified command center for real-time model telemetry, autonomous agent orchestration, and system reliability monitoring.
          </p>
        </div>

        {/* Outer Glassmorphic Dashboard Frame */}
        <div className={`glass-panel ${styles.dashboardFrame}`}>
          {/* Top Control Header */}
          <div className={styles.frameHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.statusGroup}>
                <span className="status-beacon"></span>
                <span className={styles.systemStatusText}>ALL SYSTEMS HEALTHY</span>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.regionInfo}>
                <Server size={14} className={styles.cyanIcon} />
                <span>US-East / Global Edge Mesh (32 Nodes)</span>
              </div>
            </div>

            {/* Model Switcher */}
            <div className={styles.modelSwitcher}>
              <span className={styles.switcherLabel}>Active Engine:</span>
              <div className={styles.modelPillGroup}>
                {Object.keys(modelStats).map((key) => (
                  <button
                    key={key}
                    className={`${styles.modelPill} ${selectedModel === key ? styles.modelPillActive : ''}`}
                    onClick={() => setSelectedModel(key)}
                  >
                    {modelStats[key].name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Tabs for Dashboard */}
          <div className={styles.tabBar}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'metrics' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('metrics')}
            >
              <Activity size={16} />
              <span>Real-Time Telemetry</span>
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'logs' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('logs')}
            >
              <Terminal size={16} />
              <span>Live Agent Activity Stream</span>
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'playground' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('playground')}
            >
              <Zap size={16} />
              <span>Interactive Workflow Sandbox</span>
            </button>
          </div>

          {/* Dashboard Main Content Area */}
          <div className={styles.dashboardContent}>
            {/* KPI Overview Row */}
            <div className={styles.kpiRow}>
              <div className={styles.kpiCard}>
                <span className={styles.kpiLabel}>Inference Latency</span>
                <div className={styles.kpiValueGroup}>
                  <span className={styles.kpiNumber}>{modelStats[selectedModel].latency}</span>
                  <span className={styles.kpiBadgeGreen}>-18% vs P99</span>
                </div>
                <div className={styles.miniBar}>
                  <div className={styles.miniBarFill} style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className={styles.kpiCard}>
                <span className={styles.kpiLabel}>Precision Score</span>
                <div className={styles.kpiValueGroup}>
                  <span className={styles.kpiNumber}>{modelStats[selectedModel].precision}</span>
                  <span className={styles.kpiBadgePurple}>Enterprise</span>
                </div>
                <div className={styles.miniBar}>
                  <div className={styles.miniBarFill} style={{ width: '99%' }}></div>
                </div>
              </div>

              <div className={styles.kpiCard}>
                <span className={styles.kpiLabel}>Cluster Throughput</span>
                <div className={styles.kpiValueGroup}>
                  <span className={styles.kpiNumber}>{modelStats[selectedModel].throughput}</span>
                  <span className={styles.kpiBadgeCyan}>Peak Load</span>
                </div>
                <div className={styles.miniBar}>
                  <div className={styles.miniBarFill} style={{ width: '78%' }}></div>
                </div>
              </div>

              <div className={styles.kpiCard}>
                <span className={styles.kpiLabel}>Memory Footprint</span>
                <div className={styles.kpiValueGroup}>
                  <span className={styles.kpiNumber}>{modelStats[selectedModel].memory}</span>
                  <span className={styles.kpiBadgeGreen}>Optimized</span>
                </div>
                <div className={styles.miniBar}>
                  <div className={styles.miniBarFill} style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            {/* Dynamic Viewport According to Tab */}
            {activeTab === 'metrics' && (
              <div className={styles.metricsViewGrid}>
                {/* Visual Chart Card */}
                <div className={styles.chartPanel}>
                  <div className={styles.panelHeader}>
                    <div className={styles.panelTitleGroup}>
                      <TrendingUp size={16} className={styles.cyanIcon} />
                      <span className={styles.panelTitle}>Multi-Region Inference Waveform & Token Rate</span>
                    </div>
                    <span className={styles.panelSub}>Last 60 seconds</span>
                  </div>

                  {/* SVG Waveform Visualization */}
                  <div className={styles.svgChartContainer}>
                    <svg className={styles.chartSvg} viewBox="0 0 600 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Purple Curve Area */}
                      <path 
                        d="M 0 120 Q 80 60 150 90 T 300 50 T 450 80 T 600 40 L 600 160 L 0 160 Z" 
                        fill="url(#purpleGrad)" 
                      />
                      <path 
                        d="M 0 120 Q 80 60 150 90 T 300 50 T 450 80 T 600 40" 
                        fill="none" 
                        stroke="#8b5cf6" 
                        strokeWidth="2.5" 
                      />

                      {/* Cyan Curve Area */}
                      <path 
                        d="M 0 140 Q 90 80 180 110 T 360 40 T 480 65 T 600 20 L 600 160 L 0 160 Z" 
                        fill="url(#cyanGrad)" 
                      />
                      <path 
                        d="M 0 140 Q 90 80 180 110 T 360 40 T 480 65 T 600 20" 
                        fill="none" 
                        stroke="#38bdf8" 
                        strokeWidth="3" 
                      />

                      {/* Dynamic Peak Points */}
                      <circle cx="360" cy="40" r="5" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)" />
                      <circle cx="600" cy="20" r="5" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)" />
                    </svg>

                    <div className={styles.chartLegend}>
                      <div className={styles.legendItem}>
                        <span className={styles.legendDotCyan}></span>
                        <span>Primary Cluster [Tokens/sec]</span>
                      </div>
                      <div className={styles.legendItem}>
                        <span className={styles.legendDotPurple}></span>
                        <span>Secondary Failover Mesh</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Panel: Health & Status Nodes */}
                <div className={styles.healthPanel}>
                  <div className={styles.panelHeader}>
                    <span className={styles.panelTitle}>Pipeline Node Matrix</span>
                    <span className={styles.badgePillGreen}>100% Operational</span>
                  </div>

                  <div className={styles.nodeList}>
                    <div className={styles.nodeRow}>
                      <div className={styles.nodeInfo}>
                        <span className="status-beacon"></span>
                        <span className={styles.nodeName}>Vector Shard A (HNSW Index)</span>
                      </div>
                      <span className={styles.nodeMetric}>0.7ms</span>
                    </div>

                    <div className={styles.nodeRow}>
                      <div className={styles.nodeInfo}>
                        <span className="status-beacon"></span>
                        <span className={styles.nodeName}>Agent Dispatcher (Temporal)</span>
                      </div>
                      <span className={styles.nodeMetric}>1.2ms</span>
                    </div>

                    <div className={styles.nodeRow}>
                      <div className={styles.nodeInfo}>
                        <span className="status-beacon"></span>
                        <span className={styles.nodeName}>Content Guardrail (LlamaGuard)</span>
                      </div>
                      <span className={styles.nodeMetric}>2.1ms</span>
                    </div>

                    <div className={styles.nodeRow}>
                      <div className={styles.nodeInfo}>
                        <span className="status-beacon"></span>
                        <span className={styles.nodeName}>WebSocket Live Stream Gateway</span>
                      </div>
                      <span className={styles.nodeMetric}>0.4ms</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'logs' && (
              <div className={styles.logsView}>
                <div className={styles.terminalWindow}>
                  <div className={styles.terminalTop}>
                    <span className={styles.terminalTitle}>nexa-agent-stream.log (Live Telemetry)</span>
                    <button className={styles.clearLogsBtn} onClick={() => setLogs([])}>
                      Clear Stream
                    </button>
                  </div>
                  <div className={styles.terminalBody}>
                    {logs.map((log) => (
                      <div key={log.id} className={styles.logLine}>
                        <span className={styles.logTime}>[{log.time}]</span>
                        <span className={`${styles.logTag} ${log.type === 'success' ? styles.tagSuccess : styles.tagInfo}`}>
                          {log.type.toUpperCase()}
                        </span>
                        <span className={styles.logText}>{log.text}</span>
                      </div>
                    ))}
                    <div className={styles.logLinePulse}>
                      <span className={styles.cursorBlink}>&gt;</span>
                      <span className={styles.listeningText}>Listening for real-time edge triggers...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'playground' && (
              <div className={styles.playgroundView}>
                <div className={styles.playgroundInputCard}>
                  <label className={styles.playgroundLabel}>
                    <span>Simulate Autonomous Task:</span>
                    <span className={styles.presetTip}>Select or edit prompt</span>
                  </label>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      className={styles.playInput}
                      value={testPrompt}
                      onChange={(e) => setTestPrompt(e.target.value)}
                      placeholder="Enter workflow or business problem description..."
                    />
                    <button 
                      className="btn btn-primary"
                      onClick={handleRunSimulation}
                      disabled={isSimulating}
                    >
                      <Play size={15} />
                      <span>{isSimulating ? 'Processing...' : 'Run Simulation'}</span>
                    </button>
                  </div>

                  {/* Preset quick buttons */}
                  <div className={styles.presetsRow}>
                    <span className={styles.presetLabel}>Presets:</span>
                    <button 
                      className={styles.presetChip}
                      onClick={() => setTestPrompt('Analyze Q3 financial anomalies and automate report routing')}
                    >
                      Financial Anomaly Audit
                    </button>
                    <button 
                      className={styles.presetChip}
                      onClick={() => setTestPrompt('Generate multi-lingual customer support response with high sentiment score')}
                    >
                      Support Triage
                    </button>
                    <button 
                      className={styles.presetChip}
                      onClick={() => setTestPrompt('Ingest 2,000 PDF invoices and extract line items into ERP schema')}
                    >
                      Invoice Extraction
                    </button>
                  </div>
                </div>

                {/* Simulation Output Area */}
                {simOutput && (
                  <div className={styles.simOutputCard}>
                    <div className={styles.simHeader}>
                      <span className={styles.simTag}>AGENT OUTPUT FEEDBACK</span>
                      <span className={styles.simSuccessTag}>
                        <CheckCircle size={14} />
                        Validated
                      </span>
                    </div>
                    <p className={styles.simResultText}>{simOutput}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Frame Bottom Status Bar */}
          <div className={styles.frameFooter}>
            <div className={styles.footerLeft}>
              <span className={styles.footerLabel}>Connected Cluster:</span>
              <span className={styles.footerVal}>prod-us-east-mesh.nexa.internal</span>
            </div>
            <button className={styles.viewFullConsoleBtn} onClick={onOpenDemo}>
              <span>Launch Enterprise Console</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
