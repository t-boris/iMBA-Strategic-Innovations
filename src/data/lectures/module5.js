export const module5 =   {
    id: 5,
    title: 'Managing Innovation Initiatives',
    description: 'Ambidextrous organizations: leading both mainstream excellence and new-business experimentation.',
    lectures: [
      {
        id: '5-1',
        moduleId: 5,
        title: 'Challenges in the Evolution of New Technologies and Markets',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'Module Overview',
            content: `This module begins the sister course on Managing Innovation Initiatives. While the predecessor course focused on strategy (how products connect with markets), this course focuses on execution: how organizations and leaders must be designed to actually get innovation done. The central idea is the ambidextrous organization — a firm that simultaneously succeeds in its mature mainstream business AND launches radically new ones. Managing innovation is fundamentally different from managing established businesses because uncertainty and dynamism break managerial intuitions.`,
            keyPoints: [
              'Focus shifts from strategy (what to do) to execution (how to get it done)',
              'Central idea: ambidextrous organization — excel at both mainstream AND innovation',
              'New markets behave fundamentally differently from mature ones',
              'Uncertainty and dynamism are the two central properties of new markets'
            ],
            interactive: 's-curve-animated'
          },
          {
            title: 'October 9, 1903: Two Contradicting Signals',
            content: `On the same day — October 9, 1903 — two records appeared. The New York Times wrote that a real flying machine would be invented in "from one to ten million years" by "the combined continuous efforts of mathematicians and mechanicians." That same day, bicycle mechanic Orville Wright wrote in his diary: "We unpacked the rest of the goods for the new machine." Two months later, on December 17, 1903, the Wright brothers flew. This illustrates the fundamental uncertainty around new technologies: at birth, signals are contradictory. Samuel Langley had just crashed his well-funded aircraft from a barge two days earlier — a highly visible failure. A manager looking at Langley would conclude one thing; a manager looking at the Wrights, another.`,
            keyPoints: [
              'New technologies emit contradictory signals at birth',
              'Wright brothers succeeded Dec 17, 1903, just 2 months after NY Times dismissal',
              'Samuel Langley crashed 2 days before NYT quote — a highly visible failure',
              'Hindsight makes these look obvious; in the moment, they are not'
            ]
          },
          {
            title: 'S-Curve and the Era of Ferment',
            content: `The S-curve (Anderson & Tushman, 2004) describes technology evolution: low performance at start, rapid acceleration in the middle, plateau at maturity. Technologies tend to substitute each other in successive S-curves (sailing → steam ships, electro-mechanical → electronic calculators, film → digital photography). Three eras sit on the curve: Era of Ferment (early, with many competing designs and rapid experimentation), Emergence of Dominant Design (when the market converges on one architecture), and Era of Incremental Change (process improvements, market segmentation, maturity). Aircraft after the Wrights went through exactly this: seagull-shaped, umbrella, butterfly — many wild configurations before the standard airplane emerged.`,
            keyPoints: [
              'S-curve: slow start → rapid growth → plateau',
              'Technologies evolve in successive S-curves (substitution)',
              'Era of Ferment: many competing designs, rapid experimentation',
              'Dominant design closes the ferment era and opens incremental change',
              'Early aircraft: seagull, umbrella, butterfly — before standard design emerged'
            ],
            interactive: 'scurve-three-eras'
          },
          {
            title: 'Ballpoint Pens vs Transistors: Two Different Paths',
            content: `Transistors replacing vacuum tubes (1954-1968) shows a smooth S-curve of substitution. But even within this smooth transition, there was another battle: germanium vs silicon transistors. One major competitor built a plant for germanium-based transistors; when silicon won, the plant became worthless. Ballpoint pens (1946-1962) show a wildly different pattern: explosive boom in 1946-1947, catastrophic crater by 1949 (pens leaked and the market collapsed), slow recovery through the 1950s. A manager entering in 1947 would be ruined; a manager looking at the 1949 graph might conclude the technology would never work, and miss one of the defining products of the century.`,
            keyPoints: [
              'Transistors vs tubes: smooth S-curve substitution',
              'But within transistors: germanium vs silicon — a second battle',
              'Ballpoint pens: boom (1946-47) → crater (1948-49) → recovery (1950s)',
              'Entry timing and commitment paradoxes both in one example'
            ],
            interactive: 'ballpoint-vs-transistor'
          },
          {
            title: 'Four Strategic Choices — Each a Paradox',
            content: `Firms facing a new market must make four key decisions, each with a "conventional wisdom" and a contradicting reality. Timing of entry: conventional wisdom says "enter early" (first-mover advantage), but early entry can be premature (ballpoint pens, early diesel locomotives). Magnitude of commitment: conventional wisdom says "high commitment wins," but high commitment locks in early mistakes (germanium transistor plant). Link to existing capabilities: conventional wisdom says "leverage your strengths," but old capabilities can inhibit adaptation (mechanical calculator firms' service networks became worthless when electronics arrived). Strategic approach: conventional wisdom says "follow proven recipes," but new markets require new bases of competition (GM Electro-Motive beat legacy steam locomotive makers by switching from custom-built to mass-production).`,
            keyPoints: [
              'Timing: "enter early" vs "early is premature"',
              'Commitment: "go big" vs "big locks in wrong bet"',
              'Capabilities: "leverage strengths" vs "old strengths inhibit adaptation"',
              'Approach: "proven recipes" vs "new markets need new rules"',
              'Each paradox has a real-world case study in the lecture'
            ],
            interactive: 'four-paradoxes'
          },
          {
            title: 'Losers Also See It Coming',
            content: `A critical teaching of this lesson: it is NOT true that losing firms "don't see it coming." Incumbent firms almost always make serious, well-intentioned efforts to evaluate and develop new technologies. They often get it wrong — but not because they are stupid or blind. They get it wrong because the decisions are objectively hard, uncertainty is real, and our hindsight bias makes it look easy in retrospect. Both winners and losers make good-faith attempts. The question for managers is not "how do I avoid being blind?" but "how do I make decisions well under genuine uncertainty?" This framing sets up the next lesson, which turns the view inward: why do organizations struggle even when they see it?`,
            keyPoints: [
              'Incumbents almost always make serious efforts to adopt new tech',
              'Losers are not stupid — decisions are objectively hard',
              'Hindsight bias makes outcomes look obvious in retrospect',
              'Right question: "how to decide well under uncertainty?"',
              'Sets up Lesson 5-2 on internal organizational challenges'
            ]
          }
        ]
      },
      {
        id: '5-2',
        moduleId: 5,
        title: 'How Organizations Succeed and Fail as Markets Grow and Change',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'The Organization Design Diamond',
            content: `To implement strategy effectively, an organization must be designed around that strategy. Tushman and O'Reilly's diamond model (1996) puts Strategy at the top, with three corners supporting it: Structures & Systems (functional vs divisional, centralization, metrics, rewards), People (who to hire, competencies, motivation), and Culture (shared expectations, beliefs, norms). All four must be aligned with each other and with the strategy. McKinsey's older 7-S framework (Strategy, Structure, Systems, Staff, Style, Skills, Superordinate Goals) captures the same idea with more granularity. If you want creative people, you cannot punish failure. If your metric is efficiency, you cannot grow an experimental culture. Everything reinforces everything else.`,
            keyPoints: [
              'Tushman-O\'Reilly Diamond: Strategy, Structures & Systems, People, Culture',
              'McKinsey 7-S: more granular version of same idea',
              'All elements must be aligned with strategy AND each other',
              'Misalignment kills execution regardless of strategy quality'
            ],
            interactive: 'org-design-diamond'
          },
          {
            title: 'Alignment, Fit, and the Success Syndrome',
            content: `Managers constantly fine-tune alignment: better systems, adjusted rewards, right hires. Over time, this produces fit — a tightly-tuned match between organization design and market needs. High fit delivers success: profitability, efficiency, predictability. But this same process builds inertia. O'Reilly & Tushman call this the Success Syndrome: the very process that creates success also creates resistance to change. Fit and inertia are two sides of the same coin. When the market shifts (new technology, new competition, new customer needs), the aligned organization cannot easily reconfigure itself. This is not a bug in how organizations work — it is fundamental to what alignment MEANS.`,
            keyPoints: [
              'Managers fine-tune alignment → fit improves over time',
              'High fit = success (profitability, efficiency, reliability)',
              'But fit inseparably builds inertia',
              'Success Syndrome (O\'Reilly & Tushman): success creates resistance to change',
              'Fit and inertia are two sides of the same coin'
            ]
          },
          {
            title: 'Structural vs Cultural Inertia — BlackBerry and Kodak',
            content: `Two flavors of inertia hold organizations back. Structural inertia lives in the "hardware" — processes, systems, reporting lines, career paths, metric systems. People invest in these practices: their positions, skills, and power are tied to the status quo. BlackBerry is the canonical case. When touchscreen smartphones arrived, BlackBerry's entire R&D, patent portfolio, and engineering expertise were built around physical keyboards. The Storm (their late touchscreen product) had to be rushed and shipped unreliable. Cultural (cognitive) inertia lives in "software" — shared beliefs, identity, "how we do things here." Kodak is the canonical case. Kodak insiders said "film was in the DNA of Kodakers." The business model — sell the camera, then sell film for decades — was part of people's identity. Abandoning it meant abandoning who they were.`,
            keyPoints: [
              'Structural inertia: hardware (processes, systems, careers)',
              'Cultural inertia: software (beliefs, identity, "how we do things")',
              'BlackBerry: structural case — keyboard expertise locked them in',
              'Kodak: cultural case — "film was in the DNA of Kodakers"',
              'Both forms are usually present simultaneously'
            ],
            interactive: 'inertia-types'
          },
          {
            title: 'Three Diamonds on the S-Curve',
            content: `Each era of the S-curve requires a radically different diamond alignment, not just a tweak. In the Era of Ferment (early S-curve), the aligned organization experiments quickly, learns rapidly, tolerates messy products, and finds early-adopter customers willing to deal with limitations. In the Era of Differentiation (emergence of dominant design), the organization must shift dramatically — from technology focus to marketing focus, from exploration to segmentation, from "does it work?" to "is it better than competitors?" In the Era of Incremental Change (maturity), the aligned organization focuses on efficiency, cost, internal process innovation — commoditization has arrived. Each transition requires a radical rebuild of the diamond. Inertia makes each transition painful.`,
            keyPoints: [
              'Each S-curve era = different optimal diamond alignment',
              'Ferment: experiment, learn, tolerate messiness',
              'Differentiation: technology → marketing, dominant design emerges',
              'Incremental: efficiency, cost, process innovation',
              'Transitions between eras are radical redesigns, not tweaks'
            ],
            interactive: 'scurve-three-diamonds'
          },
          {
            title: 'Setting Up the Problem for Solution',
            content: `The challenge becomes clear: when a firm sitting comfortably on a mature S-curve faces an emerging new market with a completely different technology, its entire alignment works AGAINST effective response. Different critical tasks, different metrics, different pace, different culture are required. And inertia — both structural and cultural — actively pushes the firm back toward the mainstream alignment. This is why "just enter the new market" doesn't work. You cannot simply redirect a successful organization; its success is precisely what prevents the redirection. This sets up the solution (ambidexterity) in Lesson 5-3.`,
            keyPoints: [
              'Mature firm + new market = alignment mismatch',
              'Critical tasks, metrics, pace, culture all require change',
              'Inertia actively resists the change',
              'Cannot simply redirect a successful organization',
              'Need a structural solution — the ambidextrous organization'
            ]
          }
        ]
      },
      {
        id: '5-3',
        moduleId: 5,
        title: 'Ambidextrous Organizations',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'What Ambidextrous Means',
            content: `Ambidextrous comes from Latin ambo (both) + dexter (right hand) — able to use both hands equally well. Applied to organizations, it means simultaneously excelling at two very different tasks. One "hand" competes in the mainstream market: large, mature, efficiency-focused, incremental innovation, predictable competition. The other "hand" develops new products and enters new markets: radical innovation, speed, flexibility, experimentation, uncertain economics. The two hands do very different things but must work together. Most organizations can only do one well. Few can do both. The goal of this module is to explain how to build this capability.`,
            keyPoints: [
              'Ambidextrous = both hands equally skilled',
              'One hand: mainstream business (efficiency, incremental, predictable)',
              'Other hand: innovation unit (speed, radical, uncertain)',
              'Two hands do very different things but must work together',
              'Most organizations do one well; few do both'
            ],
            interactive: 'ambidextrous-hands'
          },
          {
            title: 'Impetus: New Comes From Old',
            content: `Why try to be ambidextrous at all? Why not just spin off new ventures into separate companies? Because firms are good at identifying opportunities that leverage their existing capabilities. IBM's reputation and credibility gave the PC market legitimacy when IBM entered — an enormous advantage over startups. This metaphor — "the new comes from the old" — is not a one-time event. It is continuous: every old mainstream once was a new bet, and from it comes the next new thing. Corning Glass Works did this for 100+ years: windows → CRT tubes → fiber optics → Gorilla Glass. Each time, the capabilities built in the old business launched the new. That is why you want to keep them under one roof — but manage them separately.`,
            keyPoints: [
              'Firms have capabilities (tech, brand, channels) that give advantage in new markets',
              'IBM\'s entry into PCs legitimized the entire industry',
              '"New comes from old" is continuous, not a one-time event',
              'Corning: windows → CRT → fiber optics → Gorilla Glass (100+ years)',
              'Keep them together to leverage capabilities; manage separately for alignment'
            ]
          },
          {
            title: 'Why Mainstream Undermines the New — Three Mechanisms',
            content: `Even with best intentions, the mainstream business systematically undermines the new one through three mechanisms. (1) Resources: mainstream has voracious appetite (it's large and competing hard), can cite relatively certain losses if starved ("we'll miss deadlines, lose customers"), while new business can only offer uncertain future gains. Plus loss aversion: people weight certain losses more than uncertain gains. Plus political power: mainstream has more senior people. The HP portable scanner story: a senior exec visiting from corporate allocated $10M to the new unit; the money was quietly redirected back to mainstream scanners as soon as he left. (2) Problem, not solution: new business may cannibalize the old (mechanical calculator firms were slow on electronics because electronics killed their core) or be seen as a distraction. (3) Inertia: the old organization's design keeps pulling the new one toward its own metrics, systems, and culture.`,
            keyPoints: [
              'Mainstream has voracious appetite + more political power',
              'Mainstream cites certain losses; new promises uncertain gains',
              'Loss aversion: certain losses loom larger than uncertain gains',
              'HP portable scanner: $10M was quietly redirected back to mainstream',
              'Cannibalization fear: new kills old market (mechanical calculators)',
              'Inertia pulls new toward mainstream metrics/systems/culture'
            ],
            interactive: 'undermining-mechanisms'
          },
          {
            title: 'Two Routes to Ambidexterity',
            content: `The solution has two parts that must work together. Part 1: Organize the new initiative as a separate, semi-autonomous unit — NOT a heavyweight project team, NOT a cross-functional team within mainstream, but a structurally distinct unit with its own resources, its own functions, its own culture. Often physically separated (different floor, different building). This lets it develop its own alignment around the new market. Part 2: Provide extensive senior management support. The top leader must allocate disproportionate attention to this small new unit — against the natural intuition that attention should scale with business size. Senior management must also integrate the new unit back with mainstream (for access to capabilities and resources) and protect it from the three undermining mechanisms. Without Part 2, separation creates an isolated startup with no incumbent advantage. Without Part 1, senior support cannot fight inertia.`,
            keyPoints: [
              'Part 1: Separate semi-autonomous unit (own alignment)',
              'NOT a heavyweight project team or cross-functional team inside mainstream',
              'Part 2: Extensive senior management support',
              'Disproportionate attention to the small new unit',
              'Separation without support = isolated startup',
              'Support without separation = inertia wins anyway'
            ],
            interactive: 'two-routes-ambidexterity'
          },
          {
            title: 'Separation AND Integration: IBM EBOs and Cisco Councils',
            content: `Pure separation would lose incumbent advantages. The new unit needs continued access to mainstream capabilities and resources. Integration happens two ways. Through architecture: firms use hybrid labels that are neither "division" nor "project team." IBM called theirs Emerging Business Opportunities (EBOs) — units with their own P&L, different metrics, but embedded in the corporate architecture. Cisco organized its innovation through Councils — cross-cutting bodies coordinating related innovation efforts. Through people, especially executives: because these situations are one-off, integration happens through personal relationships at senior levels, not through standardized processes as between functions. Senior leaders become the carriers of integration. This combination — structural separation with relational integration — is the core mechanism.`,
            keyPoints: [
              'Pure separation loses incumbent advantages',
              'IBM EBO: own P&L + different metrics + embedded in corp',
              'Cisco Councils: cross-cutting coordinating bodies',
              'Integration through people, especially executives (not processes)',
              'Structural separation + relational integration = the core pattern'
            ]
          }
        ]
      },
      {
        id: '5-4',
        moduleId: 5,
        title: 'Leading Ambidextrous Organizations — Strategic Intent, Identity, and Culture',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'Hardware and Software of Ambidexterity',
            content: `Lesson 5-3 built the "hardware" of ambidexterity — the separate unit plus senior management support. But structure alone is inert. To activate it, the organization needs "software" — ideas and shared understanding that bridge mainstream and innovation. Three elements make up this software: strategic intent (what the firm is going toward), identity (who we are), and culture (how we do things). Each must be crafted to bind the two hands together rather than pull them apart. Without this software, the two units will drift into separate firms, and the whole ambidexterity argument (leverage of capabilities, new-from-old) collapses.`,
            keyPoints: [
              '5-3 was hardware: separate unit + senior support',
              '5-4 is software: ideas that activate the hardware',
              'Three software elements: strategic intent, identity, culture',
              'Without software, two units drift apart into separate firms',
              'Software must bridge mainstream and innovation'
            ]
          },
          {
            title: 'Strategic Intent That Includes Both',
            content: `The firm's strategic intent — its overarching direction and purpose — must explicitly include both success in existing businesses AND experimentation/success in new ones. A strategic intent that says "we are the leader in X market" leaves new businesses orphaned: at the first budget conflict, people will default to defending mainstream. A good strategic intent in an ambidextrous firm might be "we build enduring leadership by continuously renewing our portfolio of businesses in areas where our capabilities create advantage." Such a frame validates investment in both sides. Research on Fortune 500 turnover (roughly half of F500 firms turn over every 20 years) makes this urgent: even the largest firms do not have assured futures, and strategic intent must account for continuous renewal.`,
            keyPoints: [
              'Strategic intent must explicitly cover both mainstream and innovation',
              '"Leader in X market" orphans new businesses',
              'Better frame: "enduring leadership through continuous renewal"',
              'Fortune 500 turnover: ~50% every 20 years',
              'Continuous renewal is necessary, not optional'
            ]
          },
          {
            title: 'Identity: Who We Are (and Where We Are Going)',
            content: `Identity answers the question "what is central, enduring, and distinctive about our organization?" In an ambidextrous firm, identity must validate both excellence in the mainstream AND experimentation/innovation. A powerful real-world example comes from Data General, a minicomputer firm in transition to workstations and PCs in the 1980s-90s. CEO Ron Skates deliberately built a shared understanding in the top team: both the traditional proprietary-architecture business AND the new open-architecture business were essential to the firm's success. This allowed people in the dying proprietary business to stay engaged — they had a pathway, their work was validated, they were part of something larger than just "the legacy team." Without this identity work, top talent would have fled the mainstream, collapsing the transition. Identity as soft integrating mechanism: when tensions between old and new arise, the overarching identity unites rather than polarizes.`,
            keyPoints: [
              'Identity = what is central, enduring, distinctive about us',
              'Must validate BOTH mainstream excellence AND innovation',
              'Data General (Ron Skates): both proprietary AND open businesses validated',
              'Kept talent engaged in the dying business through transition',
              'Identity is a soft integrating mechanism when tensions arise'
            ]
          },
          {
            title: 'Loose-Tight Culture at Corning',
            content: `Culture presents a paradox in ambidextrous firms. Mature businesses need cultures of predictability, efficiency, and control. New businesses need cultures of experimentation, flexibility, and tolerance for failure. How can one firm have both? The answer: loose-tight culture. Tight = core values shared across the whole firm (what binds us). Loose = precepts that vary by unit based on market needs. Corning Glass Works is the exemplar. Across 100+ years, Corning's TIGHT core stayed constant: "we are experts in everything related to glass; if glass can do something, our researchers will figure out how." This core bound dishware, CRT tubes, fiber optics, and Gorilla Glass units together. But the LOOSE precepts varied: dishware is retail, high-volume, low-margin, consumer-oriented; fiber optics is B2B, long sales cycles, high-tech, huge R&D. Both fit under the tight core but operated very differently.`,
            keyPoints: [
              'Mature needs predictability; new needs experimentation — can one firm do both?',
              'Loose-Tight solution: TIGHT core + LOOSE precepts',
              'Tight = core values everyone shares',
              'Loose = unit-specific precepts varying by market needs',
              'Corning: TIGHT "experts in glass" + LOOSE varies by unit',
              'Worked across 100+ years and multiple mainstream transitions'
            ],
            interactive: 'loose-tight-culture'
          },
          {
            title: 'Management vs Leadership of Software Elements',
            content: `Strategic intent, identity, and loose-tight culture are design elements — the senior leadership makes decisions about what they should be (management side). But they are built by influencing people, telling stories, modeling behavior, creating dialogue across units (leadership side). You cannot announce "our new strategic intent includes innovation" and expect it to change anything. You have to create forums where the intent is discussed and internalized, demonstrate through your own attention and investment where it matters, tell stories of past transitions where both sides succeeded. The design decisions set the target; the leadership work produces actual behavior. Lesson 5-5 covers the concrete leadership practices.`,
            keyPoints: [
              'Software elements are design decisions (management side)',
              'But built through influence, stories, modeling (leadership side)',
              'Announcement is not enough — must be internalized',
              'Create forums for dialogue; demonstrate through attention; tell stories',
              'Lesson 5-5 covers the concrete leadership practices'
            ]
          }
        ]
      },
      {
        id: '5-5',
        moduleId: 5,
        title: 'Leading Ambidextrous Organizations — Practice',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'Why Leadership Is the Lynchpin',
            content: `An ambidextrous organization will NOT run itself. Historical norms, power structures, and existing processes all push toward mainstream-centric operation. Without active leadership, the organization automatically reverts to its default: mainstream wins resources, innovation starves, inertia reigns. Leadership in this context is precisely the work of creating change that would not happen on its own. Some leadership fundamentals stay constant (be a role model, connect externally, resolve conflicts, balance individual and corporate needs, remove roadblocks). But the distinctive challenge in an ambidextrous firm is leading in the face of structural differences between units — differences the organization is not built to handle naturally.`,
            keyPoints: [
              'Ambidextrous orgs do not run themselves — they revert to mainstream default',
              'Without active leadership, innovation unit starves',
              'Leadership = creating change that would not happen on its own',
              'Fundamentals stay constant: role model, connect, resolve, balance, unblock',
              'Distinctive challenge: leading in face of structural differences between units'
            ]
          },
          {
            title: 'Three Approaches to Leading Differences',
            content: `Research shows leaders adopt one of three approaches to integrating the differences between mainstream and innovation units. Approach 1 — Hub and Spoke: the leader personally integrates. Everything coordinates through the CEO/GM at the center, with business unit heads as spokes. Works well when there are few units and the leader has the skills. Puts heavy load on leader. Approach 2 — Team-Based: the senior team collectively integrates. Business unit heads plus shared functions coordinate amongst themselves, with the leader as one among the group. Handles more complexity, but requires a strong well-functioning team — and research sadly shows that top management teams are often not particularly good at actual teamwork. Approach 3 — Delegated: "I trust my team, let them handle the interactions themselves." Usually fails. Why? Because the whole point of separation in Lesson 5-3 was to let each unit focus on its own challenges, not to spend energy integrating with other units. Delegating the integration back to them defeats the structural design. Choose Approach 1 or 2, not 3. You can evolve from 1 to 2 as the innovation effort scales.`,
            keyPoints: [
              'Approach 1: Hub and Spoke — leader personally integrates (works for small)',
              'Approach 2: Team-Based — senior team collectively integrates (works if team is strong)',
              'Approach 3: Delegated — usually FAILS',
              'Why 3 fails: defeats the separation rationale from 5-3',
              'Choose 1 or 2; can evolve from 1 → 2 as innovation scales',
              'Research: top management teams often poor at actual teamwork'
            ],
            interactive: 'leadership-approaches'
          },
          {
            title: 'Four Directions of Leadership Work',
            content: `Four directions structure what senior leaders actually do. Direction 1 — Engage around intent and identity: the more the team internalizes the overarching frame, the less it will default to mainstream. Create opportunities to discuss and develop these ideas — don't just announce them. Direction 2 — Resolve tensions and confront conflict: tensions between mainstream and innovation over resources, policies, priorities are inevitable and will not self-resolve. Create designated arenas (meetings, forums) where tensions surface and get resolved. Direction 3 — Be consciously inconsistent: treat the two types of units DIFFERENTLY. Mainstream's goal might be ROA (return on assets); innovation's might be growth or just identifying a first customer segment. People will expect consistency and may demand it as fairness — you must deliberately reject that expectation. Direction 4 — Build in time and places for these core leadership tasks: they require significant attention, which is already scarce. Failing to reallocate time is how ambidexterity stays a slogan rather than a practice. The failure mode is leaders who nod at the ideas but do not make time to actually practice them.`,
            keyPoints: [
              'Direction 1: Engage around intent & identity (build internalization)',
              'Direction 2: Resolve tensions & confront conflict (create arenas)',
              'Direction 3: Be consciously inconsistent (different metrics for different units)',
              'Direction 4: Build in time and places for these tasks',
              'Common failure: leaders agree with ideas but don\'t reallocate time',
              'Expect consistency demand; deliberately reject it'
            ],
            interactive: 'four-directions'
          },
          {
            title: 'Consciously Inconsistent: ROA vs Growth',
            content: `Direction 3 deserves deeper treatment because it goes against a core management instinct. Consistency is a bedrock of fair management: treat similar things similarly, apply rules uniformly. But mainstream and innovation units are NOT similar things, even though both are "business units." They face different markets, in different life-cycle stages, with different critical tasks. Applying the same metrics (say, ROA) to both kills innovation: the innovation unit will score poorly by definition — it cannot generate strong returns yet because the market is embryonic. Using the same hiring criteria kills innovation: mainstream rewards reliability and process excellence; innovation rewards comfort with ambiguity and rapid iteration. Using the same review cadence kills innovation: quarterly detailed budgets fit mainstream but paralyze innovation, where the right question is "what have we learned?" rather than "did you hit the number?" Be consciously inconsistent.`,
            keyPoints: [
              'Consistency is usual good management — here it kills innovation',
              'Mainstream metric: ROA. Innovation metric: growth or first customer',
              'Mainstream hires: reliability. Innovation hires: tolerance for ambiguity',
              'Mainstream cadence: quarterly budget. Innovation cadence: what did we learn?',
              'Rule: similar things treated similarly — but these are NOT similar',
              'You will be told this is unfair. Hold the line and explain why.'
            ]
          },
          {
            title: 'Three Core Points and the Leadership Challenge',
            content: `To summarize: (1) Frame the leadership challenge as leading in the face of differences — an environment in which consistency is insufficient and sometimes counterproductive. (2) Consciously decide where leadership will be exerted: you (hub-and-spoke) or your team (team-based), but not delegated. This decision should be deliberate, not default. (3) Act inconsistently, build arenas for resolving tensions, and reallocate your time to actually practice this. The takeaway: ambidexterity as a structural design is necessary but not sufficient. It comes alive only when senior leaders adopt specific practices — and those practices require time, which is the scarcest resource. If you nod at ambidexterity but do not reallocate your time, you have not actually adopted it.`,
            keyPoints: [
              'Point 1: frame challenge as leading in face of differences',
              'Point 2: choose approach 1 or 2 deliberately, not by default',
              'Point 3: act inconsistently, build arenas, reallocate time',
              'Structure is necessary but not sufficient — practice matters',
              'Time is the scarcest resource; reallocation is non-negotiable',
              'Nodding at ambidexterity is not adopting it'
            ]
          }
        ]
      },
      {
        id: '5-6',
        moduleId: 5,
        title: 'Module Summary and What\'s Next',
        professor: 'Prof. Geoff Love',
        sections: [
          {
            title: 'The Logical Chain of Module 5',
            content: `The module builds one coherent argument from environment to solution. Lesson 5-1: new markets are uncertain and dynamic, making four strategic decisions (timing, commitment, capabilities, approach) paradoxical. Even serious firms get them wrong. Lesson 5-2: organizations that succeed in mature markets build alignment and fit — and simultaneously build inertia (structural and cultural). The Success Syndrome means the firm cannot simply redirect itself to new markets. Lesson 5-3: the structural answer is the ambidextrous organization — separate semi-autonomous unit plus extensive senior management support, with integration through architecture (EBOs, councils) and through people. Lesson 5-4: structure needs software — strategic intent, identity, and loose-tight culture that bridge both sides. Lesson 5-5: software needs leadership practice — three approaches to integration, four directions of work, and deliberate inconsistency. Each lesson answers what the previous raised.`,
            keyPoints: [
              '5-1: environment — uncertainty + dynamism + four paradoxes',
              '5-2: organization — alignment, fit, inertia, Success Syndrome',
              '5-3: structural answer — separate unit + senior support',
              '5-4: software — intent, identity, loose-tight culture',
              '5-5: leadership practice — three approaches, four directions',
              'Each lesson answers what the previous raised'
            ],
            interactive: 'module5-concept-map'
          },
          {
            title: 'Seven Takeaways',
            content: `Seven points worth carrying forward. (1) New markets are uncertain and dynamic — strategic decisions in them are paradoxical, and conventional wisdom misleads. (2) Alignment and fit are both the cause of current success and the source of future failure (Success Syndrome). (3) Inertia comes in structural (BlackBerry) and cultural (Kodak) forms; usually both. (4) Ambidextrous organization is the structural answer: separate semi-autonomous unit + extensive senior management support. (5) Three mechanisms by which mainstream undermines new business: resources, problem-not-solution (cannibalization/distraction), inertia. (6) Software (strategic intent + identity + loose-tight culture) activates the hardware structure. (7) Leadership practice is leading in the face of differences — consciously inconsistent, deliberate about where integration happens, time reallocated to the task.`,
            keyPoints: [
              '1. New markets: uncertainty + dynamism = paradoxical decisions',
              '2. Success Syndrome: alignment is cause of success AND future failure',
              '3. Inertia: structural (BlackBerry) + cultural (Kodak)',
              '4. Ambidexterity: separate unit + senior support',
              '5. Three undermining mechanisms: resources, problem, inertia',
              '6. Software activates the structure: intent, identity, culture',
              '7. Leadership: lead in face of differences, consciously inconsistent'
            ]
          },
          {
            title: 'Practical Recommendations for a Manager',
            content: `Five concrete recommendations for managers in an ambidextrous context. First, verify each of the four strategic decisions (timing, commitment, capabilities, approach) in your specific new context — do not rely on conventional wisdom. Second, when things feel well-aligned and humming, pause to ask: am I building inertia that will not survive the next shift? Third, do not launch radical innovation as a cross-functional project inside mainstream — build a semi-autonomous unit even if it seems oversized. Fourth, treat your time allocation to ambidexterity with the same discipline as budget allocation; schedule it. Fifth, make sure your firm's identity validates both mainstream excellence and experimentation — if it implicitly says "we are the leader in X," new businesses are orphaned from day one.`,
            keyPoints: [
              'Verify the four strategic decisions in your specific context',
              'When well-aligned, ask: am I building next-shift-killing inertia?',
              'Do not launch radical innovation as cross-functional inside mainstream',
              'Schedule time for ambidexterity like budget, not as afterthought',
              'Ensure identity validates both excellence AND experimentation'
            ]
          },
          {
            title: 'What Comes Next in the Course',
            content: `This module is the first of four in the "Managing Innovation Initiatives" sister course. Module 2 focuses on disruptive technologies specifically — how to recognize them and how to respond structurally. Module 3 shifts the unit of analysis to innovation teams: cross-functional team dynamics, heavyweight team leadership, managing uncertainty at the team level. Module 4 covers planning and evaluation under innovation conditions (which is very different from mainstream planning), plus how to manage innovation across organizational boundaries (alliances, joint ventures, virtual firms, open innovation). The ambidextrous framework developed here is the foundation for everything that follows.`,
            keyPoints: [
              'Module 2: disruptive technologies — recognition and response',
              'Module 3: innovation teams — cross-functional, heavyweight, uncertainty',
              'Module 4: planning/evaluation under innovation + organizational boundaries',
              'Ambidextrous framework is the foundation for all four modules'
            ]
          }
        ]
      }
    ]
  }

