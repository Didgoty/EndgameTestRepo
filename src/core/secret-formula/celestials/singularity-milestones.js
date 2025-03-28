// Used for UI purposes to give different theming for different kinds of upgrades
export const LAITELA_UPGRADE_DIRECTION = {
  SELF_BOOST: 0,
  BOOSTS_MAIN: 1,
  BOOSTS_LAITELA: 2
};

export const singularityMilestones = {
  // Infinite
  continuumMult: {
    start: 1,
    repeat: 125,
    increaseThreshold: 20,
    limit: Infinity,
    description: "Continuum percentage multiplier",
    effect: completions => completions * 0.03,
    effectFormat: x => formatX(1 + x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkMatterMult: {
    start: 2,
    repeat: 20,
    increaseThreshold: 30,
    limit: Infinity,
    description: "Dark Matter production multiplier",
    effect: completions => Math.pow(1.5, completions),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkEnergyMult: {
    start: 3,
    repeat: 90,
    increaseThreshold: 10,
    limit: Infinity,
    description: "Dark Energy production multiplier",
    effect: completions => Math.pow(2, completions),
    effectFormat: x => formatX(x, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkDimensionCostReduction: {
    start: 4,
    repeat: 40,
    increaseThreshold: 25,
    limit: Infinity,
    description: "Dark Matter Dimension upgrades are cheaper",
    effect: completions => Math.pow(0.4, completions),
    effectFormat: x => `/ ${format(1 / x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  singularityMult: {
    id: 5,
    start: 50,
    repeat: 3000,
    increaseThreshold: 5,
    limit: Infinity,
    description: "Singularity gain multiplier",
    effect: completions => Math.pow(2, completions),
    effectFormat: x => formatX(x, 2, 0),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkDimensionIntervalReduction: {
    start: 10,
    repeat: 100,
    increaseThreshold: 20,
    limit: Infinity,
    description: "Dark Matter Dimension interval decrease",
    effect: completions => Math.pow(0.6, completions),
    effectFormat: x => `/ ${format(1 / x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  improvedAscensionDM: {
    start: 200000,
    repeat: 4000,
    increaseThreshold: 15,
    limit: Infinity,
    description: "Ascension affects Dark Matter production more",
    effect: completions => 100 * completions,
    effectFormat: x => formatX(POWER_DM_PER_ASCENSION + x, 1, 0),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  // Limited
  ascensionIntervalScaling: {
    start: 1.2e5,
    repeat: 2400,
    limit: 8,
    description: "Dark Matter Dimensions Ascension increases the interval less",
    effect: completions => 1200 - 50 * completions,
    effectFormat: x => `×${formatInt(x)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  autoCondense: {
    start: 8,
    repeat: 80,
    limit: 8,
    description: "Automatically condense Singularities when reaching a threshold above the cap",
    effect: completions => [Infinity, 1.3, 1.22, 1.15, 1.1, 1.06, 1.03, 1.01, 1][completions],
    effectFormat: x => `Cap ${formatX(x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkDimensionAutobuyers: {
    start: 30,
    repeat: 170,
    limit: 4,
    description: "Dark Matter Dimension Autobuyers",
    effect: completions => completions,
    effectFormat: x => ((x === 0) ? "No autobuyers" : `Autobuy up to the ${["1st", "2nd", "3rd", "4th"][x - 1]} DMD`),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  ascensionAutobuyers: {
    start: 1e8,
    repeat: 140,
    limit: 4,
    description: "DMD Ascension Autobuyers",
    effect: completions => completions,
    effectFormat: x => ((x === 0) ? "No autobuyers" : `Ascend up to the ${["1st", "2nd", "3rd", "4th"][x - 1]} DMD`),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkAutobuyerSpeed: {
    start: 45,
    repeat: 650,
    limit: 8,
    description: "Autobuyer speed for all DMD Autobuyers",
    effect: completions => [30, 20, 15, 10, 5, 3, 2, 1, 0][completions],
    effectFormat: x => (x === 0 ? "Instant" : `${formatInt(x)}s`),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  realityDEMultiplier: {
    start: 1500,
    repeat: 10000,
    limit: 6,
    description: "Dark Energy multiplier based on disabled Dimension count within Lai'tela",
    effect: completions => Math.pow(1 + 0.05 * completions, Laitela.difficultyTier),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  improvedSingularityCap: {
    start: 150,
    repeat: 10000,
    limit: 4,
    description: "Increased Singularity gain per cap increase",
    effect: completions => 11 + completions,
    effectFormat: x => `${formatX(x)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  intervalCostScalingReduction: {
    start: 130000,
    repeat: 50000,
    limit: 5,
    description: "DMD Interval cost scaling is better",
    effect: completions => 1 - 0.03 * completions,
    effectFormat: x => `${formatPow(x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  // Unique
  darkFromTesseracts: {
    start: 80,
    repeat: 0,
    limit: 1,
    description: "Tesseracts boost Dark Matter and Dark Energy production",
    effect: () => Math.pow(1.1, Tesseracts.effectiveCount),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  multFromInfinitied: {
    start: 3000,
    repeat: 0,
    limit: 1,
    description: "Infinities boost Dark Matter and Dark Energy production",
    effect: () => Math.clampMin(Currency.infinitiesTotal.value.pLog10() / 1000, 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  dilatedTimeFromSingularities: {
    start: 8e4,
    repeat: 0,
    limit: 1,
    description: "Singularities improve the repeatable Dilated Time multiplier upgrade",
    // Note that at ~2.15x this causes a runaway purely because of cost scaling
    effect: () => 1 + Math.clampMax(Math.log10(Currency.singularities.value) / 100, 0.35),
    effectFormat: x => `${formatX(2)} ➜ ${formatX(2 * Math.clampMin(x, 1), 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromGlyphLevel: {
    start: 3e6,
    repeat: 0,
    limit: 1,
    description: "Boost Dark Matter and Dark Energy production based on highest Glyph level",
    effect: () => Math.pow(Math.clampMin((player.records.bestReality.glyphLevel - 15000) / 2000, 1), 0.5),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  gamespeedFromSingularities: {
    start: 8e7,
    repeat: 0,
    limit: 1,
    description: "Singularities boost game speed",
    effect: () => Math.clampMin(Math.pow(Math.log10(Currency.singularities.value), 3), 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromTheorems: {
    start: 3e9,
    repeat: 0,
    limit: 1,
    description: "Time Theorems boost Dark Matter and Dark Energy gain",
    effect: () => Math.sqrt(Math.clampMin((Currency.timeTheorems.value.log10() - 1000) / 50, 1)),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  dim4Generation: {
    start: 5e11,
    repeat: 0,
    limit: 1,
    description: "Annihilation mult. generates 4th DMD when Annihilation is available",
    effect: () => Laitela.darkMatterMult,
    effectFormat: x => `${format(x, 2, 1)}/s`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkFromDM4: {
    start: 5e12,
    repeat: 0,
    limit: 1,
    description: "4th Dark Matter Dimension amount boosts Dark Matter and Dark Energy gain",
    effect: () => Math.clampMin(DarkMatterDimension(4).amount.pow(0.03).toNumber(), 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  annihilationAutobuyer: {
    start: 4e18,
    repeat: 0,
    limit: 1,
    description: "Unlock an Autobuyer for Annihilation",
    effect: completions => completions,
    effectFormat: x => (x === 1 ? "Unlocked" : "Locked"),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  theoremPowerFromSingularities: {
    start: 3e21,
    repeat: 0,
    limit: 1,
    description: "Singularities give a power effect to Time Theorem gain",
    effect: () => 1 + Math.log10(Currency.singularities.value + 1) / 70,
    effectFormat: x => formatPow(x, 2, 3),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromGamespeed: {
    start: 8e22,
    repeat: 0,
    limit: 1,
    description: "Game speed boosts Dark Matter and Dark Energy production",
    effect: () => Math.clampMin(Math.log10(getGameSpeedupFactor() / 1e120) / 40, 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  glyphLevelFromSingularities: {
    start: 3e24,
    repeat: 0,
    limit: 1,
    description: "Singularities boost pre-instability Glyph level",
    effect: () => 1 + Math.clampMin((Math.log10(Currency.singularities.value) - 20) / 30, 0),
    effectFormat: x => formatX(Math.clampMin(x, 1), 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromDilatedTime: {
    start: 8e33,
    repeat: 0,
    limit: 1,
    description: "Dilated Time boosts Dark Matter production",
    effect: () => Math.pow(1.6, Decimal.log10(Currency.dilatedTime.value.plus(1)) / 1000),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  infinitiedPow: {
    start: 3e38,
    repeat: 0,
    limit: 1,
    description: "Infinities gain a power effect based on Singularities",
    effect: () => 1 + Math.log10(Currency.singularities.value + 1) / 300,
    effectFormat: x => formatPow(x, 2, 3),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  tesseractMultFromSingularities: {
    start: 4e44,
    repeat: 0,
    limit: 1,
    description: "Singularities increase effective Tesseract count",
    effect: () => 1 + Math.log10(Currency.singularities.value) / 80,
    effectFormat: x => formatX(Math.clampMin(x, 1), 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  }
};
