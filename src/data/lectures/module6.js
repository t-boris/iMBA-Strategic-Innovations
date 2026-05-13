export const module6 =   {
    id: 6,
    title: 'Understanding & Responding to Different Types of Innovation',
    description: 'Disruptive technologies, innovation streams, and corporate entrepreneurship — diagnostic frameworks for matching organizational responses to types of innovation.',
    lectures: [
      {
        id: '6-1',
        moduleId: 6,
        title: 'Disruptive Technologies',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'Module Overview',
            content: `This module is the second in the "Managing Innovation Initiatives" sister course. Module 5 set up the central idea — ambidextrous organization. Module 6 zooms in on TYPES of innovation and shows that "one size fits all" management of innovation is fundamentally wrong: different categories require different organizational responses. The dominant framework comes from Clayton Christensen — disruptive technologies — which is then embedded in a broader 2x2 matrix and finally extended by Wolcott & Lippitz's four models of corporate entrepreneurship. The takeaway: diagnose the type of innovation FIRST, then choose the structural response.`,
            keyPoints: [
              'Module 5 = ambidexterity (general frame); Module 6 = typology + targeted responses',
              'No single approach works for all innovation — type drives the response',
              'Christensen disruptive vs sustaining as the central typology',
              '2x2 matrix (values fit x processes fit) as the operational tool',
              'Wolcott & Lippitz adds four corporate entrepreneurship models'
            ],
            interactive: 'module6-overview'
          },
          {
            title: 'What Disruption Means (and Doesn\'t)',
            content: `"Disruption" has become a buzzword applied to almost any market change. Christensen's original meaning is much narrower and more precise. He explicitly rejects categorizing innovations as radical vs incremental or competence-destroying vs competence-sustaining as the primary distinction. The right cut, he argues, is by CUSTOMER REACTION: a sustaining technology is one mainstream customers want; a disruptive technology has interesting new capabilities, but NOT capabilities the firm's existing customers value. The distinction is not about the technology itself — it's about how the technology relates to the firm's current customers. The same technology can be sustaining for one firm and disruptive for another.`,
            keyPoints: [
              'Disruption ≠ any market change; it has a precise technical meaning',
              'Sustaining = wanted by mainstream customers',
              'Disruptive = interesting capabilities, but NOT what current customers want',
              'Distinction is about customer relationship, not technology characteristics',
              'Same tech can be sustaining for one firm, disruptive for another'
            ]
          },
          {
            title: 'The Disk Drive Story: Performance vs Time',
            content: `Christensen's foundational case study is the disk drive industry, where successive generations (14" → 8" → 5.25" → 3.5") followed the same disruption pattern. The diagram has performance on the vertical axis and time on the horizontal. Mainstream customer demands rise over time. The 14" technology trajectory rises faster than mainstream demand — incumbents over-serve. Then a new format (8") appears: lower absolute storage, but smaller. Mainframe customers don't want it. Mini-computer makers (DEC, Data General) DO want it — small dedicated rooms aren't available. Crucially, the 8" technology trajectory ALSO rises, eventually intersecting mainframe demand. At that intersection point, 8" is "good enough" for mainframes — and disruption begins.`,
            keyPoints: [
              'Disk drives 14" → 8" → 5.25" → 3.5" — same pattern each generation',
              'Mainstream tech trajectory often OVER-serves customer demand',
              'New (smaller) format starts as niche — mainframe customers reject it',
              'Mini-computer makers (DEC, Data General) — initial niche customers',
              'Disruption begins when new tech trajectory intersects MAINSTREAM demand'
            ],
            interactive: 'disk-drive-trajectory'
          },
          {
            title: 'Why Rational Management Loses',
            content: `The most surprising claim in Christensen's framework: incumbents lose not because they are stupid, blind, or poorly run. They lose BECAUSE they are well-run by conventional standards. Their engineers see the new technology and often build prototypes. But coming to commercialization, three things happen — all "right" individually: (1) Big customers don't ask for it, so marketing deprioritizes; (2) Resource allocation systems reject low-margin small markets — they're "not interesting"; (3) Senior management focuses on growth that moves the P&L, which the niche cannot do. Each step rational. The sum: catastrophe. This is the "innovator's dilemma" — a dilemma, not an error. It means awareness alone doesn't fix it; you have to redesign the systems.`,
            keyPoints: [
              'Incumbents see the technology — engineers often champion it',
              'Marketing dictum: "stay close to big customers" — they don\'t want it',
              'Resource allocation: small / low-margin / uncertain markets get rejected',
              'Growth imperative: niche can\'t move corporate P&L',
              'Each step is rational — and the result is systematic failure',
              'Innovator\'s DILEMMA — not an error of judgment'
            ],
            interactive: 'innovators-dilemma'
          },
          {
            title: 'The Outcome: Late, Outflanked, Eroded',
            content: `When incumbents finally try to respond, they're late. New competitors have established positions, accumulated technology-specific expertise, built scale, and grown customer relationships in the disrupted segment. Margins in that segment are now compressed — "head-on competition" is unattractive. So incumbents typically retreat UP-MARKET to premium segments where the disruptive technology hasn't yet reached. But the disruptive trajectory keeps rising, and each generation further erodes the upper market. In disk drives, this happened relentlessly — incumbents from each generation were either acquired or marginalized. In other industries (steel, mini-mills), the erosion was partial but still significant. The pattern is stable across industries.`,
            keyPoints: [
              'Incumbents introduce products LATE in the disrupted segment',
              'New competitors have scale, expertise, customer base by then',
              'Head-on competition: margins compressed → retreat up-market',
              'Up-market is finite — disruption keeps advancing',
              'Disk drives: each generation, incumbent firms displaced',
              'Pattern repeats across industries'
            ]
          }
        ]
      },
      {
        id: '6-2',
        moduleId: 6,
        title: 'Responding to Disruptive Technologies',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'It\'s Not Failure to Recognize',
            content: `The first thing to understand about ineffective response: it is NOT a failure to recognize the technology. In every disk drive generation at the major incumbent firms, engineers built prototypes of the new format and were excited about its potential. The technology was seen, championed at the engineering level, and even partially developed. What didn't happen was serious commercialization — production scaling, marketing investment, sales channel building, business model adaptation. This is a MANAGEMENT decision, not a perception failure. And the management decision is "right" by conventional metrics. So the problem is not awareness — it's the systems that translate awareness into action.`,
            keyPoints: [
              'Engineers usually see and champion disruptive technology',
              'Failure happens at COMMERCIALIZATION, not at recognition',
              'Management decisions to NOT scale are "rational" by conventional metrics',
              'Awareness alone does not fix the problem',
              'The systems and incentives must change, not just understanding'
            ]
          },
          {
            title: 'Marketing Dictum and Resource Allocation: The Two Traps',
            content: `Christensen identifies two specific systems that systematically reject disruptive opportunities. (1) The marketing dictum "stay close to your customers, especially big ones." This is normally good advice — big customers drive revenue and signal mainstream demand. But for disruption, big customers are precisely the wrong audience: they don't want the new technology by definition. So listening to them gives a "no signal" that mainstream interprets as "no market." (2) Resource allocation systems are designed to find LARGE, CERTAIN, HIGH-MARGIN markets. Disruptive opportunities fail all three: small, uncertain, and typically low-margin. The systems automatically deprioritize them — not by design but by working as intended. Both traps are SYSTEMIC, not cognitive — fixing them requires redesign.`,
            keyPoints: [
              'Marketing dictum: stay close to big customers → wrong for disruption',
              'Big customers say "no" — system reads "no market"',
              'Resource allocation prefers: large, certain, high-margin',
              'Disruptive: small, uncertain, low-margin → automatic rejection',
              'Both traps are SYSTEMIC, not cognitive — redesign required'
            ],
            interactive: 'two-traps'
          },
          {
            title: 'The Downward Spiral',
            content: `When disruption finally hits the mainstream segment, incumbents face a no-win cascade. Option A: compete head-on in the disrupted segment — but margins are compressed, and disruptors have scale and expertise. Option B: retreat up-market to premium segments where disruptive tech hasn't reached — but the up-market is shrinking as disruption advances. Option C: acquire a disruptor — possible, but expensive and fraught with integration risk. Most incumbents choose B. The pattern repeats: disruption advances → incumbent retreats further up → segment shrinks. In disk drives, this spiral played out 4-5 times across generations. In steel, mini-mills displaced integrated mills' lower segments. The spiral is a pattern, not a single event.`,
            keyPoints: [
              'Three reactions, all bad: head-on / up-market / acquire',
              'Most incumbents go up-market — temporary refuge',
              'Disruption keeps advancing — up-market keeps shrinking',
              'Pattern repeats across industries (disk drives x4-5, steel mini-mills)',
              'Spiral is structural, not contingent'
            ]
          },
          {
            title: 'Christensen\'s Five Recommendations',
            content: `Christensen offers a sequence of five recommendations for incumbents serious about handling disruption. (1) Talk to engineers, not (only) marketers and financiers — engineers see the technology trajectory; marketers see today's demand. (2) Look for FEASIBLE MARKET-TECHNOLOGY INTERSECTIONS, not technology-vs-technology comparisons. The 8" disk was always behind 14" on storage, but found a niche in mini-computers. (3) Wayne Gretzky analogy: skate to where the puck is GOING TO BE, not where it is — anticipate the intersection rather than optimize for today's market. (4) Locate initial markets via NON-TRADITIONAL means — skunk works, startup intelligence, lateral exploration. Standard channels won't find disruptive markets. (5) Form an INDEPENDENT ORGANIZATION — small, hungry, lean, structurally separated. This is Christensen's most famous recommendation. Without structural separation, mainstream eats the new initiative through resources, processes, and political pressure.`,
            keyPoints: [
              '1. Talk to engineers, not (only) marketers',
              '2. Find feasible market-technology intersections, not tech comparisons',
              '3. Gretzky: skate to where the puck WILL be',
              '4. Non-traditional discovery: skunk works, startups, lateral exploration',
              '5. Form an INDEPENDENT ORGANIZATION — small, hungry, lean'
            ],
            interactive: 'five-recommendations'
          },
          {
            title: 'Disruption and Ambidexterity: Two Lenses on the Same Problem',
            content: `Christensen and the ambidexterity literature (Tushman, O'Reilly — Module 5) developed in parallel and converge in important ways. Christensen's "independent organization" is structurally similar to the ambidextrous "semi-autonomous unit." Both insist on physical and organizational separation, distinct alignment, and senior management support. The differences in emphasis: Christensen focuses on STRUCTURE and METRICS (margin thresholds, market size criteria); ambidexterity focuses on POLITICAL/CULTURAL mechanisms (intent, identity, loose-tight culture). Christensen later acknowledged the convergence and emphasized executive support and integration over time — exactly the ambidexterity prescription. Use both lenses: disruption tells you WHEN you need to act differently; ambidexterity tells you HOW to lead through it.`,
            keyPoints: [
              'Christensen and ambidexterity converge on structural separation',
              'Christensen emphasizes margins/size criteria; ambidexterity emphasizes culture/intent',
              'Christensen later acknowledged ambidexterity and exec support',
              'Use both lenses: disruption diagnoses WHEN; ambidexterity guides HOW',
              'Threat (vs opportunity) framing intensifies political resistance — separation more critical'
            ]
          }
        ]
      },
      {
        id: '6-3',
        moduleId: 6,
        title: 'Innovation Streams Part 1 — Organizational Capabilities',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'From Markets to Capabilities',
            content: `Lectures 6-1 and 6-2 looked outward — at markets and technologies. Lecture 6-3 turns inward — at organizational capabilities. A capability is what an organization can do well, and is the basis of competitive advantage. Walmart has powerful logistics capabilities. Intel has chip design and manufacturing capabilities. Capabilities determine what innovations a firm can effectively pursue — and which ones it cannot. The lecture decomposes capabilities into three components: Resources, Processes, Values. Each operates differently, each has different change difficulty, and disruptive opportunities tend to fail on the Values component specifically.`,
            keyPoints: [
              'Capability = what an organization can do well',
              'Foundation of competitive advantage',
              'Three components: Resources, Processes, Values',
              'Each has different change cost and difficulty',
              'Disruptive opportunities fail mainly on the Values dimension'
            ]
          },
          {
            title: 'Resources — The Tangible and Intangible Assets',
            content: `Resources are what most people think of when they hear "capabilities" — and they're the easiest of the three to change. Resources include tangible assets (people, equipment, facilities, cash, IP, product designs) and intangible ones (brand, reputation, customer relationships, supplier relationships). Resources can be hired, bought, acquired through M&A, or built over time with investment. Research consistently shows that the resource component is rarely the binding constraint when firms attempt new capabilities. The harder problems are in processes and values — the next two components. So when a firm fails to capture an opportunity, "we lacked the resources" is usually the wrong diagnosis.`,
            keyPoints: [
              'Tangible: people, equipment, IP, product designs',
              'Intangible: brand, reputation, relationships',
              'EASIEST component to change: hire, buy, acquire, invest',
              'Rarely the binding constraint — common misdiagnosis',
              'Real difficulties live in processes and values'
            ]
          },
          {
            title: 'Processes — How Decisions and Work Get Done',
            content: `Processes are how people in the organization actually make decisions and accomplish work. Manufacturing processes are obvious examples — Intel's chip-fab process honed over decades. But processes exist everywhere: marketing processes (how customer leads are qualified and converted), sales processes, product development cycles, decision rituals (budget reviews, approvals). Processes are far less flexible than they appear. They embed habits, tacit knowledge, political balances, metrics, and reward systems. As Module 5 showed, alignment across processes creates inertia — a process designed for one type of work doesn't easily handle another. A process defines what an organization can do well AND what it cannot.`,
            keyPoints: [
              'Processes = how decisions and work happen',
              'Visible: manufacturing, marketing, sales — but exist in all functions',
              'Embed habits, tacit knowledge, metrics, rewards',
              'NOT flexible — change resistance ("inertia" from Module 5)',
              'Define both capability AND incapability'
            ]
          },
          {
            title: 'Values — The Software of the Organization',
            content: `Christensen narrows "values" to a specific operational meaning: the decision criteria for what counts as an attractive business opportunity. Two values matter most: (1) Acceptable gross margin — software firms expect 80%+, grocery firms 1-3%, with everything in between built around overhead structure. A high-margin firm seeing a 25% margin opportunity will systematically reject it. (2) Required business size — large firms have growth imperatives that require markets capable of moving the corporate P&L. IBM's Emerging Business Opportunities required potential of $1 billion in 5 years — strict but achievable. These values live in people's heads and in the implicit decision rules of resource allocation. They are the "software" — and they decide which opportunities even appear on the radar.`,
            keyPoints: [
              'Values = decision criteria for "attractive opportunity"',
              'Christensen narrows it to two: margin threshold + size threshold',
              'Acceptable margin reflects business model and overhead',
              'Required size reflects growth imperative',
              'IBM EBO criterion: $1B in 5 years — example of explicit values',
              '"Software" = lives in heads and implicit rules'
            ],
            interactive: 'capabilities-three-parts'
          },
          {
            title: 'Three Routes to New Capabilities',
            content: `When a firm needs new capabilities, resources can be acquired relatively easily (hire, buy, M&A). The hard problems are in processes and values. Christensen identifies three structural routes for building or accessing those: (1) INDEPENDENT ORGANIZATION — a separate semi-autonomous unit with its own processes and values, alignment to the new market. Most radical. (2) HEAVYWEIGHT TEAM — a cross-functional team within the existing org, but with senior people, full-time commitment, and a "general management hat" for each member. Has legitimacy and political weight to develop new processes while staying inside. Less radical. (3) ACQUISITION — buy a firm with the needed capabilities. Quickest, but acquisitions often fail because of integration mistakes (covered in next lecture). Each route fits different situations — defined by the matrix in Lecture 6-4.`,
            keyPoints: [
              'Independent Organization — most radical, fully separate alignment',
              'Heavyweight Team — cross-functional senior team, GM hat per member',
              'Acquisition — fastest but integration is risky',
              'Each fits a different situation (next lecture defines which when)',
              'Resources are the easy part; processes and values are the hard part'
            ],
            interactive: 'three-routes'
          }
        ]
      },
      {
        id: '6-4',
        moduleId: 6,
        title: 'Innovation Streams Part 2 — Matrix and Acquisitions',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'The 2x2 Matrix: Diagnose Before You Build',
            content: `Sustaining vs disruptive is too coarse for practical decisions — some sustaining innovations require new processes, some disruptive innovations work with existing processes. The matrix is built on two axes: horizontal — fit with VALUES (good = sustaining; poor = disruptive); vertical — fit with PROCESSES (good = existing processes work; poor = need new processes). This produces four cells, each with a different organizational response. The matrix turns the framework into an OPERATIONAL TOOL — diagnose the innovation by these two questions, then apply the matching response.`,
            keyPoints: [
              'Sustaining vs disruptive is too coarse for decisions',
              'Two axes: fit with VALUES (margin/size) and fit with PROCESSES',
              'Four cells = four different organizational responses',
              'Diagnose first, then build — not the other way',
              'Operationalizes the abstract framework'
            ],
            interactive: 'innovation-matrix-2x2'
          },
          {
            title: 'Cells A and B — Sustaining Innovations',
            content: `When values fit (sustaining innovation), the firm can treat the opportunity through existing structures — but the type of team depends on whether processes need to change. CELL A (sustaining + processes fit): use a LIGHTWEIGHT or FUNCTIONAL TEAM — a project manager coordinating across existing functions, no new structures needed. This is the bulk of innovation in mature firms. Most product updates, line extensions, and feature additions sit in Cell A. CELL B (sustaining + processes need to change): use a HEAVYWEIGHT TEAM within the existing organization. The market values are favorable, but new ways of finding customers, manufacturing, or serving them must be developed. Heavyweight teams have enough power and seniority to build new processes — but the values environment supports them, so a fully separate unit isn't needed.`,
            keyPoints: [
              'Cell A: sustaining + processes fit = lightweight/functional team',
              'Cell A is the bulk of mature-firm innovation',
              'Cell B: sustaining + processes don\'t fit = heavyweight team in existing org',
              'Heavyweight team has senior members + GM hat + full-time commitment',
              'No need for full unit separation when values still fit'
            ]
          },
          {
            title: 'Cells C and D — Disruptive Innovations',
            content: `When values don't fit (disruptive innovation), main organization will systematically reject the opportunity through resource allocation systems. CELL C (disruptive + processes don't fit): use a HEAVYWEIGHT TEAM IN A SEPARATE INDEPENDENT ORGANIZATION. This is Christensen's classic disruption response. The unit has its own values (low margins acceptable, small markets attractive) and its own processes (designed for the new customer profile). Maximum separation — physical, organizational, cultural. CELL D (disruptive + processes fit): an interesting hybrid — values reject the opportunity but processes can handle it. Recommended approach: PHASED. Start with a heavyweight team using existing processes; as commercialization approaches, almost always spin out into an independent organization. The values mismatch eventually forces separation, even though processes were initially compatible.`,
            keyPoints: [
              'Cell C: disruptive + processes don\'t fit = INDEPENDENT ORG (Christensen classic)',
              'Cell C requires maximum separation — physical, organizational, cultural',
              'Cell D: disruptive + processes fit = phased approach',
              'Cell D phase 1: heavyweight team inside organization',
              'Cell D phase 2: spin out for commercialization (values force it)'
            ]
          },
          {
            title: 'Acquisitions: Diagnose What You Are Buying',
            content: `Acquisitions are a separate route, and they fail far more often than they should. The critical question: WHAT are you actually buying? Two cases require opposite handling. (1) RESOURCE ACQUISITION — buying for talent, IP, technology, equipment. The acquired firm's people and assets are transferable. INTEGRATE into the main organization. Cisco perfected this for two decades — buying small emerging-tech firms with strong R&D teams, integrating quickly, leveraging the talent. Cisco kept R&D budgets relatively low while leading the market. (2) PROCESS/VALUES ACQUISITION — buying because the firm operates in ways the main organization cannot. Their processes and values are the asset. DO NOT INTEGRATE. Keep the acquired firm as an independent unit, provide resources from main firm, ensure high senior management integration for synergies — but never operationally absorb. Diagnose honestly before the deal: which type are you doing? Get it wrong and you destroy what you bought.`,
            keyPoints: [
              'Acquisitions fail more often than they succeed — buyer\'s remorse common',
              'Critical question: WHAT are you buying — resources or processes/values?',
              'Resource acquisition: INTEGRATE (Cisco model — talent + IP)',
              'Process/values acquisition: KEEP SEPARATE (provide resources, don\'t absorb)',
              'Wrong choice destroys exactly what you paid for'
            ],
            interactive: 'acquisition-decision-tree'
          },
          {
            title: 'IBM/ROLM: The Cautionary Tale',
            content: `The canonical cautionary tale: IBM acquired ROLM, a low-cost telecom firm. Initially, IBM did the right thing — kept ROLM operating independently. ROLM continued with its own processes, values, and culture; the business grew, the synergy with IBM resources worked. After a few years, IBM management decided to integrate ROLM into the main IBM organization for "operational efficiency." ROLM's processes and values dissolved into IBM's mainstream — and the capabilities IBM had paid for disappeared. The acquired entity became, effectively, a small piece of IBM, losing exactly the differentiation that made it valuable. The lesson: process/values acquisitions cannot be integrated later "for efficiency." If you buy them, you keep them separate — permanently. If you can't tolerate that, don't make the acquisition.`,
            keyPoints: [
              'IBM acquired ROLM (low-cost telecom)',
              'Phase 1: kept independent — business grew, synergy worked',
              'Phase 2: integrated for "efficiency" — capabilities destroyed',
              'Lesson: process/values acquisitions stay separate PERMANENTLY',
              'If you can\'t commit to permanent separation, don\'t do the deal'
            ]
          }
        ]
      },
      {
        id: '6-5',
        moduleId: 6,
        title: 'Corporate Entrepreneurship Part 1 — Framework and Opportunist',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'What Corporate Entrepreneurship Is — and Isn\'t',
            content: `Corporate entrepreneurship is a distinct concept from corporate venture capital, spin-offs, or acquisitions. It is the process by which teams within an established firm conceive, develop, launch, and manage NEW BUSINESSES that leverage the parent firm's resources. The new business stays inside the firm; it draws on the firm's people, technology, brand, and capabilities. This is the DEFINING DIFFERENCE from CVC (which sends money out to external startups) or M&A (which buys ready-made businesses). The framework comes from Wolcott & Lippitz (Northwestern, 2007). Their motivation: maintaining growth above country average over many years is statistically rare; corporate entrepreneurship is one of the systematic levers to support such growth.`,
            keyPoints: [
              'Corporate entrepreneurship: NEW BUSINESSES BUILT INSIDE the firm',
              'Different from CVC (external investments), spin-offs, M&A',
              'Leverages parent firm\'s resources — that\'s the advantage over startups',
              'Wolcott & Lippitz framework (Northwestern, 2007)',
              'Motive: sustain growth above country average — statistically rare'
            ]
          },
          {
            title: 'Two Axes of the Wolcott & Lippitz Framework',
            content: `Wolcott & Lippitz studied multiple firms and identified two key design dilemmas every firm faces in corporate entrepreneurship. (1) RESOURCE AUTHORITY — where do the resources for new initiatives come from? Two extremes: AD HOC (resources requested from business units, each request a separate political negotiation) or DEDICATED (a corporate pool pre-allocated specifically for new ventures, accessed through a defined funding process). (2) ORGANIZATIONAL OWNERSHIP — where does the responsibility for the corporate entrepreneurship process live? DIFFUSED (anyone in the firm can propose, anyone can sponsor — no specialized unit) or FOCUSED (a dedicated corporate unit owns the process). Crossing the two axes produces four models, each with characteristic strengths and weaknesses.`,
            keyPoints: [
              'Axis 1: Resource Authority — Ad Hoc vs Dedicated',
              'Axis 2: Organizational Ownership — Diffused vs Focused',
              '2x2 matrix produces four models',
              'Each model fits different organizational situations',
              'Choice depends on size, culture, and strategic intent'
            ],
            interactive: 'wolcott-lippitz-matrix'
          },
          {
            title: 'The Opportunist Model — Default Mode',
            content: `The Opportunist model sits in the bottom-left corner: AD HOC resources + DIFFUSED ownership. This is the DEFAULT mode — what every firm has to some degree, regardless of formal innovation strategy. Ideas bubble up from latent entrepreneurs in business units. The entrepreneur networks with managers and senior executives, seeking sponsorship and resources. Each idea is a separate journey through ad hoc allocations. There's no formal process for corporate entrepreneurship — it's a serendipitous, distributed, opportunistic activity. The key strengths: low setup cost (literally none), and harvesting of latent entrepreneurial energy when the culture supports it. The key weaknesses: unreliable, dependent on personal networks and luck, ideas that don't fit any business unit get orphaned, business units' short-term focus undermines support.`,
            keyPoints: [
              'Opportunist = ad hoc resources + diffused ownership',
              'Default mode — every firm has it to some degree',
              'Ideas bubble up; entrepreneurs network for sponsorship',
              'Strength: low cost, harvests latent entrepreneurial energy',
              'Weakness: unreliable, serendipitous, orphans cross-cutting ideas'
            ]
          },
          {
            title: 'Why Opportunist Alone Is Insufficient',
            content: `Opportunist mode is the foundation — every healthy firm has SOME of it, and it cannot be "turned off." But relying ONLY on it has predictable failure modes. (1) NOT DEPENDABLE — whether a good idea finds resources depends on the personal network of the entrepreneur, the receptivity of executives that month, and pure luck. (2) IDEAS DON'T ALWAYS FIT — an idea may be technically excellent but mismatched to the business unit it arose in; without a cross-business mechanism, it has nowhere to go. (3) BUSINESS UNITS ARE SHORT-TERM — quarterly metrics and current-year P&L pressure undermine sustained funding for ventures with multi-year horizons. The conclusion: Opportunist remains the foundation, but firms serious about corporate entrepreneurship layer one or more of the next three models on top. Wolcott & Lippitz call these "additional approaches" — not replacements, but additions.`,
            keyPoints: [
              'Opportunist is foundation — cannot turn off',
              'Failure mode 1: not dependable (luck-driven)',
              'Failure mode 2: cross-business ideas have no home',
              'Failure mode 3: BU short-term focus undermines long-horizon ventures',
              'Solution: LAYER additional models on top — Enabler, Advocate, Producer',
              'Three models in next lecture'
            ]
          }
        ]
      },
      {
        id: '6-6',
        moduleId: 6,
        title: 'Corporate Entrepreneurship Part 2 — Enabler, Advocate, Producer',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'The Enabler Model — Executive Council with Funding',
            content: `The Enabler sits in the upper-left of the matrix: DEDICATED resources (corporate pool) + DIFFUSED ownership. Ideas can come from anywhere in the firm — but instead of relying on ad hoc networking, entrepreneurs APPLY to an executive council. The council reviews proposals, allocates funding from the corporate pool, and sets milestones. Funding is staged — initial tranche to prove feasibility, subsequent tranches gated on milestones achieved. The OUTCOME of an Enabler engagement is typically a PROVEN CONCEPT — once the idea is validated, it transitions back into the regular corporate channels for full commercialization. Examples: Google, Boeing, Whirlpool — each adapts the structure to its specific culture. Strength: provides legitimacy, executive attention, and dedicated funding for ideas within the strategic frame. Weakness: highly dependent on the executive council's quality and openness.`,
            keyPoints: [
              'Enabler = dedicated corporate pool + diffused ownership',
              'Entrepreneurs apply to executive council',
              'Funding staged with milestones — proven concept is the goal',
              'After proven concept: idea returns to normal corporate channels',
              'Examples: Google, Boeing, Whirlpool',
              'Best for ideas within strategic frame requiring exec attention'
            ]
          },
          {
            title: 'The Advocate Model — Internal Consultants and Evangelists',
            content: `The Advocate sits in the bottom-right of the matrix: AD HOC resources (still funded by business units) + FOCUSED ownership (a dedicated corporate group). The corporate group is small — DuPont's exemplar uses just 5 full-time staff — and operates as INTERNAL CONSULTANTS to the business units. They bring expertise in entrepreneurship methodology, networks across the corporation, and the legitimacy of corporate sponsorship. But more than consultants, they ACTIVELY EVANGELIZE — they push ideas inside business units, helping local entrepreneurs overcome resistance, find additional resources, and connect with adjacent projects. DuPont reports building approximately $500 million in new businesses through this approach over several years. The Advocate is best suited for ideas CLOSE TO existing business units — ideas the BU could fund but might not without nudging. Cannot help orphan ideas (those that don't fit any BU).`,
            keyPoints: [
              'Advocate = ad hoc resources (BU funds) + focused ownership (corp group)',
              'Internal consultants + active evangelists',
              'DuPont: 5 full-time staff, ~$500M in new businesses',
              'Pushes business units to support otherwise-overlooked ideas',
              'Best for ideas close to existing BUs — needs BU buy-in to fund',
              'Cannot save orphan ideas (ideas with no BU home)'
            ]
          },
          {
            title: 'The Producer Model — Full-Service Corporate Unit',
            content: `The Producer sits in the upper-right of the matrix: DEDICATED resources + FOCUSED ownership. It's a FULL-SERVICE corporate group — staffed for end-to-end business creation: R&D, market analysis, business development, sometimes operations. The Producer does NOT just consult or fund — it OWNS ideas and develops them into new businesses itself. Ideas often come from business units that recognize potential but lack fit for that BU's strategy; the idea (and sometimes the key people) transfer into the Producer unit. Cargill's "Emerging Business Accelerator" is the canonical example — Cargill traditionally serves commodity de-icing markets; an idea for a high-end de-icing business didn't fit the commodity BU, so it moved to the Accelerator and became its own business. The Producer is the most powerful corporate entrepreneurship structure — and the most expensive. Critically, it's also the most politically sensitive: business units may view it with suspicion, especially if Producer ideas threaten BU markets. Producer leaders must be politically adept and credible across the firm.`,
            keyPoints: [
              'Producer = dedicated resources + focused ownership',
              'Full-service: R&D, market, biz dev, ops — all in-house',
              'Owns ideas end-to-end, builds whole new businesses',
              'Cargill Emerging Business Accelerator (de-icing example)',
              'Most powerful AND most expensive AND most politically sensitive',
              'Pariah risk: BUs may view Producer as a threat',
              'Requires politically adept, credible leadership'
            ],
            interactive: 'four-models-comparison'
          },
          {
            title: 'Matching Models to Idea Types',
            content: `Each model serves a distinct class of ideas. ADVOCATE — for ideas CLOSE to existing business units, where BU has potential interest but needs nudging. The Advocate accelerates and de-risks BU decisions. Best strategic goal: REINVIGORATING business units, making them more dynamic. ENABLER — for ideas WITHIN the strategic frame, requiring senior executive validation and dedicated funding to prove feasibility. Best strategic goal: PROVING CONCEPTS that can later integrate into corporate channels. PRODUCER — for ideas that DON'T FIT any business unit, especially threatening ones (cannibalization, disruption to BU markets). Best strategic goal: GROWING WHOLE NEW BUSINESSES that no BU could host. The four models are NOT mutually exclusive — IBM, for example, runs versions of all three (Advocate-style internal teams, Enabler-style executive councils, Producer-style emerging business units). Choice depends on the firm's portfolio of idea types, size, culture, and growth ambitions.`,
            keyPoints: [
              'Advocate: ideas CLOSE to BUs — strategic goal is BU reinvigoration',
              'Enabler: ideas WITHIN strategic frame — strategic goal is proven concepts',
              'Producer: ideas DON\'T FIT BUs (or threaten them) — goal is new businesses',
              'Models are NOT mutually exclusive',
              'IBM runs all three simultaneously',
              'Match models to firm\'s portfolio of idea types'
            ]
          },
          {
            title: 'What All Models Require',
            content: `Three core points to take away from the corporate entrepreneurship framework. (1) MOTIVATION: serendipitous Opportunist mode is insufficient for a process this important — systematic processes can be designed and applied. (2) TWO DIMENSIONS: think about WHERE responsibility for corporate entrepreneurship lives (focused vs diffused) and WHERE resources come from (dedicated vs ad hoc). The three additional models flow from these dimensions. (3) REQUIREMENTS: all models require significant commitments — sustained effort over years, leaders who can navigate the political and cultural landscape of the firm, and substantial INFORMAL coordination outside normal hierarchies. The corporate entrepreneurship process cuts across normal organizational boundaries; making it work depends heavily on informal relationships, credibility, and political skill. This connects directly to ambidexterity (Module 5) leadership practice — time and attention are scarce, and reallocation of leadership effort is non-negotiable for any of these models to succeed.`,
            keyPoints: [
              'Opportunist alone is insufficient for systematic growth',
              'Design choices: where responsibility, where resources',
              'All models require sustained effort, political navigation',
              'Heavy reliance on INFORMAL coordination',
              'Connects to Module 5: time and attention reallocation non-negotiable'
            ]
          }
        ]
      },
      {
        id: '6-7',
        moduleId: 6,
        title: 'Module Summary and Synthesis',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'The Logical Chain of Module 6',
            content: `The module builds a single coherent argument — from typology of innovations through targeted organizational responses to systematic capability for ongoing innovation. Lecture 6-1 introduces Christensen's narrow definition of disruption — a technology not wanted by current customers — and the canonical disk drive case showing how rational management systematically fails. Lecture 6-2 shows the failure mechanisms (marketing dictum, resource allocation systems) and Christensen's five recommendations centered on independent organization and perspective shift. Lecture 6-3 deepens by introducing capabilities = Resources + Processes + Values, and three structural routes (independent org, heavyweight team, acquisition). Lecture 6-4 produces the operational matrix (values fit x processes fit) and four cells, plus the acquisition decision protocol. Lectures 6-5 and 6-6 add Wolcott & Lippitz's four corporate entrepreneurship models, turning innovation from reactive to proactive capability. Each lecture answers what the previous raised.`,
            keyPoints: [
              '6-1: typology — disruptive (not wanted by current customers) vs sustaining',
              '6-2: failure mechanisms + five recommendations + independent org',
              '6-3: capabilities decomposed (R/P/V) + three structural routes',
              '6-4: 2x2 matrix → four cells → four responses; acquisitions protocol',
              '6-5/6-6: Wolcott & Lippitz four models — proactive corporate entrepreneurship',
              'Each lecture answers what the previous raised'
            ],
            interactive: 'module6-concept-map'
          },
          {
            title: 'Ten Key Takeaways',
            content: `Ten points worth carrying forward. (1) Disruption is a NARROW concept — a technology current customers don't want. Not every market change is disruption. (2) Incumbents fail systematically through "good management" — marketing dictum and resource allocation systems reject disruptive opportunities. (3) Christensen's structural answer: independent organization — small, hungry, lean, structurally separated. (4) Capability has three components — Resources (easy to change), Processes and Values (hard to change). (5) The 2x2 matrix turns vague intuition into operational diagnosis: cells A, B, C, D each have distinct organizational responses. (6) Acquisitions require honest diagnosis — resources (integrate) vs processes/values (keep separate); IBM/ROLM is the cautionary tale. (7) Corporate entrepreneurship is internal building of new businesses — distinct from CVC or M&A. (8) Wolcott & Lippitz framework: two axes (resource authority, organizational ownership), four models (Opportunist, Enabler, Advocate, Producer). (9) Models are NOT mutually exclusive — IBM uses all three additional models. (10) All structural responses require time, executive attention, and political skill — scarcest resources, non-negotiable to reallocate.`,
            keyPoints: [
              '1. Disruption: narrow concept — current customers don\'t want it',
              '2. Incumbents fail through "good management" systems',
              '3. Independent organization = Christensen\'s structural answer',
              '4. Capability = Resources + Processes + Values',
              '5. 2x2 matrix → 4 cells → 4 responses',
              '6. Acquisitions: integrate resources, keep processes/values separate',
              '7. Corporate entrepreneurship is INTERNAL business building',
              '8. Four models: Opportunist, Enabler, Advocate, Producer',
              '9. Models are not mutually exclusive (IBM runs all three)',
              '10. Time and executive attention are the binding constraints'
            ]
          },
          {
            title: 'Practical Recommendations for a Manager',
            content: `Six concrete recommendations. First, when evaluating a new technology, do not only ask customers — ask engineers and search for feasible market-technology intersections. Customers are the wrong oracle for disruptive technology. Second, before choosing a structure, DIAGNOSE the innovation by the 2x2 matrix (values fit x processes fit). Don't launch disruptive innovation as a cross-functional team in mainstream — it will be eaten. Third, when considering an acquisition, be honest about whether you're buying resources or processes/values; integrate the former, keep the latter separate permanently. The IBM/ROLM mistake is common. Fourth, audit your firm's VALUES (margin threshold, business size threshold) and identify the blind spots they create. These are exactly where disruptive opportunities arise. Fifth, do not rely on Opportunist mode for important innovation. Layer Enabler/Advocate/Producer for systematic capability. Sixth, treat time allocation for innovation as discipline, not afterthought — a recurring theme from Module 5 still applies.`,
            keyPoints: [
              'Ask engineers, not just customers, about new tech',
              'Diagnose by the 2x2 matrix BEFORE picking a structure',
              'Acquisitions: resources vs processes/values diagnosis is decisive',
              'Audit your values — they define your blind spots',
              'Layer corporate entrepreneurship models — don\'t rely on Opportunist',
              'Schedule innovation time with discipline (Module 5 reminder)'
            ]
          },
          {
            title: 'Connection to the Broader Course',
            content: `Module 6 extends the ambidexterity framework from Module 5 in two ways. First, it adds TYPOLOGY — different innovations need different responses, and the matrix provides the diagnostic. Second, it adds PROACTIVE capability — corporate entrepreneurship is a deliberate capability for generating new businesses, complementing ambidexterity's reactive structural separation. Christensen's disruption framework and Wolcott & Lippitz's four models are complementary lenses. Disruption tells you WHEN your normal management will fail you; ambidexterity tells you HOW to lead through it; corporate entrepreneurship tells you HOW TO BUILD ongoing innovation capability. Subsequent course modules deepen specific aspects: innovation teams (cross-functional dynamics, heavyweight team leadership), planning under innovation conditions, and managing innovation across organizational boundaries (alliances, joint ventures, open innovation). The frameworks here are foundations — the rest of the course operationalizes them in greater detail.`,
            keyPoints: [
              'Module 6 extends Module 5 with TYPOLOGY and PROACTIVE capability',
              'Christensen: WHEN normal management will fail',
              'Ambidexterity (Module 5): HOW to lead through disruption',
              'Corporate entrepreneurship: HOW TO BUILD ongoing innovation capability',
              'Subsequent modules: innovation teams, planning, alliances, open innovation',
              'Frameworks here are foundations for the rest of the course'
            ]
          }
        ]
      }
    ]
  }

