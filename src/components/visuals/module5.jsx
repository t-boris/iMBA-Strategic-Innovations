import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 5: Managing Innovation Initiatives (Prof. Geoff Love)
// =========================================================================

// ----- 5-1a: Animated S-Curve with Three Eras -----
export function SCurveAnimatedEras() {
  const [progress, setProgress] = useState(35)
  const [playing, setPlaying] = useState(false)

  // Auto-advance when playing
  useMemo(() => {}, [])
  if (playing) {
    setTimeout(() => setProgress(p => p >= 100 ? 5 : p + 1), 100)
  }

  const data = []
  for (let t = 0; t <= 100; t++) {
    const perf = 100 / (1 + Math.exp(-0.12 * (t - 50)))
    data.push({
      t,
      fullCurve: perf,
      visible: t <= progress ? perf : null
    })
  }

  const currentEra = progress < 33 ? 'Era of Ferment' :
    progress < 66 ? 'Dominant Design Emerges' : 'Era of Incremental Change'
  const eraColor = progress < 33 ? C.orange :
    progress < 66 ? C.indigo : C.teal

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>S-Curve: Three Eras of Technology Evolution</p>
      <p style={subStyle}>Drag slider or press Play. Anderson & Tushman (2004).</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)', flex: 1, minWidth: 160 }}>
          Time: <strong>{progress}</strong>
          <input type="range" min="0" max="100" value={progress}
            onChange={e => { setPlaying(false); setProgress(+e.target.value) }}
            style={{ display: 'block', width: '100%', accentColor: eraColor }} />
        </label>
        <button onClick={() => setPlaying(!playing)}
          style={{
            padding: '6px 12px', borderRadius: 6, border: 'none',
            background: playing ? C.loss : C.gain, color: 'white',
            fontSize: 11, fontWeight: 600, cursor: 'pointer'
          }}>
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
        <div style={{
          padding: '4px 10px', borderRadius: 6,
          background: `${eraColor}20`, color: eraColor,
          fontSize: 11, fontWeight: 700
        }}>
          {currentEra}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="scurveEraGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={C.orange} />
              <stop offset="50%" stopColor={C.indigo} />
              <stop offset="100%" stopColor={C.teal} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} />
          <YAxis tick={labelStyle} domain={[0, 105]} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => v !== null ? [`${v.toFixed(1)}`, 'Performance'] : ['—', '']} />
          <ReferenceLine x={33} stroke={C.indigo} strokeDasharray="3 3" label={{ value: 'Dominant design', fontSize: 9, fill: C.indigo, position: 'top' }} />
          <ReferenceLine x={66} stroke={C.teal} strokeDasharray="3 3" />
          <Area type="monotone" dataKey="visible" stroke="url(#scurveEraGrad)" strokeWidth={3} fill="url(#scurveEraGrad)" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginTop: 10 }}>
        {[
          { label: 'Era of Ferment', color: C.orange, desc: 'Many competing designs, rapid experimentation' },
          { label: 'Dominant Design', color: C.indigo, desc: 'Market converges on one architecture' },
          { label: 'Incremental', color: C.teal, desc: 'Efficiency, cost, process innovation' }
        ].map(e => (
          <div key={e.label} style={{ padding: 8, borderRadius: 6, background: `${e.color}12`, border: `1px solid ${e.color}30` }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: e.color }}>{e.label}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>{e.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 5-1b: Ballpoint Pens vs Transistors -----
export function BallpointVsTransistor() {
  const ballpoint = [
    { year: 1946, sales: 20 }, { year: 1947, sales: 50 },
    { year: 1948, sales: 30 }, { year: 1949, sales: 5 },
    { year: 1950, sales: 5 }, { year: 1952, sales: 12 },
    { year: 1955, sales: 28 }, { year: 1958, sales: 45 },
    { year: 1960, sales: 65 }, { year: 1962, sales: 80 }
  ]
  const transistors = [
    { year: 1954, transistor: 1, tube: 480 },
    { year: 1958, transistor: 80, tube: 460 },
    { year: 1962, transistor: 400, tube: 400 },
    { year: 1966, transistor: 780, tube: 320 },
    { year: 1968, transistor: 880, tube: 290 }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Two Paths for New Technologies</p>
      <p style={subStyle}>Smooth substitution vs boom-bust-recovery. Same era, very different shapes.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ padding: 10, borderRadius: 8, background: `${C.loss}08`, border: `1px solid ${C.loss}30` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.loss, marginBottom: 4 }}>Ballpoint Pens (1946-62)</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 6 }}>Boom → Crater → Slow Recovery</div>
          <ResponsiveContainer width="100%" height={140}>
            <AreaChart data={ballpoint}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
              <YAxis tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="sales" stroke={C.loss} fill={C.loss} fillOpacity={0.25} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ fontSize: 9, color: C.loss, marginTop: 4 }}>Entry in 1947 → ruined by 1949</div>
        </div>

        <div style={{ padding: 10, borderRadius: 8, background: `${C.teal}08`, border: `1px solid ${C.teal}30` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.teal, marginBottom: 4 }}>Transistors vs Tubes (1954-68)</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 6 }}>Smooth substitution S-curve</div>
          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={transistors}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
              <YAxis tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="transistor" stroke={C.teal} strokeWidth={2} dot={false} name="Transistors" />
              <Line type="monotone" dataKey="tube" stroke={C.orange} strokeWidth={2} dot={false} name="Tubes" />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ fontSize: 9, color: C.teal, marginTop: 4 }}>But: germanium vs silicon — inner battle</div>
        </div>
      </div>
    </div>
  )
}

// ----- 5-1c: Four Strategic Paradoxes -----
export function FourParadoxes() {
  const [selected, setSelected] = useState(0)
  const paradoxes = [
    {
      title: 'Timing of Entry', color: C.loss,
      wisdom: 'Enter early — first-mover advantage',
      reality: 'Early entry can be PREMATURE entry',
      example: 'Ballpoint pens (1947): boom → crater (1949) → slow recovery. Entering in 1947 could ruin your career.'
    },
    {
      title: 'Magnitude of Commitment', color: C.orange,
      wisdom: 'Go big — high commitment wins',
      reality: 'Big commitment LOCKS IN early mistakes',
      example: 'A firm built a plant for germanium transistors. When silicon won, the plant was worthless.'
    },
    {
      title: 'Link to Capabilities', color: C.indigo,
      wisdom: 'Leverage your strengths',
      reality: 'Old capabilities INHIBIT adaptation',
      example: 'Mechanical calculator firms had great service networks — worthless for reliable electronic calculators.'
    },
    {
      title: 'Strategic Approach', color: C.teal,
      wisdom: 'Follow proven recipes',
      reality: 'New markets need NEW bases of competition',
      example: 'GM Electro-Motive beat steam locomotive firms by switching from custom-build to mass-production.'
    }
  ]
  const p = paradoxes[selected]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Four Strategic Paradoxes</p>
      <p style={subStyle}>Each decision has a "conventional wisdom" — and a contradicting reality.</p>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        {paradoxes.map((px, i) => (
          <button key={i} onClick={() => setSelected(i)}
            style={{
              padding: '6px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: selected === i ? px.color : `${px.color}15`,
              color: selected === i ? 'white' : px.color,
              fontSize: 10, fontWeight: 700
            }}>
            {px.title}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
        <div style={{ padding: 10, borderRadius: 6, background: 'var(--bg-secondary)', borderLeft: '3px solid var(--text-sec)' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-sec)', marginBottom: 4 }}>💡 Conventional Wisdom</div>
          <div style={{ fontSize: 11, color: 'var(--text-primary)' }}>{p.wisdom}</div>
        </div>
        <div style={{ padding: 10, borderRadius: 6, background: `${p.color}12`, borderLeft: `3px solid ${p.color}` }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: p.color, marginBottom: 4 }}>⚠ But Reality</div>
          <div style={{ fontSize: 11, color: 'var(--text-primary)' }}>{p.reality}</div>
        </div>
      </div>

      <div style={{ padding: 10, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)' }}>
        <strong style={{ color: p.color }}>📌 Example: </strong>{p.example}
      </div>
    </div>
  )
}

// ----- 5-2a: Organization Design Diamond -----
export function OrgDiamond() {
  const [hovered, setHovered] = useState(null)
  const elements = [
    { id: 'strategy', x: 150, y: 30, color: C.indigo, title: 'Strategy',
      detail: 'Strategic intent, critical tasks, key success factors — what the firm is trying to do' },
    { id: 'structures', x: 30, y: 150, color: C.orange, title: 'Structures & Systems',
      detail: 'Functions vs divisions, centralization, metrics, rewards — how work is organized' },
    { id: 'people', x: 270, y: 150, color: C.teal, title: 'People',
      detail: 'Who we hire, what competencies, how we motivate — the human element' },
    { id: 'culture', x: 150, y: 270, color: C.pink, title: 'Culture',
      detail: 'Shared beliefs, expectations, norms — "how we do things here"' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Organization Design Diamond (Tushman & O'Reilly)</p>
      <p style={subStyle}>All four elements must be aligned with each other AND with strategy. Hover to explore.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'center' }}>
        <svg viewBox="0 0 300 300" style={{ width: '100%' }}>
          {elements.slice(1).map((e, i) => {
            const top = elements[0]
            return (
              <line key={`l-${i}`} x1={top.x} y1={top.y} x2={e.x} y2={e.y}
                stroke="var(--text-sec)" strokeWidth="1" opacity="0.4" />
            )
          })}
          <line x1={30} y1={150} x2={270} y2={150} stroke="var(--text-sec)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
          <line x1={150} y1={30} x2={150} y2={270} stroke="var(--text-sec)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
          <line x1={30} y1={150} x2={150} y2={270} stroke="var(--text-sec)" strokeWidth="1" opacity="0.3" />
          <line x1={270} y1={150} x2={150} y2={270} stroke="var(--text-sec)" strokeWidth="1" opacity="0.3" />

          {elements.map(e => (
            <g key={e.id} onMouseEnter={() => setHovered(e.id)} onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}>
              <circle cx={e.x} cy={e.y} r={hovered === e.id ? 34 : 28}
                fill={e.color} opacity={hovered === e.id ? 0.95 : 0.75}
                style={{ transition: 'all 0.2s' }} />
              <text x={e.x} y={e.y + 4} fontSize="10" fontWeight="700"
                fill="white" textAnchor="middle">{e.title.split(' ')[0]}</text>
            </g>
          ))}

          <text x="150" y="155" fontSize="9" fill="var(--text-sec)" textAnchor="middle" fontStyle="italic">alignment</text>
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {elements.map(e => (
            <div key={e.id}
              onMouseEnter={() => setHovered(e.id)} onMouseLeave={() => setHovered(null)}
              style={{
                padding: 8, borderRadius: 6, cursor: 'pointer',
                background: hovered === e.id ? `${e.color}18` : 'var(--bg-secondary)',
                borderLeft: `3px solid ${e.color}`,
                transition: 'all 0.2s'
              }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: e.color }}>{e.title}</div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>{e.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ----- 5-2b: Structural vs Cultural Inertia -----
export function InertiaTypesViz() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Two Forms of Inertia: BlackBerry vs Kodak</p>
      <p style={subStyle}>Both firms failed at technology transition — but through different mechanisms.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ padding: 12, borderRadius: 8, background: `${C.orange}08`, border: `1px solid ${C.orange}40` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: `${C.orange}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⚙️</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.orange }}>Structural Inertia</div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>"Hardware" of the organization</div>
            </div>
          </div>
          <ul style={{ fontSize: 10, color: 'var(--text-primary)', paddingLeft: 14, margin: '4px 0 8px', lineHeight: 1.5 }}>
            <li>Processes, systems, reporting lines</li>
            <li>Career paths and power positions</li>
            <li>Patents, tools, infrastructure</li>
          </ul>
          <div style={{ padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 9, color: 'var(--text-primary)' }}>
            <strong style={{ color: C.orange }}>📱 BlackBerry: </strong>
            Entire R&D, patents, engineering organization built around physical keyboards. The touchscreen "Storm" was rushed, unreliable, and failed.
          </div>
        </div>

        <div style={{ padding: 12, borderRadius: 8, background: `${C.purple}08`, border: `1px solid ${C.purple}40` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: `${C.purple}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🧠</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.purple }}>Cultural (Cognitive) Inertia</div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>"Software" in people's heads</div>
            </div>
          </div>
          <ul style={{ fontSize: 10, color: 'var(--text-primary)', paddingLeft: 14, margin: '4px 0 8px', lineHeight: 1.5 }}>
            <li>Shared beliefs and identity</li>
            <li>"How we do things here"</li>
            <li>Embedded assumptions in decisions</li>
          </ul>
          <div style={{ padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 9, color: 'var(--text-primary)' }}>
            <strong style={{ color: C.purple }}>📷 Kodak: </strong>
            "Film was in the DNA of Kodakers." The business model (sell camera, sell film for decades) was part of identity. Abandoning it meant abandoning who they were.
          </div>
        </div>
      </div>
    </div>
  )
}

// ----- 5-2c: S-Curve with Three Diamonds -----
export function SCurveThreeDiamondsViz() {
  const [active, setActive] = useState(0)
  const diamonds = [
    { x: 90, y: 230, era: 'Innovation / Variation', focus: 'Experiment, learn fast, early adopters, tolerate messiness', color: C.orange },
    { x: 200, y: 130, era: 'Differentiation / Selection', focus: 'Market segmentation, marketing-focused, dominant design emerges', color: C.indigo },
    { x: 310, y: 60, era: 'Cost / Retention', focus: 'Efficiency, process, commoditization, mature market', color: C.teal }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>S-Curve + Three Diamonds</p>
      <p style={subStyle}>Each era needs a radically different alignment — not a tweak. Click a diamond.</p>

      <svg viewBox="0 0 400 280" style={{ width: '100%', maxHeight: 260 }}>
        <defs>
          <linearGradient id="scurveDiam" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={C.orange} />
            <stop offset="50%" stopColor={C.indigo} />
            <stop offset="100%" stopColor={C.teal} />
          </linearGradient>
        </defs>
        <path d="M 30 250 Q 80 250 120 230 T 200 150 T 320 40 Q 360 25 380 25"
          stroke="url(#scurveDiam)" strokeWidth="3" fill="none" />
        <line x1="30" y1="260" x2="380" y2="260" stroke="var(--text-sec)" strokeWidth="1" />
        <line x1="30" y1="260" x2="30" y2="20" stroke="var(--text-sec)" strokeWidth="1" />
        <text x="380" y="275" fontSize="9" fill="var(--text-sec)" textAnchor="end">Time →</text>
        <text x="25" y="20" fontSize="9" fill="var(--text-sec)" textAnchor="end" transform="rotate(-90 25 20)">Performance</text>

        {diamonds.map((d, i) => {
          const size = active === i ? 26 : 18
          return (
            <g key={i} onClick={() => setActive(i)} style={{ cursor: 'pointer' }}>
              <polygon points={`${d.x},${d.y - size} ${d.x + size},${d.y} ${d.x},${d.y + size} ${d.x - size},${d.y}`}
                fill={d.color} opacity={active === i ? 0.95 : 0.55}
                stroke={d.color} strokeWidth={active === i ? 3 : 1}
                style={{ transition: 'all 0.3s' }} />
              <text x={d.x} y={d.y + 4} fontSize="11" fontWeight="700" fill="white" textAnchor="middle">{i + 1}</text>
            </g>
          )
        })}
      </svg>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginTop: 8 }}>
        {diamonds.map((d, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{
              padding: 8, borderRadius: 6, textAlign: 'left', cursor: 'pointer',
              borderLeft: `3px solid ${d.color}`, border: 'none',
              borderLeftWidth: 3, borderLeftStyle: 'solid', borderLeftColor: d.color,
              background: active === i ? `${d.color}18` : 'var(--bg-secondary)',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: d.color }}>Diamond {i + 1}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-primary)', marginTop: 2 }}>{d.era}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>{d.focus}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ----- 5-3a: Ambidextrous Two Hands -----
export function AmbidextrousHandsViz() {
  const [pulse, setPulse] = useState(0)
  useMemo(() => {}, [])
  setTimeout(() => setPulse(p => (p + 1) % 2), 1500)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Ambidextrous = Using Both Hands</p>
      <p style={subStyle}>From Latin <em>ambo</em> (both) + <em>dexter</em> (right hand). Two hands, very different tasks.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{
          padding: 14, borderRadius: 8,
          border: `2px solid ${pulse === 0 ? C.indigo : `${C.indigo}50`}`,
          background: pulse === 0 ? `${C.indigo}18` : `${C.indigo}06`,
          transition: 'all 0.5s',
          transform: pulse === 0 ? 'scale(1.02)' : 'scale(1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: `${C.indigo}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤝</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.indigo }}>Left Hand</div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Mainstream Business</div>
            </div>
          </div>
          <ul style={{ fontSize: 10, color: 'var(--text-primary)', paddingLeft: 14, margin: 0, lineHeight: 1.6 }}>
            <li>Mature market, known customers</li>
            <li>Efficiency, cost optimization</li>
            <li>Incremental innovation</li>
            <li>Predictable competition</li>
            <li>Metric: ROA</li>
          </ul>
        </div>

        <div style={{
          padding: 14, borderRadius: 8,
          border: `2px solid ${pulse === 1 ? C.teal : `${C.teal}50`}`,
          background: pulse === 1 ? `${C.teal}18` : `${C.teal}06`,
          transition: 'all 0.5s',
          transform: pulse === 1 ? 'scale(1.02)' : 'scale(1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: `${C.teal}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🚀</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.teal }}>Right Hand</div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Innovation Unit</div>
            </div>
          </div>
          <ul style={{ fontSize: 10, color: 'var(--text-primary)', paddingLeft: 14, margin: 0, lineHeight: 1.6 }}>
            <li>New market, uncertain</li>
            <li>Speed, flexibility</li>
            <li>Radical innovation</li>
            <li>Experimentation, MVP</li>
            <li>Metric: growth / first customer</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 10, padding: 10, borderRadius: 6, background: 'var(--bg-secondary)', textAlign: 'center', fontSize: 10, color: 'var(--text-primary)' }}>
        ↕ <strong style={{ color: C.indigo }}>Connected</strong> through shared capabilities and senior management, but <strong style={{ color: C.teal }}>operate independently</strong>
      </div>
    </div>
  )
}

// ----- 5-3b: Three Undermining Mechanisms -----
export function UnderminingMechanisms() {
  const mechanisms = [
    { icon: '💰', title: 'Resources', color: C.loss,
      detail: 'Voracious appetite + loss aversion + political power',
      example: 'HP portable scanner: senior exec allocated $10M, money flowed back to mainstream as soon as he left' },
    { icon: '⚠', title: 'Problem, not Solution', color: C.orange,
      detail: 'Cannibalization fear or perceived distraction',
      example: 'Mechanical calculator firms slow on electronics — electronics killed their core market' },
    { icon: '🔒', title: 'Inertia', color: C.purple,
      detail: 'Pulls new unit toward old metrics and culture',
      example: 'Constantly need to explain why mainstream\'s successful design does not fit the new context' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Three Ways Mainstream Undermines the New Business</p>
      <p style={subStyle}>This is why separation + senior management support are BOTH needed.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 10 }}>
        {mechanisms.map((m, i) => (
          <div key={i} style={{
            padding: 10, borderRadius: 8,
            border: `2px solid ${m.color}`,
            background: `${m.color}10`
          }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{m.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: m.color, marginBottom: 4 }}>{m.title}</div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', marginBottom: 6 }}>{m.detail}</div>
            <div style={{ fontSize: 8, padding: 6, borderRadius: 4, background: 'var(--bg-secondary)', borderLeft: `2px solid ${m.color}`, color: 'var(--text-sec)' }}>
              {m.example}
            </div>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 400 70" style={{ width: '100%', maxHeight: 70 }}>
        <defs>
          <marker id="arrowUnd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill={C.loss} />
          </marker>
        </defs>
        <rect x="20" y="15" width="120" height="30" rx="4" fill="var(--bg-secondary)" stroke={C.indigo} strokeWidth="2" />
        <text x="80" y="34" fontSize="11" fill="var(--text-primary)" textAnchor="middle" fontWeight="bold">Mainstream</text>
        <path d="M 145 30 L 255 30" stroke={C.loss} strokeWidth="2" markerEnd="url(#arrowUnd)" />
        <text x="200" y="22" fontSize="8" fill={C.loss} textAnchor="middle">undermines via 3 mechanisms</text>
        <rect x="260" y="15" width="120" height="30" rx="4" fill="var(--bg-secondary)" stroke={C.teal} strokeWidth="2" />
        <text x="320" y="34" fontSize="11" fill="var(--text-primary)" textAnchor="middle" fontWeight="bold">New Business</text>
      </svg>
    </div>
  )
}

// ----- 5-3c: Two Routes to Ambidexterity -----
export function TwoRoutesAmbidexterity() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Two Routes to Ambidexterity</p>
      <p style={subStyle}>BOTH are needed. Neither alone is enough.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <div style={{ padding: 12, borderRadius: 8, background: `${C.indigo}08`, border: `1px solid ${C.indigo}40` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.indigo, marginBottom: 6 }}>1. Separate Semi-Autonomous Unit</div>
          <ul style={{ fontSize: 10, color: 'var(--text-primary)', paddingLeft: 14, margin: 0, lineHeight: 1.5 }}>
            <li>Own resources, functions, culture</li>
            <li>Alignment tuned to new market</li>
            <li>Physical and organizational separation</li>
            <li>NOT heavyweight team, NOT cross-functional</li>
          </ul>
        </div>
        <div style={{ padding: 12, borderRadius: 8, background: `${C.teal}08`, border: `1px solid ${C.teal}40` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.teal, marginBottom: 6 }}>2. Extensive Senior Mgmt Support</div>
          <ul style={{ fontSize: 10, color: 'var(--text-primary)', paddingLeft: 14, margin: 0, lineHeight: 1.5 }}>
            <li>Disproportionate attention (even small unit)</li>
            <li>Political protection from mainstream</li>
            <li>Defends budget, integrates capabilities</li>
            <li>Top-level negotiations on resources</li>
          </ul>
        </div>
      </div>

      <div style={{ padding: 10, borderRadius: 6, background: 'var(--bg-secondary)' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Real-World Patterns:</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>
            <strong style={{ color: C.blue }}>IBM: </strong>Emerging Business Opportunities (EBOs) with own P&L, different metrics, embedded in corporate architecture
          </div>
          <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>
            <strong style={{ color: C.cyan }}>Cisco: </strong>Council Model — cross-cutting bodies coordinating related innovation efforts
          </div>
        </div>
      </div>
    </div>
  )
}

// ----- 5-4a: Loose-Tight Culture (Corning) -----
export function LooseTightCultureViz() {
  const units = [
    { name: 'Windows', era: 'Since 1900s', loose: 'Commercial/industrial building supply', color: C.orange },
    { name: 'CRT Tubes', era: '1940s-80s', loose: 'Mass manufacturing, OEM contracts with TV makers', color: C.loss },
    { name: 'Fiber Optic', era: '1970s-', loose: 'B2B, long sales cycle, high-tech, massive R&D', color: C.indigo },
    { name: 'Gorilla Glass', era: '2007-', loose: 'Premium OEM (Apple, Samsung), mobile pace', color: C.teal }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Loose-Tight Culture — Corning Glass Works (100+ years)</p>
      <p style={subStyle}>One TIGHT core + multiple LOOSE precepts = continuous ambidexterity</p>

      <div style={{
        padding: 12, borderRadius: 8, marginBottom: 10,
        background: `${C.indigo}15`, border: `2px solid ${C.indigo}60`
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.indigo, marginBottom: 4 }}>🔒 TIGHT (shared across the entire firm)</div>
        <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600 }}>"We are experts in everything related to glass"</div>
        <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 4 }}>This core has not changed in 100+ years</div>
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginBottom: 6 }}>📂 LOOSE (varies by unit with market needs):</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {units.map((u, i) => (
          <div key={i} style={{
            padding: 8, borderRadius: 6,
            borderLeft: `3px solid ${u.color}`,
            background: `${u.color}10`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
              <strong style={{ fontSize: 11, color: u.color }}>{u.name}</strong>
              <span style={{ fontSize: 8, color: 'var(--text-sec)' }}>{u.era}</span>
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>{u.loose}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', textAlign: 'center', fontSize: 9, color: 'var(--text-sec)', fontStyle: 'italic' }}>
        Each transition was a new mainstream; tight core stayed constant
      </div>
    </div>
  )
}

// ----- 5-5a: Three Leadership Approaches -----
export function LeadershipApproachesViz() {
  const [selected, setSelected] = useState(0)
  const approaches = [
    {
      title: 'Hub-and-Spoke', subtitle: 'Approach 1',
      verdict: '✓ Often works', color: C.teal,
      desc: 'Leader personally integrates mainstream and innovation units',
      pros: ['Each unit stays focused', 'Team not overloaded'],
      cons: ['Heavy load on leader', 'Limits scaling']
    },
    {
      title: 'Team-Based', subtitle: 'Approach 2',
      verdict: '✓ Works with strong team', color: C.indigo,
      desc: 'Senior team collectively coordinates interactions between units',
      pros: ['Scales complexity', 'More capacity'],
      cons: ['Requires strong teamwork', 'Top teams often bad at teamwork']
    },
    {
      title: 'Delegated', subtitle: 'Approach 3',
      verdict: '✗ Usually fails', color: C.loss,
      desc: '"I trust my team, let them handle integration themselves"',
      pros: ['Sounds attractive'],
      cons: ['Defeats separation purpose', 'Returns integration work to units meant to focus', 'Usually fails']
    }
  ]
  const a = approaches[selected]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Three Approaches: Who Integrates the Differences?</p>
      <p style={subStyle}>Choose Approach 1 or 2 deliberately, not by default.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
        {approaches.map((ap, i) => (
          <button key={i} onClick={() => setSelected(i)}
            style={{
              padding: 8, borderRadius: 6, textAlign: 'left', cursor: 'pointer',
              border: `2px solid ${ap.color}`,
              background: selected === i ? `${ap.color}20` : 'transparent',
              opacity: selected === i ? 1 : 0.6,
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>{ap.subtitle}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)', marginTop: 2 }}>{ap.title}</div>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 10 }}>
        <svg viewBox="0 0 120 120" style={{ width: '100%' }}>
          {selected === 0 && (
            <>
              <circle cx="60" cy="60" r="15" fill={C.teal} />
              <text x="60" y="64" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">Leader</text>
              {[0, 60, 120, 180, 240, 300].map((ang, i) => {
                const rad = (ang * Math.PI) / 180
                const x = 60 + Math.cos(rad) * 45
                const y = 60 + Math.sin(rad) * 45
                return (
                  <g key={i}>
                    <line x1="60" y1="60" x2={x} y2={y} stroke={C.teal} strokeWidth="1.5" opacity="0.6" />
                    <circle cx={x} cy={y} r="7" fill={C.indigo} opacity="0.7" />
                  </g>
                )
              })}
            </>
          )}
          {selected === 1 && (
            <>
              {[30, 90, 150, 210, 270, 330].map((ang, i) => {
                const rad = (ang * Math.PI) / 180
                const x = 60 + Math.cos(rad) * 38
                const y = 60 + Math.sin(rad) * 38
                return <circle key={i} cx={x} cy={y} r="8" fill={C.indigo} opacity="0.7" />
              })}
              {[30, 90, 150, 210, 270, 330].flatMap((a1, i) =>
                [30, 90, 150, 210, 270, 330].slice(i + 1).map((a2, j) => {
                  const r1 = (a1 * Math.PI) / 180, r2 = (a2 * Math.PI) / 180
                  const x1 = 60 + Math.cos(r1) * 38, y1 = 60 + Math.sin(r1) * 38
                  const x2 = 60 + Math.cos(r2) * 38, y2 = 60 + Math.sin(r2) * 38
                  return <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.indigo} strokeWidth="0.7" opacity="0.35" />
                })
              )}
            </>
          )}
          {selected === 2 && (
            <>
              <circle cx="60" cy="20" r="12" fill={C.loss} opacity="0.7" />
              <text x="60" y="24" fontSize="7" fill="white" textAnchor="middle">Leader</text>
              {[35, 60, 85].map((x, i) => (
                <g key={i}>
                  <line x1="60" y1="32" x2={x} y2="70" stroke={C.loss} strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
                  <circle cx={x} cy={80} r="8" fill={C.loss} opacity="0.5" />
                </g>
              ))}
              <text x="60" y="110" fontSize="11" fill={C.loss} textAnchor="middle" fontWeight="700">✗ fails</text>
            </>
          )}
        </svg>

        <div>
          <div style={{ padding: 8, borderRadius: 6, borderLeft: `3px solid ${a.color}`, background: `${a.color}12`, marginBottom: 6 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: a.color }}>{a.verdict}</div>
            <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 3 }}>{a.desc}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <div style={{ padding: 6, borderRadius: 4, background: `${C.gain}12`, border: `1px solid ${C.gain}30` }}>
              <div style={{ fontSize: 8, color: C.gain, fontWeight: 700, marginBottom: 3 }}>✓ Pros</div>
              <ul style={{ fontSize: 9, paddingLeft: 12, margin: 0, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                {a.pros.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div style={{ padding: 6, borderRadius: 4, background: `${C.loss}12`, border: `1px solid ${C.loss}30` }}>
              <div style={{ fontSize: 8, color: C.loss, fontWeight: 700, marginBottom: 3 }}>✗ Cons</div>
              <ul style={{ fontSize: 9, paddingLeft: 12, margin: 0, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                {a.cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ----- 5-5b: Four Directions of Leadership -----
export function FourDirectionsViz() {
  const directions = [
    { num: 1, title: 'Engage', subtitle: 'intent & identity', color: C.indigo,
      detail: 'Create opportunities to discuss strategic intent. Do not announce — build together. More buy-in, less undermining.' },
    { num: 2, title: 'Resolve', subtitle: 'tensions & conflict', color: C.orange,
      detail: 'Create arenas (meetings, forums) where resource and policy conflicts surface and get resolved. Do not expect self-resolution.' },
    { num: 3, title: 'Act Inconsistent', subtitle: 'deliberately', color: C.loss,
      detail: 'Different units → different metrics. ROA for mainstream, growth for innovation. Reject the symmetry norm.' },
    { num: 4, title: 'Build in Time', subtitle: 'and places', color: C.teal,
      detail: 'Ambidexterity needs time. Without reallocating it, the whole system stays a slogan.' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Four Directions of Leadership Action</p>
      <p style={subStyle}>These are <em>directions</em>, not recipes. How you spend your attention and time.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {directions.map(d => (
          <div key={d.num} style={{
            padding: 10, borderRadius: 8,
            borderTop: `3px solid ${d.color}`,
            background: 'var(--bg-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{
                width: 22, height: 22, borderRadius: 6,
                background: `${d.color}25`, color: d.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700
              }}>#{d.num}</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: d.color }}>{d.title}</div>
                <div style={{ fontSize: 9, color: 'var(--text-sec)', fontStyle: 'italic' }}>{d.subtitle}</div>
              </div>
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)', lineHeight: 1.5 }}>{d.detail}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 5-6: Module 5 Concept Map -----
export function Module5ConceptMap() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 5: Logical Chain</p>
      <p style={subStyle}>Environment → Organization → Structural answer → Software → Leadership practice</p>

      <svg viewBox="0 0 680 380" style={{ width: '100%' }}>
        <defs>
          <marker id="arrCM" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>

        {/* Horizontal chain: 5-1, 5-2, 5-3, 5-4 */}
        {[
          { x: 80, y: 70, num: '5-1', label: 'Uncertainty\n+ Dynamism', color: C.orange },
          { x: 240, y: 70, num: '5-2', label: 'Alignment\n+ Inertia', color: C.loss },
          { x: 400, y: 70, num: '5-3', label: 'Ambidextrous\nArchitecture', color: C.purple },
          { x: 560, y: 70, num: '5-4', label: 'Software:\nIntent + Culture', color: C.indigo }
        ].map((n, i, arr) => (
          <g key={n.num}>
            <circle cx={n.x} cy={n.y} r="30" fill={n.color} opacity="0.85" />
            <text x={n.x} y={n.y + 4} fontSize="13" fill="white" fontWeight="bold" textAnchor="middle">{n.num}</text>
            {n.label.split('\n').map((line, j) => (
              <text key={j} x={n.x} y={n.y + 54 + j * 13} fontSize="10" fill="var(--text-primary)" textAnchor="middle">{line}</text>
            ))}
            {i < arr.length - 1 && (
              <line x1={n.x + 30} y1={n.y} x2={arr[i + 1].x - 30} y2={arr[i + 1].y}
                stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrCM)" />
            )}
          </g>
        ))}

        {/* 5-5 node centered, arrows from all */}
        <circle cx="340" cy="260" r="40" fill={C.teal} opacity="0.9" />
        <text x="340" y="265" fontSize="15" fill="white" fontWeight="bold" textAnchor="middle">5-5</text>
        <text x="340" y="320" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Leadership Practice:</text>
        <text x="340" y="335" fontSize="10" fill="var(--text-primary)" textAnchor="middle">3 approaches + 4 directions</text>

        <path d="M 560 100 Q 480 180 385 240" stroke={C.teal} strokeWidth="2" fill="none" markerEnd="url(#arrCM)" />
        <path d="M 400 100 Q 380 180 340 220" stroke={C.teal} strokeWidth="2" fill="none" markerEnd="url(#arrCM)" />

        <text x="340" y="365" fontSize="10" fontStyle="italic" fill="var(--text-sec)" textAnchor="middle">
          Each lesson answers what the previous raised
        </text>
      </svg>
    </div>
  )
}


