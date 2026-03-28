import { useState } from 'react'
import { Search, List } from 'lucide-react'
import { glossary } from '../data/glossary'

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  const filtered = glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(search.toLowerCase()) ||
      g.definition.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-2">
          <List size={12} style={{ color: 'var(--success)' }} />
          <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--success)' }}>
            Glossary
          </span>
        </div>
        <h1 className="text-base font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
          Key Terms
        </h1>
        <p className="text-xs" style={{ color: 'var(--text-sec)' }}>
          {glossary.length} terms across {new Set(glossary.map(g => g.module)).size} modules
        </p>
      </div>

      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg border mb-4"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <Search size={13} style={{ color: 'var(--text-sec)' }} />
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-xs"
          style={{ color: 'var(--text-primary)' }}
        />
        {search && (
          <span className="text-[10px]" style={{ color: 'var(--text-sec)' }}>
            {filtered.length} results
          </span>
        )}
      </div>

      <div className="space-y-1.5">
        {filtered.map((g, i) => (
          <div
            key={i}
            className="rounded-lg border overflow-hidden cursor-pointer transition-all"
            style={{ background: 'var(--bg-card)', borderColor: expanded === i ? 'var(--accent)' : 'var(--border-color)' }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                  {g.term}
                </div>
              </div>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded font-medium shrink-0"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
              >
                M{g.module}
              </span>
            </div>

            {expanded === i && (
              <div className="px-3 pb-2.5">
                <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {g.definition}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xs" style={{ color: 'var(--text-sec)' }}>No results found</p>
        </div>
      )}
    </div>
  )
}
