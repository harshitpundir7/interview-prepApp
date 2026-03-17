import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Coffee, Database, Code2, Check, Award, LayoutDashboard, Target, Zap, RotateCcw, Users, Globe, Server, Mic, MicOff, Loader2, Play, ChevronDown } from 'lucide-react';
import { questionsData, sections } from './data';
import { evaluateAnswer, evaluateCode } from './utils/groq';
import type { EvaluationResult, CodeEvaluationResult } from './utils/groq';

const iconMap = { Coffee, Database, Code2, Users, Globe, Server };

// Web Speech API Types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// ── Shared Evaluation Result Panels ────────────────────────────────────────

function VoiceEvalPanel({ result }: { result: EvaluationResult }) {
  const scoreColor = result.score >= 80 ? '#10b981' : result.score >= 50 ? '#f59e0b' : '#ef4444';
  const scoreRGB = result.score >= 80 ? '16, 185, 129' : result.score >= 50 ? '245, 158, 11' : '239, 68, 68';

  return (
    <div className="eval-result animate-scale-in" style={{ '--eval-color': scoreColor, '--eval-color-rgb': scoreRGB } as any}>
      <div className="eval-header">
        <div className="flex items-center gap-2">
          <Award size={20} color={scoreColor} className="pulse-soft" />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e4e4e7', letterSpacing: '0.02em' }}>
            AI Evaluation Result
          </span>
        </div>
        <div className="eval-score-badge">{result.score}</div>
      </div>
      <div className="eval-feedback-box">
        <p className="eval-feedback-text">{result.feedback}</p>
      </div>
      <div className="eval-ideal-section">
        <div className="eval-ideal-header"><Check size={14}/> Ideal Response</div>
        <p className="eval-ideal-text">{result.idealAnswer}</p>
      </div>
    </div>
  );
}

function CodeEvalPanel({ result }: { result: CodeEvaluationResult }) {
  const scoreColor = result.score >= 80 ? '#10b981' : result.score >= 50 ? '#f59e0b' : '#ef4444';
  const scoreRGB = result.score >= 80 ? '16, 185, 129' : result.score >= 50 ? '245, 158, 11' : '239, 68, 68';

  return (
    <div className="eval-result animate-scale-in" style={{ '--eval-color': scoreColor, '--eval-color-rgb': scoreRGB } as any}>
      <div className="eval-header">
        <div className="flex items-center gap-2">
          <Code2 size={20} color={scoreColor} className="pulse-soft" />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e4e4e7', letterSpacing: '0.02em' }}>
            AI Code Review
          </span>
        </div>
        <div className="eval-score-badge">{result.score}</div>
      </div>
      
      <div className="eval-feedback-box">
        <p className="eval-feedback-text">{result.feedback}</p>
      </div>

      <div className="code-eval-grid">
        <div className="code-eval-item">
          <span className="code-eval-label">⏱ Target Time</span>
          <span className="code-eval-value">{result.timeComplexity}</span>
        </div>
        <div className="code-eval-item">
          <span className="code-eval-label">🗂 Target Space</span>
          <span className="code-eval-value">{result.spaceComplexity}</span>
        </div>
      </div>

      {result.correctness && (
        <div className="eval-ideal-section">
          <div className="eval-ideal-header"><Target size={14}/> Correctness Analysis</div>
          <p className="eval-ideal-text">{result.correctness}</p>
        </div>
      )}
      {result.improvements && (
        <div className="eval-ideal-section">
          <div className="eval-ideal-header"><Zap size={14}/> Suggested Improvements</div>
          <p className="eval-ideal-text">{result.improvements}</p>
        </div>
      )}
    </div>
  );
}

// ── Voice Interview Panel ───────────────────────────────────────────────────

function VoiceInterviewPanel({
  questionText,
  questionId,
  onMarkDone,
}: {
  questionText: string;
  questionId: number;
  onMarkDone: (id: number) => void;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    return () => { if (recognitionRef.current) recognitionRef.current.stop(); };
  }, []);

  const startRecording = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Your browser does not support voice recording. Please use Chrome or Edge.'); return; }
    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.onstart = () => { setIsRecording(true); setTranscript(''); setResult(null); };
    recognition.onresult = (e: any) => {
      let text = '';
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      setTranscript(text);
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  const handleEvaluate = async () => {
    if (!transcript.trim()) { alert('Please record your answer first.'); return; }
    setIsEvaluating(true);
    try {
      const r = await evaluateAnswer(questionText, transcript);
      setResult(r);
      if (r.score >= 80) onMarkDone(questionId);
    } catch (e: any) {
      alert(e.message || 'Evaluation failed.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="interview-panel animate-fade-up">
      <div className="interview-panel-actions">
        <button
          className={`mic-button ${isRecording ? 'recording' : ''}`}
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isEvaluating}
        >
          {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
          {isRecording ? 'Stop Recording' : '🎤 Start Recording'}
        </button>

        {transcript && !isRecording && (
          <button
            className="eval-action-btn"
            onClick={handleEvaluate}
            disabled={isEvaluating}
          >
            {isEvaluating ? <Loader2 size={16} className="animate-spin" /> : <Award size={16} />}
            {isEvaluating ? 'AI Grading...' : 'Evaluate Answer'}
          </button>
        )}
      </div>

      {(transcript || isRecording) && (
        <div className="transcript-box">
          {transcript || <em style={{ color: '#71717a' }}>Listening... speak your answer now.</em>}
        </div>
      )}

      {result && <VoiceEvalPanel result={result} />}
    </div>
  );
}

// ── Code Editor Panel (DSA) ────────────────────────────────────────────────

const LANGUAGES = ['javascript', 'python', 'java', 'cpp', 'typescript'];

function CodeEditorPanel({
  questionText,
  questionId,
  onMarkDone,
}: {
  questionText: string;
  questionId: number;
  onMarkDone: (id: number) => void;
}) {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your solution here\n');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<CodeEvaluationResult | null>(null);

  const handleEvaluate = async () => {
    if (!code.trim() || code.trim() === '// Write your solution here') {
      alert('Please write some code before evaluating.');
      return;
    }
    setIsEvaluating(true);
    try {
      const r = await evaluateCode(questionText, code, language);
      setResult(r);
      if (r.score >= 80) onMarkDone(questionId);
    } catch (e: any) {
      alert(e.message || 'Code evaluation failed.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="code-editor-panel animate-fade-up">
      <div className="code-editor-toolbar">
        <div className="flex items-center">
          <div className="window-controls">
            <div className="window-dot dot-red"></div>
            <div className="window-dot dot-yellow"></div>
            <div className="window-dot dot-green"></div>
          </div>
          <div className="lang-select-wrapper">
            <select
              className="lang-select"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              {LANGUAGES.map(l => (
                <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>
              ))}
            </select>
            <ChevronDown size={14} className="lang-select-chevron" />
          </div>
        </div>

        <button className="eval-action-btn hover-glow" onClick={handleEvaluate} disabled={isEvaluating}>
          {isEvaluating ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
          {isEvaluating ? 'Reviewing...' : 'Submit Code'}
        </button>
      </div>

      <div className="monaco-wrapper">
        <Editor
          height="320px"
          language={language}
          value={code}
          onChange={(val) => setCode(val || '')}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbersMinChars: 3,
            padding: { top: 16, bottom: 16 },
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            smoothScrolling: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on"
          }}
        />
      </div>

      {result && (
        <div style={{ padding: '0 1.5rem 1.5rem' }}>
          <CodeEvalPanel result={result} />
        </div>
      )}
    </div>
  );
}

// ── Question Card ───────────────────────────────────────────────────────────

function QuestionCard({
  q,
  displayIdx,
  isCompleted,
  isRevised,
  isDSA,
  onToggleDone,
  onToggleRevise,
  onMarkDone,
}: {
  q: { id: number; text: string; sectionId: string; subsection?: string };
  displayIdx: number;
  isCompleted: boolean;
  isRevised: boolean;
  isDSA: boolean;
  onToggleDone: (id: number) => void;
  onToggleRevise: (id: number) => void;
  onMarkDone: (id: number) => void;
}) {
  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => setPanelOpen(v => !v);

  return (
    <div className={`question-item glass-panel animate-fade-up ${isCompleted ? 'completed' : ''} ${isRevised ? 'revised' : ''}`}>
      <div className="checkboxes-wrapper">
        <button
          className={`checkbox-container done ${isCompleted ? 'checked' : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleDone(q.id); }}
          title="Mark as Done"
        >
          <div className="checkbox-bg"></div>
          {isCompleted && <Check size={14} strokeWidth={4} className="check-icon" />}
        </button>
        <button
          className={`checkbox-container revise ${isRevised ? 'checked' : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleRevise(q.id); }}
          title="Mark for Revision"
        >
          <div className="checkbox-bg"></div>
          {isRevised && <RotateCcw size={14} strokeWidth={3} className="check-icon" />}
        </button>
      </div>

      <div className="question-content">
        <div className="question-number">Question {displayIdx}</div>
        <div className="question-text">{q.text}</div>

        {/* Toggle Button */}
        <button
          className={`interview-toggle-btn ${panelOpen ? 'active' : ''}`}
          onClick={togglePanel}
        >
          {isDSA
            ? (panelOpen ? '✖ Close Editor' : '💻 Write Code')
            : (panelOpen ? '✖ Close' : '🎤 Interview Yourself')}
        </button>

        {/* Panel */}
        {panelOpen && (
          isDSA
            ? <CodeEditorPanel questionText={q.text} questionId={q.id} onMarkDone={onMarkDone} />
            : <VoiceInterviewPanel questionText={q.text} questionId={q.id} onMarkDone={onMarkDone} />
        )}
      </div>
    </div>
  );
}

// ── Main App ────────────────────────────────────────────────────────────────

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('java');
  
  // Custom Hook Logic remains the same
  const [completedQuests, setCompletedQuests] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('trackerProgress');
    if (saved) { try { return new Set(JSON.parse(saved)); } catch (e) { console.error(e); } }
    return new Set();
  });
  const [revisedQuests, setRevisedQuests] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('trackerReviseProgress');
    if (saved) { try { return new Set(JSON.parse(saved)); } catch (e) { console.error(e); } }
    return new Set();
  });
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    localStorage.setItem('trackerProgress', JSON.stringify(Array.from(completedQuests)));
  }, [completedQuests]);

  useEffect(() => {
    localStorage.setItem('trackerReviseProgress', JSON.stringify(Array.from(revisedQuests)));
  }, [revisedQuests]);

  const toggleQuestion = (id: number) => {
    setCompletedQuests(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleRevise = (id: number) => {
    setRevisedQuests(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const markDone = (id: number) => setCompletedQuests(prev => new Set(prev).add(id));

  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];
  const sectionQuestions = questionsData.filter(q => q.sectionId === activeSectionId);
  const sectionCompleted = sectionQuestions.filter(q => completedQuests.has(q.id)).length;
  const sectionTotal = sectionQuestions.length;
  const sectionProgress = sectionTotal === 0 ? 0 : Math.round((sectionCompleted / sectionTotal) * 100);
  const totalCompleted = completedQuests.size;
  const totalQuestions = questionsData.length;
  const overallProgress = totalQuestions === 0 ? 0 : Math.round((totalCompleted / totalQuestions) * 100);
  const isDSA = activeSectionId === 'dsa';

  useEffect(() => {
    if (totalCompleted === totalQuestions && totalQuestions > 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [totalCompleted, totalQuestions]);

  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all your progress?')) {
      setCompletedQuests(new Set());
      setRevisedQuests(new Set());
    }
  };

  const gradientColor = activeSectionId === 'java' ? '#f97316, #d97706'
    : activeSectionId === 'sql' ? '#60a5fa, #4f46e5'
      : activeSectionId === 'webdev' ? '#22d3ee, #0ea5e9'
        : activeSectionId === 'systemdesign' ? '#c084fc, #c026d3'
          : '#34d399, #0d9488';

  // Group subsection questions
  const groupedQuestions = (() => {
    if (!sectionQuestions.some(q => q.subsection)) return null;
    const groups: { name: string; questions: typeof sectionQuestions }[] = [];
    const seen = new Map<string, typeof sectionQuestions>();
    sectionQuestions.forEach(q => {
      const sub = q.subsection || 'General';
      if (!seen.has(sub)) { seen.set(sub, []); groups.push({ name: sub, questions: seen.get(sub)! }); }
      seen.get(sub)!.push(q);
    });
    return groups;
  })();

  return (
    <div className="app-container">
      <div className="dynamic-bg"></div>

      {/* Sidebar */}
      <aside className="sidebar glass-panel-strong">
        <div className="brand">
          <div className="brand-icon pulse-glow"><LayoutDashboard size={24} /></div>
          <span className="brand-text">CodeTracker</span>
        </div>

        <div className="overall-progress animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="overall-progress-header">
            <h3>Overall Mastery</h3>
            <span className="overall-percentage">{overallProgress}%</span>
          </div>
          <div className="progress-track">
            <div className="overall-fill progress-bar-fill progress-stripe-animated" style={{ width: `${overallProgress}%` }} />
          </div>
        </div>

        <nav className="nav-menu">
          {sections.map((section, idx) => {
            const Icon = iconMap[section.icon as keyof typeof iconMap];
            const isActive = activeSectionId === section.id;
            const secQs = questionsData.filter(q => q.sectionId === section.id);
            const secTotal = secQs.length;
            const secCompleted = secQs.filter(q => completedQuests.has(q.id)).length;
            const secProg = secTotal === 0 ? 0 : Math.round((secCompleted / secTotal) * 100);
            return (
              <button
                key={section.id}
                className={`nav-item ${isActive ? 'active' : ''} animate-fade-right`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                onClick={() => setActiveSectionId(section.id)}
              >
                <div className="nav-icon" style={{ color: isActive ? '#fff' : '' }}>
                  <Icon size={20} className={isActive ? 'bounce-subtle' : ''} />
                </div>
                <div className="nav-info">
                  <span className="nav-title">{section.title}</span>
                  <div className="nav-progress">
                    <div
                      className="nav-progress-fill progress-bar-fill"
                      style={{
                        width: `${secProg}%`,
                        background: isActive ? 'linear-gradient(90deg, #6366f1, #d946ef)' : 'transparent',
                        backgroundColor: isActive ? 'transparent' : '#3f3f46'
                      }}
                    />
                  </div>
                </div>
                <span className="nav-count">{`${secCompleted}/${secTotal}`}</span>
              </button>
            );
          })}
        </nav>

        <button className="reset-button animate-fade-up mt-auto" style={{ animationDelay: '0.6s' }} onClick={resetProgress}>
          <RotateCcw size={16} className="reset-icon" />
          <span>Reset Progress</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header-section animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="section-badge badge-glow">
            {React.createElement(iconMap[activeSection.icon as keyof typeof iconMap], { className: 'section-badge-icon pulse-soft' })}
            <span>{activeSection.title} Mastery</span>
          </div>
          <h1 className="section-title text-transparent bg-clip-text" style={{
            backgroundImage: `linear-gradient(to right, ${gradientColor})`,
          }}>
            {activeSection.title} Preparation
          </h1>
          <p className="section-desc">{activeSection.description}</p>
        </div>

        <div className="stats-grid animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="stat-card glass-panel hover-glow-blue card-lift">
            <div className="stat-icon-wrap bg-blue-500/10"><Target size={20} className="text-blue-400" /></div>
            <div className="stat-details">
              <div className="stat-title">Tasks Completed</div>
              <div className="stat-value text-blue-400">{sectionCompleted} <span className="stat-total">/ {sectionTotal}</span></div>
            </div>
          </div>
          <div className="stat-card glass-panel hover-glow-amber card-lift">
            <div className="stat-icon-wrap bg-amber-500/10"><Zap size={20} className="text-amber-400" /></div>
            <div className="stat-details">
              <div className="stat-title">Completion Rate</div>
              <div className="stat-value text-amber-400">{sectionProgress}%</div>
            </div>
          </div>
          <div className="stat-card glass-panel hover-glow-emerald card-lift">
            <div className="stat-icon-wrap bg-emerald-500/10"><Award size={20} className="text-emerald-400" /></div>
            <div className="stat-details">
              <div className="stat-title">Remaining</div>
              <div className="stat-value text-emerald-400">{sectionTotal - sectionCompleted}</div>
            </div>
          </div>
        </div>

        <div className="questions-list">
          {groupedQuestions ? (() => {
            let globalIdx = 0;
            return groupedQuestions.map(group => (
              <div key={group.name} className="webdev-subsection">
                <div className="webdev-subsection-header">
                  <span className="webdev-subsection-title">{group.name}</span>
                  <span className="webdev-subsection-count">{group.questions.length} Questions</span>
                </div>
                {group.questions.map(q => {
                  const displayIdx = ++globalIdx;
                  return (
                    <QuestionCard
                      key={q.id}
                      q={q}
                      displayIdx={displayIdx}
                      isCompleted={completedQuests.has(q.id)}
                      isRevised={revisedQuests.has(q.id)}
                      isDSA={isDSA}
                      onToggleDone={toggleQuestion}
                      onToggleRevise={toggleRevise}
                      onMarkDone={markDone}
                    />
                  );
                })}
              </div>
            ));
          })() : sectionQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              q={q}
              displayIdx={idx + 1}
              isCompleted={completedQuests.has(q.id)}
              isRevised={revisedQuests.has(q.id)}
              isDSA={isDSA}
              onToggleDone={toggleQuestion}
              onToggleRevise={toggleRevise}
              onMarkDone={markDone}
            />
          ))}
        </div>
      </main>

      {/* Celebration Overlay */}
      <div className={`celebration-overlay ${showCelebration ? 'visible' : ''}`}>
        <div className="celebration-particles"></div>
        <div className="celebration-card glass-panel-strong max-w-lg w-full mx-4">
          <div className="trophy-container pulse-glow"><Award className="trophy-icon" /></div>
          <h2 className="celebration-title text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Mastery Achieved!</h2>
          <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
            Astounding work! You have conquered all <span className="text-white font-bold">{totalQuestions}</span> preparation tasks. Your dedication to excellence is truly inspiring.
          </p>
          <button className="continue-btn" onClick={() => setShowCelebration(false)}>
            <span>Continue Your Journey</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
