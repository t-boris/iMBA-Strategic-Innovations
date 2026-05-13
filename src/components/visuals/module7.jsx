import { useState, Fragment } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Legend, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart, Area, AreaChart
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 7: Product Development Teams & Dedicated Team Partnerships
// =========================================================================

// ----- 7-overview: Logical chain map -----
export function Module7Overview() {
  const nodes = [
    { num: '7-1', label: 'Four team\ndesigns', color: C.indigo, x: 80 },
    { num: '7-2', label: 'Heavyweight\ndepth', color: C.orange, x: 230 },
    { num: '7-3', label: 'G&T\npartnership', color: C.purple, x: 380 },
    { num: '7-4', label: 'Build &\nmanage', color: C.teal, x: 530 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 7 Logical Chain</p>
      <p style={subStyle}>Team typology → heavyweight depth → partnership frame → operational toolkit</p>
      <svg viewBox="0 0 620 170" style={{ width: '100%' }}>
        <defs>
          <marker id="arrM7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={60} r="32" fill={n.color} opacity="0.85" />
            <text x={n.x} y={56} fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">{n.num}</text>
            <text x={n.x} y={70} fontSize="9" fill="white" textAnchor="middle">lesson</text>
            {n.label.split('\n').map((line, j) => (
              <text key={j} x={n.x} y={112 + j * 12} fontSize="10" fill="var(--text-primary)" textAnchor="middle">{line}</text>
            ))}
            {i < nodes.length - 1 && (
              <line x1={n.x + 32} y1={60} x2={nodes[i + 1].x - 32} y2={60}
                stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrM7)" />
            )}
          </g>
        ))}
        <text x="310" y="160" fontSize="10" fontStyle="italic" fill="var(--text-sec)" textAnchor="middle">
          Wheelwright &amp; Clark teams + Govindarajan &amp; Trimble partnership = operational toolkit
        </text>
      </svg>
    </div>
  )
}

// ----- 7-1: Four team types interactive selector -----
export function FourTeamTypes() {
  const [selected, setSelected] = useState(0)
  const teams = [
    {
      name: 'Functional', color: C.slate, separation: 0,
      desc: 'Each function is its own team. Project moves SEQUENTIALLY across functions. Functional Manager controls resources.',
      strengths: ['Deep specialized expertise', 'Aligned authority + rewards', 'Familiar markets/tech'],
      weaknesses: ['Weak coordination', 'No project owner', 'Variable commitment', 'Strong inertia'],
      bestFor: 'Familiar markets + familiar technology'
    },
    {
      name: 'Lightweight', color: C.blue, separation: 25,
      desc: 'Functional + mid-level Project Manager + liaisons. PM coordinates but does NOT control resources or decide.',
      strengths: ['Some coordination', 'Members stay in functions', 'Cheap to set up'],
      weaknesses: ['PM "lightweight": no power', 'Cannot make key decisions', 'Tolerated at best, often ignored', 'Disappoints for challenging innovation'],
      bestFor: 'Simple projects only'
    },
    {
      name: 'Heavyweight', color: C.orange, separation: 65,
      desc: 'Senior PM with real clout + dedicated co-located core members (~70%). Team owns project from concept to market. Accountable to senior management as a whole.',
      strengths: ['High ownership + commitment', 'Cross-functional problem solving', 'Stays in mainstream — easy reintegration', 'Practical default for serious NPD'],
      weaknesses: ['Conflict with FMs', 'Control questions for senior mgmt', 'Big role change for members', 'May underuse functional depth'],
      bestFor: 'New tech / new markets WITHIN strategic frame'
    },
    {
      name: 'Autonomous', color: C.loss, separation: 100,
      desc: 'People REMOVED from functional org. Co-located. Project leader is sole evaluator. = Independent organization / Tiger team / ambidextrous unit.',
      strengths: ['Maximum focus + speed', 'Clean sheet of paper', 'Full integration', 'Full accountability'],
      weaknesses: ['Difficult to control', 'Duplicates resources', 'Trouble drawing on org capabilities', 'Wheelwright & Clark NOT enthusiastic'],
      bestFor: 'Disruptive innovation; full separation justified'
    }
  ]
  const t = teams[selected]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Four Team Designs — Spectrum of Separation</p>
      <p style={subStyle}>Click a type. Bar shows separation from functional org. Heavyweight is the practical default.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 12 }}>
        {teams.map((team, i) => (
          <button key={team.name} onClick={() => setSelected(i)}
            style={{
              padding: 8, borderRadius: 6, cursor: 'pointer', textAlign: 'center',
              border: `2px solid ${team.color}`,
              background: selected === i ? `${team.color}25` : `${team.color}08`,
              opacity: selected === i ? 1 : 0.7,
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: team.color, marginBottom: 4 }}>{team.name}</div>
            <div style={{ height: 5, borderRadius: 3, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
              <div style={{ width: `${team.separation}%`, height: '100%', background: team.color, transition: 'width 0.4s' }} />
            </div>
            <div style={{ fontSize: 8, color: 'var(--text-sec)', marginTop: 4 }}>sep: {team.separation}%</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${t.color}`, background: `${t.color}08`, marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: t.color, marginBottom: 6 }}>{t.name} Team Structure</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 6 }}>{t.desc}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: C.gain, marginBottom: 3 }}>+ STRENGTHS</div>
            <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.4 }}>
              {t.strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: C.loss, marginBottom: 3 }}>− WEAKNESSES</div>
            <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.4 }}>
              {t.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div style={{ padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)' }}>
        <strong style={{ color: t.color }}>Best for:</strong> {t.bestFor}
      </div>
    </div>
  )
}

// ----- 7-1: Heavyweight team structure diagram -----
export function HeavyweightStructure() {
  const [highlight, setHighlight] = useState('all')
  const items = [
    { id: 'pm', label: 'Heavyweight\nProject Manager', x: 310, y: 50, color: C.orange, key: 'Senior — toe-to-toe with FMs' },
    { id: 'eng', label: 'Engineering', x: 100, y: 200, color: C.indigo, key: 'Functional Manager (FM)' },
    { id: 'mfg', label: 'Manufacturing', x: 310, y: 200, color: C.indigo, key: 'Functional Manager (FM)' },
    { id: 'mkt', label: 'Marketing', x: 520, y: 200, color: C.indigo, key: 'Functional Manager (FM)' },
    { id: 'core1', label: 'Core', x: 100, y: 280, color: C.gain, key: '~70% dedicated, co-located' },
    { id: 'core2', label: 'Core', x: 310, y: 280, color: C.gain, key: '~70% dedicated, co-located' },
    { id: 'core3', label: 'Core', x: 520, y: 280, color: C.gain, key: '~70% dedicated, co-located' }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Heavyweight Team Structure</p>
      <p style={subStyle}>Senior PM + dedicated core members (dashed = team boundary). Click any element.</p>

      <svg viewBox="0 0 620 380" style={{ width: '100%' }}>
        <defs>
          <marker id="arrHW" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>

        {/* Team boundary — dashed */}
        <rect x="50" y="240" width="540" height="100" rx="14"
          fill="none" stroke={C.orange} strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
        <text x="310" y="358" fontSize="10" textAnchor="middle" fill={C.orange} fontWeight="700" fontStyle="italic">
          Team boundary — PM has primary responsibility for everyone inside
        </text>

        {/* PM connection to functions */}
        {items.slice(1, 4).map((f, i) => (
          <line key={i} x1="310" y1="80" x2={f.x} y2={f.y - 25}
            stroke="var(--text-sec)" strokeWidth="1.5" opacity="0.4" />
        ))}

        {/* Function to core */}
        {items.slice(1, 4).map((f, i) => (
          <line key={`fc-${i}`} x1={f.x} y1={f.y + 25} x2={f.x} y2={items[4 + i].y - 25}
            stroke="var(--text-sec)" strokeWidth="1.5" />
        ))}

        {/* PM line to all cores (dashed = direct access) */}
        {[items[4], items[5], items[6]].map((c, i) => (
          <line key={`pmc-${i}`} x1="310" y1="80" x2={c.x} y2={c.y}
            stroke={C.orange} strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />
        ))}

        {items.map(it => {
          const active = highlight === 'all' || highlight === it.id
          return (
            <g key={it.id} style={{ cursor: 'pointer' }} onClick={() => setHighlight(highlight === it.id ? 'all' : it.id)}>
              {it.id === 'pm' ? (
                <rect x={it.x - 70} y={it.y - 25} width="140" height="50" rx="8"
                  fill={it.color} opacity={active ? 0.9 : 0.4} />
              ) : it.id.startsWith('core') ? (
                <circle cx={it.x} cy={it.y} r="22" fill={it.color} opacity={active ? 0.9 : 0.4} />
              ) : (
                <rect x={it.x - 50} y={it.y - 25} width="100" height="50" rx="6"
                  fill={it.color} opacity={active ? 0.9 : 0.4} />
              )}
              {it.label.split('\n').map((line, j) => (
                <text key={j} x={it.x} y={it.y + (j === 0 ? -3 : 10)} fontSize="10" fill="white" textAnchor="middle" fontWeight="700">
                  {line}
                </text>
              ))}
            </g>
          )
        })}
      </svg>

      <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', minHeight: 30 }}>
        {highlight !== 'all' && items.find(i => i.id === highlight) ? (
          <><strong style={{ color: items.find(i => i.id === highlight).color }}>{items.find(i => i.id === highlight).label.replace('\n', ' ')}: </strong>{items.find(i => i.id === highlight).key}</>
        ) : (
          <span><strong>Heavyweight features:</strong> senior PM + dedicated core (~70%, co-located) + team owns concept-to-market + accountable to senior management as a whole</span>
        )}
      </div>
    </div>
  )
}

// ----- 7-1: Team comparison radar -----
export function TeamComparisonTable() {
  const data = [
    { metric: 'Coordination', Functional: 20, Lightweight: 40, Heavyweight: 85, Autonomous: 90 },
    { metric: 'Speed', Functional: 30, Lightweight: 40, Heavyweight: 75, Autonomous: 90 },
    { metric: 'Functional depth', Functional: 95, Lightweight: 90, Heavyweight: 65, Autonomous: 30 },
    { metric: 'Project ownership', Functional: 15, Lightweight: 30, Heavyweight: 90, Autonomous: 95 },
    { metric: 'Inertia resist.', Functional: 10, Lightweight: 25, Heavyweight: 70, Autonomous: 95 },
    { metric: 'Reintegration', Functional: 95, Lightweight: 90, Heavyweight: 75, Autonomous: 25 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Four Team Designs — 6-Metric Comparison</p>
      <p style={subStyle}>Heavyweight balances most metrics. Trade-off: less functional depth than Functional, easier reintegration than Autonomous.</p>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={data}>
          <PolarGrid stroke="var(--border-color)" />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: 'var(--text-primary)' }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: 'var(--text-sec)' }} />
          <Radar name="Functional" dataKey="Functional" stroke={C.slate} fill={C.slate} fillOpacity={0.15} strokeWidth={2} />
          <Radar name="Lightweight" dataKey="Lightweight" stroke={C.blue} fill={C.blue} fillOpacity={0.15} strokeWidth={2} />
          <Radar name="Heavyweight" dataKey="Heavyweight" stroke={C.orange} fill={C.orange} fillOpacity={0.3} strokeWidth={2.5} />
          <Radar name="Autonomous" dataKey="Autonomous" stroke={C.loss} fill={C.loss} fillOpacity={0.15} strokeWidth={2} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 7-2: 6-attribute comparison table -----
export function CrossfunctionalVsFunctional() {
  const [selected, setSelected] = useState(0)
  const rows = [
    {
      attr: "Team's Charter",
      hw: 'Broad & Dynamic — responsible for the PRODUCT',
      fn: 'Narrow (functional) and pre-specified',
      icon: '🎯'
    },
    {
      attr: 'Member orientation',
      hw: 'Think like General Manager (broad)',
      fn: 'Functional Specialist (narrow)',
      icon: '👤'
    },
    {
      attr: 'Project Ownership',
      hw: 'WITHIN team',
      fn: 'Diffused across functions',
      icon: '🏠'
    },
    {
      attr: 'Integration',
      hw: 'INTERACTIVE within team',
      fn: 'SEQUENTIAL across functions (or by senior managers)',
      icon: '🔗'
    },
    {
      attr: 'Source of expertise',
      hw: 'Team co-located; functions supply',
      fn: 'Staff on multiple projects; expertise in function',
      icon: '🧠'
    },
    {
      attr: 'Success is...',
      hw: 'PRODUCT success',
      fn: 'Best Practice Used',
      icon: '🏆'
    },
    {
      attr: 'Accountable to...',
      hw: 'Senior Management',
      fn: 'Functional Boss',
      icon: '⬆️'
    }
  ]
  const r = rows[selected]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Cross-functional (Heavyweight) vs Functional Team — 6 Attributes</p>
      <p style={subStyle}>Click any row. Heavyweight changes the unit of analysis, ownership, and accountability.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1.5fr 1.5fr', gap: 4, fontSize: 10 }}>
        <div style={{ padding: 8, fontWeight: 700, color: 'var(--text-sec)', textAlign: 'left' }}>Issue</div>
        <div style={{ padding: 8, fontWeight: 700, color: C.orange, textAlign: 'center', background: `${C.orange}15`, borderRadius: 4 }}>Heavyweight (Cross-func)</div>
        <div style={{ padding: 8, fontWeight: 700, color: C.slate, textAlign: 'center', background: `${C.slate}15`, borderRadius: 4 }}>Functional</div>

        {rows.map((row, i) => (
          <Fragment key={`row-${i}`}>
            <button onClick={() => setSelected(i)}
              style={{
                padding: 8, fontSize: 10, fontWeight: 600,
                border: 'none', borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                background: selected === i ? `${C.indigo}25` : 'var(--bg-secondary)',
                color: 'var(--text-primary)'
              }}>
              {row.icon} {row.attr}
            </button>
            <button onClick={() => setSelected(i)}
              style={{
                padding: 8, fontSize: 10,
                border: 'none', borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                background: selected === i ? `${C.orange}25` : `${C.orange}08`,
                color: 'var(--text-primary)', borderLeft: `2px solid ${C.orange}`
              }}>
              {row.hw}
            </button>
            <button onClick={() => setSelected(i)}
              style={{
                padding: 8, fontSize: 10,
                border: 'none', borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                background: selected === i ? `${C.slate}25` : `${C.slate}08`,
                color: 'var(--text-primary)', borderLeft: `2px solid ${C.slate}`
              }}>
              {row.fn}
            </button>
          </Fragment>
        ))}
      </div>
      <div style={{ marginTop: 10, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', textAlign: 'center', fontStyle: 'italic' }}>
        <strong style={{ color: C.indigo }}>Selected: {r.attr}</strong> — Heavyweight is NOT "more coordination". It changes the unit of analysis.
      </div>
    </div>
  )
}

// ----- 7-2: Leader capabilities radial -----
export function LeaderCapabilities() {
  const [selected, setSelected] = useState(0)
  const caps = [
    {
      name: 'Ultimate Owner',
      icon: '👑',
      color: C.orange,
      keys: [
        'Concept champion — advocates up/down/across',
        'Guardian of integrity when choices clash',
        'Strong communication + conflict resolution',
        'High commitment, credibility, courage of convictions'
      ],
      summary: 'The leader IS the project. Not a coordinator — an owner.'
    },
    {
      name: 'Multi-functional',
      icon: '🌐',
      color: C.purple,
      keys: [
        'Speak the language of multiple functions',
        'Not necessarily fluent — capable',
        'Often engineering background (lead engineering directly)',
        'First-hand market/customer connection'
      ],
      summary: 'Engineering work + market view — bring market perspective with conviction.'
    },
    {
      name: 'Active',
      icon: '🏃',
      color: C.teal,
      keys: [
        'OUT of the office — face-to-face',
        'High info flow + uncertainty',
        'Identifying & resolving conflicts in real time',
        'NOT sit-and-plan style'
      ],
      summary: 'Sit-in-office-and-plan style is wrong. Be where decisions happen.'
    }
  ]
  const c = caps[selected]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Heavyweight Team Leader — 3 Capabilities</p>
      <p style={subStyle}>Strategic-level position. Recruiting and developing such leaders is a strategic priority.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
        {caps.map((cap, i) => (
          <button key={cap.name} onClick={() => setSelected(i)}
            style={{
              padding: 12, borderRadius: 8, cursor: 'pointer', textAlign: 'center',
              border: `2px solid ${cap.color}`,
              background: selected === i ? `${cap.color}25` : `${cap.color}08`,
              opacity: selected === i ? 1 : 0.7
            }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>{cap.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: cap.color }}>{cap.name}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${c.color}`, background: `${c.color}08` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: c.color, marginBottom: 6 }}>{c.icon} {c.name}</div>
        <ul style={{ fontSize: 10, paddingLeft: 16, margin: 0, color: 'var(--text-primary)', lineHeight: 1.6 }}>
          {c.keys.map((k, i) => <li key={i}>{k}</li>)}
        </ul>
        <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', fontStyle: 'italic' }}>
          {c.summary}
        </div>
      </div>
    </div>
  )
}

// ----- 7-2: Sponsor & governance interactive -----
export function SponsorGovernance() {
  const [zone, setZone] = useState('team')
  const decisions = [
    { id: 'tech', label: 'Technical design choices', zone: 'team' },
    { id: 'staffing', label: 'Day-to-day staffing', zone: 'team' },
    { id: 'process', label: 'Internal team processes', zone: 'team' },
    { id: 'milestones', label: 'Milestone definition', zone: 'shared' },
    { id: 'culture', label: 'Team culture / norms', zone: 'team' },
    { id: 'pricing', label: 'Pricing of new product', zone: 'exec' },
    { id: 'incentives', label: 'Incentive rewards', zone: 'exec' },
    { id: 'resources', label: 'Major resource commitments', zone: 'exec' },
    { id: 'priorities', label: 'Project priorities vs other initiatives', zone: 'exec' }
  ]
  const zones = {
    team: { color: C.gain, label: 'Team decides', desc: 'Empowered to act' },
    shared: { color: C.orange, label: 'Shared visibility', desc: 'Team decides + executive sees' },
    exec: { color: C.loss, label: 'Executive owns', desc: 'Executive leadership decides' }
  }
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Executive Sponsorship — Governance Process</p>
      <p style={subStyle}>One sponsor (not every VP). Click a zone to filter what falls there.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
        {Object.entries(zones).map(([k, z]) => (
          <button key={k} onClick={() => setZone(k)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer',
              border: `2px solid ${z.color}`,
              background: zone === k ? `${z.color}25` : `${z.color}08`,
              opacity: zone === k ? 1 : 0.6
            }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: z.color, marginBottom: 3 }}>{z.label}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>{z.desc}</div>
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {decisions.map(d => {
          const isMatch = d.zone === zone
          const z = zones[d.zone]
          return (
            <div key={d.id} style={{
              padding: 8, borderRadius: 4,
              background: isMatch ? `${z.color}25` : 'var(--bg-secondary)',
              border: `1px solid ${isMatch ? z.color : 'var(--border-color)'}`,
              opacity: isMatch ? 1 : 0.5,
              transition: 'all 0.3s',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span style={{ fontSize: 10, color: 'var(--text-primary)' }}>{d.label}</span>
              <span style={{ fontSize: 9, color: z.color, fontWeight: 700 }}>{z.label}</span>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: 10, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', fontStyle: 'italic' }}>
        <strong>Sponsor's job:</strong> coach + mentor + channel + shield + clarify governance. Avoid mixed signals from many VPs.
      </div>
    </div>
  )
}

// ----- 7-3: Innovation formulas comparison -----
export function InnovationFormulas() {
  const [selected, setSelected] = useState(3)
  const formulas = [
    {
      label: 'Ideas',
      formula: 'Innovation = Ideas',
      verdict: 'Insufficient',
      color: C.slate,
      example: '(Naive) Idea generation alone — execution undervalued',
      worksFor: 'Nothing — incomplete model',
      limit: 'Most attention goes here in literature/practice; misses execution entirely'
    },
    {
      label: 'Ideas + Motivation',
      formula: 'Innovation = Ideas + Motivation',
      verdict: 'Limited',
      color: C.blue,
      example: 'Nucor — incentives, celebration, culture, cross-trained production teams',
      worksFor: 'Continuous improvement',
      limit: 'Efficiency pressures restrict resources for non-routine innovation; people pulled back to mainstream'
    },
    {
      label: 'Ideas + Process',
      formula: 'Innovation = Ideas + Process',
      verdict: 'Limited',
      color: C.purple,
      example: 'John Deere — successive tractor generations via detailed processes',
      worksFor: 'Repeatable innovation',
      limit: 'Works only when past forecasts future. Fails when innovation is non-routine (Aetna individual health, BMW hybrid)'
    },
    {
      label: 'Ideas + Leader',
      formula: 'Innovation = Ideas + Leader',
      verdict: 'BAD BET',
      color: C.loss,
      example: '"We need a great leader" — frequent fall-back response',
      worksFor: 'Almost nothing',
      limit: 'Even talented leaders end up FIGHTING the Performance Engine, which is built specifically to fight dramatic innovation'
    },
    {
      label: 'Ideas + Leader + Team + Plan',
      formula: 'Innovation = Ideas + Leader + Team + Plan',
      verdict: 'RECOMMENDED',
      color: C.gain,
      example: 'Govindarajan & Trimble model — full execution architecture',
      worksFor: 'Complex innovation initiatives (non-routine, unpredictable)',
      limit: 'Expensive, requires zero-based design, ongoing senior leadership, partnership management — but it works'
    }
  ]
  const f = formulas[selected]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Innovation Formulas — From Ideas to Ideas + Leader + Team + Plan</p>
      <p style={subStyle}>Click any formula. Govindarajan &amp; Trimble: only the last works for complex innovation.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
        {formulas.map((form, i) => (
          <button key={i} onClick={() => setSelected(i)}
            style={{
              padding: 8, borderRadius: 4, cursor: 'pointer', textAlign: 'left',
              border: `1.5px solid ${form.color}`,
              background: selected === i ? `${form.color}25` : `${form.color}08`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'monospace' }}>{form.formula}</span>
            <span style={{ fontSize: 9, color: form.color, fontWeight: 700, padding: '2px 6px', borderRadius: 3, background: `${form.color}25` }}>{form.verdict}</span>
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${f.color}`, background: `${f.color}08` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: f.color, marginBottom: 6 }}>{f.formula}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 4 }}><strong>Example:</strong> {f.example}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 4 }}><strong>Works for:</strong> {f.worksFor}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)' }}><strong>What limits it:</strong> {f.limit}</div>
      </div>
    </div>
  )
}

// ----- 7-3: Performance engine vs innovation -----
export function PerformanceEngine() {
  const data = [
    { dimension: 'Repeatability', engine: 95, innovation: 15 },
    { dimension: 'Predictability', engine: 90, innovation: 10 },
    { dimension: 'Specialization', engine: 85, innovation: 35 },
    { dimension: 'Efficiency focus', engine: 90, innovation: 20 },
    { dimension: 'Past = guide', engine: 95, innovation: 5 },
    { dimension: 'Results-based mgmt', engine: 90, innovation: 20 },
    { dimension: 'Tolerance for uncertainty', engine: 15, innovation: 90 },
    { dimension: 'Learning orientation', engine: 30, innovation: 95 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Performance Engine vs Complex Innovation Initiative</p>
      <p style={subStyle}>The Engine is powerful within parameters — and stumbles outside them.</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 8, left: 100, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" domain={[0, 100]} tick={labelStyle} />
          <YAxis type="category" dataKey="dimension" tick={{ ...labelStyle, fontSize: 10 }} width={100} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="engine" name="Performance Engine" fill={C.indigo} radius={[0, 4, 4, 0]} />
          <Bar dataKey="innovation" name="Complex Innovation" fill={C.orange} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)' }}>
        <strong>Key insight:</strong> Engine optimized for repeatability + predictability. Complex innovation is non-routine + unpredictable. Engine fights it by design — that's why "Ideas + Leader" alone is a bad bet.
      </div>
    </div>
  )
}

// ----- 7-3: Dedicated team architecture -----
export function DedicatedTeamArchitecture() {
  const [scope, setScope] = useState(50)
  // scope from 0 (all in shared) to 100 (all dedicated)
  const dedicatedSize = 60 + (scope / 100) * 200
  const sharedSize = 260 - (scope / 100) * 200
  const looksLike = scope < 35 ? 'Heavyweight team (NPD only)' :
                    scope < 65 ? 'Hybrid (in-between)' :
                    scope < 85 ? 'Semi-autonomous unit' :
                    'Full ambidextrous unit'

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Project Team = Dedicated Team + Shared Staff</p>
      <p style={subStyle}>Slide to change Dedicated Team scope. Variable scope = continuum from heavyweight to ambidextrous.</p>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Dedicated Team scope: <strong>{scope}%</strong>
          <input type="range" min="10" max="95" step="5" value={scope}
            onChange={e => setScope(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.indigo }} />
        </label>
      </div>

      <svg viewBox="0 0 620 280" style={{ width: '100%' }}>
        {/* Company outline */}
        <rect x="10" y="10" width="600" height="260" rx="14" fill="none" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="6 4" />
        <text x="310" y="30" fontSize="11" textAnchor="middle" fill="var(--text-sec)" fontWeight="700">COMPANY</text>

        {/* Performance Engine */}
        <rect x="30" y="50" width={350 - sharedSize / 2 + 130} height="200" rx="10"
          fill={C.indigo} opacity="0.15" stroke={C.indigo} strokeWidth="2" />
        <text x={(30 + 350 - sharedSize / 2 + 130) / 2 + 30} y="80" fontSize="11" textAnchor="middle" fill={C.indigo} fontWeight="700">PERFORMANCE ENGINE</text>
        <text x={(30 + 350 - sharedSize / 2 + 130) / 2 + 30} y="98" fontSize="9" textAnchor="middle" fill={C.indigo} fontStyle="italic">repeatable + predictable</text>

        {/* Shared Staff */}
        <rect x={350 - sharedSize / 2 + 60} y="115" width={sharedSize - 30} height="60" rx="6"
          fill={C.orange} opacity="0.5" stroke={C.orange} strokeWidth="1.5" />
        <text x={350} y="140" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontWeight="700">Shared Staff</text>
        <text x={350} y="155" fontSize="8" textAnchor="middle" fill="var(--text-sec)">part-time on innovation</text>

        {/* Dedicated Team */}
        <rect x={600 - dedicatedSize / 2} y="100" width={dedicatedSize - 20} height="100" rx="10"
          fill={C.gain} opacity="0.25" stroke={C.gain} strokeWidth="2" />
        <text x={600 - 10} y="130" fontSize="11" textAnchor="middle" fill={C.gain} fontWeight="700">DEDICATED TEAM</text>
        <text x={600 - 10} y="148" fontSize="9" textAnchor="middle" fill={C.gain} fontStyle="italic">custom-built for initiative</text>
        <text x={600 - 10} y="170" fontSize="9" textAnchor="middle" fill="var(--text-sec)">size: {scope}%</text>

        {/* Partnership */}
        <line x1={350 + sharedSize / 2 - 15} y1="145" x2={600 - dedicatedSize / 2 + 5} y2="145"
          stroke={C.purple} strokeWidth="3" strokeDasharray="4 3" />
        <text x={(350 + sharedSize / 2 + 600 - dedicatedSize / 2) / 2 - 5} y="135" fontSize="9" textAnchor="middle" fill={C.purple} fontWeight="700">PARTNERSHIP</text>
      </svg>

      <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: `${C.indigo}15`, fontSize: 10, color: 'var(--text-primary)' }}>
        At scope <strong>{scope}%</strong> the configuration looks like: <strong style={{ color: C.indigo }}>{looksLike}</strong>
      </div>
    </div>
  )
}

// ----- 7-4: Overestimation trap -----
export function OverestimationTrap() {
  const [view, setView] = useState('wrong')
  const wrongData = [
    { skill: 'Engineering talent', current: 90, needed: 85 },
    { skill: 'Marketing talent', current: 80, needed: 75 },
    { skill: 'Operations talent', current: 85, needed: 80 },
    { skill: 'Leadership', current: 75, needed: 70 }
  ]
  const rightData = [
    { factor: 'Work relationships', current: 60, needed: 90 },
    { factor: 'Power structure fit', current: 40, needed: 85 },
    { factor: 'Operational tempo', current: 50, needed: 80 },
    { factor: 'Communication patterns', current: 65, needed: 90 },
    { factor: 'Evaluation fit', current: 55, needed: 80 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Why Managers OVERESTIMATE Performance Engine</p>
      <p style={subStyle}>Toggle: looking at WRONG things (talents) vs RIGHT things (relationships).</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
        <button onClick={() => setView('wrong')}
          style={{
            padding: 10, borderRadius: 6, cursor: 'pointer',
            border: `2px solid ${C.loss}`,
            background: view === 'wrong' ? `${C.loss}25` : `${C.loss}08`,
            opacity: view === 'wrong' ? 1 : 0.6
          }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.loss, marginBottom: 3 }}>❌ WRONG: individual talents</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>"We have skilled people"</div>
        </button>
        <button onClick={() => setView('right')}
          style={{
            padding: 10, borderRadius: 6, cursor: 'pointer',
            border: `2px solid ${C.gain}`,
            background: view === 'right' ? `${C.gain}25` : `${C.gain}08`,
            opacity: view === 'right' ? 1 : 0.6
          }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.gain, marginBottom: 3 }}>✓ RIGHT: how people work together</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>"Relationships, power, tempo"</div>
        </button>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={view === 'wrong' ? wrongData : rightData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey={view === 'wrong' ? 'skill' : 'factor'} tick={{ ...labelStyle, fontSize: 9 }} interval={0} angle={-15} textAnchor="end" height={50} />
          <YAxis domain={[0, 100]} tick={labelStyle} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="current" name="Mainstream has" fill={C.indigo} radius={[4, 4, 0, 0]} />
          <Bar dataKey="needed" name="Innovation needs" fill={C.orange} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', fontStyle: 'italic' }}>
        {view === 'wrong'
          ? <span><strong style={{ color: C.loss }}>Wrong frame:</strong> Skills look adequate ⇒ no separation needed ⇒ under-scope Dedicated Team.</span>
          : <span><strong style={{ color: C.gain }}>Right frame:</strong> Relationships/power/tempo gaps reveal hidden limits ⇒ separation justified.</span>}
      </div>
    </div>
  )
}

// ----- 7-4: Three reasons for separation interactive -----
export function ThreeSeparationReasons() {
  const [reason, setReason] = useState(0)
  const reasons = [
    {
      name: 'Lack of Work Relationships',
      icon: '🔗',
      color: C.indigo,
      explanation: 'Building new relationships takes time and effort, gets pressed out by mainstream demands.',
      example: 'BMW Hybrid Car',
      caseDetail: 'Battery group and brake group did NOT talk to each other in normal NPD. Regenerative braking required tight coupling. Solution: split out the BRAKING SUBSYSTEM (not the whole hybrid car) into Dedicated Team.',
      diagnostic: 'Are units that need to collaborate currently talking?'
    },
    {
      name: 'Power Structure Mismatch',
      icon: '⚖️',
      color: C.purple,
      explanation: 'Power deeply embedded in relationships; to change, need new context (and sometimes new people).',
      example: 'Electrolux High-End',
      caseDetail: 'Engineering-dominant firm. Mid-range success on reliability + functionality. High-end requires aesthetics-driven, marketing in driver\'s seat. Solution: split out customer insight teams to develop high-end markets.',
      diagnostic: 'Does the existing power distribution match what the innovation needs?'
    },
    {
      name: 'Tempo Mismatch',
      icon: '⏱️',
      color: C.teal,
      explanation: 'Tempo built into planning and evaluation processes — difficult to work against.',
      example: 'Timberland Trail Shoe',
      caseDetail: 'Fast fashion cycle (frequent turnover). Trail shoe required extensive exploration of materials, what trail runners want. Tempo did not match. Solution: split out trail shoe development.',
      diagnostic: 'Does the pace required for the innovation match the mainstream cadence?'
    }
  ]
  const r = reasons[reason]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Three Reasons for Separation — Govindarajan &amp; Trimble</p>
      <p style={subStyle}>ANY ONE criterion present ⇒ separate that part of work into Dedicated Team.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
        {reasons.map((re, i) => (
          <button key={re.name} onClick={() => setReason(i)}
            style={{
              padding: 10, borderRadius: 8, cursor: 'pointer', textAlign: 'center',
              border: `2px solid ${re.color}`,
              background: reason === i ? `${re.color}25` : `${re.color}08`,
              opacity: reason === i ? 1 : 0.7
            }}>
            <div style={{ fontSize: 24, marginBottom: 4 }}>{re.icon}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: re.color, marginBottom: 3 }}>Reason {i + 1}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>{re.name}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${r.color}`, background: `${r.color}08`, marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: r.color, marginBottom: 6 }}>{r.icon} {r.name}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.5 }}>{r.explanation}</div>
        <div style={{ padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', marginBottom: 6 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: r.color, marginBottom: 3 }}>Case: {r.example}</div>
          <div style={{ fontSize: 9, color: 'var(--text-primary)', lineHeight: 1.5 }}>{r.caseDetail}</div>
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', fontStyle: 'italic' }}>
          <strong>Diagnostic:</strong> {r.diagnostic}
        </div>
      </div>
    </div>
  )
}

// ----- 7-4: Insider bias trade-off -----
export function InsiderBiasTradeoff() {
  const [outsiderRatio, setOutsiderRatio] = useState(20)
  const insiderRatio = 100 - outsiderRatio

  const skillRisk = Math.max(0, 70 - outsiderRatio * 1.2)
  const imprintRisk = Math.max(0, 90 - outsiderRatio * 1.5)
  const collaborationRisk = Math.max(10, outsiderRatio * 1.0 - 20)

  const recommendation =
    outsiderRatio < 15 ? '❌ Too few outsiders — high imprinting risk; team will recreate mainstream'
    : outsiderRatio < 40 ? '⚠️ Improving — but still under-counterbalancing the bias'
    : outsiderRatio < 70 ? '✓ Good balance — outsiders bring fresh perspective; insiders provide continuity'
    : '⚠️ Too many outsiders — collaborative roles weakened; mainstream relationships gone'

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Insider vs Outsider — The Staffing Trade-off</p>
      <p style={subStyle}>Slide to change ratio. The insider bias is strong — counterbalance deliberately.</p>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Outsiders: <strong>{outsiderRatio}%</strong> | Insiders: <strong>{insiderRatio}%</strong>
          <input type="range" min="0" max="100" step="5" value={outsiderRatio}
            onChange={e => setOutsiderRatio(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.purple }} />
        </label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 8 }}>
        <div style={{ padding: 10, borderRadius: 6, background: `${C.indigo}15`, border: `1.5px solid ${C.indigo}`, textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.indigo }}>Insiders {insiderRatio}%</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 4, lineHeight: 1.4 }}>Familiar, expedient, comp norms OK<br/>BUT imprinted with org history</div>
        </div>
        <div style={{ padding: 10, borderRadius: 6, background: `${C.purple}15`, border: `1.5px solid ${C.purple}`, textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.purple }}>Outsiders {outsiderRatio}%</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 4, lineHeight: 1.4 }}>Fresh perspective, no imprinting<br/>BUT harder to recruit, less mainstream context</div>
        </div>
      </div>

      <div style={{ marginTop: 12, marginBottom: 8 }}>
        <div style={{ fontSize: 10, color: 'var(--text-sec)', marginBottom: 6 }}>Risk profile:</div>
        <div style={{ marginBottom: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9 }}>
            <span style={{ color: 'var(--text-sec)' }}>Skill deficit risk</span><span style={{ color: C.loss }}>{Math.round(skillRisk)}%</span>
          </div>
          <div style={{ height: 5, borderRadius: 3, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div style={{ width: `${skillRisk}%`, height: '100%', background: C.loss, transition: 'width 0.4s' }} />
          </div>
        </div>
        <div style={{ marginBottom: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9 }}>
            <span style={{ color: 'var(--text-sec)' }}>Imprinting risk (recreate mainstream)</span><span style={{ color: C.orange }}>{Math.round(imprintRisk)}%</span>
          </div>
          <div style={{ height: 5, borderRadius: 3, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div style={{ width: `${imprintRisk}%`, height: '100%', background: C.orange, transition: 'width 0.4s' }} />
          </div>
        </div>
        <div style={{ marginBottom: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9 }}>
            <span style={{ color: 'var(--text-sec)' }}>Collaboration risk (no mainstream ties)</span><span style={{ color: C.purple }}>{Math.round(collaborationRisk)}%</span>
          </div>
          <div style={{ height: 5, borderRadius: 3, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div style={{ width: `${collaborationRisk}%`, height: '100%', background: C.purple, transition: 'width 0.4s' }} />
          </div>
        </div>
      </div>

      <div style={{ padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', textAlign: 'center' }}>
        {recommendation}
      </div>
      <div style={{ marginTop: 6, padding: 8, borderRadius: 4, background: `${C.gain}10`, fontSize: 9, color: 'var(--text-primary)', fontStyle: 'italic', border: `1px solid ${C.gain}30` }}>
        💡 <strong>Exception:</strong> for HEAVILY COLLABORATIVE roles (interfacing constantly with mainstream), break the rule and pick INSIDERS — their relationships are invaluable.
      </div>
    </div>
  )
}

// ----- 7-4: Zero-based design — six traps -----
export function ZeroBasedDesign() {
  const [trap, setTrap] = useState(0)
  const traps = [
    {
      id: 1, name: 'Recreating old roles', color: C.loss,
      what: 'Reuse mainstream job descriptions, hierarchy, decision rights',
      consequence: 'New initiative inherits old constraints; new value-creation pattern impossible',
      remedy: 'Write fresh job descriptions matched to new market and processes'
    },
    {
      id: 2, name: 'Reinforcing old power centers', color: C.loss,
      what: 'Same functions dominate; same gatekeepers control resources',
      consequence: 'New approach blocked by old political balance',
      remedy: 'Strategically hire outsiders + choose most powerful insider matched to new need'
    },
    {
      id: 3, name: 'Old performance measures', color: C.orange,
      what: 'Established metrics (output, deviation from plan, quarterly results)',
      consequence: 'Punishes learning; rewards mainstream-style execution',
      remedy: 'Metrics matched to learning orientation: hypothesis validation, exploration milestones'
    },
    {
      id: 4, name: 'No distinct culture', color: C.orange,
      what: 'Default to mainstream culture (efficiency, predictability, conformity)',
      consequence: 'Innovation initiative behaves like a small mainstream unit',
      remedy: 'Consciously design culture around uncertainty, learning, fast iteration'
    },
    {
      id: 5, name: 'Inappropriate processes', color: C.purple,
      what: 'Reuse mainstream HR, finance, IT, procurement processes',
      consequence: 'Slow approvals, wrong incentives, wrong staffing tempo',
      remedy: 'Custom processes; gain executive support to break standards where needed'
    },
    {
      id: 6, name: 'Tyranny of conformance', color: C.purple,
      what: 'Pressure from staff functions (HR, Finance) to conform "for consistency"',
      consequence: 'Death by a thousand cuts — small standards each look reasonable',
      remedy: 'Executive cover. Sponsor must back team against staff functions'
    }
  ]
  const t = traps[trap]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Zero-Based Design — The 6 Design Traps</p>
      <p style={subStyle}>Click any trap. Solution: clean sheet of paper for each component.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
        {traps.map((tr, i) => (
          <button key={tr.id} onClick={() => setTrap(i)}
            style={{
              padding: 8, borderRadius: 6, cursor: 'pointer', textAlign: 'left',
              border: `2px solid ${tr.color}`,
              background: trap === i ? `${tr.color}25` : `${tr.color}08`,
              opacity: trap === i ? 1 : 0.7
            }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: tr.color, color: 'white', fontSize: 10, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4
            }}>{tr.id}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: tr.color, lineHeight: 1.2 }}>{tr.name}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${t.color}`, background: `${t.color}08` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: t.color, marginBottom: 6 }}>Trap #{t.id}: {t.name}</div>
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-sec)' }}>What it looks like: </span>
          <span style={{ fontSize: 10, color: 'var(--text-primary)' }}>{t.what}</span>
        </div>
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.loss }}>Consequence: </span>
          <span style={{ fontSize: 10, color: 'var(--text-primary)' }}>{t.consequence}</span>
        </div>
        <div>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.gain }}>Remedy: </span>
          <span style={{ fontSize: 10, color: 'var(--text-primary)' }}>{t.remedy}</span>
        </div>
      </div>
      <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', textAlign: 'center', fontStyle: 'italic' }}>
        Zero-based design = consciously redesign EACH component with a clean sheet. Not expedient — needs executive backing.
      </div>
    </div>
  )
}

// ----- 7-4: Four-level partnership management -----
export function FourLevelPartnership() {
  const [level, setLevel] = useState(1)
  const levels = [
    {
      n: 1, name: "Leader's Style", color: C.teal,
      icon: '🎭',
      key: 'Positive, persuasive, collaborative',
      detail: 'Emphasize partnership: "we\'re in this together". Performance Engine has different goals — will fight or ignore. Style alone is necessary but NOT sufficient.',
      keyPoint: 'Necessary but NOT sufficient'
    },
    {
      n: 2, name: 'Senior Leadership ONGOING', color: C.loss,
      icon: '⭐',
      key: 'MOST IMPORTANT level',
      detail: 'Many executives only at approval stage. Mistake — innovation importance is about POTENTIAL, not current size. Need ongoing mediation of conflicts/decisions, celebrating successes, emphasizing importance, clarifying shared fate.',
      keyPoint: '30 min biweekly mediation > 2-hour kickoff'
    },
    {
      n: 3, name: 'Processes & Systems', color: C.indigo,
      icon: '⚙️',
      key: 'One doc, clear responsibilities, shield, transfer pricing',
      detail: 'ONE document/process for resource allocation (no fragmentation). CLEARLY DEFINE responsibilities. SHIELD mainstream from innovation uncertainty (hire 4 upfront, not "maybe 2 maybe 4"). TRANSFER PRICING. INCENTIVES + special bonuses (especially salespeople).',
      keyPoint: 'Mainstream judged on predictability — cannot absorb your uncertainty'
    },
    {
      n: 4, name: 'Win Hearts & Minds', color: C.purple,
      icon: '❤️',
      key: 'Different not superior, insiders for collaborative, nearby separate',
      detail: 'Reinforce common values + shared fates. Frame Dedicated Team as DIFFERENT NOT SUPERIOR. Choose INSIDERS for heavily collaborative roles. Work in SEPARATE BUT NEARBY locations. Establish METRICS for cooperation among mainstream managers.',
      keyPoint: 'Hardware = processes; software = people\'s hearts and minds'
    }
  ]
  const l = levels.find(lv => lv.n === level)
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>4-Level Partnership Management</p>
      <p style={subStyle}>Stack from Level 1 to 4. Senior leadership ONGOING (Level 2) is most important.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
        {levels.map(lv => (
          <button key={lv.n} onClick={() => setLevel(lv.n)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer', textAlign: 'left',
              border: `2px solid ${lv.color}`,
              background: level === lv.n ? `${lv.color}25` : `${lv.color}08`,
              opacity: level === lv.n ? 1 : 0.7,
              display: 'flex', alignItems: 'center', gap: 10
            }}>
            <div style={{
              width: 32, height: 32, borderRadius: 6,
              background: lv.color, color: 'white', fontSize: 14, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>{lv.n}</div>
            <span style={{ fontSize: 18 }}>{lv.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: lv.color }}>{lv.name}</div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>{lv.key}</div>
            </div>
            {lv.n === 2 && <span style={{ fontSize: 9, color: lv.color, padding: '2px 6px', borderRadius: 3, background: `${lv.color}25`, fontWeight: 700 }}>MOST IMPORTANT</span>}
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${l.color}`, background: `${l.color}08` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: l.color, marginBottom: 6 }}>{l.icon} Level {l.n}: {l.name}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.6 }}>{l.detail}</div>
        <div style={{ padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', fontStyle: 'italic' }}>
          💡 {l.keyPoint}
        </div>
      </div>
    </div>
  )
}

// ----- 7-5: Concept map -----
export function Module7ConceptMap() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 7 — Concept Map</p>
      <p style={subStyle}>How team designs (Wheelwright &amp; Clark) integrate with partnership architecture (Govindarajan &amp; Trimble).</p>

      <svg viewBox="0 0 700 480" style={{ width: '100%' }}>
        <defs>
          <marker id="arrM7CM" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>

        {/* Top: Wheelwright & Clark */}
        <rect x="20" y="10" width="320" height="200" rx="10" fill={C.orange} opacity="0.1" stroke={C.orange} strokeWidth="2" />
        <text x="180" y="32" fontSize="12" textAnchor="middle" fill={C.orange} fontWeight="700">Wheelwright &amp; Clark — 4 Team Designs</text>
        {[
          { name: 'Functional', x: 60, fill: C.slate },
          { name: 'Lightweight', x: 145, fill: C.blue },
          { name: 'Heavyweight', x: 230, fill: C.orange },
          { name: 'Autonomous', x: 315, fill: C.loss }
        ].map((t, i) => (
          <g key={i}>
            <circle cx={t.x} cy={90} r="20" fill={t.fill} opacity="0.85" />
            <text x={t.x} y={94} fontSize="9" fill="white" textAnchor="middle" fontWeight="700">{t.name.slice(0, 6)}</text>
          </g>
        ))}
        <text x="180" y="135" fontSize="9" textAnchor="middle" fill="var(--text-sec)">spectrum of separation</text>
        <line x1="60" y1="115" x2="315" y2="115" stroke="var(--text-sec)" strokeWidth="1" />
        <text x="180" y="170" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontStyle="italic">Heavyweight = practical default</text>
        <text x="180" y="190" fontSize="9" textAnchor="middle" fill="var(--text-sec)">Lightweight disappoints; Autonomous = ambidextrous unit</text>

        {/* Top right: Govindarajan & Trimble */}
        <rect x="360" y="10" width="320" height="200" rx="10" fill={C.purple} opacity="0.1" stroke={C.purple} strokeWidth="2" />
        <text x="520" y="32" fontSize="12" textAnchor="middle" fill={C.purple} fontWeight="700">Govindarajan &amp; Trimble</text>
        <text x="520" y="48" fontSize="10" textAnchor="middle" fill={C.purple}>Other Side of Innovation (2010)</text>

        <rect x="380" y="65" width="120" height="50" rx="6" fill={C.indigo} opacity="0.4" stroke={C.indigo} />
        <text x="440" y="84" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontWeight="700">Performance</text>
        <text x="440" y="98" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontWeight="700">Engine</text>
        <text x="440" y="110" fontSize="8" textAnchor="middle" fill="var(--text-sec)">repeatable + predictable</text>

        <rect x="540" y="65" width="120" height="50" rx="6" fill={C.gain} opacity="0.4" stroke={C.gain} />
        <text x="600" y="84" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontWeight="700">Dedicated</text>
        <text x="600" y="98" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontWeight="700">Team</text>
        <text x="600" y="110" fontSize="8" textAnchor="middle" fill="var(--text-sec)">custom-built</text>

        <line x1="500" y1="90" x2="540" y2="90" stroke={C.purple} strokeWidth="3" strokeDasharray="3 2" />
        <text x="520" y="135" fontSize="9" textAnchor="middle" fill={C.purple} fontWeight="700">PARTNERSHIP</text>

        <text x="520" y="170" fontSize="10" textAnchor="middle" fill="var(--text-primary)" fontStyle="italic">Innovation = Ideas + Leader + Team + Plan</text>
        <text x="520" y="190" fontSize="9" textAnchor="middle" fill="var(--text-sec)">Variable scope = continuum from heavyweight to ambidextrous</text>

        {/* Middle: Integration */}
        <rect x="200" y="240" width="300" height="80" rx="10" fill={C.teal} opacity="0.15" stroke={C.teal} strokeWidth="2" />
        <text x="350" y="262" fontSize="11" textAnchor="middle" fill={C.teal} fontWeight="700">INTEGRATION</text>
        <text x="350" y="282" fontSize="10" textAnchor="middle" fill="var(--text-primary)">Heavyweight Team is a SPECIAL CASE</text>
        <text x="350" y="298" fontSize="10" textAnchor="middle" fill="var(--text-primary)">of Dedicated Team (NPD scope)</text>

        <line x1="280" y1="210" x2="320" y2="240" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrM7CM)" />
        <line x1="420" y1="210" x2="380" y2="240" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrM7CM)" />

        {/* Bottom: Module 6 cells */}
        <rect x="20" y="350" width="660" height="120" rx="10" fill={C.indigo} opacity="0.08" stroke={C.indigo} strokeWidth="1.5" />
        <text x="350" y="372" fontSize="11" textAnchor="middle" fill={C.indigo} fontWeight="700">Module 6 Matrix Cells → Module 7 Team Choice</text>

        {[
          { cell: 'Cell A', team: 'Functional / Lightweight', x: 110, color: C.gain },
          { cell: 'Cell B', team: 'Heavyweight (inside)', x: 270, color: C.orange },
          { cell: 'Cell C', team: 'Independent (Autonomous)', x: 430, color: C.loss },
          { cell: 'Cell D', team: 'Phased: HW → spinout', x: 590, color: C.purple }
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x - 65} y="395" width="130" height="55" rx="6" fill={c.color} opacity="0.2" stroke={c.color} strokeWidth="1.5" />
            <text x={c.x} y="412" fontSize="10" textAnchor="middle" fill={c.color} fontWeight="700">{c.cell}</text>
            <text x={c.x} y="428" fontSize="9" textAnchor="middle" fill="var(--text-primary)">{c.team.split('(')[0]}</text>
            {c.team.includes('(') && <text x={c.x} y="442" fontSize="8" textAnchor="middle" fill="var(--text-sec)">({c.team.split('(')[1]}</text>}
          </g>
        ))}

        <line x1="350" y1="320" x2="350" y2="350" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrM7CM)" />
      </svg>
    </div>
  )
}
