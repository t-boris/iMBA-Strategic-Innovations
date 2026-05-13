import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 4: Multi-Sided Platforms
// =========================================================================

// ----- 4-1: Platform vs Value Chain Comparison -----
export function PlatformVsValueChain() {
  const [view, setView] = useState('both')

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Platform Model vs Linear Value Chain</p>
      <p style={subStyle}>How platforms fundamentally differ from traditional supply chains</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView('chain')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'chain' ? `${C.orange}20` : 'var(--bg-secondary)',
            color: view === 'chain' ? C.orange : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Linear Chain</button>
        <button onClick={() => setView('platform')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'platform' ? `${C.blue}20` : 'var(--bg-secondary)',
            color: view === 'platform' ? C.blue : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Platform Model</button>
        <button onClick={() => setView('both')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'both' ? `${C.purple}20` : 'var(--bg-secondary)',
            color: view === 'both' ? C.purple : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Both</button>
      </div>

      <svg style={{ width: '100%', height: 200 }} viewBox="0 0 400 200">
        {(view === 'chain' || view === 'both') && (
          <>
            <text x="10" y="50" style={{ fontSize: 9, fill: 'var(--text-sec)', fontWeight: 600 }}>Linear Value Chain</text>
            <rect x="20" y="70" width="50" height="35" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="4" />
            <text x="45" y="93" style={{ fontSize: 9, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Suppliers</text>
            <line x1="70" y1="87" x2="100" y2="87" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrowOrange)" />
            <rect x="100" y="70" width="50" height="35" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="4" />
            <text x="125" y="93" style={{ fontSize: 9, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Mfg</text>
            <line x1="150" y1="87" x2="180" y2="87" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrowOrange)" />
            <rect x="180" y="70" width="50" height="35" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="4" />
            <text x="205" y="93" style={{ fontSize: 9, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Retail</text>
            <line x1="230" y1="87" x2="260" y2="87" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrowOrange)" />
            <rect x="260" y="70" width="50" height="35" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="4" />
            <text x="285" y="93" style={{ fontSize: 9, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Customer</text>
          </>
        )}
        {(view === 'platform' || view === 'both') && (
          <>
            <text x="10" y={view === 'both' ? 160 : 50} style={{ fontSize: 9, fill: 'var(--text-sec)', fontWeight: 600 }}>Hub and Spoke</text>
            <circle cx={view === 'both' ? 190 : 140} cy={view === 'both' ? 150 : 87} r="25" fill={`${C.blue}15`} stroke={C.blue} strokeWidth="2" />
            <text x={view === 'both' ? 190 : 140} y={view === 'both' ? 155 : 92} style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Platform</text>
            {view === 'both' ? (
              <>
                <line x1="165" y1="135" x2="100" y2="90" stroke={C.blue} strokeWidth="1.5" />
                <circle cx="100" cy="85" r="12" fill={`${C.blue}25`} stroke={C.blue} strokeWidth="1.5" />
                <text x="100" y="90" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Side A</text>
                <line x1="215" y1="135" x2="280" y2="90" stroke={C.blue} strokeWidth="1.5" />
                <circle cx="280" cy="85" r="12" fill={`${C.blue}25`} stroke={C.blue} strokeWidth="1.5" />
                <text x="280" y="90" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Side B</text>
              </>
            ) : (
              <>
                <line x1="115" y1="87" x2="70" y2="60" stroke={C.blue} strokeWidth="1.5" />
                <circle cx="60" cy="50" r="12" fill={`${C.blue}25`} stroke={C.blue} strokeWidth="1.5" />
                <text x="60" y="55" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Apps</text>
                <line x1="115" y1="100" x2="70" y2="120" stroke={C.blue} strokeWidth="1.5" />
                <circle cx="60" cy="130" r="12" fill={`${C.blue}25`} stroke={C.blue} strokeWidth="1.5" />
                <text x="60" y="135" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Users</text>
                <line x1="165" y1="87" x2="220" y2="60" stroke={C.blue} strokeWidth="1.5" />
                <circle cx="230" cy="50" r="12" fill={`${C.blue}25`} stroke={C.blue} strokeWidth="1.5" />
                <text x="230" y="55" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Devs</text>
              </>
            )}
          </>
        )}
        <defs>
          <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill={C.orange} />
          </marker>
        </defs>
      </svg>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>
        Value chains move products linearly. Platforms connect multiple sides simultaneously.
      </div>
    </div>
  )
}

// ----- 4-1: Platform Characteristics -----
export function PlatformCharacteristics() {
  const [selected, setSelected] = useState(null)

  const chars = [
    { name: 'Technology Standard', color: C.blue, icon: '⚙️', desc: 'Platform owner sets and controls the standard for interactions' },
    { name: 'Network Effects', color: C.gain, icon: '🌐', desc: 'Value grows as more participants join from multiple sides' },
    { name: 'Interdependence', color: C.purple, icon: '🔗', desc: 'Different sides need each other; value depends on all sides present' },
    { name: 'Pricing Strategy', color: C.orange, icon: '💰', desc: 'Subsidize one side, monetize the other to bootstrap network' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Four Core Platform Characteristics</p>
      <p style={subStyle}>What makes something a platform instead of a traditional business</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 12 }}>
        {chars.map(c => (
          <button key={c.name}
            onClick={() => setSelected(selected === c.name ? null : c.name)}
            style={{
              padding: '12px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: selected === c.name ? `${c.color}20` : `${c.color}08`,
              outline: selected === c.name ? `2px solid ${c.color}` : 'none',
              transition: 'all 0.2s'
            }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{c.icon}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.color }}>{c.name}</div>
          </button>
        ))}
      </div>

      {selected && (() => {
        const char = chars.find(c => c.name === selected)
        return (
          <div style={{
            padding: '12px 14px', borderRadius: 8,
            background: `${char.color}08`, border: `1px solid ${char.color}25`
          }}>
            <div style={{ fontSize: 10, color: 'var(--text-primary)' }}>{char.desc}</div>
          </div>
        )
      })()}
    </div>
  )
}

// ----- 4-1: Platform Examples Comparison -----
export function PlatformExamplesCompare() {
  const data = [
    { name: 'Apple iOS', sides: 5, revenue: 75, assets: 3 },
    { name: 'Uber', sides: 2, revenue: 85, assets: 1 },
    { name: 'Airbnb', sides: 2, revenue: 65, assets: 2 },
    { name: 'eBay', sides: 2, revenue: 45, assets: 2 },
    { name: 'Facebook', sides: 2, revenue: 90, assets: 1 }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Platform Examples Comparison</p>
      <p style={subStyle}>Different platforms vary in complexity and asset ownership</p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
          <YAxis tick={labelStyle} domain={[0, 100]} label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="sides" fill={C.blue} />
          <Bar dataKey="revenue" fill={C.orange} />
          <Bar dataKey="assets" fill={C.purple} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', gap: 10, marginTop: 8, fontSize: 9, justifyContent: 'center' }}>
        <div><span style={{ display: 'inline-block', width: 12, height: 12, background: C.blue, borderRadius: 2, marginRight: 4 }} />Sides</div>
        <div><span style={{ display: 'inline-block', width: 12, height: 12, background: C.orange, borderRadius: 2, marginRight: 4 }} />Revenue</div>
        <div><span style={{ display: 'inline-block', width: 12, height: 12, background: C.purple, borderRadius: 2, marginRight: 4 }} />Assets</div>
      </div>
    </div>
  )
}

// ----- 4-2: Value Chain vs Platform Flow -----
export function ValueChainVsPlatformFlow() {
  const [view, setView] = useState('tv')

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Value Chain vs Platform: Money Flows</p>
      <p style={subStyle}>Where money moves reveals the fundamental difference</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView('tv')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'tv' ? `${C.orange}20` : 'var(--bg-secondary)',
            color: view === 'tv' ? C.orange : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>TV Value Chain</button>
        <button onClick={() => setView('game')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'game' ? `${C.blue}20` : 'var(--bg-secondary)',
            color: view === 'game' ? C.blue : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Game Platform</button>
      </div>

      <svg style={{ width: '100%', height: 160 }} viewBox="0 0 400 160">
        {view === 'tv' && (
          <>
            <text x="200" y="20" style={{ fontSize: 9, fill: 'var(--text-sec)', fontWeight: 600, textAnchor: 'middle' }}>Linear Supply Chain</text>
            <rect x="30" y="40" width="45" height="30" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="3" />
            <text x="52" y="60" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Suppliers</text>
            <line x1="75" y1="55" x2="105" y2="55" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrowOrange)" />
            <rect x="105" y="40" width="45" height="30" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="3" />
            <text x="127" y="60" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Sony</text>
            <line x1="150" y1="55" x2="180" y2="55" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrowOrange)" />
            <rect x="180" y="40" width="45" height="30" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="3" />
            <text x="202" y="60" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Retailers</text>
            <line x1="225" y1="55" x2="255" y2="55" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrowOrange)" />
            <rect x="255" y="40" width="45" height="30" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="3" />
            <text x="277" y="60" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Consumer</text>

            <text x="200" y="110" style={{ fontSize: 9, fill: 'var(--text-sec)', fontWeight: 600, textAnchor: 'middle' }}>Money flows forward through chain</text>
            <line x1="52" y1="125" x2="277" y2="125" stroke={C.gain} strokeWidth="2.5" strokeDasharray="4 4" markerEnd="url(#arrowGain)" />
          </>
        )}

        {view === 'game' && (
          <>
            <text x="200" y="20" style={{ fontSize: 9, fill: 'var(--text-sec)', fontWeight: 600, textAnchor: 'middle' }}>Platform Connection Model</text>
            <circle cx="200" cy="60" r="20" fill={`${C.blue}15`} stroke={C.blue} strokeWidth="2" />
            <text x="200" y="65" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Sony PS5</text>

            <rect x="80" y="45" width="40" height="30" fill={`${C.purple}20`} stroke={C.purple} strokeWidth="1.5" rx="3" />
            <text x="100" y="65" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Devs</text>
            <line x1="120" y1="60" x2="180" y2="60" stroke={C.purple} strokeWidth="1.5" />

            <rect x="280" y="45" width="40" height="30" fill={`${C.gain}20`} stroke={C.gain} strokeWidth="1.5" rx="3" />
            <text x="300" y="65" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Gamers</text>
            <line x1="280" y1="60" x2="220" y2="60" stroke={C.gain} strokeWidth="1.5" />

            <line x1="100" y1="75" x2="160" y2="110" stroke={C.purple} strokeWidth="2.5" strokeDasharray="3 3" />
            <text x="120" y="100" style={{ fontSize: 8, fill: C.purple, fontWeight: 600 }}>Fee</text>

            <line x1="300" y1="75" x2="240" y2="110" stroke={C.gain} strokeWidth="2.5" />
            <text x="265" y="100" style={{ fontSize: 8, fill: C.gain, fontWeight: 600 }}>Pays</text>
          </>
        )}

        <defs>
          <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill={C.orange} />
          </marker>
          <marker id="arrowGain" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill={C.gain} />
          </marker>
        </defs>
      </svg>
    </div>
  )
}

// ----- 4-2: Innovation vs Transaction Platforms -----
export function InnovationVsTransaction() {
  const [view, setView] = useState('chart')

  const data = [
    { name: 'Innovation Platforms', value: 50, color: C.blue, examples: 'iOS, Android, Windows' },
    { name: 'Transaction Platforms', value: 50, color: C.orange, examples: 'Uber, Airbnb, eBay' }
  ]

  const comparison = [
    { aspect: 'Purpose', innovation: 'Enable creation and innovation', transaction: 'Facilitate exchange and matching' },
    { aspect: 'Primary Value', innovation: 'Tools and standards', transaction: 'Connection and trust' },
    { aspect: 'Developer Role', innovation: 'Create new products', transaction: 'Use existing products' },
    { aspect: 'Revenue Model', innovation: 'Licensing, subscriptions', transaction: 'Transaction fees, commission' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Innovation vs Transaction Platforms</p>
      <p style={subStyle}>Two fundamentally different platform archetypes</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView('chart')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'chart' ? `${C.blue}20` : 'var(--bg-secondary)',
            color: view === 'chart' ? C.blue : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Pie Chart</button>
        <button onClick={() => setView('table')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'table' ? `${C.orange}20` : 'var(--bg-secondary)',
            color: view === 'table' ? C.orange : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Comparison</button>
      </div>

      {view === 'chart' && (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={80}
              label={({ name, color }) => <text style={{ fontSize: 9, fill: color, fontWeight: 700 }}>{name}</text>}>
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={v => [`${v}%`, 'Share']} />
          </PieChart>
        </ResponsiveContainer>
      )}

      {view === 'table' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {comparison.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 8 }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--text-primary)' }}>{row.aspect}</div>
              <div style={{ fontSize: 8, color: 'var(--text-primary)', padding: '6px 8px', background: `${C.blue}08`, borderRadius: 4 }}>{row.innovation}</div>
              <div style={{ fontSize: 8, color: 'var(--text-primary)', padding: '6px 8px', background: `${C.orange}08`, borderRadius: 4 }}>{row.transaction}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ----- 4-3: Standards and Control Flow -----
export function StandardsControlFlow() {
  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Standards Create Control</p>
      <p style={subStyle}>How platform owners use technical standards to create value capture</p>

      <svg style={{ width: '100%', height: 180 }} viewBox="0 0 400 180">
        <defs>
          <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill={C.blue} />
          </marker>
        </defs>

        <rect x="20" y="30" width="60" height="40" fill={`${C.blue}20`} stroke={C.blue} strokeWidth="2" rx="4" />
        <text x="50" y="58" style={{ fontSize: 9, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Platform Owner</text>

        <line x1="80" y1="50" x2="120" y2="50" stroke={C.blue} strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
        <text x="100" y="45" style={{ fontSize: 8, fill: 'var(--text-sec)' }}>Sets</text>

        <rect x="120" y="30" width="60" height="40" fill={`${C.orange}20`} stroke={C.orange} strokeWidth="2" rx="4" />
        <text x="150" y="58" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Standard</text>

        <line x1="180" y1="50" x2="220" y2="50" stroke={C.blue} strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
        <text x="200" y="45" style={{ fontSize: 8, fill: 'var(--text-sec)' }}>Controls</text>

        <rect x="220" y="30" width="70" height="40" fill={`${C.purple}20`} stroke={C.purple} strokeWidth="2" rx="4" />
        <text x="255" y="58" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Interactions</text>

        <line x1="290" y1="50" x2="330" y2="50" stroke={C.blue} strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
        <text x="310" y="45" style={{ fontSize: 8, fill: 'var(--text-sec)' }}>Captures</text>

        <rect x="330" y="30" width="50" height="40" fill={`${C.gain}20`} stroke={C.gain} strokeWidth="2" rx="4" />
        <text x="355" y="58" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Value</text>

        <line y1="90" x1="20" x2="380" y2="90" stroke="var(--border-color)" strokeDasharray="2 2" />

        <text x="20" y="120" style={{ fontSize: 9, fill: 'var(--text-primary)', fontWeight: 600 }}>Example: Plaid API Standard</text>
        <rect x="20" y="130" width="80" height="30" fill={`${C.teal}15`} stroke={C.teal} strokeWidth="1.5" rx="3" />
        <text x="60" y="151" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Banks</text>

        <line x1="100" y1="145" x2="150" y2="145" stroke={C.teal} strokeWidth="1.5" />
        <text x="125" y="140" style={{ fontSize: 7, fill: 'var(--text-sec)' }}>Plaid API</text>

        <rect x="150" y="130" width="80" height="30" fill={`${C.indigo}15`} stroke={C.indigo} strokeWidth="1.5" rx="3" />
        <text x="190" y="151" style={{ fontSize: 8, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Plaid</text>

        <line x1="230" y1="145" x2="280" y2="145" stroke={C.indigo} strokeWidth="1.5" />
        <text x="255" y="140" style={{ fontSize: 7, fill: 'var(--text-sec)' }}>API</text>

        <rect x="280" y="130" width="80" height="30" fill={`${C.cyan}15`} stroke={C.cyan} strokeWidth="1.5" rx="3" />
        <text x="320" y="145" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>Apps</text>
        <text x="320" y="156" style={{ fontSize: 7, fill: 'var(--text-primary)', fontWeight: 600, textAnchor: 'middle' }}>(Venmo, etc)</text>
      </svg>
    </div>
  )
}

// ----- 4-3: Betamax vs VHS -----
export function BetamaxVsVHS() {
  const [view, setView] = useState('timeline')

  const timelineEvents = [
    { yr: 1975, evt: 'Betamax launch', color: C.purple },
    { yr: 1976, evt: 'VHS launch', color: C.blue },
    { yr: 1980, evt: 'Movie studios license VHS', color: C.gain },
    { yr: 1988, evt: 'VHS becomes dominant', color: C.loss }
  ]

  const comparison = [
    { feature: 'Recording Time', betamax: '1 hour', vhs: '4 hours' },
    { feature: 'Price', betamax: 'Higher', vhs: 'Lower' },
    { feature: 'Image Quality', betamax: 'Superior', vhs: 'Good' },
    { feature: 'Movie Selection', betamax: 'Limited', vhs: 'Abundant' }
  ]

  const compData = [
    { name: 'Recording Time', Betamax: 60, VHS: 240 },
    { name: 'Movie Titles', Betamax: 20, VHS: 80 },
    { name: 'Market Share %', Betamax: 10, VHS: 90 }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Betamax vs VHS: Format Wars</p>
      <p style={subStyle}>Superior technology does not always win. Complementary assets matter.</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView('timeline')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'timeline' ? `${C.purple}20` : 'var(--bg-secondary)',
            color: view === 'timeline' ? C.purple : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Timeline</button>
        <button onClick={() => setView('compare')}
          style={{
            flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: view === 'compare' ? `${C.blue}20` : 'var(--bg-secondary)',
            color: view === 'compare' ? C.blue : 'var(--text-sec)',
            fontSize: 10, fontWeight: 600
          }}>Features</button>
      </div>

      {view === 'timeline' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
          {timelineEvents.map((e, i) => (
            <div key={i} style={{
              padding: '10px 12px', borderRadius: 6,
              background: `${e.color}10`, border: `1px solid ${e.color}30`
            }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: e.color }}>{e.yr}</div>
              <div style={{ fontSize: 10, color: 'var(--text-primary)' }}>{e.evt}</div>
            </div>
          ))}
        </div>
      )}

      {view === 'compare' && (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={compData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="name" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
            <YAxis tick={labelStyle} label={{ value: 'Value', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="Betamax" fill={C.purple} />
            <Bar dataKey="VHS" fill={C.blue} />
          </BarChart>
        </ResponsiveContainer>
      )}

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>
        VHS won not because of better technology, but because studios licensed more films
      </div>
    </div>
  )
}

// ----- 4-3: Network Effects Simulator -----
export function NetworkEffectsSimulator() {
  const [nodes, setNodes] = useState(3)

  const connections = nodes * (nodes - 1) / 2
  const data = useMemo(() => {
    const pts = []
    for (let n = 1; n <= nodes; n++) {
      pts.push({ n, value: n * (n - 1) / 2 })
    }
    return pts
  }, [nodes])

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Network Effects Simulator</p>
      <p style={subStyle}>Value grows exponentially as nodes increase. Watch connections multiply!</p>

      <button
        onClick={() => setNodes(Math.min(nodes + 1, 20))}
        style={{
          width: '100%', padding: '10px', marginBottom: 12, borderRadius: 6, border: 'none',
          cursor: nodes < 20 ? 'pointer' : 'not-allowed', background: C.blue, color: 'white',
          fontWeight: 600, fontSize: 11
        }}>
        Add Node ({nodes}/20)
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
        <div style={{
          padding: '12px', borderRadius: 8, background: `${C.blue}10`,
          border: `1px solid ${C.blue}30`, textAlign: 'center'
        }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.blue }}>{nodes}</div>
          <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>Nodes</div>
        </div>
        <div style={{
          padding: '12px', borderRadius: 8, background: `${C.purple}10`,
          border: `1px solid ${C.purple}30`, textAlign: 'center'
        }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.purple }}>{connections}</div>
          <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>Connections</div>
        </div>
        <div style={{
          padding: '12px', borderRadius: 8, background: `${C.gain}10`,
          border: `1px solid ${C.gain}30`, textAlign: 'center'
        }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.gain }}>{Math.round(connections ** 1.5)}</div>
          <div style={{ fontSize: 8, color: 'var(--text-sec)' }}>Value Index</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="n" tick={labelStyle} label={{ value: 'Nodes', position: 'insideBottom', offset: -2, style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <YAxis tick={labelStyle} label={{ value: 'Connections', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [v, 'Connections']} />
          <Line type="monotone" dataKey="value" stroke={C.blue} strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 9, color: 'var(--text-sec)', marginTop: 6, textAlign: 'center' }}>
        Formula: Direct effects = n(n-1)/2
      </div>
    </div>
  )
}

// ----- 4-3: Platform Competition Timeline -----
export function PlatformCompetitionTimeline() {
  const data = [
    { yr: 2003, Friendster: 0, MySpace: 0, Facebook: 0, 'Google+': 0 },
    { yr: 2004, Friendster: 3, MySpace: 5, Facebook: 0.1, 'Google+': 0 },
    { yr: 2005, Friendster: 4, MySpace: 15, Facebook: 2, 'Google+': 0 },
    { yr: 2006, Friendster: 3, MySpace: 25, Facebook: 12, 'Google+': 0 },
    { yr: 2008, Friendster: 2, MySpace: 35, Facebook: 80, 'Google+': 0 },
    { yr: 2010, Friendster: 0.1, MySpace: 15, Facebook: 120, 'Google+': 0 },
    { yr: 2011, Friendster: 0, MySpace: 8, Facebook: 140, 'Google+': 30 },
    { yr: 2015, Friendster: 0, MySpace: 2, Facebook: 200, 'Google+': 90 },
    { yr: 2019, Friendster: 0, MySpace: 1, Facebook: 230, 'Google+': 0 }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Platform Competition: Social Networks</p>
      <p style={subStyle}>Network effects create winner-take-all dynamics</p>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="yr" tick={labelStyle} />
          <YAxis tick={labelStyle} label={{ value: 'Users (millions)', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="Friendster" stackId="1" fill={C.slate} stroke={C.slate} />
          <Area type="monotone" dataKey="MySpace" stackId="1" fill={C.orange} stroke={C.orange} />
          <Area type="monotone" dataKey="Google+" stackId="1" fill={C.red} stroke={C.red} />
          <Area type="monotone" dataKey="Facebook" stackId="1" fill={C.blue} stroke={C.blue} />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>
        Facebook dominated through network effects. Competitors could not overcome the chasm.
      </div>
    </div>
  )
}

// ----- 4-4: Hagiu Framework -----
export function HagiuFramework() {
  const [selectedPlatform, setSelectedPlatform] = useState('iOS')

  const platformData = {
    iOS: { sides: 90, design: 85, governance: 95, pricing: 80 },
    Uber: { sides: 65, design: 70, governance: 75, pricing: 85 },
    Airbnb: { sides: 70, design: 65, governance: 70, pricing: 60 }
  }

  const data = [
    { category: 'Sides', iOS: platformData.iOS.sides, Uber: platformData.Uber.sides, Airbnb: platformData.Airbnb.sides },
    { category: 'Design', iOS: platformData.iOS.design, Uber: platformData.Uber.design, Airbnb: platformData.Airbnb.design },
    { category: 'Governance', iOS: platformData.iOS.governance, Uber: platformData.Uber.governance, Airbnb: platformData.Airbnb.governance },
    { category: 'Pricing', iOS: platformData.iOS.pricing, Uber: platformData.Uber.pricing, Airbnb: platformData.Airbnb.pricing }
  ]

  const current = data.map(d => ({ name: d.category, value: d[selectedPlatform] }))

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Hagiu Framework: Four Dimensions</p>
      <p style={subStyle}>Assess platforms across sides, design, governance, and pricing</p>

      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {['iOS', 'Uber', 'Airbnb'].map(p => (
          <button key={p} onClick={() => setSelectedPlatform(p)}
            style={{
              flex: 1, padding: '8px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: selectedPlatform === p ? `${C.blue}20` : 'var(--bg-secondary)',
              color: selectedPlatform === p ? C.blue : 'var(--text-sec)',
              fontSize: 10, fontWeight: 600
            }}>{p}</button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={current} margin={{ top: 5, right: 10, left: 0, bottom: 5 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis type="number" tick={labelStyle} domain={[0, 100]} />
          <YAxis dataKey="name" type="category" tick={{ fontSize: 9, fill: 'var(--text-sec)' }} />
          <Tooltip contentStyle={tooltipStyle} formatter={v => [v, 'Score']} />
          <Bar dataKey="value" fill={C.blue} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center' }}>
        Hover to see framework: How many sides? Control design? Governance model? Pricing strategy?
      </div>
    </div>
  )
}

// ----- 4-4: Pricing Strategies Comparison -----
export function PricingStrategiesCompare() {
  const data = [
    { strategy: 'Subsidization', freeUsers: 80, paidSide: 20, color: C.blue },
    { strategy: 'Transaction Fees', side1: 50, side2: 50, color: C.orange },
    { strategy: 'Freemium', freeUsers: 85, premium: 15, color: C.purple }
  ]

  const chartData = [
    { name: 'Subsidization', 'Free Users': 80, 'Advertisers': 20 },
    { name: 'Transaction Fees', 'Buyers': 50, 'Sellers': 50 },
    { name: 'Freemium', 'Free Users': 85, 'Premium': 15 }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Platform Pricing Strategies</p>
      <p style={subStyle}>Different approaches to monetizing multiple sides</p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" tick={{ fontSize: 8, fill: 'var(--text-sec)' }} />
          <YAxis tick={labelStyle} label={{ value: '% Revenue', angle: -90, position: 'insideLeft', style: { fontSize: 9, fill: 'var(--text-sec)' } }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="Free Users" fill={C.blue} />
          <Bar dataKey="Advertisers" fill={C.orange} />
          <Bar dataKey="Buyers" fill={C.purple} />
          <Bar dataKey="Sellers" fill={C.gain} />
          <Bar dataKey="Premium" fill={C.rose} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center' }}>
        Key insight: Subsidize the demand side, monetize the supply side
      </div>
    </div>
  )
}

// ----- 4-5: Switching Costs Spectrum -----
export function SwitchingCostsSpectrum() {
  const [hovered, setHovered] = useState(null)

  const platforms = [
    { name: 'Uber/Lyft', x: 15, cost: 'Low', desc: 'Apps are easy to install. No switching friction.' },
    { name: 'Spotify', x: 45, cost: 'Medium', desc: 'Playlists and recommendations, but music is available elsewhere.' },
    { name: 'Apple iOS', x: 75, cost: 'High', desc: 'App ecosystem, iCloud, integrations with other Apple devices.' },
    { name: 'Enterprise SAP', x: 95, cost: 'Very High', desc: 'Entire business processes embedded. Years of customization.' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Switching Costs: Low to High</p>
      <p style={subStyle}>Platforms with high switching costs capture more value from users</p>

      <div style={{ position: 'relative', marginBottom: 32 }}>
        <div style={{
          height: 30, background: 'linear-gradient(to right, var(--bg-secondary) 0%, var(--border-color) 50%, var(--bg-secondary) 100%)',
          borderRadius: 6, position: 'relative', display: 'flex', alignItems: 'center'
        }}>
          <div style={{ position: 'absolute', left: 0, fontSize: 9, color: 'var(--text-sec)', fontWeight: 600 }}>Low</div>
          <div style={{ position: 'absolute', left: '50%', fontSize: 9, color: 'var(--text-sec)', fontWeight: 600, transform: 'translateX(-50%)' }}>Medium</div>
          <div style={{ position: 'absolute', right: 0, fontSize: 9, color: 'var(--text-sec)', fontWeight: 600 }}>High</div>
        </div>

        {platforms.map((p, i) => (
          <button key={i}
            onMouseEnter={() => setHovered(p.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute', left: `${p.x}%`, top: 40, transform: 'translateX(-50%)',
              width: 80, padding: '8px 6px', background: hovered === p.name ? `${C.blue}20` : 'var(--bg-secondary)',
              border: hovered === p.name ? `2px solid ${C.blue}` : '1px solid var(--border-color)',
              borderRadius: 6, cursor: 'pointer', textAlign: 'center'
            }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--text-primary)' }}>{p.name}</div>
            {hovered === p.name && (
              <div style={{ fontSize: 7, color: 'var(--text-sec)', marginTop: 4 }}>{p.desc}</div>
            )}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>
        Hover over platforms to see why their switching costs are high or low
      </div>
    </div>
  )
}

// ----- 4-5: Uber and Lyft Multi-Homing -----
export function UberLyftMultihoming() {
  const riderData = [
    { label: 'Uber Only', value: 35, color: C.blue },
    { label: 'Both Uber & Lyft', value: 50, color: C.purple },
    { label: 'Lyft Only', value: 15, color: C.orange }
  ]

  const driverData = [
    { label: 'Uber Only', value: 25, color: C.blue },
    { label: 'Both Platforms', value: 70, color: C.purple },
    { label: 'Lyft Only', value: 5, color: C.orange }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Uber and Lyft: Multi-Homing Reality</p>
      <p style={subStyle}>Most users and drivers use both platforms, reducing lock-in</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Riders</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Pie data={riderData} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={60}
                label={({ label, value }) => `${label} ${value}%`}>
                {riderData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Drivers</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Pie data={driverData} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={60}
                label={({ label, value }) => `${label} ${value}%`}>
                {driverData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-sec)', textAlign: 'center', fontStyle: 'italic' }}>
        High multi-homing reduces platform power to control supply and pricing
      </div>
    </div>
  )
}

// ----- 4-6: Module 4 Concept Map -----
export function Module4ConceptMap() {
  const [highlighted, setHighlighted] = useState(null)

  const concepts = [
    { id: 'platforms', label: 'Multi-Sided Platforms', color: C.blue, x: 50, y: 15 },
    { id: 'standards', label: 'Standards & Control', color: C.orange, x: 15, y: 40 },
    { id: 'network', label: 'Network Effects', color: C.gain, x: 50, y: 40 },
    { id: 'multi-homing', label: 'Multi-Homing', color: C.purple, x: 85, y: 40 },
    { id: 'governance', label: 'Governance', color: C.teal, x: 25, y: 65 },
    { id: 'pricing', label: 'Pricing Strategy', color: C.rose, x: 75, y: 65 },
    { id: 'value-capture', label: 'Value Capture', color: C.indigo, x: 50, y: 85 }
  ]

  const connections = [
    { from: 'platforms', to: 'standards' },
    { from: 'platforms', to: 'network' },
    { from: 'platforms', to: 'multi-homing' },
    { from: 'standards', to: 'governance' },
    { from: 'network', to: 'governance' },
    { from: 'network', to: 'pricing' },
    { from: 'multi-homing', to: 'pricing' },
    { from: 'governance', to: 'value-capture' },
    { from: 'pricing', to: 'value-capture' }
  ]

  return (
    <div style={cardStyle}>
      <p style={headingStyle}>Module 4 Concept Map</p>
      <p style={subStyle}>How multi-sided platform concepts connect</p>

      <div style={{
        position: 'relative', width: '100%', height: 340, background: 'var(--bg-secondary)',
        borderRadius: 8, border: '1px solid var(--border-color)', marginBottom: 12,
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'
      }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {connections.map((conn, i) => {
            const from = concepts.find(c => c.id === conn.from)
            const to = concepts.find(c => c.id === conn.to)
            if (!from || !to) return null
            const x1 = (from.x / 100) * 400
            const y1 = (from.y / 100) * 340
            const x2 = (to.x / 100) * 400
            const y2 = (to.y / 100) * 340
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
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6, fontSize: 8
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


