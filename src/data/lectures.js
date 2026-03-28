export const modules = [
  {
    id: 1,
    title: 'Innovation Life Cycles',
    description: 'Where innovations come from, how they evolve, and how customers adopt them.',
    lectures: [
      {
        id: '1-1',
        moduleId: 1,
        title: 'S-Curves & Innovation Life Cycles',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Module Overview',
            content: `This module examines innovation life cycles — a framework for understanding an innovation's current stage of development and future trajectory. This understanding shapes firms' decisions of when to invest, how much to invest, which features to focus on, when to launch products, and how to compete for customers.`,
            keyPoints: [
              'Innovation Life Cycles help understand current stage & future trajectory',
              'Shapes firm decisions: when to invest, how much, which features',
              'Helps understand how different customer types adopt innovations'
            ]
          },
          {
            title: 'Three Key Drivers of Innovation Life Cycles',
            content: `Innovation life cycles are driven by three interconnected factors: the rate of technological advance, firms' decisions of when to enter the market, and customers' decisions of when to adopt new technologies. These drivers form a feedback loop: technology matures → firms invest → customers adopt → more firms enter → competition accelerates development.`,
            keyPoints: [
              'Rate of Technological Advance — how fast technology improves performance',
              'Firm Entry Decisions — when companies decide to enter the market',
              'Customer Adoption Decisions — when and why consumers adopt the innovation'
            ]
          },
          {
            title: 'The S-Curve of Innovation Performance',
            content: `The S-Curve describes the typical trajectory of an innovation over time. Three phases: Emergence — performance is low, progress is slow, researchers experiment but commercial potential is unclear; Growth — rapid acceleration, significant investments pour in, new players enter the market; Maturity — improvements become incremental, technology reaches physical or practical limits, competition shifts from innovation to efficiency and cost.`,
            keyPoints: [
              'Emergence — low performance, slow progress, fundamental problems being solved',
              'Growth — rapid acceleration, investments, intense competition',
              'Maturity — incremental improvements, market stabilization, Law of Diminishing Returns'
            ],
            interactive: 's-curve-explorer'
          },
          {
            title: 'Example: Autonomous Vehicles',
            content: `Autonomous vehicles illustrate the S-Curve in practice. Emergence: for decades, researchers at universities and national labs worked on sensors and AI software — progress was slow even for rudimentary driving situations. Growth: in the past decade, firms entered and made immense investments, and the rate of progress dramatically improved. There's intense competition, but maturity has not been reached and no clear leader has emerged.`,
            keyPoints: [
              'Emergence: decades of R&D at universities and national labs',
              'Growth: massive corporate investment, dramatic progress improvement',
              'Maturity: not yet reached, no clear market leader'
            ]
          },
          {
            title: 'Key Strategic Decisions for Firms',
            content: `At each stage of the life cycle, firms face three fundamental questions. When to Enter? — too early means high risk and cost, too late means missed opportunities and fierce competition. How Much to Invest? — investment level must match the life cycle stage and strategic goals. Which Features to Focus On? — prioritizing product development for maximum competitiveness. Three execution strategies: Innovate Internally (own R&D), Partner with Other Firms (alliances to share risk), Be a Provider of Innovations (platform strategy).`,
            keyPoints: [
              'When to Enter — balancing early-mover risk vs. missed opportunities',
              'How Much to Invest — matching investment to life cycle stage',
              'Which Features — prioritizing for competitive advantage',
              'Strategies: Innovate Internally / Partner / Be a Provider'
            ]
          },
          {
            title: 'Innovation Adoption Life Cycle',
            content: `Not all consumers adopt at the same time. The Innovation Adoption Life Cycle is a bell curve classifying adopters by readiness: Innovators (2.5%) — willing to take chances, risk-tolerant; Early Adopters (13.5%) — idealists okay with imperfect products, opinion leaders; Early Majority (34%) — product must be perfect, high Product-Market Fit required; Late Majority (34%) — wait until majority has adopted, driven by necessity; Laggards (16%) — skeptics unwilling to adopt. Example: PCs commercialized in 1970s, ~50% of US homes by 2000, ~80% today. 3D printers today — less than 5% of US homes.`,
            keyPoints: [
              'Innovators (2.5%) — risk-tolerant tech enthusiasts',
              'Early Adopters (13.5%) — idealists, vision-driven, opinion leaders',
              'Early Majority (34%) — pragmatists, require proven Product-Market Fit',
              'Late Majority (34%) — conservatives, follow the majority',
              'Laggards (16%) — skeptics, resist adoption'
            ],
            interactive: 'adoption-bell-curve'
          },
          {
            title: 'The Chasm',
            content: `The Chasm is the critical gap between Early Adopters and Early Majority (term coined by Geoffrey Moore, "Crossing the Chasm", 1991). Early Adopters buy "potential" and "vision" — they are visionaries. Early Majority buys "working solutions" and "reliability" — they are pragmatists. The strategy that works for visionaries does not work for pragmatists. If an innovation fails to cross the Chasm, it remains a niche product and never reaches the mass market.`,
            keyPoints: [
              'Chasm = gap between Early Adopters and Early Majority',
              'Early Adopters buy potential; Early Majority buys reliability',
              'Most innovations fail at this transition',
              'Geoffrey Moore, "Crossing the Chasm" (1991)'
            ]
          },
          {
            title: 'Takeoff Point / Tipping Point',
            content: `The Takeoff Point is the moment on the cumulative S-Curve when adoption sharply accelerates — an "elbow," J-shaped pattern, or "hockey stick." Malcolm Gladwell calls this the Tipping Point. It is located at the transition from Early Adopters to Early Majority. When it happens, it signals that the industry is becoming viable with many opportunities for companies to become mass-market players. Two types: Sales Takeoff (based on sales volume) and Firm Takeoff (based on number of firms entering). Key principle: innovation adoption is NEVER linear.`,
            keyPoints: [
              'Takeoff Point = sharp acceleration on the cumulative S-Curve',
              'J-shaped / hockey stick / elbow pattern',
              'Sales Takeoff (sales volume) vs. Firm Takeoff (number of firms)',
              'Innovation adoption is NEVER linear'
            ],
            interactive: 'takeoff-visualizer'
          }
        ]
      },
      {
        id: '1-2',
        moduleId: 1,
        title: 'Product Life Cycle',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'What is the Product Life Cycle (PLC)?',
            content: `The Product Life Cycle models the evolution of sales of a new-to-the-world innovation over time. On the x-axis is time, and on the y-axis is sales (units, dollars, or percentage of households as a proxy). The PLC consists of four distinct stages: Introduction (low sales), Growth (explosive sales increase), Maturity (sales plateau), and Decline (sales fall).`,
            keyPoints: [
              'Introduction — sales are low, product is new, distribution channels forming',
              'Growth — sales increase at increasing rates (positive second derivative)',
              'Maturity — sales increase at decreasing rates (negative second derivative)',
              'Decline — net sales actually start falling'
            ],
            interactive: 'plc-explorer'
          },
          {
            title: 'Growth vs. Maturity: The Mathematical Difference',
            content: `The fundamental difference between Growth and Maturity is mathematical. In Growth, the slope is steep and increasing at increasing rates — the curve accelerates. In Maturity, the slope is increasing at decreasing rates — the curve decelerates. Growth has a positive second derivative (acceleration), while Maturity has a negative second derivative (deceleration). This is not just "fast vs. slow" but a qualitatively different type of growth.`,
            keyPoints: [
              'Growth: increasing at increasing rates (exponential character)',
              'Maturity: increasing at decreasing rates (logarithmic character)',
              'The distinction is about acceleration, not just speed',
              'Second derivative changes sign at the transition point'
            ],
            interactive: 'growth-vs-maturity'
          },
          {
            title: 'Historical PLC Examples',
            content: `Major innovations of the last century show classic PLC curves. Automobiles (launched early 1900s) had a sharp elbow around 1915 — the sales takeoff. Radio (1920s) had a fairly quick sales takeoff. Color TVs (launched ~1960) were initially flat, then exploded. Cell phones showed a takeoff after 1993 with a second inflection around 1996 (transition from Growth to Maturity). The Internet is the notable exception — its curve is nearly linear, making it the fastest diffusion in ~100 years. However, most diffusions follow the S-curve; the Internet is an exception to the norm.`,
            keyPoints: [
              'Autos: sales takeoff ~1915',
              'Radio: quick takeoff after 1920s launch',
              'Color TVs: flat initially, then explosive growth after 1960',
              'Cell Phones: takeoff ~1993, second inflection ~1996',
              'Internet: linear (fastest ever) — exception to the S-curve norm'
            ]
          },
          {
            title: 'PLC and Adoption Curve Correlation',
            content: `There is a significant parallel between the Product Life Cycle and the Innovation Adoption Curve. Innovators and Early Adopters are more likely found in the Introduction phase. The Early Majority is likely found in the Growth phase. The Late Majority corresponds to Maturity, and Laggards to Decline. This correlation bridges the macro level (industry sales) with the micro level (individual consumer behavior), allowing managers to adapt marketing strategy based on which consumer category currently dominates.`,
            keyPoints: [
              'Introduction ↔ Innovators + Early Adopters',
              'Growth ↔ Early Majority',
              'Maturity ↔ Late Majority',
              'Decline ↔ Laggards',
              'Links macro (industry sales) with micro (consumer behavior)'
            ]
          },
          {
            title: 'Case Study: Digital Downloads vs. Streaming',
            content: `Digital downloads of singles showed dramatic growth from 2004–2012, followed by sudden decrease. Album downloads correlated with singles but in smaller numbers. Meanwhile, streaming numbers are linear and much higher than digital downloads of either singles or albums. This effectively means sites like iTunes face an uncertain future in digital downloads. This analysis likely contributed to Apple's decision to acquire streaming service Beats for $3 billion — recognizing that digital downloads were entering Decline while streaming was the future.`,
            keyPoints: [
              'Digital downloads: S-curve peaking around 2012, now in Decline',
              'Streaming: linear growth, far exceeding download volumes',
              'iTunes business model disrupted by streaming',
              'Apple acquired Beats ($3B) — strategic response to PLC shift'
            ]
          },
          {
            title: 'Sales Takeoff and Timing',
            content: `The Sales Takeoff is the elbow on the PLC curve signifying when a niche product becomes a mass-market product. Research on 22 innovations shows significant time between commercialization and takeoff: Phonograph Records (22 years), Antibiotics (8 years), Cell Phones (~10 years), Personal Computers (~8 years). Three key takeaways: PLC curves are NOT usually linear; takeoff is NOT instantaneous (PCs needed 8+ years); managers must have patience — think in years, not quarters, for radical innovations.`,
            keyPoints: [
              'Sales Takeoff = transition from niche to mass-market',
              'Significant time lag between commercialization and takeoff',
              'PLC curves are NOT usually linear (Internet is the exception)',
              'Managers must think in years, not quarters, for radical innovation'
            ],
            interactive: 'sales-takeoff-timeline'
          },
          {
            title: 'Case Study: MOOCs and the iMBA Decision',
            content: `MOOCs (Massive Open Online Courses) were commercialized in 2011. A significant sales takeoff occurred in January 2013. When the team had to decide whether to launch an online MBA (iMBA) integrated with MOOCs, they analyzed this PLC curve. The sales takeoff implied that the transition into the mass market was happening, giving confidence that MOOCs would diffuse broadly. This data-driven analysis supported the decision to launch the MOOC-based iMBA program — a real-world example of PLC framework guiding strategic decisions.`,
            keyPoints: [
              'MOOCs commercialized in 2011, sales takeoff in January 2013',
              'Takeoff signal: transition from niche to mass market',
              'PLC analysis directly informed iMBA launch decision',
              'Example of data-driven strategic decision making'
            ]
          }
        ]
      },
      {
        id: '1-3',
        moduleId: 1,
        title: 'Firm Life Cycle',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'What is the Firm Life Cycle?',
            content: `The Firm Life Cycle models the number of firms in an industry over time (not sales, but firm count). It has five stages: Stage 1 (Introduction) — commercial introduction of the innovator; Stage 2 (Growth) — sharp increase in number of firms; Stage 3 (Plateau) — new entrants equal exiting firms; Stage 4 (Shakeout) — firms drop in significant numbers with negative net entry; Stage 5 (Decline) — the industry peters off. Between Stage 1 and 2, an elbow or transition point marks the Firm Takeoff.`,
            keyPoints: [
              'Stage 1: Introduction — innovator enters',
              'Stage 2: Growth — explosion in number of firms',
              'Stage 3: Plateau — entries ≈ exits',
              'Stage 4: Shakeout — negative net entry, firms drop drastically',
              'Stage 5: Decline — industry fades'
            ],
            interactive: 'firm-life-cycle'
          },
          {
            title: 'Firm Takeoff and Its Significance',
            content: `The Firm Takeoff is the elbow between Stage 1 and Stage 2 on the firm life cycle. It signifies the explosion in the number of firms and marks a major milestone: the industry is transitioning from technological uncertainty to viability. After firm takeoff, market infrastructure begins to build up. It tells observers that the industry has real commercial potential.`,
            keyPoints: [
              'Firm Takeoff = elbow between Stage 1 and Stage 2',
              'Signals transition from technological uncertainty to viability',
              'After firm takeoff: market infrastructure development begins',
              'Major milestone for industry observers and investors'
            ]
          },
          {
            title: 'Richard Foster\'s S-Curve and Dominant Design',
            content: `Richard Foster (mid-1980s) devised the S-curve showing industry evolution. Before firm takeoff: many players, many designs, high technological uncertainty, primitive products, lots of experimentation. At firm takeoff: explosion of firms creates opportunities for infrastructure development. This leads to standardization of design — the Dominant Design. After dominant design: industry transitions to maturity with incremental innovations, fewer players (due to shakeout), and a shift from innovation-based to efficiency-based competition.`,
            keyPoints: [
              'Before firm takeoff: many players, many designs, high uncertainty',
              'Firm takeoff → infrastructure development opportunity',
              'Dominant Design: standardized design becomes industry standard',
              'Post-dominant design: incremental innovation, efficiency focus, shakeout'
            ]
          },
          {
            title: 'Firm Takeoff Always Precedes Sales Takeoff',
            content: `A fundamental pattern confirmed by studying 22 innovations: Firm Takeoff always precedes Sales Takeoff. In the PC industry: firm takeoff at Year 3, sales takeoff at Year 8 (~5 year gap). In the auto industry: firm takeoff at Year 10, sales takeoff at Year 20 (~10 year gap). Phonograph records: commercialized 1897, firm takeoff 1917, sales takeoff 1919. This sequence — firm takeoff THEN sales takeoff — is a necessary condition for innovation success.`,
            keyPoints: [
              'Firm takeoff ALWAYS precedes sales takeoff',
              'PCs: firm takeoff Year 3, sales takeoff Year 8',
              'Autos: firm takeoff Year 10, sales takeoff Year 20',
              'Firm takeoff is a necessary condition for sales takeoff'
            ],
            interactive: 'firm-vs-sales-takeoff'
          },
          {
            title: 'Between Firm Takeoff and Sales Takeoff',
            content: `Before firm takeoff: high technological uncertainty, primitive products, new entrants bring crucial information and quality improvements, firms enter in anticipation of future profits. Between the two takeoffs: high demand uncertainty (will consumers adopt?), significant market infrastructure development (advertising, promotion, distribution, supply chain), and critically — complementary products must be developed. Example: early auto companies needed roads and gas stations; Tesla needs electric charging stations nationwide. Collaboration > competition at this stage, because industry legitimacy must be established.`,
            keyPoints: [
              'Before firm takeoff: high tech uncertainty, primitive products',
              'Between takeoffs: high demand uncertainty, infrastructure build-out',
              'Complementary products are critical (roads for autos, chargers for EVs)',
              'Collaboration more important than competition for industry legitimacy',
              'Firms must learn from each other to build viable products'
            ]
          },
          {
            title: 'From Patent to Commercialization: The Long Road',
            content: `There is significant life in an industry even before first major commercialization. The time lag between the first patent and commercialization can be enormous: Manual Typewriter — first patent in 1714, commercialized in 1878 (164 years!); Automobile — first patent 1860, commercialized 1902 (42 years); VCR — first patent 1950, commercialized 1972 (22 years). We often focus only on post-commercialization, but the pre-commercialization period involves critical R&D and ecosystem building.`,
            keyPoints: [
              'Typewriter: 164 years from patent to commercialization',
              'Automobile: 42 years from patent to commercialization',
              'VCR: 22 years from patent to commercialization',
              'Significant innovation happens before commercialization'
            ],
            interactive: 'patent-to-commercialization'
          },
          {
            title: 'Three Implications for Inventors',
            content: `First: Adopt a long-term perspective. Patience is a virtue. Beyond commercialization, consider exit opportunities like acquisition or licensing. Second: Most innovations borrow from previous innovations in three ways — core technology (PC using Intel microprocessor), functionality (cell phone replicates landline's communication function), or look and feel (Edison made a 13-watt bulb instead of 40-watt to match gas light appearance; computer keyboards mimicked typewriters). Third: Develop complementary skills. Technological capabilities without market commercialization capabilities is a disaster — products never cross the chasm. The Developer's Curse: being too product-focused while forgetting the consumer-focused aspect.`,
            keyPoints: [
              'Long-term perspective: patience + alternative exits (acquisition, licensing)',
              'Borrow from predecessors: core tech, functionality, or look and feel',
              'Edison chose 13W over 40W to match familiar gas light appearance',
              'Developer\'s Curse: product-focused at the expense of consumer-focused',
              'Complementary skills (tech + market) are essential to cross the chasm'
            ]
          }
        ]
      },
      {
        id: '1-4',
        moduleId: 1,
        title: 'Crossing the Chasm',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'Early Market vs. Later Market',
            content: `The adoption life cycle divides the market into two fundamentally different segments. The Early Market (16%) consists of Innovators and Early Adopters — technology-curious explorers with no pain points who experience technology for its own sake. An imperfect product is acceptable. The Later Market (84%) consists of Early Majority, Late Majority, and Laggards — they require reliable, proven, polished products. The Chasm is the critical gap between these two markets.`,
            keyPoints: [
              'Early Market (16%): Innovators + Early Adopters — tech-curious, no pain points',
              'Later Market (84%): Early Majority + Late Majority + Laggards — demand reliability',
              'The Chasm: critical gap between Early Adopters and Early Majority',
              'A product that works for the early market does NOT transfer to mass market'
            ],
            interactive: 'chasm-visualization'
          },
          {
            title: 'MVP and Alpha/Beta Releases',
            content: `For the early market, a Minimum Viable Product (MVP) with minimum features is sufficient. The cycle: Alpha release (substantially flawed, unfinished documentation, very small market, gather feedback) → Beta release (substantially better, incorporates Alpha feedback, but still not perfect). The key process is Validated Learning — systematically getting user feedback and incorporating it into the product. Both Alpha and Beta products are acceptable for the early market which can take unrefined technology.`,
            keyPoints: [
              'MVP: minimum features viable for getting feedback',
              'Alpha: substantially flawed, released to tiny market for feedback',
              'Beta: improved via Alpha feedback, but still imperfect',
              'Validated Learning: systematic feedback → product improvement cycle',
              'Early market tolerates unrefined technology'
            ]
          },
          {
            title: '90% of Innovations Fall into the Chasm',
            content: `Statistics reveal that 90% of new innovations do not transition from the early market to the mass market — they fall into the chasm. All innovations go through the early market, but the vast majority get stuck. The imperfect product that works for tech-curious explorers usually doesn't transfer well to the mass market. If you try to go to the mass market with an MVP, you will not cross the chasm.`,
            keyPoints: [
              '90% of innovations fail to cross the chasm',
              'Success in early market ≠ success in mass market',
              'MVP is NOT sufficient for the mass market',
              'The product must fundamentally change to cross over'
            ]
          },
          {
            title: 'Total Product: The Key to Crossing',
            content: `For the later market (Early Majority), you need a Total Product — not just an MVP. The Total Product has three layers: Core Product (fundamental functionality solving the problem), Augmented Features (additional capabilities adding value), and Ecosystem Alignment (integration with existing systems, infrastructure, and user habits). The Total Product must be polished, error-free, with perfect Product-Market Fit for the target segment.`,
            keyPoints: [
              'Total Product = Core Product + Augmented Features + Ecosystem Alignment',
              'Core Product: fundamental problem-solving functionality',
              'Augmented Features: additional value-adding capabilities',
              'Ecosystem Alignment: integration with existing systems and habits',
              'Must be polished, error-free, with perfect Product-Market Fit'
            ],
            interactive: 'mvp-vs-total-product'
          },
          {
            title: 'Bowling Alley Strategy',
            content: `The key strategy for crossing the chasm. Metaphor: to get a strike, don't aim at all 10 pins — hit the head pin precisely, and momentum creates a chain reaction. Steps: (1) Identify a Beachhead Segment — one specific niche your product perfectly serves; (2) Focus ALL resources on that segment — "you can't be all things to all people"; (3) Identify and alleviate their pain points; (4) Satisfied customers generate word of mouth and references for other segments; (5) Adapt the product for new segments by adding/subtracting/modifying features. The way to mass market is through a niche market with a perfect product.`,
            keyPoints: [
              'Beachhead Segment: one specific niche to focus ALL resources on',
              '"You can\'t be all things to all people"',
              'Identify and alleviate pain points of the beachhead segment',
              'Chain reaction: satisfied customers → word of mouth → new segments',
              'The way to mass market is through a niche market with perfect execution'
            ],
            interactive: 'bowling-alley'
          },
          {
            title: 'Case Study: Facebook',
            content: `Facebook created a perfect product for the college segment — their beachhead. Using the college segment as references, they added subsequent features and expanded into the mass market. The chain reaction: college students → graduates → young professionals → general public. Result: from a niche college product to one of the most beloved brands worldwide.`,
            keyPoints: [
              'Beachhead: college students — perfect product for campus social life',
              'Chain reaction via references and word of mouth',
              'Gradual feature addition for new segments',
              'Niche product → global mass-market brand'
            ]
          },
          {
            title: 'Case Study: Barefoot Wines',
            content: `Launched in 1986 by outsiders to the wine industry (valuable outside-in perspective). At that time, wine was a serious, complicated category (vintage, tannins, acidity). Barefoot found their beachhead: 35-year-old moms looking for an inexpensive, casual Tuesday night wine. Core product: casual, uncomplicated, easy-to-drink wine. Augmented: charity partnerships. Slogan: "Get Barefoot and have a good time." Result: 20 years later sold to E&J Gallo, now one of the world's largest iconic wine brands.`,
            keyPoints: [
              'Outside-in perspective: founders were not from the wine industry',
              'Beachhead: 35-year-old moms wanting casual "Tuesday night wine"',
              'Product: simple, inexpensive, easy — anti-pretentious positioning',
              'Augmented with charity partnerships for cohesive brand',
              'Sold to E&J Gallo → became a global iconic brand'
            ]
          }
        ]
      },
      {
        id: '1-5',
        moduleId: 1,
        title: 'Prospect Theory & Innovation',
        professor: 'Prof. Raj Echambadi',
        sections: [
          {
            title: 'What is Prospect Theory?',
            content: `Prospect Theory, published by Kahneman and Tversky in 1979 (Nobel Prize 2002), is a psychological account of how people make choices under risk and uncertainty. "Prospect" means choices. The theory introduces three revolutionary concepts that challenge the classical "rational agent" model: reference-dependent evaluation, diminishing sensitivity, and loss aversion. Recommended reading: Daniel Kahneman's "Thinking, Fast and Slow."`,
            keyPoints: [
              'Published 1979 by Kahneman & Tversky; Nobel Prize 2002',
              'Psychological theory of decision-making under risk and uncertainty',
              'Challenges the classical rational agent model',
              'Three key concepts: reference points, diminishing sensitivity, loss aversion'
            ]
          },
          {
            title: 'The Value Function & Reference Points',
            content: `The Value Function has two axes: Y-axis is subjective/psychological value (NOT objective), X-axis is objective outcome. Where they meet is the Reference Point — the baseline against which all outcomes are evaluated. Deviations to the right = gains, to the left = losses. Critical insight: reference points are context-dependent. A $3 water bottle is outrageous at a vending machine (reference: $1.50) but acceptable at a 5-star resort (reference: luxury pricing). A 6'3" person is tall in a crowd but short on an NBA court (reference: 6'4" average).`,
            keyPoints: [
              'Y-axis: subjective/psychological value (NOT objective)',
              'Reference Point: baseline for evaluating all outcomes',
              'Right of reference = gains, left = losses',
              'Reference points are context-dependent',
              'Same stimulus → different evaluation depending on reference frame'
            ],
            interactive: 'prospect-value-function'
          },
          {
            title: 'Every Product is a Bundle of Gains and Losses',
            content: `When consumers evaluate products, they assess a bundle of gains and losses and make trade-offs. Example: Physical bookstore gains (touch, serendipity, coffee aroma, atmosphere) vs. losses (higher prices). Online bookstore gains (lower prices, home delivery) vs. losses (no tactile experience, no serendipity). Consumers compare these bundles to make adoption decisions. This framework applies to companies too: analog camera firms saw digital cameras as substitutes (loss frame), while electronics firms saw them as opportunities (gain frame). Analog firms predicted 1.4-1.8M units; electronics firms predicted 4-10M. Actual: ~2M.`,
            keyPoints: [
              'Every product = bundle of gains and losses',
              'Consumers evaluate trade-offs between bundles',
              'Company reference frames also shape strategic decisions',
              'Analog firms: loss frame → conservative forecast (1.4-1.8M)',
              'Electronics firms: gain frame → optimistic forecast (4-10M)',
              'Your frame determines whether you see threat or opportunity'
            ]
          },
          {
            title: 'Diminishing Sensitivity',
            content: `The value function is non-linear: sensitivity to changes diminishes as you move further from the reference point. Kahneman's candle analogy: a candle provides sufficient light in a dark room, but becomes invisible when the room lights come on. The same $5 objective difference has vastly different psychological impact: $5→$10 feels enormous (doubling!), but $1000→$1005 is barely noticeable (0.5%). Innovation implication: the first feature added to a product creates massive psychological impact; each subsequent feature adds less perceived value. At some point, adding more features actually diminishes value for consumers.`,
            keyPoints: [
              'Value function is non-linear — sensitivity decreases with distance from reference',
              'Kahneman\'s candle: powerful in darkness, invisible in light',
              '$5→$10 feels huge; $1000→$1005 feels negligible (same $5 difference)',
              'Feature additions: first feature = massive impact, each next = less impact',
              '"Feature creep" is a bad strategy — diminishing psychological returns'
            ],
            interactive: 'diminishing-sensitivity'
          },
          {
            title: 'Losses Loom Larger Than Gains (Loss Aversion)',
            content: `The third key principle: losses are felt approximately 2.25× more intensely than equivalent gains. Losing $20 creates much more pain than finding $20 creates happiness. Behavioral consequences: in the loss domain, people become risk-seeking (want to return to status quo); in the gain domain, people become risk-averse (want to protect what they have). Framing matters enormously: "glass half full" (gain frame) vs. "glass half empty" (loss frame) lead to different reactions. Example: Borders executive saying "Amazon will make us obsolete" (loss frame) vs. "Online and physical will be complementary" (gain frame) leads to entirely different resource allocation.`,
            keyPoints: [
              'Losses ≈ 2.25× more intense than equivalent gains',
              'Loss domain → risk-seeking; Gain domain → risk-averse',
              'Framing determines perception: gain frame vs. loss frame',
              'Borders/Amazon: loss frame → panic; gain frame → strategic response',
              'Auto dealer: one loss (customer service) outweighed 10 gains',
              'VCR→DVD: loss of family tapes outweighed all DVD advantages'
            ],
            interactive: 'loss-aversion'
          },
          {
            title: 'The Kodak Case: Power of Framing',
            content: `Kodak, founded 1888, held 85% of analog cameras and 90% of consumables (film, paper, chemicals) by 1976. They also created one of the first digital cameras in 1976. But executives evaluated digital through the lens of their analog business (reference point). Potential loss: dominance in analog (massive cash cow). Potential gain in digital: fuzzy, uncertain. Loss aversion dominated → "wait and watch" strategy. Meanwhile, technologists inside Kodak (whose reference was digital technology) saw it as inevitable substitution. The frame you employ determines your losses, gains, and ultimately your strategic response.`,
            keyPoints: [
              'Kodak: 85% analog cameras, 90% consumables by 1976',
              'Created one of first digital cameras — same year',
              'Loss frame: "Digital threatens our cash cow" → wait and watch',
              'Technologist frame: "Digital will inevitably replace analog" → act now',
              'Loss aversion at executive level killed innovation',
              'Frame determines strategic response and resource allocation'
            ]
          },
          {
            title: 'Endowment Effect & The 9× Mismatch',
            content: `Endowment Effect: irrational tendency to overvalue things we own, demonstrated by Richard Thaler. In lab experiments, mug owners demanded at least 2× what non-owners would pay. Effect intensifies with ownership duration. The 9× Effect: Consumers overvalue their existing product by ~3× (endowment + loss aversion). Companies overvalue their innovation by ~3× (endowment + developer's curse). Combined: 3×3 = 9× mismatch in value perception. Final insight: "The best product does NOT win. The product that best minimizes losses wins."`,
            keyPoints: [
              'Endowment Effect: overvalue what we own (Thaler mug experiment)',
              'WTA ≥ 2× WTP — trade doesn\'t happen as expected',
              'Effect intensifies with ownership duration',
              'Consumer overvalues existing product: 3×',
              'Company overvalues innovation: 3×',
              '9× mismatch → explains consumer resistance to innovation',
              '"The best product does NOT win. The one that minimizes losses wins."'
            ],
            interactive: 'nine-x-effect'
          }
        ]
      }
    ]
  },
  {
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
  },
  {
    id: 3,
    title: 'Competitive Strategy & Innovation',
    description: 'How firms compete through innovation and sustain competitive advantage.',
    lectures: []
  },
  {
    id: 4,
    title: 'Innovation Ecosystems & Platforms',
    description: 'Platform strategies, network effects, and innovation ecosystems.',
    lectures: []
  }
]

// Helper to get flat list of all lectures
export const getAllLectures = () =>
  modules.flatMap(m => m.lectures.map(l => ({ ...l, moduleTitle: m.title })))

// Helper to find a lecture by id
export const findLecture = (id) => {
  for (const m of modules) {
    const l = m.lectures.find(l => l.id === id)
    if (l) return { ...l, moduleId: m.id, moduleTitle: m.title }
  }
  return null
}
