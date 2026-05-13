import { useState, useMemo, Fragment } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Legend, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart, Area, AreaChart,
  ScatterChart, Scatter, ZAxis
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 8: Planning, Evaluation & Innovation Across Firm Boundaries
// =========================================================================

// ----- 8-overview: Logical chain map -----
export function Module8Overview() {
  const nodes = [
    { num: '8-1', label: 'Planning\n(learning)', color: C.indigo, x: 80 },
    { num: '8-2', label: 'Evaluation\n(bias + accountability)', color: C.loss, x: 230 },
    { num: '8-3', label: 'Boundaries\n(virtual vs integrated)', color: C.purple, x: 400 },
    { num: '8-4', label: 'Alliances\n& JV advice', color: C.teal, x: 555 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 8 Logical Chain</p>
      <p style={subStyle}>Planning → Evaluation → Boundaries → Practical advice — завершает execution side of innovation</p>
      <svg viewBox="0 0 640 180" style={{ width: '100%' }}>
        <defs>
          <marker id="arrM8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
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
                stroke="var(--text-sec)" strokeWidth="2" markerEnd="url(#arrM8)" />
            )}
          </g>
        ))}
        <text x="320" y="170" fontSize="10" fontStyle="italic" fill="var(--text-sec)" textAnchor="middle">
          Govindarajan &amp; Trimble (Planning + Evaluation) + Chesbrough (Open Innovation) = execution side
        </text>
      </svg>

      <div style={{ marginTop: 12, padding: 10, borderRadius: 6, background: 'var(--bg-secondary)' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
          4 функции менеджмента (Jones &amp; George)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {[
            { fn: 'PLANNING', color: C.gain, mod: 'Module 8' },
            { fn: 'ORGANIZING', color: C.amber, mod: 'Modules 5-7' },
            { fn: 'LEADING', color: C.blue, mod: 'Modules 5-7' },
            { fn: 'CONTROLLING', color: C.purple, mod: 'Module 8 (Evaluation)' }
          ].map(f => (
            <div key={f.fn} style={{ padding: 6, borderRadius: 4, borderLeft: `3px solid ${f.color}`, background: `${f.color}10` }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: f.color }}>{f.fn}</div>
              <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>{f.mod}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ----- 8-1: S-curve planning context (front vs back half) -----
export function SCurvePlanningContext() {
  const data = Array.from({ length: 50 }, (_, i) => {
    const t = i / 49
    const y = 100 / (1 + Math.exp(-12 * (t - 0.5)))
    return { time: i, performance: y }
  })
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>S-curve: Front Half vs Back Half — где challenging innovation</p>
      <p style={subStyle}>Challenging innovations происходят преимущественно в передней половине жизненного цикла (Era of Ferment + Substitution). Planning должно быть переориентировано.</p>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10, fill: 'var(--text-sec)' }} label={{ value: 'Time', position: 'insideBottom', offset: -5, fontSize: 11, fill: 'var(--text-sec)' }} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-sec)' }} label={{ value: 'Technical Performance', angle: -90, position: 'insideLeft', fontSize: 11, fill: 'var(--text-sec)' }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="performance" stroke={C.indigo} strokeWidth={3} fill={`${C.indigo}30`} dot={false} />
          <ReferenceLine x={25} stroke={C.orange} strokeWidth={2} strokeDasharray="6 3" label={{ value: 'Dominant Design', position: 'top', fontSize: 10, fill: C.orange }} />
        </ComposedChart>
      </ResponsiveContainer>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.loss}`, background: `${C.loss}10` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.loss, marginBottom: 4 }}>← FRONT HALF (Era of Ferment)</div>
          <div style={{ fontSize: 9, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            Много экспериментов, мало истории, много неизвестных.<br />
            <strong>Win:</strong> быть лучшим/быстрейшим в LEARNING.<br />
            <strong>Planning:</strong> experimentation + learning orientation.
          </div>
        </div>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.gain}`, background: `${C.gain}10` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.gain, marginBottom: 4 }}>BACK HALF (Incremental) →</div>
          <div style={{ fontSize: 9, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            Data + experience. Process improvements, market segmentation, cost leadership.<br />
            <strong>Win:</strong> efficiency, scale.<br />
            <strong>Planning:</strong> traditional results-oriented works.
          </div>
        </div>
      </div>
    </div>
  )
}

// ----- 8-1: Learning challenges -----
export function LearningChallenges() {
  const [sel, setSel] = useState(0)
  const challenges = [
    {
      name: 'Challenge 1: Complex Situations',
      color: C.indigo,
      good: ['Cause-and-effect видимы', 'Actions ведут к outcomes', 'Быстрая, ясная обратная связь', 'Пример: видеоигры, AB-testing'],
      bad: ['Feedback неполный', 'Feedback отложенный', 'Feedback неоднозначный', 'Связи проявляются после больших инвестиций'],
      key: 'Sustained & disciplined attention required. People subject to biases that push out learning.'
    },
    {
      name: 'Challenge 2: «Squishy» Goal',
      color: C.purple,
      good: ['Менеджеры привыкли ценить RESULTS', 'Planning systems built для produce results', 'Targets clear, motivating', 'Established operations work well'],
      bad: ['Learning seen как «squishy»', 'Не получат satisfaction от «we learned a lot»', 'Boundary с established operations нечёткая', 'Executives anxious about учёт'],
      key: 'Make learning COMPELLING + part of planning process.'
    }
  ]
  const c = challenges[sel]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Два вызова Learning в Organizations</p>
      <p style={subStyle}>Govindarajan &amp; Trimble: два глубоких challenges, которые нужно преодолеть</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
        {challenges.map((ch, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer',
              border: `2px solid ${ch.color}`,
              background: sel === i ? `${ch.color}25` : `${ch.color}08`,
              opacity: sel === i ? 1 : 0.7,
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: ch.color }}>{ch.name}</div>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.gain}`, background: `${C.gain}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.gain, marginBottom: 4 }}>+ Когда учимся ХОРОШО</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, lineHeight: 1.5, color: 'var(--text-primary)' }}>
            {c.good.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </div>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.loss}`, background: `${C.loss}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.loss, marginBottom: 4 }}>− Когда учимся ПЛОХО</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, lineHeight: 1.5, color: 'var(--text-primary)' }}>
            {c.bad.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 8, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', borderLeft: `3px solid ${c.color}` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: c.color }}>KEY INSIGHT</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 4 }}>{c.key}</div>
      </div>
    </div>
  )
}

// ----- 8-1: Learning vs Results-oriented firm -----
export function LearningVsResultsFirm() {
  const rows = [
    { lo: 'Prompts re-examining ASSUMPTIONS', ro: 'Appears as a FAILURE' },
    { lo: 'Revise future predictions based on NEW DATA', ro: 'Lowering targets is FROWNED UPON' },
    { lo: 'Perhaps this is NOT an attractive opportunity', ro: 'Leader presents ways to «RECOVER» the plan' },
    { lo: 'Embrace «FAIL-FAST» ethos if opportunity not attractive', ro: 'Pressure to go HARDER in same direction' }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Learning-oriented vs Results-oriented Firm</p>
      <p style={subStyle}>Когда results below target — как реагирует каждая firma?</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 6 }}>
        <div style={{ padding: 8, borderRadius: 6, background: `${C.gain}20`, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.gain }}>LEARNING-oriented firm</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Results below target</div>
        </div>
        <div style={{ padding: 8, borderRadius: 6, background: `${C.loss}20`, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.loss }}>RESULTS-oriented firm</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Results below target</div>
        </div>
      </div>

      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 6 }}>
          <div style={{ padding: 8, borderRadius: 4, borderLeft: `3px solid ${C.gain}`, background: `${C.gain}08`, fontSize: 9, color: 'var(--text-primary)' }}>
            ✓ {r.lo}
          </div>
          <div style={{ padding: 8, borderRadius: 4, borderLeft: `3px solid ${C.loss}`, background: `${C.loss}08`, fontSize: 9, color: 'var(--text-primary)' }}>
            ✗ {r.ro}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 10, padding: 12, borderRadius: 8, background: `${C.gain}15`, borderLeft: `4px solid ${C.gain}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.gain }}>
          The FIRM that LEARNS the FASTEST will WIN
        </div>
        <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 4 }}>
          in challenging innovation situations
        </div>
      </div>
    </div>
  )
}

// ----- 8-1: Prediction vs Time & Learning -----
export function PredictionLearningCurve() {
  const data = Array.from({ length: 50 }, (_, i) => {
    const t = i / 49
    const center = 50
    const halfWidth = 45 * Math.exp(-2.5 * t) + 5
    return { time: i, upper: center + halfWidth, lower: center - halfWidth, center }
  })
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Prediction vs Time &amp; Learning</p>
      <p style={subStyle}>Цель planning — сделать predictions ЛУЧШЕ. От wild guesses к reliable forecasts.</p>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10, fill: 'var(--text-sec)' }}
            label={{ value: 'Time & Learning →', position: 'insideBottom', offset: -5, fontSize: 11, fill: 'var(--text-sec)' }} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-sec)' }} domain={[0, 100]}
            label={{ value: 'Prediction Range', angle: -90, position: 'insideLeft', fontSize: 11, fill: 'var(--text-sec)' }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="upper" stroke={C.purple} strokeWidth={2} strokeDasharray="5 3" fill={`${C.purple}15`} dot={false} />
          <Area type="monotone" dataKey="lower" stroke={C.purple} strokeWidth={2} strokeDasharray="5 3" fill="transparent" dot={false} />
          <Line type="monotone" dataKey="center" stroke={C.orange} strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginTop: 8 }}>
        <div style={{ padding: 8, borderRadius: 6, borderLeft: `3px solid ${C.loss}`, background: `${C.loss}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.loss }}>← Wild Guesses</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>Широкий разброс. Грубые догадки о рынке, цене, усилии.</div>
        </div>
        <div style={{ padding: 8, borderRadius: 6, borderLeft: `3px solid ${C.amber}`, background: `${C.amber}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.amber }}>Informed Estimates</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>Разброс сократился. Обоснованные оценки.</div>
        </div>
        <div style={{ padding: 8, borderRadius: 6, borderLeft: `3px solid ${C.gain}`, background: `${C.gain}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.gain }}>Reliable Forecasts →</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>Узкий разброс. Надёжные прогнозы. Outcome of learning.</div>
        </div>
      </div>
    </div>
  )
}

// ----- 8-1: Cause-effect mapping -----
export function CauseEffectMapping() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Cause-and-Effect Mapping</p>
      <p style={subStyle}>Free-form diagram (не spreadsheet) — центральный артефакт custom plan</p>
      <svg viewBox="0 0 600 320" style={{ width: '100%' }}>
        <defs>
          <marker id="arrCE" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill={C.indigo} />
          </marker>
          <marker id="arrCE2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill={C.orange} />
          </marker>
        </defs>

        {/* Action A */}
        <circle cx="80" cy="240" r="36" fill={C.blue} opacity="0.85" />
        <text x="80" y="238" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">A</text>
        <text x="80" y="252" fontSize="9" fill="white" textAnchor="middle">Action</text>
        <text x="80" y="298" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Advertising</text>
        <text x="80" y="310" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Spending</text>

        {/* Outcome B */}
        <circle cx="230" cy="160" r="36" fill={C.purple} opacity="0.85" />
        <text x="230" y="158" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">B</text>
        <text x="230" y="172" fontSize="9" fill="white" textAnchor="middle">Outcome</text>
        <text x="230" y="218" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Trial use</text>

        {/* Subsequent C */}
        <circle cx="430" cy="80" r="36" fill={C.gain} opacity="0.85" />
        <text x="430" y="78" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">C</text>
        <text x="430" y="92" fontSize="9" fill="white" textAnchor="middle">Subsequent</text>
        <text x="430" y="138" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Sales</text>

        {/* Dependency D */}
        <circle cx="430" cy="240" r="36" fill={C.orange} opacity="0.85" />
        <text x="430" y="238" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">D</text>
        <text x="430" y="252" fontSize="9" fill="white" textAnchor="middle">Dependency</text>
        <text x="430" y="298" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Product</text>
        <text x="430" y="310" fontSize="10" fill="var(--text-primary)" textAnchor="middle">quality</text>

        {/* Arrows */}
        <line x1="115" y1="220" x2="200" y2="180" stroke={C.indigo} strokeWidth="2.5" markerEnd="url(#arrCE)" />
        <line x1="265" y1="140" x2="400" y2="90" stroke={C.indigo} strokeWidth="2.5" markerEnd="url(#arrCE)" />
        <line x1="430" y1="205" x2="430" y2="120" stroke={C.orange} strokeWidth="2.5" markerEnd="url(#arrCE2)" strokeDasharray="6 3" />

        {/* Labels on edges */}
        <text x="150" y="195" fontSize="9" fill="var(--text-sec)" fontStyle="italic">advertises →</text>
        <text x="320" y="100" fontSize="9" fill="var(--text-sec)" fontStyle="italic">leads to →</text>
        <text x="440" y="170" fontSize="9" fill="var(--text-sec)" fontStyle="italic" textAnchor="start">affects ↑</text>
      </svg>

      <div style={{ marginTop: 8, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
          Преимущества cause-effect diagram:
        </div>
        <ul style={{ fontSize: 9, paddingLeft: 16, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          <li>Identifies + communicates ключевые связи между actions и outcomes</li>
          <li>Characterizes сделанные допущения</li>
          <li>Creates record понимания бизнеса; evolves со временем</li>
          <li>Помогает identify critical unknowns to test</li>
          <li>NOT spreadsheet — это для DISCUSSIONS о том, как бизнес работает</li>
        </ul>
      </div>
    </div>
  )
}

// ----- 8-1: Critical Unknowns Matrix 3x3 -----
export function CriticalUnknownsMatrix() {
  const [hover, setHover] = useState(null)
  const cells = [
    // Row 0 (top: Severe)
    { row: 0, col: 0, sev: 'Severe', cert: 'Certain', label: '', color: C.amber },
    { row: 0, col: 1, sev: 'Severe', cert: 'Educated', label: '', color: C.orange },
    { row: 0, col: 2, sev: 'Severe', cert: 'Wild Guess', label: 'MOST\nCRITICAL\nUNKNOWNS', color: C.loss, mcu: true },
    // Row 1 (middle: Moderate)
    { row: 1, col: 0, sev: 'Moderate', cert: 'Certain', label: '', color: C.gain },
    { row: 1, col: 1, sev: 'Moderate', cert: 'Educated', label: '', color: C.amber },
    { row: 1, col: 2, sev: 'Moderate', cert: 'Wild Guess', label: '', color: C.orange },
    // Row 2 (bottom: Minor)
    { row: 2, col: 0, sev: 'Minor', cert: 'Certain', label: 'LEAST\nCRITICAL\nUNKNOWNS', color: C.gain, lcu: true },
    { row: 2, col: 1, sev: 'Minor', cert: 'Educated', label: '', color: C.gain },
    { row: 2, col: 2, sev: 'Minor', cert: 'Wild Guess', label: '', color: C.amber }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Critical Unknowns Matrix (3×3)</p>
      <p style={subStyle}>Где сосредоточить experiments? Severity × Certainty. MCU (top-right) = priorities.</p>

      <svg viewBox="0 0 500 380" style={{ width: '100%' }}>
        {/* Y axis label */}
        <text x="20" y="200" fontSize="11" fill="var(--text-sec)" textAnchor="middle" transform="rotate(-90 20 200)" fontWeight="bold">
          CONSEQUENCES FOR BEING WRONG
        </text>
        {/* X axis label */}
        <text x="280" y="370" fontSize="11" fill="var(--text-sec)" textAnchor="middle" fontWeight="bold">
          LEVEL OF CERTAINTY
        </text>

        {/* Y axis severity labels */}
        <text x="60" y="80" fontSize="10" fill="var(--text-primary)" textAnchor="end">Severe</text>
        <text x="60" y="180" fontSize="10" fill="var(--text-primary)" textAnchor="end">Moderate</text>
        <text x="60" y="280" fontSize="10" fill="var(--text-primary)" textAnchor="end">Minor</text>

        {/* X axis certainty labels */}
        <text x="135" y="345" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Certain</text>
        <text x="265" y="345" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Educated Guess</text>
        <text x="395" y="345" fontSize="10" fill="var(--text-primary)" textAnchor="middle">Wild Guess</text>

        {cells.map(c => {
          const x = 75 + c.col * 130
          const y = 35 + c.row * 100
          const isHover = hover && hover.row === c.row && hover.col === c.col
          return (
            <g key={`${c.row}-${c.col}`} onMouseEnter={() => setHover(c)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }}>
              <rect x={x} y={y} width="120" height="90" fill={c.color} opacity={isHover ? 0.95 : 0.5} stroke="white" strokeWidth="2" rx="4" />
              {c.label && c.label.split('\n').map((line, i) => (
                <text key={i} x={x + 60} y={y + 30 + i * 16} fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">{line}</text>
              ))}
            </g>
          )
        })}

        {/* Arrow from LCU to MCU */}
        <defs>
          <marker id="arrCUM" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="white" />
          </marker>
        </defs>
        <line x1="135" y1="280" x2="395" y2="65" stroke="white" strokeWidth="3" markerEnd="url(#arrCUM)" opacity="0.9" />
      </svg>

      {hover && (
        <div style={{ marginTop: 8, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', borderLeft: `3px solid ${hover.color}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: hover.color }}>
            {hover.sev} + {hover.cert}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 4 }}>
            {hover.mcu ? '🎯 PRIORITY for experiments — make-or-break unknown' :
             hover.lcu ? 'Не приоритет — тратить ресурсы расточительно' :
             'Intermediate — учитывать, но не приоритет'}
          </div>
        </div>
      )}

      <p style={{ marginTop: 8, fontSize: 9, color: 'var(--text-sec)', textAlign: 'center', fontStyle: 'italic' }}>
        Наведите мышь на клетку — увидите её роль в приоритезации experiments
      </p>
    </div>
  )
}

// ----- 8-1: Planning process cycle -----
export function PlanningProcessCycle() {
  const recs = [
    { num: 1, t: 'Iterate fast', desc: 'Experiment, learn, adjust at fast pace' },
    { num: 2, t: 'Fast review cycle', desc: 'Meet более frequently чем для established' },
    { num: 3, t: 'Separate planning forums', desc: 'Tempo + orientation отличаются' },
    { num: 4, t: 'Data AND assumptions', desc: 'Обсуждать оба, не только data' },
    { num: 5, t: 'Trends + revise predictions', desc: 'Focus on trends; okay revise' },
    { num: 6, t: 'Formal model revisions', desc: 'Через formal process, not random' },
    { num: 7, t: 'Model = central anchor', desc: 'Cause-effect как якорь planning' }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>7 рекомендаций Planning Over Time</p>
      <p style={subStyle}>Govindarajan &amp; Trimble: planning process для innovation initiatives</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 8 }}>
        {recs.map(r => (
          <div key={r.num} style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.indigo}`, background: 'var(--bg-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', background: C.indigo, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700
              }}>{r.num}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)' }}>{r.t}</div>
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', lineHeight: 1.4 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 8-2: Why falling short — two categories -----
export function WhyFallingShort() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Why Are We Falling Short? — две категории объяснений</p>
      <p style={subStyle}>Обе должны рассматриваться DISPASSIONATELY. Implications разные.</p>

      <svg viewBox="0 0 600 280" style={{ width: '100%' }}>
        <defs>
          <marker id="arrShort1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill={C.loss} />
          </marker>
          <marker id="arrShort2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill={C.gain} />
          </marker>
        </defs>

        {/* Central question */}
        <ellipse cx="100" cy="140" rx="80" ry="50" fill={C.purple} opacity="0.85" />
        <text x="100" y="135" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">Why are we</text>
        <text x="100" y="148" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">falling short?</text>

        {/* Category 1: top */}
        <line x1="180" y1="110" x2="290" y2="60" stroke={C.loss} strokeWidth="3" markerEnd="url(#arrShort1)" />
        <rect x="290" y="35" width="160" height="50" fill={`${C.loss}30`} stroke={C.loss} strokeWidth="2" rx="6" />
        <text x="370" y="55" fontSize="11" fill="var(--text-primary)" fontWeight="bold" textAnchor="middle">Outcomes too low?</text>
        <text x="370" y="72" fontSize="10" fill="var(--text-sec)" textAnchor="middle">(execution problem)</text>

        <line x1="450" y1="60" x2="510" y2="60" stroke={C.loss} strokeWidth="2.5" markerEnd="url(#arrShort1)" />
        <rect x="510" y="40" width="80" height="40" fill={C.loss} opacity="0.7" rx="6" />
        <text x="550" y="55" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">Poor</text>
        <text x="550" y="70" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">execution</text>

        {/* Category 2: bottom */}
        <line x1="180" y1="170" x2="290" y2="220" stroke={C.gain} strokeWidth="3" markerEnd="url(#arrShort2)" />
        <rect x="290" y="195" width="160" height="50" fill={`${C.gain}30`} stroke={C.gain} strokeWidth="2" rx="6" />
        <text x="370" y="215" fontSize="11" fill="var(--text-primary)" fontWeight="bold" textAnchor="middle">Predictions too high?</text>
        <text x="370" y="232" fontSize="10" fill="var(--text-sec)" textAnchor="middle">(learning opportunity)</text>

        <line x1="450" y1="220" x2="510" y2="220" stroke={C.gain} strokeWidth="2.5" markerEnd="url(#arrShort2)" />
        <rect x="510" y="200" width="80" height="40" fill={C.gain} opacity="0.7" rx="6" />
        <text x="550" y="215" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">Poor</text>
        <text x="550" y="230" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">assumptions</text>
      </svg>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.loss}`, background: `${C.loss}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.loss, marginBottom: 4 }}>If Poor Execution</div>
          <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>OUR problem. Work harder. Prediction был okay; мы сделали wrong.</div>
        </div>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.gain}`, background: `${C.gain}10` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.gain, marginBottom: 4 }}>If Poor Assumptions</div>
          <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>Prediction wrong; reality другая. Bring prediction в line. WE LEARNED.</div>
        </div>
      </div>
    </div>
  )
}

// ----- 8-2: Bias impact -----
export function BiasImpact() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Bias Toward Poor Execution — Most Dangerous Enemy</p>
      <p style={subStyle}>Govindarajan &amp; Trimble: «Most omnipresent and dangerous enemy of innovation»</p>

      <div style={{ padding: 12, borderRadius: 8, background: `${C.loss}15`, borderLeft: `4px solid ${C.loss}`, marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.loss, marginBottom: 6 }}>
          🚨 The Bias: Dartmouth research finding
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          Companies в challenging innovation situations <strong>significantly more likely</strong> делать вывод, что shortfall — результат собственного <strong>poor execution</strong> (а не poor assumptions).
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ padding: 10, borderRadius: 6, background: 'var(--bg-secondary)', borderLeft: `3px solid ${C.amber}` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.amber, marginBottom: 4 }}>🧠 Source 1: Performance Culture</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.4 }}>
            <li>Managers judged relative to outcomes</li>
            <li>Revising forecasts down = defeat</li>
            <li>Functional для established ops</li>
            <li>НЕ functional для innovation</li>
          </ul>
        </div>
        <div style={{ padding: 10, borderRadius: 6, background: 'var(--bg-secondary)', borderLeft: `3px solid ${C.orange}` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.orange, marginBottom: 4 }}>🧠 Source 2: Threat Rigidity</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.4 }}>
            <li>Psychological response к threat</li>
            <li>Focus на execution mode</li>
            <li>А не на learning mode</li>
            <li>Fundamental human bias</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 10, padding: 10, borderRadius: 6, background: `${C.loss}10`, borderLeft: `3px solid ${C.loss}` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.loss, marginBottom: 4 }}>💥 Why Devastating for Learning</div>
        <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          <li>Makes it harder для firm to LEARN + adjust to reality</li>
          <li>Bias becomes simply «working HARDER» but в SAME direction</li>
          <li>Surprise over-attributed к failed execution</li>
          <li>Miss chance to get closer to the TRUTH</li>
          <li>Can't improve predictions, identify critical unknowns</li>
        </ul>
      </div>

      <div style={{ marginTop: 10, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', textAlign: 'center', fontSize: 10, color: 'var(--text-sec)', fontStyle: 'italic' }}>
        Example case: <strong style={{ color: 'var(--text-primary)' }}>General Electric</strong> — famous «culture of meeting commitments».
        Bias deeply embedded в how managers think.
      </div>
    </div>
  )
}

// ----- 8-2: Accountability shift -----
export function AccountabilityShift() {
  const [sel, setSel] = useState(2)
  const responses = [
    {
      num: 1, name: 'Throw away the plan', color: C.loss,
      desc: 'Agree the plan wasn\'t consistent. Assume innovation can\'t be managed. Hard to hold accountable.',
      verdict: 'BAD — undercuts ability to build rigorous learning process'
    },
    {
      num: 2, name: 'Not push aggressive plans', color: C.amber,
      desc: 'Don\'t push aggressive plans in established style. People optimistic anyway. Cut bias off at pass.',
      verdict: 'OK but incremental — не addresses core problem'
    },
    {
      num: 3, name: 'Accountability for LEARNING', color: C.gain,
      desc: 'CAN hold accountable — accountable FOR LEARNING, не outcomes. Question: «Did you follow rigorous learning process?»',
      verdict: 'RECOMMENDED — moves focus к learning, still allows accountability'
    }
  ]
  const r = responses[sel]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>3 Responses to Bias — Который выбрать?</p>
      <p style={subStyle}>Govindarajan &amp; Trimble оценивают три common responses на bias toward poor execution</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
        {responses.map((resp, i) => (
          <button key={resp.num} onClick={() => setSel(i)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer', textAlign: 'left',
              border: `2px solid ${resp.color}`,
              background: sel === i ? `${resp.color}25` : `${resp.color}08`,
              opacity: sel === i ? 1 : 0.7,
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: resp.color, marginBottom: 2 }}>
              Response {resp.num}
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-primary)' }}>{resp.name}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 12, borderRadius: 8, borderLeft: `4px solid ${r.color}`, background: `${r.color}10` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: r.color, marginBottom: 6 }}>
          Response {r.num}: {r.name}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.5 }}>
          {r.desc}
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: r.color }}>
          Verdict: {r.verdict}
        </div>
      </div>
    </div>
  )
}

// ----- 8-2: 4 accountability questions -----
export function AccountabilityQuestions() {
  const qs = [
    { num: 1, q: 'Did the LEADER take planning seriously — rather than disengaging from the plan?',
      cue: 'Plan as baseline', color: C.indigo },
    { num: 2, q: 'Did the leader maintain & update a CAUSE-AND-EFFECT MODEL through an evidence-based process?',
      cue: 'Evidence-based updates', color: C.blue },
    { num: 3, q: 'Did PREDICTIONS GET BETTER, especially for critical unknowns?',
      cue: 'Predictions improve', color: C.purple },
    { num: 4, q: 'Did leader make sure TEAM understood model & critical unknowns, reacted to new info promptly, maintained learning mindset?',
      cue: 'Team learning mindset', color: C.teal }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>4 Questions of Accountability for LEARNING</p>
      <p style={subStyle}>Alternative system of valuation. Адресует bias. Сохраняет accountability.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {qs.map(q => (
          <div key={q.num} style={{ padding: 12, borderRadius: 8, borderLeft: `4px solid ${q.color}`, background: 'var(--bg-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', background: q.color, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700
              }}>{q.num}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: q.color }}>{q.cue}</div>
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>{q.q}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, padding: 10, borderRadius: 6, background: `${C.gain}15`, borderLeft: `3px solid ${C.gain}`, textAlign: 'center', fontSize: 11, fontWeight: 700, color: C.gain }}>
        Master question: «Did you follow a RIGOROUS learning process?»
      </div>
    </div>
  )
}

// ----- 8-3: Partnership types -----
export function PartnershipTypes() {
  const [sel, setSel] = useState(0)
  const types = [
    {
      name: 'Joint Ventures & Alliances', color: C.indigo,
      desc: 'Firms agree to cooperate through SHARING SPECIFIC RESOURCES + setting up some type of SEPARATE ORGANIZATION. JV: shared equity.',
      features: ['Sharing specific resources', 'Separate organization', 'JV: shared equity', 'Менее formal: alliance']
    },
    {
      name: 'Contractual Agreements', color: C.purple,
      desc: 'Other firms act as SUPPLIERS, но supplier and buyer firms WORK TOGETHER CLOSELY to develop new products/services. Глубже стандартного.',
      features: ['Supplier acts closely with buyer', 'Joint development', 'Capitalize joint capabilities', 'Deeper than standard supplier']
    },
    {
      name: 'Virtual Approaches', color: C.teal,
      desc: 'Innovation through BUILDING A VIRTUAL FIRM. Independent firms act as a COHERENT SYSTEM — innovation system in this case.',
      features: ['Network of independent firms', 'Coherent system / ecosystem', 'Innovation as system', 'Open innovation (Chesbrough)']
    }
  ]
  const t = types[sel]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>3 Виды партнёрств Across Firm Boundaries</p>
      <p style={subStyle}>Все можно объединить под Virtual Approaches to Organizing</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
        {types.map((typ, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer',
              border: `2px solid ${typ.color}`,
              background: sel === i ? `${typ.color}25` : `${typ.color}08`,
              opacity: sel === i ? 1 : 0.7
            }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: typ.color }}>{typ.name}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${t.color}`, background: `${t.color}08` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: t.color, marginBottom: 6 }}>{t.name}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 6 }}>{t.desc}</div>
        <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          {t.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </div>
    </div>
  )
}

// ----- 8-3: Virtual approach advantages -----
export function VirtualAdvantages() {
  const data = [
    { metric: 'Resources Pooled', integrated: 30, virtual: 90 },
    { metric: 'Speed/Responsiveness', integrated: 40, virtual: 85 },
    { metric: 'Risk-Taking', integrated: 25, virtual: 90 },
    { metric: 'Access to Capabilities', integrated: 50, virtual: 80 },
    { metric: 'Coordination', integrated: 90, virtual: 30 },
    { metric: 'Info Sharing', integrated: 85, virtual: 35 },
    { metric: 'Control of Tech', integrated: 90, virtual: 25 },
    { metric: 'Value Capture', integrated: 80, virtual: 30 }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Integrated vs Virtual — Strengths и Weaknesses</p>
      <p style={subStyle}>Trade-off фундаментальный. Virtual: responsiveness + risk-taking. Integrated: control + coordination.</p>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={data}>
          <PolarGrid stroke="var(--border-color)" />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 9, fill: 'var(--text-sec)' }} />
          <PolarRadiusAxis tick={{ fontSize: 8, fill: 'var(--text-sec)' }} angle={90} domain={[0, 100]} />
          <Radar name="Integrated" dataKey="integrated" stroke={C.indigo} fill={C.indigo} fillOpacity={0.35} strokeWidth={2} />
          <Radar name="Virtual" dataKey="virtual" stroke={C.teal} fill={C.teal} fillOpacity={0.35} strokeWidth={2} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 8-3: Integrated to Virtual spectrum -----
export function IntegratedVirtualSpectrum() {
  const forms = [
    { name: 'Integrated\nCorporation', risk: 10, coord: 95, color: C.indigo },
    { name: 'Corp. with\nautonomous div.', risk: 30, coord: 80, color: C.blue },
    { name: 'Joint\nVenture', risk: 55, coord: 60, color: C.purple },
    { name: 'Alliance', risk: 70, coord: 45, color: C.amber },
    { name: 'Virtual\nCompany', risk: 95, coord: 20, color: C.teal }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Integrated → Virtual Spectrum</p>
      <p style={subStyle}>Trade-off: incentive to take risks vs ability to coordinate/share info</p>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={forms} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 9, fill: 'var(--text-sec)' }} interval={0} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-sec)' }} label={{ value: 'Level (0-100)', angle: -90, position: 'insideLeft', fontSize: 11, fill: 'var(--text-sec)' }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Line type="monotone" dataKey="risk" name="Incentive to take risks" stroke={C.loss} strokeWidth={3} dot={{ r: 6 }} />
          <Line type="monotone" dataKey="coord" name="Ability to coordinate" stroke={C.gain} strokeWidth={3} dot={{ r: 6 }} />
        </ComposedChart>
      </ResponsiveContainer>

      <div style={{ marginTop: 8, padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 10, color: 'var(--text-primary)', textAlign: 'center' }}>
        ← <strong style={{ color: C.indigo }}>Centralized</strong> &nbsp; Spectrum &nbsp; <strong style={{ color: C.teal }}>Decentralized</strong> →
      </div>
    </div>
  )
}

// ----- 8-3: Autonomous vs Systemic -----
export function AutonomousVsSystemic() {
  const [sel, setSel] = useState('autonomous')
  const types = {
    autonomous: {
      name: 'Autonomous Innovations',
      color: C.gain,
      icon: '⚙️',
      example: 'Turbocharger for auto engine • Disk drive for computer (slips in/out)',
      features: [
        'Innovation can be INDEPENDENT of others',
        'Interface STANDARDIZED + CODIFIED',
        'Less need for coordination/info sharing',
        '"Bolt-on" architecture'
      ],
      recommendation: 'VIRTUAL APPROACH ATTRACTIVE — each firm может do its own thing'
    },
    systemic: {
      name: 'Systemic Innovations',
      color: C.loss,
      icon: '🧩',
      example: 'Polaroid + Instant Photography (new film + camera that processes particular way — not separable)',
      features: [
        'Components INTERDEPENDENT',
        'Fit LIKE A GLOVE',
        'Great deal of coordination needed',
        'Sharing sensitive information required'
      ],
      recommendation: 'INTEGRATED APPROACH ADVANTAGE — hard to gain commitment/trust в virtual system'
    }
  }
  const t = types[sel]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Autonomous vs Systemic Innovations</p>
      <p style={subStyle}>Critical technical distinction для решения virtual или integrated</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
        <button onClick={() => setSel('autonomous')}
          style={{
            padding: 12, borderRadius: 6, cursor: 'pointer',
            border: `2px solid ${C.gain}`,
            background: sel === 'autonomous' ? `${C.gain}25` : `${C.gain}08`,
            opacity: sel === 'autonomous' ? 1 : 0.7
          }}>
          <div style={{ fontSize: 18, marginBottom: 2 }}>⚙️</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.gain }}>Autonomous</div>
        </button>
        <button onClick={() => setSel('systemic')}
          style={{
            padding: 12, borderRadius: 6, cursor: 'pointer',
            border: `2px solid ${C.loss}`,
            background: sel === 'systemic' ? `${C.loss}25` : `${C.loss}08`,
            opacity: sel === 'systemic' ? 1 : 0.7
          }}>
          <div style={{ fontSize: 18, marginBottom: 2 }}>🧩</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.loss }}>Systemic</div>
        </button>
      </div>

      <div style={{ padding: 12, borderRadius: 8, borderLeft: `4px solid ${t.color}`, background: `${t.color}10` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: t.color, marginBottom: 6 }}>{t.icon} {t.name}</div>
        <div style={{ fontSize: 10, color: 'var(--text-sec)', fontStyle: 'italic', marginBottom: 8 }}>
          <strong>Examples:</strong> {t.example}
        </div>
        <ul style={{ fontSize: 10, paddingLeft: 16, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 8 }}>
          {t.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <div style={{ padding: 8, borderRadius: 6, background: 'var(--bg-secondary)', fontSize: 10, fontWeight: 700, color: t.color }}>
          → {t.recommendation}
        </div>
      </div>
    </div>
  )
}

// ----- 8-3: Types of Innovation 2x2 matrix -----
export function TypesInnovationMatrix() {
  const [hover, setHover] = useState(null)
  const cells = [
    {
      key: 'tl', x: 80, y: 60, w: 220, h: 110,
      cap: 'go virtual', color: C.gain,
      x_label: 'Autonomous', y_label: 'Capabilities exist outside',
      detail: 'STRONG case для virtual approach. Each firm может do its own thing. Pieces bolt together; system moves forward quickly. PURE CASE.'
    },
    {
      key: 'tr', x: 300, y: 60, w: 220, h: 110,
      cap: 'ally with Caution', color: C.amber,
      x_label: 'Systemic', y_label: 'Capabilities exist outside',
      detail: 'Intermediate case. Capabilities exist outside, можем ally — но systemic innovation требует high coordination. Ally CAREFULLY.'
    },
    {
      key: 'bl', x: 80, y: 170, w: 220, h: 110,
      cap: 'ally or bring in-house', color: C.orange,
      x_label: 'Autonomous', y_label: 'Capabilities must be created',
      detail: 'Intermediate case. Autonomous — coordination less critical. But CONTROL becomes important since technology being developed. CAUTION.'
    },
    {
      key: 'br', x: 300, y: 170, w: 220, h: 110,
      cap: 'bring in-house', color: C.loss,
      x_label: 'Systemic', y_label: 'Capabilities must be created',
      detail: 'INTEGRATED essential. Coordination + control of technology BOTH important. PURE CASE opposite от go virtual.'
    }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Types of Innovation — 2×2 Decision Matrix</p>
      <p style={subStyle}>Когда virtual, когда integrated? Кliклайте на ячейку для детали.</p>

      <svg viewBox="0 0 580 360" style={{ width: '100%' }}>
        {/* Header columns */}
        <text x="190" y="35" fontSize="11" fill="var(--text-primary)" fontWeight="bold" textAnchor="middle">AUTONOMOUS</text>
        <text x="410" y="35" fontSize="11" fill="var(--text-primary)" fontWeight="bold" textAnchor="middle">SYSTEMIC</text>
        <text x="300" y="20" fontSize="10" fill="var(--text-sec)" fontStyle="italic" textAnchor="middle">Type of Innovation</text>

        {/* Y axis labels */}
        <text x="40" y="120" fontSize="10" fill="var(--text-primary)" textAnchor="middle" transform="rotate(-90 40 120)">Capabilities you need</text>
        <text x="65" y="120" fontSize="9" fill="var(--text-sec)" textAnchor="middle" transform="rotate(-90 65 120)">...exist outside</text>
        <text x="65" y="230" fontSize="9" fill="var(--text-sec)" textAnchor="middle" transform="rotate(-90 65 230)">...must be created</text>

        {cells.map(c => {
          const isHover = hover && hover.key === c.key
          return (
            <g key={c.key} onClick={() => setHover(c)} onMouseEnter={() => setHover(c)} style={{ cursor: 'pointer' }}>
              <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.color} opacity={isHover ? 0.85 : 0.45} stroke="white" strokeWidth="2" rx="6" />
              <text x={c.x + c.w / 2} y={c.y + c.h / 2 - 5} fontSize="14" fill="white" fontWeight="bold" textAnchor="middle">
                {c.cap.toUpperCase().split(' ').slice(0, 2).join(' ')}
              </text>
              {c.cap.split(' ').length > 2 && (
                <text x={c.x + c.w / 2} y={c.y + c.h / 2 + 13} fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">
                  {c.cap.split(' ').slice(2).join(' ').toUpperCase()}
                </text>
              )}
            </g>
          )
        })}

        {/* Center "Type of Innovation" label */}
        <circle cx="300" cy="225" r="38" fill="var(--bg-card)" stroke="var(--border-color)" strokeWidth="2" />
        <text x="300" y="220" fontSize="10" fill="var(--text-primary)" fontWeight="bold" textAnchor="middle">Type of</text>
        <text x="300" y="234" fontSize="10" fill="var(--text-primary)" fontWeight="bold" textAnchor="middle">Innovation</text>
      </svg>

      {hover && (
        <div style={{ marginTop: 10, padding: 12, borderRadius: 6, borderLeft: `4px solid ${hover.color}`, background: `${hover.color}10` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: hover.color, marginBottom: 4 }}>
            {hover.cap.toUpperCase()} — {hover.x_label} × {hover.y_label}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>{hover.detail}</div>
        </div>
      )}
    </div>
  )
}

// ----- 8-3: IBM PC timeline -----
export function IBMPCTimeline() {
  const data = [
    { year: 1981, share: 0, phase: 'Launch (virtual)' },
    { year: 1983, share: 20, phase: 'Growth' },
    { year: 1985, share: 41, phase: 'Peak' },
    { year: 1988, share: 32, phase: 'OS/2 attempt' },
    { year: 1992, share: 18, phase: 'Decline' },
    { year: 1996, share: 12, phase: 'Decline' },
    { year: 2000, share: 8, phase: 'Late decline' },
    { year: 2005, share: 7, phase: 'Sold PC division' }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>IBM Personal Computer — Both Sides of Virtual</p>
      <p style={subStyle}>Fast win с virtual (1981-1985), then loss of control (1985-2005)</p>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 10, fill: 'var(--text-sec)' }} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-sec)' }} label={{ value: 'PC Market Share %', angle: -90, position: 'insideLeft', fontSize: 11, fill: 'var(--text-sec)' }} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v}%`} />
          <Area type="monotone" dataKey="share" stroke={C.purple} fill={`${C.purple}30`} strokeWidth={3} dot={{ r: 5, fill: C.purple }} />
          <ReferenceLine x={1985} stroke={C.gain} strokeWidth={2} strokeDasharray="6 3" label={{ value: 'Peak 41%', position: 'top', fontSize: 10, fill: C.gain }} />
          <ReferenceLine x={2005} stroke={C.loss} strokeWidth={2} strokeDasharray="6 3" label={{ value: 'Sold', position: 'top', fontSize: 10, fill: C.loss }} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.gain}`, background: `${C.gain}10` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.gain, marginBottom: 4 }}>✓ POSITIVE Side (1981-85)</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            <li>Virtual approach: Intel + Microsoft outsourced</li>
            <li>FAST launch, LOW investment</li>
            <li>Very responsive to changing tech</li>
            <li>41% market share by 1985</li>
          </ul>
        </div>
        <div style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${C.loss}`, background: `${C.loss}10` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.loss, marginBottom: 4 }}>✗ NEGATIVE Side (1985-2005)</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            <li>Lost CONTROL of technology</li>
            <li>Lost ability to CAPTURE VALUE</li>
            <li>Competitors duplicated (open architecture)</li>
            <li>OS/2 failed; Windows won</li>
            <li>Share dropped к 7%; sold PC division</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// ----- 8-4: Why alliances fail -----
export function WhyFailReasons() {
  const reasons = [
    { num: 1, name: 'Misalignment in strategic goals', desc: 'Surface-level agreement; different ideas where alliance going', color: C.loss },
    { num: 2, name: 'Problems sharing resources', desc: 'Interdependencies complex, taken for granted, не specified', color: C.orange },
    { num: 3, name: 'Difficulties gaining commitment', desc: 'Employees focus careers в parent firms, не alliance', color: C.amber },
    { num: 4, name: 'Lack of trust between employees', desc: 'Across parent firms, different cultures, competing interests', color: C.purple }
  ]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Why Alliances/JV Fail — 4 Main Reasons</p>
      <p style={subStyle}>50%+ fail. Larger problem: org/human issues UNDER-EMPHASIZED relative to strategic/economic.</p>

      <div style={{ marginBottom: 12, padding: 12, borderRadius: 8, background: `${C.loss}15`, borderLeft: `4px solid ${C.loss}`, textAlign: 'center' }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: C.loss }}>50%+</div>
        <div style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          alliances и joint ventures FAIL to achieve objectives
        </div>
        <div style={{ fontSize: 9, color: 'var(--text-sec)', fontStyle: 'italic', marginTop: 4 }}>
          Many failures NOT from flawed strategy — from IMPLEMENTATION
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
        {reasons.map(r => (
          <div key={r.num} style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${r.color}`, background: 'var(--bg-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', background: r.color, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700
              }}>{r.num}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)' }}>{r.name}</div>
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', lineHeight: 1.4 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 8-4: Three design dimensions -----
export function ThreeDesignDimensions() {
  const [sel, setSel] = useState(0)
  const dims = [
    {
      name: 'Strategic Alignment',
      color: C.indigo,
      icon: '🎯',
      problem: 'Surface-level agreement только around strategic opportunity; firms have OWN interests, different ideas where alliance going. When start operating — need DEEP agreement.',
      recommendation: 'Go FURTHER as part of deal-making process: develop STRONG, DETAILED business plan PRE-CLOSING. Standard: acceptable to VENTURE CAPITALIST.',
      checklist: ['Detailed business plan', 'VC-acceptable standard', 'Product direction resolved', 'Marketing approach resolved']
    },
    {
      name: 'Resource Sharing',
      color: C.purple,
      icon: '🔗',
      problem: 'Interdependencies numerous, complex, taken for granted on one side, not specified in-depth. POISONOUS — one side assumed needed resource would come from other.',
      recommendation: 'Identify shared resources + interdependencies, reach SHARED UNDERSTANDING. MINIMIZE unneeded. Recall magnetic pull (here = parent firms). If doubt — pull INTO alliance.',
      checklist: ['Identify all interdependencies', 'Document shared understanding', 'Minimize unneeded interdep.', 'When in doubt: pull INTO alliance']
    },
    {
      name: 'Governance',
      color: C.teal,
      icon: '⚖️',
      problem: 'Touched in deal-making but only at TOP LEVEL (board, veto). NOT day-to-day operating/strategic decisions. Innovation = uncertainty → issues develop. 3 parties involved.',
      recommendation: 'STREAMLINE decision-making beyond contractual. AGREE где alliance has autonomy и где не. REGULAR MEETINGS at different times (not just quarterly).',
      checklist: ['Streamline beyond contracts', 'Agree autonomy boundaries', 'Regular meetings beyond Q', 'Effective prompt decisions']
    }
  ]
  const d = dims[sel]
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>3 Design Dimensions для Alliances/JV</p>
      <p style={subStyle}>Hutt + Bamford/Ernst/Fubini research. Каждый dimension — own pitfall + recommendation.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
        {dims.map((dm, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{
              padding: 10, borderRadius: 6, cursor: 'pointer',
              border: `2px solid ${dm.color}`,
              background: sel === i ? `${dm.color}25` : `${dm.color}08`,
              opacity: sel === i ? 1 : 0.7
            }}>
            <div style={{ fontSize: 16, marginBottom: 2 }}>{dm.icon}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: dm.color }}>{dm.name}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 12, borderRadius: 8, borderLeft: `4px solid ${d.color}`, background: `${d.color}10` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: d.color, marginBottom: 6 }}>
          {d.icon} {d.name}
        </div>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.loss, marginBottom: 4 }}>⚠ Problem</div>
          <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>{d.problem}</div>
        </div>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.gain, marginBottom: 4 }}>✓ Recommendation</div>
          <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>{d.recommendation}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Checklist</div>
          <ul style={{ fontSize: 9, paddingLeft: 14, margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            {d.checklist.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ----- 8-4: Organization building -----
export function OrganizationBuilding() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Organization Building — Beyond Design</p>
      <p style={subStyle}>Populate shell с talented motivated people. 3 challenges.</p>

      <div style={{ padding: 10, borderRadius: 6, background: `${C.amber}15`, borderLeft: `3px solid ${C.amber}`, marginBottom: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.amber, marginBottom: 4 }}>🏝 «No Man's Land» Problem</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          Alliances/JV are BETWEEN parent firms. Career success determined в parent firms в employees' minds. Often UNDERSTAFFED — staff who don't have strongest opportunities в parents.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
        {[
          {
            num: 1, name: 'Attract Key Talented People', color: C.indigo,
            solution: 'Start with LEADERSHIP. Talented motivational leader can build motivation among potential recruits about venture.'
          },
          {
            num: 2, name: 'Set Clear Commitment Expectations', color: C.purple,
            solution: 'WHAT PERCENT of their time? FOR HOW LONG? People understand what\'s being asked.'
          },
          {
            num: 3, name: 'Build in Incentives', color: C.teal,
            solution: 'FORMAL: rewards at milestones. INFORMAL: commitments from TOP PLAYERS в each partner firm about value for parent firm and key players\' careers.'
          }
        ].map(c => (
          <div key={c.num} style={{ padding: 10, borderRadius: 6, borderLeft: `3px solid ${c.color}`, background: 'var(--bg-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%', background: c.color, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700
              }}>{c.num}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: c.color }}>{c.name}</div>
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-primary)', lineHeight: 1.5 }}>{c.solution}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 8-5: Module 8 concept map -----
export function Module8ConceptMap() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 8 — Концептуальная карта</p>
      <p style={subStyle}>Как все элементы связаны: planning, evaluation, boundaries, advice</p>

      <svg viewBox="0 0 700 460" style={{ width: '100%' }}>
        <defs>
          <marker id="arrCM8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="var(--text-sec)" />
          </marker>
        </defs>

        {/* Central node */}
        <circle cx="350" cy="230" r="60" fill={C.purple} opacity="0.85" />
        <text x="350" y="222" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">Innovation =</text>
        <text x="350" y="236" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">Ideas + Leader</text>
        <text x="350" y="250" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">+ Team + PLAN</text>

        {/* Planning (top-left) */}
        <circle cx="120" cy="80" r="45" fill={C.indigo} opacity="0.85" />
        <text x="120" y="76" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">PLANNING</text>
        <text x="120" y="92" fontSize="9" fill="white" textAnchor="middle">Lesson 8-1</text>
        <text x="120" y="135" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Custom plan</text>
        <text x="120" y="147" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Cause-effect</text>
        <text x="120" y="159" fontSize="9" fill="var(--text-sec)" textAnchor="middle">MCU matrix</text>

        {/* Evaluation (top-right) */}
        <circle cx="580" cy="80" r="45" fill={C.loss} opacity="0.85" />
        <text x="580" y="76" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">EVALUATION</text>
        <text x="580" y="92" fontSize="9" fill="white" textAnchor="middle">Lesson 8-2</text>
        <text x="580" y="135" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Bias toward</text>
        <text x="580" y="147" fontSize="9" fill="var(--text-sec)" textAnchor="middle">execution</text>
        <text x="580" y="159" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Acc. for LEARNING</text>

        {/* Boundaries (bottom-left) */}
        <circle cx="120" cy="380" r="45" fill={C.teal} opacity="0.85" />
        <text x="120" y="376" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">BOUNDARIES</text>
        <text x="120" y="392" fontSize="9" fill="white" textAnchor="middle">Lesson 8-3</text>
        <text x="120" y="437" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Virtual vs Integrated</text>
        <text x="120" y="449" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Autonomous/Systemic</text>

        {/* Alliances (bottom-right) */}
        <circle cx="580" cy="380" r="45" fill={C.amber} opacity="0.85" />
        <text x="580" y="376" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">ALLIANCES</text>
        <text x="580" y="392" fontSize="9" fill="white" textAnchor="middle">Lesson 8-4</text>
        <text x="580" y="437" fontSize="9" fill="var(--text-sec)" textAnchor="middle">3 design dimensions</text>
        <text x="580" y="449" fontSize="9" fill="var(--text-sec)" textAnchor="middle">Organization building</text>

        {/* Lines */}
        <line x1="165" y1="100" x2="290" y2="195" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrCM8)" />
        <line x1="535" y1="100" x2="410" y2="195" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrCM8)" />
        <line x1="165" y1="360" x2="290" y2="265" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrCM8)" />
        <line x1="535" y1="360" x2="410" y2="265" stroke="var(--text-sec)" strokeWidth="1.5" markerEnd="url(#arrCM8)" />

        {/* Source banner */}
        <text x="350" y="450" fontSize="10" fill="var(--text-sec)" fontStyle="italic" textAnchor="middle">
          Govindarajan &amp; Trimble (planning + evaluation) • Chesbrough (open innovation)
        </text>
      </svg>
    </div>
  )
}
