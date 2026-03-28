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

// ===== Export map =====
const visualMap = {
  // Lecture 1-1
  's-curve-explorer': SCurveExplorer,
  'adoption-bell-curve': AdoptionBellCurve,
  'takeoff-visualizer': TakeoffVisualizer,
  // Lecture 1-2
  'plc-explorer': PLCExplorer,
  'growth-vs-maturity': GrowthVsMaturity,
  'sales-takeoff-timeline': SalesTakeoffTimeline,
  // Lecture 1-3
  'firm-life-cycle': FirmLifeCycleExplorer,
  'firm-vs-sales-takeoff': FirmVsSalesTakeoff,
  'patent-to-commercialization': PatentToCommercialization,
  // Lecture 1-4
  'chasm-visualization': ChasmVisualization,
  'bowling-alley': BowlingAlleyStrategy,
  'mvp-vs-total-product': MVPvsTotalProduct,
  // Lecture 1-5
  'prospect-value-function': ProspectValueFunction,
  'diminishing-sensitivity': DiminishingSensitivity,
  'loss-aversion': LossAversionDemo,
  'nine-x-effect': NineXEffect,
  // Lecture 2-1
  'disruption-trajectory': DisruptionTrajectory,
  // Lecture 2-2
  'disruption-timeline': DisruptionTimeline,
  // Lecture 2-3
  'cannibalization-dilemma': CannibalizationDilemma,
  // Lecture 2-4
  'innovation-framework': InnovationFramework,
  // Lecture 2-5
  'retail-evolution': RetailEvolution,
  // Lecture 2-6
  'ibm-timeline': IBMTimeline,
}

export default function InteractiveVisual({ type }) {
  const Component = visualMap[type]
  if (!Component) return null
  return <Component />
}
