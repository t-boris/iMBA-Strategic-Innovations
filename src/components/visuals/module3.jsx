import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine, Area, AreaChart, Legend,
  PieChart, Pie, ComposedChart, Scatter
} from 'recharts'
import { C, cardStyle, labelStyle, headingStyle, subStyle, tooltipStyle } from './shared'

// =========================================================================
//  MODULE 3: Markets for Technology, Open Innovation, Vertical Integration
// =========================================================================

// ----- M3-1a: Open vs Closed Innovation -----
export function OpenVsClosedInnovation() {
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
export function TechnologyMarketFlow() {
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
export function ValueChainExplorer() {
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
export function AppleVsSamsung() {
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
export function ValueCaptureMechanisms() {
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
export function IPEconomics() {
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
export function DiscreteVsComplex() {
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
export function TechVsProductMarket() {
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
export function ModernaVsBiontech() {
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
export function Module3ConceptMap() {
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

export function PharmaValueChain() {
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
export function PatentEffectivenessChart() {
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
export function ValueCaptureFramework() {
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
export function MakeBuySellFramework() {
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
export function StrategicAssessmentTool() {
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


