import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'

// ===== Color Palette =====
const C = {
  gain: '#22c55e', loss: '#ef4444', blue: '#3b82f6', orange: '#f59e0b',
  purple: '#8b5cf6', teal: '#14b8a6', pink: '#ec4899', dark: '#1e293b',
  accent: 'var(--accent)', slate: '#64748b', indigo: '#6366f1', cyan: '#06b6d4',
  emerald: '#10b981', amber: '#f59e0b', rose: '#f43f5e',
}

// ===== Shared Styles =====
const cardStyle = {
  background: 'var(--bg-card)', border: '1px solid var(--border-color)',
  borderRadius: 12, padding: '16px', marginTop: 12
}
const labelStyle = { fontSize: 10, fill: 'var(--text-sec)' }
const headingStyle = { color: 'var(--text-primary)', fontSize: 13, fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: 'var(--text-sec)', fontSize: 10, margin: '0 0 12px' }
const tooltipStyle = { background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 11 }

// =========================================================================
//  LECTURE 1-1: S-Curves & Innovation Life Cycles
// =========================================================================

// ----- 1-1a: Interactive S-Curve -----
function SCurveExplorer() {
  const [steepness, setSteepness] = useState(0.08)
  const [midpoint, setMidpoint] = useState(50)

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 100; t += 1) {
      const perf = 100 / (1 + Math.exp(-steepness * (t - midpoint)))
      pts.push({ t, performance: Math.round(perf * 10) / 10 })
    }
    return pts
  }, [steepness, midpoint])

  // Determine phase boundaries
  const emergenceEnd = Math.round(midpoint - 15 / steepness * 0.3)
  const maturityStart = Math.round(midpoint + 15 / steepness * 0.3)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Interactive S-Curve Explorer</p>
      <p style={subStyle}>Adjust steepness and midpoint to see how innovation trajectories change</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Growth Rate: <strong>{steepness.toFixed(2)}</strong>
          <input type="range" min="0.03" max="0.2" step="0.005" value={steepness}
            onChange={e => setSteepness(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.blue }} />
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Midpoint (inflection): <strong>t={midpoint}</strong>
          <input type="range" min="20" max="80" step="1" value={midpoint}
            onChange={e => setMidpoint(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.purple }} />
        </label>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        {[
          { label: 'Emergence', color: C.orange, desc: 'Slow start, high uncertainty' },
          { label: 'Growth', color: C.gain, desc: 'Rapid acceleration' },
          { label: 'Maturity', color: C.blue, desc: 'Diminishing returns' },
        ].map(phase => (
          <div key={phase.label} style={{
            flex: 1, minWidth: 90, padding: '6px 10px', borderRadius: 8,
            background: `${phase.color}12`, border: `1px solid ${phase.color}30`
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: phase.color }}>{phase.label}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>{phase.desc}</div>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="sCurveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.blue} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.blue} stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} label={{ value: 'Time', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} domain={[0, 105]} label={{ value: 'Performance', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle}
            formatter={v => [`${v}%`, 'Performance']}
            labelFormatter={l => `Time: ${l}`} />
          <ReferenceLine x={midpoint} stroke={C.purple} strokeDasharray="5 5"
            label={{ value: 'Inflection', position: 'top', style: { fontSize: 9, fill: C.purple } }} />
          <Area type="monotone" dataKey="performance" stroke={C.blue} strokeWidth={2.5}
            fill="url(#sCurveGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 6, textAlign: 'center', fontStyle: 'italic' }}>
        The inflection point at t={midpoint} marks maximum growth rate — after that, diminishing returns set in
      </div>
    </div>
  )
}

// ----- 1-1b: Adoption Bell Curve -----
function AdoptionBellCurve() {
  const [highlight, setHighlight] = useState(null)

  const segments = [
    { name: 'Innovators', pct: 2.5, color: C.purple, desc: 'Risk-tolerant tech enthusiasts. First to try, tolerant of bugs and high prices.' },
    { name: 'Early Adopters', pct: 13.5, color: C.blue, desc: 'Visionaries seeking strategic advantage. Opinion leaders who accept imperfect products.' },
    { name: 'Early Majority', pct: 34, color: C.gain, desc: 'Pragmatists requiring proven value. Need high Product-Market Fit and reliability.' },
    { name: 'Late Majority', pct: 34, color: C.orange, desc: 'Conservatives driven by necessity. Adopt only after majority has already adopted.' },
    { name: 'Laggards', pct: 16, color: C.loss, desc: 'Skeptics resistant to change. May never adopt (e.g., typewriter users in the PC era).' },
  ]

  // Generate bell curve data
  const data = useMemo(() => {
    const pts = []
    for (let x = -3.5; x <= 3.5; x += 0.1) {
      const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI)
      let segment = ''
      if (x < -2) segment = 'Innovators'
      else if (x < -1) segment = 'Early Adopters'
      else if (x < 0.3) segment = 'Early Majority'
      else if (x < 1.6) segment = 'Late Majority'
      else segment = 'Laggards'
      pts.push({ x: Math.round(x * 100) / 100, y: Math.round(y * 1000) / 1000, segment })
    }
    return pts
  }, [])

  const activeSegment = segments.find(s => s.name === highlight)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Innovation Adoption Life Cycle</p>
      <p style={subStyle}>Click a segment to learn more about each adopter category</p>

      <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
        {segments.map(seg => (
          <button key={seg.name}
            onClick={() => setHighlight(highlight === seg.name ? null : seg.name)}
            style={{
              flex: 1, minWidth: 70, padding: '6px 4px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: highlight === seg.name ? `${seg.color}25` : `${seg.color}10`,
              outline: highlight === seg.name ? `2px solid ${seg.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: seg.color }}>{seg.name}</div>
            <div style={{ fontSize: 14, fontWeight: 900, color: seg.color }}>{seg.pct}%</div>
          </button>
        ))}
      </div>

      {activeSegment && (
        <div style={{
          padding: '10px 14px', borderRadius: 8, marginBottom: 12,
          background: `${activeSegment.color}10`, border: `1px solid ${activeSegment.color}30`
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: activeSegment.color }}>{activeSegment.name}: </span>
          <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>{activeSegment.desc}</span>
        </div>
      )}

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="x" tick={labelStyle} label={{ value: 'Standard Deviations from Mean', position: 'insideBottom', offset: -2, style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} hide />
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v, name, props) => [`${(v * 100).toFixed(1)}%`, props.payload.segment]}
            labelFormatter={() => ''} />
          <Area type="monotone" dataKey="y" stroke={C.blue} strokeWidth={2}
            fill={C.blue} fillOpacity={0.15} dot={false} />
          <ReferenceLine x={-1} stroke={C.loss} strokeDasharray="4 4"
            label={{ value: '← CHASM', position: 'top', style: { fontSize: 9, fill: C.loss, fontWeight: 700 } }} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 6, textAlign: 'center', fontStyle: 'italic' }}>
        The Chasm between Early Adopters and Early Majority is where 90% of innovations fail
      </div>
    </div>
  )
}

// ----- 1-1c: Takeoff Point Visualizer -----
function TakeoffVisualizer() {
  const [takeoffYear, setTakeoffYear] = useState(8)

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 30; t++) {
      let adoption
      if (t < takeoffYear) {
        adoption = 2 + t * 1.5
      } else {
        const yearsAfter = t - takeoffYear
        adoption = 2 + takeoffYear * 1.5 + yearsAfter * yearsAfter * 1.8
      }
      adoption = Math.min(adoption, 100)
      pts.push({ year: t, adoption: Math.round(adoption * 10) / 10 })
    }
    return pts
  }, [takeoffYear])

  const products = [
    { name: 'PCs', years: 8, color: C.blue },
    { name: 'Cell Phones', years: 10, color: C.gain },
    { name: 'Autos', years: 15, color: C.orange },
    { name: 'Phonograph', years: 22, color: C.purple },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Takeoff Point Simulator</p>
      <p style={subStyle}>Adjust when the takeoff occurs to see the hockey-stick effect</p>

      <label style={{ fontSize: 11, color: 'var(--text-primary)', display: 'block', marginBottom: 8 }}>
        Takeoff at Year: <strong>{takeoffYear}</strong>
        <input type="range" min="3" max="25" step="1" value={takeoffYear}
          onChange={e => setTakeoffYear(+e.target.value)}
          style={{ display: 'block', width: 200, accentColor: C.gain }} />
      </label>

      <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
        {products.map(p => (
          <button key={p.name}
            onClick={() => setTakeoffYear(p.years)}
            style={{
              padding: '4px 10px', borderRadius: 6, border: `1px solid ${p.color}40`,
              background: takeoffYear === p.years ? `${p.color}20` : 'transparent',
              cursor: 'pointer', fontSize: 10, fontWeight: 600, color: p.color
            }}>
            {p.name} ({p.years}yr)
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="year" tick={labelStyle} label={{ value: 'Years After Commercialization', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} domain={[0, 105]} label={{ value: 'Adoption %', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle}
            formatter={v => [`${v}%`, 'Adoption']}
            labelFormatter={l => `Year ${l}`} />
          <ReferenceLine x={takeoffYear} stroke={C.loss} strokeDasharray="5 5"
            label={{ value: `Takeoff (Year ${takeoffYear})`, position: 'top', style: { fontSize: 9, fill: C.loss, fontWeight: 700 } }} />
          <Line type="monotone" dataKey="adoption" stroke={C.gain} strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <div style={{
        textAlign: 'center', padding: '8px', borderRadius: 8, marginTop: 8,
        background: `${C.gain}10`, border: `1px solid ${C.gain}30`
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: C.gain }}>
          Innovation adoption is NEVER linear — the hockey stick appears at the takeoff point
        </span>
      </div>
    </div>
  )
}

// =========================================================================
//  LECTURE 1-2: Product Life Cycle
// =========================================================================

// ----- 1-2a: Interactive PLC Stages -----
function PLCExplorer() {
  const [activeStage, setActiveStage] = useState(null)

  const stages = [
    { name: 'Introduction', color: C.orange, desc: 'Low sales, product is new. Distribution channels forming. Targeting innovators and early adopters.', derivative: 'Slow growth' },
    { name: 'Growth', color: C.gain, desc: 'Sales increase at INCREASING rates (positive 2nd derivative). Explosive expansion, new competitors enter.', derivative: 'd²S/dt² > 0' },
    { name: 'Maturity', color: C.blue, desc: 'Sales increase at DECREASING rates (negative 2nd derivative). Market saturates, competition intensifies.', derivative: 'd²S/dt² < 0' },
    { name: 'Decline', color: C.loss, desc: 'Net sales falling. Product obsolescence, newer alternatives emerge. Late majority and laggards remain.', derivative: 'dS/dt < 0' },
  ]

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 100; t++) {
      let sales
      if (t < 15) sales = 2 + t * 0.5
      else if (t < 45) sales = 9.5 + Math.pow(t - 15, 1.6) * 0.15
      else if (t < 75) sales = 9.5 + Math.pow(30, 1.6) * 0.15 + (t - 45) * 0.3
      else sales = Math.max(0, 9.5 + Math.pow(30, 1.6) * 0.15 + 30 * 0.3 - Math.pow(t - 75, 1.3) * 0.5)
      let stage = t < 15 ? 'Introduction' : t < 45 ? 'Growth' : t < 75 ? 'Maturity' : 'Decline'
      pts.push({ t, sales: Math.round(sales * 10) / 10, stage })
    }
    return pts
  }, [])

  const active = stages.find(s => s.name === activeStage)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Product Life Cycle Explorer</p>
      <p style={subStyle}>Click a stage to learn about its characteristics and mathematical properties</p>

      <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
        {stages.map(st => (
          <button key={st.name}
            onClick={() => setActiveStage(activeStage === st.name ? null : st.name)}
            style={{
              flex: 1, minWidth: 80, padding: '6px 8px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeStage === st.name ? `${st.color}25` : `${st.color}10`,
              outline: activeStage === st.name ? `2px solid ${st.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: st.color }}>{st.name}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)', fontFamily: 'monospace' }}>{st.derivative}</div>
          </button>
        ))}
      </div>

      {active && (
        <div style={{
          padding: '10px 14px', borderRadius: 8, marginBottom: 12,
          background: `${active.color}10`, border: `1px solid ${active.color}30`
        }}>
          <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>{active.desc}</span>
        </div>
      )}

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="plcGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.blue} stopOpacity={0.25} />
              <stop offset="100%" stopColor={C.blue} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} label={{ value: 'Time', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} label={{ value: 'Sales', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v, name, props) => [v.toFixed(1), `Sales (${props.payload.stage})`]}
            labelFormatter={l => `Time: ${l}`} />
          <ReferenceLine x={15} stroke={C.orange} strokeDasharray="4 4" />
          <ReferenceLine x={45} stroke={C.gain} strokeDasharray="4 4" />
          <ReferenceLine x={75} stroke={C.blue} strokeDasharray="4 4" />
          <Area type="monotone" dataKey="sales" stroke={C.blue} strokeWidth={2.5}
            fill="url(#plcGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 1-2b: Growth vs Maturity Rates -----
function GrowthVsMaturity() {
  const [time, setTime] = useState(30)

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 60; t++) {
      const growthSales = Math.pow(t, 1.6) * 0.3
      const maturitySales = 50 + Math.log(t + 1) * 12
      pts.push({
        t,
        growth: Math.round(growthSales * 10) / 10,
        maturity: Math.round(maturitySales * 10) / 10,
      })
    }
    return pts
  }, [])

  const growthVal = Math.pow(time, 1.6) * 0.3
  const growthSlope = time > 0 ? 1.6 * 0.3 * Math.pow(time, 0.6) : 0
  const maturityVal = 50 + Math.log(time + 1) * 12
  const maturitySlope = 12 / (time + 1)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Growth vs. Maturity: Rate Comparison</p>
      <p style={subStyle}>See how growth accelerates while maturity decelerates — the key mathematical difference</p>

      <label style={{ fontSize: 11, color: 'var(--text-primary)', display: 'block', marginBottom: 12 }}>
        Time point: <strong>t = {time}</strong>
        <input type="range" min="1" max="60" step="1" value={time}
          onChange={e => setTime(+e.target.value)}
          style={{ display: 'block', width: 200, accentColor: C.purple }} />
      </label>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <div style={{
          flex: 1, minWidth: 120, padding: '8px 12px', borderRadius: 8,
          background: `${C.gain}12`, border: `1px solid ${C.gain}30`
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.gain }}>Growth Phase</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.gain }}>Slope: {growthSlope.toFixed(2)}</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Accelerating (slope increases)</div>
        </div>
        <div style={{
          flex: 1, minWidth: 120, padding: '8px 12px', borderRadius: 8,
          background: `${C.orange}12`, border: `1px solid ${C.orange}30`
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.orange }}>Maturity Phase</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.orange }}>Slope: {maturitySlope.toFixed(2)}</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Decelerating (slope decreases)</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} label={{ value: 'Time', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} label={{ value: 'Sales', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <ReferenceLine x={time} stroke={C.purple} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="growth" name="Growth (t^1.6)" stroke={C.gain} strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="maturity" name="Maturity (log)" stroke={C.orange} strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 1-2c: Sales Takeoff Timeline -----
function SalesTakeoffTimeline() {
  const innovations = [
    { name: 'Phonograph Records', commercialized: 1897, takeoff: 1919, color: C.purple },
    { name: 'Automobile', commercialized: 1902, takeoff: 1915, color: C.blue },
    { name: 'Radio', commercialized: 1920, takeoff: 1925, color: C.teal },
    { name: 'Color TV', commercialized: 1954, takeoff: 1964, color: C.orange },
    { name: 'Personal Computer', commercialized: 1975, takeoff: 1983, color: C.gain },
    { name: 'Cell Phone', commercialized: 1983, takeoff: 1993, color: C.pink },
    { name: 'Internet', commercialized: 1991, takeoff: 1995, color: C.indigo },
    { name: 'MOOCs', commercialized: 2011, takeoff: 2013, color: C.cyan },
  ]

  const [selected, setSelected] = useState(null)

  const data = innovations.map(inn => ({
    name: inn.name,
    lag: inn.takeoff - inn.commercialized,
    commercialized: inn.commercialized,
    takeoff: inn.takeoff,
    color: inn.color,
  }))

  const active = selected !== null ? innovations[selected] : null

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Time to Sales Takeoff</p>
      <p style={subStyle}>Years between commercialization and takeoff for major innovations. Click a bar for details.</p>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} label={{ value: 'Years to Takeoff', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-primary)' }} width={110} />
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v, name, props) => [`${v} years (${props.payload.commercialized} → ${props.payload.takeoff})`, 'Time to takeoff']} />
          <Bar dataKey="lag" radius={[0, 6, 6, 0]} onClick={(d, i) => setSelected(selected === i ? null : i)}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} fillOpacity={selected === i ? 1 : 0.7}
                stroke={selected === i ? entry.color : 'none'} strokeWidth={2} cursor="pointer" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {active && (
        <div style={{
          padding: '10px 14px', borderRadius: 8, marginTop: 8,
          background: `${active.color}10`, border: `1px solid ${active.color}30`
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: active.color }}>{active.name}: </span>
          <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>
            Commercialized in {active.commercialized}, took {active.takeoff - active.commercialized} years to reach sales takeoff in {active.takeoff}.
          </span>
        </div>
      )}

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>
        Managers must think in years, not quarters — radical innovations need patience
      </div>
    </div>
  )
}

// =========================================================================
//  LECTURE 1-3: Firm Life Cycle
// =========================================================================

// ----- 1-3a: Firm Life Cycle 5 Stages -----
function FirmLifeCycleExplorer() {
  const [activeStage, setActiveStage] = useState(null)

  const stages = [
    { name: 'Introduction', color: C.orange, desc: 'Commercial introduction of the innovator. Very few firms, high technological uncertainty, primitive products.' },
    { name: 'Growth', color: C.gain, desc: 'Sharp increase in number of firms. Many new entrants, lots of experimentation, market infrastructure building.' },
    { name: 'Plateau', color: C.blue, desc: 'New entrants equal exiting firms. Stabilization of the industry, dominant design may emerge.' },
    { name: 'Shakeout', color: C.loss, desc: 'Firms exit in significant numbers (negative net entry). Only firms with competitive advantages survive.' },
    { name: 'Decline', color: C.slate, desc: 'Industry fades. Remaining firms focus on niche markets or exit entirely.' },
  ]

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 100; t++) {
      let firms
      if (t < 10) firms = 2 + t * 1
      else if (t < 35) firms = 12 + (t - 10) * 3
      else if (t < 55) firms = 87 + Math.sin((t - 35) * 0.05) * 5
      else if (t < 80) firms = Math.max(15, 87 - Math.pow(t - 55, 1.4) * 0.5)
      else firms = Math.max(8, 15 - (t - 80) * 0.3)
      let stage = t < 10 ? 'Introduction' : t < 35 ? 'Growth' : t < 55 ? 'Plateau' : t < 80 ? 'Shakeout' : 'Decline'
      pts.push({ t, firms: Math.round(firms), stage })
    }
    return pts
  }, [])

  const active = stages.find(s => s.name === activeStage)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Firm Life Cycle: 5 Stages</p>
      <p style={subStyle}>Click a stage to understand firm dynamics at each phase</p>

      <div style={{ display: 'flex', gap: 3, marginBottom: 12, flexWrap: 'wrap' }}>
        {stages.map(st => (
          <button key={st.name}
            onClick={() => setActiveStage(activeStage === st.name ? null : st.name)}
            style={{
              flex: 1, minWidth: 65, padding: '5px 4px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeStage === st.name ? `${st.color}25` : `${st.color}10`,
              outline: activeStage === st.name ? `2px solid ${st.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: st.color }}>{st.name}</div>
          </button>
        ))}
      </div>

      {active && (
        <div style={{
          padding: '10px 14px', borderRadius: 8, marginBottom: 12,
          background: `${active.color}10`, border: `1px solid ${active.color}30`
        }}>
          <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>{active.desc}</span>
        </div>
      )}

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="firmGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.teal} stopOpacity={0.25} />
              <stop offset="100%" stopColor={C.teal} stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} label={{ value: 'Time', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} label={{ value: 'Number of Firms', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v, name, props) => [v, `Firms (${props.payload.stage})`]}
            labelFormatter={l => `Time: ${l}`} />
          <ReferenceLine x={10} stroke={C.orange} strokeDasharray="4 4" />
          <ReferenceLine x={35} stroke={C.gain} strokeDasharray="4 4" />
          <ReferenceLine x={55} stroke={C.blue} strokeDasharray="4 4" />
          <ReferenceLine x={80} stroke={C.loss} strokeDasharray="4 4" />
          <Area type="monotone" dataKey="firms" stroke={C.teal} strokeWidth={2.5}
            fill="url(#firmGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 1-3b: Firm vs Sales Takeoff Comparison -----
function FirmVsSalesTakeoff() {
  const industries = [
    { name: 'PCs', firmTO: 3, salesTO: 8, color: C.blue },
    { name: 'Automobiles', firmTO: 10, salesTO: 20, color: C.orange },
    { name: 'Phonograph', firmTO: 18, salesTO: 22, color: C.purple },
    { name: 'Cell Phones', firmTO: 6, salesTO: 10, color: C.pink },
    { name: 'Radio', firmTO: 3, salesTO: 5, color: C.teal },
  ]

  const [selected, setSelected] = useState(0)
  const active = industries[selected]

  const timelineData = useMemo(() => {
    const pts = []
    const maxT = Math.max(active.salesTO + 5, 25)
    for (let t = 0; t <= maxT; t++) {
      const firms = t < active.firmTO ? 2 + t * 0.5
        : 2 + active.firmTO * 0.5 + Math.pow(t - active.firmTO, 1.3) * 2
      const sales = t < active.salesTO ? 1 + t * 0.3
        : 1 + active.salesTO * 0.3 + Math.pow(t - active.salesTO, 1.5) * 1.5
      pts.push({
        year: t,
        firms: Math.round(Math.min(firms, 100) * 10) / 10,
        sales: Math.round(Math.min(sales, 100) * 10) / 10
      })
    }
    return pts
  }, [selected])

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Firm Takeoff vs. Sales Takeoff</p>
      <p style={subStyle}>Firm takeoff ALWAYS precedes sales takeoff — select an industry to compare</p>

      <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
        {industries.map((ind, i) => (
          <button key={ind.name}
            onClick={() => setSelected(i)}
            style={{
              padding: '5px 10px', borderRadius: 6, border: `1px solid ${ind.color}40`,
              background: selected === i ? `${ind.color}20` : 'transparent',
              cursor: 'pointer', fontSize: 10, fontWeight: 600, color: ind.color
            }}>
            {ind.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <div style={{
          flex: 1, minWidth: 100, padding: '8px 12px', borderRadius: 8,
          background: `${C.teal}12`, border: `1px solid ${C.teal}30`
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.teal }}>Firm Takeoff</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: C.teal }}>Year {active.firmTO}</div>
        </div>
        <div style={{
          flex: 1, minWidth: 100, padding: '8px 12px', borderRadius: 8,
          background: `${C.gain}12`, border: `1px solid ${C.gain}30`
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.gain }}>Sales Takeoff</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: C.gain }}>Year {active.salesTO}</div>
        </div>
        <div style={{
          flex: 1, minWidth: 100, padding: '8px 12px', borderRadius: 8,
          background: `${C.orange}12`, border: `1px solid ${C.orange}30`
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.orange }}>Gap</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: C.orange }}>{active.salesTO - active.firmTO} years</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={timelineData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="year" tick={labelStyle} label={{ value: 'Years After Commercialization', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <ReferenceLine x={active.firmTO} stroke={C.teal} strokeDasharray="5 5"
            label={{ value: 'Firm TO', position: 'top', style: { fontSize: 8, fill: C.teal } }} />
          <ReferenceLine x={active.salesTO} stroke={C.gain} strokeDasharray="5 5"
            label={{ value: 'Sales TO', position: 'top', style: { fontSize: 8, fill: C.gain } }} />
          <Line type="monotone" dataKey="firms" name="Firms" stroke={C.teal} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="sales" name="Sales" stroke={C.gain} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 1-3c: Patent to Commercialization -----
function PatentToCommercialization() {
  const items = [
    { name: 'Typewriter', patent: 1714, commercial: 1878, color: C.purple },
    { name: 'Automobile', patent: 1860, commercial: 1902, color: C.blue },
    { name: 'Radio', patent: 1896, commercial: 1920, color: C.teal },
    { name: 'Television', patent: 1927, commercial: 1950, color: C.orange },
    { name: 'VCR', patent: 1950, commercial: 1972, color: C.pink },
    { name: 'PC', patent: 1964, commercial: 1975, color: C.gain },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>From Patent to Commercialization</p>
      <p style={subStyle}>The long road from first patent to commercial product — innovation takes patience</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(item => {
          const lag = item.commercial - item.patent
          const maxLag = 164
          const barWidth = Math.max(10, (lag / maxLag) * 100)
          return (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-primary)', width: 75, textAlign: 'right' }}>
                {item.name}
              </span>
              <div style={{ flex: 1, position: 'relative', height: 24 }}>
                <div style={{
                  height: '100%', width: `${barWidth}%`, borderRadius: 6,
                  background: `${item.color}30`, border: `1px solid ${item.color}50`,
                  display: 'flex', alignItems: 'center', paddingLeft: 8, minWidth: 60
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: item.color }}>{lag} years</span>
                </div>
              </div>
              <span style={{ fontSize: 9, color: 'var(--text-sec)', width: 80, textAlign: 'left' }}>
                {item.patent} → {item.commercial}
              </span>
            </div>
          )
        })}
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>
        Significant innovation happens long before commercialization — the typewriter took 164 years!
      </div>
    </div>
  )
}

// =========================================================================
//  LECTURE 1-4: Crossing the Chasm
// =========================================================================

// ----- 1-4a: Chasm Visualization -----
function ChasmVisualization() {
  const [showBridge, setShowBridge] = useState(false)

  const earlyMarket = [
    { x: 0, y: 0 }, { x: 3, y: 5 }, { x: 6, y: 15 }, { x: 9, y: 25 },
    { x: 12, y: 20 }, { x: 14, y: 10 }, { x: 15, y: 3 },
  ]
  const laterMarket = [
    { x: 19, y: 3 }, { x: 20, y: 10 }, { x: 23, y: 25 }, { x: 28, y: 40 },
    { x: 33, y: 38 }, { x: 38, y: 30 }, { x: 43, y: 20 }, { x: 48, y: 10 }, { x: 50, y: 3 },
  ]
  const allData = earlyMarket.concat([{ x: 16, y: 0 }, { x: 17, y: 0 }, { x: 18, y: 0 }]).concat(laterMarket)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>The Chasm: Early Market vs. Mass Market</p>
      <p style={subStyle}>Toggle the bridge to see how Total Product + Bowling Alley Strategy bridges the gap</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <div style={{
          flex: 1, minWidth: 110, padding: '8px 12px', borderRadius: 8,
          background: `${C.purple}12`, border: `1px solid ${C.purple}30`
        }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.purple }}>16%</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.purple }}>Early Market</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>MVP is enough</div>
        </div>
        <div style={{
          flex: 0, minWidth: 80, padding: '8px 12px', borderRadius: 8, textAlign: 'center',
          background: `${C.loss}12`, border: `1px solid ${C.loss}30`
        }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: C.loss }}>90%</div>
          <div style={{ fontSize: 9, color: C.loss }}>fail here</div>
        </div>
        <div style={{
          flex: 1, minWidth: 110, padding: '8px 12px', borderRadius: 8,
          background: `${C.gain}12`, border: `1px solid ${C.gain}30`
        }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.gain }}>84%</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.gain }}>Mass Market</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Total Product required</div>
        </div>
      </div>

      <button onClick={() => setShowBridge(!showBridge)}
        style={{
          padding: '6px 16px', borderRadius: 8, border: 'none', cursor: 'pointer',
          background: showBridge ? C.gain : C.loss,
          color: 'white', fontSize: 11, fontWeight: 700, marginBottom: 12,
          transition: 'all 0.3s'
        }}>
        {showBridge ? '✓ Bridge Built: Total Product + Beachhead' : 'Build the Bridge (Cross the Chasm)'}
      </button>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={allData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="earlyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.purple} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.purple} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="x" tick={labelStyle} />
          <YAxis tick={labelStyle} hide />
          <Tooltip contentStyle={tooltipStyle} />
          {!showBridge && (
            <ReferenceLine x={17} stroke={C.loss} strokeWidth={3}
              label={{ value: 'THE CHASM', position: 'top', style: { fontSize: 10, fill: C.loss, fontWeight: 900 } }} />
          )}
          {showBridge && (
            <ReferenceLine x={17} stroke={C.gain} strokeWidth={3} strokeDasharray="0"
              label={{ value: 'BRIDGED!', position: 'top', style: { fontSize: 10, fill: C.gain, fontWeight: 900 } }} />
          )}
          <Area type="monotone" dataKey="y" stroke={showBridge ? C.gain : C.purple} strokeWidth={2.5}
            fill={showBridge ? C.gain : C.purple} fillOpacity={0.15} dot={false}
            connectNulls={showBridge} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 6, textAlign: 'center', fontStyle: 'italic' }}>
        {showBridge
          ? 'Total Product + Bowling Alley Strategy → chain reaction through segments!'
          : '90% of innovations fail at the chasm — MVP is not enough for pragmatists'}
      </div>
    </div>
  )
}

// ----- 1-4b: Bowling Alley Strategy -----
function BowlingAlleyStrategy() {
  const [step, setStep] = useState(0)

  const pins = [
    { id: 0, name: 'Beachhead\nSegment', x: 50, y: 30, radius: 24, color: C.loss, desc: 'Head pin — focus ALL resources here first. Perfect Product-Market Fit for ONE niche.' },
    { id: 1, name: 'Segment 2', x: 30, y: 65, radius: 20, color: C.orange, desc: 'Second segment — adjacent market that benefits from references and word-of-mouth.' },
    { id: 2, name: 'Segment 3', x: 70, y: 65, radius: 20, color: C.orange, desc: 'Third segment — another adjacent niche reached through chain reaction.' },
    { id: 3, name: 'Segment 4', x: 15, y: 100, radius: 18, color: C.blue, desc: 'Expand further — adapt product features for this segment.' },
    { id: 4, name: 'Segment 5', x: 42, y: 100, radius: 18, color: C.blue, desc: 'Growing mass-market presence through accumulated references.' },
    { id: 5, name: 'Segment 6', x: 58, y: 100, radius: 18, color: C.blue, desc: 'Near mass-market coverage — product evolves for each segment.' },
    { id: 6, name: 'Segment 7', x: 85, y: 100, radius: 18, color: C.blue, desc: 'Chain reaction continues — approaching full market coverage.' },
  ]

  const activePins = pins.slice(0, step + 1)
  const activePin = pins[step]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Bowling Alley Strategy</p>
      <p style={subStyle}>Step through the chain reaction: hit the head pin → momentum spreads to other segments</p>

      <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
        {pins.map((p, i) => (
          <button key={i}
            onClick={() => setStep(i)}
            style={{
              width: 32, height: 32, borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: i <= step ? `${p.color}` : `${p.color}20`,
              color: i <= step ? 'white' : p.color,
              fontSize: 11, fontWeight: 700, transition: 'all 0.3s',
              opacity: i <= step ? 1 : 0.5,
            }}>
            {i + 1}
          </button>
        ))}
      </div>

      <div style={{
        padding: '10px 14px', borderRadius: 8, marginBottom: 12,
        background: `${activePin.color}10`, border: `1px solid ${activePin.color}30`,
        minHeight: 50
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: activePin.color }}>
          Step {step + 1}: {activePin.name.replace('\n', ' ')}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-primary)', marginTop: 4 }}>{activePin.desc}</div>
      </div>

      {/* Visual representation using bars */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 120, marginBottom: 8 }}>
        {pins.map((p, i) => {
          const isActive = i <= step
          const height = isActive ? 30 + (pins.length - i) * 12 : 20
          return (
            <div key={i} style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
            }}>
              <div style={{
                width: '100%', maxWidth: 40, height, borderRadius: '6px 6px 0 0',
                background: isActive ? p.color : `${p.color}15`,
                border: isActive ? `1px solid ${p.color}` : `1px solid ${p.color}30`,
                transition: 'all 0.4s ease'
              }} />
              <span style={{ fontSize: 8, color: isActive ? p.color : 'var(--text-sec)', fontWeight: isActive ? 700 : 400 }}>
                {i === 0 ? 'Head' : `S${i + 1}`}
              </span>
            </div>
          )
        })}
      </div>

      <div style={{
        textAlign: 'center', padding: '6px 12px', borderRadius: 8,
        background: step >= 3 ? `${C.gain}10` : `${C.orange}10`,
        border: `1px solid ${step >= 3 ? C.gain : C.orange}30`
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: step >= 3 ? C.gain : C.orange }}>
          {step === 0 ? 'Focus all resources on the beachhead — "you can\'t be all things to all people"'
            : step < 3 ? `Chain reaction building... ${step + 1} segments reached`
            : `Mass market momentum! ${step + 1} segments conquered through word-of-mouth`}
        </span>
      </div>
    </div>
  )
}

// ----- 1-4c: MVP vs Total Product -----
function MVPvsTotalProduct() {
  const [view, setView] = useState('mvp')

  const mvpFeatures = [
    { name: 'Core Functionality', value: 70, color: C.blue },
    { name: 'Documentation', value: 20, color: C.slate },
    { name: 'Reliability', value: 30, color: C.orange },
    { name: 'Support', value: 10, color: C.purple },
    { name: 'Ecosystem Fit', value: 5, color: C.teal },
  ]

  const totalFeatures = [
    { name: 'Core Functionality', value: 95, color: C.blue },
    { name: 'Documentation', value: 90, color: C.slate },
    { name: 'Reliability', value: 95, color: C.orange },
    { name: 'Support', value: 85, color: C.purple },
    { name: 'Ecosystem Fit', value: 90, color: C.teal },
  ]

  const features = view === 'mvp' ? mvpFeatures : totalFeatures

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>MVP vs. Total Product</p>
      <p style={subStyle}>Compare what early market accepts vs. what mass market demands</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView('mvp')}
          style={{
            flex: 1, padding: '8px', borderRadius: 8, border: 'none', cursor: 'pointer',
            background: view === 'mvp' ? `${C.orange}25` : `${C.orange}08`,
            outline: view === 'mvp' ? `2px solid ${C.orange}` : 'none'
          }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.orange }}>MVP</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Early Market (16%)</div>
        </button>
        <button onClick={() => setView('total')}
          style={{
            flex: 1, padding: '8px', borderRadius: 8, border: 'none', cursor: 'pointer',
            background: view === 'total' ? `${C.gain}25` : `${C.gain}08`,
            outline: view === 'total' ? `2px solid ${C.gain}` : 'none'
          }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.gain }}>Total Product</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Mass Market (84%)</div>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {features.map(f => (
          <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 10, color: 'var(--text-primary)', width: 100, textAlign: 'right', fontWeight: 500 }}>
              {f.name}
            </span>
            <div style={{ flex: 1, height: 20, background: 'var(--bg-secondary)', borderRadius: 6, overflow: 'hidden', position: 'relative' }}>
              <div style={{
                height: '100%', width: `${f.value}%`, borderRadius: 6,
                background: f.color, opacity: 0.7, transition: 'width 0.5s ease'
              }} />
              <span style={{
                position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                fontSize: 9, fontWeight: 700, color: 'var(--text-primary)'
              }}>{f.value}%</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: 'center', padding: '8px 12px', borderRadius: 8, marginTop: 12,
        background: view === 'mvp' ? `${C.orange}10` : `${C.gain}10`,
        border: `1px solid ${view === 'mvp' ? C.orange : C.gain}30`
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: view === 'mvp' ? C.orange : C.gain }}>
          {view === 'mvp'
            ? 'MVP: acceptable for tech-curious explorers, but NOT for crossing the chasm'
            : 'Total Product: polished, reliable, integrated — required for mass market adoption'}
        </span>
      </div>
    </div>
  )
}

// =========================================================================
//  LECTURE 1-5: Prospect Theory (existing)
// =========================================================================

// ===== 1. Prospect Theory Value Function (Interactive) =====
function ProspectValueFunction() {
  const [lambda, setLambda] = useState(2.25)
  const [alpha, setAlpha] = useState(0.88)

  const data = useMemo(() => {
    const pts = []
    for (let x = -100; x <= 100; x += 2) {
      const val = x >= 0
        ? Math.pow(Math.abs(x), alpha)
        : -lambda * Math.pow(Math.abs(x), alpha)
      pts.push({ x, value: Math.round(val * 10) / 10, zero: 0 })
    }
    return pts
  }, [lambda, alpha])

  const comparisonAmount = 50
  const gainVal = Math.pow(comparisonAmount, alpha)
  const lossVal = lambda * Math.pow(comparisonAmount, alpha)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Interactive Value Function</p>
      <p style={subStyle}>Adjust loss aversion (λ) and sensitivity (α) to see how the curve changes</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Loss Aversion (λ): <strong>{lambda.toFixed(2)}</strong>
          <input type="range" min="1" max="4" step="0.05" value={lambda}
            onChange={e => setLambda(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.loss }} />
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Sensitivity (α): <strong>{alpha.toFixed(2)}</strong>
          <input type="range" min="0.3" max="1" step="0.02" value={alpha}
            onChange={e => setAlpha(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.blue }} />
        </label>
      </div>

      <div style={{
        display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap'
      }}>
        <div style={{
          flex: 1, minWidth: 120, padding: '8px 12px', borderRadius: 8,
          background: `${C.gain}15`, border: `1px solid ${C.gain}40`
        }}>
          <div style={{ fontSize: 10, color: C.gain, fontWeight: 600 }}>+${comparisonAmount} Gain</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: C.gain }}>+{gainVal.toFixed(1)}</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>psychological value</div>
        </div>
        <div style={{
          flex: 1, minWidth: 120, padding: '8px 12px', borderRadius: 8,
          background: `${C.loss}15`, border: `1px solid ${C.loss}40`
        }}>
          <div style={{ fontSize: 10, color: C.loss, fontWeight: 600 }}>-${comparisonAmount} Loss</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: C.loss }}>-{lossVal.toFixed(1)}</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>psychological value ({lambda.toFixed(1)}× stronger)</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="x" tick={labelStyle} label={{ value: 'Outcome', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} label={{ value: 'Value', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <ReferenceLine x={0} stroke="var(--text-sec)" strokeWidth={1.5} />
          <ReferenceLine y={0} stroke="var(--text-sec)" strokeWidth={1.5} />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(v, name) => [v.toFixed(1), name === 'value' ? 'Psychological Value' : name]}
            labelFormatter={l => `Outcome: ${l}`}
          />
          <defs>
            <linearGradient id="gainGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.gain} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.gain} stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="lossGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={C.loss} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.loss} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke={C.blue} strokeWidth={2.5}
            fill="url(#gainGrad)" fillOpacity={1} dot={false} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>
        Notice: the curve is steeper for losses (left) than gains (right) — losses loom larger
      </div>
    </div>
  )
}

// ===== 2. Diminishing Sensitivity Demo =====
function DiminishingSensitivity() {
  const [baseAmount, setBaseAmount] = useState(5)
  const [increment, setIncrement] = useState(5)
  const alpha = 0.88

  const data = useMemo(() => {
    const pts = []
    for (let x = 0; x <= 1200; x += 10) {
      pts.push({ x, value: Math.round(Math.pow(x, alpha) * 10) / 10 })
    }
    return pts
  }, [])

  const v1 = Math.pow(baseAmount, alpha)
  const v2 = Math.pow(baseAmount + increment, alpha)
  const diff = v2 - v1
  const pctChange = baseAmount > 0 ? ((diff / v1) * 100).toFixed(1) : '∞'

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Diminishing Sensitivity Explorer</p>
      <p style={subStyle}>Change the base amount to see how the same increment creates different psychological impact</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Base Amount: <strong>${baseAmount}</strong>
          <input type="range" min="0" max="1000" step="5" value={baseAmount}
            onChange={e => setBaseAmount(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.blue }} />
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Increment: <strong>+${increment}</strong>
          <input type="range" min="1" max="50" step="1" value={increment}
            onChange={e => setIncrement(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.orange }} />
        </label>
      </div>

      <div style={{
        display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap'
      }}>
        <div style={{
          flex: 1, minWidth: 100, padding: '8px 12px', borderRadius: 8,
          background: `${C.blue}15`, border: `1px solid ${C.blue}40`
        }}>
          <div style={{ fontSize: 10, color: C.blue, fontWeight: 600 }}>${baseAmount} → ${baseAmount + increment}</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.blue }}>Δ = {diff.toFixed(2)}</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>subjective change ({pctChange}%)</div>
        </div>
        <div style={{
          flex: 1, minWidth: 100, padding: '8px 12px', borderRadius: 8,
          background: `${C.orange}15`, border: `1px solid ${C.orange}40`
        }}>
          <div style={{ fontSize: 10, color: C.orange, fontWeight: 600 }}>$5 → $10 (for comparison)</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.orange }}>Δ = {(Math.pow(10, alpha) - Math.pow(5, alpha)).toFixed(2)}</div>
          <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>subjective change</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="x" tick={labelStyle} label={{ value: 'Objective Value ($)', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} label={{ value: 'Subjective Value', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <ReferenceLine x={baseAmount} stroke={C.blue} strokeDasharray="4 4" label={{ value: `$${baseAmount}`, position: 'top', style: { fontSize: 9, fill: C.blue } }} />
          <ReferenceLine x={baseAmount + increment} stroke={C.orange} strokeDasharray="4 4" label={{ value: `$${baseAmount + increment}`, position: 'top', style: { fontSize: 9, fill: C.orange } }} />
          <Line type="monotone" dataKey="value" stroke={C.blue} strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// ===== 3. Loss Aversion Comparison =====
function LossAversionDemo() {
  const [amount, setAmount] = useState(20)
  const lambda = 2.25
  const alpha = 0.88

  const gainVal = Math.pow(amount, alpha)
  const lossVal = lambda * Math.pow(amount, alpha)

  const data = [
    { name: `Found $${amount}`, value: gainVal, fill: C.gain },
    { name: `Lost $${amount}`, value: -lossVal, fill: C.loss },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Loss Aversion: Feel the Asymmetry</p>
      <p style={subStyle}>Adjust the amount to see how pain always exceeds pleasure</p>

      <label style={{ fontSize: 11, color: 'var(--text-primary)', display: 'block', marginBottom: 12 }}>
        Amount: <strong>${amount}</strong>
        <input type="range" min="1" max="100" step="1" value={amount}
          onChange={e => setAmount(+e.target.value)}
          style={{ display: 'block', width: 200, accentColor: C.purple }} />
      </label>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} domain={[-lossVal * 1.2, gainVal * 1.5]} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: 'var(--text-primary)' }} width={100} />
          <ReferenceLine x={0} stroke="var(--text-sec)" strokeWidth={1.5} />
          <Tooltip contentStyle={tooltipStyle}
            formatter={v => [Math.abs(v).toFixed(1), 'Psychological intensity']} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{
        textAlign: 'center', padding: '8px 12px', borderRadius: 8, marginTop: 8,
        background: `${C.loss}10`, border: `1px solid ${C.loss}30`
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.loss }}>
          Pain is {(lossVal / gainVal).toFixed(1)}× stronger than pleasure
        </span>
        <span style={{ fontSize: 10, color: 'var(--text-sec)', display: 'block' }}>
          This is why "the best product doesn't win — the one that minimizes losses wins"
        </span>
      </div>
    </div>
  )
}

// ===== 4. The 9× Effect Calculator =====
function NineXEffect() {
  const [consumerOverval, setConsumerOverval] = useState(3)
  const [companyOverval, setCompanyOverval] = useState(3)
  const mismatch = consumerOverval * companyOverval

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>The 9× Effect Calculator</p>
      <p style={subStyle}>Adjust overvaluation factors to see the perception mismatch</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)', flex: 1, minWidth: 140 }}>
          Consumer overvalues existing: <strong style={{ color: C.loss }}>{consumerOverval.toFixed(1)}×</strong>
          <input type="range" min="1" max="5" step="0.1" value={consumerOverval}
            onChange={e => setConsumerOverval(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.loss }} />
          <span style={{ fontSize: 9, color: 'var(--text-sec)' }}>Endowment + Loss Aversion</span>
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)', flex: 1, minWidth: 140 }}>
          Company overvalues innovation: <strong style={{ color: C.blue }}>{companyOverval.toFixed(1)}×</strong>
          <input type="range" min="1" max="5" step="0.1" value={companyOverval}
            onChange={e => setCompanyOverval(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.blue }} />
          <span style={{ fontSize: 9, color: 'var(--text-sec)' }}>Endowment + Developer's Curse</span>
        </label>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        padding: '16px', borderRadius: 12,
        background: mismatch > 6 ? `${C.loss}10` : mismatch > 3 ? `${C.orange}10` : `${C.gain}10`,
        border: `2px solid ${mismatch > 6 ? C.loss : mismatch > 3 ? C.orange : C.gain}40`
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: 'var(--text-sec)', fontWeight: 600 }}>PERCEPTION MISMATCH</div>
          <div style={{
            fontSize: 40, fontWeight: 900,
            color: mismatch > 6 ? C.loss : mismatch > 3 ? C.orange : C.gain
          }}>
            {mismatch.toFixed(1)}×
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-sec)' }}>
            {mismatch > 8 ? 'Critical gap — high resistance to adoption' :
             mismatch > 5 ? 'Significant gap — substantial resistance' :
             mismatch > 3 ? 'Moderate gap — some resistance' :
             'Low gap — adoption more likely'}
          </div>
        </div>
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>
        {consumerOverval.toFixed(1)}× (consumer) × {companyOverval.toFixed(1)}× (company) = {mismatch.toFixed(1)}× total mismatch
      </div>
    </div>
  )
}

// =========================================================================
//  MODULE 2: Disruptive Innovation
// =========================================================================

// ----- 2-1a: Disruption Trajectory -----
function DisruptionTrajectory() {
  const [disruptStart, setDisruptStart] = useState(20)
  const [disruptGrowth, setDisruptGrowth] = useState(1.8)

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 100; t += 1) {
      // Sustaining: steady linear improvement
      const sustaining = 30 + t * 0.5
      // Disruptive: starts low, curves upward
      const disrupting = Math.max(
        disruptStart,
        disruptStart + Math.pow(Math.max(0, t - 10), disruptGrowth) * 0.3
      )
      pts.push({
        t,
        sustaining: Math.min(100, Math.round(sustaining * 10) / 10),
        disrupting: Math.min(100, Math.round(disrupting * 10) / 10)
      })
    }
    return pts
  }, [disruptStart, disruptGrowth])

  // Find crossing point
  let crossingPoint = null
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i].sustaining <= data[i].disrupting && data[i + 1].sustaining > data[i + 1].disrupting) {
      crossingPoint = data[i].t
      break
    }
  }

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Sustaining vs Disruptive Trajectories</p>
      <p style={subStyle}>Sustaining improves on existing axis, disruptive creates new trajectory</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Disruptive Starting Point: <strong>{disruptStart}</strong>
          <input type="range" min="5" max="40" step="1" value={disruptStart}
            onChange={e => setDisruptStart(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.orange }} />
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Disruption Growth Rate: <strong>{disruptGrowth.toFixed(2)}</strong>
          <input type="range" min="1.2" max="2.5" step="0.05" value={disruptGrowth}
            onChange={e => setDisruptGrowth(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.orange }} />
        </label>
      </div>

      {crossingPoint && (
        <div style={{
          padding: '8px 12px', borderRadius: 8, marginBottom: 12,
          background: `${C.orange}12`, border: `1px solid ${C.orange}30`
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.orange }}>
            Crossing Point: t={crossingPoint} — Disruption now exceeds sustaining on traditional metrics
          </span>
        </div>
      )}

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} label={{ value: 'Time', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} domain={[0, 105]} label={{ value: 'Performance', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Line type="monotone" dataKey="sustaining" name="Sustaining" stroke={C.blue} strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="disrupting" name="Disruptive" stroke={C.orange} strokeWidth={2.5} dot={false} strokeDasharray="5 5" />
          {crossingPoint && <ReferenceLine x={crossingPoint} stroke={C.purple} strokeDasharray="4 4" label={{ value: 'Crossing', position: 'top', style: { fontSize: 9, fill: C.purple } }} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 2-2a: Disruption Timeline -----
function DisruptionTimeline() {
  const data = [
    { era: 'Telegraph\nRise', year: 1844, telegraph: 10, telephone: 0, color: C.blue },
    { era: '1880s', year: 1880, telegraph: 80, telephone: 5, color: C.blue },
    { era: '1900s', year: 1900, telegraph: 85, telephone: 20, color: C.blue },
    { era: '1920s', year: 1920, telegraph: 75, telephone: 50, color: C.blue },
    { era: '1940', year: 1940, telegraph: 40, telephone: 85, color: C.orange },
    { era: '1960s', year: 1960, telegraph: 20, telephone: 95, color: C.orange },
    { era: '2000', year: 2000, telegraph: 1, telephone: 99, color: C.orange },
    { era: 'Last\nTelegram\n2013', year: 2013, telegraph: 0, telephone: 100, color: C.orange },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Telegraph vs Telephone: Long Coexistence</p>
      <p style={subStyle}>Disruption took 136 years — markets coexisted for a century</p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="era" tick={{ fontSize: 9 }} angle={-15} textAnchor="end" height={60} />
          <YAxis tick={labelStyle} label={{ value: '% Usage', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="telegraph" stackId="a" fill={C.blue} name="Telegraph" />
          <Bar dataKey="telephone" stackId="a" fill={C.orange} name="Telephone" />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ marginTop: 12, fontSize: 10, color: 'var(--text-sec)', textAlign: 'center' }}>
        <span style={{ fontWeight: 600 }}>Key insight:</span> Western Union (1844) didn't disappear. Markets coexisted. Disruption is a process, not an event.
      </div>
    </div>
  )
}

// ----- 2-3a: Cannibalization Dilemma -----
function CannibalizationDilemma() {
  const [digitalInvest, setDigitalInvest] = useState(30)

  const filmRevenueLost = (digitalInvest / 100) * 100
  const digitalRevenueGained = Math.pow(digitalInvest / 100, 1.5) * 80

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Kodak\'s Cannibalization Dilemma</p>
      <p style={subStyle}>The tradeoff: short-term pain (film revenue lost) vs. long-term gain (digital growth)</p>

      <label style={{ fontSize: 11, color: 'var(--text-primary)', display: 'block', marginBottom: 16 }}>
        Digital Investment: <strong style={{ fontSize: 13 }}>{digitalInvest}%</strong>
        <input type="range" min="0" max="100" step="5" value={digitalInvest}
          onChange={e => setDigitalInvest(+e.target.value)}
          style={{ display: 'block', width: '100%', accentColor: C.orange, marginTop: 4 }} />
      </label>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={[
          { label: 'Film Loss', value: filmRevenueLost, fill: C.loss, name: 'Revenue Lost' },
          { label: 'Digital Gain', value: digitalRevenueGained, fill: C.gain, name: 'Revenue Gained' }
        ]} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} />
          <YAxis type="category" dataKey="label" tick={{ fontSize: 10, fill: 'var(--text-primary)' }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => `$${Math.round(v)}M`} />
          <Bar dataKey="value" radius={[0, 8, 8, 0]}>
            {[{ label: 'Film Loss', fill: C.loss }, { label: 'Digital Gain', fill: C.gain }].map((item, i) => (
              <Cell key={i} fill={item.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{
        marginTop: 12, padding: '8px 12px', borderRadius: 8,
        background: digitalInvest < 30 ? `${C.loss}12` : digitalInvest < 70 ? `${C.orange}12` : `${C.gain}12`,
        border: `1px solid ${digitalInvest < 30 ? C.loss : digitalInvest < 70 ? C.orange : C.gain}30`
      }}>
        <span style={{ fontSize: 10, color: 'var(--text-sec)' }}>
          At {digitalInvest}% digital investment: Film revenue loss = ${Math.round(filmRevenueLost)}M, Digital gain = ${Math.round(digitalRevenueGained)}M
          {digitalInvest < 50 && ' — short-term pain without long-term gain'}
          {digitalInvest >= 50 && ' — beginning to offset losses'}
          {digitalInvest >= 80 && ' — long-term gain exceeds short-term pain'}
        </span>
      </div>
    </div>
  )
}

// ----- 2-4a: Innovation Framework -----
function InnovationFramework() {
  const [activeComponent, setActiveComponent] = useState(null)

  const components = [
    {
      name: 'Leadership',
      color: C.blue,
      desc: 'Clear vision, risk tolerance, resource commitment to innovation goals. Must signal that innovation matters.'
    },
    {
      name: 'Structure',
      color: C.orange,
      desc: 'How people are organized, reporting lines, decision rights. Misaligned structure kills innovation intent.'
    },
    {
      name: 'Culture',
      color: C.purple,
      desc: 'Values, norms, how decisions are made, risk tolerance. Strong culture can be advantage or trap.'
    },
    {
      name: 'Resources',
      color: C.gain,
      desc: 'Money, people, equipment allocated to innovation. Must be protected, not consumed by core business.'
    },
    {
      name: 'Processes',
      color: C.teal,
      desc: 'Workflows, decision-making, approval processes. Innovation requires different processes than core business.'
    }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Holistic Innovation Framework</p>
      <p style={subStyle}>All 5 components must align for successful innovation</p>

      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {components.map(comp => (
          <button key={comp.name}
            onClick={() => setActiveComponent(activeComponent === comp.name ? null : comp.name)}
            style={{
              flex: 1, minWidth: 70, padding: '8px 6px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeComponent === comp.name ? `${comp.color}25` : `${comp.color}10`,
              outline: activeComponent === comp.name ? `2px solid ${comp.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: comp.color }}>{comp.name}</div>
          </button>
        ))}
      </div>

      {activeComponent && (
        <div style={{
          padding: '12px 14px', borderRadius: 8, marginBottom: 12,
          background: `${components.find(c => c.name === activeComponent)?.color}10`,
          border: `1px solid ${components.find(c => c.name === activeComponent)?.color}30`
        }}>
          <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>
            {components.find(c => c.name === activeComponent)?.desc}
          </span>
        </div>
      )}

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
        padding: '12px', borderRadius: 8, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)'
      }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-primary)' }}>
          Organizational Evolution:
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-sec)' }}>
          Resources → Processes → Structure → Culture
        </div>
        <div style={{ fontSize: 9, color: 'var(--text-sec)', gridColumn: '1 / -1' }}>
          Each stage builds on prior, but creates rigidity. Innovation requires breaking this sequence.
        </div>
      </div>
    </div>
  )
}

// ----- 2-5a: Retail Evolution -----
function RetailEvolution() {
  const formats = [
    { name: 'Department Store', margin: 40, turnover: 3, color: C.blue },
    { name: 'Discount Chain', margin: 23, turnover: 5, color: C.orange },
    { name: 'Online', margin: 5, turnover: 25, color: C.gain }
  ]

  const data = formats.map(f => ({
    name: f.name,
    'Gross Margin %': f.margin,
    'Inventory Turnover': f.turnover,
    'ROI (M×T)': Math.round(f.margin * f.turnover * 10) / 10,
    color: f.color
  }))

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Retail Evolution: Economics Unchanged</p>
      <p style={subStyle}>Different formats, different margin/turnover, same economic outcome</p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" angle={-15} textAnchor="end" height={60} tick={{ fontSize: 9 }} />
          <YAxis tick={labelStyle} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="Gross Margin %" fill={C.blue} />
          <Bar dataKey="Inventory Turnover" fill={C.orange} />
          <Bar dataKey="ROI (M×T)" fill={C.purple} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ marginTop: 12, fontSize: 9, color: 'var(--text-sec)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {data.map(d => (
          <div key={d.name} style={{
            flex: 1, minWidth: 100, padding: '8px 10px', borderRadius: 6,
            background: `${d.color}10`, border: `1px solid ${d.color}30`
          }}>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{d.name}</div>
            <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>
              {d['Gross Margin %']}% margin × {d['Inventory Turnover']} turns = {d['ROI (M×T)']}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- 2-6a: IBM Timeline -----
function IBMTimeline() {
  const [activeEra, setActiveEra] = useState(null)

  const eras = [
    {
      name: 'Origins',
      period: '1911-1950',
      desc: 'Founded as CTR (1911), renamed IBM (1924). Thomas Watson Sr. built customer relationships, brand trust, reliable solutions. DNA: customer-centric.',
      color: C.blue
    },
    {
      name: 'First Disruption',
      period: '1950s-1960s',
      desc: 'Electromechanical → Electronic. IBM 701 (1952), IBM 1401 (1959), IBM 360 (1964). Used customer relationships to dominate mainframes. Univac had tech; IBM had customers.',
      color: C.orange
    },
    {
      name: 'Second Disruption',
      period: '1980s',
      desc: 'Mainframes → PCs. Three moves: Boca Raton autonomous lab, outsource Intel/Microsoft, retail distribution. IBM PC (1981) dominated.',
      color: C.purple
    },
    {
      name: 'Commoditization Trap',
      period: '1990s',
      desc: 'PC margins eroded. Intel captured CPU value, Microsoft captured OS value. IBM competing on commoditized hardware.',
      color: C.pink
    },
    {
      name: 'Third Disruption',
      period: '1990s-2000s',
      desc: 'Hardware → Software & Services. Acquired Rational Software (business software), PwC Consulting ($30B). Shifted to solving customer problems, not selling boxes.',
      color: C.gain
    }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>IBM\'s Three Discontinuities</p>
      <p style={subStyle}>Strategic renewal through willingness to cannibalize and separate structures</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {eras.map(era => (
          <button key={era.name}
            onClick={() => setActiveEra(activeEra === era.name ? null : era.name)}
            style={{
              textAlign: 'left', padding: '10px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeEra === era.name ? `${era.color}20` : `${era.color}08`,
              outline: activeEra === era.name ? `2px solid ${era.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 4, height: 16, borderRadius: 2, background: era.color }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>{era.name}</div>
                <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>{era.period}</div>
              </div>
            </div>
            {activeEra === era.name && (
              <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 8, paddingTop: 8, borderTop: `1px solid ${era.color}30` }}>
                {era.desc}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// =========================================================================
//  MODULE 3: Markets for Technology, Open Innovation, Vertical Integration
// =========================================================================

// ----- M3-1a: Open vs Closed Innovation -----
function OpenVsClosedInnovation() {
  const [activeModel, setActiveModel] = useState('Closed Innovation')

  const models = [
    {
      name: 'Closed Innovation',
      color: C.orange,
      desc: 'Ideas flow only within company. Internal R&D develops, tests, and brings to market.',
      pros: ['Strong IP protection', 'Faster decision-making', 'Full value capture'],
      cons: ['Higher R&D costs', 'Slower to market', 'Missed external ideas'],
      metrics: [
        { label: 'Speed', value: 2 },
        { label: 'Cost Efficiency', value: 2 },
        { label: 'Innovation Breadth', value: 2 },
        { label: 'IP Control', value: 5 },
      ]
    },
    {
      name: 'Open Innovation',
      color: C.blue,
      desc: 'Ideas flow in AND out. Partner with external sources, share development, license innovations.',
      pros: ['Lower R&D costs', 'Access to external talent', 'Multiple revenue streams'],
      cons: ['IP fragmentation', 'Complex partnerships', 'Knowledge spillover risk'],
      metrics: [
        { label: 'Speed', value: 5 },
        { label: 'Cost Efficiency', value: 4 },
        { label: 'Innovation Breadth', value: 5 },
        { label: 'IP Control', value: 2 },
      ]
    }
  ]

  const active = models.find(m => m.name === activeModel)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Open vs Closed Innovation Models</p>
      <p style={subStyle}>How ideas flow differently in closed vs open ecosystems</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {models.map(m => (
          <button key={m.name}
            onClick={() => setActiveModel(m.name)}
            style={{
              flex: 1, padding: '8px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeModel === m.name ? `${m.color}25` : `${m.color}08`,
              outline: activeModel === m.name ? `2px solid ${m.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: m.color }}>{m.name}</div>
          </button>
        ))}
      </div>

      {active && (
        <>
          <div style={{
            padding: '10px 12px', borderRadius: 8, marginBottom: 12,
            background: `${active.color}10`, border: `1px solid ${active.color}30`
          }}>
            <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>{active.desc}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <div style={{ ...headingStyle, fontSize: 11, marginBottom: 6 }}>Strengths</div>
              <ul style={{ fontSize: 10, margin: 0, paddingLeft: 16, color: 'var(--text-primary)' }}>
                {active.pros.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div>
              <div style={{ ...headingStyle, fontSize: 11, marginBottom: 6 }}>Challenges</div>
              <ul style={{ fontSize: 10, margin: 0, paddingLeft: 16, color: 'var(--text-primary)' }}>
                {active.cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>

          <div style={{
            padding: '10px 12px', borderRadius: 8, background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
              Key Metrics
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, fontSize: 9 }}>
              {active.metrics.map(m => (
                <div key={m.label} style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-sec)', marginBottom: 4 }}>{m.label}</div>
                  <div style={{
                    height: '4px', background: 'var(--border-color)', borderRadius: 2, marginBottom: 4,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%', width: `${(m.value / 5) * 100}%`, background: active.color,
                      borderRadius: 2, transition: 'width 0.3s'
                    }} />
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{m.value}/5</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ----- M3-2a: Technology Market Flow -----
function TechnologyMarketFlow() {
  const [activeType, setActiveType] = useState('examples')

  const examples = [
    { name: 'ARM', revenue: 65, desc: 'CPU design licensing' },
    { name: 'Qualcomm', revenue: 80, desc: 'Patent licensing' },
    { name: 'IBM', revenue: 55, desc: 'Patent portfolio licensing' },
    { name: 'Dolby', revenue: 45, desc: 'Audio/visual technology' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Technology Market Flow</p>
      <p style={subStyle}>How technology is licensed and monetized separate from end products</p>

      <div style={{
        padding: '10px 12px', borderRadius: 8, marginBottom: 12,
        background: `${C.purple}10`, border: `1px solid ${C.purple}30`
      }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.purple, marginBottom: 6 }}>Flow Path</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
          Innovator → (Patent/License) → Technology Market → (License/Acquire) → Commercializer → Product Market → Consumer
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <div style={{ ...headingStyle, fontSize: 11, marginBottom: 8 }}>Annual Licensing Revenue Examples</div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={examples} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis type="number" tick={labelStyle} label={{ value: '$ Millions', position: 'insideBottomRight', offset: -5, style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-primary)' }} />
            <Tooltip contentStyle={tooltipStyle} formatter={v => `$${Math.round(v)}M`} />
            <Bar dataKey="revenue" radius={[0, 8, 8, 0]} fill={C.purple} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        padding: '8px 12px', borderRadius: 8, background: `${C.gain}10`,
        border: `1px solid ${C.gain}30`, fontSize: 10, color: 'var(--text-primary)'
      }}>
        <strong>Key Insight:</strong> Companies can profit by licensing technology without manufacturing products, enabling faster market entry and lower capital requirements for commercializers.
      </div>
    </div>
  )
}

// ----- M3-3a: Value Chain Explorer -----
function ValueChainExplorer() {
  const [integrationLevel, setIntegrationLevel] = useState(50)

  const activities = [
    { name: 'R&D', desc: 'Research & Development' },
    { name: 'Design', desc: 'Product Design' },
    { name: 'Manufacturing', desc: 'Production' },
    { name: 'Marketing', desc: 'Sales & Marketing' },
    { name: 'Distribution', desc: 'Logistics' },
    { name: 'Retail', desc: 'Customer Interface' }
  ]

  const isInhouse = (idx) => {
    const threshold = 50 + (idx - 2.5) * 15
    return integrationLevel > threshold
  }

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Value Chain Integration Explorer</p>
      <p style={subStyle}>Adjust the slider to see how firms choose what to do in-house vs outsource</p>

      <label style={{ fontSize: 11, color: 'var(--text-primary)', display: 'block', marginBottom: 16 }}>
        Integration Level: <strong>{integrationLevel}%</strong>
        <input type="range" min="0" max="100" step="5" value={integrationLevel}
          onChange={e => setIntegrationLevel(+e.target.value)}
          style={{ display: 'block', width: '100%', accentColor: C.teal, marginTop: 4 }} />
      </label>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: 6, marginBottom: 12,
        padding: '10px', borderRadius: 8, background: 'var(--bg-secondary)'
      }}>
        {activities.map((act, idx) => (
          <div key={act.name} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 60, fontSize: 10, fontWeight: 600, color: 'var(--text-primary)' }}>{act.name}</div>
            <div style={{
              flex: 1, height: 24, background: isInhouse(idx) ? `${C.teal}30` : `${C.slate}15`,
              border: `1px solid ${isInhouse(idx) ? C.teal : C.slate}`,
              borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 6
            }}>
              <span style={{ fontSize: 9, color: 'var(--text-primary)', fontWeight: 600 }}>
                {isInhouse(idx) ? 'In-House' : 'Outsourced'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '8px 12px', borderRadius: 8, background: `${C.orange}10`,
        border: `1px solid ${C.orange}30`, fontSize: 9, color: 'var(--text-primary)'
      }}>
        <strong>Example:</strong> Big Pharma: In-house R&D, Design, Manufacturing. Specialized Biotech: In-house R&D, outsource everything else.
      </div>
    </div>
  )
}

// ----- M3-4a: Apple vs Samsung -----
function AppleVsSamsung() {
  const activities = [
    { name: 'CPU Design', apple: 'In-House', samsung: 'In-House', critical: true },
    { name: 'OS', apple: 'In-House', samsung: 'In-House', critical: true },
    { name: 'Hardware Design', apple: 'In-House', samsung: 'In-House', critical: false },
    { name: 'Memory/Display', apple: 'Partner', samsung: 'In-House', critical: false },
    { name: 'Chip Manufacturing', apple: 'TSMC', samsung: 'Samsung Foundry', critical: true },
    { name: 'Assembly', apple: 'Foxconn', samsung: 'Samsung Electro-Mechanics', critical: false },
    { name: 'Retail', apple: 'Apple Stores', samsung: 'Partner Retailers', critical: false }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Apple vs Samsung: Strategic Choices</p>
      <p style={subStyle}>Different approaches to the same value chain</p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%', borderCollapse: 'collapse', fontSize: 10,
          background: 'var(--bg-secondary)', borderRadius: 8, overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: 700, color: 'var(--text-primary)' }}>Activity</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: 700, color: C.blue }}>Apple</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: 700, color: C.orange }}>Samsung</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act, i) => (
              <tr key={act.name} style={{
                borderBottom: '1px solid var(--border-color)',
                background: act.critical ? 'var(--bg-card)' : 'transparent'
              }}>
                <td style={{
                  padding: '8px', color: 'var(--text-primary)',
                  fontWeight: act.critical ? 700 : 600
                }}>
                  {act.name}
                  {act.critical && <span style={{ color: C.rose, marginLeft: 4 }}>★</span>}
                </td>
                <td style={{ padding: '8px', color: C.blue }}>{act.apple}</td>
                <td style={{ padding: '8px', color: C.orange }}>{act.samsung}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
        marginTop: 12, padding: '8px 12px', borderRadius: 8,
        background: `${C.rose}10`, border: `1px solid ${C.rose}30`, fontSize: 9, color: 'var(--text-primary)'
      }}>
        <strong>★ Critical Difference:</strong> Apple owns iOS (vertical integration of software). Samsung makes Android phones but doesn't control the OS. This explains Apple's margin advantage and ecosystem lock-in.
      </div>
    </div>
  )
}

// ----- M3-5a: Value Capture Mechanisms -----
function ValueCaptureMechanisms() {
  const [expanded, setExpanded] = useState(null)

  const mechanisms = [
    {
      category: 'Legal Mechanisms',
      items: [
        { name: 'Patents', desc: 'Exclusive right to make/sell for 20 years. Works best for discrete innovations.' },
        { name: 'Copyrights', desc: 'Protect creative works like software, music, movies. Automatic protection.' },
        { name: 'Trade Secrets', desc: 'Keep key info confidential (e.g., Coca-Cola formula). No time limit.' },
        { name: 'NDAs', desc: 'Contractual protection for shared information during partnerships.' },
        { name: 'Licensing', desc: 'Control who can use your IP and on what terms. Generate revenue.' }
      ],
      color: C.blue
    },
    {
      category: 'Strategic Mechanisms',
      items: [
        { name: 'First-Mover Advantage', desc: 'Get to market first, build brand, lock in customers before competitors.' },
        { name: 'Brand', desc: 'Customer loyalty and premium pricing power. Valuable intangible asset.' },
        { name: 'Competencies', desc: 'Hard-to-replicate skills and knowledge. Build over time.' },
        { name: 'Complementary Assets', desc: 'Need distribution, manufacturing, or other assets. Creates barriers to entry.' },
        { name: 'Network Effects', desc: 'Product value increases as more users adopt. Self-reinforcing advantage.' }
      ],
      color: C.purple
    }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Value Capture Mechanisms</p>
      <p style={subStyle}>How firms protect profits from innovation</p>

      {mechanisms.map((mech, catIdx) => (
        <div key={mech.category} style={{ marginBottom: 12 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: mech.color, marginBottom: 6,
            paddingBottom: 4, borderBottom: `2px solid ${mech.color}40`
          }}>
            {mech.category}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 4 }}>
            {mech.items.map((item, itemIdx) => (
              <button key={item.name}
                onClick={() => setExpanded(expanded === `${catIdx}-${itemIdx}` ? null : `${catIdx}-${itemIdx}`)}
                style={{
                  padding: '8px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                  background: expanded === `${catIdx}-${itemIdx}` ? `${mech.color}20` : `${mech.color}08`,
                  textAlign: 'left', transition: 'all 0.2s'
                }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: mech.color }}>{item.name}</div>
                {expanded === `${catIdx}-${itemIdx}` && (
                  <div style={{ fontSize: 9, color: 'var(--text-primary)', marginTop: 6, paddingTop: 6, borderTop: `1px solid ${mech.color}30` }}>
                    {item.desc}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ----- M3-6a: IP Economics -----
function IPEconomics() {
  const [rdInvestment, setRdInvestment] = useState(100)
  const [unitsSold, setUnitsSold] = useState(50)

  const examples = [
    { name: 'Windows', rd: 100, marginal: 0 },
    { name: 'Apple Silicon', rd: 100, marginal: 45 },
    { name: 'Pharmaceutical', rd: 200, marginal: 10 }
  ]

  const costPerUnit = (rdInvestment / unitsSold) + 10
  const data = [
    { units: 10, fixedCost: rdInvestment / 10 + 10, marginalCost: 10 },
    { units: 25, fixedCost: rdInvestment / 25 + 10, marginalCost: 10 },
    { units: unitsSold, fixedCost: rdInvestment / unitsSold + 10, marginalCost: 10 },
    { units: 100, fixedCost: rdInvestment / 100 + 10, marginalCost: 10 }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>IP Economics: R&D Investment vs Scale</p>
      <p style={subStyle}>More units sold → lower cost per unit → better value capture</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          R&D Investment: <strong>${rdInvestment}M</strong>
          <input type="range" min="50" max="300" step="50" value={rdInvestment}
            onChange={e => setRdInvestment(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.blue, marginTop: 4 }} />
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Units Sold: <strong>{unitsSold}M</strong>
          <input type="range" min="10" max="200" step="10" value={unitsSold}
            onChange={e => setUnitsSold(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.purple, marginTop: 4 }} />
        </label>
      </div>

      <div style={{
        padding: '10px 12px', borderRadius: 8, marginBottom: 12,
        background: `${C.gain}10`, border: `1px solid ${C.gain}30`
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.gain, marginBottom: 4 }}>Cost Per Unit</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>
          ${Math.round(costPerUnit * 100) / 100}
        </div>
        <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 4 }}>
          = (R&D ${rdInvestment}M ÷ {unitsSold}M units) + Marginal cost $10
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={examples} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" tick={labelStyle} />
          <YAxis tick={labelStyle} label={{ value: 'Cost $M', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => `$${Math.round(v)}M`} />
          <Bar dataKey="rd" name="R&D" stackId="a" fill={C.blue} />
          <Bar dataKey="marginal" name="Marginal/Unit" stackId="a" fill={C.slate} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- M3-7a: Discrete vs Complex Patents -----
function DiscreteVsComplex() {
  const [activeType, setActiveType] = useState('discrete')

  const types = [
    {
      name: 'Discrete',
      example: 'New Drug (e.g., Lipitor)',
      patents: 1,
      owners: 1,
      litigation: 'Low',
      effectiveness: 'Very High',
      desc: 'One patent = one innovation. Clear ownership. Works until patent expires.'
    },
    {
      name: 'Complex',
      example: 'Smartphone (e.g., iPhone)',
      patents: 250,
      owners: 15,
      litigation: 'Very High',
      effectiveness: 'Moderate',
      desc: 'Many patents from different companies. Patent thicket. Licensing required from many parties.'
    }
  ]

  const active = types.find(t => t.name === activeType)

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Discrete vs Complex Technology Patent Landscapes</p>
      <p style={subStyle}>Different industries face different IP challenges</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {types.map(t => (
          <button key={t.name}
            onClick={() => setActiveType(t.name)}
            style={{
              flex: 1, padding: '8px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeType === t.name ? `${C.indigo}25` : `${C.indigo}08`,
              outline: activeType === t.name ? `2px solid ${C.indigo}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.indigo }}>{t.name}</div>
            <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>({t.example})</div>
          </button>
        ))}
      </div>

      {active && (
        <>
          <div style={{
            padding: '10px 12px', borderRadius: 8, marginBottom: 12,
            background: `${C.indigo}10`, border: `1px solid ${C.indigo}30`
          }}>
            <span style={{ fontSize: 11, color: 'var(--text-primary)' }}>{active.desc}</span>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '12px', borderRadius: 8,
            background: 'var(--bg-secondary)', border: '1px solid var(--border-color)'
          }}>
            <div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 4 }}>Patents Involved</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{active.patents}</div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 4 }}>Unique Patent Owners</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{active.owners}</div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 4 }}>Litigation Risk</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: activeType === 'discrete' ? C.gain : C.loss }}>
                {active.litigation}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: 'var(--text-sec)', marginBottom: 4 }}>IP Protection Effectiveness</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: activeType === 'discrete' ? C.gain : C.orange }}>
                {active.effectiveness}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ----- M3-8a: Tech vs Product Market Decision -----
function TechVsProductMarket() {
  const [breadth, setBreadth] = useState(50)
  const [integrationCost, setIntegrationCost] = useState(50)
  const [specializedAssets, setSpecializedAssets] = useState(50)

  const recommendTechMarket = (breadth > 60 && integrationCost > 60) || specializedAssets > 70
  const recommendation = recommendTechMarket ? 'Technology Market (License)' : 'Product Market (Integrate)'

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Tech Market vs Product Market Strategy</p>
      <p style={subStyle}>Choose licensing or integration based on your competitive position</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginBottom: 16 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Breadth of Applications: <strong>{breadth}</strong>
          <input type="range" min="0" max="100" step="10" value={breadth}
            onChange={e => setBreadth(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.blue, marginTop: 4 }} />
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>
            {breadth < 40 ? 'Narrow - specialized use cases' : breadth > 60 ? 'Broad - multiple industries' : 'Moderate - several applications'}
          </div>
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Cost to Integrate: <strong>{integrationCost}</strong>
          <input type="range" min="0" max="100" step="10" value={integrationCost}
            onChange={e => setIntegrationCost(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.purple, marginTop: 4 }} />
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>
            {integrationCost < 40 ? 'Low - easy to commercialize' : integrationCost > 60 ? 'High - expensive integration' : 'Moderate - requires investment'}
          </div>
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Specialized Assets Needed: <strong>{specializedAssets}</strong>
          <input type="range" min="0" max="100" step="10" value={specializedAssets}
            onChange={e => setSpecializedAssets(+e.target.value)}
            style={{ display: 'block', width: '100%', accentColor: C.orange, marginTop: 4 }} />
          <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 2 }}>
            {specializedAssets < 40 ? 'Few - general capabilities' : specializedAssets > 60 ? 'Many - unique competencies required' : 'Some - specialized resources'}
          </div>
        </label>
      </div>

      <div style={{
        padding: '12px', borderRadius: 8, marginBottom: 12,
        background: recommendTechMarket ? `${C.blue}15` : `${C.gain}15`,
        border: `2px solid ${recommendTechMarket ? C.blue : C.gain}`
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: recommendTechMarket ? C.blue : C.gain, marginBottom: 4 }}>
          Recommended Strategy
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
          {recommendation}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-sec)' }}>
          {recommendTechMarket
            ? 'Your technology has broad applications or integration is expensive. License to others and capture value through licensing revenue.'
            : 'Your technology has focused applications and you can integrate. Forward integrate to compete directly and capture full value chain.'}
        </div>
      </div>

      <div style={{
        padding: '10px 12px', borderRadius: 8,
        background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', fontSize: 9, color: 'var(--text-primary)'
      }}>
        <strong>Example:</strong> ARM chose technology market (broad processor applications, expensive to manufacture). Apple chose product market (integrated design and manufacturing for differentiation).
      </div>
    </div>
  )
}

// ----- M3-9a: Moderna vs BioNTech -----
function ModernaVsBiontech() {
  const strategies = [
    {
      company: 'Moderna',
      founded: 2010,
      capital: '$2.7B',
      approach: 'Vertical Integration',
      outcome: 'Developed COVID vaccine independently',
      timeline: [
        { year: 2010, event: 'Founded' },
        { year: 2013, event: 'Series A funding' },
        { year: 2018, event: 'Went public' },
        { year: 2020, event: 'COVID vaccine development' },
        { year: 2023, event: 'Independent manufacturing' }
      ],
      color: C.blue
    },
    {
      company: 'BioNTech',
      founded: 2008,
      capital: '$1.3B',
      approach: 'Partnership Model',
      outcome: 'COVID vaccine via Pfizer partnership',
      timeline: [
        { year: 2008, event: 'Founded' },
        { year: 2020, event: 'Pfizer partnership announced' },
        { year: 2020, event: 'Rapid vaccine development' },
        { year: 2021, event: 'FDA approval' },
        { year: 2023, event: 'Pfizer manufactures' }
      ],
      color: C.purple
    }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Moderna vs BioNTech: Different Paths to Success</p>
      <p style={subStyle}>Integration vs Partnership in the race for COVID vaccines</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {strategies.map(strat => (
          <div key={strat.company} style={{
            padding: '12px', borderRadius: 8, background: `${strat.color}10`,
            border: `2px solid ${strat.color}`
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: strat.color, marginBottom: 8 }}>
              {strat.company}
            </div>
            <div style={{ fontSize: 10, marginBottom: 8, color: 'var(--text-primary)' }}>
              <div><strong>Founded:</strong> {strat.founded}</div>
              <div><strong>Capital Raised:</strong> {strat.capital}</div>
              <div><strong>Strategy:</strong> {strat.approach}</div>
              <div style={{ marginTop: 6, color: 'var(--text-sec)' }}>{strat.outcome}</div>
            </div>
            <div style={{
              padding: '8px', borderRadius: 6, background: 'var(--bg-card)',
              border: `1px solid ${strat.color}30`, fontSize: 9
            }}>
              {strat.timeline.map((t, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 8, paddingBottom: i < strat.timeline.length - 1 ? 6 : 0,
                  borderBottom: i < strat.timeline.length - 1 ? `1px solid ${strat.color}15` : 'none',
                  marginBottom: i < strat.timeline.length - 1 ? 6 : 0
                }}>
                  <div style={{ fontWeight: 700, color: strat.color, minWidth: 28 }}>{t.year}</div>
                  <div style={{ color: 'var(--text-sec)' }}>{t.event}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----- M3-10a: Module 3 Concept Map -----
function Module3ConceptMap() {
  const [highlighted, setHighlighted] = useState(null)

  const concepts = [
    { id: 'open-innovation', label: 'Open Innovation', color: C.purple, x: 50, y: 20 },
    { id: 'tech-market', label: 'Markets for Tech', color: C.blue, x: 80, y: 35 },
    { id: 'vertical-integration', label: 'Vertical Integration', color: C.orange, x: 20, y: 35 },
    { id: 'ip-patents', label: 'IP & Patents', color: C.rose, x: 15, y: 65 },
    { id: 'make-buy-sell', label: 'Make/Buy/Sell', color: C.teal, x: 85, y: 65 },
    { id: 'value-chain', label: 'Value Chain', color: C.emerald, x: 50, y: 80 }
  ]

  const connections = [
    { from: 'open-innovation', to: 'tech-market' },
    { from: 'open-innovation', to: 'value-chain' },
    { from: 'tech-market', to: 'make-buy-sell' },
    { from: 'vertical-integration', to: 'value-chain' },
    { from: 'ip-patents', to: 'open-innovation' },
    { from: 'ip-patents', to: 'tech-market' },
    { from: 'make-buy-sell', to: 'value-chain' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 3 Concept Map</p>
      <p style={subStyle}>How innovation strategy concepts connect</p>

      <div style={{
        position: 'relative', width: '100%', height: 300, background: 'var(--bg-secondary)',
        borderRadius: 8, border: '1px solid var(--border-color)', marginBottom: 12,
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'
      }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {connections.map((conn, i) => {
            const from = concepts.find(c => c.id === conn.from)
            const to = concepts.find(c => c.id === conn.to)
            if (!from || !to) return null
            const x1 = (from.x / 100) * 400
            const y1 = (from.y / 100) * 300
            const x2 = (to.x / 100) * 400
            const y2 = (to.y / 100) * 300
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={highlighted === conn.from || highlighted === conn.to ? C.blue : 'var(--border-color)'}
                strokeWidth={highlighted === conn.from || highlighted === conn.to ? 2 : 1}
                opacity={highlighted === null || highlighted === conn.from || highlighted === conn.to ? 1 : 0.2}
                style={{ transition: 'all 0.2s' }} />
            )
          })}
        </svg>
        {concepts.map(concept => (
          <button key={concept.id}
            onMouseEnter={() => setHighlighted(concept.id)}
            onMouseLeave={() => setHighlighted(null)}
            style={{
              position: 'absolute',
              left: `${concept.x}%`,
              top: `${concept.y}%`,
              transform: 'translate(-50%, -50%)',
              padding: '8px 12px', borderRadius: 20, border: 'none', cursor: 'pointer',
              background: highlighted === concept.id ? `${concept.color}` : `${concept.color}30`,
              color: highlighted === concept.id ? 'white' : concept.color,
              fontWeight: 700, fontSize: 9, textAlign: 'center', maxWidth: 80,
              whiteSpace: 'normal', transition: 'all 0.2s',
              boxShadow: highlighted === concept.id ? `0 4px 12px ${concept.color}40` : 'none'
            }}>
            {concept.label}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6, fontSize: 9
      }}>
        {concepts.map(c => (
          <div key={c.id} style={{
            padding: '6px 8px', borderRadius: 6,
            background: `${c.color}15`, border: `1px solid ${c.color}40`,
            color: 'var(--text-primary)'
          }}>
            <strong style={{ color: c.color }}>{c.label}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

// =========================================================================
//  NEW INTERACTIVE COMPONENTS — Filling gaps across all lectures
// =========================================================================

// ----- 1-1: Three Key Drivers Feedback Loop -----
function InnovationDriversLoop() {
  const [activeDriver, setActiveDriver] = useState(null)

  const drivers = [
    {
      name: 'Technology Advance',
      color: C.blue,
      desc: 'How fast the underlying technology improves performance. Drives down from fundamental R&D, experimentation, and breakthroughs.',
      next: 'Firms Enter'
    },
    {
      name: 'Firms Enter',
      color: C.orange,
      desc: 'Companies decide to invest and enter the market based on technology maturity. More entrants accelerate development and build infrastructure.',
      next: 'Customers Adopt'
    },
    {
      name: 'Customers Adopt',
      color: C.gain,
      desc: 'Consumers adopt based on product quality, price, and ecosystem readiness. Adoption creates demand that attracts more firms and R&D investment.',
      next: 'Technology Advance'
    }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Innovation Life Cycle: Feedback Loop</p>
      <p style={subStyle}>Three interconnected drivers form a self-reinforcing cycle</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {drivers.map((d, i) => (
          <div key={d.name}>
            <button
              onClick={() => setActiveDriver(activeDriver === d.name ? null : d.name)}
              style={{
                width: '100%', textAlign: 'left', padding: '10px 14px', borderRadius: 8,
                border: 'none', cursor: 'pointer',
                background: activeDriver === d.name ? `${d.color}20` : `${d.color}08`,
                outline: activeDriver === d.name ? `2px solid ${d.color}` : 'none',
                transition: 'all 0.2s'
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%', background: `${d.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color: d.color, flexShrink: 0
                }}>{i + 1}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>{d.name}</div>
              </div>
              {activeDriver === d.name && (
                <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 8, paddingLeft: 34 }}>
                  {d.desc}
                </div>
              )}
            </button>
            {i < drivers.length - 1 && (
              <div style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-sec)', padding: '2px 0' }}>↓</div>
            )}
          </div>
        ))}
        <div style={{ textAlign: 'center', fontSize: 10, color: C.purple, fontWeight: 600, padding: '4px 0' }}>
          ↻ Cycle repeats — each round accelerates the next
        </div>
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>
        Technology matures → firms invest → customers adopt → more firms enter → competition accelerates development
      </div>
    </div>
  )
}

// ----- 1-2: Historical PLC Comparison -----
function HistoricalPLCChart() {
  const [selectedProducts, setSelectedProducts] = useState(['Autos', 'Color TV', 'Cell Phones'])

  const products = {
    'Autos': { color: C.blue, takeoff: 1915, peak: 1970, data: [
      { yr: 1900, v: 2 }, { yr: 1910, v: 5 }, { yr: 1915, v: 15 }, { yr: 1920, v: 30 },
      { yr: 1930, v: 55 }, { yr: 1950, v: 70 }, { yr: 1970, v: 90 }, { yr: 1990, v: 85 }
    ]},
    'Radio': { color: C.orange, takeoff: 1925, peak: 1945, data: [
      { yr: 1920, v: 1 }, { yr: 1925, v: 15 }, { yr: 1930, v: 40 }, { yr: 1935, v: 60 },
      { yr: 1940, v: 75 }, { yr: 1945, v: 90 }, { yr: 1955, v: 85 }, { yr: 1970, v: 70 }
    ]},
    'Color TV': { color: C.purple, takeoff: 1968, peak: 1990, data: [
      { yr: 1960, v: 1 }, { yr: 1965, v: 5 }, { yr: 1968, v: 15 }, { yr: 1975, v: 50 },
      { yr: 1980, v: 70 }, { yr: 1990, v: 95 }, { yr: 2000, v: 90 }
    ]},
    'Cell Phones': { color: C.gain, takeoff: 1993, peak: 2010, data: [
      { yr: 1985, v: 1 }, { yr: 1990, v: 3 }, { yr: 1993, v: 12 }, { yr: 1996, v: 35 },
      { yr: 2000, v: 55 }, { yr: 2005, v: 75 }, { yr: 2010, v: 92 }
    ]},
    'Internet': { color: C.teal, takeoff: 1995, peak: 2015, data: [
      { yr: 1993, v: 2 }, { yr: 1995, v: 10 }, { yr: 1998, v: 30 }, { yr: 2000, v: 45 },
      { yr: 2003, v: 55 }, { yr: 2007, v: 70 }, { yr: 2010, v: 80 }, { yr: 2015, v: 90 }
    ]}
  }

  const toggle = name => {
    setSelectedProducts(prev =>
      prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]
    )
  }

  // Merge all selected data onto common year axis
  const allYears = new Set()
  selectedProducts.forEach(p => products[p].data.forEach(d => allYears.add(d.yr)))
  const chartData = [...allYears].sort((a, b) => a - b).map(yr => {
    const point = { yr }
    selectedProducts.forEach(p => {
      const d = products[p].data
      const exact = d.find(x => x.yr === yr)
      if (exact) point[p] = exact.v
    })
    return point
  })

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Historical Product Life Cycles</p>
      <p style={subStyle}>Compare adoption curves of major innovations. Click to toggle products.</p>

      <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
        {Object.entries(products).map(([name, prod]) => (
          <button key={name} onClick={() => toggle(name)}
            style={{
              padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
              fontSize: 10, fontWeight: 600,
              background: selectedProducts.includes(name) ? `${prod.color}25` : 'var(--bg-secondary)',
              color: selectedProducts.includes(name) ? prod.color : 'var(--text-sec)',
              outline: selectedProducts.includes(name) ? `2px solid ${prod.color}` : 'none',
            }}>{name}</button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="yr" tick={labelStyle} />
          <YAxis tick={labelStyle} domain={[0, 100]} label={{ value: '% Households', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          {selectedProducts.map(name => (
            <Line key={name} type="monotone" dataKey={name} stroke={products[name].color}
              strokeWidth={2} dot={{ r: 3 }} connectNulls />
          ))}
        </LineChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 6, textAlign: 'center', fontStyle: 'italic' }}>
        Internet is the notable exception with nearly linear adoption. All others follow S-curve patterns.
      </div>
    </div>
  )
}

// ----- 1-2: PLC-Adoption Correlation -----
function PLCAdoptionMapping() {
  const [activeStage, setActiveStage] = useState(null)

  const stages = [
    { plcStage: 'Introduction', adopters: 'Innovators + Early Adopters', pct: '16%', color: C.purple,
      desc: 'Low sales, product is new. Tech enthusiasts and visionaries willing to accept imperfect products.' },
    { plcStage: 'Growth', adopters: 'Early Majority', pct: '34%', color: C.gain,
      desc: 'Explosive sales increase. Pragmatists who need proven Product-Market Fit adopt now.' },
    { plcStage: 'Maturity', adopters: 'Late Majority', pct: '34%', color: C.orange,
      desc: 'Sales plateau. Conservatives adopt because majority already has. Price competition intensifies.' },
    { plcStage: 'Decline', adopters: 'Laggards', pct: '16%', color: C.loss,
      desc: 'Sales fall. Skeptics finally adopt (or never do). Product faces obsolescence from next innovation.' }
  ]

  const barData = stages.map(s => ({
    name: s.plcStage,
    value: parseInt(s.pct),
    color: s.color
  }))

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>PLC ↔ Adoption Curve Correlation</p>
      <p style={subStyle}>Each PLC stage maps to a specific adopter category</p>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={barData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" tick={{ fontSize: 9, fill: 'var(--text-sec)' }} />
          <YAxis tick={labelStyle} label={{ value: '% Market', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [`${v}%`, 'Share']} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {barData.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 8 }}>
        {stages.map(s => (
          <button key={s.plcStage}
            onClick={() => setActiveStage(activeStage === s.plcStage ? null : s.plcStage)}
            style={{
              textAlign: 'left', padding: '8px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: activeStage === s.plcStage ? `${s.color}18` : `${s.color}06`,
              transition: 'all 0.2s'
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: s.color }}>{s.plcStage}</span>
              <span style={{ fontSize: 9, color: 'var(--text-sec)' }}>↔ {s.adopters} ({s.pct})</span>
            </div>
            {activeStage === s.plcStage && (
              <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 4 }}>{s.desc}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// ----- 1-3: Infrastructure Gap Between Takeoffs -----
function TakeoffGapExplorer() {
  const [selected, setSelected] = useState('PCs')

  const industries = {
    'PCs': { firmTakeoff: 3, salesTakeoff: 8, gap: 5, color: C.blue,
      infra: 'Software ecosystem, retail distribution, user training, peripherals (printers, monitors)' },
    'Autos': { firmTakeoff: 10, salesTakeoff: 20, gap: 10, color: C.orange,
      infra: 'Roads, gas stations, repair shops, traffic laws, driver licensing, insurance' },
    'Cell Phones': { firmTakeoff: 5, salesTakeoff: 10, gap: 5, color: C.gain,
      infra: 'Cell towers, spectrum allocation, billing systems, handset retail' },
    'EVs (Tesla)': { firmTakeoff: 8, salesTakeoff: 15, gap: 7, color: C.purple,
      infra: 'Charging stations, battery recycling, grid capacity, service centers' }
  }

  const data = Object.entries(industries).map(([name, ind]) => ({
    name,
    'Firm Takeoff': ind.firmTakeoff,
    'Gap': ind.gap,
    color: ind.color
  }))

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Between Firm Takeoff and Sales Takeoff</p>
      <p style={subStyle}>The gap is where infrastructure, complementary products, and market legitimacy are built</p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} label={{ value: 'Years After Commercialization', position: 'insideBottom', offset: -2, style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 9, fill: 'var(--text-sec)' }} width={60} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v, name) => [`${v} years`, name]} />
          <Bar dataKey="Firm Takeoff" stackId="a" fill={C.blue} radius={[0, 0, 0, 0]} />
          <Bar dataKey="Gap" stackId="a" fill={C.orange} radius={[0, 4, 4, 0]} />
          <Legend wrapperStyle={{ fontSize: 9 }} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
        {Object.entries(industries).map(([name, ind]) => (
          <button key={name} onClick={() => setSelected(name)}
            style={{
              flex: 1, minWidth: 80, padding: '6px 8px', borderRadius: 6, border: 'none',
              cursor: 'pointer', fontSize: 9, textAlign: 'left',
              background: selected === name ? `${ind.color}18` : 'var(--bg-secondary)',
              outline: selected === name ? `2px solid ${ind.color}` : 'none',
            }}>
            <div style={{ fontWeight: 700, color: ind.color }}>{name}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div style={{
          padding: '8px 12px', borderRadius: 6, marginTop: 6, fontSize: 10,
          background: `${industries[selected].color}08`,
          border: `1px solid ${industries[selected].color}20`,
          color: 'var(--text-primary)'
        }}>
          <strong>Infrastructure needed:</strong> {industries[selected].infra}
        </div>
      )}
    </div>
  )
}

// ----- 1-4: Chasm Success Funnel -----
function ChasmSuccessFunnel() {
  const stages = [
    { label: 'All Innovations', count: 100, color: C.blue },
    { label: 'Reach Early Market', count: 100, color: C.purple },
    { label: 'Gain Early Adopters', count: 80, color: C.teal },
    { label: 'Cross the Chasm', count: 10, color: C.orange },
    { label: 'Reach Mass Market', count: 8, color: C.gain },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Innovation Success Funnel</p>
      <p style={subStyle}>90% of innovations fail to cross the chasm between early adopters and mass market</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 0' }}>
        {stages.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 60, fontSize: 9, color: 'var(--text-sec)', textAlign: 'right', flexShrink: 0 }}>
              {s.count}%
            </div>
            <div style={{
              height: 28, borderRadius: 6,
              width: `${s.count}%`, minWidth: 60,
              background: `${s.color}25`, border: `1px solid ${s.color}50`,
              display: 'flex', alignItems: 'center', paddingLeft: 8,
              transition: 'all 0.3s'
            }}>
              <span style={{ fontSize: 9, fontWeight: 600, color: s.color, whiteSpace: 'nowrap' }}>{s.label}</span>
            </div>
            {i === 2 && (
              <div style={{
                fontSize: 9, fontWeight: 700, color: C.loss,
                padding: '2px 8px', borderRadius: 4, background: `${C.loss}15`,
                whiteSpace: 'nowrap', flexShrink: 0
              }}>
                THE CHASM
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 8, padding: '8px 12px', borderRadius: 6,
        background: `${C.loss}08`, border: `1px solid ${C.loss}20`,
        fontSize: 10, color: 'var(--text-primary)'
      }}>
        <strong style={{ color: C.loss }}>Key insight:</strong> MVP works for early market, but you need a Total Product (core + augmented + ecosystem) to cross the chasm.
      </div>
    </div>
  )
}

// ----- 1-5: Gains & Losses Bundle -----
function GainsLossesBundle() {
  const [activeProduct, setActiveProduct] = useState('physical')

  const bundles = {
    physical: {
      name: 'Physical Bookstore',
      color: C.blue,
      gains: [
        { label: 'Touch & browse books', value: 8 },
        { label: 'Serendipity & discovery', value: 7 },
        { label: 'Coffee shop atmosphere', value: 6 },
        { label: 'Instant purchase', value: 5 },
      ],
      losses: [
        { label: 'Higher prices', value: -7 },
        { label: 'Travel required', value: -5 },
        { label: 'Limited selection', value: -6 },
      ]
    },
    online: {
      name: 'Online Bookstore',
      color: C.gain,
      gains: [
        { label: 'Lower prices', value: 8 },
        { label: 'Massive selection', value: 9 },
        { label: 'Home delivery', value: 7 },
        { label: 'Reviews & recommendations', value: 6 },
      ],
      losses: [
        { label: 'No tactile experience', value: -6 },
        { label: 'No serendipity', value: -5 },
        { label: 'Shipping wait time', value: -4 },
      ]
    }
  }

  const bundle = bundles[activeProduct]
  const allItems = [
    ...bundle.gains.map(g => ({ ...g, type: 'gain' })),
    ...bundle.losses.map(l => ({ ...l, type: 'loss' }))
  ]

  const chartData = allItems.map(item => ({
    name: item.label,
    value: item.value,
    fill: item.type === 'gain' ? C.gain : C.loss
  }))

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Every Product is a Bundle of Gains & Losses</p>
      <p style={subStyle}>Consumers evaluate trade-offs between gains and losses. Losses are felt 2.25x more intensely.</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {Object.entries(bundles).map(([key, b]) => (
          <button key={key} onClick={() => setActiveProduct(key)}
            style={{
              flex: 1, padding: '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeProduct === key ? `${b.color}20` : 'var(--bg-secondary)',
              outline: activeProduct === key ? `2px solid ${b.color}` : 'none',
              fontSize: 10, fontWeight: 600, color: activeProduct === key ? b.color : 'var(--text-sec)'
            }}>{b.name}</button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} domain={[-10, 10]} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} width={95} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [v > 0 ? `+${v} gain` : `${v} loss`, 'Psychological Value']} />
          <ReferenceLine x={0} stroke="var(--text-sec)" />
          <Bar dataKey="value" radius={[4, 4, 4, 4]}>
            {chartData.map((d, i) => <Cell key={i} fill={d.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 4, textAlign: 'center', fontStyle: 'italic' }}>
        Same product, different reference frame: analog camera firms saw digital as loss, electronics firms saw it as gain
      </div>
    </div>
  )
}

// ----- 2-1: Sustaining vs Disruptive Comparison -----
function SustainingVsDisruptive() {
  const [showDisruptive, setShowDisruptive] = useState(true)

  const data = useMemo(() => {
    const pts = []
    for (let t = 0; t <= 30; t++) {
      const sustaining = 20 + 70 * (1 / (1 + Math.exp(-0.2 * (t - 10))))
      const disruptive = t < 8 ? 5 + t * 0.5 : 5 + (t - 8) * (t - 8) * 0.35 + 4
      const mainstream = 50
      pts.push({
        t,
        'Sustaining': Math.round(sustaining * 10) / 10,
        'Disruptive': Math.round(Math.min(disruptive, 95) * 10) / 10,
        'Mainstream Need': mainstream
      })
    }
    return pts
  }, [])

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Sustaining vs Disruptive Trajectories</p>
      <p style={subStyle}>Disruptive technologies start lower but eventually cross the mainstream need threshold</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setShowDisruptive(!showDisruptive)}
          style={{
            padding: '6px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: showDisruptive ? `${C.loss}20` : 'var(--bg-secondary)',
            color: showDisruptive ? C.loss : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>
          {showDisruptive ? 'Hide' : 'Show'} Disruptive Trajectory
        </button>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="t" tick={labelStyle} label={{ value: 'Time', position: 'insideBottom', offset: -2, style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} domain={[0, 100]} label={{ value: 'Performance', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="Sustaining" stroke={C.blue} strokeWidth={2.5} dot={false} />
          {showDisruptive && (
            <Line type="monotone" dataKey="Disruptive" stroke={C.loss} strokeWidth={2.5} dot={false} strokeDasharray="8 4" />
          )}
          <Line type="monotone" dataKey="Mainstream Need" stroke={C.slate} strokeWidth={1.5} dot={false} strokeDasharray="3 3" />
          <Legend wrapperStyle={{ fontSize: 10 }} />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <div style={{ flex: 1, padding: '6px 10px', borderRadius: 6, background: `${C.blue}10`, border: `1px solid ${C.blue}30` }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: C.blue }}>Sustaining</div>
          <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>Improves along existing performance axis. Incumbents excel here.</div>
        </div>
        {showDisruptive && (
          <div style={{ flex: 1, padding: '6px 10px', borderRadius: 6, background: `${C.loss}10`, border: `1px solid ${C.loss}30` }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: C.loss }}>Disruptive</div>
            <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>New axis. Starts lower. Crossing point triggers disruption.</div>
          </div>
        )}
      </div>
    </div>
  )
}

// ----- 2-2: Telegraph vs Telephone Coexistence -----
function TelegraphTelephoneCoexistence() {
  const data = [
    { yr: 1850, Telegraph: 5, Telephone: 0 },
    { yr: 1860, Telegraph: 15, Telephone: 0 },
    { yr: 1877, Telegraph: 50, Telephone: 1 },
    { yr: 1890, Telegraph: 65, Telephone: 5 },
    { yr: 1900, Telegraph: 75, Telephone: 12 },
    { yr: 1910, Telegraph: 80, Telephone: 25 },
    { yr: 1920, Telegraph: 82, Telephone: 35 },
    { yr: 1930, Telegraph: 70, Telephone: 45 },
    { yr: 1940, Telegraph: 50, Telephone: 55 },
    { yr: 1950, Telegraph: 30, Telephone: 70 },
    { yr: 1970, Telegraph: 15, Telephone: 85 },
    { yr: 1990, Telegraph: 5, Telephone: 92 },
    { yr: 2013, Telegraph: 0, Telephone: 95 },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Telegraph vs Telephone: 136 Years of Coexistence</p>
      <p style={subStyle}>Disruption is glacially slow. The last telegram was sent in 2013.</p>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="telGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.orange} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.orange} stopOpacity={0.03} />
            </linearGradient>
            <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.blue} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.blue} stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="yr" tick={labelStyle} />
          <YAxis tick={labelStyle} domain={[0, 100]} label={{ value: 'Relative Usage', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <ReferenceLine x={1877} stroke={C.purple} strokeDasharray="5 5"
            label={{ value: 'Bell invents telephone (1877)', position: 'top', style: { fontSize: 8, fill: C.purple } }} />
          <ReferenceLine x={1940} stroke={C.slate} strokeDasharray="5 5"
            label={{ value: 'Phone > Telegraph (1940)', position: 'top', style: { fontSize: 8, fill: C.slate } }} />
          <Area type="monotone" dataKey="Telegraph" stroke={C.orange} strokeWidth={2} fill="url(#telGrad)" />
          <Area type="monotone" dataKey="Telephone" stroke={C.blue} strokeWidth={2} fill="url(#phoneGrad)" />
          <Legend wrapperStyle={{ fontSize: 10 }} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 6, textAlign: 'center', fontStyle: 'italic' }}>
        63 years from invention to crossing point (1877 → 1940). Western Union survived by pivoting to money transfers.
      </div>
    </div>
  )
}

// ----- 2-3: Kodak Film vs Digital Revenue -----
function KodakDigitalTimeline() {
  const [activePhase, setActivePhase] = useState(null)

  const phases = [
    { name: 'Dominance', period: '1888-1975', color: C.blue,
      desc: 'Kodak builds empire: 85% cameras, 90% film. Razor-blade model (cheap cameras, expensive film) creates massive recurring revenue.' },
    { name: 'Invention', period: '1975', color: C.purple,
      desc: 'Steve Sasson builds first digital camera at Kodak. CEO: "That\'s cute, but don\'t tell anyone." Internal knowledge of threat exists.' },
    { name: 'Denial', period: '1975-1995', color: C.orange,
      desc: 'Executives evaluate digital through film lens. Loss aversion dominates: potential loss of film cash cow outweighs uncertain digital gain.' },
    { name: 'Decline', period: '1995-2012', color: C.loss,
      desc: 'Film peaks ~2000, enters terminal decline. Sony, Canon, Nikon dominate digital. Kodak goes from $35B revenue to bankruptcy (2012).' }
  ]

  const data = [
    { yr: 1975, Film: 90, Digital: 0 },
    { yr: 1985, Film: 92, Digital: 1 },
    { yr: 1995, Film: 88, Digital: 5 },
    { yr: 2000, Film: 85, Digital: 15 },
    { yr: 2003, Film: 60, Digital: 35 },
    { yr: 2006, Film: 30, Digital: 55 },
    { yr: 2009, Film: 10, Digital: 70 },
    { yr: 2012, Film: 2, Digital: 80 },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Kodak: Film vs Digital</p>
      <p style={subStyle}>Kodak invented digital photography but couldn't cannibalize its own cash cow</p>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="yr" tick={labelStyle} />
          <YAxis tick={labelStyle} domain={[0, 100]} label={{ value: '% Market', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="Film" stroke={C.orange} strokeWidth={2} fill={`${C.orange}20`} />
          <Area type="monotone" dataKey="Digital" stroke={C.blue} strokeWidth={2} fill={`${C.blue}20`} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 8 }}>
        {phases.map(p => (
          <button key={p.name}
            onClick={() => setActivePhase(activePhase === p.name ? null : p.name)}
            style={{
              textAlign: 'left', padding: '8px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: activePhase === p.name ? `${p.color}18` : `${p.color}06`,
              transition: 'all 0.2s'
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>{p.name}</span>
              <span style={{ fontSize: 9, color: 'var(--text-sec)' }}>{p.period}</span>
            </div>
            {activePhase === p.name && (
              <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 4 }}>{p.desc}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// ----- 2-3: Steel Mini Mills Bottom-Up Disruption -----
function SteelDisruption() {
  const [activeSegment, setActiveSegment] = useState(null)

  const segments = [
    { name: 'Rebar', year: '1960s', margin: 'Low', color: C.slate,
      desc: 'Bottom of market. Integrated mills gladly ceded this: low margin, commodity product. Mini mills operated on $30-50M investment.' },
    { name: 'Wire Rod', year: '1970s', margin: 'Low-Med', color: C.blue,
      desc: 'Mini mills improved quality, moved up. Still low enough margin that integrated mills didn\'t fight back.' },
    { name: 'Structural Steel', year: '1980s', margin: 'Medium', color: C.orange,
      desc: 'Significant market. Integrated mills started feeling pressure but were too late to respond cost-effectively.' },
    { name: 'Sheet Steel', year: '1990s', margin: 'High', color: C.loss,
      desc: 'Core market of integrated mills. By now Nucor and Steel Dynamics had capability. Bethlehem Steel declared bankruptcy.' }
  ]

  const data = segments.map(s => ({
    name: s.name,
    'Mini Mill Share': segments.indexOf(s) === 0 ? 95 : segments.indexOf(s) === 1 ? 75 : segments.indexOf(s) === 2 ? 55 : 40,
    color: s.color
  }))

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Steel Mini Mills: Bottom-Up Disruption</p>
      <p style={subStyle}>Mini mills started at the lowest market segment and moved up, capturing share at each level</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {segments.map((s, i) => (
          <button key={s.name}
            onClick={() => setActiveSegment(activeSegment === s.name ? null : s.name)}
            style={{
              textAlign: 'left', padding: '10px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeSegment === s.name ? `${s.color}20` : `${s.color}08`,
              outline: activeSegment === s.name ? `2px solid ${s.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                fontSize: 14, width: 20, textAlign: 'center',
                color: s.color
              }}>{'↑'.repeat(i + 1)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>
                  {s.name} <span style={{ fontSize: 9, color: 'var(--text-sec)', fontWeight: 400 }}>({s.year})</span>
                </div>
                <div style={{ fontSize: 9, color: s.color }}>Margin: {s.margin}</div>
              </div>
            </div>
            {activeSegment === s.name && (
              <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 6, paddingLeft: 28 }}>
                {s.desc}
              </div>
            )}
          </button>
        ))}
      </div>

      <div style={{
        marginTop: 10, padding: '8px 12px', borderRadius: 6,
        background: `${C.loss}08`, border: `1px solid ${C.loss}20`,
        fontSize: 10, color: 'var(--text-primary)'
      }}>
        <strong style={{ color: C.loss }}>Pattern:</strong> Incumbents ignore bottom-market disruption because it seems unprofitable at scale. By the time mini mills move upmarket, it's too late.
      </div>
    </div>
  )
}

// ----- 2-4: Organizational Evolution Stages -----
function OrgEvolutionStages() {
  const [activeStage, setActiveStage] = useState(null)

  const stages = [
    { name: 'Resources', color: C.blue, icon: '💰',
      desc: 'Founders bring capital, ideas, drive. Organization is flexible and adaptive. Few constraints.',
      rigidity: 'Low — easy to pivot and change direction' },
    { name: 'Processes', color: C.orange, icon: '⚙️',
      desc: 'Systems, workflows, routines are built to handle growing complexity. "How we do things" starts to solidify.',
      rigidity: 'Medium — processes create predictability but limit experimentation' },
    { name: 'Structure', color: C.purple, icon: '🏢',
      desc: 'Hierarchy, departments, reporting lines emerge. Fiefdoms develop, defending budgets and authority.',
      rigidity: 'High — structural changes require reorganization, political capital' },
    { name: 'Culture', color: C.gain, icon: '🧬',
      desc: 'Values, norms, identity solidify. "This is who we are." The most powerful and hardest to change.',
      rigidity: 'Very High — cultural change takes years, often requires leadership change' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Organizational Evolution → Rigidity</p>
      <p style={subStyle}>The same progression that enables success eventually blocks innovation</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {stages.map((s, i) => (
          <div key={s.name}>
            <button
              onClick={() => setActiveStage(activeStage === s.name ? null : s.name)}
              style={{
                width: '100%', textAlign: 'left', padding: '10px 14px', borderRadius: 8,
                border: 'none', cursor: 'pointer',
                background: activeStage === s.name ? `${s.color}20` : `${s.color}08`,
                outline: activeStage === s.name ? `2px solid ${s.color}` : 'none',
                transition: 'all 0.2s'
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>Stage {i + 1}: {s.name}</div>
                  <div style={{ fontSize: 9, color: s.color }}>{s.rigidity}</div>
                </div>
                <div style={{
                  width: `${25 + i * 25}%`, height: 6, borderRadius: 3,
                  background: `${s.color}40`, maxWidth: 100
                }} />
              </div>
              {activeStage === s.name && (
                <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 8, paddingLeft: 34 }}>
                  {s.desc}
                </div>
              )}
            </button>
            {i < stages.length - 1 && (
              <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-sec)', padding: '2px 0' }}>↓</div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 10, padding: '8px 12px', borderRadius: 6,
        background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
        fontSize: 10, color: 'var(--text-primary)', textAlign: 'center'
      }}>
        <strong>Paradox:</strong> Innovation requires changing processes, structure, and culture. But organizations resist changing the very things that enabled their success.
      </div>
    </div>
  )
}

// ----- 2-4: Ecosystem Risk Calculator -----
function EcosystemRiskCalculator() {
  const [partnerCount, setPartnerCount] = useState(4)
  const [partnerProb, setPartnerProb] = useState(90)

  const totalProb = Math.pow(partnerProb / 100, partnerCount) * 100

  const data = useMemo(() => {
    const pts = []
    for (let n = 1; n <= 8; n++) {
      pts.push({
        partners: n,
        probability: Math.round(Math.pow(partnerProb / 100, n) * 1000) / 10
      })
    }
    return pts
  }, [partnerProb])

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Ecosystem Risk: Joint Probability Calculator</p>
      <p style={subStyle}>Each ecosystem partner dependency dramatically decreases total success probability</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Partners: <strong>{partnerCount}</strong>
          <input type="range" min="1" max="8" step="1" value={partnerCount}
            onChange={e => setPartnerCount(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.blue }} />
        </label>
        <label style={{ fontSize: 11, color: 'var(--text-primary)' }}>
          Each partner success: <strong>{partnerProb}%</strong>
          <input type="range" min="50" max="99" step="1" value={partnerProb}
            onChange={e => setPartnerProb(+e.target.value)}
            style={{ display: 'block', width: 160, accentColor: C.purple }} />
        </label>
      </div>

      <div style={{
        padding: '10px 14px', borderRadius: 8, marginBottom: 12, textAlign: 'center',
        background: totalProb > 70 ? `${C.gain}15` : totalProb > 40 ? `${C.orange}15` : `${C.loss}15`,
        border: `1px solid ${totalProb > 70 ? C.gain : totalProb > 40 ? C.orange : C.loss}30`
      }}>
        <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Total Success Probability</div>
        <div style={{
          fontSize: 22, fontWeight: 800,
          color: totalProb > 70 ? C.gain : totalProb > 40 ? C.orange : C.loss
        }}>
          {totalProb.toFixed(1)}%
        </div>
        <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>
          {partnerProb}%{' '}
          {Array(partnerCount).fill(`× ${partnerProb}%`).slice(1).join(' ')}
          {' = '}{totalProb.toFixed(1)}%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="partners" tick={labelStyle} label={{ value: 'Number of Partners', position: 'insideBottom', offset: -2, style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} domain={[0, 100]} label={{ value: 'Success %', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [`${v}%`, 'Success Probability']} />
          <Bar dataKey="probability" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={i + 1 === partnerCount ? C.purple : d.probability > 70 ? C.gain : d.probability > 40 ? C.orange : C.loss} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// ----- 2-5: Three Components of Successful Disruption -----
function DisruptionComponents() {
  const [activeComponent, setActiveComponent] = useState(null)

  const components = [
    {
      name: 'Simplifying Technology',
      color: C.blue, icon: '🔧',
      desc: 'Eliminates complexity, enables non-consumption. Example: one-button blood pressure monitor replaced nurse-measured testing.',
      examples: ['Blood pressure monitors', 'Home pregnancy tests', 'TurboTax', 'Point-and-shoot cameras']
    },
    {
      name: 'Business Model Innovation',
      color: C.orange, icon: '💡',
      desc: 'Changes how value is captured. Example: Netflix subscription vs. Blockbuster per-rental payment.',
      examples: ['Netflix subscription', 'Freemium apps', 'SaaS pricing', 'Dollar Shave Club']
    },
    {
      name: 'Ecosystem Design',
      color: C.gain, icon: '🌐',
      desc: 'Complementary products, channels, infrastructure must support the disruption. Example: Tesla vertical integration of batteries + charging network.',
      examples: ['Tesla Supercharger network', 'App Store for iPhone', 'USB standard', 'Android open ecosystem']
    }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Three Components of Successful Disruption</p>
      <p style={subStyle}>All three must work together. Missing any one causes failure.</p>

      <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
        {components.map(comp => (
          <button key={comp.name}
            onClick={() => setActiveComponent(activeComponent === comp.name ? null : comp.name)}
            style={{
              flex: 1, minWidth: 90, padding: '10px 8px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeComponent === comp.name ? `${comp.color}20` : `${comp.color}08`,
              outline: activeComponent === comp.name ? `2px solid ${comp.color}` : 'none',
              transition: 'all 0.2s', textAlign: 'center'
            }}>
            <div style={{ fontSize: 18 }}>{comp.icon}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: comp.color, marginTop: 4 }}>{comp.name}</div>
          </button>
        ))}
      </div>

      {activeComponent && (() => {
        const comp = components.find(c => c.name === activeComponent)
        return (
          <div style={{
            padding: '12px 14px', borderRadius: 8,
            background: `${comp.color}08`, border: `1px solid ${comp.color}25`
          }}>
            <div style={{ fontSize: 10, color: 'var(--text-primary)', marginBottom: 8 }}>{comp.desc}</div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {comp.examples.map(ex => (
                <span key={ex} style={{
                  fontSize: 8, padding: '3px 8px', borderRadius: 4,
                  background: `${comp.color}15`, color: comp.color, fontWeight: 600
                }}>{ex}</span>
              ))}
            </div>
          </div>
        )
      })()}

      <div style={{
        marginTop: 10, padding: '8px 12px', borderRadius: 6,
        background: `${C.loss}08`, border: `1px solid ${C.loss}20`,
        fontSize: 10, color: 'var(--text-primary)', textAlign: 'center'
      }}>
        Simplifying tech without business model = failed startup. Business model without tech = unsustainable. Either without ecosystem = incomplete.
      </div>
    </div>
  )
}

// ----- 2-6: PC Commoditization Value Shift -----
function PCValueShift() {
  const [activeView, setActiveView] = useState('after')

  const before = [
    { name: 'IBM (Hardware)', value: 70, color: C.blue },
    { name: 'Intel (CPU)', value: 15, color: C.orange },
    { name: 'Microsoft (OS)', value: 10, color: C.purple },
    { name: 'Others', value: 5, color: C.slate }
  ]

  const after = [
    { name: 'IBM (Hardware)', value: 10, color: C.blue },
    { name: 'Intel (CPU)', value: 35, color: C.orange },
    { name: 'Microsoft (OS)', value: 35, color: C.purple },
    { name: 'Dell/Compaq', value: 12, color: C.teal },
    { name: 'Others', value: 8, color: C.slate }
  ]

  const data = activeView === 'before' ? before : after

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>PC Industry: Value Capture Shift</p>
      <p style={subStyle}>IBM outsourced CPUs and OS, and profit pools shifted to Intel and Microsoft</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setActiveView('before')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: activeView === 'before' ? `${C.blue}20` : 'var(--bg-secondary)',
            color: activeView === 'before' ? C.blue : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>1981-1985: IBM Dominant</button>
        <button onClick={() => setActiveView('after')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: activeView === 'after' ? `${C.orange}20` : 'var(--bg-secondary)',
            color: activeView === 'after' ? C.orange : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>1990s: Commoditized</button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} angle={-10} />
          <YAxis tick={labelStyle} domain={[0, 80]} label={{ value: '% of Profit Pool', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [`${v}%`, 'Profit Share']} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{
        marginTop: 8, padding: '8px 12px', borderRadius: 6,
        background: `${C.loss}08`, border: `1px solid ${C.loss}20`,
        fontSize: 10, color: 'var(--text-primary)'
      }}>
        <strong style={{ color: C.loss }}>Commoditization trap:</strong> IBM enabled ecosystem viability by outsourcing, but lost control of where value accumulated. Component makers (Intel, Microsoft) captured the profits.
      </div>
    </div>
  )
}

// ----- 3-1: Open vs Closed Innovation (moved to Closed Innovation section) -----
// Already exists: OpenVsClosedInnovation — will be assigned to earlier section

// ----- 3-2: Pharma Value Chain Before/After -----
function PharmaValueChain() {
  const [view, setView] = useState('today')

  const integrated = [
    { step: 'Drug Discovery', owner: 'Big Pharma', color: C.blue },
    { step: 'Preclinical Testing', owner: 'Big Pharma', color: C.blue },
    { step: 'Clinical Trials', owner: 'Big Pharma', color: C.blue },
    { step: 'Manufacturing', owner: 'Big Pharma', color: C.blue },
    { step: 'Regulatory Approval', owner: 'Big Pharma', color: C.blue },
    { step: 'Marketing & Sales', owner: 'Big Pharma', color: C.blue },
  ]

  const disintegrated = [
    { step: 'Drug Discovery', owner: 'Biotech Startups', color: C.purple },
    { step: 'Preclinical Testing', owner: 'CROs', color: C.orange },
    { step: 'Clinical Trials', owner: 'CROs', color: C.orange },
    { step: 'Manufacturing', owner: 'CMOs', color: C.teal },
    { step: 'Regulatory Approval', owner: 'Big Pharma', color: C.blue },
    { step: 'Marketing & Sales', owner: 'Big Pharma', color: C.blue },
  ]

  const chain = view === 'integrated' ? integrated : disintegrated

  const ownerColors = {}
  chain.forEach(s => { ownerColors[s.owner] = s.color })

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Pharma Value Chain: Integration → Specialization</p>
      <p style={subStyle}>20th century pharma did everything internally. Today: specialists at each stage.</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView('integrated')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'integrated' ? `${C.blue}20` : 'var(--bg-secondary)',
            color: view === 'integrated' ? C.blue : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>20th Century: Integrated</button>
        <button onClick={() => setView('today')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'today' ? `${C.purple}20` : 'var(--bg-secondary)',
            color: view === 'today' ? C.purple : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Today: Disintegrated</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {chain.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              flex: 1, padding: '8px 12px', borderRadius: 6,
              background: `${step.color}12`, border: `1px solid ${step.color}30`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span style={{ fontSize: 10, color: 'var(--text-primary)', fontWeight: 600 }}>{step.step}</span>
              <span style={{ fontSize: 9, color: step.color, fontWeight: 700 }}>{step.owner}</span>
            </div>
            {i < chain.length - 1 && <span style={{ fontSize: 10, color: 'var(--text-sec)', flexShrink: 0, width: 10 }} />}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
        {Object.entries(ownerColors).map(([owner, color]) => (
          <span key={owner} style={{
            fontSize: 8, padding: '3px 8px', borderRadius: 4,
            background: `${color}15`, color, fontWeight: 600
          }}>{owner}</span>
        ))}
      </div>
    </div>
  )
}

// ----- 3-3: Patent Effectiveness by Industry Chart -----
function PatentEffectivenessChart() {
  const data = [
    { industry: 'Pharma/Chemical', effectiveness: 82, color: C.gain },
    { industry: 'Semiconductors', effectiveness: 50, color: C.blue },
    { industry: 'Software', effectiveness: 40, color: C.purple },
    { industry: 'Textiles', effectiveness: 22, color: C.orange },
    { industry: 'Business Services', effectiveness: 15, color: C.slate },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Patent Effectiveness by Industry</p>
      <p style={subStyle}>Carnegie Mellon survey: % of firms relying heavily on patents. Varies dramatically by industry.</p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} domain={[0, 100]}
            label={{ value: '% Firms Relying on Patents', position: 'insideBottom', offset: -2, style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <YAxis type="category" dataKey="industry" tick={{ fontSize: 9, fill: 'var(--text-sec)' }} width={75} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [`${v}%`, 'Patent Effectiveness']} />
          <Bar dataKey="effectiveness" radius={[0, 4, 4, 0]}>
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{
        marginTop: 8, padding: '8px 12px', borderRadius: 6,
        background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
        fontSize: 10, color: 'var(--text-primary)'
      }}>
        <strong>Implication:</strong> Patents are primary in pharma (discrete chemical formulas). In electronics, brand + ecosystem matter more. In software, network effects + switching costs dominate.
      </div>
    </div>
  )
}

// ----- 3-3: Value Capture Framework -----
function ValueCaptureFramework() {
  const [activeItem, setActiveItem] = useState(null)

  const items = [
    { category: 'Legal Mechanisms', entries: [
      { name: 'Patents', color: C.blue, desc: '20-year legal monopoly on functional innovations. Strong in pharma, weaker in software.' },
      { name: 'Trade Secrets', color: C.teal, desc: 'Confidential, indefinite protection. Lost if disclosed. Coca-Cola formula, Google algorithm.' },
      { name: 'Trademarks', color: C.purple, desc: 'Brand protection. Identifies source. Indefinite duration with continued use.' },
      { name: 'Copyrights', color: C.indigo, desc: 'Creative work protection. Software code, documentation. Life + 70 years.' },
    ]},
    { category: 'Strategic Mechanisms', entries: [
      { name: 'First-Mover', color: C.orange, desc: 'Early entry advantages: customer lock-in, learning curve, brand recognition.' },
      { name: 'Network Effects', color: C.gain, desc: 'Value increases with users. Facebook, Uber, credit cards. Creates natural monopoly.' },
      { name: 'Switching Costs', color: C.loss, desc: 'Cost to change suppliers. Enterprise software, cloud platforms. Locks in customers.' },
      { name: 'Brand & Reputation', color: C.pink, desc: 'Trust built over time. Difficult to replicate. Apple, Toyota, McKinsey.' },
    ]}
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Value Capture: Legal & Strategic Mechanisms</p>
      <p style={subStyle}>Firms combine multiple mechanisms to protect value created through innovation</p>

      {items.map(cat => (
        <div key={cat.category} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-sec)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
            {cat.category}
          </div>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {cat.entries.map(e => (
              <button key={e.name}
                onClick={() => setActiveItem(activeItem === e.name ? null : e.name)}
                style={{
                  flex: 1, minWidth: 70, padding: '6px 8px', borderRadius: 6, border: 'none', cursor: 'pointer',
                  background: activeItem === e.name ? `${e.color}20` : `${e.color}08`,
                  outline: activeItem === e.name ? `2px solid ${e.color}` : 'none',
                  transition: 'all 0.2s'
                }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: e.color }}>{e.name}</div>
              </button>
            ))}
          </div>
          {cat.entries.filter(e => e.name === activeItem).map(e => (
            <div key={e.name} style={{
              marginTop: 4, padding: '8px 12px', borderRadius: 6,
              background: `${e.color}08`, border: `1px solid ${e.color}20`,
              fontSize: 10, color: 'var(--text-primary)'
            }}>
              {e.desc}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// ----- 3-4: Make/Buy/Sell Decision Framework -----
function MakeBuySellFramework() {
  const [scores, setScores] = useState({
    breadth: 3, integrationCost: 3, assets: 3, coreCompetency: 3, timing: 3
  })

  const dims = [
    { key: 'breadth', label: 'Application Breadth', makeHint: 'Broad → Make', sellHint: 'Narrow → Sell' },
    { key: 'integrationCost', label: 'Integration Cost', makeHint: 'Low → Make', sellHint: 'High → Buy/Sell' },
    { key: 'assets', label: 'Have Specialized Assets?', makeHint: 'Yes → Make', sellHint: 'No → Buy/Sell' },
    { key: 'coreCompetency', label: 'Core Competency Fit', makeHint: 'Core → Make', sellHint: 'Adjacent → Buy' },
    { key: 'timing', label: 'Time Available', makeHint: 'Plenty → Make', sellHint: 'Urgent → Buy' },
  ]

  const avg = Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  const recommendation = avg >= 3.5 ? { label: 'MAKE', color: C.gain, desc: 'Develop internally — you have the assets, time, and it fits core competency.' }
    : avg >= 2 ? { label: 'BUY / PARTNER', color: C.orange, desc: 'Partner with or acquire from external specialists — faster and more capital-efficient.' }
    : { label: 'SELL / LICENSE', color: C.purple, desc: 'License to others or sell — you lack assets for commercialization, better to specialize.' }

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Make, Buy, or Sell: Decision Framework</p>
      <p style={subStyle}>Adjust each dimension to see the strategic recommendation</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        {dims.map(d => (
          <div key={d.key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, marginBottom: 2 }}>
              <span style={{ color: C.purple }}>{d.sellHint}</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.label}</span>
              <span style={{ color: C.gain }}>{d.makeHint}</span>
            </div>
            <input type="range" min="1" max="5" step="1" value={scores[d.key]}
              onChange={e => setScores(prev => ({ ...prev, [d.key]: +e.target.value }))}
              style={{ width: '100%', accentColor: scores[d.key] >= 3.5 ? C.gain : scores[d.key] >= 2 ? C.orange : C.purple }} />
          </div>
        ))}
      </div>

      <div style={{
        padding: '12px 16px', borderRadius: 8, textAlign: 'center',
        background: `${recommendation.color}15`, border: `2px solid ${recommendation.color}40`
      }}>
        <div style={{ fontSize: 9, color: 'var(--text-sec)' }}>Recommendation</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: recommendation.color }}>{recommendation.label}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)', marginTop: 4 }}>{recommendation.desc}</div>
      </div>
    </div>
  )
}

// ----- 3-5: Strategic Assessment Tool -----
function StrategicAssessmentTool() {
  const [integration, setIntegration] = useState(3)
  const [ipStrength, setIpStrength] = useState(3)
  const [externalAccess, setExternalAccess] = useState(3)

  const getAssessment = () => {
    if (integration <= 2 && ipStrength <= 2 && externalAccess <= 2)
      return { label: 'Vulnerable', color: C.loss, desc: 'Disintegrated with weak IP and isolated from ecosystems. Competitors can copy freely.' }
    if (integration >= 4 && ipStrength >= 4 && externalAccess >= 4)
      return { label: 'Innovation Leader', color: C.gain, desc: 'Strong integration on core, strong IP, deeply embedded in ecosystem. Optimal positioning.' }
    if (ipStrength >= 4 && externalAccess >= 4)
      return { label: 'Flexible Innovator', color: C.blue, desc: 'Strong IP + external partnerships. Can specialize and participate in technology markets.' }
    if (integration >= 4 && ipStrength <= 2)
      return { label: 'Capital Intensive', color: C.orange, desc: 'Highly integrated but weak IP. Must control full value chain to prevent copying.' }
    return { label: 'Mixed Position', color: C.purple, desc: 'Moderate positioning. Review make/buy decisions and invest in IP where gaps exist.' }
  }

  const assessment = getAssessment()

  const dims = [
    { key: 'integration', value: integration, set: setIntegration, label: 'Integration Strategy',
      low: 'Buy Everything', high: 'Make Everything', color: C.blue },
    { key: 'ipStrength', value: ipStrength, set: setIpStrength, label: 'IP Strength',
      low: 'Weak IP', high: 'Strong Patents', color: C.orange },
    { key: 'externalAccess', value: externalAccess, set: setExternalAccess, label: 'External Knowledge',
      low: 'Isolated', high: 'Ecosystem Embedded', color: C.gain },
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Strategic Assessment: 3-Dimension Tool</p>
      <p style={subStyle}>Plot your firm across integration, IP, and ecosystem dimensions</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
        {dims.map(d => (
          <div key={d.key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, marginBottom: 2 }}>
              <span style={{ color: 'var(--text-sec)' }}>{d.low}</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.label}: {d.value}/5</span>
              <span style={{ color: d.color }}>{d.high}</span>
            </div>
            <input type="range" min="1" max="5" step="1" value={d.value}
              onChange={e => d.set(+e.target.value)}
              style={{ width: '100%', accentColor: d.color }} />
          </div>
        ))}
      </div>

      <div style={{
        padding: '14px 16px', borderRadius: 8, textAlign: 'center',
        background: `${assessment.color}12`, border: `2px solid ${assessment.color}40`
      }}>
        <div style={{ fontSize: 9, color: 'var(--text-sec)', textTransform: 'uppercase', letterSpacing: 1 }}>Assessment</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: assessment.color, margin: '4px 0' }}>{assessment.label}</div>
        <div style={{ fontSize: 10, color: 'var(--text-primary)' }}>{assessment.desc}</div>
      </div>

      <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
        {dims.map(d => (
          <div key={d.key} style={{
            flex: 1, minWidth: 80, padding: '6px 8px', borderRadius: 6,
            background: `${d.color}08`, border: `1px solid ${d.color}20`, textAlign: 'center'
          }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: d.color }}>{d.value}</div>
            <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ===== Export map =====
const visualMap = {
  // Lecture 1-1
  's-curve-explorer': SCurveExplorer,
  'adoption-bell-curve': AdoptionBellCurve,
  'takeoff-visualizer': TakeoffVisualizer,
  'innovation-drivers-loop': InnovationDriversLoop,
  // Lecture 1-2
  'plc-explorer': PLCExplorer,
  'growth-vs-maturity': GrowthVsMaturity,
  'sales-takeoff-timeline': SalesTakeoffTimeline,
  'historical-plc-chart': HistoricalPLCChart,
  'plc-adoption-mapping': PLCAdoptionMapping,
  // Lecture 1-3
  'firm-life-cycle': FirmLifeCycleExplorer,
  'firm-vs-sales-takeoff': FirmVsSalesTakeoff,
  'patent-to-commercialization': PatentToCommercialization,
  'takeoff-gap-explorer': TakeoffGapExplorer,
  // Lecture 1-4
  'chasm-visualization': ChasmVisualization,
  'bowling-alley': BowlingAlleyStrategy,
  'mvp-vs-total-product': MVPvsTotalProduct,
  'chasm-success-funnel': ChasmSuccessFunnel,
  // Lecture 1-5
  'prospect-value-function': ProspectValueFunction,
  'diminishing-sensitivity': DiminishingSensitivity,
  'loss-aversion': LossAversionDemo,
  'nine-x-effect': NineXEffect,
  'gains-losses-bundle': GainsLossesBundle,
  // Lecture 2-1
  'disruption-trajectory': DisruptionTrajectory,
  'sustaining-vs-disruptive': SustainingVsDisruptive,
  // Lecture 2-2
  'disruption-timeline': DisruptionTimeline,
  'telegraph-telephone-coexistence': TelegraphTelephoneCoexistence,
  // Lecture 2-3
  'cannibalization-dilemma': CannibalizationDilemma,
  'kodak-digital-timeline': KodakDigitalTimeline,
  'steel-disruption': SteelDisruption,
  // Lecture 2-4
  'innovation-framework': InnovationFramework,
  'org-evolution-stages': OrgEvolutionStages,
  'ecosystem-risk-calculator': EcosystemRiskCalculator,
  // Lecture 2-5
  'retail-evolution': RetailEvolution,
  'disruption-components': DisruptionComponents,
  // Lecture 2-6
  'ibm-timeline': IBMTimeline,
  'pc-value-shift': PCValueShift,
  // Module 3
  'open-vs-closed-innovation': OpenVsClosedInnovation,
  'technology-market-flow': TechnologyMarketFlow,
  'value-chain-explorer': ValueChainExplorer,
  'apple-vs-samsung': AppleVsSamsung,
  'value-capture-mechanisms': ValueCaptureMechanisms,
  'ip-economics': IPEconomics,
  'discrete-vs-complex': DiscreteVsComplex,
  'tech-vs-product-market': TechVsProductMarket,
  'moderna-vs-biontech': ModernaVsBiontech,
  'module3-concept-map': Module3ConceptMap,
  'pharma-value-chain': PharmaValueChain,
  'patent-effectiveness-chart': PatentEffectivenessChart,
  'value-capture-framework': ValueCaptureFramework,
  'make-buy-sell-framework': MakeBuySellFramework,
  'strategic-assessment-tool': StrategicAssessmentTool,
}

export default function InteractiveVisual({ type }) {
  const Component = visualMap[type]
  if (!Component) return null
  return <Component />
}
