export const module1 =   {
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
            ],
            interactive: 'innovation-drivers-loop'
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
            ],
            interactive: 'historical-plc-chart'
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
            ],
            interactive: 'plc-adoption-mapping'
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
            ],
            interactive: 'takeoff-gap-explorer'
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
            ],
            interactive: 'chasm-success-funnel'
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
            ],
            interactive: 'gains-losses-bundle'
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
  }

