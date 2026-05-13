import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 6: Types of Innovation & Targeted Responses
// =========================================================================

// ----- 6-overview: Logical chain map -----
export function Module6Overview() {
  const nodes = [
    { num: '6-1/2', label: 'Disruption\ntypology', color: C.orange, x: 80 },
    { num: '6-3', label: 'Capabilities\nR / P / V', color: C.purple, x: 230 },
    { num: '6-4', label: '2x2 matrix\n+ acquisitions', color: C.indigo, x: 380 },
    { num: '6-5/6', label: 'Wolcott & Lippitz\n4 CE models', color: C.teal, x: 530 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 6 Logical Chain</p>
      <p style={subStyle}>Typology → capabilities → operational matrix → proactive capability</p>
      <svg viewBox="0 0 620 170" style={{ width: '100%' }}>
        <defs>
          <marker id="arrM6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={60} r="32" fill={n.color} opacity="0.85" />
            <text x={n.x} y={56} fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">{n.num}</text>
            <text x={n.x} y={70} fontSize="9" fill="white" textAnchor="middle">type</text>
            {n.label.split('\n').map((line, j) => (
              <text key={j} x={n.x} y={112 + j * 12} fontSize="10" fill="var(--text-primary)" textAnchor="middle">{line}</text>
            ))}
            {i < nodes.length - 1 && (
              <line x1={n.x + 32} y1={60} x2={nodes[i + 1].x - 32} y2={60}
                stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrM6)" />
            )}
          </g>
        ))}
        <text x="310" y="160" fontSize="10" fontStyle="italic" fill="var(--text-sec)" textAnchor="middle">
          Diagnose the type of innovation BEFORE choosing the response
        </text>
      </svg>
    </div>
  )
}

// ----- 6-1: Disk drive trajectories (signature Christensen chart) -----
const DISK_GENERATIONS = [
  { name: '14"', color: C.loss, intro: 1974, ceiling: 800, midpoint: 1982, k: 0.55 },
  { name: '8"', color: C.orange, intro: 1978, ceiling: 350, midpoint: 1986, k: 0.55 },
  { name: '5.25"', color: C.purple, intro: 1981, ceiling: 200, midpoint: 1989, k: 0.55 },
  { name: '3.5"', color: C.teal, intro: 1984, ceiling: 120, midpoint: 1992, k: 0.55 }
]
const DISK_DATA = (() => {
  const pts = []
  for (let t = 1974; t <= 1995; t += 1) {
    const row = { year: t, demand: Math.round(20 * Math.pow(1.18, t - 1974)) }
    DISK_GENERATIONS.forEach(g => {
      if (t >= g.intro) {
        const v = g.ceiling / (1 + Math.exp(-g.k * (t - g.midpoint)))
        row[g.name] = Math.round(v * 10) / 10
      }
    })
    pts.push(row)
  }
  return pts
})()

export function DiskDriveTrajectory() {
  const [year, setYear] = useState(1985)
  const generations = DISK_GENERATIONS
  const data = DISK_DATA

  // Find which generation currently meets mainstream demand at selected year
  const cursor = data.find(d => d.year === year) || data[0]
  const meeting = generations
    .filter(g => year >= g.intro && cursor[g.name] >= cursor.demand)
    .map(g => g.name)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Disk Drive Disruption — Performance vs Time</p>
      <p style={subStyle}>Each new (smaller) format starts as a niche. The moment its trajectory crosses mainstream demand, disruption begins.</p>

      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Year: <strong>{year}</strong>
          <input type="range" min="1974" max="1995" step="1" value={year}
            onChange={e => setYear(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.blue }} />
        </label>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="year" tick={labelStyle} />
          <YAxis tick={labelStyle} label={{ value: 'Storage (MB)', angle: -90, position: 'insideLeft', style: labelStyle }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Line type="monotone" dataKey="demand" name="Mainstream demand" stroke={C.dark} strokeWidth={2.5} strokeDasharray="5 4" dot={false} />
          {generations.map(g => (
            <Line key={g.name} type="monotone" dataKey={g.name} stroke={g.color} strokeWidth={2} dot={false} connectNulls={false} />
          ))}
          <ReferenceLine x={year} stroke={C.blue} strokeWidth={1.5} strokeDasharray="2 2" />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ marginTop: 8, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)' }}>
        <strong style={{ color: C.blue }}>{year}: </strong>
        {meeting.length === 0
          ? <span>No format yet meets mainstream demand. Smaller formats live in niche markets (mini-computers, desktops).</span>
          : <span>Formats now "good enough" for mainstream: <strong>{meeting.join(', ')}</strong>. Once a smaller format crosses the demand line, incumbents of the previous generation get displaced.</span>}
      </div>
    </div>
  )
}

// ----- 6-1: Innovator's dilemma cascade -----
export function InnovatorsDilemma() {
  const steps = [
    { num: 1, title: 'Engineers see it', text: 'Prototypes built. The new tech is recognized internally.', color: C.gain, ok: true },
    { num: 2, title: 'Marketing dictum kicks in', text: '"Stay close to big customers." Big customers do NOT want the new tech.', color: C.orange, ok: false },
    { num: 3, title: 'Resource allocation rejects', text: 'Small market + low margin + uncertainty. Fails every standard filter.', color: C.loss, ok: false },
    { num: 4, title: 'P&L logic blocks scale', text: 'Niche cannot move corporate revenue. Senior management deprioritizes.', color: C.loss, ok: false },
    { num: 5, title: 'Outflanked', text: 'New entrants build scale, expertise, customer base. Incumbent retreats up-market.', color: C.dark, ok: false }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Why "Good Management" Fails</p>
      <p style={subStyle}>Each step is rational. The sum is systematic failure. A dilemma, not an error.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
        {steps.map((s, i) => (
          <div key={s.num} style={{ position: 'relative' }}>
            <div style={{
              padding: 10, borderRadius: 8, height: '100%',
              borderTop: `3px solid ${s.color}`,
              background: `${s.color}10`
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: s.color, color: 'white', fontSize: 11, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6
              }}>{s.num}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: s.color, marginBottom: 3 }}>{s.title}</div>
              <div style={{ fontSize: 9, color: 'var(--text-primary)', lineHeight: 1.4 }}>{s.text}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', right: -8, top: '40%',
                fontSize: 14, color: 'var(--text-sec)', zIndex: 2
              }}>›</div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, padding: 8, borderRadius: 6, background: `${C.loss}10`, border: `1px solid ${C.loss}30`, fontSize: 10, color: 'var(--text-primary)', textAlign: 'center', fontStyle: 'italic' }}>
        Awareness alone does not fix this. The systems that translate awareness into action must change.
      </div>
    </div>
  )
}

// ----- 6-2: Two systemic traps -----
export function TrapFunnel({ title, sub, color, filter, reject }) {
  return (
    <div style={{ padding: 10, borderRadius: 8, background: `${color}08`, border: `1px solid ${color}40` }}>
      <div style={{ fontSize: 11, fontWeight: 700, color, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 8, fontStyle: 'italic' }}>{sub}</div>
      <svg viewBox="0 0 200 140" style={{ width: '100%' }}>
        <polygon points="20,10 180,10 140,90 60,90" fill={`${color}25`} stroke={color} strokeWidth="1.5" />
        <text x="100" y="55" fontSize="10" textAnchor="middle" fill={color} fontWeight="700">{filter}</text>
        <line x1="100" y1="90" x2="100" y2="115" stroke={color} strokeWidth="2" strokeDasharray="3 2" />
        <text x="100" y="130" fontSize="10" textAnchor="middle" fill={C.loss} fontWeight="700">{reject}</text>
      </svg>
    </div>
  )
}
export function TwoTraps() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Two Systemic Traps</p>
      <p style={subStyle}>Both traps are structural, not cognitive. Awareness does not bypass them. Redesign does.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <TrapFunnel title="Marketing dictum"
          sub='"Stay close to big customers."'
          color={C.orange}
          filter="Filter: what big customers want"
          reject='Disruptive tech → "no signal" → no market'
        />
        <TrapFunnel title="Resource allocation"
          sub="Optimized for size + margin + certainty."
          color={C.loss}
          filter="Filter: large, certain, high-margin"
          reject="Disruptive: small, uncertain, low-margin → rejected"
        />
      </div>
      <div style={{ marginTop: 10, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', textAlign: 'center' }}>
        <strong>Each trap works exactly as designed.</strong> That is the problem.
      </div>
    </div>
  )
}

// ----- 6-2: Christensen's five recommendations -----
export function FiveRecommendations() {
  const recs = [
    { num: 1, title: 'Talk to engineers', text: 'Not only marketers. Engineers see the trajectory; marketers see today.', color: C.indigo, icon: '🔧' },
    { num: 2, title: 'Find market-tech intersections', text: 'Not technology comparisons. 8" was always behind 14" on storage but won mini-computers.', color: C.purple, icon: '🎯' },
    { num: 3, title: 'Skate to where the puck WILL be', text: 'Wayne Gretzky logic. Anticipate intersection, do not optimize for today.', color: C.teal, icon: '🏒' },
    { num: 4, title: 'Non-traditional discovery', text: 'Skunk works, startups, lateral exploration. Standard channels miss disruptive markets.', color: C.orange, icon: '🔍' },
    { num: 5, title: 'INDEPENDENT organization', text: 'Small, hungry, lean, structurally separated. Without separation, mainstream eats it.', color: C.loss, icon: '🏗️' }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Christensen's Five Recommendations</p>
      <p style={subStyle}>A sequence, not a checklist. #5 is the famous one.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
        {recs.map(r => (
          <div key={r.num} style={{
            padding: 10, borderRadius: 8,
            borderLeft: `3px solid ${r.color}`,
            background: `${r.color}10`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 16 }}>{r.icon}</span>
              <span style={{ fontSize: 9, color: 'var(--text-sec)' }}>#{r.num}</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: r.color, marginBottom: 4 }}>{r.title}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', lineHeight: 1.4 }}>{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 6-3: Capabilities — three components -----
export function CapabilitiesThreeParts() {
  const [selected, setSelected] = useState(0)
  const parts = [
    {
      name: 'Resources', color: C.gain, ease: 'EASIEST',
      examples: ['People, equipment, IP', 'Brand, reputation', 'Cash, facilities'],
      change: 'Hire, buy, M&A, invest. Rarely the binding constraint when firms attempt new capabilities.',
      barWidth: 90
    },
    {
      name: 'Processes', color: C.orange, ease: 'HARD',
      examples: ['Manufacturing flows', 'Decision rituals (budget, approvals)', 'Sales / marketing routines'],
      change: 'Embed habits, tacit knowledge, metrics, rewards. Define BOTH capability AND incapability.',
      barWidth: 50
    },
    {
      name: 'Values', color: C.loss, ease: 'HARDEST',
      examples: ['Acceptable margin (e.g. 80% software vs 1-3% grocery)', 'Required business size ($1B in 5y at IBM)', 'Implicit decision rules'],
      change: 'Live in heads and resource allocation rules. Decide which opportunities even appear on the radar.',
      barWidth: 20
    }
  ]
  const p = parts[selected]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Capability = Resources + Processes + Values</p>
      <p style={subStyle}>Click a layer. Bar shows ease of change. Disruption fails on the bottom layer.</p>
      <div style={{ display: 'grid', gap: 6, marginBottom: 12 }}>
        {parts.map((part, i) => (
          <button key={part.name} onClick={() => setSelected(i)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer', textAlign: 'left',
              border: `2px solid ${part.color}`,
              background: selected === i ? `${part.color}25` : `${part.color}08`,
              opacity: selected === i ? 1 : 0.7
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <strong style={{ fontSize: 12, color: part.color }}>{part.name}</strong>
              <span style={{ fontSize: 9, color: part.color, fontWeight: 700 }}>change cost: {part.ease}</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
              <div style={{ width: `${part.barWidth}%`, height: '100%', background: part.color, transition: 'width 0.4s' }} />
            </div>
          </button>
        ))}
      </div>
      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${p.color}`, background: `${p.color}08` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: p.color, marginBottom: 6 }}>Examples</div>
        <ul style={{ fontSize: 10, paddingLeft: 16, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          {p.examples.map((ex, i) => <li key={i}>{ex}</li>)}
        </ul>
        <div style={{ marginTop: 8, padding: 8, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', fontStyle: 'italic' }}>
          {p.change}
        </div>
      </div>
    </div>
  )
}

// ----- 6-3: Three structural routes -----
export function RouteBar({ label, value, color }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: 'var(--text-sec)' }}>
        <span>{label}</span><span>{value}%</span>
      </div>
      <div style={{ height: 5, borderRadius: 3, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div style={{ width: `${value}%`, height: '100%', background: color }} />
      </div>
    </div>
  )
}
export function ThreeRoutes() {
  const routes = [
    {
      name: 'Independent Org', color: C.loss,
      separation: 100, speed: 30, cost: 80, risk: 60,
      desc: 'Fully separate semi-autonomous unit. Own resources, processes, values. Most radical.',
      fits: 'Disruptive innovation, values mismatch'
    },
    {
      name: 'Heavyweight Team', color: C.orange,
      separation: 50, speed: 60, cost: 50, risk: 50,
      desc: 'Cross-functional senior team inside the firm. Members carry "GM hat", full-time.',
      fits: 'Sustaining innovation needing new processes'
    },
    {
      name: 'Acquisition', color: C.indigo,
      separation: 70, speed: 95, cost: 95, risk: 80,
      desc: 'Buy a firm with the needed capabilities. Quickest, but integration is risky.',
      fits: 'Capabilities you cannot build internally in time'
    }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Three Routes to New Capabilities</p>
      <p style={subStyle}>Resources are easy to acquire. Processes and values are not. Each route fits a different situation.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {routes.map(r => (
          <div key={r.name} style={{
            padding: 10, borderRadius: 8,
            borderTop: `3px solid ${r.color}`,
            background: `${r.color}08`
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: r.color, marginBottom: 6 }}>{r.name}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4 }}>{r.desc}</div>
            <RouteBar label="Separation" value={r.separation} color={r.color} />
            <RouteBar label="Speed" value={r.speed} color={r.color} />
            <RouteBar label="Cost" value={r.cost} color={r.color} />
            <RouteBar label="Risk" value={r.risk} color={r.color} />
            <div style={{ marginTop: 8, padding: 6, borderRadius: 4, background: 'var(--bg-secondary)', fontSize: 9, color: 'var(--text-primary)' }}>
              <strong>Fits: </strong>{r.fits}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 6-4: Innovation 2x2 matrix -----
export function InnovationMatrix2x2() {
  const [cell, setCell] = useState('A')
  const cells = {
    A: { row: 0, col: 0, label: 'Sustaining + Processes fit', response: 'Lightweight / Functional team', color: C.gain,
      detail: 'Bulk of mature-firm innovation. Existing structures handle it. Project manager coordinates across functions. No new structures needed.' },
    B: { row: 1, col: 0, label: 'Sustaining + Processes do NOT fit', response: 'Heavyweight team (inside)', color: C.orange,
      detail: 'Values fit, but new processes needed. Senior cross-functional team with GM hat builds new processes inside the firm. No need for full separation.' },
    C: { row: 1, col: 1, label: 'Disruptive + Processes do NOT fit', response: 'INDEPENDENT organization', color: C.loss,
      detail: 'Christensen classic. Maximum separation: physical, organizational, cultural. Own values (low margins, small markets OK). Own processes.' },
    D: { row: 0, col: 1, label: 'Disruptive + Processes fit', response: 'Phased: heavyweight → spinout', color: C.purple,
      detail: 'Hybrid: values reject, processes can handle it. Start as heavyweight team inside; spin out before commercialization (values force separation).' }
  }
  const c = cells[cell]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Diagnose Before You Build — 2x2 Matrix</p>
      <p style={subStyle}>Two questions: does it fit your VALUES? Do existing PROCESSES handle it? Click a cell.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 4 }}>
        <div></div>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '4px 0' }}>VALUES fit ✓</div>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '4px 0' }}>VALUES do not fit ✗</div>

        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', writingMode: 'vertical-rl', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(180deg)' }}>PROCESSES fit ✓</div>
        {['A', 'D'].map(k => (
          <button key={k} onClick={() => setCell(k)}
            style={{
              padding: 12, borderRadius: 8, cursor: 'pointer', minHeight: 90,
              border: `2px solid ${cells[k].color}`,
              background: cell === k ? `${cells[k].color}30` : `${cells[k].color}10`,
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: cells[k].color, marginBottom: 4 }}>{k}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', fontWeight: 600 }}>{cells[k].response}</div>
          </button>
        ))}

        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', writingMode: 'vertical-rl', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(180deg)' }}>PROCESSES do not fit ✗</div>
        {['B', 'C'].map(k => (
          <button key={k} onClick={() => setCell(k)}
            style={{
              padding: 12, borderRadius: 8, cursor: 'pointer', minHeight: 90,
              border: `2px solid ${cells[k].color}`,
              background: cell === k ? `${cells[k].color}30` : `${cells[k].color}10`,
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: cells[k].color, marginBottom: 4 }}>{k}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', fontWeight: 600 }}>{cells[k].response}</div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 12, padding: 10, borderRadius: 6, borderLeft: `3px solid ${c.color}`, background: `${c.color}10` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: c.color, marginBottom: 4 }}>Cell {cell}: {c.label}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 4 }}><strong>Response:</strong> {c.response}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>{c.detail}</div>
      </div>
    </div>
  )
}

// ----- 6-4: Acquisition decision tree -----
export function AcquisitionDecisionTree() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Acquisitions — What Are You Buying?</p>
      <p style={subStyle}>Diagnose honestly before the deal. Wrong choice destroys exactly what you paid for.</p>

      <svg viewBox="0 0 620 320" style={{ width: '100%' }}>
        <defs>
          <marker id="arrAcq" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>

        {/* Root question */}
        <rect x="220" y="10" width="180" height="50" rx="8" fill={C.indigo} opacity="0.85" />
        <text x="310" y="32" fontSize="11" fill="white" textAnchor="middle" fontWeight="700">What are you buying?</text>
        <text x="310" y="48" fontSize="9" fill="white" textAnchor="middle" opacity="0.85">Resources or processes/values?</text>

        {/* Two branches */}
        <line x1="280" y1="60" x2="140" y2="100" stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrAcq)" />
        <line x1="340" y1="60" x2="480" y2="100" stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrAcq)" />

        {/* Branch A: Resources */}
        <rect x="40" y="110" width="200" height="50" rx="8" fill={C.gain} opacity="0.85" />
        <text x="140" y="132" fontSize="10" fill="white" textAnchor="middle" fontWeight="700">RESOURCES</text>
        <text x="140" y="148" fontSize="9" fill="white" textAnchor="middle">talent, IP, technology</text>

        <line x1="140" y1="160" x2="140" y2="195" stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrAcq)" />

        <rect x="20" y="200" width="240" height="60" rx="8" fill="white" stroke={C.gain} strokeWidth="2" />
        <text x="140" y="220" fontSize="11" fill={C.gain} textAnchor="middle" fontWeight="700">INTEGRATE</text>
        <text x="140" y="236" fontSize="9" fill="var(--text-primary)" textAnchor="middle">Absorb into main org. Leverage talent + IP.</text>
        <text x="140" y="250" fontSize="9" fill="var(--text-sec)" textAnchor="middle" fontStyle="italic">Cisco model: ~2 decades, low R&D budget</text>

        {/* Branch B: Processes/Values */}
        <rect x="380" y="110" width="200" height="50" rx="8" fill={C.loss} opacity="0.85" />
        <text x="480" y="132" fontSize="10" fill="white" textAnchor="middle" fontWeight="700">PROCESSES / VALUES</text>
        <text x="480" y="148" fontSize="9" fill="white" textAnchor="middle">how they operate is the asset</text>

        <line x1="480" y1="160" x2="480" y2="195" stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrAcq)" />

        <rect x="360" y="200" width="240" height="60" rx="8" fill="white" stroke={C.loss} strokeWidth="2" />
        <text x="480" y="220" fontSize="11" fill={C.loss} textAnchor="middle" fontWeight="700">KEEP SEPARATE</text>
        <text x="480" y="236" fontSize="9" fill="var(--text-primary)" textAnchor="middle">Provide resources from main firm. Do NOT absorb.</text>
        <text x="480" y="250" fontSize="9" fill="var(--text-sec)" textAnchor="middle" fontStyle="italic">Permanent separation, not "later for efficiency"</text>

        {/* IBM/ROLM warning */}
        <rect x="280" y="280" width="320" height="32" rx="6" fill={`${C.loss}20`} stroke={C.loss} strokeDasharray="3 3" />
        <text x="440" y="298" fontSize="10" fill={C.loss} textAnchor="middle" fontWeight="700">⚠ IBM / ROLM cautionary tale</text>
        <text x="440" y="308" fontSize="8" fill="var(--text-primary)" textAnchor="middle">Phase 2 integration "for efficiency" destroyed the capability</text>
      </svg>
    </div>
  )
}

// ----- 6-5: Wolcott & Lippitz CE matrix -----
export function WolcottLippitzMatrix() {
  const [model, setModel] = useState('Opportunist')
  const models = {
    Opportunist: { row: 1, col: 0, color: C.slate, where: 'AD HOC × DIFFUSED',
      desc: 'Default mode. Ideas bubble up; entrepreneurs network for sponsorship. Every firm has it to some degree. Cannot turn off.',
      strength: 'Low cost, harvests latent energy', weakness: 'Unreliable, luck-driven, orphans cross-cutting ideas',
      example: 'All firms (background mode)' },
    Enabler: { row: 0, col: 0, color: C.indigo, where: 'DEDICATED × DIFFUSED',
      desc: 'Anyone can propose. Apply to executive council, get staged funding from corporate pool. Goal: proven concept.',
      strength: 'Legitimacy, exec attention, dedicated funding', weakness: 'Depends on council quality',
      example: 'Google, Boeing, Whirlpool' },
    Advocate: { row: 1, col: 1, color: C.orange, where: 'AD HOC × FOCUSED',
      desc: 'Small corporate group acts as internal consultants and evangelists. BUs still fund the work, but the corp group pushes.',
      strength: '~$500M of new business at DuPont with 5 staff', weakness: 'Cannot save orphan ideas',
      example: 'DuPont (5 FTE)' },
    Producer: { row: 0, col: 1, color: C.teal, where: 'DEDICATED × FOCUSED',
      desc: 'Full-service corporate unit. Owns ideas end-to-end: R&D, market, biz dev. Builds whole new businesses.',
      strength: 'Most powerful — handles ideas no BU can host', weakness: 'Most expensive, politically sensitive (pariah risk)',
      example: 'Cargill Emerging Business Accelerator' }
  }
  const m = models[model]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Wolcott & Lippitz — Four CE Models</p>
      <p style={subStyle}>Two design dilemmas: where do resources come from, and where does ownership live?</p>

      <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr 1fr', gap: 4 }}>
        <div></div>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '4px 0' }}>DIFFUSED ownership</div>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', padding: '4px 0' }}>FOCUSED ownership</div>

        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>DEDICATED resources</div>
        {['Enabler', 'Producer'].map(k => (
          <button key={k} onClick={() => setModel(k)}
            style={{
              padding: 12, borderRadius: 8, cursor: 'pointer', minHeight: 75,
              border: `2px solid ${models[k].color}`,
              background: model === k ? `${models[k].color}30` : `${models[k].color}10`
            }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: models[k].color }}>{k}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 3 }}>{models[k].example}</div>
          </button>
        ))}

        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AD HOC resources</div>
        {['Opportunist', 'Advocate'].map(k => (
          <button key={k} onClick={() => setModel(k)}
            style={{
              padding: 12, borderRadius: 8, cursor: 'pointer', minHeight: 75,
              border: `2px solid ${models[k].color}`,
              background: model === k ? `${models[k].color}30` : `${models[k].color}10`
            }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: models[k].color }}>{k}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 3 }}>{models[k].example}</div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 12, padding: 10, borderRadius: 6, borderLeft: `3px solid ${m.color}`, background: `${m.color}10` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: m.color, marginBottom: 4 }}>{model} <span style={{ fontSize: 9, color: 'var(--text-sec)', fontWeight: 400 }}>— {m.where}</span></div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 6 }}>{m.desc}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          <div style={{ padding: 6, borderRadius: 4, background: `${C.gain}12`, border: `1px solid ${C.gain}30` }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: C.gain, marginBottom: 2 }}>✓ Strength</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>{m.strength}</div>
          </div>
          <div style={{ padding: 6, borderRadius: 4, background: `${C.loss}12`, border: `1px solid ${C.loss}30` }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: C.loss, marginBottom: 2 }}>✗ Weakness</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>{m.weakness}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ----- 6-6: Four CE models comparison -----
export function FourModelsComparison() {
  const data = [
    { model: 'Opportunist', cost: 5, scope: 20, ideaFit: 'Anything (luck)', goal: 'Default activity', color: C.slate },
    { model: 'Enabler', cost: 50, scope: 60, ideaFit: 'Within strategic frame', goal: 'Proven concepts', color: C.indigo },
    { model: 'Advocate', cost: 30, scope: 50, ideaFit: 'Close to existing BUs', goal: 'BU reinvigoration', color: C.orange },
    { model: 'Producer', cost: 95, scope: 100, ideaFit: 'Does NOT fit any BU', goal: 'Whole new businesses', color: C.teal }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Four CE Models — Match Model to Idea Type</p>
      <p style={subStyle}>Models are NOT mutually exclusive. IBM runs all three additional models simultaneously.</p>

      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 24, left: 70, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={labelStyle} />
          <YAxis type="category" dataKey="model" tick={labelStyle} width={70} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="cost" name="Cost / commitment" fill={C.loss}>
            {data.map((d, i) => <Cell key={i} fill={C.loss} opacity={0.7} />)}
          </Bar>
          <Bar dataKey="scope" name="Scope of impact" fill={C.gain}>
            {data.map((d, i) => <Cell key={i} fill={C.gain} opacity={0.7} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginTop: 8 }}>
        {data.map(d => (
          <div key={d.model} style={{
            padding: 8, borderRadius: 6,
            borderTop: `3px solid ${d.color}`,
            background: `${d.color}08`
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: d.color, marginBottom: 4 }}>{d.model}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)' }}><strong>Idea fit: </strong>{d.ideaFit}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', marginTop: 2 }}><strong>Goal: </strong>{d.goal}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 6-7: Module 6 concept map -----
export function Module6ConceptMap() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 6 — Logical Chain</p>
      <p style={subStyle}>Each lecture answers what the previous raised</p>
      <svg viewBox="0 0 700 380" style={{ width: '100%' }}>
        <defs>
          <marker id="arrM6c" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>

        {[
          { x: 80, y: 70, num: '6-1', label: 'Disruption\ntypology', color: C.orange },
          { x: 240, y: 70, num: '6-2', label: 'Failure mechanisms\n+ 5 recommendations', color: C.loss },
          { x: 400, y: 70, num: '6-3', label: 'Capabilities\nR / P / V', color: C.purple },
          { x: 560, y: 70, num: '6-4', label: '2x2 matrix\n+ acquisitions', color: C.indigo }
        ].map((n, i, arr) => (
          <g key={n.num}>
            <circle cx={n.x} cy={n.y} r="30" fill={n.color} opacity="0.85" />
            <text x={n.x} y={n.y + 4} fontSize="13" fill="white" fontWeight="bold" textAnchor="middle">{n.num}</text>
            {n.label.split('\n').map((line, j) => (
              <text key={j} x={n.x} y={n.y + 54 + j * 13} fontSize="10" fill="var(--text-primary)" textAnchor="middle">{line}</text>
            ))}
            {i < arr.length - 1 && (
              <line x1={n.x + 30} y1={n.y} x2={arr[i + 1].x - 30} y2={arr[i + 1].y}
                stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrM6c)" />
            )}
          </g>
        ))}

        {/* CE models cluster below */}
        <circle cx="240" cy="240" r="35" fill={C.teal} opacity="0.85" />
        <text x="240" y="244" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">6-5/6</text>
        <text x="240" y="290" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Wolcott & Lippitz</text>
        <text x="240" y="304" fontSize="10" fill="var(--text-primary)" textAnchor="middle">4 CE models</text>

        <circle cx="500" cy="240" r="35" fill={C.cyan} opacity="0.85" />
        <text x="500" y="244" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">6-7</text>
        <text x="500" y="290" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Synthesis +</text>
        <text x="500" y="304" fontSize="10" fill="var(--text-primary)" textAnchor="middle">10 takeaways</text>

        <path d="M 240 100 Q 240 170 240 205" stroke={C.teal} strokeWidth="2" fill="none" markerEnd="url(#arrM6c)" />
        <path d="M 560 100 Q 540 170 510 205" stroke={C.cyan} strokeWidth="2" fill="none" markerEnd="url(#arrM6c)" />
        <path d="M 275 240 Q 380 240 465 240" stroke="var(--text-sec)" strokeWidth="2" fill="none" markerEnd="url(#arrM6c)" />

        <text x="350" y="360" fontSize="10" fontStyle="italic" fill="var(--text-sec)" textAnchor="middle">
          Diagnose type → match response → build proactive capability
        </text>
      </svg>
    </div>
  )
}


