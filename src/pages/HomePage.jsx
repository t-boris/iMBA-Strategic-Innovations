import { Link } from 'react-router-dom'
import { BookOpen, List, Brain, ArrowRight, Lock, Layers } from 'lucide-react'
import { modules, getAllLectures } from '../data/lectures'
import { glossary } from '../data/glossary'
import { quizQuestions } from '../data/quiz'

export default function HomePage() {
  const allLectures = getAllLectures()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
          Strategic Innovations
        </h1>
        <p className="text-xs" style={{ color: 'var(--text-sec)' }}>
          iMBA Course — Notes, Glossary & Quiz
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {[
          { label: 'Modules', value: modules.length, icon: Layers, color: 'var(--accent)' },
          { label: 'Lectures', value: allLectures.length, icon: BookOpen, color: 'var(--accent-light)' },
          { label: 'Terms', value: glossary.length, icon: List, color: 'var(--success)' },
          { label: 'Questions', value: quizQuestions.length, icon: Brain, color: 'var(--warning)' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="rounded-lg p-2.5 border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex items-center gap-1 mb-0.5">
              <Icon size={11} style={{ color }} />
              <span className="text-[9px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-sec)' }}>
                {label}
              </span>
            </div>
            <span className="text-lg font-bold" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Modules
        </h2>
        <div className="space-y-3">
          {modules.map((m) => {
            const hasLectures = m.lectures.length > 0
            return (
              <div
                key={m.id}
                className="rounded-lg border overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', opacity: hasLectures ? 1 : 0.6 }}
              >
                {/* Module header */}
                <div className="flex items-center gap-3 px-3 py-2.5">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    style={{ background: hasLectures ? 'var(--accent)' : 'var(--text-sec)' }}
                  >
                    {m.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {m.title}
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-sec)' }}>
                      {hasLectures ? `${m.lectures.length} lecture${m.lectures.length > 1 ? 's' : ''}` : 'Coming soon'}
                      {' — '}{m.description}
                    </div>
                  </div>
                  {!hasLectures && <Lock size={12} style={{ color: 'var(--text-sec)' }} />}
                </div>

                {/* Lectures in module */}
                {hasLectures && (
                  <div className="border-t px-3 py-1.5" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
                    {m.lectures.map((l) => (
                      <Link
                        key={l.id}
                        to={`/lecture/${l.id}`}
                        className="flex items-center gap-2 py-1.5 text-[11px] transition-colors rounded px-2 -mx-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                        <span className="flex-1 truncate">{l.title}</span>
                        <span className="text-[9px]" style={{ color: 'var(--text-sec)' }}>{l.sections.length} sections</span>
                        <ArrowRight size={11} style={{ color: 'var(--text-sec)' }} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          to="/glossary"
          className="p-3 rounded-lg border text-center transition-all hover:shadow-sm"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <List size={18} className="mx-auto mb-1" style={{ color: 'var(--success)' }} />
          <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>Glossary</div>
          <div className="text-[10px]" style={{ color: 'var(--text-sec)' }}>{glossary.length} terms</div>
        </Link>
        <Link
          to="/quiz"
          className="p-3 rounded-lg border text-center transition-all hover:shadow-sm"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <Brain size={18} className="mx-auto mb-1" style={{ color: 'var(--warning)' }} />
          <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>Quiz</div>
          <div className="text-[10px]" style={{ color: 'var(--text-sec)' }}>{quizQuestions.length} questions</div>
        </Link>
      </div>
    </div>
  )
}
