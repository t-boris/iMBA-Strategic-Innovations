import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 2: Disruptive Innovation
// =========================================================================

// ----- 2-1a: Disruption Trajectory -----
export function DisruptionTrajectory() {
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
export function DisruptionTimeline() {
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
export function CannibalizationDilemma() {
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
export function InnovationFramework() {
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
export function RetailEvolution() {
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
export function IBMTimeline() {
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


export function SustainingVsDisruptive() {
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
export function TelegraphTelephoneCoexistence() {
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
export function KodakDigitalTimeline() {
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
export function SteelDisruption() {
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
export function OrgEvolutionStages() {
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
export function EcosystemRiskCalculator() {
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
export function DisruptionComponents() {
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
export function PCValueShift() {
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
