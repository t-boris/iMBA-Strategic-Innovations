// difficulty: 'easy' | 'medium' | 'hard'
export const quizQuestions = [
  // === EASY (20%) ===
  {
    id: 1, module: 1, lecture: '1-1', difficulty: 'easy',
    question: 'How many phases does the S-Curve of innovation performance include?',
    options: ['2', '3', '4', '5'],
    correct: 1,
    explanation: 'The S-Curve includes three phases: Emergence, Growth, and Maturity.'
  },
  {
    id: 2, module: 1, lecture: '1-1', difficulty: 'easy',
    question: 'What percentage of consumers are classified as Innovators?',
    options: ['5%', '2.5%', '13.5%', '16%'],
    correct: 1,
    explanation: 'Innovators make up 2.5% of all consumers — the smallest adopter category.'
  },
  {
    id: 3, module: 1, lecture: '1-1', difficulty: 'easy',
    question: 'Which adopter groups are the largest by size?',
    options: ['Early Adopters', 'Early Majority and Late Majority (34% each)', 'Laggards', 'Innovators'],
    correct: 1,
    explanation: 'Early Majority and Late Majority are the largest groups, each representing 34% of consumers.'
  },
  {
    id: 4, module: 1, lecture: '1-1', difficulty: 'easy',
    question: 'Who popularized the term "Tipping Point"?',
    options: ['Geoffrey Moore', 'Malcolm Gladwell', 'Raj Echambadi', 'Clayton Christensen'],
    correct: 1,
    explanation: 'Malcolm Gladwell popularized the term Tipping Point in his bestselling book of the same name.'
  },
  // === MEDIUM (50%) ===
  {
    id: 5, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'Where is "The Chasm" located on the adoption curve?',
    options: [
      'Between Innovators and Early Adopters',
      'Between Early Adopters and Early Majority',
      'Between Early Majority and Late Majority',
      'Between Late Majority and Laggards'
    ],
    correct: 1,
    explanation: 'The Chasm sits between Early Adopters and Early Majority — the most critical transition where most innovations fail.'
  },
  {
    id: 6, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'Why does the Early Majority require high Product-Market Fit?',
    options: [
      'They are technically savvy and demanding',
      'They are pragmatists who make decisions based on proven value',
      'They cannot afford to take financial risks',
      'They follow recommendations from Innovators'
    ],
    correct: 1,
    explanation: 'The Early Majority are pragmatists. Unlike Early Adopters (visionaries), they don\'t buy potential — they require a proven, reliable solution.'
  },
  {
    id: 7, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'What is the Takeoff Point on the cumulative S-Curve?',
    options: [
      'The moment a first product enters the market',
      'The moment adoption sharply accelerates (elbow / hockey stick)',
      'The moment 50% market penetration is achieved',
      'The transition into the Maturity phase'
    ],
    correct: 1,
    explanation: 'The Takeoff Point is when the cumulative adoption curve sharply accelerates, forming a J-shaped / hockey stick pattern.'
  },
  {
    id: 8, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'What are the three execution strategies available to firms?',
    options: [
      'Build, Buy, Merge',
      'Innovate Internally, Partner with Firms, Be a Provider',
      'Disrupt, Sustain, Transform',
      'Lead, Follow, Exit'
    ],
    correct: 1,
    explanation: 'Three strategies: own R&D (Innovate Internally), alliances (Partner with Firms), and platform strategy (Be a Provider of Innovations).'
  },
  {
    id: 9, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'At what stage of the S-Curve are autonomous vehicles?',
    options: [
      'Emergence',
      'Transition from Emergence to Growth',
      'Growth (Maturity not yet reached)',
      'Maturity'
    ],
    correct: 2,
    explanation: 'Autonomous vehicles are in the Growth phase: firms are actively investing and progress is rapid, but maturity has not been reached and no clear leader has emerged.'
  },
  {
    id: 10, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'How do Sales Takeoff and Firm Takeoff differ?',
    options: [
      'Sales Takeoff is faster, Firm Takeoff is slower',
      'Sales Takeoff is measured by sales volume, Firm Takeoff by number of firms',
      'Sales Takeoff is for B2C, Firm Takeoff is for B2B',
      'They are the same concept with different names'
    ],
    correct: 1,
    explanation: 'Sales Takeoff is based on a sharp rise in sales volume, while Firm Takeoff is based on a sharp rise in the number of firms entering the industry.'
  },
  {
    id: 11, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'What percentage of US households had PCs by the year 2000?',
    options: ['30%', '50%', '70%', '80%'],
    correct: 1,
    explanation: 'About 50% of US households had PCs by 2000, rising to approximately 80% today.'
  },
  {
    id: 12, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'What explains the S-shape of the innovation curve?',
    options: [
      'Linear growth followed by a slowdown',
      'Initial difficulties, then snowball effect, then diminishing returns',
      'Exponential growth from start to finish',
      'Random distribution of investment over time'
    ],
    correct: 1,
    explanation: 'S-shape: slow initial progress (fundamental problems), then acceleration (accumulated knowledge snowball), then slowdown (Law of Diminishing Returns).'
  },
  {
    id: 13, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'What role do Early Adopters play in innovation diffusion?',
    options: [
      'They mass-purchase the product creating volume',
      'They are visionaries and opinion leaders who create buzz',
      'They demand price reductions for mass market',
      'They copy Innovators\' behavior'
    ],
    correct: 1,
    explanation: 'Early Adopters are idealists and visionaries, often opinion leaders. They see strategic potential and help innovation "cross the chasm."'
  },
  {
    id: 14, module: 1, lecture: '1-1', difficulty: 'medium',
    question: 'What is the key principle of this module regarding innovation adoption?',
    options: [
      'Innovations are always adopted linearly',
      'Innovation adoption is NEVER linear',
      'All consumers adopt an innovation simultaneously',
      'Technological progress determines 100% of adoption'
    ],
    correct: 1,
    explanation: 'The key principle: innovation adoption is NEVER linear. This is the fundamental thesis of the entire module.'
  },
  // === HARD (30%) ===
  {
    id: 15, module: 1, lecture: '1-1', difficulty: 'hard',
    question: 'Why does a strategy that works for Early Adopters fail for the Early Majority?',
    options: [
      'Early Majority demands lower prices',
      'Early Adopters buy "potential/vision," Early Majority buys "working/reliable solutions"',
      'Early Majority doesn\'t understand the technology',
      'Early Adopters receive the product for free'
    ],
    correct: 1,
    explanation: 'Fundamental difference: Early Adopters are visionaries buying potential. Early Majority are pragmatists requiring proven reliability. Marketing "vision" doesn\'t work for pragmatists.'
  },
  {
    id: 16, module: 1, lecture: '1-1', difficulty: 'hard',
    question: 'A firm observes slow initial growth for a new product. What might this indicate from an S-Curve perspective?',
    options: [
      'The product has definitely failed',
      'This is a normal Emergence phase — keep investing',
      'Could be normal Emergence or actual failure — need to analyze other indicators',
      'Should immediately pivot to a different technology'
    ],
    correct: 2,
    explanation: 'Slow initial growth could be normal Emergence (before Takeoff Point) or real failure. Analysis needed: Is there technology progress? Is the number of firms growing? What signals from Early Adopters?'
  },
  {
    id: 17, module: 1, lecture: '1-1', difficulty: 'hard',
    question: 'How are the non-cumulative bell curve and cumulative S-Curve mathematically related?',
    options: [
      'They are two separate, unrelated models',
      'The S-Curve is the derivative of the bell curve',
      'The S-Curve is the cumulative distribution function (CDF) of the bell curve',
      'The bell curve is derived from S-Curve data'
    ],
    correct: 2,
    explanation: 'The cumulative S-Curve is the CDF (cumulative distribution function) of the normal distribution represented by the bell curve. Stacking adopter categories cumulatively transforms the bell curve into the S-Curve.'
  },
  {
    id: 18, module: 1, lecture: '1-1', difficulty: 'hard',
    question: 'Why might 3D printers (<5% penetration) indicate not just an Early Adopter phase but a potential Chasm?',
    options: [
      'Because 5% already exceeds the Innovator share (2.5%)',
      'Because the technology is old and should have been adopted by now',
      'Because 5% = Innovators + part of Early Adopters, and transition to Early Majority may not happen due to insufficient Product-Market Fit for mass consumers',
      'Because 3D printers are not a real innovation'
    ],
    correct: 2,
    explanation: '5% penetration corresponds to Innovators (2.5%) + beginning of Early Adopters. The question is whether 3D printers can cross the Chasm — this requires compelling Product-Market Fit for pragmatic mass consumers, which is currently lacking.'
  },
  {
    id: 19, module: 1, lecture: '1-1', difficulty: 'hard',
    question: 'A firm observes Firm Takeoff but not Sales Takeoff in its industry. What might this mean?',
    options: [
      'The industry is dead',
      'Many firms are entering (seeing potential), but consumers aren\'t ready to buy en masse — possibly a pre-Chasm phase',
      'Sales Takeoff always precedes Firm Takeoff',
      'This is an impossible situation'
    ],
    correct: 1,
    explanation: 'Divergence between Firm and Sales Takeoff means firms see potential (investing) but mass consumers aren\'t ready yet. This could be a pre-Chasm situation — technology attracts Early Adopters but hasn\'t crossed to Early Majority.'
  },
  {
    id: 20, module: 1, lecture: '1-1', difficulty: 'hard',
    question: 'Which strategy (Innovate Internally, Partner, Provide) best fits the Emergence phase of the S-Curve and why?',
    options: [
      'Partner — to minimize risk in an uncertain market',
      'Provide — for maximum reach',
      'Innovate Internally — to build proprietary advantage when technology is still undefined',
      'All three are equally effective'
    ],
    correct: 2,
    explanation: 'During Emergence, when technology is unstable and standards are undefined, Innovate Internally allows building proprietary advantage and controlling the direction of development. Partnerships are difficult due to uncertainty, and platform strategy is premature.'
  },
  // === Lecture 1-2: Product Life Cycle ===
  // EASY
  {
    id: 21, module: 1, lecture: '1-2', difficulty: 'easy',
    question: 'How many stages does the Product Life Cycle have?',
    options: ['3', '4', '5', '6'],
    correct: 1,
    explanation: 'The PLC has four stages: Introduction, Growth, Maturity, and Decline.'
  },
  {
    id: 22, module: 1, lecture: '1-2', difficulty: 'easy',
    question: 'Which innovation had a nearly linear diffusion curve, making it an exception?',
    options: ['Color TV', 'Internet', 'Cell Phones', 'Radio'],
    correct: 1,
    explanation: 'The Internet had a nearly linear diffusion curve — the fastest diffusion in ~100 years and an exception to the S-curve norm.'
  },
  // MEDIUM
  {
    id: 23, module: 1, lecture: '1-2', difficulty: 'medium',
    question: 'What is the mathematical difference between the Growth and Maturity stages of PLC?',
    options: [
      'Growth is fast, Maturity is slow',
      'Growth: increasing at increasing rates; Maturity: increasing at decreasing rates',
      'Growth has higher sales volume than Maturity',
      'Growth lasts longer than Maturity'
    ],
    correct: 1,
    explanation: 'Growth stage has positive second derivative (accelerating), while Maturity has negative second derivative (decelerating). It is about the rate of change of the slope.'
  },
  {
    id: 24, module: 1, lecture: '1-2', difficulty: 'medium',
    question: 'Which adopter category correlates with the Growth stage of the PLC?',
    options: ['Innovators', 'Early Adopters', 'Early Majority', 'Late Majority'],
    correct: 2,
    explanation: 'The Early Majority correlates with the Growth stage. Innovators and Early Adopters correspond to Introduction; Late Majority to Maturity.'
  },
  {
    id: 25, module: 1, lecture: '1-2', difficulty: 'medium',
    question: 'What happened to digital downloads after streaming became popular?',
    options: [
      'Downloads continued to grow alongside streaming',
      'Downloads entered the Decline stage as streaming surged',
      'Downloads and streaming had equal market share',
      'Streaming replaced downloads instantly'
    ],
    correct: 1,
    explanation: 'Digital downloads showed classic PLC Decline after 2012 as streaming grew linearly with much higher volumes. This likely drove Apple\'s $3B acquisition of Beats.'
  },
  {
    id: 26, module: 1, lecture: '1-2', difficulty: 'medium',
    question: 'How long did it take for the PC industry to reach sales takeoff?',
    options: ['About 3 years', 'About 5 years', 'About 8 years', 'About 15 years'],
    correct: 2,
    explanation: 'The PC industry took about 8 years from commercialization to sales takeoff, demonstrating that takeoff is not instantaneous.'
  },
  {
    id: 27, module: 1, lecture: '1-2', difficulty: 'medium',
    question: 'What does the Sales Takeoff signify?',
    options: [
      'The product has reached maximum sales',
      'The transition from a niche product to a mass-market product',
      'The beginning of the Decline stage',
      'The first sale of the product'
    ],
    correct: 1,
    explanation: 'The Sales Takeoff signifies the transition when a niche product turns into a popular mass-market product, where a significant portion of the population becomes interested.'
  },
  // HARD
  {
    id: 28, module: 1, lecture: '1-2', difficulty: 'hard',
    question: 'How did PLC analysis influence the decision to launch the iMBA program?',
    options: [
      'The team saw MOOCs were in Decline and wanted to act before it was too late',
      'The team identified a sales takeoff in MOOCs (Jan 2013), signaling mass-market viability',
      'The team saw that all competitors were launching online programs',
      'PLC analysis was not used; the decision was intuition-based'
    ],
    correct: 1,
    explanation: 'The team analyzed the MOOC PLC curve, saw sales takeoff in January 2013 (mass-market transition), and used this data-driven insight to confidently launch the MOOC-based iMBA program.'
  },
  {
    id: 29, module: 1, lecture: '1-2', difficulty: 'hard',
    question: 'A product shows the same PLC stage in developed markets but a different stage in emerging markets. What strategic implication does this have?',
    options: [
      'The product should be discontinued globally',
      'Resources can be redirected from mature/declining markets to growth markets',
      'The PLC model is invalid for global products',
      'The product should have a uniform global strategy'
    ],
    correct: 1,
    explanation: 'The same product can be in different PLC stages in different geographies (e.g., color TVs: Maturity in developed world, Growth in emerging markets). This creates opportunities to redirect resources from saturated to growing markets.'
  },
  {
    id: 30, module: 1, lecture: '1-2', difficulty: 'hard',
    question: 'Why should managers "think in years, not quarters" when managing radical innovations?',
    options: [
      'Because quarterly reports are inaccurate for new products',
      'Because sales takeoff requires years of incubation, and premature resource withdrawal kills innovations',
      'Because investors prefer long-term thinking',
      'Because radical innovations have no competition'
    ],
    correct: 1,
    explanation: 'PCs took 8+ years to reach takeoff. Quarterly thinking leads to premature resource withdrawal from innovations still in their incubation phase, killing potentially successful products before they can reach sales takeoff.'
  },
  // === Lecture 1-3: Firm Life Cycle ===
  // EASY
  {
    id: 31, module: 1, lecture: '1-3', difficulty: 'easy',
    question: 'How many stages does the Firm Life Cycle have?',
    options: ['3', '4', '5', '6'],
    correct: 2,
    explanation: 'The Firm Life Cycle has five stages: Introduction, Growth, Plateau, Shakeout, and Decline.'
  },
  {
    id: 32, module: 1, lecture: '1-3', difficulty: 'easy',
    question: 'What is "Shakeout" in the Firm Life Cycle?',
    options: [
      'Rapid growth of new firms',
      'When firms exit in significant numbers (negative net entry)',
      'When the first firm enters',
      'When all firms reach profitability'
    ],
    correct: 1,
    explanation: 'Shakeout (Stage 4) is when firms drop in significant numbers due to negative net entry — more firms exit than enter.'
  },
  // MEDIUM
  {
    id: 33, module: 1, lecture: '1-3', difficulty: 'medium',
    question: 'Which always comes first: Firm Takeoff or Sales Takeoff?',
    options: [
      'Sales Takeoff',
      'Firm Takeoff',
      'They happen simultaneously',
      'It varies by industry'
    ],
    correct: 1,
    explanation: 'Firm Takeoff always precedes Sales Takeoff. This pattern is confirmed across 22 innovations studied over the past century.'
  },
  {
    id: 34, module: 1, lecture: '1-3', difficulty: 'medium',
    question: 'What happens after Dominant Design emerges in an industry?',
    options: [
      'More firms enter and competition intensifies',
      'The industry transitions to maturity: incremental innovation, fewer players, efficiency focus',
      'A new S-curve begins immediately',
      'Prices increase dramatically'
    ],
    correct: 1,
    explanation: 'After dominant design, the industry transitions to maturity: focus shifts to incremental innovations, shakeout reduces the number of players, and competition moves from innovation-based to efficiency-based.'
  },
  {
    id: 35, module: 1, lecture: '1-3', difficulty: 'medium',
    question: 'Why are complementary products critical between Firm Takeoff and Sales Takeoff?',
    options: [
      'They increase firm profits immediately',
      'They are needed for the product to function and diffuse to mass market',
      'They reduce manufacturing costs',
      'They eliminate competition'
    ],
    correct: 1,
    explanation: 'Complementary products (e.g., roads/gas stations for autos, charging stations for EVs) are essential for the primary product to reach mass adoption and achieve sales takeoff.'
  },
  {
    id: 36, module: 1, lecture: '1-3', difficulty: 'medium',
    question: 'In the PC industry, when did Firm Takeoff and Sales Takeoff occur?',
    options: [
      'Firm Takeoff: Year 1, Sales Takeoff: Year 3',
      'Firm Takeoff: Year 3, Sales Takeoff: Year 8',
      'Firm Takeoff: Year 8, Sales Takeoff: Year 15',
      'Firm Takeoff: Year 10, Sales Takeoff: Year 20'
    ],
    correct: 1,
    explanation: 'In the PC industry, firm takeoff happened after Year 3 and sales takeoff after Year 8, with a ~5-year gap between them.'
  },
  {
    id: 37, module: 1, lecture: '1-3', difficulty: 'medium',
    question: 'Why is collaboration more important than competition before Sales Takeoff?',
    options: [
      'Because there are few firms in the market',
      'Because industry legitimacy must be established for mass adoption to occur',
      'Because governments require collaboration',
      'Because products are too expensive to develop alone'
    ],
    correct: 1,
    explanation: 'Before sales takeoff, firms need to establish industry legitimacy. They must learn from each other and build viable products together so the category gains credibility with mass-market consumers.'
  },
  // HARD
  {
    id: 38, module: 1, lecture: '1-3', difficulty: 'hard',
    question: 'What is the Developer\'s Curse and how does it affect innovation commercialization?',
    options: [
      'High development costs that bankrupt startups',
      'Being too product-focused while neglecting consumer needs, preventing chasm crossing',
      'Patent trolls blocking commercialization',
      'Developers leaving to join competitors'
    ],
    correct: 1,
    explanation: 'The Developer\'s Curse means inventors are so focused on their product (product-focused) that they forget the consumer perspective (consumer-focused). This prevents products from crossing the chasm to mass adoption.'
  },
  {
    id: 39, module: 1, lecture: '1-3', difficulty: 'hard',
    question: 'Why did Edison choose a 13-watt bulb instead of the 40-watt bulb he was capable of making?',
    options: [
      'To save electricity costs',
      'To match the familiar look and feel of gas light — reducing adoption barriers',
      'Because 40-watt technology was unreliable',
      'Because regulators limited wattage'
    ],
    correct: 1,
    explanation: 'Edison wanted the light to mirror gas lighting, the existing standard. By matching the familiar look and feel, he reduced the adoption barrier. This illustrates how innovations borrow "look and feel" from predecessors.'
  },
  {
    id: 40, module: 1, lecture: '1-3', difficulty: 'hard',
    question: 'A new industry shows many startups entering but no significant consumer sales yet. Based on the Firm/Sales Takeoff framework, what should an investor conclude?',
    options: [
      'The industry has failed and investment should be avoided',
      'The industry may be between firm takeoff and sales takeoff — a potential investment window before mass adoption',
      'Sales takeoff has been missed',
      'The industry bypassed firm takeoff entirely'
    ],
    correct: 1,
    explanation: 'Many firms entering (firm takeoff) without significant sales suggests the industry is between firm takeoff and sales takeoff. This is an investment window: infrastructure is being built, and sales takeoff may follow in several years.'
  },
  // === Lecture 1-4: Crossing the Chasm ===
  // EASY
  {
    id: 41, module: 1, lecture: '1-4', difficulty: 'easy',
    question: 'What percentage of the market does the Early Market represent?',
    options: ['10%', '16%', '34%', '50%'],
    correct: 1,
    explanation: 'The Early Market (Innovators 2.5% + Early Adopters 13.5%) represents 16% of the total market.'
  },
  {
    id: 42, module: 1, lecture: '1-4', difficulty: 'easy',
    question: 'What percentage of innovations fail to cross the chasm?',
    options: ['50%', '70%', '90%', '99%'],
    correct: 2,
    explanation: '90% of new innovations do not transition from the early market to the mass market — they fall into the chasm.'
  },
  {
    id: 43, module: 1, lecture: '1-4', difficulty: 'easy',
    question: 'What type of product is acceptable for the Early Market?',
    options: [
      'Only a fully polished product',
      'A Minimum Viable Product (MVP)',
      'A product approved by regulators',
      'A mass-produced product'
    ],
    correct: 1,
    explanation: 'The Early Market (tech-curious explorers) accepts imperfect products — a Minimum Viable Product with minimum features is sufficient for gathering feedback.'
  },
  // MEDIUM
  {
    id: 44, module: 1, lecture: '1-4', difficulty: 'medium',
    question: 'What are the three layers of a Total Product?',
    options: [
      'Design, Engineering, Marketing',
      'Core Product, Augmented Features, Ecosystem Alignment',
      'Alpha, Beta, Release Candidate',
      'Hardware, Software, Services'
    ],
    correct: 1,
    explanation: 'The Total Product consists of: Core Product (fundamental functionality), Augmented Features (additional value), and Ecosystem Alignment (integration with existing systems and habits).'
  },
  {
    id: 45, module: 1, lecture: '1-4', difficulty: 'medium',
    question: 'What is the Bowling Alley Strategy?',
    options: [
      'Targeting all market segments simultaneously',
      'Focusing all resources on one beachhead segment to create a chain reaction',
      'Competing on price to win market share',
      'Launching multiple products at once'
    ],
    correct: 1,
    explanation: 'The Bowling Alley Strategy focuses all resources on one beachhead segment (head pin). If perfectly served, it generates word of mouth and references that trigger a chain reaction to other segments.'
  },
  {
    id: 46, module: 1, lecture: '1-4', difficulty: 'medium',
    question: 'What was Facebook\'s beachhead segment?',
    options: ['Tech industry professionals', 'College students', 'Teenagers', 'Small businesses'],
    correct: 1,
    explanation: 'Facebook created a perfect product for college students as their beachhead segment, then used their references to expand to the mass market.'
  },
  {
    id: 47, module: 1, lecture: '1-4', difficulty: 'medium',
    question: 'What is "Validated Learning" in the context of early market products?',
    options: [
      'Academic research validating the technology',
      'Systematically getting user feedback and incorporating it into the product',
      'Passing quality assurance tests',
      'Getting investor validation for the business model'
    ],
    correct: 1,
    explanation: 'Validated Learning is the systematic process of collecting real user feedback from Alpha/Beta users and incorporating it into product improvements.'
  },
  {
    id: 48, module: 1, lecture: '1-4', difficulty: 'medium',
    question: 'How did Barefoot Wines identify their beachhead segment?',
    options: [
      'They surveyed wine experts',
      'They targeted 35-year-old moms wanting casual, inexpensive Tuesday night wine',
      'They focused on high-end wine collectors',
      'They copied a competitor\'s strategy'
    ],
    correct: 1,
    explanation: 'Barefoot Wines found their beachhead: 35-year-old moms looking for inexpensive, casual, easy-to-drink wine — a segment the wine industry had overlooked.'
  },
  {
    id: 49, module: 1, lecture: '1-4', difficulty: 'medium',
    question: 'Why can\'t you go to the mass market with an MVP?',
    options: [
      'MVPs are too expensive',
      'The mass market demands polished, error-free Total Products with perfect Product-Market Fit',
      'MVPs are illegal in most markets',
      'The mass market doesn\'t understand technology'
    ],
    correct: 1,
    explanation: 'The Early Majority (mass market) are pragmatists who demand reliable, proven solutions. An imperfect MVP that works for tech-curious explorers will not satisfy their requirements.'
  },
  // HARD
  {
    id: 50, module: 1, lecture: '1-4', difficulty: 'hard',
    question: 'Why was Barefoot Wines\' "outside-in perspective" a competitive advantage?',
    options: [
      'They had more funding than competitors',
      'Being outsiders, they saw an underserved segment the industry\'s insiders overlooked due to category conventions',
      'They had better grape suppliers',
      'Wine industry regulations favored newcomers'
    ],
    correct: 1,
    explanation: 'Founders who were NOT from the wine industry could see past the category\'s conventions (vintage, tannins, complexity) and identify an overlooked segment wanting simple, casual wine. Insiders were too focused on traditional wine culture.'
  },
  {
    id: 51, module: 1, lecture: '1-4', difficulty: 'hard',
    question: 'A startup has enthusiastic early adopters but stagnant growth. Applying the Crossing the Chasm framework, what is the most likely issue?',
    options: [
      'The technology is fundamentally flawed',
      'They are trying to sell an MVP to the mass market instead of building a Total Product for a specific beachhead segment',
      'They need more advertising budget',
      'Early adopters are giving bad reviews'
    ],
    correct: 1,
    explanation: 'Enthusiastic early adopters + stagnant growth = classic chasm problem. The startup likely has a product that appeals to visionaries but hasn\'t created a Total Product for a specific beachhead segment in the Early Majority.'
  },
  {
    id: 52, module: 1, lecture: '1-4', difficulty: 'hard',
    question: 'How does the Bowling Alley Strategy relate to the concept of "You can\'t be all things to all people"?',
    options: [
      'It doesn\'t — they are separate concepts',
      'By focusing ALL resources on ONE segment, you achieve perfect Product-Market Fit, which is impossible when spreading across many segments',
      'It means you should only sell to one segment forever',
      'It suggests having multiple products for multiple segments'
    ],
    correct: 1,
    explanation: 'With limited resources, trying to serve all segments means serving none well. Bowling Alley focuses everything on one beachhead, achieving perfect fit. Once that segment is satisfied, chain reaction (word of mouth) naturally brings in other segments.'
  },
  // === Lecture 1-5: Prospect Theory ===
  // EASY
  {
    id: 53, module: 1, lecture: '1-5', difficulty: 'easy',
    question: 'Who developed Prospect Theory?',
    options: ['Adam Smith & David Ricardo', 'Daniel Kahneman & Amos Tversky', 'Geoffrey Moore & Clayton Christensen', 'Richard Foster & Michael Porter'],
    correct: 1,
    explanation: 'Prospect Theory was developed by Daniel Kahneman and Amos Tversky (published 1979). Kahneman won the Nobel Prize in 2002.'
  },
  {
    id: 54, module: 1, lecture: '1-5', difficulty: 'easy',
    question: 'In Prospect Theory, what does the Y-axis of the value function represent?',
    options: ['Objective monetary value', 'Subjective/psychological value', 'Market share', 'Time'],
    correct: 1,
    explanation: 'The Y-axis represents subjective (psychological) value — NOT objective value. This distinction is fundamental to Prospect Theory.'
  },
  {
    id: 55, module: 1, lecture: '1-5', difficulty: 'easy',
    question: 'Are reference points fixed or context-dependent?',
    options: ['Fixed and universal', 'Context-dependent', 'Determined by government regulation', 'Always based on average price'],
    correct: 1,
    explanation: 'Reference points are context-dependent. $5 for water is unfair at a vending machine but acceptable at a 5-star resort — different contexts create different reference points.'
  },
  // MEDIUM
  {
    id: 56, module: 1, lecture: '1-5', difficulty: 'medium',
    question: 'What does "diminishing sensitivity" mean in practice for product development?',
    options: [
      'Each new product version should cost less',
      'The first feature creates massive impact; each subsequent feature adds less perceived value',
      'Consumer sensitivity to price always decreases',
      'Products become less reliable over time'
    ],
    correct: 1,
    explanation: 'Diminishing sensitivity means each additional feature adds less psychological value. The first feature = massive impact, the 10th feature = barely noticeable. "Feature creep" is a bad strategy.'
  },
  {
    id: 57, module: 1, lecture: '1-5', difficulty: 'medium',
    question: 'How much stronger are losses felt compared to equivalent gains?',
    options: ['Equal strength', 'About 1.5×', 'About 2.25×', 'About 5×'],
    correct: 2,
    explanation: 'Losses are felt approximately 2.25× more intensely than equivalent gains. Losing $20 hurts much more than finding $20 brings joy.'
  },
  {
    id: 58, module: 1, lecture: '1-5', difficulty: 'medium',
    question: 'What happens to risk behavior in the loss domain vs. gain domain?',
    options: [
      'People are risk-averse in both domains',
      'People are risk-seeking in losses, risk-averse in gains',
      'People are risk-seeking in gains, risk-averse in losses',
      'Risk behavior is unchanged'
    ],
    correct: 1,
    explanation: 'In the loss domain, people become risk-seeking (want to get back to status quo). In the gain domain, people become risk-averse (want to protect what they have).'
  },
  {
    id: 59, module: 1, lecture: '1-5', difficulty: 'medium',
    question: 'What is the Endowment Effect?',
    options: [
      'The tendency to invest in innovations',
      'The irrational tendency to overvalue things we own',
      'The effect of large endowments on university research',
      'The preference for products made by established firms'
    ],
    correct: 1,
    explanation: 'The Endowment Effect is the irrational tendency to overvalue things we own. In Thaler\'s experiment, mug owners demanded at least 2× what non-owners would pay.'
  },
  {
    id: 60, module: 1, lecture: '1-5', difficulty: 'medium',
    question: 'In the Kodak case, what caused the "wait and watch" strategy?',
    options: [
      'Lack of digital technology expertise',
      'Loss aversion: executives feared losing dominant analog business more than they valued digital gains',
      'Government regulations prevented digital cameras',
      'Consumers preferred analog cameras'
    ],
    correct: 1,
    explanation: 'Kodak executives evaluated digital through their analog reference point. The potential loss of their 85% analog market (cash cow) loomed larger than the fuzzy gains from digital. Loss aversion dominated.'
  },
  {
    id: 61, module: 1, lecture: '1-5', difficulty: 'medium',
    question: 'Why did analog and electronics companies forecast digital camera demand so differently?',
    options: [
      'They had different data sources',
      'Their reference points were different: analog firms saw substitution (loss), electronics firms saw opportunity (gain)',
      'Electronics firms had better market research',
      'Analog firms deliberately underestimated'
    ],
    correct: 1,
    explanation: 'Different reference points led to different frames. Analog firms (reference: analog) saw substitution → loss frame → conservative forecast (1.4-1.8M). Electronics firms (reference: digital) saw opportunity → gain frame → optimistic forecast (4-10M).'
  },
  // HARD
  {
    id: 62, module: 1, lecture: '1-5', difficulty: 'hard',
    question: 'Explain the 9× Effect: why do consumers resist even objectively superior innovations?',
    options: [
      'Innovations are too expensive',
      'Consumer overvalues existing product 3× (endowment + loss aversion) × Company overvalues innovation 3× = 9× perception mismatch',
      'Consumers are irrational and ignore all information',
      'Companies don\'t advertise enough'
    ],
    correct: 1,
    explanation: 'The 9× Effect: consumers overvalue what they have (3× via endowment + loss aversion), companies overvalue their innovation (3× via endowment + developer\'s curse). 3×3=9× mismatch. The best product doesn\'t win — the one that minimizes losses wins.'
  },
  {
    id: 63, module: 1, lecture: '1-5', difficulty: 'hard',
    question: 'An auto dealer improved on 10 attributes but declined on customer service. Overall satisfaction dropped. Which Prospect Theory concept explains this?',
    options: [
      'Diminishing sensitivity',
      'Endowment effect',
      'Loss aversion: the one loss (customer service) loomed larger than all 10 gains combined',
      'Reference point shift'
    ],
    correct: 2,
    explanation: 'Loss aversion explains this perfectly. Even though the dealer gained on 10 attributes, the single loss on customer service (an important attribute) loomed larger in consumers\' minds than all gains combined.'
  },
  {
    id: 64, module: 1, lecture: '1-5', difficulty: 'hard',
    question: 'Based on Prospect Theory, what is the most effective strategy for launching an innovation: emphasizing gains or minimizing losses?',
    options: [
      'Always emphasize the revolutionary gains of your product',
      'Minimize the losses consumers face when switching — the product that minimizes losses wins',
      'Ignore consumer psychology and focus on features',
      'Price as low as possible'
    ],
    correct: 1,
    explanation: 'Prof. Echambadi\'s final insight: "The best product does NOT win. The product that best minimizes losses wins." Because losses loom 2.25× larger, reducing switching costs, compatibility issues, and learning curves matters more than adding features.'
  },
  // === MODULE 2: Disruptive Innovation ===
  // === EASY (20% of 50+ = 10+ questions) ===
  {
    id: 65, module: 2, lecture: '2-1', difficulty: 'easy',
    question: 'Who published "The Innovator\'s Dilemma," foundational work on disruptive innovation?',
    options: ['Michael Porter', 'Clayton Christensen', 'Geoffrey Moore', 'Peter Drucker'],
    correct: 1,
    explanation: 'Clayton Christensen published "The Innovator\'s Dilemma" in 1997, introducing the framework of sustaining vs. disruptive innovation.'
  },
  {
    id: 66, module: 2, lecture: '2-1', difficulty: 'easy',
    question: 'What are the two conditions for a technology to be truly disruptive?',
    options: [
      'It must be cheaper and faster',
      'Lower initial performance on traditional metrics AND performance improves to meet mainstream needs',
      'It must be invented by startups',
      'It must be legal and safe'
    ],
    correct: 1,
    explanation: 'Condition 1: underperform on traditional dimensions. Condition 2: improve to meet mainstream requirements. Both conditions must hold for disruption.'
  },
  {
    id: 67, module: 2, lecture: '2-1', difficulty: 'easy',
    question: 'What does a sustaining innovation do to a product\'s performance trajectory?',
    options: [
      'Creates a new trajectory',
      'Maintains the existing trajectory',
      'Reverses the trajectory',
      'Has no effect on trajectory'
    ],
    correct: 1,
    explanation: 'Sustaining innovations improve along existing dimensions (faster processors, lighter weight, better image quality). They maintain the established performance curve.'
  },
  {
    id: 68, module: 2, lecture: '2-1', difficulty: 'easy',
    question: 'In the disk drive industry, which generation disrupted the 14" drives?',
    options: ['5.25" drives', '8" drives', '3.5" drives', 'Solid-state drives'],
    correct: 1,
    explanation: '8" disk drives disrupted 14" drives by serving mini-computers (which needed lower capacity). Incumbents ignored them because they didn\'t meet mainframe customers\' need for MORE capacity.'
  },
  {
    id: 69, module: 2, lecture: '2-2', difficulty: 'easy',
    question: 'When was the last telegram sent in the United States?',
    options: ['1980', '1995', '2013', '2000'],
    correct: 2,
    explanation: 'The last telegram was sent in 2013 — 136 years after the telephone was invented in 1877. Disruption took over a century to complete; markets coexisted for a very long time.'
  },
  {
    id: 70, module: 2, lecture: '2-2', difficulty: 'easy',
    question: 'What is non-consumption in the context of disruption?',
    options: [
      'When competitors reject a new product',
      'A market segment not currently served due to barriers',
      'When a customer stops using a product',
      'Intentional boycott by consumers'
    ],
    correct: 1,
    explanation: 'Non-consumption refers to potential customers not being served because of access, skills, or time barriers. Disruptive innovations target non-consumption.'
  },
  {
    id: 71, module: 2, lecture: '2-3', difficulty: 'easy',
    question: 'In what year did Kodak file for bankruptcy?',
    options: ['2008', '2010', '2012', '2015'],
    correct: 2,
    explanation: 'Kodak filed for bankruptcy in 2012, despite inventing the digital camera in 1975. Unwillingness to cannibalize their film business led to failure.'
  },
  {
    id: 72, module: 2, lecture: '2-3', difficulty: 'easy',
    question: 'Who invented the first digital camera at Kodak?',
    options: ['Thomas Edison', 'Steve Sasson', 'George Eastman', 'Bill Gates'],
    correct: 1,
    explanation: 'Steve Sasson, a Kodak engineer, built the first digital camera in 1975. The CEO\'s reaction: "That\'s cute, but don\'t tell anyone about it."'
  },
  {
    id: 73, module: 2, lecture: '2-4', difficulty: 'easy',
    question: 'Name one of three strategic options for incumbents facing disruption.',
    options: [
      'Acquire the disruptor, or Create Autonomous Structure, or Cooperate and Partner',
      'Always fight the disruptor in court',
      'Merge with unrelated industry',
      'Exit the market immediately'
    ],
    correct: 0,
    explanation: 'Three strategic options: (1) Acquire the disruptor (Facebook/Instagram), (2) Cooperate and Partner, (3) Create Autonomous Structure (separate spinoff with independent P&L).'
  },
  {
    id: 74, module: 2, lecture: '2-5', difficulty: 'easy',
    question: 'What is a simplifying technology?',
    options: [
      'Technology that adds more features',
      'Technology that eliminates complexity and enables non-specialists to use it',
      'Technology that is cheaper',
      'Technology that is smaller'
    ],
    correct: 1,
    explanation: 'Simplifying technology removes complexity. Example: one-button blood pressure monitor (vs. manual, specialized skill). Enables non-consumption market.'
  },
  {
    id: 75, module: 2, lecture: '2-6', difficulty: 'easy',
    question: 'In what year was IBM founded?',
    options: ['1901', '1911', '1920', '1924'],
    correct: 1,
    explanation: 'IBM was founded in 1911 as Computing-Tabulating-Recording (CTR) Company. Renamed IBM in 1924 by Thomas Watson Sr.'
  },
  // === MEDIUM (50% of 50+ = 25+ questions) ===
  {
    id: 76, module: 2, lecture: '2-1', difficulty: 'medium',
    question: 'Why do incumbent companies typically fail to recognize disruptive threats?',
    options: [
      'They have lower budgets than startups',
      'They are close to current customers\' needs; disruptive technologies don\'t meet mainstream needs yet',
      'They lack intelligent employees',
      'Disruptive threats are always invisible'
    ],
    correct: 1,
    explanation: 'The Innovator\'s Dilemma: incumbents rationally listen to current customers. Disruptive technologies serve emerging/non-consumption markets, not current customer needs. Rational inaction on mainstream dimension = catastrophic on total market dimension.'
  },
  {
    id: 77, module: 2, lecture: '2-1', difficulty: 'medium',
    question: 'What is the critical crossing point in a disruption?',
    options: [
      'When the startup achieves profitability',
      'When disruptive performance equals then exceeds sustaining trajectory on traditional metrics',
      'When the incumbent company files bankruptcy',
      'When government regulation changes'
    ],
    correct: 1,
    explanation: 'Disruption accelerates when the disruptive technology\'s performance becomes adequate for mainstream market. Before this crossing, disruption remains niche.'
  },
  {
    id: 78, module: 2, lecture: '2-1', difficulty: 'medium',
    question: 'According to Christensen, what is the primary difference between sustaining and disruptive innovation?',
    options: [
      'Cost — disruptive is cheaper',
      'Performance trajectory — sustaining maintains existing, disruptive creates new',
      'Technology — disruptive uses newer tech',
      'Market — disruptive serves larger markets'
    ],
    correct: 1,
    explanation: 'The core difference is the performance trajectory. Sustaining improves on existing axis. Disruptive introduces new axis, often starting lower but eventually dominating.'
  },
  {
    id: 79, module: 2, lecture: '2-2', difficulty: 'medium',
    question: 'What was Western Union\'s original technology and market?',
    options: [
      'Telephone and voice communication',
      'Telegraph and message transmission (founded 1844)',
      'Telegram delivery by mail',
      'Western expansion of railways'
    ],
    correct: 1,
    explanation: 'Western Union, founded 1844, dominated telegraph (message transmission) for 133 years. They dismissed Bell\'s telephone as "a toy" in 1877.'
  },
  {
    id: 80, module: 2, lecture: '2-2', difficulty: 'medium',
    question: 'Why didn\'t iMBA compete directly with traditional on-campus MBAs?',
    options: [
      'Because it\'s lower quality',
      'It targets non-consumption (working professionals) with different bundle of attributes (online, part-time, affordable)',
      'Because it\'s more expensive',
      'Because traditional MBA programs blocked it'
    ],
    correct: 1,
    explanation: 'iMBA is new-market disruption: online, asynchronous, part-time, $20k vs. traditional: on-campus, full-time, 2 years, $100k+. Targets different market (working professionals, non-consumption).'
  },
  {
    id: 81, module: 2, lecture: '2-2', difficulty: 'medium',
    question: 'What is the key architectural insight for iMBA disrupting traditional MBA?',
    options: [
      'Lower tuition costs',
      'Separate content delivery (video) from engagement (discussion)',
      'Better video production quality',
      'Longer program duration'
    ],
    correct: 1,
    explanation: 'Separating content (asynchronous video lectures) from engagement (synchronous discussion) enables flexibility, global reach, and instructor scalability.'
  },
  {
    id: 82, module: 2, lecture: '2-3', difficulty: 'medium',
    question: 'What was Kodak\'s dominant business model before digital?',
    options: [
      'Subscription-based photography service',
      'Razor-and-razor-blade: cheap cameras, expensive film, paper, chemicals',
      'Equipment rental',
      'Stock-based investments'
    ],
    correct: 1,
    explanation: 'Kodak used razor-and-razor-blade: sell inexpensive cameras, make profit on consumables. By 1970s, 85% camera sales and 90% film market share.'
  },
  {
    id: 83, module: 2, lecture: '2-3', difficulty: 'medium',
    question: 'Which company successfully made the transition from horse carriages to automobiles?',
    options: ['Ford', 'General Motors', 'Studebaker', 'Chrysler'],
    correct: 2,
    explanation: 'Studebaker, a carriage company, successfully transitioned to automobiles. But even Studebaker eventually failed by 1960s — transition possible but difficult.'
  },
  {
    id: 84, module: 2, lecture: '2-3', difficulty: 'medium',
    question: 'What business model did mini mills use to disrupt integrated steel mills?',
    options: [
      'Lower quality at lower price',
      'Vertical integration with ore mining',
      'Lower-cost operations using scrap input, starting with low-margin rebar',
      'Government subsidies'
    ],
    correct: 2,
    explanation: 'Mini mills had $30-50M capital vs. billions for integrated mills. Started with rebar (low margin, unprofitable for incumbents), improved upward to capture market.'
  },
  {
    id: 85, module: 2, lecture: '2-3', difficulty: 'medium',
    question: 'What is "opposable mind" according to Bob Martin?',
    options: [
      'The ability to see things from multiple perspectives',
      'Ability to hold two conflicting ideas simultaneously (e.g., "current profitable AND will become obsolete")',
      'High mathematical intelligence',
      'The ability to change one\'s mind'
    ],
    correct: 1,
    explanation: 'Opposable mind: hold contradictory ideas without suppressing one. Enables "exploit AND explore" balance. Andy Grove: "Only the paranoid survive."'
  },
  {
    id: 86, module: 2, lecture: '2-4', difficulty: 'medium',
    question: 'What are the five components of the Holistic Innovation Framework?',
    options: [
      'Product, Price, Place, Promotion, People',
      'Leadership, Structure, Culture, Resources, Processes',
      'Strategy, Tactics, Operations, Finance, Sales',
      'Innovation, Quality, Cost, Speed, Service'
    ],
    correct: 1,
    explanation: 'Five components must align: Leadership (vision, commitment), Structure (organization), Culture (values, risk tolerance), Resources (money, people), Processes (workflows, decisions).'
  },
  {
    id: 87, module: 2, lecture: '2-4', difficulty: 'medium',
    question: 'What is "core rigidity"?',
    options: [
      'Inability to change processes',
      'When core organizational strengths become rigidities preventing adaptation',
      'Lack of creativity in leadership',
      'Resistance to technology'
    ],
    correct: 1,
    explanation: 'Core rigidity: what made you successful becomes a trap. McKinsey example: strategy excellence ("we are strategists") made operations seem "less prestigious" — blocked adaptation.'
  },
  {
    id: 88, module: 2, lecture: '2-4', difficulty: 'medium',
    question: 'Why do ecosystem partners fail to fully support disruptive innovation?',
    options: [
      'They lack technology',
      'Interdependence Risk: partners may prioritize their existing business over your disruption',
      'They are too small',
      'Government regulation'
    ],
    correct: 1,
    explanation: 'Interdependence Risk: partner\'s success depends on YOUR success, but they aren\'t motivated. They may not cannibalize existing profitable business.'
  },
  {
    id: 89, module: 2, lecture: '2-4', difficulty: 'medium',
    question: 'What is the joint probability problem in ecosystems?',
    options: [
      'The probability that all partners agree on pricing',
      'With four partners at 90% success each, total success is 90%^4 ≈ 65%',
      'The likelihood of a merger or acquisition',
      'Government approval odds'
    ],
    correct: 1,
    explanation: 'Joint probability: add ecosystem partners, success probability drops. 4 partners × 90% = 65.6%. 10 partners × 90% = 35%. Each dependency multiplies risk.'
  },
  {
    id: 90, module: 2, lecture: '2-5', difficulty: 'medium',
    question: 'What are the three components of successful disruption?',
    options: [
      'Price, Quality, Speed',
      'Simplifying Technology, Business Model Innovation, Ecosystem Design',
      'Marketing, Sales, Operations',
      'Research, Development, Manufacturing'
    ],
    correct: 1,
    explanation: 'All three required: Simplifying Technology (reduces complexity), Business Model (changes value capture), Ecosystem (complementary support).'
  },
  {
    id: 91, module: 2, lecture: '2-5', difficulty: 'medium',
    question: 'Which of the following is an example of disruption in the "skills dimension"?',
    options: [
      'Free shipping on online orders',
      'Blood pressure monitor that non-nurses can use (vs. specialist-only)',
      'Lower prices than competitors',
      'Better customer service'
    ],
    correct: 1,
    explanation: 'Skills dimension disruption simplifies specialist tasks for non-specialists. Blood pressure: nurse-measured → self-measured. Tax software: CPA → individual DIY.'
  },
  {
    id: 92, module: 2, lecture: '2-5', difficulty: 'medium',
    question: 'Which of the following is an example of disruption in the "access dimension"?',
    options: [
      'Faster download speeds',
      'Online retail removing geographic barrier (shop from home vs. drive to store)',
      'Better product packaging',
      'Free returns'
    ],
    correct: 1,
    explanation: 'Access dimension removes barriers: geographic (online shopping), economic (lower cost), or temporal (24/7 availability). Creates new markets for previously inaccessible customers.'
  },
  {
    id: 93, module: 2, lecture: '2-5', difficulty: 'medium',
    question: 'What is the economic principle underlying retail disruption?',
    options: [
      'Cheaper is always better',
      'Larger stores always win',
      'Gross margin × inventory turnover ≈ 120% across all retail formats',
      'Online always beats physical'
    ],
    correct: 2,
    explanation: 'Department: 40% × 3 = 120%, Discount: 23% × 5 = 115%, Online: 5% × 25 = 125%. Economics unchanged; operational model different.'
  },
  {
    id: 94, module: 2, lecture: '2-6', difficulty: 'medium',
    question: 'What did Thomas Watson Sr. establish as IBM\'s enduring DNA?',
    options: [
      'Manufacturing excellence',
      'Low-cost strategy',
      'Customer centricity: "The value is not the technology, but the solution to the customer\'s problem"',
      'Pure innovation focus'
    ],
    correct: 2,
    explanation: 'Watson\'s principle enabled IBM to survive three technology discontinuities (1950s-2000s). Customer-centric capability outweighed raw technology.'
  },
  {
    id: 95, module: 2, lecture: '2-6', difficulty: 'medium',
    question: 'Which of IBM\'s three discontinuities occurred first?',
    options: [
      'Hardware → Software & Services',
      'Mainframes → PCs',
      'Electromechanical → Electronic (1950s-1960s)',
      'Tabulating machines → Mainframes'
    ],
    correct: 2,
    explanation: 'First (1950s-1960s): electromechanical → electronic (IBM 701, 1401, 360). Second (1980s): mainframes → PCs. Third (1990s-2000s): hardware → software/services.'
  },
  {
    id: 96, module: 2, lecture: '2-6', difficulty: 'medium',
    question: 'What were IBM\'s three brilliant strategic moves in the PC market?',
    options: [
      'Low price, massive advertising, retail stores',
      'Boca Raton lab, Outsource to Intel/Microsoft, Retail distribution',
      'Vertical integration, exclusive partnerships, proprietary OS',
      'Manufacturing efficiency, supply chain optimization, cost leadership'
    ],
    correct: 1,
    explanation: 'Move 1: Autonomous Boca Raton lab (separate from mainframe division). Move 2: Outsourced Intel CPUs, Microsoft OS. Move 3: Retail distribution (not direct corporate sales).'
  },
  {
    id: 97, module: 2, lecture: '2-6', difficulty: 'medium',
    question: 'Why did IBM\'s PC commoditize despite brilliant initial strategy?',
    options: [
      'Competition was too fierce',
      'Outsourced most valuable components (Intel, Microsoft) → they captured value, IBM left with commodity hardware',
      'Poor design quality',
      'Lack of marketing'
    ],
    correct: 1,
    explanation: 'Value pools shifted to Intel (CPU), Microsoft (OS). IBM competed on commoditized hardware with thousands of clones. Got 20% of PC value instead of capture.'
  },
  // === HARD (30% of 50+ = 15+ questions) ===
  {
    id: 98, module: 2, lecture: '2-1', difficulty: 'hard',
    question: 'Why is listening to customers rational for incumbents but often leads to missed disruptions?',
    options: [
      'Customers lie about their preferences',
      'Customers don\'t understand new technology',
      'Current customers demand sustaining improvements, not disruptive alternatives. Disruptive tech serves non-consumption (non-existent customers)',
      'Listening to customers increases costs'
    ],
    correct: 2,
    explanation: 'The Innovator\'s Dilemma: listening to current customers is sound. But disruptive markets don\'t yet exist. Mainstream customers didn\'t demand 8" disk drives — they wanted MORE storage (14"). This creates rationally-justified but strategically-wrong inaction.'
  },
  {
    id: 99, module: 2, lecture: '2-2', difficulty: 'hard',
    question: 'In the iMBA vs. traditional MBA case, what would happen if iMBA forced traditional MBA\'s model online (synchronous 3-hour lectures, mandatory attendance)?',
    options: [
      'It would succeed because online delivery is cheaper',
      'It would fail because you\'d lose the disruptive advantages (flexibility, global reach) and still compete poorly on traditional MBA\'s home turf',
      'It would attract both markets',
      'Quality would improve'
    ],
    correct: 1,
    explanation: 'Clean-slate design is critical. Forcing old model into new environment kills disruption. iMBA\'s power is separating content from engagement, enabling async learning. Online MBA trying to replicate sync MBA loses disruption advantage.'
  },
  {
    id: 100, module: 2, lecture: '2-3', difficulty: 'hard',
    question: 'Explain the paradox: Kodak invented the digital camera but couldn\'t commercialize it.',
    options: [
      'They lacked the technology',
      'Digital cameras were too expensive',
      'Cognitive bias + unwillingness to cannibalize + inability to see beyond film reference frame + rational protection of $1B+ annual film revenue',
      'They didn\'t have distribution channels'
    ],
    correct: 2,
    explanation: 'Three failures combined: (1) Cognitive bias: executives extrapolated from profitable film. (2) Willingness: couldn\'t bring themselves to cannibalize film. (3) Structure: no autonomous unit to commercialize disruptive tech independently.'
  },
  {
    id: 101, module: 2, lecture: '2-3', difficulty: 'hard',
    question: 'According to Christensen, why do most carriage companies fail to transition to automobiles despite being well-positioned?',
    options: [
      'Automobiles are too complex to manufacture',
      'They lacked capital investment',
      'Capabilities in one domain don\'t automatically transfer. What made you successful (carriage excellence) doesn\'t equip you for a new domain (automotive scale)',
      'Government regulation banned carriages'
    ],
    correct: 2,
    explanation: 'Studebaker succeeded temporarily but failed within 50 years. The lesson: even successful transitions are hard. Manufacturing capability ≠ automotive scale capability. Enduring DNA helps (like IBM\'s customer-centricity) but isn\'t enough.'
  },
  {
    id: 102, module: 2, lecture: '2-4', difficulty: 'hard',
    question: 'Why did McKinsey\'s strong culture become a "core rigidity" regarding operations consulting?',
    options: [
      'Operations is too difficult',
      'Their culture identified them as "strategists" (prestigious). Operations (implementation) felt "less prestigious." Cultural identity → reluctance to adapt → lost market relevance',
      'Lack of qualified people',
      'Cost of operations consulting is too high'
    ],
    correct: 1,
    explanation: 'Core rigidity: what makes you great becomes a prison. Strong culture is both advantage (alignment, speed) and trap (resistance to new directions). Culture as "molasses."'
  },
  {
    id: 103, module: 2, lecture: '2-4', difficulty: 'hard',
    question: 'If an innovation requires 8 ecosystem partners, each with 85% probability of success, what is overall success probability?',
    options: ['85%', '68%', '27.2%', '95%'],
    correct: 2,
    explanation: 'Joint probability = 0.85^8 = 0.272 or 27.2%. This joint probability problem explains why ecosystems are fragile. Each partner adds multiplicative risk.'
  },
  {
    id: 104, module: 2, lecture: '2-4', difficulty: 'hard',
    question: 'Compare Facebook\'s ecosystem strategy (acquired Instagram) vs. traditional incumbent cooperation approaches. Why did acquisition work better than cooperation?',
    options: [
      'Acquisition is always cheaper',
      'Acquisition ensures Instagram proceeds with disruption (Initiative Risk removed). Cooperation leaves partner\'s commitment uncertain',
      'Cooperation was too slow',
      'Instagram preferred Facebook ownership'
    ],
    correct: 1,
    explanation: 'Acquisition removes Initiative Risk: partner can\'t fail to proceed. Cooperation leaves uncertainty: partner may prioritize their existing business. Facebook\'s move eliminated hesitation.'
  },
  {
    id: 105, module: 2, lecture: '2-5', difficulty: 'hard',
    question: 'The Consumer Journey Map approach works by identifying what?',
    options: [
      'The shortest path from customer home to store',
      'Barriers (skills, access, time) preventing service use. Disruption happens at barriers.',
      'The most profitable customer segment',
      'How customers pay for products'
    ],
    correct: 1,
    explanation: 'Map journey step-by-step. At each step, ask: What barrier exists? Skills? Access? Time? Could removing that barrier create new market? Disruptions target identified barriers.'
  },
  {
    id: 106, module: 2, lecture: '2-5', difficulty: 'hard',
    question: 'In retail evolution, what infrastructure innovation enabled department store disruption by discount chains?',
    options: [
      'Telephone systems',
      'Automobiles + suburban highways enabled suburban retail cheaper than downtown',
      'Television advertising',
      'Credit card companies'
    ],
    correct: 1,
    explanation: 'Infrastructure determines business model possibilities. Suburbs + highways made suburban retail viable, displaced downtown department stores.'
  },
  {
    id: 107, module: 2, lecture: '2-6', difficulty: 'hard',
    question: 'What three strategic principles did IBM use to successfully navigate three discontinuities?',
    options: [
      'Low cost, first-mover, vertical integration',
      'Willingness to cannibalize, Separate autonomous units, Enduring customer-centric DNA + continuous learning',
      'Aggressive acquisition, proprietary technology, patent protection',
      'Marketing excellence, brand building, exclusive distribution'
    ],
    correct: 1,
    explanation: 'Principles: (1) Cannibalize: mainframe division allowed PC growth. (2) Separate: Boca Raton lab enabled disruptive strategy. (3) Enduring DNA: customer-centricity maintained through all transitions.'
  },
  {
    id: 108, module: 2, lecture: '2-6', difficulty: 'hard',
    question: 'Analyze IBM\'s transition from hardware to software/services. Was this strategic renewal or surrender?',
    options: [
      'Surrender — IBM gave up hardware manufacturing',
      'Strategic renewal: Recognized PC commoditization, repositioned to higher-value software/services, leveraged enduring strength (customer relationships)',
      'Both — surrendered hardware but renewed in services',
      'Neither — it was a sideways move'
    ],
    correct: 1,
    explanation: 'IBM recognized commoditization signal early. Acquired Rational Software (business software) + PwC Consulting ($30B). Shifted from selling hardware to solving problems through software/services. Leveraged enduring DNA.'
  },
  {
    id: 109, module: 2, lecture: '2-6', difficulty: 'hard',
    question: 'Contrast Kodak\'s inability to cannibalize with IBM\'s willingness. What organizational factors enabled IBM but blocked Kodak?',
    options: [
      'IBM had more money',
      'IBM had better technology',
      'IBM separated units (Boca Raton PC lab). Kodak tried to commercialize digital within film-optimized structure. Separation enables; integration kills disruption.',
      'Kodak had worse leadership'
    ],
    correct: 2,
    explanation: 'Same issue: cannibalization. IBM succeeded because autonomous Boca Raton lab had separate incentives, culture, business model. Kodak tried within film-optimized structure → cross-contamination killed it.'
  },
  // === MODULE 3: OPEN INNOVATION & VALUE CAPTURE ===
  // === Lecture 3-1: Open Innovation & Markets for Technology ===
  // EASY
  {
    id: 110, module: 3, lecture: '3-1', difficulty: 'easy',
    question: 'Who popularized the Open Innovation model?',
    options: ['Henry Chesbrough', 'Michael Porter', 'Clayton Christensen', 'Peter Drucker'],
    correct: 0,
    explanation: 'Henry Chesbrough popularized the Open Innovation model, emphasizing that innovation can occur through external partnerships, not just internal R&D.'
  },
  {
    id: 111, module: 3, lecture: '3-1', difficulty: 'easy',
    question: 'What is an example of open innovation through crowdsourcing?',
    options: ['Apple App Store', 'LEGO Ideas', 'Amazon Prime', 'Netflix Originals'],
    correct: 1,
    explanation: 'LEGO Ideas allows customers to submit designs, vote, and have winning designs become real products — a crowdsourced innovation approach.'
  },
  {
    id: 112, module: 3, lecture: '3-1', difficulty: 'easy',
    question: 'What does "Markets for Technology" refer to?',
    options: [
      'Stock markets',
      'Market transactions for buying and selling ideas, technologies, and IP',
      'Consumer electronics markets',
      'Labor markets'
    ],
    correct: 1,
    explanation: 'Markets for Technology: structured exchanges where technologies, patents, and intellectual property are bought, sold, and licensed like commodities.'
  },
  // MEDIUM
  {
    id: 113, module: 3, lecture: '3-1', difficulty: 'medium',
    question: 'How does Android illustrate open innovation?',
    options: [
      'It\'s the most expensive OS',
      'It\'s free & open-source, enabling global developer collaboration',
      'It\'s proprietary to Google',
      'It only works on Google phones'
    ],
    correct: 1,
    explanation: 'Android\'s open-source nature enables thousands of external developers to innovate, create apps, and customize the platform — classic open innovation.'
  },
  {
    id: 114, module: 3, lecture: '3-1', difficulty: 'medium',
    question: 'What enabled the growth of markets for technology?',
    options: [
      'Weakening of patent laws',
      'Strengthening of intellectual property rights, especially patents',
      'Government subsidies',
      'Lower internet costs'
    ],
    correct: 1,
    explanation: 'Strong IP rights (patents, copyrights) enable confident technology transactions. Without IP protection, sellers risk losing value when ideas are revealed.'
  },
  {
    id: 115, module: 3, lecture: '3-1', difficulty: 'medium',
    question: 'What is the key difference between open innovation and markets for technology?',
    options: [
      'No difference',
      'Open innovation: broad approach to external ideas; Markets for tech: specific buying/selling of technologies through licensing',
      'Open innovation is for large firms only',
      'Markets for tech only apply to software'
    ],
    correct: 1,
    explanation: 'Open Innovation: strategy of using external ideas alongside internal R&D. Markets for Technology: specific institutional mechanisms (licensing, IP exchanges) where tech is traded.'
  },
  // HARD
  {
    id: 116, module: 3, lecture: '3-1', difficulty: 'hard',
    question: 'A pharmaceutical company discovers that a competitor has developed a promising drug platform. Under open innovation, the company should:',
    options: [
      'Sue for patent infringement',
      'Ignore it and develop internally',
      'Explore licensing, partnership, or acquisition opportunities',
      'Wait until the technology matures'
    ],
    correct: 2,
    explanation: 'Open innovation encourages external technology integration. Rather than blocking or ignoring, the firm explores partnerships, licensing deals, or acquisitions.'
  },
  {
    id: 117, module: 3, lecture: '3-1', difficulty: 'hard',
    question: 'Why might IBM\'s strategy of licensing unused patents be considered both open innovation AND markets for technology?',
    options: [
      'It\'s not — they\'re different concepts',
      'Out-licensing monetizes IP (market for tech) while making technologies available externally (open innovation principle)',
      'It\'s only markets for technology',
      'It\'s only open innovation'
    ],
    correct: 1,
    explanation: 'IBM licenses patents to competitors, creating external value (open innovation mindset) while monetizing unused IP (markets for technology mechanism).'
  },
  // === Lecture 3-2: Vertical Integration & Make-or-Buy ===
  // EASY
  {
    id: 118, module: 3, lecture: '3-2', difficulty: 'easy',
    question: 'What is vertical integration?',
    options: [
      'A marketing strategy',
      'Decisions about which activities to perform in-house vs. outsource',
      'A type of corporate merger',
      'A product development method'
    ],
    correct: 1,
    explanation: 'Vertical integration: decisions about whether to perform activities (manufacturing, distribution, R&D) internally or source externally.'
  },
  {
    id: 119, module: 3, lecture: '3-2', difficulty: 'easy',
    question: 'Which company relies on Google Android for its OS?',
    options: ['Apple', 'Samsung', 'Microsoft', 'Huawei'],
    correct: 1,
    explanation: 'Samsung uses Google\'s Android OS on most devices rather than developing its own operating system.'
  },
  {
    id: 120, module: 3, lecture: '3-2', difficulty: 'easy',
    question: 'What are transaction costs?',
    options: [
      'Costs of raw materials',
      'Costs of searching, negotiating, and enforcing economic transactions',
      'Manufacturing costs',
      'Employee salaries'
    ],
    correct: 1,
    explanation: 'Transaction costs: expenses incurred when finding suppliers, negotiating terms, enforcing contracts, and managing external relationships.'
  },
  // MEDIUM
  {
    id: 121, module: 3, lecture: '3-2', difficulty: 'medium',
    question: 'How did the pharmaceutical industry change its vertical integration over time?',
    options: [
      'Remained fully integrated',
      'Moved from fully integrated to disintegrated with specialized firms',
      'Became more integrated',
      'No significant change'
    ],
    correct: 1,
    explanation: 'Pharma evolved from vertical integration (discover, develop, manufacture, sell) to a disintegrated model with specialized biotech firms, CROs, and distribution partners.'
  },
  {
    id: 122, module: 3, lecture: '3-2', difficulty: 'medium',
    question: 'Why is Apple\'s decision to own its operating system strategically significant?',
    options: [
      'It reduces manufacturing costs',
      'It creates critical differentiation from Android-based competitors and controls the user experience',
      'It makes phones cheaper',
      'It allows outsourcing to TSMC'
    ],
    correct: 1,
    explanation: 'Apple owns iOS to maintain control of the ecosystem and user experience, creating competitive advantage vs. Android devices. This vertical integration is strategic.'
  },
  {
    id: 123, module: 3, lecture: '3-2', difficulty: 'medium',
    question: 'What is the primary trade-off in make-or-buy decisions?',
    options: [
      'Speed vs quality',
      'Cost of internal production vs. transaction costs of outsourcing, balanced against control and strategic importance',
      'Design vs engineering',
      'Domestic vs international'
    ],
    correct: 1,
    explanation: 'Make-or-buy: balance internal production costs against external transaction costs, while preserving control over strategically critical activities.'
  },
  // HARD
  {
    id: 124, module: 3, lecture: '3-2', difficulty: 'hard',
    question: 'Compare Apple and Samsung\'s integration strategies. Which statement is most accurate?',
    options: [
      'They have identical strategies',
      'Apple owns OS but outsources manufacturing; Samsung manufactures components but uses third-party OS — each keeps core competencies in-house',
      'Samsung is more integrated in all areas',
      'Apple outsources everything'
    ],
    correct: 1,
    explanation: 'Apple: owns OS (software, UX) but outsources manufacturing. Samsung: owns manufacturing/components but outsources OS. Each firm focuses on core competencies.'
  },
  {
    id: 125, module: 3, lecture: '3-2', difficulty: 'hard',
    question: 'How does the concept of core competencies relate to vertical integration decisions?',
    options: [
      'No relation',
      'Firms should keep activities related to core competencies in-house to maintain control and quality, while outsourcing non-core activities to specialists',
      'Core competencies should always be outsourced',
      'Core competencies only matter for large firms'
    ],
    correct: 1,
    explanation: 'Core Competency Principle: integrate activities that define competitive advantage, outsource the rest. This balances control with efficiency.'
  },
  // === Lecture 3-3: Value Capture & IP Rights ===
  // EASY
  {
    id: 126, module: 3, lecture: '3-3', difficulty: 'easy',
    question: 'What are the two broad classes of value capture mechanisms?',
    options: ['Legal and strategic', 'Internal and external', 'Offensive and defensive', 'Active and passive'],
    correct: 0,
    explanation: 'Legal mechanisms (patents, trademarks, copyrights) and Strategic mechanisms (brand, switching costs, network effects) both protect value.'
  },
  {
    id: 127, module: 3, lecture: '3-3', difficulty: 'easy',
    question: 'What is Arrow\'s Information Paradox about?',
    options: [
      'Market pricing',
      'To sell an idea, you must reveal it, but the buyer may then not pay',
      'Patent filing procedures',
      'International trade'
    ],
    correct: 1,
    explanation: 'Arrow\'s Paradox: innovators face a dilemma — revealing ideas to potential buyers destroys value (buyer learns for free), but hiding ideas prevents sales.'
  },
  {
    id: 128, module: 3, lecture: '3-3', difficulty: 'easy',
    question: 'What are the three requirements for a patentable invention?',
    options: [
      'Novel, cheap, popular',
      'Functional use, novel, non-obvious',
      'Profitable, scalable, unique',
      'Published, reviewed, approved'
    ],
    correct: 1,
    explanation: 'Patentability requires: (1) Novel — not previously disclosed. (2) Non-obvious — not a simple combination of known elements. (3) Functional utility.'
  },
  // MEDIUM
  {
    id: 129, module: 3, lecture: '3-3', difficulty: 'medium',
    question: 'Why is intellectual capital described as "non-rivalrous"?',
    options: [
      'It can only be used by one firm',
      'It can be used simultaneously by multiple parties without wearing out',
      'It has no monetary value',
      'It cannot be protected'
    ],
    correct: 1,
    explanation: 'Non-rivalrous: one party\'s use doesn\'t diminish another\'s ability to use. A song played by millions doesn\'t get "used up."'
  },
  {
    id: 130, module: 3, lecture: '3-3', difficulty: 'medium',
    question: 'What is the key difference between discrete and complex technology patents?',
    options: [
      'No difference',
      'Discrete: protected by few patents (e.g., a drug); Complex: hundreds of patents from different firms (e.g., smartphone)',
      'Discrete patents are cheaper',
      'Complex patents are easier to defend'
    ],
    correct: 1,
    explanation: 'Discrete tech (new drug): one patent protects it. Complex tech (smartphone): hundreds of patents needed from different firms, making infringement complex.'
  },
  {
    id: 131, module: 3, lecture: '3-3', difficulty: 'medium',
    question: 'Why might a firm choose trade secrecy over patents?',
    options: [
      'Trade secrecy is free',
      'Patents require public disclosure of the underlying knowledge, which competitors can use to invent around',
      'Trade secrecy lasts forever',
      'There\'s no reason to prefer secrecy'
    ],
    correct: 1,
    explanation: 'Patents require disclosure (then expire). Trade secrets avoid disclosure but are fragile. Different tools for different situations.'
  },
  // HARD
  {
    id: 132, module: 3, lecture: '3-3', difficulty: 'hard',
    question: 'How does Arrow\'s Information Paradox explain the importance of strong IP rights for markets for technology?',
    options: [
      'It doesn\'t',
      'Without IP protection, innovators cannot safely reveal ideas to potential buyers, making technology transactions too risky — strong IP (NDAs, patents) solves this paradox',
      'IP rights make technology cheaper',
      'Arrow\'s Paradox only applies to physical goods'
    ],
    correct: 1,
    explanation: 'Arrow\'s Paradox threatens technology markets: why buy if revealing the idea destroys its value? IP (NDAs, patents) enables safe transaction by protecting the idea.'
  },
  {
    id: 133, module: 3, lecture: '3-3', difficulty: 'hard',
    question: 'The Carnegie Mellon survey shows patents are highly effective in pharmaceuticals but less so in business services. Explain this pattern:',
    options: [
      'Random industry variation',
      'Pharma has discrete technologies (one patent per drug, easy to prove infringement); business services have complex, harder-to-patent knowledge',
      'Pharma has better lawyers',
      'Business services don\'t innovate'
    ],
    correct: 1,
    explanation: 'Pharma: one patent per drug, easy to detect infringement. Services: knowledge-based, harder to patent, easier to invent around. Patent effectiveness varies by technology type.'
  },
  // === Lecture 3-4: Commercialization Strategies ===
  // EASY
  {
    id: 134, module: 3, lecture: '3-4', difficulty: 'easy',
    question: 'What new strategic option has strong IP enabled for innovating firms?',
    options: [
      'Merger',
      'Sell or license their technology to other firms (make-or-sell decision)',
      'Go public',
      'Vertical integration'
    ],
    correct: 1,
    explanation: 'Strong IP enables the make-or-sell decision: innovators can sell/license technology to larger firms rather than building distribution themselves.'
  },
  {
    id: 135, module: 3, lecture: '3-4', difficulty: 'easy',
    question: 'How much did Moderna raise before going public?',
    options: ['Over $2.7 billion', '$500 million', '$100 million', '$10 billion'],
    correct: 0,
    explanation: 'Moderna raised over $2.7 billion before its IPO — enabling investment in manufacturing and scale-up without partners.'
  },
  {
    id: 136, module: 3, lecture: '3-4', difficulty: 'easy',
    question: 'What strategy did Cisco pursue for innovation?',
    options: [
      'Internal R&D only',
      'Innovation through acquisition — acquiring startups and their technologies',
      'Licensing from universities',
      'Government partnerships'
    ],
    correct: 1,
    explanation: 'Cisco acquired ~190 companies over 30 years as its primary innovation strategy, integrating their technologies into Cisco products.'
  },
  // MEDIUM
  {
    id: 137, module: 3, lecture: '3-4', difficulty: 'medium',
    question: 'What is the "division of innovative labor"?',
    options: [
      'All firms do everything',
      'Startups create new technologies while large incumbents with manufacturing/sales advantages commercialize them',
      'Only universities do R&D',
      'Division of tasks within a single firm'
    ],
    correct: 1,
    explanation: 'Division of Innovative Labor: startups innovate (lower bureaucracy, risk appetite), incumbents commercialize (capital, manufacturing, distribution).'
  },
  {
    id: 138, module: 3, lecture: '3-4', difficulty: 'medium',
    question: 'Why did BioNTech partner with Pfizer instead of manufacturing vaccines alone?',
    options: [
      'BioNTech didn\'t have mRNA technology',
      'BioNTech lacked specialized manufacturing and distribution capabilities that Pfizer possessed',
      'Pfizer owned BioNTech',
      'Government regulation required it'
    ],
    correct: 1,
    explanation: 'BioNTech had mRNA platform (innovation), Pfizer had manufacturing scale + distribution. Partnership: BioNTech innovates, Pfizer commercializes.'
  },
  {
    id: 139, module: 3, lecture: '3-4', difficulty: 'medium',
    question: 'When is licensing a better strategy than forward integration?',
    options: [
      'Always',
      'When the technology has many applications across different markets and forward integration costs are prohibitive',
      'Never',
      'Only for software companies'
    ],
    correct: 1,
    explanation: 'Licensing enables multi-market capture without bearing integration costs. Forward integration is better when focused on one market.'
  },
  // HARD
  {
    id: 140, module: 3, lecture: '3-4', difficulty: 'hard',
    question: 'Compare Moderna\'s and BioNTech\'s commercialization strategies. What drove their different choices?',
    options: [
      'Random decisions',
      'Moderna chose full integration ($2.7B capital) because mRNA manufacturing capabilities didn\'t exist; BioNTech partnered with Pfizer because it lacked manufacturing capacity but Pfizer had it',
      'They had identical strategies',
      'Only vaccine companies face this choice'
    ],
    correct: 1,
    explanation: 'Moderna: capital-rich, built manufacturing. BioNTech: capital-constrained, partnered. Different resource constraints led to different strategies.'
  },
  {
    id: 141, module: 3, lecture: '3-4', difficulty: 'hard',
    question: 'An AI startup has a breakthrough model with applications in healthcare, finance, and education. Should it forward integrate or license? Analyze:',
    options: [
      'Always forward integrate',
      'Licensing is likely better: broad applications across distinct markets make forward integration prohibitively expensive; licensing captures value from multiple markets simultaneously',
      'Forward integrate into all three',
      'Wait for acquisition'
    ],
    correct: 1,
    explanation: 'Wide applicability + high integration costs favor licensing. Licensing allows multiple partners to develop domain-specific applications while the startup captures value.'
  },
  // === Lecture 3-5: Integration ===
  // MEDIUM
  {
    id: 142, module: 3, lecture: '3-5', difficulty: 'medium',
    question: 'What three areas must a firm assess to effectively use open innovation?',
    options: [
      'Products, prices, promotions',
      'Current vertical integration strategy, IP rights effectiveness, external knowledge sources',
      'Revenue, profits, market share',
      'Competitors, suppliers, customers'
    ],
    correct: 1,
    explanation: 'Assessment framework: (1) Current integration structure. (2) IP protection level. (3) External knowledge availability. All three determine open innovation potential.'
  },
  // HARD
  {
    id: 143, module: 3, lecture: '3-5', difficulty: 'hard',
    question: 'How do vertical integration, IP rights, and open innovation connect as a system?',
    options: [
      'They don\'t connect',
      'Strong IP enables market transactions → which enables open innovation → which reduces need for full vertical integration → creating a cycle where innovation thrives through collaboration',
      'They are competing strategies',
      'Only IP matters'
    ],
    correct: 1,
    explanation: 'System integration: IP protection (legal) enables technology trading (markets) enables external collaboration (open innovation) enables lighter integration (outsourcing) enables focus on core competencies.'
  }
]
