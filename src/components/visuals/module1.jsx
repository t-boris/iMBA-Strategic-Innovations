import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  LECTURE 1-1: S-Curves & Innovation Life Cycles
// =========================================================================

// ----- 1-1a: Interactive S-Curve -----
export function SCurveExplorer() {
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
export function AdoptionBellCurve() {
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
export function TakeoffVisualizer() {
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
export function PLCExplorer() {
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
export function GrowthVsMaturity() {
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
export function SalesTakeoffTimeline() {
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
export function FirmLifeCycleExplorer() {
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
export function FirmVsSalesTakeoff() {
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
export function PatentToCommercialization() {
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
export function ChasmVisualization() {
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
export function BowlingAlleyStrategy() {
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
export function MVPvsTotalProduct() {
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
export function ProspectValueFunction() {
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
export function DiminishingSensitivity() {
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
export function LossAversionDemo() {
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
export function NineXEffect() {
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


export function InnovationDriversLoop() {
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
export function HistoricalPLCChart() {
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
export function PLCAdoptionMapping() {
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
export function TakeoffGapExplorer() {
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
export function ChasmSuccessFunnel() {
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
export function GainsLossesBundle() {
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
