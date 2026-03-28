import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { BookOpen, GraduationCap, List, Brain, Sun, Moon, Menu, X, ChevronRight, ChevronDown, Lock } from 'lucide-react'
import { modules } from '../data/lectures'

const nav = [
  { to: '/', label: 'Home', icon: BookOpen },
  { to: '/glossary', label: 'Glossary', icon: List },
  { to: '/quiz', label: 'Quiz', icon: Brain },
]

export default function Layout({ children }) {
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedModules, setExpandedModules] = useState({ 1: true })

  const isActive = (path) => location.pathname === path

  const toggleModule = (id) => {
    setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 flex flex-col w-56 border-r transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
          <span className="font-semibold text-xs tracking-tight" style={{ color: 'var(--text-primary)' }}>
            iMBA Strategic
          </span>
          <button className="lg:hidden ml-auto p-1 rounded" onClick={() => setSidebarOpen(false)}>
            <X size={14} style={{ color: 'var(--text-sec)' }} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 px-2">
          {nav.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md mb-0.5 text-xs font-medium transition-colors"
              style={{
                background: isActive(to) ? 'var(--accent-bg)' : 'transparent',
                color: isActive(to) ? 'var(--accent)' : 'var(--text-sec)',
              }}
            >
              <Icon size={14} />
              {label}
            </Link>
          ))}

          {/* Modules */}
          <div className="mt-4 mb-1 px-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-sec)' }}>
              Modules
            </span>
          </div>

          {modules.map((m) => {
            const hasLectures = m.lectures.length > 0
            const isExpanded = expandedModules[m.id]

            return (
              <div key={m.id}>
                <button
                  onClick={() => hasLectures && toggleModule(m.id)}
                  className="w-full flex items-center gap-1.5 px-3 py-1.5 rounded-md mb-0.5 text-xs font-medium transition-colors text-left"
                  style={{
                    color: hasLectures ? 'var(--text-primary)' : 'var(--text-sec)',
                    opacity: hasLectures ? 1 : 0.5,
                  }}
                >
                  {hasLectures ? (
                    isExpanded ? <ChevronDown size={11} /> : <ChevronRight size={11} />
                  ) : (
                    <Lock size={10} />
                  )}
                  <span className="truncate">M{m.id}: {m.title}</span>
                </button>

                {hasLectures && isExpanded && (
                  <div className="ml-3">
                    {m.lectures.map((l) => (
                      <Link
                        key={l.id}
                        to={`/lecture/${l.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md mb-0.5 text-[11px] transition-colors"
                        style={{
                          background: location.pathname === `/lecture/${l.id}` ? 'var(--accent-bg)' : 'transparent',
                          color: location.pathname === `/lecture/${l.id}` ? 'var(--accent)' : 'var(--text-sec)',
                        }}
                      >
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                        <span className="truncate">{l.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="px-3 py-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <button
            onClick={toggle}
            className="flex items-center gap-2 w-full px-3 py-1.5 rounded-md text-xs transition-colors"
            style={{ color: 'var(--text-sec)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div
          className="lg:hidden flex items-center gap-2 px-3 py-2 border-b sticky top-0 z-20"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <button onClick={() => setSidebarOpen(true)} className="p-1">
            <Menu size={16} style={{ color: 'var(--text-primary)' }} />
          </button>
          <GraduationCap size={16} style={{ color: 'var(--accent)' }} />
          <span className="font-semibold text-xs" style={{ color: 'var(--text-primary)' }}>iMBA Strategic</span>
          <button onClick={toggle} className="ml-auto p-1">
            {dark ? <Sun size={14} style={{ color: 'var(--text-sec)' }} /> : <Moon size={14} style={{ color: 'var(--text-sec)' }} />}
          </button>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
