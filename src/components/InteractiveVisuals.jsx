import * as M1 from './visuals/module1'
import * as M2 from './visuals/module2'
import * as M3 from './visuals/module3'
import * as M4 from './visuals/module4'
import * as M5 from './visuals/module5'
import * as M6 from './visuals/module6'
import * as M7 from './visuals/module7'
import * as M8 from './visuals/module8'

const visualMap = {
  // Lecture 1-1
  's-curve-explorer': M1.SCurveExplorer,
  'adoption-bell-curve': M1.AdoptionBellCurve,
  'takeoff-visualizer': M1.TakeoffVisualizer,
  'innovation-drivers-loop': M1.InnovationDriversLoop,
  // Lecture 1-2
  'plc-explorer': M1.PLCExplorer,
  'growth-vs-maturity': M1.GrowthVsMaturity,
  'sales-takeoff-timeline': M1.SalesTakeoffTimeline,
  'historical-plc-chart': M1.HistoricalPLCChart,
  'plc-adoption-mapping': M1.PLCAdoptionMapping,
  // Lecture 1-3
  'firm-life-cycle': M1.FirmLifeCycleExplorer,
  'firm-vs-sales-takeoff': M1.FirmVsSalesTakeoff,
  'patent-to-commercialization': M1.PatentToCommercialization,
  'takeoff-gap-explorer': M1.TakeoffGapExplorer,
  // Lecture 1-4
  'chasm-visualization': M1.ChasmVisualization,
  'bowling-alley': M1.BowlingAlleyStrategy,
  'mvp-vs-total-product': M1.MVPvsTotalProduct,
  'chasm-success-funnel': M1.ChasmSuccessFunnel,
  // Lecture 1-5
  'prospect-value-function': M1.ProspectValueFunction,
  'diminishing-sensitivity': M1.DiminishingSensitivity,
  'loss-aversion': M1.LossAversionDemo,
  'nine-x-effect': M1.NineXEffect,
  'gains-losses-bundle': M1.GainsLossesBundle,
  // Lecture 2-1
  'disruption-trajectory': M2.DisruptionTrajectory,
  'sustaining-vs-disruptive': M2.SustainingVsDisruptive,
  // Lecture 2-2
  'disruption-timeline': M2.DisruptionTimeline,
  'telegraph-telephone-coexistence': M2.TelegraphTelephoneCoexistence,
  // Lecture 2-3
  'cannibalization-dilemma': M2.CannibalizationDilemma,
  'kodak-digital-timeline': M2.KodakDigitalTimeline,
  'steel-disruption': M2.SteelDisruption,
  // Lecture 2-4
  'innovation-framework': M2.InnovationFramework,
  'org-evolution-stages': M2.OrgEvolutionStages,
  'ecosystem-risk-calculator': M2.EcosystemRiskCalculator,
  // Lecture 2-5
  'retail-evolution': M2.RetailEvolution,
  'disruption-components': M2.DisruptionComponents,
  // Lecture 2-6
  'ibm-timeline': M2.IBMTimeline,
  'pc-value-shift': M2.PCValueShift,
  // Module 3
  'open-vs-closed-innovation': M3.OpenVsClosedInnovation,
  'technology-market-flow': M3.TechnologyMarketFlow,
  'value-chain-explorer': M3.ValueChainExplorer,
  'apple-vs-samsung': M3.AppleVsSamsung,
  'value-capture-mechanisms': M3.ValueCaptureMechanisms,
  'ip-economics': M3.IPEconomics,
  'discrete-vs-complex': M3.DiscreteVsComplex,
  'tech-vs-product-market': M3.TechVsProductMarket,
  'moderna-vs-biontech': M3.ModernaVsBiontech,
  'module3-concept-map': M3.Module3ConceptMap,
  'pharma-value-chain': M3.PharmaValueChain,
  'patent-effectiveness-chart': M3.PatentEffectivenessChart,
  'value-capture-framework': M3.ValueCaptureFramework,
  'make-buy-sell-framework': M3.MakeBuySellFramework,
  'strategic-assessment-tool': M3.StrategicAssessmentTool,
  // Module 4
  'platform-vs-value-chain': M4.PlatformVsValueChain,
  'platform-characteristics': M4.PlatformCharacteristics,
  'platform-examples-compare': M4.PlatformExamplesCompare,
  'value-chain-vs-platform-flow': M4.ValueChainVsPlatformFlow,
  'innovation-vs-transaction': M4.InnovationVsTransaction,
  'standards-control-flow': M4.StandardsControlFlow,
  'betamax-vs-vhs': M4.BetamaxVsVHS,
  'network-effects-sim': M4.NetworkEffectsSimulator,
  'platform-competition-timeline': M4.PlatformCompetitionTimeline,
  'hagiu-framework': M4.HagiuFramework,
  'pricing-strategies-compare': M4.PricingStrategiesCompare,
  'switching-costs-spectrum': M4.SwitchingCostsSpectrum,
  'uber-lyft-multihoming': M4.UberLyftMultihoming,
  'module4-concept-map': M4.Module4ConceptMap,
  // Module 5: Managing Innovation Initiatives
  's-curve-animated': M5.SCurveAnimatedEras,
  'scurve-three-eras': M5.SCurveAnimatedEras,
  'ballpoint-vs-transistor': M5.BallpointVsTransistor,
  'four-paradoxes': M5.FourParadoxes,
  'org-design-diamond': M5.OrgDiamond,
  'inertia-types': M5.InertiaTypesViz,
  'scurve-three-diamonds': M5.SCurveThreeDiamondsViz,
  'ambidextrous-hands': M5.AmbidextrousHandsViz,
  'undermining-mechanisms': M5.UnderminingMechanisms,
  'two-routes-ambidexterity': M5.TwoRoutesAmbidexterity,
  'loose-tight-culture': M5.LooseTightCultureViz,
  'leadership-approaches': M5.LeadershipApproachesViz,
  'four-directions': M5.FourDirectionsViz,
  'module5-concept-map': M5.Module5ConceptMap,
  // Module 6: Types of Innovation
  'module6-overview': M6.Module6Overview,
  'disk-drive-trajectory': M6.DiskDriveTrajectory,
  'innovators-dilemma': M6.InnovatorsDilemma,
  'two-traps': M6.TwoTraps,
  'five-recommendations': M6.FiveRecommendations,
  'capabilities-three-parts': M6.CapabilitiesThreeParts,
  'three-routes': M6.ThreeRoutes,
  'innovation-matrix-2x2': M6.InnovationMatrix2x2,
  'acquisition-decision-tree': M6.AcquisitionDecisionTree,
  'wolcott-lippitz-matrix': M6.WolcottLippitzMatrix,
  'four-models-comparison': M6.FourModelsComparison,
  'module6-concept-map': M6.Module6ConceptMap,
  // Module 7: Product Development Teams & Dedicated Team Partnerships
  'module7-overview': M7.Module7Overview,
  'four-team-types': M7.FourTeamTypes,
  'heavyweight-structure': M7.HeavyweightStructure,
  'team-comparison-table': M7.TeamComparisonTable,
  'crossfunctional-vs-functional': M7.CrossfunctionalVsFunctional,
  'leader-capabilities': M7.LeaderCapabilities,
  'sponsor-governance': M7.SponsorGovernance,
  'innovation-formulas': M7.InnovationFormulas,
  'performance-engine': M7.PerformanceEngine,
  'dedicated-team-architecture': M7.DedicatedTeamArchitecture,
  'overestimation-trap': M7.OverestimationTrap,
  'three-separation-reasons': M7.ThreeSeparationReasons,
  'insider-bias-tradeoff': M7.InsiderBiasTradeoff,
  'zero-based-design': M7.ZeroBasedDesign,
  'four-level-partnership': M7.FourLevelPartnership,
  'module7-concept-map': M7.Module7ConceptMap,
  // Module 8: Planning, Evaluation & Innovation Across Firm Boundaries
  'module8-overview': M8.Module8Overview,
  'scurve-planning-context': M8.SCurvePlanningContext,
  'learning-challenges': M8.LearningChallenges,
  'learning-vs-results-firm': M8.LearningVsResultsFirm,
  'prediction-learning-curve': M8.PredictionLearningCurve,
  'cause-effect-mapping': M8.CauseEffectMapping,
  'critical-unknowns-matrix': M8.CriticalUnknownsMatrix,
  'planning-process-cycle': M8.PlanningProcessCycle,
  'why-falling-short': M8.WhyFallingShort,
  'bias-impact': M8.BiasImpact,
  'accountability-shift': M8.AccountabilityShift,
  'accountability-questions': M8.AccountabilityQuestions,
  'partnership-types': M8.PartnershipTypes,
  'virtual-advantages': M8.VirtualAdvantages,
  'integrated-virtual-spectrum': M8.IntegratedVirtualSpectrum,
  'autonomous-vs-systemic': M8.AutonomousVsSystemic,
  'types-innovation-matrix': M8.TypesInnovationMatrix,
  'ibm-pc-timeline': M8.IBMPCTimeline,
  'why-fail-reasons': M8.WhyFailReasons,
  'three-design-dimensions': M8.ThreeDesignDimensions,
  'organization-building': M8.OrganizationBuilding,
  'module8-concept-map': M8.Module8ConceptMap,
}

export default function InteractiveVisual({ type }) {
  const Component = visualMap[type]
  if (!Component) return null
  return <Component />
}
