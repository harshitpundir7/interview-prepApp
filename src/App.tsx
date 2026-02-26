import React, { useState, useEffect } from 'react';
import { Coffee, Database, Code2, Check, Award, LayoutDashboard, Target, Zap, RotateCcw, Users } from 'lucide-react';
import { questionsData, sections, situationalData } from './data';

const iconMap = {
  Coffee,
  Database,
  Code2,
  Users
};

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('java');
  const [completedQuests, setCompletedQuests] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('trackerProgress');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    return new Set();
  });
  const [revisedQuests, setRevisedQuests] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('trackerReviseProgress');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse revise progress", e);
      }
    }
    return new Set();
  });
  const [showCelebration, setShowCelebration] = useState(false);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('trackerProgress', JSON.stringify(Array.from(completedQuests)));
  }, [completedQuests]);

  useEffect(() => {
    localStorage.setItem('trackerReviseProgress', JSON.stringify(Array.from(revisedQuests)));
  }, [revisedQuests]);

  const toggleQuestion = (id: number) => {
    setCompletedQuests(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleRevise = (id: number) => {
    setRevisedQuests(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];
  const sectionQuestions = questionsData.filter(q => q.sectionId === activeSectionId);
  const sectionCompleted = sectionQuestions.filter(q => completedQuests.has(q.id)).length;
  const sectionTotal = sectionQuestions.length;
  const sectionProgress = sectionTotal === 0 ? 0 : Math.round((sectionCompleted / sectionTotal) * 100);

  const totalCompleted = completedQuests.size;
  const totalQuestions = questionsData.length;
  const overallProgress = totalQuestions === 0 ? 0 : Math.round((totalCompleted / totalQuestions) * 100);

  // Show celebration when 100% completed
  useEffect(() => {
    if (totalCompleted === totalQuestions && totalQuestions > 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [totalCompleted, totalQuestions]);

  const resetProgress = () => {
    if (confirm("Are you sure you want to reset all your progress?")) {
      setCompletedQuests(new Set());
      setRevisedQuests(new Set());
    }
  };

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div className="dynamic-bg"></div>

      {/* Sidebar Navigation */}
      <aside className="sidebar glass-panel-strong">
        <div className="brand">
          <div className="brand-icon pulse-glow">
            <LayoutDashboard size={24} />
          </div>
          <span className="brand-text">CodeTracker</span>
        </div>

        <div className="overall-progress animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="overall-progress-header">
            <h3>Overall Mastery</h3>
            <span className="overall-percentage">{overallProgress}%</span>
          </div>
          <div className="progress-track">
            <div
              className="overall-fill progress-bar-fill progress-stripe-animated"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        <nav className="nav-menu">
          {sections.map((section, idx) => {
            const Icon = iconMap[section.icon as keyof typeof iconMap];
            const isActive = activeSectionId === section.id;
            const secQs = section.id === 'situational' ? [] : questionsData.filter(q => q.sectionId === section.id);
            const secTotal = section.id === 'situational' ? situationalData.length : secQs.length;
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
                <span className="nav-count">
                  {section.id === 'situational' ? `${situationalData.length} Q&A` : `${secCompleted}/${secTotal}`}
                </span>
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
            {React.createElement(iconMap[activeSection.icon as keyof typeof iconMap], { className: "section-badge-icon pulse-soft" })}
            <span>{activeSection.title} Mastery</span>
          </div>
          <h1 className="section-title text-transparent" style={{
            backgroundImage: `linear-gradient(to right, ${activeSectionId === 'java' ? '#f97316, #d97706' :
              activeSectionId === 'sql' ? '#60a5fa, #4f46e5' :
                activeSectionId === 'situational' ? '#a855f7, #ec4899' :
                  '#34d399, #0d9488'
              })`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {activeSection.title} Preparation
          </h1>
          <p className="section-desc">{activeSection.description}</p>
        </div>

        {activeSectionId === 'situational' ? (
          <div className="stats-grid animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="stat-card glass-panel hover-glow-blue card-lift">
              <div className="stat-icon-wrap bg-blue-500/10">
                <Target size={20} className="text-blue-400" />
              </div>
              <div className="stat-details">
                <div className="stat-title">Total Questions</div>
                <div className="stat-value text-blue-400">25</div>
              </div>
            </div>
            <div className="stat-card glass-panel hover-glow-amber card-lift">
              <div className="stat-icon-wrap bg-amber-500/10">
                <Zap size={20} className="text-amber-400" />
              </div>
              <div className="stat-details">
                <div className="stat-title">Category</div>
                <div className="stat-value text-amber-400" style={{ fontSize: '1.5rem' }}>Situational</div>
              </div>
            </div>
            <div className="stat-card glass-panel hover-glow-emerald card-lift">
              <div className="stat-icon-wrap bg-emerald-500/10">
                <Award size={20} className="text-emerald-400" />
              </div>
              <div className="stat-details">
                <div className="stat-title">Role Focus</div>
                <div className="stat-value text-emerald-400" style={{ fontSize: '1.3rem' }}>TPA / Sales</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="stats-grid animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="stat-card glass-panel hover-glow-blue card-lift">
              <div className="stat-icon-wrap bg-blue-500/10">
                <Target size={20} className="text-blue-400" />
              </div>
              <div className="stat-details">
                <div className="stat-title">Tasks Completed</div>
                <div className="stat-value text-blue-400">{sectionCompleted} <span className="stat-total">/ {sectionTotal}</span></div>
              </div>
            </div>
            <div className="stat-card glass-panel hover-glow-amber card-lift">
              <div className="stat-icon-wrap bg-amber-500/10">
                <Zap size={20} className="text-amber-400" />
              </div>
              <div className="stat-details">
                <div className="stat-title">Completion Rate</div>
                <div className="stat-value text-amber-400">{sectionProgress}%</div>
              </div>
            </div>
            <div className="stat-card glass-panel hover-glow-emerald card-lift">
              <div className="stat-icon-wrap bg-emerald-500/10">
                <Award size={20} className="text-emerald-400" />
              </div>
              <div className="stat-details">
                <div className="stat-title">Remaining</div>
                <div className="stat-value text-emerald-400">{sectionTotal - sectionCompleted}</div>
              </div>
            </div>
          </div>
        )}

        {activeSectionId === 'situational' ? (
          <div className="questions-list">
            {situationalData.map((q, idx) => (
              <div
                key={q.id}
                className="situational-item glass-panel animate-fade-up"
                style={{ animationDelay: `${0.1 + idx * 0.04}s` }}
              >
                <div className="situational-question-header">
                  <span className="situational-number">Q{idx + 1}</span>
                  <div className="situational-question-text">{q.question}</div>
                </div>
                <div className="situational-answer">
                  {q.answer.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} className="situational-para">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="questions-list">
            {sectionQuestions.map((q, idx) => {
              const isCompleted = completedQuests.has(q.id);
              const isRevised = revisedQuests.has(q.id);
              return (
                <div
                  key={q.id}
                  className={`question-item glass-panel animate-fade-up ${isCompleted ? 'completed' : ''} ${isRevised ? 'revised' : ''}`}
                  style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                >
                  <div className="checkboxes-wrapper">
                    <button
                      className={`checkbox-container done ${isCompleted ? 'checked' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleQuestion(q.id); }}
                      title="Mark as Done"
                    >
                      <div className="checkbox-bg"></div>
                      {isCompleted && <Check size={14} strokeWidth={4} className="check-icon" />}
                    </button>
                    <button
                      className={`checkbox-container revise ${isRevised ? 'checked' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleRevise(q.id); }}
                      title="Mark for Revision"
                    >
                      <div className="checkbox-bg"></div>
                      {isRevised && <RotateCcw size={14} strokeWidth={3} className="check-icon" />}
                    </button>
                  </div>
                  <div className="question-content">
                    <div className="question-number">Question {idx + 1}</div>
                    <div className="question-text">{q.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Celebration Overlay */}
      <div className={`celebration-overlay ${showCelebration ? 'visible' : ''}`}>
        <div className="celebration-particles"></div>
        <div className="celebration-card glass-panel-strong max-w-lg w-full mx-4">
          <div className="trophy-container pulse-glow">
            <Award className="trophy-icon" />
          </div>
          <h2 className="celebration-title text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
            Mastery Achieved!
          </h2>
          <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
            Astounding work! You have conquered all <span className="text-white font-bold">{totalQuestions}</span> preparation tasks.
            Your dedication to excellence is truly inspiring.
          </p>
          <button
            className="continue-btn"
            onClick={() => setShowCelebration(false)}
          >
            <span>Continue Your Journey</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
