export const module7 = {
  id: 7,
  title: 'Product Development Teams & Dedicated Team Partnerships',
  description: 'Wheelwright & Clark heavyweight teams, Govindarajan & Trimble dedicated team / shared staff partnerships — operational toolkit for managing innovation initiatives.',
  lectures: [
    {
      id: '7-1',
      moduleId: 7,
      title: 'Product Development Teams, Including "Heavyweight" Teams',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Module Overview',
          content: `Module 7 is the third module in the "Managing Innovation Initiatives" sister course. After Module 5 (ambidexterity as the general frame) and Module 6 (typology of innovation × matrix of responses), Module 7 zooms into the OPERATIONAL TOOLKIT: how to actually build and lead the teams that execute innovation. Two anchor works: (1) Wheelwright & Clark (Harvard) on heavyweight teams in product development; (2) Govindarajan & Trimble (Dartmouth) on the partnership architecture between a dedicated team and the mainstream organization. The two combine into a coherent operational answer.`,
          keyPoints: [
            'Module 7 = OPERATIONAL toolkit (after Module 5 frame + Module 6 typology)',
            'Wheelwright & Clark: 4 team designs, heavyweight as practical default',
            'Govindarajan & Trimble: dedicated team + shared staff in partnership',
            'Heavyweight team is a SPECIAL CASE of dedicated team',
            'Operational depth — not just "have a team", but how to lead it'
          ],
          interactive: 'module7-overview'
        },
        {
          title: 'Why Teams — and Why Hackman Matters',
          content: `Teams are used in innovation because innovation requires INTEGRATION across functions (engineering, marketing, manufacturing, finance). But Richard Hackman's "Why Teams Don't Work" warns that pulling people together and naming a leader does NOT automatically produce a working team. Hackman lists key design elements for ANY team: compelling goals, leaders with team perspective, clear membership, enabling structures (rewards, support). Module 7 won't repeat general team theory — it focuses on innovation-specific design issues.`,
          keyPoints: [
            'Innovation needs integration → teams the natural fit',
            'Hackman: team form ≠ team function',
            '4 baseline elements: compelling goals, team-perspective leaders, clear membership, enabling structures',
            'Module 7 specializes for innovation context — not general team theory'
          ]
        },
        {
          title: 'Functional Team Structure — The Default',
          content: `Each function (engineering, manufacturing, marketing) is its own team under a functional manager (FM). The project moves SEQUENTIALLY across functions. No links between functions on the diagram. Advantages: deep specialized expertise (someone who has done two generations of landing gear is on the project), aligns authority/responsibility/rewards (FM controls people and rewards them). Disadvantages: weak coordination between functions, no project owner, variable commitment across functions, strong inertia (each function reuses old solutions). Works for projects in familiar markets with familiar technology — coordination needs are low.`,
          keyPoints: [
            'Sequential pass-through: engineering → marketing → operations',
            'Strength: deep specialized expertise (years of generations)',
            'Strength: aligns FM authority + rewards',
            'Weakness: no overall project owner',
            'Weakness: variable commitment across functions',
            'Weakness: strong inertia — each function reuses old solutions',
            'Works only for familiar markets + familiar technology'
          ],
          interactive: 'four-team-types'
        },
        {
          title: 'Lightweight Team — Functional + Project Manager',
          content: `Add a project manager and a "liaison" in each function. The PM coordinates with liaisons. Most of the structure is unchanged — people stay in their functions. The IDEA: improve coordination & communication across functions. The REALITY (Wheelwright & Clark research): expected improvements rarely arrive. The PM is a "lightweight" — mid-level person with limited status and influence. Has knowledge to coordinate, but CANNOT make key decisions and does NOT control resources. PM can only INFLUENCE functional managers — and is "tolerated at best, often ignored when innovations are challenging." Result: a useful incremental upgrade for simple projects, but a disappointment for serious innovation.`,
          keyPoints: [
            'PM + liaisons in each function = "horizontal channel"',
            'IDEA: improve coordination',
            'REALITY: expected improvements rarely arrive',
            'PM is "lightweight" — no resource control, cannot decide',
            'Can only influence FMs; "tolerated at best, often ignored"',
            'Wheelwright & Clark: pessimistic conclusion',
            'OK for simple projects; disappoints for challenging innovation'
          ]
        },
        {
          title: 'Heavyweight Team — Truly Cross-Functional',
          content: `MAJOR change, not incremental. (1) Heavyweight project manager = SENIOR person, real clout, can go toe-to-toe with functional heads. (2) Direct access to and primary responsibility for ALL project people (dashed line around the team). (3) CORE TEAM MEMBERS — dedicated to this team (~70% time), co-located, working as a team rather than in their functions. (4) Functional managers still own long-term career development and appraisal in general, but heavyweight PM has say in performance evaluation for the project. (5) Team takes FULL OWNERSHIP from concept to market. (6) Accountable to senior management AS A WHOLE (not to each individual functional manager). Results: high ownership, commitment, integrity; cross-functional problem solving in real time. Examples: Black & Decker (electric tools redesign), Motorola (entirely new pager production process). Challenges: conflict with functional org, may underuse functional depth, raises real questions about senior management influence/control, and BIG ROLE CHANGE for team members.`,
          keyPoints: [
            'Heavyweight PM = senior person with real clout',
            'Core team members: dedicated (~70%), co-located, work as team',
            'Functional managers retain career development; PM has project-evaluation say',
            'Team takes FULL ownership from concept to market',
            'Accountable to senior management as a whole',
            'Examples: Motorola pagers, Black & Decker electric tools',
            'Challenges: conflict with FMs, control questions, role change'
          ],
          interactive: 'heavyweight-structure'
        },
        {
          title: 'Autonomous Team — Independent Organization',
          content: `People are FORMALLY removed from the functional organization. Co-located. Project leader is sole evaluator. Responsible from concept to market. This is essentially the INDEPENDENT ORGANIZATION / Tiger team / ambidextrous unit from Module 5. Strengths: focus, speed, full cross-functional integration, clean sheet of paper (not required to follow existing practices). Weaknesses: difficult to control, duplicates resources, trouble drawing on organization's capabilities. Wheelwright & Clark's findings are NOT particularly positive about this approach — they prefer heavyweight. Use only when fully separate organization is justified (disruptive, semi-autonomous business unit).`,
          keyPoints: [
            'People REMOVED from functional org, co-located, project-leader-evaluated',
            '= ambidextrous unit / Tiger team / independent organization',
            'Strengths: focus, speed, integration, clean sheet of paper',
            'Weaknesses: control issues, resource duplication, isolation from firm capabilities',
            'Wheelwright & Clark NOT enthusiastic — prefer heavyweight',
            'Use only when full separation justified (disruptive innovation)'
          ]
        },
        {
          title: 'Recap of Four Designs — When Each Fits',
          content: `The four designs sit on a spectrum of separation from the functional organization. FUNCTIONAL: no separation; works for familiar markets + technologies. LIGHTWEIGHT: marginal addition; works only for simple projects. HEAVYWEIGHT: practical default for serious NPD that still fits within strategic frame. AUTONOMOUS: full separation; rarely justified. Lightweight disappoints for challenging projects. Heavyweight succeeds when teams treat it as a real change in mindset, not just structure. Autonomous = ambidextrous unit (Module 5).`,
          keyPoints: [
            'Spectrum of separation: Functional → Lightweight → Heavyweight → Autonomous',
            'Functional: familiar markets + technology only',
            'Lightweight: simple projects only — disappoints for challenge',
            'Heavyweight: practical default for serious NPD inside strategy',
            'Autonomous: full separation, rare; = ambidextrous unit',
            'Each is operational answer to a Module 6 matrix cell'
          ],
          interactive: 'team-comparison-table'
        }
      ]
    },
    {
      id: '7-2',
      moduleId: 7,
      title: 'Focus on Using "Heavyweight" Product Development Teams',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Heavyweight vs Functional — Six Distinctive Attributes',
          content: `The central artifact of this lesson is a 6-row comparison between cross-functional (heavyweight) team and functional team. (1) TEAM CHARTER: heavyweight = broad and dynamic, responsible for the PRODUCT; functional = narrow, pre-specified. (2) ORIENTATION OF CORE MEMBERS: heavyweight = think like a GENERAL MANAGER; functional = functional specialist. (3) PROJECT OWNERSHIP: heavyweight = within team; functional = diffused. (4) INTEGRATION: heavyweight = INTERACTIVE within team; functional = sequential across functions (or by senior managers). (5) SOURCE OF EXPERTISE/RESOURCES: heavyweight = team co-located, functions supply; functional = staff on multiple projects, resources in functions. (6) SUCCESS IS / ACCOUNTABLE TO: heavyweight = product success / senior management; functional = best practice used / functional boss. Heavyweight is not "more coordination" — it changes the unit of analysis, ownership, and accountability.`,
          keyPoints: [
            'Charter: broad/dynamic (HW) vs narrow/pre-specified (Func)',
            'Members think like General Manager (HW) vs Functional Specialist (Func)',
            'Ownership: within team (HW) vs diffused (Func)',
            'Integration: interactive within team (HW) vs sequential (Func)',
            'Expertise: co-located (HW) vs spread across functions (Func)',
            'Success: product success (HW) vs best practice used (Func)',
            'Accountability: senior mgmt (HW) vs functional boss (Func)'
          ],
          interactive: 'crossfunctional-vs-functional'
        },
        {
          title: 'The Leader — Three Capabilities',
          content: `The heavyweight team leader is essentially a SENIOR LEADERSHIP POSITION. Calling them "Heavyweight Project Manager" underplays the role. Companies that use this approach treat finding and developing such leaders as a STRATEGIC PRIORITY. Three core capabilities: (1) ULTIMATE OWNER OF THE PROJECT — concept champion advocating up and down the org; guardian of integrity in choices; strong communication and conflict resolution; high commitment, credibility, courage of convictions. (2) COMFORTABLE IN DIFFERENT FUNCTIONAL AREAS — capable of speaking the language of multiple functions (not necessarily fluent); typically engineering background to lead engineering work directly; ALSO market/customer first-hand connection. (3) VERY ACTIVE — out of the office, face-to-face with key participants; communicating, identifying and resolving conflicts. Sit-in-office-and-plan style is wrong.`,
          keyPoints: [
            'Heavyweight PM = senior leadership position, not "PM"',
            'Capability 1: Ultimate owner — concept champion, guardian of integrity',
            'Capability 2: Multi-functional fluency — engineering background + market/customer first-hand',
            'Capability 3: Out of office, active — face-to-face',
            'Finding/developing such leaders = strategic priority'
          ],
          interactive: 'leader-capabilities'
        },
        {
          title: 'Executive Sponsorship — Replacing Distributed Reporting',
          content: `In functional teams, each function reports through its hierarchy. In heavyweight, accountability is delegated to the team — but the executive team needs an integration mechanism. SOLUTION: assign ONE senior executive (often VP of Engineering or Marketing) as SPONSOR. The sponsor (1) coaches and mentors the team and leader, (2) is the CHANNEL between executive team and heavyweight team (avoid every VP communicating individually — mixed signals), (3) shields team from competition with mainstream products. Critically, sponsor CLARIFIES THE GOVERNANCE PROCESS — where the team is empowered to decide, and where executive leadership stays close. Executive concerns: resource commitments, incentive rewards, pricing, milestone achievement, schedule slips. Clarity prevents violation of expectations.`,
          keyPoints: [
            'ONE sponsor — not every VP individually',
            'Sponsor coaches + mentors + is channel + shields from mainstream competition',
            'Critical: clarify GOVERNANCE PROCESS',
            'Executive concerns: resources, incentives, pricing, milestones',
            'Clarity → no violation of expectations → confidence retained'
          ],
          interactive: 'sponsor-governance'
        },
        {
          title: 'Core Members — The "Team Hat"',
          content: `Core team members hold a DOUBLE responsibility — for their functional area AND for the project as a whole. The "AND" is critical. Most members have no experience being responsible for a project whose scope crosses functions. They are required to take an EXECUTIVE VIEW — the right decision is the one good for the project, not for "my function". Members vary sharply in comfort with this "team hat" — coaching and development are critical. It also becomes a way to identify future leaders.`,
          keyPoints: [
            'Core member responsibility: functional area AND project as whole',
            'The AND is critical — required executive view',
            '"Team hat" replaces "functional hat"',
            'Comfort varies sharply across people',
            'Coaching/development critical',
            'Doubles as future-leader identification'
          ]
        },
        {
          title: 'When to Use Heavyweight (and When NOT)',
          content: `KEY ADVANTAGES: ownership, commitment, cross-functional problem solving — and team REMAINS WITHIN mainstream organization. Easier to integrate back when project complete than for a fully separate unit. WHEN TO USE: products and services that require new technologies or access new markets, but STILL FIT within the business unit's strategic frame — likely to gain executive support. COMPLEMENTARY to building separate organizations when innovation is disruptive or unlikely to gain such support. NOT just an organizational rearrangement — REQUIRES MINDSET CHANGE in leader, sponsor, and core members. Without the mindset change, heavyweight reverts to a glorified lightweight.`,
          keyPoints: [
            'Advantage: stays inside mainstream, easier reintegration after project',
            'Use for: new tech / new markets WITHIN strategic frame',
            'Complementary to (not substitute for) separate org for disruptive',
            'Requires MINDSET CHANGE: leader, sponsor, core members',
            'Without mindset change → reverts to lightweight'
          ]
        }
      ]
    },
    {
      id: '7-3',
      moduleId: 7,
      title: 'Innovation through Partnerships — Dedicated Teams + Mainstream',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Other Side of Innovation — Why Execution Is Undervalued',
          content: `Govindarajan & Trimble (Dartmouth, *The Other Side of Innovation*, HBR Press 2010) is the result of 10 years of field research on innovation initiatives. Their core observation: in most innovation models, EXECUTION is under-emphasized. Firms devote great attention to generating and testing IDEAS — but much less to MOVING from approved idea to impact. One CEO quoted: "I know how to encourage idea development, but execution is limited by management capability — I don't have a lot of tools." The book reframes innovation: Innovation = IDEAS + EXECUTION. The whole "Managing Innovation Initiatives" course centers execution.`,
          keyPoints: [
            'Govindarajan & Trimble (Dartmouth, 2010): 10 years field research',
            'Books: *The Other Side of Innovation*',
            'Observation: execution side undervalued in literature & practice',
            'Most attention: idea generation + testing',
            'Less attention: moving from idea to impact',
            'Reframe: Innovation = Ideas + Execution'
          ]
        },
        {
          title: 'Two Common Models — and Their Limits',
          content: `Two frequent (and successful) models: (1) INNOVATION = IDEAS + MOTIVATION — incentivize people, celebrate success, build innovation culture. NUCOR (steel mini-mill) is the canonical example: production teams cross-trained, incentives for continuous output improvement. Major success. LIMIT: efficiency pressures means only LIMITED resources for innovation; people get pulled back to mainstream. Works only for continuous improvement. (2) INNOVATION = IDEAS + PROCESS — companies facing repeated innovation challenges build detailed processes. JOHN DEERE: successive generations of award-winning tractors via this model. LIMIT: works only when PAST FORECASTS FUTURE. When you're at Aetna entering individual health insurance, or BMW building regenerative brakes for hybrid cars — past is no guide. The two models work, but in narrow conditions.`,
          keyPoints: [
            'Model 1: Ideas + Motivation (Nucor) — efficiency pressures limit resources',
            'Model 2: Ideas + Process (John Deere) — works only when past forecasts future',
            'Aetna individual health: past not a guide',
            'BMW regenerative brakes: past not a guide',
            'Both models — narrow conditions, not for complex innovation'
          ],
          interactive: 'innovation-formulas'
        },
        {
          title: 'Performance Engine — Power and Limits',
          content: `Mainstream organization = PERFORMANCE ENGINE (Govindarajan & Trimble's term — "suggests power"). Built to be REPEATABLE (specialization, efficiency) and PREDICTABLE (results-based management). The Engine creates growth, new products, even innovation — but only WITHIN ITS PARAMETERS. It STUMBLES when an initiative is NON-ROUTINE or UNPREDICTABLE. The "Ideas + Leader" fall-back response is a BAD BET — leader (even talented) ends up FIGHTING the Engine, which is built to fight dramatic innovation. The right model: IDEAS + LEADER + TEAM + PLAN. Custom organization (team) + custom plan (goals/measures/accountability built around uncertainty).`,
          keyPoints: [
            'Performance Engine = mainstream org; built for repeatability + predictability',
            'Powerful within parameters — but stumbles on non-routine + unpredictable',
            '"Ideas + Leader" alone — bad bet (fights Engine, loses)',
            'Right model: Ideas + Leader + Team + Plan',
            'Custom organization + custom plan'
          ],
          interactive: 'performance-engine'
        },
        {
          title: 'Project Team = Dedicated Team + Shared Staff',
          content: `Visual: COMPANY contains the Performance Engine (large) and a smaller Dedicated Team. SHARED STAFF are people who remain in Performance Engine but are part of the innovation initiative — typically PART-TIME. The Project Team = Dedicated Team + Shared Staff in PARTNERSHIP. Building a separate organization is EXPENSIVE and CHALLENGING — heavy duty. Use only to the extent needed. Some resources can and should stay in mainstream where capabilities apply. The Dedicated Team has VARIABLE ROLE — can take on most of the project (looks like ambidextrous unit) or only specific aspects (looks like heavyweight team). Heavyweight is a SPECIAL CASE of dedicated team. The whole structure is a CONTINUUM.`,
          keyPoints: [
            'Project Team = Dedicated Team + Shared Staff in partnership',
            'Shared Staff: part-time, remain in Performance Engine',
            'Building separate org: expensive — use only as needed',
            'Variable scope: from heavyweight to ambidextrous',
            'Heavyweight is a SPECIAL CASE of dedicated team',
            'CONTINUUM, not binary'
          ],
          interactive: 'dedicated-team-architecture'
        },
        {
          title: 'Three Questions for the Innovation Leader',
          content: `Govindarajan & Trimble formulate three questions that the rest of the module answers in detail. (1) WHAT IS THE TEAM'S SCOPE — what to split out into Dedicated Team, what to share with Performance Engine? (2) HOW TO BUILD THE TEAM — who is on it, what is its design and mode of operation? (3) HOW IS THE PARTNERSHIP MANAGED — what does the leader do day-to-day to make partnership work? These three questions structure Lesson 7-4 (in two parts).`,
          keyPoints: [
            '3 questions: scope, build, manage partnership',
            'Q1 Scope: division of labor between dedicated and shared',
            'Q2 Build: who is on team + how is it designed',
            'Q3 Manage: what makes partnership work',
            'Lesson 7-4 answers all three'
          ]
        }
      ]
    },
    {
      id: '7-4',
      moduleId: 7,
      title: 'Building the Dedicated Team & Managing the Partnership',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Scope — Avoid Overestimating the Performance Engine',
          content: `The first question: what to split into Dedicated Team, what to leave as Shared Staff in Performance Engine. The MAIN finding: managers SYSTEMATICALLY OVERESTIMATE Performance Engine capabilities → under-scope Dedicated Team. Reverse case (overscope) is NOT observed in the research. Why the bias? Managers look at INDIVIDUALS and their TALENTS. But what an organization can do is determined by HOW PEOPLE WORK TOGETHER — relationships between groups, communication, power, tempo, evaluation, processes. These hide critical limits. The research yields THREE diagnostic criteria.`,
          keyPoints: [
            'Tendency: overestimate Performance Engine → under-scope Dedicated Team',
            'Reverse case (overscope) NOT observed',
            'Wrong frame: individual talents',
            'Right frame: how people work together (relationships)',
            'Three diagnostic criteria emerge'
          ],
          interactive: 'overestimation-trap'
        },
        {
          title: 'Three Reasons for Separation',
          content: `(1) LACK OF NEEDED WORK RELATIONSHIPS between units and individuals. Building new relationships takes time and effort, gets pressed out by mainstream demands. EXAMPLE: BMW hybrid car — battery group and brake group did not talk to each other, but regenerative braking required tight collaboration → split out the braking subsystem to a Dedicated Team. (2) POWER STRUCTURE DOES NOT FIT needs of innovation initiative. Power deeply embedded — to change, need new context. EXAMPLE: Electrolux high-end appliances — engineering-dominant firm, but high-end requires marketing-driven aesthetics → split out customer insight teams. (3) OPERATIONAL TEMPO DOES NOT FIT the innovation opportunity. Tempo built into planning and evaluation, hard to work against. EXAMPLE: Timberland trail shoes — fashion-cycle tempo vs needed extensive exploration of materials/runners → split out development. ANY ONE criterion ⇒ separate.`,
          keyPoints: [
            'Reason 1: lack of work relationships (BMW battery + brake)',
            'Reason 2: power structure mismatch (Electrolux engineering → marketing)',
            'Reason 3: tempo mismatch (Timberland fashion vs exploration)',
            'ANY ONE criterion → separate that part of work',
            'Avoid overestimating mainstream — focus on relationships > skills'
          ],
          interactive: 'three-separation-reasons'
        },
        {
          title: 'Who Is On the Team — The Insider Trap',
          content: `Naive advice: define skills, hire best people. Misses critical point: Dedicated Team must work DIFFERENTLY than employees are used to. Insider bias drives staffing — pride, familiarity, comfort, expedience, compensation norms, valuable opportunity. Outsiders are tough to find. WHY THIS IS A TRAP: insiders are IMPRINTED with the organization's history — familiar with processes, structure, power; have a perspective on how to compete that's built in. THIS IS WHAT MUST CHANGE. Outsiders come without that perspective. RECOMMENDATION: counterbalance bias deliberately. Recruit outsiders even when skilled insiders exist. If recruiting hard — acquire small organization. The bias is so strong that going against it is what gets around the trap.`,
          keyPoints: [
            'Naive: define skills, hire best — misses point',
            'Insider bias from: pride, familiarity, comfort, expedience, comp norms',
            'Outsiders: tough to find — recruiting weak network',
            'Trap: insiders imprinted with history → recreate existing perspective',
            'Outsiders come without imprinting',
            'Counterbalance: deliberately recruit outsiders, acquire small firm'
          ],
          interactive: 'insider-bias-tradeoff'
        },
        {
          title: 'Designing the Team — Zero-Based Design',
          content: `Bias #2 in team design: drawing components from mainstream organization (job descriptions, metrics, processes) — expedient, familiar, often required by HR/Finance. SIX TRAPS: (1) recreating old roles and responsibilities, (2) reinforcing dominance of old power centers, (3) assessing performance using established measures, (4) failing to create a distinct culture, (5) using existing (inappropriate) processes, (6) TYRANNY OF CONFORMANCE to system and standards. SOLUTION: ZERO-BASED DESIGN. Consciously redesign each component with a clean sheet of paper. Plus: rebalance power by strategically hiring outsiders and choosing the most powerful insider to fit the new initiative. Plus: gain executive support to break from systems and standards. NOT EXPEDIENT — takes time. Pressure will be to use easy-to-assemble components. Be aware.`,
          keyPoints: [
            '6 design traps: old roles, old power, old metrics, no culture, old processes, tyranny of conformance',
            'Solution: ZERO-BASED DESIGN — clean sheet for each component',
            'Rebalance power: outsiders + most powerful insider matched to need',
            'Need executive support to break HR/Finance standards',
            'Not expedient — takes time. Pressure resists. Be aware.'
          ],
          interactive: 'zero-based-design'
        },
        {
          title: 'Managing the Partnership — Four Levels',
          content: `Performance Engine has different goals (repeatability, predictability), will tend to FIGHT YOU or IGNORE YOU — it's not under your control and stronger than you. Solution operates at FOUR LEVELS. LEVEL 1 — LEADER'S STYLE: positive, persuasive, collaborative; emphasize partnership ("we're in this together"). Necessary but not sufficient. LEVEL 2 — SENIOR LEADERSHIP ONGOING (most important): not just at approval, but ongoing mediation of conflicts and decisions, celebrating successes, emphasizing importance, clarifying shared fate. The "sponsor" metaphor is too weak for execution work — need ONGOING role. LEVEL 3 — PROCESSES & SYSTEMS for partnering success: ONE document and process for resource allocation (don't let allocations fragment per function); clearly define responsibilities (gray areas → mainstream finds other things); SHIELD MAINSTREAM from innovation's uncertainty (hire 4 people upfront if might need 4 — don't say "maybe 2 maybe 4"); transfer pricing for resources committed; incentives and special bonuses for shared staff (especially salespeople). LEVEL 4 — WIN HEARTS & MINDS: reinforce common values, frame Dedicated Team AS DIFFERENT NOT SUPERIOR, choose insiders for heavily collaborative roles (their relationships invaluable), work in separate but NEARBY locations, establish METRICS FOR COOPERATION among mainstream managers.`,
          keyPoints: [
            'Performance Engine fights or ignores — not under your control',
            'Level 1: Leader style — positive, persuasive, collaborative',
            'Level 2: Senior leadership ONGOING — most important',
            'Level 3: Processes/systems — one allocation doc, clear responsibilities, shield mainstream, transfer prices, incentives',
            'Level 4: Hearts & minds — different not superior, insiders for collaborative, nearby locations, cooperation metrics'
          ],
          interactive: 'four-level-partnership'
        },
        {
          title: 'Partnership Challenges — and Their Solutions',
          content: `THREE recurring challenges that break partnerships: (1) COMPETITION FOR SCARCE RESOURCES — mainstream and innovation pull from same people. (2) DIVIDED ATTENTION OF SHARED STAFF — they have day jobs in Performance Engine. (3) DISHARMONY IN THE PARTNERSHIP — different goals, different cultures, conflict accumulates. Solutions are the FOUR LEVELS combined. Critical INSIGHT: most executives are involved at the approval stage, then step back when initiative is small. They size their involvement by initiative size — but innovation initiatives are about POTENTIAL, not current size. Importance is OUT OF PROPORTION to current size. Senior executives need to give MORE TIME than they're used to.`,
          keyPoints: [
            '3 challenges: scarce resources, divided attention, disharmony',
            'Solutions: combined 4 levels',
            'Common mistake: executive involvement only at approval',
            'Innovation importance: about POTENTIAL, not current size',
            'Senior executives need more time than they expect'
          ]
        }
      ]
    },
    {
      id: '7-5',
      moduleId: 7,
      title: 'Module 7 Summary and Synthesis',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'The Logical Chain of Module 7',
          content: `Module 7 builds an OPERATIONAL TOOLKIT layer by layer. Lesson 7-1 introduces the four team designs (Functional / Lightweight / Heavyweight / Autonomous) — Wheelwright & Clark — establishing that lightweight disappoints, heavyweight is the practical default for serious NPD inside strategic frame, autonomous = ambidextrous unit. Lesson 7-2 deepens heavyweight: 6-attribute comparison vs functional, three leader capabilities, executive sponsorship + governance, "team hat" for core members. Lesson 7-3 generalizes the frame to Govindarajan & Trimble: Performance Engine vs Complex Innovation, formula Innovation = Ideas + Leader + Team + Plan, Project Team = Dedicated Team + Shared Staff in partnership. Lesson 7-4 is the operational climax: scope (3 reasons for separation), insider bias and outsider balance, zero-based design, four-level partnership management.`,
          keyPoints: [
            '7-1: Four team designs — heavyweight as practical default',
            '7-2: Heavyweight depth — 6 attributes, leader, sponsor, team hat',
            '7-3: Govindarajan & Trimble frame — Performance Engine + partnership',
            '7-4: Operational climax — scope, build, manage partnership',
            'Each lesson builds on the previous'
          ],
          interactive: 'module7-concept-map'
        },
        {
          title: 'Ten Key Takeaways',
          content: `Ten points to carry forward. (1) Four team designs — Functional / Lightweight / Heavyweight / Autonomous — on a separation spectrum. (2) Lightweight disappoints because PM has no resource control — only influences functional managers. (3) Heavyweight = practical default for serious NPD; requires MINDSET CHANGE in leader/sponsor/members, not just structure. (4) Sponsor is not just mentor — also CHANNEL upward and CLARIFIER OF GOVERNANCE (resources/incentives/pricing/milestones). (5) Innovation = Ideas + Execution; Govindarajan & Trimble: execution side undervalued. (6) Performance Engine = mainstream org, built repeatable + predictable; fails on non-routine + unpredictable. (7) Project Team = Dedicated Team + Shared Staff in partnership; variable scope = continuum from heavyweight to ambidextrous. (8) Three reasons for separation: relationships, power structure, tempo — any one ⇒ separate. (9) Insider bias systematically recreates existing perspectives — counterbalance with outsiders deliberately. (10) Partnership management — four levels; senior leadership ONGOING involvement is the most important.`,
          keyPoints: [
            '1. Four team designs on separation spectrum',
            '2. Lightweight: PM no resource control',
            '3. Heavyweight: mindset change, not structure',
            '4. Sponsor = channel + governance clarifier',
            '5. Innovation = Ideas + Execution',
            '6. Performance Engine: powerful but limited',
            '7. Project Team = Dedicated + Shared = continuum',
            '8. 3 separation reasons: relationships, power, tempo',
            '9. Insider bias → recreates → counterbalance',
            '10. Partnership: 4 levels, senior ongoing most important'
          ]
        },
        {
          title: 'Practical Recommendations',
          content: `(1) Diagnose every NPD project: needed coordination high → don't go lightweight, go heavyweight. (2) Treat heavyweight team leader as STRATEGIC-LEVEL position. Develop such leaders systematically. (3) Assign ONE executive sponsor per heavyweight team — clarify governance early. (4) Apply the 3 separation criteria to every initiative. ANY ONE signal ⇒ separate. (5) When staffing dedicated team — deliberately recruit outsiders even when skilled insiders exist. (6) Design the dedicated team with a clean sheet of paper. Get executive support to break HR/Finance standards. (7) Set up ONE document and ONE process for resource allocation; don't fragment. (8) Senior leadership: ongoing, not approval-only. 30 minutes biweekly mediation > 2-hour kickoff. (9) Frame dedicated team AS DIFFERENT NOT SUPERIOR in every communication. (10) For heavily collaborative roles, BREAK the outsiders rule — pick insiders with relationships.`,
          keyPoints: [
            'Diagnose coordination needs → don\'t default lightweight',
            'Heavyweight leader = strategic-level position',
            'One sponsor, governance clear early',
            'Apply 3 criteria per initiative',
            'Outsiders deliberate even with insiders',
            'Zero-based design + executive support to break standards',
            'One allocation doc; no fragmentation',
            'Senior involvement ongoing',
            'Frame different-not-superior',
            'For collaborative roles: insiders'
          ]
        },
        {
          title: 'Connection to the Course',
          content: `Module 7 is the OPERATIONAL toolkit underneath Modules 5 and 6. Module 5 (ambidexterity) gave the GENERAL FRAME — separate aligned units for explore/exploit. Module 6 (typology) gave the DIAGNOSTIC — sustaining vs disruptive × processes fit yields cells A/B/C/D with different responses. Module 7 gives the HOW: in cell A → Functional/Lightweight team; in cells B and D → Heavyweight team; in cell C → Independent Organization (Autonomous / Ambidextrous unit). For any of these, Govindarajan & Trimble's 4-level partnership management applies if shared staff are involved. Subsequent modules deepen specific aspects: planning under uncertainty (custom plan from G&T model), inter-organizational alliances and open innovation. The frameworks here are FOUNDATIONS for the rest of the course.`,
          keyPoints: [
            'Module 5: general frame (ambidexterity)',
            'Module 6: diagnostic (typology + matrix)',
            'Module 7: HOW (operational team designs + partnerships)',
            'Cell A → Functional/Lightweight; B,D → Heavyweight; C → Independent',
            '4-level partnership applies whenever shared staff present',
            'Foundations for subsequent modules (custom plan, alliances)'
          ]
        }
      ]
    }
  ]
}
