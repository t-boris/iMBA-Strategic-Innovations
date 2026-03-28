import { useParams, Navigate, Link } from 'react-router-dom'
import { BookOpen, ChevronDown, ChevronUp, Lightbulb, Zap } from 'lucide-react'
import { useState } from 'react'
import { findLecture } from '../data/lectures'
import InteractiveVisual from '../components/InteractiveVisuals'

function Section({ section, index }) {
  const [open, setOpen] = useState(true)

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2.5 text-left transition-colors"
        style={{ background: open ? 'var(--accent-bg)' : 'transparent' }}
      >
        <span
          className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white shrink-0"
          style={{ background: 'var(--accent)' }}
        >
          {index + 1}
        </span>
        <span className="flex-1 text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
          {section.title}
        </span>
        {section.interactive && (
          <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
            style={{ background: 'var(--accent)', color: 'white' }}>
            <Zap size={9} /> Interactive
          </span>
        )}
        {open ? <ChevronUp size={14} style={{ color: 'var(--text-sec)' }} /> : <ChevronDown size={14} style={{ color: 'var(--text-sec)' }} />}
      </button>

      {open && (
        <div className="px-4 py-3 space-y-3">
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {section.content}
          </p>

          {section.keyPoints && (
            <div className="rounded-md p-3 space-y-1" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex items-center gap-1 mb-1.5">
                <Lightbulb size={11} style={{ color: 'var(--warning)' }} />
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-sec)' }}>
                  Key Points
                </span>
              </div>
              {section.keyPoints.map((kp, i) => (
                <div key={i} className="flex gap-2 text-[11px]" style={{ color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--accent)' }}>•</span>
                  <span>{kp}</span>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Visualization */}
          {section.interactive && (
            <InteractiveVisual type={section.interactive} />
          )}
        </div>
      )}
    </div>
  )
}

export default function LecturePage() {
  const { id } = useParams()
  const lecture = findLecture(id)

  if (!lecture) return <Navigate to="/" replace />

  const interactiveCount = lecture.sections.filter(s => s.interactive).length

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 mb-4">
        <Link to="/" className="text-[10px] font-medium" style={{ color: 'var(--text-sec)' }}>Home</Link>
        <span className="text-[10px]" style={{ color: 'var(--text-sec)' }}>/</span>
        <span className="text-[10px] font-medium" style={{ color: 'var(--accent)' }}>Module {lecture.moduleId}: {lecture.moduleTitle}</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 mb-2">
          <BookOpen size={12} style={{ color: 'var(--accent)' }} />
          <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
            Lecture {lecture.id}
          </span>
        </div>
        <h1 className="text-base font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
          {lecture.title}
        </h1>
        <p className="text-xs" style={{ color: 'var(--text-sec)' }}>
          {lecture.professor} — {lecture.sections.length} sections
          {interactiveCount > 0 && (
            <span className="ml-2 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
              style={{ background: 'var(--accent)', color: 'white' }}>
              <Zap size={8} /> {interactiveCount} interactive
            </span>
          )}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-2">
        {lecture.sections.map((section, i) => (
          <Section key={i} section={section} index={i} />
        ))}
      </div>
    </div>
  )
}
