export const module2 =   {
    id: 2,
    title: 'Disruptive Innovation',
    description: 'How startups disrupt market leaders through disruptive innovation and strategic renewal.',
    lectures: [
      {
        id: '2-1',
        moduleId: 2,
        title: 'Sustaining vs Disruptive Innovation',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Module 2 Overview',
            content: `This module examines how startups disrupt market leaders and why established companies struggle to respond. We'll explore Christensen's framework of sustaining vs. disruptive innovation, why incumbents fail despite recognizing threats, and how companies can successfully renew themselves. Key insight: disruption is not about technology — it's about business models and the ability to cannibalize existing revenue streams.`,
            keyPoints: [
              'Disruptive innovation is how startups defeat entrenched competitors',
              'Difference between sustaining and disruptive technologies',
              'Incumbents have structural and cultural reasons for inaction',
              'Strategic renewal requires separating disruptive units from core business'
            ]
          },
          {
            title: 'Sustaining vs Disruptive Technologies',
            content: `Clayton Christensen's foundational framework from "The Innovator's Dilemma" distinguishes two types of innovation. Sustaining innovations maintain existing performance trajectory — improving along dimensions customers already care about. Manufacturers make TVs faster, lighter, cheaper — same performance axis. Disruptive innovations create NEW performance trajectories — often starting lower on traditional metrics but introducing new attributes customers value. Early digital cameras had lower resolution than film (disruptive for photography), but introduced convenience, elimination of film cost, instant digital sharing. Incumbents ignore disruptive technologies because they don't meet near-term customer needs.`,
            keyPoints: [
              'Sustaining: improve along existing performance axis',
              'Disruptive: introduce new performance axis, often starting lower',
              'Film cameras vs. digital cameras — different performance curves',
              'Incumbents focus on sustaining; miss disruptive threats'
            ],
            interactive: 'sustaining-vs-disruptive'
          },
          {
            title: 'Performance Trajectories',
            content: `The core insight is that sustaining technologies maintain one trajectory while disruptive technologies create a different one. Sustaining trajectory: linear or steady improvement on the established axis (storage capacity, processing speed, image quality). Disruptive trajectory: starts lower, then curves upward, eventually exceeding the sustaining trajectory. This crossing point is critical — when disruptive performance becomes adequate for the mainstream market, disruption accelerates. Early disk drives: 14" drives maintained high capacity trajectory, 8" drives were disruptive (lower capacity, but better for smaller systems), eventually 8" crossed over and became mainstream.`,
            keyPoints: [
              'Sustaining trajectory: steady improvement on existing axis',
              'Disruptive trajectory: starts lower, curves upward, eventually crosses over',
              'Crossing point: when disruption becomes adequate for mainstream',
              'Disk drive evolution: 14" → 8" → 5.25" → 3.5" each displaced the previous'
            ],
            interactive: 'disruption-trajectory'
          },
          {
            title: 'Two Conditions for Disruption',
            content: `For a technology to be disruptive (not just different or inferior), two conditions must hold. First: the disruptive technology underperforms on traditional dimensions initially. Digital cameras had lower resolution than film cameras — not competitive on the primary metric incumbents cared about. Second: the disruptive technology's performance MUST improve to meet mainstream market needs. Digital camera resolution improved from 1MP to 12MP to 50MP+, eventually exceeding what consumers required. Without both conditions, you have merely an inferior product, not a disruption. Condition 1 explains incumbent inaction; Condition 2 explains inevitable disruption.`,
            keyPoints: [
              'Condition 1: Lower initial performance on traditional metrics',
              'Condition 2: Performance improves to meet mainstream requirements',
              'Both conditions must hold — absence of either prevents disruption',
              'Disk drives met both: 3.5" drives had lower capacity initially, but improved'
            ]
          },
          {
            title: 'Disk Drive Industry Example',
            content: `The disk drive industry provides the clearest historical example. In the 1970s, 14" disk drives dominated mainframe computers — huge storage, high margins. Then 8" drives appeared (lower capacity, served mini-computers), not competitive with 14" on traditional metrics. Mainstream computer manufacturers ignored 8" — didn't meet their customers' needs. But 8" improved in capacity, displaced 14". Then 5.25" drives disrupted 8" (served PCs). Then 3.5" drives disrupted 5.25" (served laptops). Each displacement followed the same pattern: new entrant with "inferior" technology on traditional axis, ignored by incumbent, eventually crossed the performance curve and became dominant.`,
            keyPoints: [
              '14" drives → mainframe segment',
              '8" drives disrupted 14" (mini-computers: lower capacity okay)',
              '5.25" drives disrupted 8" (PCs: even lower capacity acceptable)',
              '3.5" drives disrupted 5.25" (laptops: smallest capacity)',
              'Each cycle: incumbent ignored threat, then lost market share'
            ]
          },
          {
            title: 'Key Strategic Implications',
            content: `Why do incumbents fail? The Innovator's Dilemma: managers are rationally responding to current customer needs. Listening to customers is sound strategy in sustaining competition. But disruptive technologies are not demanded by mainstream customers yet. At the time 8" drives emerged, mainframe manufacturers' customers needed MORE storage capacity, not less. So investing in 8" drives meant ignoring customer demands. This is rational from a mainstream market perspective but catastrophic from a total market perspective. Incumbents stay close to current customers, miss emerging markets. New entrants, unburdened by existing customer relationships, serve the emerging market, and eventually displace the incumbent.`,
            keyPoints: [
              'Innovator\'s Dilemma: incumbent stays close to current customers',
              'Listening to customers → rational inaction on disruptive threats',
              'Disruptive technologies serve non-consumption initially',
              'Incumbents miss emerging markets while optimizing for mainstream',
              'New entrants serve emerging markets, eventually displace leaders'
            ]
          }
        ]
      },
      {
        id: '2-2',
        moduleId: 2,
        title: 'Disruption Examples - Telegraph, Telephone & iMBA',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Telegraph vs Telephone',
            content: `Western Union, founded 1844, dominated message transmission for 133 years (1844-1877). Telegraph: distance communication, operator-mediated, specialized skill required, asynchronous. When Bell's telephone was invented in 1877, Western Union executives dismissed it — "a toy." Telephone: voice communication, individual users could operate without specialized skill, synchronous, fundamentally different user experience. Yet the two coexisted for over a century. In 1940, telephone usage exceeded telegraph for the first time. Western Union didn't disappear immediately — they adapted to money transfer. Last telegram sent in 2013 (136 years after telephone's invention!). Disruption is glacially slow — markets coexist for decades.`,
            keyPoints: [
              'Western Union (telegraph) founded 1844, dominated 133 years',
              'Bell telephone invented 1877 — WU dismissed it as a toy',
              'Telegraph: operator-mediated, asynchronous; Telephone: user-operated, synchronous',
              'Telephone exceeded telegraph usage in 1940 (63 years after invention)',
              'Western Union adapted: telegrams → money transfers',
              'Last telegram sent 2013 — disruption took 136 years to fully complete'
            ],
            interactive: 'telegraph-telephone-coexistence'
          },
          {
            title: 'Lesson: Disruption is a Process',
            content: `Disruption is not a single moment but a process spanning years or decades. Markets coexist. We see this everywhere: Walmart didn't eliminate independent retailers (many still exist); Amazon didn't eliminate Walmart and physical retail (all three coexist); delivery disruption hasn't eliminated supermarkets. The lesson: disruption doesn't mean incumbent extinction, but displacement from the dominant position. Competitors adapt, reposition, serve remaining niches. For strategy: assume long timescales, prepare for coexistence periods, and recognize that being "disrupted" doesn't mean bankruptcy.`,
            keyPoints: [
              'Disruption spans years or decades, not instantaneous',
              'Old and new markets coexist (Walmart + Amazon + mom-and-pop stores)',
              'Incumbent doesn\'t disappear — adapts, repositions, serves niches',
              '"Disrupted" doesn\'t mean extinct — it means displaced from dominance',
              'Long transitions create opportunities for adaptation and survival'
            ]
          },
          {
            title: 'iMBA as New Market Disruption',
            content: `Traditional MBA constraints: on-campus, full-time, age-focused (22-30), ~$100k+ tuition, 2-year commitment. Targets high-achievers who can afford to leave workforce. Non-consumption: working professionals (age 30-50+), geographically distributed, need flexible scheduling, seek specialized knowledge. iMBA disrupts by removing constraints: online, asynchronous, part-time, ~$20k total cost, 1-year completion. Different bundle of attributes: lower cost, flexibility, accessibility. Not "better MBA for traditional students" — it's a different product for a different market. Like digital cameras: not competing on resolution (traditional MBA on prestige), but on attributes those consumers value (accessibility, cost, flexibility).`,
            keyPoints: [
              'Traditional MBA: on-campus, full-time, $100k+, 2 years, age 22-30',
              'Non-consumption: working professionals, distributed, need flexibility',
              'iMBA: online, async, part-time, $20k, 1 year — different bundle',
              'Not "better MBA for traditional students" — different market entirely',
              'Like digital cameras: not competing on traditional dimensions'
            ]
          },
          {
            title: 'Reimagining Education',
            content: `Key insight from developing iMBA: separate content delivery from engagement. Traditional MBA constraint: all students in one room, professor lectures, live discussion. iMBA: video lectures (content) separated from interactive sessions (engagement). Students consume content asynchronously, then engage synchronously with cohort. This separation enables: asynchronous learning (watch videos on your schedule), global accessibility (no geographic constraint), instructor focus (prep one lecture, deliver to thousands). The newspaper industry's disruption teaches this lesson: newspapers tried to be everything (news, analysis, classifieds, entertainment) simultaneously. Digital natives separated these functions — news from aggregators, classifieds from Craigslist, entertainment from YouTube. They adapted the model by unbundling.`,
            keyPoints: [
              'Separate content delivery from engagement — key architectural insight',
              'Content: asynchronous video lectures',
              'Engagement: synchronous discussion with cohorts',
              'Enables: flexibility, global reach, instructor scalability',
              'Newspaper lesson: separate functions enabled digital disruption'
            ]
          },
          {
            title: 'Lesson: Start with a Clean Slate',
            content: `The second key lesson: don't force existing elements into disruptive model. If iMBA tried to replicate traditional MBA online (same 3-hour lectures delivered synchronously, same mandatory attendance, same residential week), it would fail. Disruption requires fundamentally rethinking constraints from scratch. In retailing: early online retailers didn't try to replicate department stores online. They designed for online's unique advantages (unlimited selection, no real-estate cost, can serve small markets profitably). In automotive: Tesla didn't try to build cars like incumbents and sell online. They rethought from scratch: batteries as primary cost driver, not combustion engines; direct-to-consumer sales; software as core competency. Clean-slate thinking enables breakthrough innovations.`,
            keyPoints: [
              'Don\'t force old model into new environment',
              'Rethink constraints and business model from zero',
              'Online retailers: designed for unlimited selection + small markets',
              'Tesla: rethought cost drivers, sales channels, core competencies',
              'Clean-slate design captures disruption\'s full advantage'
            ]
          },
          {
            title: 'Interactive: Telegraph vs Telephone Timeline',
            content: `Use this visualization to see how long disruption actually takes. Telegraph rose to dominance 1844-1920s. Telephone invented 1877, gradually gained share. Markets coexisted for decades. Last telegram 2013 — 136 years after telephone's invention. This slow process explains why incumbents often don't perceive threats until too late.`,
            interactive: 'disruption-timeline'
          }
        ]
      },
      {
        id: '2-3',
        moduleId: 2,
        title: 'Disruption Examples - Kodak, Steel Mills & Automobiles',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Kodak\'s Rise and Fall',
            content: `Kodak, founded 1888 by George Eastman, revolutionized photography through innovation and business model. First film camera (1888) made photography accessible to non-professionals. Razor-and-razor-blade strategy: sell inexpensive cameras, make profit on film, paper, chemicals (consumables). By 1970s, Kodak held 85% of camera sales and 90% of film market share — one of the 20th century's dominant companies. But Kodak couldn't cannibalize its own cash cow. Digital cameras were emerging, and Kodak understood the threat. Steve Sasson, Kodak engineer, built the first digital camera in 1975. CEO reaction: "That's cute, but don't tell anyone about it." Kodak executives knew digital would displace film but couldn't psychologically or financially commit to cannibalization.`,
            keyPoints: [
              'Kodak founded 1888, razor-blade strategy (cheap cameras, expensive film)',
              '85% camera sales, 90% film market by 1970s',
              'Steve Sasson built first digital camera in 1975',
              'CEO reaction: "cute but don\'t tell anyone"',
              'Executives recognized threat but wouldn\'t cannibalize film revenue'
            ],
            interactive: 'kodak-digital-timeline'
          },
          {
            title: 'The Digital Camera Story',
            content: `Digital camera development: Kodak internal (1975) → Sony external (1981) → Canon, Nikon, others. Kodak had the technology first but didn't commercialize. Sony, unburdened by film business, pursued digital aggressively. By 1990s, digital cameras were adequate for consumers. Film sales peaked in 2000, then entered terminal decline. Kodak filed for bankruptcy in 2012 — digital disruption turned them from $35B revenue (late 1990s) to irrelevance. The irony: Kodak invented the disruptive technology but couldn't commercialize it because it threatened their core business. This is the Innovator's Dilemma in extreme form — not ignorance or lack of technology, but inability to cannibalize.`,
            keyPoints: [
              'Kodak invented digital camera (1975) — first, not last',
              'Sony pursued digital without film baggage (1981)',
              'Kodak delayed commercialization due to cannibalization fear',
              'Digital peaked consumer acceptance 1990s',
              'Film revenue declined 2000 onward',
              'Kodak bankruptcy 2012 — from $35B to zero'
            ]
          },
          {
            title: 'Lessons from Kodak',
            content: `Three lessons emerge from Kodak's failure. First: cognitive biases. Kodak's film business was so profitable, executives couldn't imagine a world without film. Cognitive bias: we extrapolate from what we know. Second: willingness to cannibalize. Even with perfect foresight, Kodak couldn't bring themselves to invest heavily in a technology that displaced their existing revenue. Third: don't mix disruptive technology with sustaining business model. If Kodak had separated digital cameras into an autonomous unit (different supply chains, pricing, channels), they might have succeeded. Instead, they tried to commercialize digital through film-based infrastructure — doomed from start.`,
            keyPoints: [
              'Cognitive bias: extrapolate from known models, miss disruption',
              'Willingness to cannibalize: executives couldn\'t embrace self-disruption',
              'Don\'t mix disruptive tech with sustaining model',
              'Autonomous structure needed for disruptive business',
              'Integration kills disruption — separation protects it'
            ]
          },
          {
            title: 'Steel: Integrated Mills vs Mini Mills',
            content: `Integrated steel mills (1900s-1970s): blast furnaces, coking plants, rolling mills all on-site. Cost: billions of dollars in capital. Dominant players: U.S. Steel, Bethlehem Steel. Mini mills (1960s onward): smaller, lower-cost, can melt scrap steel. Disruption started in rebar — bottom-of-market products. Integrated mills didn't bother with rebar (low margin). Mini mills could operate on $30-50M investment while integrated mills needed billions. Mini mills improved: from rebar to wire rod to structural steel. By 1990s, mini mills had captured major market share. Integrated mills declared bankruptcy (Bethlehem, LTV) while mini mills (Nucor, Steel Dynamics) thrived. Lesson: incumbents ignore bottom-market disruptions — they seem unprofitable at scale.`,
            keyPoints: [
              'Integrated mills: billions in capital, full vertical integration',
              'Mini mills: $30-50M investment, scrap input, flexible operations',
              'Disruption started at market bottom (rebar — unprofitable for incumbents)',
              'Mini mills improved product over time, captured market share',
              'Incumbents ignored disruption, eventually failed',
              'Bottom-up disruption: focus on low end, improve upward'
            ],
            interactive: 'steel-disruption'
          },
          {
            title: 'Horse Carriages to Cars: Studebaker',
            content: `Horse carriage companies completely dominated transportation for centuries. When automobiles appeared (1890s), carriage companies were well-positioned — manufacturing, distribution, brand recognition. Most failed. Studebaker (carriage company) successfully transitioned to automobiles, becoming one of early auto leaders. Key difference: Studebaker executives saw opportunity (gain frame), not threat (loss frame). Rather than defend horse carriages, they invested in automobile manufacturing. But even Studebaker eventually failed — by 1960s, displaced by Ford, GM, Chrysler. The lesson: even successful transition from one technology to another is difficult. Capability in one domain doesn't automatically transfer. Studebaker had manufacturing capability, but lacked the scale and distribution networks automobiles required. Transition is possible, but hard.`,
            keyPoints: [
              'Carriage companies had advantages: manufacturing, distribution, brand',
              'Most failed; Studebaker succeeded (temporarily)',
              'Studebaker saw opportunity (gain frame), not loss frame',
              'But Studebaker eventually failed — couldn\'t compete at scale',
              'Technology transition possible but difficult',
              'Capabilities don\'t automatically transfer to new domain'
            ]
          },
          {
            title: 'Explore vs Exploit: The Opposable Mind',
            content: `Bob Martin's concept of "opposable mind" — ability to hold two conflicting ideas simultaneously. Kodak executives KNEW digital would displace film. They held both beliefs: "Digital is inevitable" AND "We must protect film revenue." Unable to psychologically hold both, they chose to suppress the "inevitable" belief. In contrast, some executives can hold both: "Our current business is profitable AND it will become obsolete" → leads to dual strategy. This requires what Martin calls the "opposable mind" — comfort with contradiction. Intel's founder Andy Grove: "Only the paranoid survive" — simultaneously confident and fearful, exploiting current position while exploring new possibilities. This balance is rare but learnable.`,
            keyPoints: [
              'Opposable mind: hold two conflicting ideas simultaneously',
              'Kodak: knew digital would win, but psychologically suppressed it',
              'Andy Grove: paranoid AND confident (exploit AND explore)',
              'This balance enables strategic renewal',
              'Cognitive skill that can be learned and developed'
            ]
          },
          {
            title: 'Interactive: Kodak Cannibalization Dilemma',
            content: `This visualization shows Kodak's dilemma as a tradeoff slider. As digital investment increases, film revenue declines. The tension: short-term pain (lost film profit) vs. long-term gain (digital growth). Kodak couldn't make this tradeoff psychologically or financially.`,
            interactive: 'cannibalization-dilemma'
          }
        ]
      },
      {
        id: '2-4',
        moduleId: 2,
        title: 'Innovation Framework & Ecosystem Strategy',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Why Incumbents Fail',
            content: `Pattern of incumbent failures: Borders (bookstores) → Amazon; Blockbuster (video rental) → Netflix; Digital Equipment Corp (minicomputers) → PCs; Sears (department stores) → e-commerce and category specialists. These weren't blindsided. Blockbuster rented DVDs online before Netflix. Borders had online sales. They failed not due to ignorance but structural and cultural issues. The question: why do intelligent executives, with technology, with resources, fail to respond? Answer: organizational structure, culture, processes, and resource allocation are optimized for current business. Shifting resources to disruptive business cannibalizes current profit. CEOs answer to boards focused on quarterly earnings. This isn't stupidity — it's a rational response to misaligned incentives.`,
            keyPoints: [
              'Incumbents fail despite having technology and resources',
              'Blockbuster, Borders, Sears, DEC all had disruptive solutions internally',
              'Problem: organizational structure, culture, resource allocation',
              'Current business optimization ≠ disruptive business optimization',
              'CEO incentives misaligned with long-term disruption',
              'Rational response to bad incentive structure'
            ]
          },
          {
            title: 'Holistic Innovation Framework',
            content: `Why do some organizations successfully innovate while others don't? The Holistic Innovation Framework identifies five critical components: Leadership (clear vision, risk tolerance, resource commitment), Structure (how people are organized, reporting lines), Culture (values, how decisions are made, risk tolerance), Resources (money, people, equipment), and Processes (workflows, decision-making, approval processes). All five must be aligned toward innovation. A common failure: Culture says "innovate!" but Structure still reports to profit-maximizing unit. Leadership wants disruption but Processes require quarterly earnings. Or Resources are scattered across current business, unavailable for new ventures. Integration of all five is necessary — each component must support innovation.`,
            keyPoints: [
              '5 components: Leadership, Structure, Culture, Resources, Processes',
              'Each must be aligned toward innovation goals',
              'Misalignment kills initiatives (e.g., innovation culture + profit structure)',
              'Common failure: "innovate!" cultural messages with unchanged structure',
              'Each component reinforces or blocks the others'
            ]
          },
          {
            title: 'Organizational Evolution',
            content: `Organizations evolve through stages. Stage 1: Resources (founders have capital, ideas, drive). Stage 2: Processes (systems, workflows, routines). Stage 3: Structure (hierarchy, departments, reporting lines). Stage 4: Culture (values, norms, identity). This order is natural — you build processes to handle growing complexity, add structure to manage people, and culture emerges from shared experiences. But this progression creates rigidity. Processes become "how we do things." Structure creates fiefdoms defending budgets. Culture becomes "this is who we are." Innovation requires changing these things, but organizations resist. Paradox: the same progression that enabled success now blocks innovation.`,
            keyPoints: [
              'Evolution: Resources → Processes → Structure → Culture',
              'Natural progression as organization grows',
              'But progression creates rigidity and resistance',
              'Processes → "this is how we do things"',
              'Structure → departmental fiefdoms',
              'Culture → "this is who we are"',
              'Innovation requires disrupting these — hard for incumbents'
            ],
            interactive: 'org-evolution-stages'
          },
          {
            title: 'Strong Culture: Benefit and Trap',
            content: `A strong, unified culture is valuable — it aligns employees, speeds decisions, reduces politics. McKinsey's culture is legendary: no silos, meritocratic, problem-solving oriented. This cultural strength enabled dominance in strategy consulting for decades. But strong culture is also a trap. When the industry shifted from strategy consulting to operations/implementation, McKinsey's "strategy elite" culture made them reluctant to invest in operations. Their culture's strength — "we are strategists" — blocked adaptation. Operations consulting was seen as "less prestigious," unsuitable for McKinsey partners. This cultural gravity pulled them back to strategy despite declining relevance. Strong culture can feel like "molasses" — organizations are slow to change even when change is essential.`,
            keyPoints: [
              'Strong culture: benefits — alignment, speed, reduced politics',
              'Strong culture: trap — resistance to new directions',
              'McKinsey example: "we are strategists" blocked operations pivot',
              'Cultural identity becomes prison',
              'Culture as "molasses" — slows necessary transitions',
              'Incumbent advantage becomes incumbent disadvantage'
            ]
          },
          {
            title: 'Prescription for Incumbents: Three Options',
            content: `For incumbents facing disruption, three strategic options: Option 1: Acquire the disruptor. Facebook acquired Instagram (disrupting Facebook's own photo-sharing in feed). Microsoft acquired LinkedIn (enterprise social network — different market). Advantage: fast, no cannibalization debate. Disadvantage: integration challenges, acquired culture often clashes. Option 2: Cooperate and Partner. Kodak partnerships with camera makers (though still film-based). Less aggressive but preserves relationships. Disadvantage: partners rarely fully commit if it means cannibalizing their business. Option 3: Create Autonomous Structure. Spinoff or separate unit with independent P&L, leadership, culture. Bell Spin-off Bellcore (later Verizon) to explore new technologies. Advantage: separate incentives enable disruptive focus. Disadvantage: conflicts with incumbent (resource competition, channel conflict), hard to manage.`,
            keyPoints: [
              'Option 1: Acquire the disruptor (Facebook/Instagram, Microsoft/LinkedIn)',
              'Option 2: Cooperate and partner',
              'Option 3: Autonomous structure (separate spinoff)',
              'Each has trade-offs',
              'No perfect solution — all three involve sacrifice'
            ]
          },
          {
            title: 'Innovation Ecosystem Risks: Adner\'s Framework',
            content: `Ron Adner's framework for ecosystem risk. Innovation isn't just about your company — it requires ecosystem partners. Tesla needs charging infrastructure. Smartphones needed app developers. Disruptions often fail not due to product risk but ecosystem risk. Adner identifies three ecosystem risks: Initiative Risk (does the partner proceed with their part?). If one partner doesn't commit, your innovation fails. Interdependence Risk (the partner's success depends on YOUR success). They may not prioritize your success over their existing business. Integration Risk (does the product actually integrate with the ecosystem?). Joint Probability Problem: four ecosystem partners, each with 90% probability of success independently, has 90%⁴ = 65.6% overall probability of success. Addition of each partner decreases overall success probability dramatically.`,
            keyPoints: [
              'Innovation ecosystems have three risks: Initiative, Interdependence, Integration',
              'Initiative Risk: will partners proceed?',
              'Interdependence Risk: will partners prioritize your success?',
              'Integration Risk: will products actually work together?',
              'Joint probability: 4 partners × 90% each = 65.6% total',
              'Each partner dependency dramatically decreases total success'
            ],
            interactive: 'ecosystem-risk-calculator'
          },
          {
            title: 'Interactive: Innovation Framework & Ecosystem Risks',
            content: `Visualization shows five components (Leadership, Structure, Culture, Resources, Processes) and how they interact. Also shows ecosystem risk calculation: as you add partners, total success probability decreases.`,
            interactive: 'innovation-framework'
          }
        ]
      },
      {
        id: '2-5',
        moduleId: 2,
        title: 'Discovering & Developing Disruptive Opportunities',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Three Components of Successful Disruption',
            content: `Successful disruptions combine three elements: Simplifying Technology (eliminates complexity, enables non-consumption). Example: simplified blood pressure monitor (one-button operation vs. manual, specialized skill). Enables new markets of non-users. Business Model Innovation (changes how value is captured). Example: Netflix subscription vs. Blockbuster per-rental. Enables different customer economics. Ecosystem Design (complementary products, channels, infrastructure). Example: Tesla's vertical integration of battery production + charging network. All three must work together. A simplifying technology without business model is a failed startup. A business model without simplifying technology is unsustainable. An ecosystem without integration fails.`,
            keyPoints: [
              '3 components: Simplifying Technology, Business Model, Ecosystem',
              'Simplifying technology: reduces complexity, enables non-consumption',
              'Business model: changes value capture (e.g., subscription vs. per-use)',
              'Ecosystem: complements, channels, infrastructure support',
              'All three required for successful disruption'
            ],
            interactive: 'disruption-components'
          },
          {
            title: 'Discovering Opportunities: Skills Dimension',
            content: `Look for jobs currently done by specialists that could be simplified. Blood pressure testing: done by nurses (specialized skill), now any patient can test at home (simplified technology). Pregnancy tests: done by doctors, now DIY at home. Tax software: done by CPAs, now individuals file using TurboTax. Same functional output (accurate measurement or prediction), but simplified so non-specialists can do it. This creates new markets. Before home blood pressure monitors, patients saw doctors less frequently. Pregnancy test simplified an expensive, specialized process into a $10 test. Tax software democratized preparation from professional-only to self-service. Pattern: where specialists currently serve a market, simplification creates disruption.`,
            keyPoints: [
              'Find jobs done by specialists that could be simplified',
              'Blood pressure: nurse-measured → home-measured',
              'Pregnancy tests: doctor → DIY test kit',
              'Tax preparation: CPA → TurboTax',
              'Simplification creates new markets (non-consumption)'
            ]
          },
          {
            title: 'Discovering Opportunities: Access Dimension',
            content: `Look for non-consumption due to access barriers (geographic, economic, time). Education: traditional MBA requires geographic proximity (on-campus), economic access ($100k), time commitment (2 years). Online education removes geography and time, reduces cost. PCs: mainframes required specialized facilities, expert operators. Simplifying allowed non-technical workers to use computers. Online stores: geographic access — you can shop from anywhere without driving to a physical location. Time access — shop at 3 AM without leaving home. These are different markets entirely — not "cheaper travel to store," but "I can now shop without leaving home." Pattern: where access barriers exist, removing them creates disruption.`,
            keyPoints: [
              'Find non-consumption due to access barriers',
              'Geographic access (online removes need for physical location)',
              'Economic access (lower cost enables new customers)',
              'Time access (asynchronous enables different users)',
              'Removes barrier → creates new market'
            ]
          },
          {
            title: 'Discovering Opportunities: Time Dimension',
            content: `Look for non-consumption due to timing mismatches. Video conferencing: face-to-face communication was in-person. Asynchronous email exists, but no synchronous remote video. Video conferencing enables real-time remote interaction — creates new markets (distributed teams, remote collaboration). Minute Clinics: urgent care for non-emergency situations (flu shot, blood test). Traditional doctors' offices aren't optimized for 10-minute visits (scheduling, profitability). Minute Clinics fill gap (wait time, price, no-appointment-needed). Time dimension captures situations where current solutions require too much time/cost or happen at wrong time. Pattern: where timing is mismatched or timing constraints prevent use, solving timing creates disruption.`,
            keyPoints: [
              'Find non-consumption due to timing constraints',
              'Video conferencing: asynchronous email OR in-person — no synchronous remote',
              'Minute clinics: traditional clinics optimized for long appointments, not quick',
              'Scheduling constraints prevent service use',
              'Solve timing constraint → create new market'
            ]
          },
          {
            title: 'Consumer Journey Map Approach',
            content: `Systematically map where non-consumption exists. For each customer journey step, identify: (1) Traditional solution, (2) Are non-consumers being served? Where are access, skills, or timing barriers? (3) Could simplification/business model/ecosystem removal enable that market? Example: retailing (see next section). Department stores served fashion retail, general merchandise — but only for people in cities with stores, with 2 hours for shopping trips. Online disrupted by removing geographic barrier. Discount chains disrupted department stores by enabling efficient shopping (no serendipity needed). The journey map shows where barriers exist. Disruption happens at barriers.`,
            keyPoints: [
              'Map customer journey: each step has traditional solution',
              'Identify non-consumption at each step',
              'What barrier prevents service? (skills, access, time)',
              'Could removal of barrier create market?',
              'Disruptions happen at identified barriers'
            ]
          },
          {
            title: 'Retailing Evolution Case Study',
            content: `Retail history shows clear disruption pattern driven by infrastructure. Era 1: Mom-and-pop stores (pre-1900). Barrier: limited inventory, high prices, one location. Solution: railroads + horse-drawn wagons enabled centralized distribution. Era 2: Department stores (1900s-1960s). Centralized buying, lower costs, variety. Barrier: limited hours, inconvenient travel to downtown. Solution: automobiles + suburban highways (1960s-1980s). Era 3: Discount chains (Walmart, K-Mart). Lower margins, higher turnover. Barrier: limited selection, prices still high. Solution: internet + efficient logistics (1990s-present). Era 4: Online/digital. Economics unchanged: gross margin × inventory turnover ≈ 120% across all eras. Department stores: ~40% margin × 3 turns = 120%. Walmart: ~23% margin × 5 turns = 115%. Amazon: ~5% margin × 25 turns = 125%. Same economic model, different operational model.`,
            keyPoints: [
              'Mom-and-pop → Department → Discount → Online',
              'Each disruption driven by infrastructure (railroads, highways, internet)',
              'Each removes access barriers (inventory, convenience, travel time)',
              'Economics constant: margin × turnover ≈ 120% across all',
              'Department: 40% × 3 = 120%',
              'Discount: 23% × 5 = 115%',
              'Online: 5% × 25 = 125%',
              'Different model, same economic outcome'
            ]
          },
          {
            title: 'Interactive: Retail Evolution Chart',
            content: `This visualization shows the evolution across four retail formats: Department Stores, Discount Chains, and Online. Each has different margin/turnover combinations but similar ROI. Shows how disruption is driven by infrastructure enabling changes in operational model.`,
            interactive: 'retail-evolution'
          }
        ]
      },
      {
        id: '2-6',
        moduleId: 2,
        title: 'IBM Case Study - Strategic Renewal Through Disruption',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'IBM Origins',
            content: `IBM history spans three major discontinuities. Founded as CTR (Computing-Tabulating-Recording Company) in 1911, computing with punched cards. Thomas Watson Sr. (CEO 1914-1956) transformed company culture: emphasis on customer relationships, brand trust, world-class technology, unmatched marketing and service. Renamed IBM (International Business Machines) in 1924. Watson's insight: "The value is not the technology, but the solution to the customer's problem." This customer-centric DNA became IBM's enduring advantage. IBM built customer relationships, understood their needs, provided reliable solutions. This capability was source of IBM's dominance.`,
            keyPoints: [
              'Founded 1911 as CTR (Computing-Tabulating-Recording)',
              'Thomas Watson Sr.: built customer relationships, brand, service',
              'Renamed IBM 1924 — "International Business Machines"',
              'DNA: customer centricity, relationship, reliability',
              'This capability enabled strategic renewal through three discontinuities'
            ]
          },
          {
            title: 'First Discontinuity: Electromechanical → Electronic',
            content: `Transition from mechanical tabulating machines to electronic computers (1950s-1960s). IBM 701 (1952): first commercial digital computer, targeted scientists and engineers. IBM 1401 (1959): affordable computer for businesses, transformative. IBM 360 series (1964): modular, scalable, backward-compatible, dominated mainframe era. Why IBM succeeded here? They had the customer relationships (corporate IT departments), understood needs (reliability, training, service), built ecosystems (complementary software, peripherals). Competitors had technology but not customer relationships. Univac invented computer first but lost to IBM. IBM's advantage was customer-centric capability, not raw technology. This discontinuity took 15 years (1950-1965) from first commercial computer to dominance.`,
            keyPoints: [
              'IBM 701 (1952): first commercial digital computer',
              'IBM 1401 (1959): affordable business computer',
              'IBM 360 (1964): modular, scalable, backward-compatible',
              'Competitors had tech (Univac), IBM had customer relationships',
              'Customer-centric capability beat raw technology',
              '15-year transition to dominance (discontinuity timeline)'
            ]
          },
          {
            title: 'Second Discontinuity: Mainframes → PCs',
            content: `Mainframe computers (1960s-1980s) required centralized IT departments, large budgets, capital equipment. PCs disrupted by removing this requirement. Three brilliant strategic moves by IBM: Move 1: Boca Raton lab (1981). Separate, autonomous PC division. Allowed independent decision-making, different business model than mainframe division. Move 2: Outsourcing key components. Intel for CPUs (instead of IBM building), Microsoft for OS (instead of IBM building). IBM got 20% of PC value, but ensured ecosystem viability. Move 3: Retail distribution. PCs sold through retail (Computer Land, Best Buy), not direct corporate sales like mainframes. This enabled mass adoption. IBM PC (1981) dominated; by 1985, IBM had 25% PC market share. Lesson: separate organization (Boca Raton) enabled disruptive strategy that core mainframe division would block.`,
            keyPoints: [
              'PC disrupted mainframes by removing centralization requirement',
              'Move 1: Boca Raton — separate autonomous division',
              'Move 2: Outsource Intel CPUs, Microsoft OS',
              'Move 3: Retail distribution (not direct sales)',
              'IBM PC (1981) dominated with 25% market share by 1985',
              'Autonomous structure enabled disruptive moves'
            ]
          },
          {
            title: 'The PC Commoditization Trap',
            content: `IBM's brilliant PC strategy had a fatal flaw: they outsourced the most valuable components (CPU and OS). Intel and Microsoft captured value while IBM competed on commoditized hardware. By 1990s, profit pools shifted: Intel captured CPU margins, Microsoft captured OS margins, component makers captured component margins. IBM's PC hardware became a low-margin commodity. IBM competed on price with thousands of clone makers (Compaq, Dell, etc.), destroying margins. This is the commoditization trap: enable ecosystem viability, but lose control of value. IBM learned: outsourcing strategy works for ecosystem viability but fails for capturing value. Competitors focused on integration (Apple, Dell) or software (Microsoft, Intel) captured more value than IBM.`,
            keyPoints: [
              'IBM outsourced most valuable components (Intel, Microsoft)',
              'Value flowed to component makers, not IBM',
              'PC hardware became commodity with falling prices',
              'IBM competed with thousands of clones on price',
              'Profit pools: Intel (CPU), Microsoft (OS), not IBM (hardware)',
              'Commoditization trap: enable ecosystem, lose value'
            ],
            interactive: 'pc-value-shift'
          },
          {
            title: 'Third Discontinuity: Hardware → Software & Consulting',
            content: `IBM recognized commoditization and pivoted. New strategy: software and services. Acquired Rational Software (UML, enterprise modeling tools) → business software platform. Acquired PwC Consulting from Accenture → $30B+ consulting business. Shift: from selling hardware to solving customer problems through software and services. This leveraged IBM's enduring strength: customer relationships and understanding of customer problems. IBM consultants understood enterprise IT, could sell software solutions. Customers trusted IBM (brand, service). This strategy repositioned IBM for 21st century. By 2010s, IBM was No. 1 IT services and consulting company globally.`,
            keyPoints: [
              'Recognized PC commoditization trap early',
              'Acquired Rational Software (business software)',
              'Acquired PwC Consulting ($30B consulting business)',
              'Strategy: hardware → software & services',
              'Leveraged enduring strength: customer relationships',
              'IBM became global leader in IT services, not hardware'
            ]
          },
          {
            title: 'Lessons: Strategic Renewal',
            content: `IBM successfully navigated three major discontinuities (1950s-2000s) through four strategic principles: First: Willingness to Cannibalize. IBM mainframe division cannibalized itself with PCs. Would have been rational for mainframe leadership to block PCs to protect cash cow. They didn't. Second: Separate Units. Autonomous structures (Boca Raton lab, software divisions) enabled disruptive strategies that integrated company would block. Third: Enduring DNA. Customer centricity, relationship, reliability — maintained through all transitions. Fourth: Continuous Learning. IBM recognized signals (commoditization trend), adapted strategy. IBM's story isn't "We got it all right." It's "We made mistakes, recognized them, adapted, and survived." Contrast with Kodak (couldn't cannibalize), Blockbuster (didn't separate), Borders (ignored signals). IBM's ability to renew itself is the distinguishing factor.`,
            keyPoints: [
              'Strategic renewal requires willingness to cannibalize',
              'Separate units enable disruptive strategies',
              'Enduring DNA (customer centricity) maintains identity',
              'Continuous learning and adaptation',
              'IBM survived three discontinuities through renewal',
              'Contrast: Kodak/Blockbuster failed at renewal'
            ]
          },
          {
            title: 'Interactive: IBM Timeline',
            content: `Timeline showing IBM's major milestones and three discontinuities: Electromechanical → Electronic (1950s-1960s), Mainframes → PCs (1980s), Hardware → Software/Services (1990s-2000s). Click each era to see key events.`,
            interactive: 'ibm-timeline'
          }
        ]
      }
    ]
  }

