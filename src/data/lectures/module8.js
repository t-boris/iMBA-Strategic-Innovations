export const module8 = {
  id: 8,
  title: 'Planning, Evaluation & Innovation Across Firm Boundaries',
  description: 'Govindarajan & Trimble + Chesbrough — финальный модуль "Managing Innovation Initiatives": планирование под неопределённость, accountability for learning, virtual vs integrated подходы, advice для alliances и JV.',
  lectures: [
    {
      id: '8-1',
      moduleId: 8,
      title: 'Planning for Innovation — Experimentation and Learning (Part 1)',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Обзор модуля и место planning/evaluation',
          content: `Module 8 — финальный, четвёртый модуль "Managing Innovation Initiatives". После Module 5 (амбидекстрия), Module 6 (типология × матрица), Module 7 (команды + посвящённые команды) теперь — две функции менеджмента, оставшиеся за кадром: PLANNING (планирование) и EVALUATION (оценка), плюс межфирменный аспект инновации. Четыре функции менеджмента (Jones & George): Planning → Organizing → Leading → Controlling — образуют замкнутый цикл. Modules 5-7 фокусировались на Organizing + Leading. Module 8 завершает картину.`,
          keyPoints: [
            'Module 8 = 4-й модуль "Managing Innovation Initiatives"',
            '4 функции менеджмента: Planning, Organizing, Leading, Controlling',
            'Modules 5-7 — Organizing + Leading',
            'Module 8 — Planning + Controlling (Evaluation) + Boundaries',
            'Замкнутый цикл функций — обратная связь оценки в планирование'
          ],
          interactive: 'module8-overview'
        },
        {
          title: 'Контекст: challenging innovation initiatives',
          content: `Module 8 говорит конкретно о CHALLENGING innovation initiatives — где есть substantial uncertainty, нельзя смотреть в прошлое для прогноза, нужно делать критические допущения, и жизнеспособность инициативы зависит от того, верны ли они. Для continuous improvement и product generation — традиционное планирование подходит. Для challenging — нет. Это front half of S-curve (Era of Substitution + Era of Ferment): мало истории, много неизвестных, способ победить — быть лучшим и быстрейшим в выяснении что работает.`,
          keyPoints: [
            'Challenging = substantial uncertainty + critical assumptions',
            'Не подходит для continuous improvement / product generation',
            'Front half of S-curve: Era of Substitution + Era of Ferment',
            'Способ победить: лучший и быстрейший в learning',
            'Не back half (Era of Incremental Change) — там traditional подход'
          ],
          interactive: 'scurve-planning-context'
        },
        {
          title: 'Главная идея — Experimentation & Learning',
          content: `Когда innovation — центральный вызов, planning & evaluation должны быть переориентированы на EXPERIMENTATION и LEARNING, а не на достижение результатов. Источники: Govindarajan & Trimble (основная база), Furr & Dyer (The Innovator's Method), Eric Ries (Lean Startup, Startup Way), Christensen (как strategic planning systems отрезают disruptive). Govindarajan & Trimble: companies usually DON'T distinguish adequately in their planning & evaluation processes between established operations and innovation initiatives.`,
          keyPoints: [
            'Переориентация: experimentation + learning вместо results',
            'Источники: G&T (база), Furr & Dyer, Ries, Christensen',
            'Companies don\'t distinguish enough в planning/evaluation',
            'Christensen: planning systems push toward large markets, high margins',
            'Cut off disruptive innovations'
          ]
        },
        {
          title: 'Два вызова обучения в организациях',
          content: `ВЫЗОВ 1: PEOPLE ARE NOT GOOD AT LEARNING IN COMPLEX SITUATIONS. Хорошо учатся когда cause-and-effect видимы, feedback быстрый (видеоигры, AB-testing). Плохо учатся когда feedback неполный, отложенный, неоднозначный, когда связь между действиями и исходами проявляется после больших инвестиций. Sustained & disciplined attention требуется. Люди подвержены psychological и organizational biases, выталкивающим learning. ВЫЗОВ 2: VALUING LEARNING AS A CENTRAL GOAL. Менеджеры привыкли ценить results. Executives видят learning как "squishy" goal. Planning systems built для produce results. Executive не получит satisfaction от "мы потеряли миллионы, но многому научились". → Learning must be a COMPELLING goal и part of the planning process.`,
          keyPoints: [
            'Challenge 1: люди плохо учатся в complex situations',
            'Хорошо учатся: cause-effect visible, fast feedback (AB-test)',
            'Плохо учатся: feedback delayed, ambiguous',
            'Challenge 2: executives видят learning как "squishy"',
            'Planning systems built для results, не learning',
            'Решение: learning must be COMPELLING goal'
          ],
          interactive: 'learning-challenges'
        },
        {
          title: 'Learning-oriented firm vs Results-oriented firm',
          content: `Один из самых важных контрастов модуля. При results below target: RESULTS-ORIENTED firm — appears as failure; lowering targets frowned upon; leader will present ways to "recover" the plan; pressure to go HARDER in same direction. LEARNING-ORIENTED firm — prompts re-examining assumptions; revise future predictions based on new data; perhaps this is not attractive opportunity; embrace FAIL-FAST ethos if we learn opportunity is not attractive. Main thesis: THE FIRM THAT LEARNS THE FASTEST WILL WIN IN CHALLENGING INNOVATION SITUATIONS. Executives who stick to results focus, working to be hard-nosed, are being hard-nosed about the WRONG THING. Be hard-nosed about LEARNING instead.`,
          keyPoints: [
            'Results-oriented: shortfall = failure; recover the plan; go harder',
            'Learning-oriented: shortfall → re-examine assumptions; revise; fail-fast',
            'Main thesis: firm that learns fastest wins',
            'Be hard-nosed about LEARNING, не results',
            'Inversion of classical management wisdom'
          ],
          interactive: 'learning-vs-results-firm'
        },
        {
          title: 'Experiments как метод и метафора',
          content: `Когда learning становится главной целью, EXPERIMENTS — это метод и метафора для её достижения. Не строго научные эксперименты — AB-testing (canonical), Minimum Viable Product (Eric Ries: "very rich experiment that can reveal fairly quickly whether customers will buy and use"), customized experiments. Этика: "Spend a little, learn a lot" (Govindarajan & Trimble — fail-fast). Imp: plan as if it was business with targets BUT ALSO as if it was experiment with hypothesis — гипотеза что у нас viable market and product opportunity. Outcomes есть И из experimental focus, и learning outcomes.`,
          keyPoints: [
            'Experiments = метод и метафора для learning',
            'AB-testing: canonical пример (internet apps)',
            'MVP (Eric Ries): rich experiment',
            'Ethics: "Spend a little, learn a lot" (G&T)',
            'Plan = business + experiment one and the same'
          ]
        },
        {
          title: 'Prediction vs Time & Learning — диаграмма',
          content: `Ключевая визуализация: ось X — Time & Learning, ось Y — Prediction. Две сходящиеся пунктирные линии от origin (далеко слева) к узкой "горловине" справа. В начале (слева): WILD GUESSES — широкий разброс, грубые догадки о размере рынка, цене, усилии для продажи. В середине: INFORMED ESTIMATES — обоснованные оценки. Справа: RELIABLE FORECASTS — надёжные прогнозы. Цель planning в challenging innovation: MAKE PREDICTIONS BETTER. Это outcome, отражающий learning. Method: find ways to TEST our assumptions rigorously about how actions lead to outcomes.`,
          keyPoints: [
            'Ось X = Time & Learning; Ось Y = Prediction',
            'Слева: Wild Guesses (широкий разброс)',
            'Середина: Informed Estimates',
            'Справа: Reliable Forecasts (узкий разброс)',
            'Цель: сделать predictions лучше',
            'Метод: rigorously test assumptions'
          ],
          interactive: 'prediction-learning-curve'
        },
        {
          title: 'Custom Plan — кастомный план',
          content: `Стандартный план = ресурсы, timeline, targets. CUSTOM PLAN дополнительно содержит: МОДЕЛЬ БИЗНЕСА в форме diagram of cause-and-effect (не таблица — диаграмма); ЭКСПЕРИМЕНТЫ, которые тестируют ключевые допущения и адресуют critical unknowns; БАЗОВУЮ ЛИНИЮ — модель служит и baseline и способом оценки. Оцениваем нашу МОДЕЛЬ, не только числа и targets. Slovo "custom" — потому что включает уникальную для нашей инициативы модель cause-and-effect.`,
          keyPoints: [
            'Custom plan = standard + cause-effect model + experiments',
            'Модель: diagram, не spreadsheet',
            'Эксперименты тестируют critical assumptions',
            'Модель = baseline и evaluation tool',
            'Оцениваем модель, не только targets'
          ]
        },
        {
          title: 'Mapping Cause-and-Effect — диаграмма',
          content: `Пример: A (Advertising spending — action) → B (Trial use — outcome) → C (Sales — subsequent outcome). Дополнительная зависимость: D (Product quality — additional dependency) → C. Это free-form diagram с time delays, типом связи (positive/negative), силой связи (отмечается рядом со стрелками). НЕ для калькуляций — для DISCUSSIONS о том, как бизнес работает. Преимущества: identifies + communicates ключевые связи; characterizes assumptions; creates record понимания бизнеса; evolves со временем как тестируется. Senge (Dean of Scholars on Learning) известен complex feedback loops — но Love подчёркивает: benefit is NOT from complexity, а от того что team identifies critical unknowns to test.`,
          keyPoints: [
            'Diagram, не spreadsheet',
            'A → B → C с additional dependencies',
            'Free-form: time delays, type, strength of relationship',
            'For discussions, не calculations',
            'Evolves over time',
            'Benefit: identify critical unknowns to test'
          ],
          interactive: 'cause-effect-mapping'
        },
        {
          title: 'Critical Unknowns Matrix — 3×3',
          content: `Двумерная карта: ось X — Level of Certainty (Certain → Educated Guess → Wild Guess); ось Y — Consequences For Being Wrong (Minor → Moderate → Severe). LEAST CRITICAL UNKNOWNS (LCU) — нижний-левый угол: Minor + Certain. MOST CRITICAL UNKNOWNS (MCU) — верхний-правый угол: Severe + Wild Guess. Стрелка возрастает от LCU к MCU. Фокусируемся на MCU — make-or-break unknowns. Это priorities for experiments. Тратить ресурсы на проверку things you already certainly know — расточительно; игнорировать things that could break the business — катастрофично.`,
          keyPoints: [
            'Ось X: certainty (Certain → Wild Guess)',
            'Ось Y: severity (Minor → Severe)',
            'LCU (low-left): Minor + Certain — не приоритет',
            'MCU (top-right): Severe + Wild Guess — приоритет №1',
            'MCU = priorities for experiments'
          ],
          interactive: 'critical-unknowns-matrix'
        },
        {
          title: 'Planning Over Time — 6 рекомендаций',
          content: `(1) Iterate, experiment, learn, and adjust at a FAST PACE. (2) Establish a FAST REVIEW CYCLE — meet more frequently than для established business. (3) SEPARATE PLANNING FORUMS для innovative initiatives, с другим темпом и orientation — meetings с executives отделены от established business meetings. Два причины разделения: TEMPO и ORIENTATION. (4) Discuss DATA AND ASSUMPTIONS — innovation side focused на trends и assumptions, established на totals. (5) Focus on TRENDS, revise predictions — okay to revise в инновации (frowned upon в established). (6) Revisions to model — через FORMAL PROCESS, not random. (7) Use cause-and-effect model as CENTRAL ANCHOR в planning process.`,
          keyPoints: [
            '1. Iterate fast',
            '2. Fast review cycle',
            '3. Separate planning forums (tempo + orientation)',
            '4. Discuss data AND assumptions',
            '5. Focus on trends, revise predictions',
            '6. Formal process for model revisions',
            '7. Cause-effect model as central anchor'
          ],
          interactive: 'planning-process-cycle'
        },
        {
          title: 'Takeaway Lesson 8-1',
          content: `Главный вывод: We build experimentation & learning INTO THE FABRIC of the innovation initiative, but in a PROGRAMMED AND PLANNED WAY that is familiar to those who live in results-oriented environments. Это мост между мирами — learning becomes managed, не "squishy". Most executives, который lives в results-oriented environments, can relate to this process as something they CAN manage. That's why you go through all this trouble.`,
          keyPoints: [
            'Experimentation & learning встроены в fabric initiative',
            'НО programmed and planned',
            'Familiar для results-oriented executives',
            'Bridge между мирами',
            'Learning = manageable, не "squishy"'
          ]
        }
      ]
    },
    {
      id: '8-2',
      moduleId: 8,
      title: 'Evaluation for Innovation — Bias Toward Execution Shortfall (Part 2)',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Evaluation = control function',
          content: `Evaluation — это CONTROL FUNCTION менеджмента. Включает: gathering & interpreting data; сравнение с планом и making course corrections; в контексте инновации — CONFIRM OR REVISE the cause-and-effect model из этапа planning. Datapoints — это попытки НАЙТИ ПРАВДУ. Правду о технологии, рынке, происходящем. Это шанс подтвердить или пересмотреть модель. Почему "найти правду"? Потому что organizations are BIASED в их evaluation of data quite often — особенно при инновациях.`,
          keyPoints: [
            'Evaluation = control function (4 functions of mgmt)',
            'Gather + interpret data',
            'Сравнение с планом, course corrections',
            'Confirm/revise cause-effect model',
            'Datapoints = attempts to seek out the truth',
            'Organizations biased in their evaluation'
          ]
        },
        {
          title: 'Why Are We Falling Short? — две категории',
          content: `Outcome не достигает predicted goal в области высокой uncertainty. Sales ниже ожидаемого — мы не уверены почему. Объяснения попадают в две категории. КАТЕГОРИЯ 1 — OUTCOMES TOO LOW → POOR EXECUTION (our problem; нужно работать harder). КАТЕГОРИЯ 2 — PREDICTIONS TOO HIGH → POOR ASSUMPTIONS (prediction was wrong; реальность другая; мы learned something). Critical to learning: обе категории нужно рассматривать DISPASSIONATELY. Direct implications for action разные. Если poor execution — work harder. Если poor assumptions — bring prediction в line с reality.`,
          keyPoints: [
            'Outcomes too low → Poor execution (our problem, work harder)',
            'Predictions too high → Poor assumptions (we learned)',
            'Обе категории — dispassionately',
            'Different implications: harder vs revise',
            'Critical для learning'
          ],
          interactive: 'why-falling-short'
        },
        {
          title: 'Bias toward Poor Execution — most dangerous enemy',
          content: `Dartmouth research (среди прочих): companies в challenging innovation situations СИСТЕМАТИЧЕСКИ значительно чаще делают вывод, что shortfall — результат собственного poor execution. Govindarajan & Trimble называют это "MOST OMNIPRESENT AND DANGEROUS ENEMY OF INNOVATION." Почему devastating: (1) makes it harder for firm to LEARN and adjust to what is actually happening; (2) bias becomes "working harder" but in SAME DIRECTION. Surprise часто OVER-ATTRIBUTED к failed execution — вместо chance to get closer to truth. Мы не делаем те вещи, которые нужно: improve predictions, identify critical unknowns, understand what market/technology really offer.`,
          keyPoints: [
            'Bias: systematic, well-documented',
            'G&T: "most omnipresent and dangerous enemy of innovation"',
            'Devastating: harder to learn',
            'Bias = "working harder" same direction',
            'Surprise over-attributed to failed execution',
            'Miss chance to get closer to truth'
          ],
          interactive: 'bias-impact'
        },
        {
          title: 'Откуда bias? — Performance Culture',
          content: `A product of established operations. Идея "PERFORMANCE CULTURE": менеджеры оцениваются relative to outcomes. Revising forecasts down is akin to defeat (поражение). Это appropriate когда можно делать reliable predictions, среда predictable, target keeps everybody focused and motivated. Functional для established operations. НЕ РАБОТАЕТ для complex innovation, где predictions ненадёжны. Дополнительно — THREAT RIGIDITY RESPONSE (психологическое явление): люди под threat склонны фокусироваться на execution mode, а не learning mode.`,
          keyPoints: [
            'Bias = product of established operations',
            'Performance culture: managers evaluated on outcomes',
            'Revising down = defeat',
            'Appropriate для reliable predictions',
            'НЕ appropriate для complex innovation',
            'Threat rigidity: focus on execution under threat'
          ]
        },
        {
          title: 'GE — prominent example',
          content: `General Electric — известная "culture of meeting your commitments". Огромный успех GE за decades partly attributed to this. НО firm's norms and mindset OVERWHELMINGLY SET in established operations. Bias toward attributing shortfalls to organization deficiencies (rather than learning something different) DEEPLY EMBEDDED в how managers think. Executives uncomfortable когда bias is named — appears to undercut ability to hold people accountable. Это и есть problem to reckon with — потому что planning and evaluation are CENTRAL functions of management.`,
          keyPoints: [
            'GE: famous "culture of meeting commitments"',
            'Бывший успех partly from this',
            'Norms/mindset set в established ops',
            'Bias deeply embedded',
            'Executives uncomfortable when bias named',
            'Appears to undercut accountability'
          ]
        },
        {
          title: 'Response 1 (плохая) — Throw away the plan',
          content: `Когда executives see shortfall, common reaction: (1) AGREEING the plan wasn't consistent with reality; (2) ASSUMING innovation can't be managed; (3) hard to hold people accountable. ЭТО ПЛОХО! Undercuts ability to build a rigorous learning process. "Innovation can't be managed" — phrase that removes planning AND evaluation functions of management из обсуждения. Cannot manage outcomes? Possibly. But CAN manage learning process.`,
          keyPoints: [
            'Common reaction: throw away the plan',
            'Concludes "innovation can\'t be managed"',
            'Undercuts learning process',
            'Removes 2 of 4 management functions',
            'НЕПРАВИЛЬНО'
          ]
        },
        {
          title: 'Response 2 (лучше, но incremental) — Not push aggressive plans',
          content: `Альтернатива: не push aggressive plans в established operations style. Люди generally optimistic об innovation initiatives anyway, и revisions downward likely to be infrequent. Cut bias off at the pass — не оперируй aggressively. ЛУЧШЕ чем Response 1, but ОЧЕНЬ INCREMENTAL solution. Не addresses core problem. Не achieves rigorous learning.`,
          keyPoints: [
            'Альтернатива: не push aggressive plans',
            'People optimistic anyway',
            'Cut bias off at the pass',
            'Лучше Response 1',
            'Но очень incremental — не решает core problem'
          ]
        },
        {
          title: 'Response 3 (правильная) — Accountability for Learning',
          content: `Core idea: YOU CAN hold people accountable in innovation initiatives — but you hold them accountable FOR LEARNING. The question becomes: DID YOU FOLLOW A RIGOROUS LEARNING PROCESS? Это fundamental shift. (1) Moves focus AWAY FROM OUTCOMES to learning — exactly what's needed. (2) Still allows для accountability — executives могут работать через rigorous review. В областях где no critical unknowns (well-informed): act as normal. В critical areas: executive asks "Have we become more confident in our predictions? Have we reduced uncertainty? Have we moved from wild guesses to reliable predictions или хотя бы reasonable estimates?"`,
          keyPoints: [
            'Accountability for LEARNING, not outcomes',
            'Did you follow rigorous learning process?',
            'Shifts focus from outcomes to learning',
            'Still allows accountability',
            'In no-uncertainty areas: act normal',
            'In critical areas: predictions getting better?'
          ],
          interactive: 'accountability-shift'
        },
        {
          title: 'Accountability for Learning — 4 ключевых вопроса',
          content: `(1) DID THE LEADER take planning seriously — rather than disengaging from the plan? Чтобы plan оставался baseline. (2) DID THE LEADER maintain and update a CAUSE-AND-EFFECT MODEL through an evidence-based process? (3) DID PREDICTIONS GET BETTER, especially for critical unknowns? (4) DID THE LEADER MAKE SURE THE TEAM understood the model & critical unknowns, that the team reacted to new information promptly, and that the team maintained a LEARNING MINDSET? Это system of valuation, отвечающая нуждам innovation initiative, адресующая bias, позволяющая руководителям сохранять подотчётность в этих важных областях.`,
          keyPoints: [
            '1. Leader took planning seriously?',
            '2. Maintained/updated cause-effect model evidence-based?',
            '3. Predictions got better (esp. critical unknowns)?',
            '4. Team understood + reacted + learning mindset?',
            'System of valuation для innovation',
            'Адресует bias, сохраняет accountability'
          ],
          interactive: 'accountability-questions'
        },
        {
          title: 'Эта система непростая — fragile but worth it',
          content: `Love признаёт: "It's going to be fragile at first and it's going to take constant work." Regular systems TAKE OVER BY DEFAULT — whether или not separate unit (та же ambidexterity scenario из Module 5). Они stifle attempts to learn. Insight: BUILD EXPERIMENTATION INTO THE PLANNING AND EVALUATION SYSTEM ITSELF. Plan in experiments around model of reality. Evaluate results with LEARNING (не results) orientation. Take rigorous approach all the way through. "Innovation can't be managed" — phrase that removes 2 of 4 management functions. WRONG. You CAN manage innovation initiatives — planning/evaluation just need to be ADJUSTED, AUGMENTED, CUSTOMIZED — not ignored.`,
          keyPoints: [
            'System fragile at first, требует constant work',
            'Regular systems take over by default',
            'Adjacent ambidexterity scenario (Module 5)',
            'Insight: build experimentation INTO system',
            '"Innovation can\'t be managed" = wrong frame',
            'Adjust/augment/customize, не ignore'
          ]
        }
      ]
    },
    {
      id: '8-3',
      moduleId: 8,
      title: 'Innovation Across Firm Boundaries — Virtual Firms & Open Innovation',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Make-or-buy decision и инновации',
          content: `До сих пор обсуждали innovation ВНУТРИ firm boundaries. Now — ACROSS firm boundaries. Всё более важный аспект. Формы: alliances, joint ventures, open innovation (Chesbrough), user-driven innovation. Все можно объединить под "VIRTUAL APPROACHES TO ORGANIZING". В классике: make-or-buy decision = make (внутри) vs buy (снаружи). Обычно обсуждается на основе cost, flexibility, quality. В innovation context — другие приоритеты: New technologies and markets are UNCERTAIN & DYNAMIC. Working with other firms offers PROMISE OF GREATER RESPONSIVENESS to changing markets/technologies. BUT: Concerns about COORDINATION, INFORMATION SHARING, AND CONTROL arise that can UNDERCUT those benefits.`,
          keyPoints: [
            'Make-or-buy: классическое стратегическое решение',
            'В innovation: другие критерии',
            'Markets/tech uncertain & dynamic',
            'Working with others = responsiveness',
            'Но: coordination, info sharing, control concerns',
            'Trade-off central'
          ]
        },
        {
          title: 'Виды партнёрств across boundaries',
          content: `JOINT VENTURES & ALLIANCES: firms agree to cooperate through SHARING SPECIFIC RESOURCES and SETTING UP SEPARATE ORGANIZATION. В JV может быть SHARED EQUITY. CONTRACTUAL AGREEMENTS: other firms act as SUPPLIERS, но supplier and buyer work TOGETHER CLOSELY to develop new products/services. Capitalize on JOINT CAPABILITIES. Глубже стандартного поставщика. VIRTUAL APPROACHES TO ORGANIZING: innovating through BUILDING A VIRTUAL FIRM. Independent firms act as A COHERENT SYSTEM — an innovation system in this case. Все эти формы — virtual approaches.`,
          keyPoints: [
            'Joint Ventures & Alliances: cooperation + separate org + shared equity',
            'Contractual Agreements: deep supplier alignment',
            'Virtual Approaches: independent firms as coherent system',
            'Все — virtual approaches',
            'Range от deeper supplier до full ecosystem'
          ],
          interactive: 'partnership-types'
        },
        {
          title: 'Why a Virtual Approach? — два преимущества',
          content: `RESOURCES: firms can POOL their resources & capabilities to access opportunities that would be relatively INACCESSIBLE for single firm. Одна имеет strong position в market, другая разрабатывает new technology — put together → move quickly. ABILITY TO TAKE RISK: more recent insight. INDEPENDENT firms (startups) characterized by: TAKING MORE RISKS, MOVING FASTER, WORKING HARDER to succeed в new market. People в startup имеют stronger incentives (equity → могут разбогатеть), survival mode мотивирует. Сравните с integrated firm: career boost only, no get rich. Bottom line: through virtual approach can gain SUPERIOR RESPONSIVENESS к changing technologies и markets.`,
          keyPoints: [
            'Преимущество 1: Resources — pool to access inaccessible',
            'Преимущество 2: Ability to take risk',
            'Startups: equity → get rich → motivation',
            'Survival mode мотивирует риски',
            'Integrated firm: только career boost',
            'Bottom line: superior responsiveness'
          ],
          interactive: 'virtual-advantages'
        },
        {
          title: 'Integrated to Virtual — спектр',
          content: `Спектр организационных форм от integrated к virtual: (1) INTEGRATED CORPORATION — всё внутри. (2) CORPORATION WITH AUTONOMOUS DIVISIONS — подразделения с автономией. (3) JOINT VENTURE — совместное предприятие с shared equity. (4) ALLIANCE — менее формальная структура. (5) VIRTUAL COMPANY — экосистема независимых firms. По этой оси: INCENTIVE TO TAKE RISKS INCREASES от Integrated к Virtual. Также: ABILITY TO RESOLVE CONFLICTS AND COORDINATE ACTIVITIES DECREASES от Integrated к Virtual. По второй оси Decentralized → Centralized: от Virtual к Integrated. TRADE-OFF фундаментальный.`,
          keyPoints: [
            '5-уровневый спектр: Integrated → Autonomous Divisions → JV → Alliance → Virtual',
            'Risk-taking incentive увеличивается → Virtual',
            'Coordination ability уменьшается → Virtual',
            'Trade-off: risk-taking vs coordination',
            'Decentralized (Virtual) ↔ Centralized (Integrated)'
          ],
          interactive: 'integrated-virtual-spectrum'
        },
        {
          title: 'Как integrated firms решают координацию?',
          content: `Через три механизма: HIERARCHY (иерархия) — boss who adjudicates. CULTURE — common way of looking at things. TEAMS — integrating mechanisms (как в Module 7). Эти механизмы не perfect, имеют drawbacks, но STRONGER coordinating mechanism, STRONGER way of sharing information чем у independent firms. Это и есть преимущество integrated подхода — в обмен на risk-taking ability.`,
          keyPoints: [
            '3 механизма: Hierarchy, Culture, Teams',
            'Hierarchy: boss adjudicates',
            'Culture: common worldview',
            'Teams: integrating mechanisms (Module 7)',
            'Stronger coordination + info sharing',
            'Trade-off: меньше risk-taking incentive'
          ]
        },
        {
          title: 'Autonomous vs Systemic Innovations — критическое различение',
          content: `Чтобы решить, когда virtual right, нужно distinguish между типами инноваций. AUTONOMOUS INNOVATIONS: can be INDEPENDENT of others. Bolt-on — turbocharger for auto engine, disk drive for computer system (slips in/out of slot). Interface STANDARDIZED and CODIFIED. Less need for coordination → VIRTUAL APPROACH ATTRACTIVE. Каждая firm может сделать своё. SYSTEMIC INNOVATIONS: more INTERDEPENDENT. Components fit LIKE A GLOVE. Polaroid + Instant Photography — new film + camera that processes film particular way — NOT SEPARABLE. INTEGRATION HAS ADVANTAGE. Great deal of coordination + sharing sensitive information needed. Hard to gain commitment and trust in virtual system.`,
          keyPoints: [
            'Autonomous: independent, bolt-on (turbocharger, disk drive)',
            'Interface standardized, codified',
            'Virtual works: каждая firm своё',
            'Systemic: interdependent, fit like glove',
            'Polaroid + Instant Photography example',
            'Integration has advantage',
            'Hard to coordinate в virtual'
          ],
          interactive: 'autonomous-vs-systemic'
        },
        {
          title: 'Control of Tech Direction & Capture Value',
          content: `Дополнительный фактор beyond autonomous/systemic: CONTROL OF TECHNOLOGICAL DIRECTION + ABILITY TO CAPTURE VALUE OVER TIME. INTEGRATED firms can make decisions that CONNECT these two factors — direction of technology, how capturing value. В VIRTUAL SYSTEM, каждая firm is making them ON ITS OWN. Individual firm — even central firm — MAY LOSE that control or ability to capture value. Этот фактор еще усиливает case для integrated при systemic innovations.`,
          keyPoints: [
            'Дополнительный фактор: control of tech direction',
            'Связан: ability to capture value',
            'Integrated: connects these two factors',
            'Virtual: каждая firm — on its own',
            'Risk: lose control + value capture',
            'Reinforces integrated для systemic'
          ]
        },
        {
          title: 'Types of Innovation — 2×2 матрица',
          content: `Двумерная матрица решения: КОЛОННЫ = Autonomous / Systemic; СТРОКИ (снизу вверх): Capabilities exist outside / Capabilities must be created. Ячейки (clockwise from top-left): GO VIRTUAL (Autonomous + Capabilities outside) — strong case, каждая firm своё, fast. ALLY WITH CAUTION (Systemic + outside) — можно ally но carefully. BRING IN-HOUSE (Systemic + must be created) — integrated essential. ALLY OR BRING IN-HOUSE (Autonomous + must be created) — каждая опция применима. Pure cases: top-left и bottom-right. Top-right и bottom-left — intermediate.`,
          keyPoints: [
            '2×2: Autonomous/Systemic × Exist outside/Must be created',
            'Top-left: GO VIRTUAL (auto+outside)',
            'Top-right: ALLY WITH CAUTION (sys+outside)',
            'Bottom-left: ALLY OR BRING IN-HOUSE (auto+create)',
            'Bottom-right: BRING IN-HOUSE (sys+create)',
            'Pure cases: top-left + bottom-right',
            'Decision framework'
          ],
          interactive: 'types-innovation-matrix'
        },
        {
          title: 'Пример: IBM Personal Computer',
          content: `ПОЛОЖИТЕЛЬНАЯ сторона virtual: 1981 IBM launches PC. Used virtual approach — outsourced major components. Microprocessor through INTEL, OS through MICROSOFT. Product hit market FAST, LOW INVESTMENT. Very responsive — Intel и Microsoft kept innovating. By 1985: 41% MARKET SHARE. ОТРИЦАТЕЛЬНАЯ сторона: IBM lost control of technology and ability to capture value. Competitors duplicated assets because architecture was OPEN. Microsoft и Intel eroded IBM's position — their contributions became as important as IBM's. Late 80s: IBM tried take control back через OS/2 (proprietary). OS/2 failed; Windows succeeded. Market share declined to 7%. Then sold PC division. Урок: virtual worked initially, weakness long-term когда IBM lost control.`,
          keyPoints: [
            'IBM PC 1981: outsourced Intel + Microsoft',
            'Fast launch, low investment, responsive',
            '41% share by 1985',
            'Architecture open → competitors duplicate',
            'Microsoft + Intel — eroded IBM position',
            'OS/2 (proprietary) failed; Windows won',
            'Share dropped to 7%, sold PC',
            'Урок: virtual short-term win, long-term lose control'
          ],
          interactive: 'ibm-pc-timeline'
        },
        {
          title: 'Takeaway Lesson 8-3',
          content: `Using ONLY virtual approach is HIGH RISK. Use a HYBRID of virtual & integrated organization to have STAYING POWER. Be at the CENTER OF A NETWORK, leveraging your OWN capabilities. Распознать что process developed over time и what happens now will change once you create ecosystem. Toyota и Nike — examples firms successful long-term using this approach. Distinction autonomous/systemic critical — recognition that this process developed over time, и what happens now will change once you create ecosystem.`,
          keyPoints: [
            'Только virtual = high risk',
            'Hybrid virtual + integrated → staying power',
            'Be at CENTER of network',
            'Leverage own capabilities',
            'Toyota, Nike — examples',
            'Process develops over time'
          ]
        }
      ]
    },
    {
      id: '8-4',
      moduleId: 8,
      title: 'Advice for Alliances and Joint Ventures',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Tough statistics — 50%+ failure',
          content: `AT LEAST HALF of alliances and joint ventures FAIL to achieve their objectives. Many failures occur NOT because of flawed strategy, but because FAILED IN IMPLEMENTATION. Источники анализа: "Defining the Social Network of a Strategic Alliance" by Michael Hutt (Sloan Management Review); "Launching a World-Class Joint Venture" by James Bamford, David Ernst, David Fubini (HBR). Alliances и JV — common подходы для enabling/accelerating innovation, но challenging entities to manage effectively.`,
          keyPoints: [
            '50%+ alliances/JV fail to achieve objectives',
            'Failures NOT due to flawed strategy mostly',
            'Failures due to implementation',
            'Sources: Hutt (Sloan), Bamford/Ernst/Fubini (HBR)',
            'Common but challenging'
          ]
        },
        {
          title: 'Why is implementation problematic? — 4 причины',
          content: `(1) MISALIGNMENT IN STRATEGIC GOALS. (2) PROBLEMS SHARING NEEDED RESOURCES. (3) DIFFICULTIES GAINING COMMITMENT BY EMPLOYEES INVOLVED. (4) LACK OF TRUST BETWEEN EMPLOYEES IN DIFFERENT PARENT FIRMS. Larger problem: ECONOMIC и STRATEGIC considerations обычно at the fore при создании alliance/JV. НО organization design and human interaction issues — central to implementation — OFTEN UNDER-EMPHASIZED. Alliances и JV ОЧЕНЬ ЧАСТО UNDER-DESIGNED, INSUFFICIENT ATTENTION TO ORGANIZATION BUILDING.`,
          keyPoints: [
            '1. Misalignment in strategic goals',
            '2. Problems sharing resources',
            '3. Difficulties getting commitment',
            '4. Lack of trust между parent firms',
            'Economic/strategic emphasized; org/human under-emphasized',
            'Alliances under-designed'
          ],
          interactive: 'why-fail-reasons'
        },
        {
          title: 'Design Elements — 3 dimensions',
          content: `Дизайн аспект alliances/JV содержит ТРИ элемента: (1) STRATEGIC ALIGNMENT — выравнивание стратегий. (2) RESOURCE SHARING — разделение ресурсов. (3) GOVERNANCE & DECISION-MAKING — управление и принятие решений. Plus organization building — staffing, culture, leadership. Каждый dimension имеет конкретные pitfalls и recommendations.`,
          keyPoints: [
            'Design = 3 dimensions',
            '1. Strategic Alignment',
            '2. Resource Sharing',
            '3. Governance & Decision-making',
            'Plus: organization building',
            'Каждый dimension — own pitfalls'
          ],
          interactive: 'three-design-dimensions'
        },
        {
          title: 'Strategic Alignment — глубже surface',
          content: `Usually central to reason firms participate в alliance/JV. Strategic opportunity identified, accessed via two firms working together. BUT: firms involved имеют own interests. Surface-level agreement around strategic opportunity → каждая firm имеет DIFFERENT IDEA где она идёт с alliance. Trouble: actually start operating, develop/market products → need DEEP AGREEMENT on strategic vision. РЕКОМЕНДАЦИЯ #1: GO FURTHER as part of the deal-making process. Develop STRONG, DETAILED BUSINESS PLAN as part of pre-closing process. Business plan acceptable to a VENTURE CAPITALIST is the standard. Key issues in product direction & marketing CAN be resolved in advance. These issues might COMPLETELY STALL the alliance if alignment is only at surface level.`,
          keyPoints: [
            'Strategic alignment surface-level — обычная ошибка',
            'Каждая firm has own interests, different ideas',
            'Need DEEP agreement on strategic vision',
            'Рекомендация: detailed business plan PRE-CLOSING',
            'VC-acceptable standard',
            'Product direction + marketing — resolved in advance'
          ]
        },
        {
          title: 'Resource Sharing — interdependencies',
          content: `Alliances/JV constituted by SHARING RESOURCES: capital, technology, people, customer access across parent firms. Эти interdependencies могут быть NUMEROUS и COMPLEX. TAKEN FOR GRANTED on one side or other — каждая parent firm thinks other will provide. OFTEN NOT SPECIFIED IN-DEPTH IN ADVANCE → POISONOUS. Opportunities to derail effort potential — one side assumed needed resource would be forthcoming, other didn't see it that way. РЕКОМЕНДАЦИЯ #2: Make STRONG EFFORT to IDENTIFY shared resources & interdependencies, reach SHARED UNDERSTANDING of how handled. MINIMIZE UNNEEDED INTERDEPENDENCIES. Having CONTROL of resources for innovation efforts CENTRAL. Recall MAGNETIC PULL mainstream efforts have on resources — here mainstream = PARENT FIRMS' OWN EFFORTS. If any doubt — PULL RESOURCE INTO alliance/JV.`,
          keyPoints: [
            'Resources: capital, tech, people, customers across firms',
            'Interdependencies complex',
            'Often taken for granted, не specified',
            'Poisonous when not detailed',
            'Рекомендация: identify, shared understanding',
            'Minimize unneeded interdependencies',
            'Magnetic pull от parent firms\' mainstream',
            'When in doubt: pull INTO alliance'
          ]
        },
        {
          title: 'Governance — beyond contracts',
          content: `WHO HAS THE RIGHTS to make key decisions? Touched on at deal-making, но at TOP LEVEL — board composition, veto rights. NOT processes for streamlining day-to-day decisions on key operating и strategic issues. As alliance/JV operates, ISSUES DEVELOP that weren't at forefront earlier. With innovation: UNCERTAINTY — pricing, product direction, resources, failure/success itself — будут coming up at different times. Need EFFECTIVE PROMPT DECISIONS — at least THREE parties involved (alliance/JV + два parent firms). РЕКОМЕНДАЦИЯ #3: THINK THROUGH & STREAMLINE decision-making beyond contractual mechanisms. AGREE где alliance/JV has AUTONOMY и где NOT. Где not — HOW decisions will actually be made in practice. Set up REGULAR MEETINGS at different times (не just quarterly or twice-a-year) для operating purposes.`,
          keyPoints: [
            'Governance: who decides what',
            'Contracts cover top level (board, veto)',
            'Не day-to-day streamlined decisions',
            'Innovation: uncertainty → many issues over time',
            '3 parties: alliance + 2 parents',
            'Рекомендация: streamline beyond contracts',
            'Agree autonomy vs not autonomy',
            'Regular meetings beyond quarterly'
          ]
        },
        {
          title: 'Organization Building — Challenge 1: Attract talent',
          content: `Шелл alliance/JV нужно POPULATE. Build ability to function as ENTITY ON ITS OWN, с own identity и purpose. CHALLENGE 1: Attract KEY TALENTED PEOPLE. Surprise: lots of excitement accompanies innovation efforts, но alliances/JV в "NO MAN'S LAND" — they are BETWEEN parent firms. Career success determined в parent firms в employees' minds. Need to make stronger people WANT to work at alliance/JV. Often: alliances/JV UNDERSTAFFED — staff who don't have strongest opportunities within parents. → Won't get strongest outcomes. РЕКОМЕНДАЦИЯ: Start with LEADERSHIP. Talented motivational leader can build motivation among potential recruits about venture.`,
          keyPoints: [
            'Build ability to function on its own',
            'Challenge: attract talented people',
            'Alliances in "no man\'s land"',
            'Career success в parent firms',
            'Often: understaffed, weak staff',
            'Solution: start с motivational leader',
            'Builds excitement, attracts talent'
          ],
          interactive: 'organization-building'
        },
        {
          title: 'Organization Building — Challenges 2 & 3',
          content: `CHALLENGE 2: SET CLEAR EXPECTATIONS ON COMMITMENT. What PERCENT of their time? For HOW LONG? People understand what's being asked. Без clarity — confusion, half-hearted commitment. CHALLENGE 3: BUILD IN INCENTIVES to make key players comfortable in new venture. FORMAL ways: rewards when milestone reached. INFORMAL ways: commitments from top players in each partner firm about how valuable this alliance may be для parent firm и thus для key players' success. Why this matters: themes — leadership, motivation, role clarity — basic в org design course in general. Emphasis here: с alliance/JV, ОЧЕНЬ много focus on process of making the deal that organizations GET BEHIND THE EIGHT BALL on designing/building the org.`,
          keyPoints: [
            'Challenge 2: clear commitment expectations (% time, duration)',
            'Challenge 3: incentives — formal + informal',
            'Formal: rewards at milestones',
            'Informal: top players commit to value',
            'Themes basic в org design',
            'But alliance/JV: too much focus on deal',
            'Get behind the eight ball on org'
          ]
        }
      ]
    },
    {
      id: '8-5',
      moduleId: 8,
      title: 'Module 8 Summary and Synthesis',
      professor: 'Prof. Geoff Love',
      sections: [
        {
          title: 'Логическая цепочка Module 8',
          content: `Module 8 завершает картину execution side of innovation, добавляя Planning и Controlling (Evaluation) к Organizing и Leading (Modules 5-7). Lesson 8-1 — Planning переориентируется на experimentation и learning (cause-effect mapping, critical unknowns matrix, custom plan). Lesson 8-2 — Evaluation адресует bias toward concluding shortfall is poor execution через accountability for LEARNING (4 ключевых вопроса). Lesson 8-3 — расширение boundaries: virtual vs integrated, autonomous vs systemic innovations, 2×2 matrix для решения, IBM PC как пример обоих сторон. Lesson 8-4 — практические recommendations для alliances/JV: 3 design dimensions + organization building.`,
          keyPoints: [
            '8-1: Planning переориентируется на learning',
            '8-2: Evaluation — accountability for learning',
            '8-3: Boundaries — virtual vs integrated',
            '8-4: Advice для alliances/JV',
            'Завершает execution side of innovation'
          ],
          interactive: 'module8-concept-map'
        },
        {
          title: 'Ten Key Takeaways',
          content: `(1) Challenging innovation = substantial uncertainty, critical assumptions; planning/evaluation должны быть переориентированы на learning. (2) Cause-and-effect model — центральный артефакт planning, free-form diagram. (3) Critical Unknowns Matrix (3×3): severity × certainty; focus на MCU. (4) Two learning challenges: complex situations + "squishy" goal. (5) Learning-oriented firm vs Results-oriented firm — firm that learns fastest wins. (6) Bias toward poor execution = "most omnipresent enemy of innovation" (G&T). (7) Accountability for Learning — alternative system: rigorous learning process? predictions better? (8) Virtual approach: responsiveness + risk-taking, но loses control + capture value. (9) Autonomous vs Systemic — critical distinction; autonomous → virtual; systemic → integrated. (10) Alliances/JV fail 50%+ — implementation, не strategy. 3 design dimensions + organization building.`,
          keyPoints: [
            '1. Переориентация на learning под uncertainty',
            '2. Cause-effect model — central artifact',
            '3. Critical Unknowns Matrix → MCU focus',
            '4. Two learning challenges',
            '5. Learning-oriented vs Results-oriented',
            '6. Bias = "most omnipresent enemy"',
            '7. Accountability for Learning',
            '8. Virtual: responsiveness vs control',
            '9. Autonomous vs Systemic critical',
            '10. Alliances fail in implementation'
          ]
        },
        {
          title: 'Practical Recommendations',
          content: `(1) Make "learning" a compelling, PLANNED goal — not "squishy". (2) Build CUSTOM PLAN with cause-effect diagram + experiments tied к critical unknowns. (3) Establish SEPARATE PLANNING FORUMS for innovation initiatives с own tempo и orientation. (4) Discuss DATA AND ASSUMPTIONS — both equally important. (5) Hold leaders accountable for LEARNING — through rigorous learning process. (6) Distinguish AUTONOMOUS vs SYSTEMIC innovations BEFORE choosing virtual или integrated. (7) Do NOT use ONLY virtual approach — high risk. Be at CENTER of a network, leveraging own capabilities. (8) Develop DETAILED business plan для alliances BEFORE closing. (9) IDENTIFY shared resources/interdependencies in advance; pull в alliance when in doubt. (10) Start with strong, motivational LEADERSHIP for alliances/JV.`,
          keyPoints: [
            'Learning = compelling planned goal',
            'Custom plan: cause-effect + experiments',
            'Separate planning forums',
            'Data AND assumptions',
            'Accountability for learning',
            'Autonomous vs systemic decision',
            'Don\'t use only virtual',
            'Detailed plan pre-closing',
            'Identify resources in advance',
            'Leadership-first для alliances'
          ]
        },
        {
          title: 'Связь с остальным курсом',
          content: `Module 5 (амбидекстрия) — общий фрейм: separate aligned units. Module 6 (типология) — диагностика: cell A/B/C/D. Module 7 (команды) — операционный toolkit: Functional/Lightweight/Heavyweight/Autonomous + dedicated team partnership. Module 8 (planning, evaluation, boundaries) — завершающие функции менеджмента (Planning + Controlling) + расширение boundaries за пределы firm. Govindarajan & Trimble's framework пронизывает Modules 7 и 8: Innovation = Ideas + Leader + Team + PLAN. Module 7 — Team. Module 8 — Plan. Plus добавлен фрейм Chesbrough Open Innovation и autonomous/systemic distinction для решений across boundaries.`,
          keyPoints: [
            'Module 5: общий фрейм (амбидекстрия)',
            'Module 6: диагностика (matrix)',
            'Module 7: операционный toolkit (teams)',
            'Module 8: Planning + Evaluation + Boundaries',
            'G&T: Innovation = Ideas + Leader + Team + Plan',
            'Module 7 = Team, Module 8 = Plan',
            'Chesbrough open innovation + autonomous/systemic'
          ]
        },
        {
          title: 'Завершающая мысль',
          content: `Module 8 завершает картину EXECUTION SIDE OF INNOVATION. Если literature и practice исторически overweight IDEAS, то этот модуль восстанавливает баланс — daring to plan, daring to evaluate, daring to organize across boundaries — но с признанием, что innovation must be MANAGED DIFFERENTLY, не как established operations. "Innovation can't be managed" — phrase that wrongly removes Planning и Evaluation functions. CAN BE MANAGED — просто differently. Финальный takeaway: be hard-nosed about LEARNING, не results. Build experimentation INTO fabric of initiative — programmed, planned. Recognize autonomous vs systemic. Be at center of network. Detail alliance plans before closing. Start with leadership.`,
          keyPoints: [
            'Module 8 завершает execution side',
            'Восстанавливает баланс: execution >= ideas',
            '"Innovation can\'t be managed" = wrong',
            'Can be managed — differently',
            'Final: hard-nosed about LEARNING',
            'Programmed experimentation в fabric',
            'Be at center of network',
            'Detail plans before closing'
          ]
        }
      ]
    }
  ]
}
