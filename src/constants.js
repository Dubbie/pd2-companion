export const RUNES = {
  AMN: 'amn',
  THUL: 'thul',
  RAL: 'ral',
  DOL: 'dol',
  TAL: 'tal',
  KO: 'ko',
  ITH: 'ith',
  ORT: 'ort',
  ETH: 'eth',
  NEF: 'nef',
  TIR: 'tir',
  LUM: 'lum',
  EL: 'el',
  IO: 'io',
  ELD: 'eld',
  SOL: 'sol',
  SHAEL: 'shael',
  HEL: 'hel',
}

export const CRAFT_TYPES = {
  BLOOD: 'blood',
  CASTER: 'caster',
  HITPOWER: 'hitpower',
  SAFETY: 'safety',
  VAMPIRIC: 'vampiric',
  BOUNTIFUL: 'bountiful',
  BRILLIANT: 'brilliant',
}

export const GEMS = {
  RUBY: 'ruby',
  AMETHYST: 'amethyst',
  SAPPHIRE: 'sapphire',
  TOPAZ: 'topaz',
  EMERALD: 'emerald',
  DIAMOND: 'diamond',
  SKULL: 'skull',
}

export const ITEM_TYPES = {
  NECK: 'neck',
  RING: 'ring',
  BELT: 'belt',
  GLOVES: 'glov',
  BOOTS: 'boot',
  HELMET: 'helm',
  BODY: 'body',
  SHIELD: 'shld',
  WEAP: 'weap',
}

export const RECIPES = {
  // Neck crafting recipes
  neck: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.AMN,
      gem: GEMS.RUBY,
      mods: ['+10% Faster Run/Walk', '+[3-6] Life After Each Kill', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.RAL,
      gem: GEMS.AMETHYST,
      mods: ['+10% Faster Cast Rate', 'Regenerate Mana [4-10]%', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.THUL,
      gem: GEMS.SAPPHIRE,
      mods: [
        '+[150-250] to Attack Rating',
        '+[10-20]% Faster Hit Recovery',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.THUL,
      gem: GEMS.EMERALD,
      mods: [
        '10% Increased Chance of Blocking',
        'Magic Damage Taken Reduced by [4-7]',
        'Physical Damage Taken Reduced by [4-7]',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.DOL,
      gem: GEMS.SKULL,
      mods: [
        '[5-10]% Curse Duration Reduction',
        '[3-6]% Mana Stolen per Hit',
        'Replenish Life +[5-10]',
      ],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.KO,
      gem: GEMS.TOPAZ,
      mods: [
        '+[10-20] to Vitality',
        '[20-30]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.TAL,
      gem: GEMS.DIAMOND,
      mods: [
        '+[100-150] Defense vs. Missile',
        '+[4-8] to All Attributes',
        'All Resistances +[5-10]',
      ],
    },
  ],

  // Ring crafting recipes
  ring: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.SOL,
      gem: GEMS.RUBY,
      mods: ['+[5-10] to Strength', '[1-3]% Life Stolen per Hit', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.AMN,
      gem: GEMS.AMETHYST,
      mods: ['+[5-10] to Energy', '+[1-2] to Mana after each Kill', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.AMN,
      gem: GEMS.SAPPHIRE,
      mods: [
        '+[5-10] to Dexterity',
        '+[2-4] to Maximum Damage',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.AMN,
      gem: GEMS.EMERALD,
      mods: [
        '+[5-10] to Vitality',
        'Magic Damage Taken Reduced by [2-5]',
        'Physical Damage Taken Reduced by [2-5]',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.HEL,
      gem: GEMS.SKULL,
      mods: [
        '[10-20]% Poison Length Reduction',
        '[1-3]% Mana Stolen per Hit',
        'Replenish Life +[5-10]',
      ],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.LUM,
      gem: GEMS.TOPAZ,
      mods: [
        '+[5-10] to Vitality',
        '[10-20]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.HEL,
      gem: GEMS.DIAMOND,
      mods: ['+[50-100] Defense vs. Missile', 'All Resistances +[3-5]', 'Half Freeze Duration'],
    },
  ],

  // Belt crafting recipes
  belt: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.TAL,
      gem: GEMS.RUBY,
      mods: ['[10-20]% Chance of Open Wounds', '[3-6]% Life Stolen per Hit', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.ITH,
      gem: GEMS.AMETHYST,
      mods: ['+10% Faster Cast Rate', 'Regenerate Mana [4-10]%', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.TAL,
      gem: GEMS.SAPPHIRE,
      mods: [
        '[5-10]% Damage Taken Gained as Mana when Hit',
        '+[10-20]% Faster Hit Recovery',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.TAL,
      gem: GEMS.EMERALD,
      mods: [
        '+[10-30]% Enhanced Defense',
        'Poison Resist +[10-20]%',
        'Magic Damage Taken Reduced by [2-5]',
        'Physical Damage Taken Reduced by [2-5]',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.ELD,
      gem: GEMS.SKULL,
      mods: [
        '[10-20]% Damage Taken Gained as Mana when Hit',
        '[3-6]% Mana Stolen per Hit',
        'Replenish Life +[5-10]',
      ],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.EL,
      gem: GEMS.TOPAZ,
      mods: [
        '+[25-50]% Enhanced Defense',
        '[20-30]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.IO,
      gem: GEMS.DIAMOND,
      mods: [
        '+[5-10]% Increased Attack Speed',
        '+[25-50]% Enhanced Defense',
        'Half Freeze Duration',
      ],
    },
  ],

  // Glove crafting recipes
  glov: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.NEF,
      gem: GEMS.RUBY,
      mods: ['[5-10]% Chance of Crushing Blow', '[2-4]% Life Stolen per Hit', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.ORT,
      gem: GEMS.AMETHYST,
      mods: ['+[5-10]% Faster Cast Rate', '+[1-3] to Mana after each Kill', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.ORT,
      gem: GEMS.SAPPHIRE,
      mods: [
        'Knockback',
        '-[10-20]% Target Defense',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.RAL,
      gem: GEMS.EMERALD,
      mods: [
        '+[10-30]% Enhanced Defense',
        'Cold Resist +[10-20]%',
        'Magic Damage Taken Reduced by [2-5]',
        'Physical Damage Taken Reduced by [2-5]',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.IO,
      gem: GEMS.SKULL,
      mods: ['[5-10]% Deadly Strike', '[2-4]% Mana Stolen per Hit', 'Replenish Life +[5-10]'],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.HEL,
      gem: GEMS.TOPAZ,
      mods: [
        '+[25-50]% Enhanced Defense',
        '[15-25]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.SHAEL,
      gem: GEMS.DIAMOND,
      mods: [
        '+[5-10]% Increased Attack Speed',
        '[10-20]% Bonus to Attack Rating',
        '+[25-50]% Enhanced Defense',
      ],
    },
  ],

  // Boots crafting recipes
  boot: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.ETH,
      gem: GEMS.RUBY,
      mods: ['Replenish Life +[15-30]', '[2-4]% Life Stolen per Hit', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.THUL,
      gem: GEMS.AMETHYST,
      mods: ['Increase Maximum Mana [10-15]%', 'Regenerate Mana [4-10]%', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.RAL,
      gem: GEMS.SAPPHIRE,
      mods: [
        '+[60-120] Defense vs. Melee',
        '+[10-20]% Faster Hit Recovery',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.ORT,
      gem: GEMS.EMERALD,
      mods: [
        '+[20-60]% Enhanced Defense',
        'Fire Resist +[10-20]%',
        'Magic Damage Taken Reduced by [2-5]',
        'Physical Damage Taken Reduced by [2-5]',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.EL,
      gem: GEMS.SKULL,
      mods: [
        '[10-20]% Poison Length Reduction',
        '[2-4]% Mana Stolen per Hit',
        'Replenish Life +[5-10]',
      ],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.IO,
      gem: GEMS.TOPAZ,
      mods: [
        '+[25-50]% Enhanced Defense',
        '[15-25]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.KO,
      gem: GEMS.DIAMOND,
      mods: ['+[5-10]% Faster Run/Walk', '+[100-150] Defense vs. Missile', 'Half Freeze Duration'],
    },
  ],

  // Helm crafting recipes
  helm: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.RAL,
      gem: GEMS.RUBY,
      mods: ['[10-20]% Chance of Crushing Blow', '[2-4]% Life Stolen per Hit', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.NEF,
      gem: GEMS.AMETHYST,
      mods: ['+[5-10]% Faster Cast Rate', 'Regenerate Mana [4-10]%', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.ITH,
      gem: GEMS.SAPPHIRE,
      mods: [
        '+[100-200] to Attack Rating',
        '+[10-20]% Faster Hit Recovery',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.ITH,
      gem: GEMS.EMERALD,
      mods: [
        '+[20-60]% Enhanced Defense',
        'Lightning Resist +[10-20]%',
        'Physical Damage Taken Reduced by [5-10]%',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.LUM,
      gem: GEMS.SKULL,
      mods: ['[10-20]% Deadly Strike', '[2-4]% Mana Stolen per Hit', 'Replenish Life +[5-10]'],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.TIR,
      gem: GEMS.TOPAZ,
      mods: [
        '+[25-50]% Enhanced Defense',
        '[20-30]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius ',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.ELD,
      gem: GEMS.DIAMOND,
      mods: [
        '+[5-10]% Increased Attack Speed',
        '+[25-50]% Enhanced Defense',
        'Half Freeze Duration',
      ],
    },
  ],

  // Body crafting recipes
  body: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.THUL,
      gem: GEMS.RUBY,
      mods: ['+[3-6] Life after each Kill', '[3-6]% Life Stolen per Hit', '+[20-40] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.TAL,
      gem: GEMS.AMETHYST,
      mods: ['+[5-10]% Faster Cast Rate', '+[3-6] to Mana after each Kill', '+[20-30] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.NEF,
      gem: GEMS.SAPPHIRE,
      mods: [
        '+[25-50]% Enhanced Defense',
        '+[20-40]% Faster Hit Recovery',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.ETH,
      gem: GEMS.EMERALD,
      mods: [
        '+[20-60]% Enhanced Defense',
        '+[100-150] Defense vs. Melee',
        'Physical Damage Taken Reduced by [5-10]%',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.TIR,
      gem: GEMS.SKULL,
      mods: ['[3-6]% Mana Stolen per Hit', 'Replenish Life +[5-10]', 'Requirements -[20-30]%'],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.ELD,
      gem: GEMS.TOPAZ,
      mods: [
        '+[25-50]% Enhanced Defense',
        '[20-30]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius ',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.EL,
      gem: GEMS.DIAMOND,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        '+[25-50]% Enhanced Defense',
        'All Resistances +[5-10] ',
      ],
    },
  ],

  // Shield crafting recipes
  shld: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.ITH,
      gem: GEMS.RUBY,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        '[3-6]% Life Stolen per Hit',
        '+[10-20] to Life ',
      ],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.ETH,
      gem: GEMS.AMETHYST,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        '+[5-10]% Faster Cast Rate',
        '+[20-30] to Mana',
      ],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.ETH,
      gem: GEMS.SAPPHIRE,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        '+[20-30]% Faster Block Rate',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.NEF,
      gem: GEMS.EMERALD,
      mods: [
        '+[20-60]% Enhanced Defense',
        '+[100-150] Defense vs. Melee',
        'Physical Damage Taken Reduced by [5-10]%',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.SOL,
      gem: GEMS.SKULL,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        '[3-6]% Mana Stolen per Hit',
        'Requirements -[20-30]%',
      ],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.DOL,
      gem: GEMS.TOPAZ,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        '[20-30]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.ORT,
      gem: GEMS.DIAMOND,
      mods: [
        '[10-20]% Increased Chance of Blocking',
        'All Resistances +[5-10]',
        'Half Freeze Duration',
      ],
    },
  ],

  // Weap crafting recipes
  weap: [
    {
      type: CRAFT_TYPES.BLOOD,
      rune: RUNES.ORT,
      gem: GEMS.RUBY,
      mods: ['+[50-80]% Enhanced Damage', '[3-6]% Life Stolen per Hit', '+[10-20] to Life'],
    },
    {
      type: CRAFT_TYPES.CASTER,
      rune: RUNES.TIR,
      gem: GEMS.AMETHYST,
      mods: ['+1 to All Skills', '+[10-20]% Faster Cast Rate', '+[10-20] to Mana'],
    },
    {
      type: CRAFT_TYPES.HITPOWER,
      rune: RUNES.TIR,
      gem: GEMS.SAPPHIRE,
      mods: [
        '+[50-80]% Enhanced Damage',
        '-[10-20]% Target Defense',
        '5% Chance to Cast Level 4 Frost Nova when Struck',
      ],
    },
    {
      type: CRAFT_TYPES.SAFETY,
      rune: RUNES.SOL,
      gem: GEMS.EMERALD,
      mods: [
        '+[50-80]% Enhanced Damage',
        'Knockback',
        'Magic Damage Taken Reduced by [2-5]',
        'Physical Damage Taken Reduced by [2-5]',
      ],
    },
    {
      type: CRAFT_TYPES.VAMPIRIC,
      rune: RUNES.SHAEL,
      gem: GEMS.SKULL,
      mods: [
        '+[100-140]% Damage to Demons',
        '+[100-140]% Damage to Undead',
        '[3-6]% Mana Stolen per Hit',
        'Replenish Life +[10-15]',
      ],
    },
    {
      type: CRAFT_TYPES.BOUNTIFUL,
      rune: RUNES.SHAEL,
      gem: GEMS.TOPAZ,
      mods: [
        '+[50-80]% Enhanced Damage',
        '[20-30]% Better Chance of Getting Magic Items',
        '+[1-3] to Light Radius ',
      ],
    },
    {
      type: CRAFT_TYPES.BRILLIANT,
      rune: RUNES.SOL,
      gem: GEMS.DIAMOND,
      mods: [
        '+20% Increased Attack Speed',
        '+[20-40]% Enhanced Damage',
        '+[50-100] to Attack Rating',
      ],
    },
  ],
}
