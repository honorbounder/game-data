var honorbounder = honorbounder || {};

honorbounder.data = {
    elements: [ {
        name: "Abyss",
        code: 'abyss',
        images: {
            big: 'http://img3.wikia.nocookie.net/__cb20140205222421/honorbound-juicebox/images/f/fe/Abyss_icon.png',
            medium: 'http://img3.wikia.nocookie.net/__cb20140205222421/honorbound-juicebox/images/thumb/f/fe/Abyss_icon.png/55px-Abyss_icon.png'
        }
    }, {
        name: "Lunar",
        code: 'lunar',
        images: {
            big: 'http://img1.wikia.nocookie.net/__cb20mar140205222442/honorbound-juicebox/images/0/0b/Lunar_icon.png',
            medium: 'http://img1.wikia.nocookie.net/__cb20140205222442/honorbound-juicebox/images/thumb/0/0b/Lunar_icon.png/55px-Lunar_icon.png'
        }
    }, {
        name: "Primal",
        code: 'primal',
        images: {
            big: 'http://img4.wikia.nocookie.net/__cb20140205222503/honorbound-juicebox/images/6/6d/Primal_icon.png',
            medium: 'http://img4.wikia.nocookie.net/__cb20140205222503/honorbound-juicebox/images/thumb/6/6d/Primal_icon.png/55px-Primal_icon.png'
        }
    }, {
        name: "Spirit",
        code: 'spirit',
        images: {
            big: 'http://img2.wikia.nocookie.net/__cb20140205222525/honorbound-juicebox/images/6/66/Spirit_icon.png',
            medium: 'http://img2.wikia.nocookie.net/__cb20140205222525/honorbound-juicebox/images/thumb/6/66/Spirit_icon.png/55px-Terra_icon.png'
        }
    }, {
        name: "Terra",
        code: 'terra',
        images: {
            big:    'http://img2.wikia.nocookie.net/__cb20140205222551/honorbound-juicebox/images/c/c2/Terra_icon.png',
            medium: 'http://img3.wikia.nocookie.net/__cb20140205222551/honorbound-juicebox/images/thumb/c/c2/Terra_icon.png/55px-Terra_icon.png'
        }
    } ],

    tiers: [ {
        name: "Common",
        code: 'common'
    }, {
        name: "Uncommon",
        code: 'uncommon'
    }, {
        name: "Rare",
        code: 'rare'
    }, {
        name: "Epic",
        code: 'epic'
    }, {
        name: "Legendary",
        code: 'legendary'
    } ],

    classes: [ {
        name: "Archer",
        code: 'archer',
        images: {
            big:    'http://img2.wikia.nocookie.net/__cb20140223221502/honorbound-juicebox/images/b/b9/Class_archer.png',
            medium: 'http://img2.wikia.nocookie.net/__cb20140223221502/honorbound-juicebox/images/thumb/b/b9/Class_archer.png/55px-Class_archer.png'
        }
    }, {
        name: "Cleric",
        code: 'cleric',
        images: {
            big:    'http://img1.wikia.nocookie.net/__cb20140223123239/honorbound-juicebox/images/d/d7/Class_cleric.png',
            medium: 'http://img1.wikia.nocookie.net/__cb20140223123239/honorbound-juicebox/images/thumb/d/d7/Class_cleric.png/55px-Class_cleric.png'
        }
    }, {
        name: "Knight",
        code: 'knight',
        images: {
            big:    'http://img4.wikia.nocookie.net/__cb20140223123239/honorbound-juicebox/images/d/d0/Class_knight.png',
            medium: 'http://img4.wikia.nocookie.net/__cb20140223123239/honorbound-juicebox/images/thumb/d/d0/Class_knight.png/55px-Class_knight.png'
        }
    }, {
        name: "Rogue",
        code: 'rogue',
        images: {
            big:    'http://img4.wikia.nocookie.net/__cb20140223123240/honorbound-juicebox/images/d/d7/Class_rogue.png',
            medium: 'http://img4.wikia.nocookie.net/__cb20140223123240/honorbound-juicebox/images/thumb/d/d7/Class_rogue.png/55px-Class_rogue.png'
        }
    }, {
        name: "Warrior",
        code: 'warrior',
        images: {
            big:    'http://img1.wikia.nocookie.net/__cb20140223123240/honorbound-juicebox/images/5/51/Class_warrior.png',
            medium: 'http://img1.wikia.nocookie.net/__cb20140223123240/honorbound-juicebox/images/thumb/5/51/Class_warrior.png/55px-Class_warrior.png'
        }
    }, {
        name: "Wizard",
        code: 'wizard',
        images: {
            big:    'http://img2.wikia.nocookie.net/__cb20140223123241/honorbound-juicebox/images/d/dc/Class_wizard.png',
            medium: 'http://img2.wikia.nocookie.net/__cb20140223123241/honorbound-juicebox/images/thumb/d/dc/Class_wizard.png/55px-Class_wizard.png'
        }
    } ],

    abilities: [ {
        name: "Abyss Invocation",
        code: 'abyss-invocation',
        description: "Boost the damage for all party members of the Abyss affinity.",
        mana: 0 // passive
    }, {
        name: "Abyss Ward",
        code: 'abyss-ward',
        description: "Protect all party members from those of the Abyss affinity.",
        mana: 0 // passive
    }, {
        name: "Aegis Guard",
        code: 'aegis-guard',
        description: "Grant allies a major buff to their magical defense attribute.",
        mana: 0 // passive
    }, {
        name: "Aegis Stance",
        code: 'aegis-stance',
        description: "Grant allies a minor buff to their magical defense attribute.",
        mana: 0 // passive
    }, {
        name: "Aim Shot",
        code: 'aim-shot',
        description: "Attack a single target for extra damage.",
        mana: 4
    }, {
        name: "Arcane Blast",
        code: 'arcane-blast',
        description: "Attack all enemies with a fiery maelstrom.",
        mana: 5
    }, {
        name: "Arrow of Dawn",
        code: 'arrow-of-dawn',
        description: "Attack a group of enemies.",
        mana: -1 // unknown
    }, {
        name: "Arrow of Thunder",
        code: 'arrow-of-thunder',
        description: "Attack a single enemy and weaken their magical attack power.",
        mana: -1 // unknown
    }, {
        name: "Assassinate",
        code: 'assassinate',
        description: "Ambush a single enemy for massive damage in one round.",
        mana: -1 // unknown
    }, {
        name: "Barbed Arrows",
        code: 'barbed-arrows',
        description: "Cause a single enemy to take damage over time.",
        mana: 5
    }, {
        name: "Bash",
        code: 'bash',
        description: "Stun an enemy for one round.",
        mana: -1 // unknown
    }, {
        name: "Blinding Powder",
        code: 'blinding-powder',
        description: "Stun a chain of enemies.",
        mana: 12
    }, {
        name: "Burning Chant",
        code: 'burning-chant',
        description: "Recite a chant to cause all enemies to burn for damage over time.",
        mana: 0 // NOT passive
    }, {
        name: "Channel Mana",
        code: 'channel-mana',
        description: "Generate mana in battle.",
        mana: 0 // passive
    }, {
        name: "Cleave",
        code: 'cleave',
        description: "Attack a chain of enemies.",
        mana: 4
    }, {
        name: "Conviction",
        code: 'conviction',
        description: "Attack a single enemy and weaken their physical defenses.",
        mana: -1 // unknown
    }, {
        name: "Conflagration",
        code: 'conflagration',
        description: "Attack all enemies and make them lose health over time.",
        mana: -1 // unknown
    }, {
        name: "Crusader's Chant",
        code: 'crusader-s-chant',
        description: "Recite a chant to grant all allies a minor buff to their attack attribute along with a minor heal over time.",
        mana: 0 // NOT passive
    }, {
        name: "Deadly Poison",
        code: 'deadly-poison',
        description: "Make an enemy take extra damage over time.",
        mana: 8
    }, {
        name: "Defend",
        code: 'defend',
        description: "Defend a chosen target from attacks.",
        mana: 3
    }, {
        name: "Demoralizing Cry",
        code: 'demoralizing-cry',
        description: "Weaken all enemies physical defense.",
        mana: 0 // passive
    }, {
        name: "Demoralizing Roar",
        code: 'demoralizing-roar',
        description: "Weaken all enemies physical defense by a large amount.",
        mana: 0 // passive
    }, {
        name: "Despair of the Deep",
        code: 'despair-of-the-deep',
        description: "Debuff a group of enemies physical defense by a large amount.",
        mana: 0 // passive
    }, {
        name: "Destruction",
        code: 'destruction',
        description: "Attack a single enemy for massive damage.",
        mana: 12
    }, {
        name: "Dual Shot",
        code: 'dual-shot',
        description: "Attack a chain of enemies.",
        mana: -1 // unknown
    }, {
        name: "Entropy",
        code: 'entropy',
        description: "Attack a single enemy and deal damage over time.",
        mana: 5 // unknown
    }, {
        name: "Eruption",
        code: 'eruption',
        description: "Attack a single enemy with a powerful eruption.",
        mana: 7
    }, {
        name: "Fiery Cleave",
        code: 'fiery-cleave',
        description: "Attack a chain of enemteries and cause them to burn for damage over time.",
        mana: 7
    }, {
        name: "Flamecall",
        code: 'flamecall',
        description: "Attack a single enemy for massive damage.",
        mana: -1 // unknown
    }, {
        name: "Flashing Blades",
        code: 'flashing-blades',
        description: "Cause a chain of enemies to take damage over time.",
        mana: 10
    }, {
        name: "Flowing Cut",
        code: 'flowing-cut',
        description: "Cause a chain of enemies to take damage over time.",
        mana: 10
    }, {
        name: "Flurry",
        code: 'flurry',
        description: "Attack a chain of enemies.",
        mana: 8
    }, {
        name: "Frightful Visage",
        code: 'frightful-visage',
        description: "Stun an enemy for one round.",
        mana: 10
    }, {
        name: "Furious Cry",
        code: 'furious-cry',
        description: "Boost the party's physical attack power.",
        mana: 0 // passive
    }, {
        name: "Furious Roar",
        code: 'furious-roar',
        description: "Boost the party's physcial attack power by a large amount. (10%-30%) Rank 1-3.",
        mana: 0 // passive
    }, {
        name: "Garrote",
        code: 'garrote',
        description: "Make an enemy lose a lot of health over time.",
        mana: -1 // unknown
    }, {
        name: "Gambler's trick",
        code: 'gambler-s-trick',
        description: "Grant allies a minor buff to their luck attribute.",
        mana: 0 // passive
    }, {
        name: "Gambler's ruse",
        code: 'gambler-s-ruse',
        description: "Grant allies a major buff to their luck attribute.",
        mana: 0 // passive
    }, {
        name: "Glyph of Focus",
        code: 'glyph-of-focus',
        description: "Grant all allies a minor buff to their magical attack attribute.",
        mana: 0 // passive
    }, {
        name: "Glyph of Shielding",
        code: 'glyph-of-shielding',
        description: "Grant a minor magical ward to all allies.",
        mana: 0 // passive
    }, {
        name: "Haste",
        code: 'haste',
        description: "Grant your squad an initiative boost.",
        mana: 0 // passive
    }, {
        name: "Head Crack",
        code: 'head-crack',
        description: "Attack a single enemy and weaken their magical attack power.",
        mana: -1 // unknown
    }, {
        name: "Hunter's Eye",
        code: 'hunter-s-eye',
        description: "Diminish all enemies physical attack attribute.",
        mana: 0 // passive
    }, {
        name: "Hunter's Mark",
        code: 'hunter-s-mark',
        description: "Diminish all enemies physical attack by a large amount. (10%-30%) Rank 1-3.",
        mana: 0 // passive
    }, {
        name: "Ice Comet",
        code: 'ice-comet',
        description: "Attack all enemies with a comet blast.",
        mana: 8
    }, {
        name: "Ice Storm",
        code: 'ice-storm',
        description: "Attack all enemies and weaken their physical attack power.",
        mana: 15
    }, {
        name: "Impale",
        code: 'impale',
        description: "Attack a single enemy for high damage.",
        mana: -1 // unknown
    }, {
        name: "Justice",
        code: 'justice',
        description: "Attack a chain of enemies for extra damage.",
        mana: 10
    }, {
        name: "Lance",
        code: 'lance',
        description: "Attack a single enemy for massive damage.",
        mana: 8
    }, {
        name: "Life Steal",
        code: 'life-steal',
        description: "Attacks a single enemy and drains the health returning it to your party.",
        mana: 4 // unknown
    }, {
        name: "Lightning Strike",
        code: 'lightning-strike',
        description: "Attack a chain of enemies with a magical lightning bolt.",
        mana: -1 // unknown
    }, {
        name: "Lunar Ward",
        code: 'lunar-ward',
        description: "Protect all party members from those of the Lunar affinity.",
        mana: 0 // passive
    }, {
        name: "Mana Burst",
        code: 'mana-burst',
        description: "Generate a lot of mana in battle. (3-5 mana).",
        mana: 0 // passive
    }, {
        name: "Mana Infusion",
        code: 'mana-infusion',
        description: "Increase your mana regeneration by 2.",
        mana: 0 // passive
    }, {
        name: "Mass Heal",
        code: 'mass-heal',
        description: "Heal all members of the party.",
        mana: 8
    }, {
        name: "Mass Regen",
        code: 'mass-regen',
        description: "Make all party members regenrate health over time.",
        mana: 6
    }, {
        name: "Maul",
        code: 'maul',
        description: "Stun an enemy for one round.",
        mana: 8
    }, {
        name: "Mindflay Poison",
        code: 'mindflay-poison',
        description: "Attacks a single enemy and debuff their magical attack.",
        mana: -1 // unknown
    }, {
        name: "Minor Heal",
        code: 'minor-heal',
        description: "Heal a single target for moderate HP.",
        mana: 3
    }, {
        name: "Minor Poison",
        code: 'minor-poison',
        description: "Make an enemy take damage over time.",
        mana: -1 // unknown
    }, {
        name: "Necrotic Cut",
        code: 'necrotic-cut',
        description: "Cause a single enemy to take damage over time.",
        mana: -1 // unknown
    }, {
        name: "Noxious Cloud",
        code: 'noxious-cloud',
        description: "Cause all enemies to lose health over time.",
        mana: 15
    }, {
        name: "Piercing Light",
        code: 'piercing-light',
        description: "Deal damage to a single enemy and stun them.",
        mana: -1 // unknown
    }, {
        name: "Plasma Bolt",
        code: 'plasma-bolt',
        description: "Attack a single enemy with a fiery bolt.",
        mana: -1 // unknown
    }, {
        name: "Poison Arrow",
        code: 'poison-arrow',
        description: "Cause a single enemy to take damage over time.",
        mana: 0 // passive
    }, {
        name: "Poison Bolt",
        code: 'poison-bolt',
        description: "Attack a chain of enemies with a poisonous hex.",
        mana: -1 // unknown
    }, {
        name: "Poison Strike",
        code: 'poison-strike',
        description: "Imbue your basic attacks with poison.",
        mana: 2
    }, {
        name: "Predator's Eye",
        code: 'predator-s-eye',
        description: "Diminish all enemies' magical attack attribute.",
        mana: 0 // passive
    }, {
    }, {
        name: "Predator's Mark",
        code: 'predator-s-mark',
        description: "Diminish all enemies magical attack attribute by a large amount.",
        mana: 0 // passive
    }, {
        name: "Primal Bow",
        code: 'primal-bow',
        description: "Cause a single enemy to take damage over time.",
        mana: -1 // unknown
    }, {
        name: "Primal Infusion",
        code: 'primal-infusion',
        description: "Make all party members regenerate health over time.",
        mana: 10
    }, {
        name: "Primal Invocation",
        code: 'primal-invocation',
        description: "Boost the damage for all the party members of the Primal affinity.",
        mana: 0 // passive
    }, {
        name: "Punish",
        code: 'punish',
        description: "Strike a single enemy for extra damage.",
        mana: 6
    }, {
        name: "Rain of Arrows",
        code: 'rain-of-arrows',
        description: "Attack all enemies for extra damage.",
        mana: -1 // unknown
    }, {
        name: "Rend Armor",
        code: 'rend-armor',
        description: "Weaken a single enemy's physical defenses",
        mana: 6
    }, {
        name: "Rend and tear",
        code: 'rend-and-tear',
        description: "Attack a chain of enemies.",
        mana: 4
    }, {
        name: "Rending Whirlwind",
        code: 'rending-whirlwind',
        description: "Attack a group of enemies and debuff their physical defense.",
        mana: 7
    }, {
        name: "Reap",
        code: 'reap',
        description: "Attack a chain of enemies for extra damage.",
        mana: -1 // unknown
    }, {
        name: "Resurrection",
        code: 'resurrection',
        description: "Resurrect a single downed target.",
        mana: 6
    }, {
        name: "Retribution",
        code: 'retribution',
        description: "Attack a single enemy for extra damage.",
        mana: 8
    }, {
        name: "Righteous Volley",
        code: 'righteous-volley',
        description: "Attack all enemies for extra damage.",
        mana: -1 // unknown
    }, {
        name: "Shield Bash",
        code: 'shield-bash',
        description: "Stun an enemy for one round.",
        mana: 8
    }, {
        name: "Slice",
        code: 'slice',
        description: "Cause a single enemy to take damage over time.",
        mana: -1 // unknown
    }, {
        name: "Slow",
        code: 'slow',
        description: "Diminish the initiative of an opposing squad.",
        mana: 0 // passive
    }, {
        name: "Siphon Life",
        code: 'siphon-life',
        description: "Drain the health of all enemies.",
        mana: 15
    }, {
        name: "Smite",
        code: 'smite',
        description: "Do increased damage to a single enemy.",
        mana: 6
    }, {
        name: "Spirit Invocation",
        code: 'spirit-invocation',
        description: "Boost the damage for all party members of the Spirit affinity.",
        mana: 0 // passive
    }, {
        name: "Stalker's Eye",
        code: 'stalker-s-eye',
        description: "Diminish all enemies magical defense attribute.",
        mana: -1 // unknown
    }, {
        name: "Stalker's Mark",
        code: 'stalker-s-mark',
        description: "Diminish all enemies magical attack attribute by a large amount.",
        mana: -1 // unknown
    }, {
        name: "Stalwart Guard",
        code: 'stalwart-guard',
        description: "Grant allies a major buff to their physical defense attribute.",
        mana: 0 // passive
    }, {
        name: "Stalwart Stance",
        code: 'stalwart-stance',
        description: "Grant allies a minor buff to their physical defense attribute.",
        mana: 0 // passive
    }, {
        name: "Steal",
        code: 'steal',
        description: "Attack a target and steal an item.",
        mana: 3
    }, {
        name: "Sunspark",
        code: 'sunspark',
        description: "Attack a chain of enemies with a blinding flare.",
        mana: 10
    }, {
        name: "Swindler's ruse",
        code: 'swindler-s-ruse',
        description: "Diminish all enemies luck attribute by a large amount.",
        mana: 0 // passive
    }, {
        name: "Swindler's trick",
        code: 'swindler-s-trick',
        description: "Diminish all enemies luck attribute.",
        mana: 0 // passive
    }, {
        name: "Symbol of Focus",
        code: 'symbol-of-focus',
        description: "Boost the party's magical attack by a large amount",
        mana: 0 // passive
    }, {
        name: "Symbol of Shielding",
        code: 'symbol-of-shielding',
        description: "Grant a major magical ward to all allies.",
        mana: 0 // passive
    }, {
        name: "Terra Ward",
        code: 'terra-ward',
        description: "Protect all party members from those of Terra affinity.",
        mana: 0 // passive
    }, {
        name: "Terra's Curse Chant",
        code: 'terra-s-curse-chant',
        description: "Recite a chant to cause a single enemy to be weak against Terra attacks.",
        mana: 0 // NOT passive
    }, {
        name: "Thorn Coat",
        code: 'thorn-coat',
        description: "Target reflects a small amount of physical damage.",
        mana: 0 // passive
    }, {
        name: "Varra's Arrow",
        code: 'varra-s-arrow',
        description: "Attack a single enemy and make them lose health over time.",
        mana: -1 // unknown
    }, {
        name: "Warding Guard",
        code: 'warding-guard',
        description: "Grant a major physical ward to allies.",
        mana: 0 // passive
    }, {
        name: "Warding Stance",
        code: 'warding-stance',
        description: "Grant allies a minor buff to their physical defense attribute.",
        mana: 0 // passive
    } ],

    heroes: [ {
        name: "A'san, The Tempest",
        code: 'a-san-the-tempest',
        wiki: 'A%27san,_The_Tempest',
        element: 'spirit',
        tier: 'legendary',
        class: 'warrior',
        abilities: ['cleave', 'furious-roar', 'conviction'],
        evolutions: [ {
            name: "A'san, The Tempest",
            stars: 1,
            stats: [
                {level:  1,       strength:     450, magic:     388, defense:     405, resistance:     379, health:     395, luck:     436},
            ]
        }, {
            name: "A'san, The Tempest+",
            stars: 2,
            stats: [
                {level:  1,       strength:     543, magic:     470, defense:     490, resistance:     460, health:     479, luck:     526},
            ]
        } ]

    },  {

        name: "Alshin Dead-Eye",
        code: 'alshin-dead-eye',
        wiki: 'Alshin_Dead-Eye',
        element: 'spirit',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'barbed-arrows', 'righteous-volley'],
        evolutions: [ {
            name: "Alshin Dead-Eye",
            stars: 1,
            stats: [
                {level:  1,       strength:     230, magic:     219, defense:     176, resistance:     195, health:     254, luck:     189},
                {level:  5,       strength:     324, magic:     301, defense:     216, resistance:     255, health:     291, luck:     242},
            ]
        }, {
            name: "Alshin Dead-Eye+",
            stars: 2,
            stats: [
                {level:  1,       strength:     267, magic:     255, defense:     210, resistance:     230, health:     292, luck:     223},
                {level:  5,       strength:     365, magic:     341, defense:     252, resistance:     293, health:     330, luck:     278},
                {level: 10,       strength:     552, magic:     506, defense:     332, resistance:     415, health:     405, luck:     385},
            ]
        } ]

    },  {

        name: "Abattoir",
        code: 'abattoir',
        wiki: 'Abattoir',
        element: 'abyss',
        tier: 'legendary',
        class: 'knight',
        abilities: ['defend', 'poison-strike', 'rending-whirlwind'],
        evolutions: [ {
            name: "Abattoir",
            stars: 1,
            stats: [
                {level:  1,       strength:     768, magic:     732, defense:     736, resistance:     700, health:     786, luck:     727},
            ]
        } ]

    },  {

        name: "Alshin Imperial Guard",
        code: 'alshin-imperial-guard',
        wiki: 'Alshin_Imperial_Guard',
        element: 'spirit',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'lance', 'abyss-ward'],
        evolutions: [ {
            name: "Alshin Imperial Guard",
            stars: 1,
            stats: [
                {level:  1,       strength:     311, magic:     287, defense:     316, resistance:     286, health:     300, luck:     279},
                {level:  5,       strength:     385, magic:     336, defense:     402, resistance:     339, health:     371, luck:     323},
            ]
        }, {
            name: "Alshin Imperial Guard++",
            stars: 3,
            stats: [
                {level:  1,       strength:     395, magic:     367, defense:     400, resistance:     366, health:     382, luck:     359},
            ]
        } ]

    },  {

        name: "Alshin Nameless",
        code: 'alshin-nameless',
        wiki: 'Alshin_Nameless',
        element: 'spirit',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal'],
        evolutions: [ {
            name: "Alshin Namelesss",
            stars: 1,
            stats: [
                {level:  1,       strength:     286, magic:     250, defense:     258, resistance:     237, health:     243, luck:     285},
            ]
        }, {
            name: "Alshin Namelesss+",
            stars: 2,
            stats: [
                {level:  1,       strength:     325, magic:     288, defense:     296, resistance:     274, health:     280, luck:     324},
            ]
        } ]

    },  {

        name: "Alshin Renegade",
        code: 'alshin-renegade',
        wiki: 'Alshin_Renegade',
        element: 'spirit',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'rend-armor', 'justice'],
        evolutions: [ {
            name: "Alshin Renegade",
            stars: 1,
            stats: [
                {level:  1,       strength:     223, magic:     180, defense:     178, resistance:     169, health:     183, luck:     202},
            ]
        }, {
            name: "Alshin Renegade+",
            stars: 2,
            stats: [
                {level:  1,       strength:     259, magic:     214, defense:     212, resistance:     202, health:     217, luck:     237},
            ]
        } ]

    },  {

        name: "Alshin Sharpshooter",
        code: 'alshin-sharpshooter',
        wiki: 'Alshin_Sharpshooter',
        element: 'spirit',
        tier: 'uncommon',
        class: 'archer',
        abilities: ['aim-shot', 'barbed-arrows'],
        evolutions: [ {
            name: "Alshin Sharpshooter",
            stars: 1,
            stats: [
                {level:  5,       strength:     247, magic:     226, defense:     149, resistance:     185, health:     217, luck:     173},
                {level: 10,       strength:     410, magic:     368, defense:     218, resistance:     290, health:     281, luck:     265},
            ]
        }, {
            name: "Alshin Sharpshooter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     185, magic:     144, defense:     162, resistance:     218, health:     195, luck:     156},
                {level:  5,       strength:     284, magic:     263, defense:     182, resistance:     219, health:     253, luck:     206},
            ]
        } ]

    },  {

        name: "Alshin Scryer",
        code: 'alshin-scryer',
        wiki: 'Alshin_Scryer',
        element: 'spirit',
        tier: 'rare',
        class: 'wizard',
        abilities: ['arcane-blast', 'sunspark', 'piercing-light'],
        evolutions: [ {
            name: "Alshin Scryer",
            stars: 1,
            stats: [
                {level:  1,       strength:     180, magic:     223, defense:     169, resistance:     207, health:     165, luck:     192},
                {level:  5,       strength:     225, magic:     316, defense:     208, resistance:     287, health:     202, luck:     255},
            ]
        }, {
            name: "Alshin Scryer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     214, magic:     259, defense:     202, resistance:     242, health:     198, luck:     227},
                {level:  5,       strength:     262, magic:     357, defense:     243, resistance:     326, health:     237, luck:     293},
                {level: 10,       strength:     354, magic:     544, defense:     322, resistance:     487, health:     312, luck:     420},
            ]
        } ]

    },  {

        name: "Alshin Shadow",
        code: 'alshin-shadow',
        wiki: 'Alshin_Shadow',
        element: 'spirit',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'flashing-blades', 'haste'],
        evolutions: [ {
            name: "Alshin Shadow",
            stars: 1,
            stats: [
                {level:  1,       strength:     213, magic:     180, defense:     188, resistance:     169, health:     174, luck:     212},
                {level:  5,       strength:     294, magic:     225, defense:     248, resistance:     208, health:     221, luck:     296},
            ]
        }, {
            name: "Alshin Shadow+",
            stars: 2,
            stats: [
                {level:  1,       strength:     270, magic:     232, defense:     240, resistance:     218, health:     225, luck:     269},
            ]
        } ]

    },  {

        name: "Archdruid",
        code: 'archdruid',
        wiki: 'Archdruid',
        element: 'primal',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'noxious-cloud', 'symbol-of-shielding'],
        evolutions: [ {
            name: "Archdruid",
            stars: 1,
            stats: [
                {level:  1,       strength:     355, magic:     414, defense:     363, resistance:     414, health:     355, luck:     378},
            ]
        }, {
            name: "Archdruid+",
            stars: 2,
            stats: [
                {level:  1,       strength:     433, magic:     501, defense:     442, resistance:     501, health:     433, luck:     459},
            ]
        } ]

    },  {

        name: "Badlands Brute",
        code: 'badlands-brute',
        wiki: 'Badlands_Brute',
        element: 'terra',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'head-crack', 'destruction'],
        evolutions: [ {
            name: "Badlands Brute",
            stars: 1,
            stats: [
                {level:  1,       strength:     316, magic:     275, defense:     286, resistance:     275, health:     326, luck:     306},
            ]
        }, {
            name: "Badlands Brute+",
            stars: 2,
            stats: [
                {level:  1,       strength:     357, magic:     314, defense:     325, resistance:     314, health:     367, luck:     346},
            ]
        }, {
            name: "Badlands Brute+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     485, magic:     433, defense:     445, resistance:     433, health:     497, luck:     470},
            ]
        } ]

    },  {

        name: "Badlands Drake",
        code: 'badlands-drake',
        wiki: 'Badlands_Drake',
        element: 'terra',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'flurry', 'gambler-s-ruse'],
        evolutions: [ {
            name: "Badlands Drake",
            stars: 1,
            stats: [
                {level:  1,       strength:     323, magic:     271, defense:     311, resistance:     267, health:     295, luck:     322},
            ]
        }, {
            name: "Badlands Drake+",
            stars: 2,
            stats: [
                {level:  5,       strength:     456, magic:     351, defense:     430, resistance:     344, health:     397, luck:     459},
                {level: 10,       strength:     632, magic:     431, defense:     581, resistance:     419, health:     515, luck:     642},
                {level: 15,       strength:     850, magic:     530, defense:     767, resistance:     512, health:     662, luck:     869},
            ]
        }, {
            name: "Badlands Drake+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     452, magic:     394, defense:     440, resistance:     387, health:     421, luck:     457},
            ]
        } ]

    },  {

        name: "Badlands Jackal",
        code: 'badlands-jackal',
        wiki: 'Badlands_Jackal',
        element: 'terra',
        tier: 'rare',
        class: 'warrior',
        abilities: ['rend-and-tear', 'demoralizing-cry', 'head-crack'],
        evolutions: [ {
            name: "Badlands Jackal",
            stars: 1,
            stats: [
                {level:  1,       strength:     229, magic:     173, defense:     183, resistance:     173, health:     174, luck:     207},
                {level:  5,       strength:     326, magic:     214, defense:     235, resistance:     214, health:     224, luck:     284},
            ]
        } ]

    },  {

        name: "Bandit Assassin",
        code: 'bandit-assassin',
        wiki: 'Bandit_Assassin',
        element: 'terra',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'flurry', 'gambler-s-trick'],
        evolutions: [ {
            name: "Bandit Assassin",
            stars: 1,
            stats: [
                {level:  1,       strength:     207, magic:     169, defense:     192, resistance:     169, health:     191, luck:     207},
            ]
        }, {
            name: "Bandit Assassin+",
            stars: 2,
            stats: [
                {level:  1,       strength:     242, magic:     202, defense:     227, resistance:     202, health:     226, luck:     242},
            ]
        } ]

    },  {

        name: "Bandit Champion",
        code: 'bandit-champion',
        wiki: 'Bandit_Champion',
        element: 'terra',
        tier: 'uncommon',
        class: 'knight',
        abilities: ['defend', 'lance'],
        evolutions: [ {
            name: "Bandit Champion",
            stars: 1,
            stats: [
                {level:  1,       strength:     147, magic:     116, defense:     142, resistance:     125, health:     218, luck:     113},
                {level:  5,       strength:     213, magic:     154, defense:     211, resistance:     173, health:     284, luck:     149},
            ]
        }, {
            name: "Bandit Champion+",
            stars: 2,
            stats: [
                {level:  1,       strength:     179, magic:     147, defense:     174, resistance:     156, health:     254, luck:     144},
            ]
        } ]

    },  {

        name: "Bandit Captain",
        code: 'bandit-captain',
        wiki: 'Bandit_Captain',
        element: 'terra',
        tier: 'uncommon',
        class: 'rogue',
        abilities: ['steal', 'minor-poison'],
        evolutions: [ {
            name: "Bandit Captain",
            stars: 1,
            stats: [
                {level:  1,       strength:     148, magic:     113, defense:     134, resistance:     113, health:     208, luck:     147},
                {level:  5,       strength:     219, magic:     149, defense:     191, resistance:     148, health:     260, luck:     220},
                {level: 10,       strength:     354, magic:     218, defense:     302, resistance:     218, health:     359, luck:     361},
            ]
        }, {
            name: "Bandit Captain+",
            stars: 2,
            stats: [
                {level:  1,       strength:     180, magic:     144, defense:     166, resistance:     144, health:     243, luck:     179},
                {level:  5,       strength:     254, magic:     182, defense:     226, resistance:     182, health:     297, luck:     256},
            ]
        } ]

    },  {

        name: "Bandit Cleric",
        code: 'bandit-cleric',
        wiki: 'Bandit_Cleric',
        element: 'terra',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal', 'mass-heal', 'flamecall'],
        evolutions: [ {
            name: "Bandit Cleric",
            stars: 1,
            stats: [
                {level:  1,       strength:     183, magic:     202, defense:     183, resistance:     212, health:     173, luck:     178},
            ]
        }, {
            name: "Bandit Cleric+",
            stars: 2,
            stats: [
                {level:  1,       strength:     217, magic:     237, defense:     217, resistance:     248, health:     207, luck:     212},
            ]
        }, {
            name: "Bandit Cleric++",
            stars: 3,
            stats: [
                {level:  1,       strength:     253, magic:     274, defense:     253, resistance:     285, health:     242, luck:     248},
            ]
        }, {
            name: "Bandit Cleric+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     291, magic:     313, defense:     291, resistance:     324, health:     279, luck:     285},
                {level:  5,       strength:     346, magic:     398, defense:     356, resistance:     422, health:     327, luck:     342},
                {level: 10,       strength:     452, magic:     562, defense:     482, resistance:     609, health:     419, luck:     452},
            ]
        } ]

    },  {

        name: "Bandit Leader",
        code: 'bandit-leader',
        wiki: 'Bandit_Leader',
        element: 'terra',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'flurry', 'gambler-s-ruse'],
        evolutions: [ {
            name: "Bandit Leader",
            stars: 1,
            stats: [
                {level:  1,       strength:     279, magic:     237, defense:     263, resistance:     237, health:     262, luck:     279},
            ]
        }, {
            name: "Bandit Leader+",
            stars: 2,
            stats: [
                {level:  1,       strength:     318, magic:     274, defense:     301, resistance:     274, health:     300, luck:     318},
            ]
        } ]

    },  {

        name: "Bandit Runeweaver",
        code: 'bandit-runeweaver',
        wiki: 'Bandit_Runeweaver',
        element: 'terra',
        tier: 'uncommon',
        class: 'wizard',
        abilities: ['arcane-blast', 'glyph-of-focus'],
        evolutions: [ {
            name: "Bandit Runeweaver",
            stars: 1,
            stats: [
                {level:  5,       strength:     170, magic:     229, defense:     143, resistance:     229, health:     228, luck:     185},
            ]
        }, {
            name: "Bandit Runeweaver+",
            stars: 2,
            stats: [
                {level:  1,       strength:     157, magic:     185, defense:     139, resistance:     185, health:     226, luck:     162},
            ]
        } ]

    },  {

        name: "Big Ballow",
        code: 'big-ballow',
        wiki: 'Big_Ballow',
        element: 'terra',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'flurry', 'haste'],
        evolutions: [ {
            name: "Big Ballow",
            stars: 1,
            stats: [
                {level:  1,       strength:     317, magic:     275, defense:     301, resistance:     275, health:     299, luck:     316},
            ]
        } ]

    },  {

        name: "Beorin",
        code: 'beorin',
        wiki: 'Beorin',
        element: 'primal',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'abyss-ward', 'shield-bash'],
        evolutions: [ {
            name: "Beorin",
            stars: 1,
            stats: [
                {level:  1,       strength:     321, magic:     279, defense:     310, resistance:     272, health:     334, luck:     271},
            ]
        }, {
            name: "Beorin, Defender of Duskweald",
            stars: 2,
            stats: [
                {level:  1,       strength:     394, magic:     345, defense:     382, resistance:     338, health:     409, luck:     337},
            ]
        } ]

    },  {

        name: "Bellra the Blind",
        code: 'bellra-the-blind',
        wiki: 'Bellra_the_Blind',
        element: 'terra',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'hunter-s-eye', 'predator-s-eye'],
        evolutions: [ {
            name: "Bellra the Blind",
            stars: 1,
            stats: [
                {level:  1,       strength:     235, magic:     223, defense:     158, resistance:     174, health:     187, luck:     195},
                {level:  5,       strength:     336, magic:     312, defense:     191, resistance:     224, health:     237, luck:     255},
                {level: 10,       strength:     531, magic:     481, defense:     234, resistance:     320, health:     333, luck:     370},
            ]
        }, {
            name: "Bellra the Blind+",
            stars: 2,
            stats: [
                {level:  1,       strength:     295, magic:     281, defense:     206, resistance:     225, health:     239, luck:     249},
            ]
        }, {
            name: "Bellra the Blind+",
            stars: 4,
            stats: [
                {level:  1,       strength:     380, magic:     364, defense:     282, resistance:     301, health:     318, luck:     329},
            ]
        } ]

    },  {

        name: "Captain Blackmast",
        code: 'captain-blackmast',
        wiki: 'Captain_Blackmast',
        element: 'spirit',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'impale', 'aegis-guard'],
        evolutions: [ {
            name: "Captain Blackmast",
            stars: 1,
            stats: [
                {level:  1,       strength:     321, magic:     295, defense:     298, resistance:     272, health:     334, luck:     291},
            ]
        }, {
            name: "Captain Blackmast+",
            stars: 2,
            stats: [
                {level:  1,       strength:     394, magic:     364, defense:     367, resistance:     338, health:     409, luck:     360},
            ]
        } ]

    },  {

        name: "Chosen Assassin",
        code: 'chosen-assassin',
        wiki: 'Chosen_Assassin',
        element: 'abyss',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'swindler-s-ruse', 'assassinate'],
        evolutions: [ {
            name: "Chosen Assassin",
            stars: 1,
            stats: [
                {level:  1,       strength:     323, magic:     283, defense:     296, resistance:     275, health:     277, luck:     347},
            ]
        }, {
            name: "Chosen Assassin+",
            stars: 2,
            stats: [
                {level:  1,       strength:     396, magic:     350, defense:     365, resistance:     341, health:     343, luck:     423},
            ]
        } ]

    },  {

        name: "Centaur Dragoon",
        code: 'centaur-dragoon',
        wiki: 'Centaur_Dragoon',
        element: 'terra',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'burning-chant', 'fiery-cleave'],
        evolutions: [ {
            name: "Centaur Dragoon",
            stars: 1,
            stats: [
                {level:  1,       strength:     329, magic:     263, defense:     272, resistance:     295, health:     306, luck:     334},
            ]
        }, {
            name: "Centaur Dragoon+",
            stars: 2,
            stats: [
                {level:  1,       strength:     402, magic:     327, defense:     338, resistance:     364, health:     376, luck:     409},
            ]
        }, {
            name: "Centaur Dragoon++",
            stars: 3,
            stats: [
                {level:  1,       strength:     450, magic:     370, defense:     382, resistance:     409, health:     422, luck:     457},
            ]
        }, {
            name: "Centaur Dragoon+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     498, magic:     414, defense:     427, resistance:     456, health:     468, luck:     505},
            ]
        } ]

    },  {

        name: "Confessor Fela-Alshin",
        code: 'confessor-fela-alshin',
        wiki: 'Confessor_Fela-Alshin',
        element: 'spirit',
        tier: 'legendary',
        class: 'cleric',
        abilities: ['minor-heal', 'resurrection', 'spirit-invocation'],
        evolutions: [ {
            name: "Confessor Fela-Alshin",
            stars: 1,
            stats: [
                {level:  1,       strength:     397, magic:     436, defense:     406, resistance:     429, health:     379, luck:     400},
            ]
        }, {
            name: "Confessor Fela-Alshin+",
            stars: 2,
            stats: [
                {level:  1,       strength:     442, magic:     483, defense:     451, resistance:     475, health:     423, luck:     445},
            ]
        } ]

    },  {

        name: "Crazed Alshin",
        code: 'crazed-alshin',
        wiki: 'Crazed_Alshin',
        element: 'spirit',
        tier: 'uncommon',
        class: 'rogue',
        abilities: ['steal', 'minor-poison'],
        evolutions: [ {
            name: "Crazed Alshinn",
            stars: 1,
            stats: [
                {level:  1,       strength:     152, magic:     123, defense:     130, resistance:     113, health:     193, luck:     152},
                {level:  5,       strength:     226, magic:     165, defense:     185, resistance:     149, health:     235, luck:     229},
            ]
        }, {
            name: "Crazed Alshin+",
            stars: 2,
            stats: [
                {level:  1,       strength:     185, magic:     154, defense:     162, resistance:     144, health:     228, luck:     185},
            ]
        } ]

    },  {

        name: "Danarius the Warlock",
        code: 'danarius-the-warlock',
        wiki: 'Danarius_the_Warlock',
        element: 'terra',
        tier: 'legendary',
        class: 'wizard',
        abilities: ['arcane-blast', 'conflagration', 'slow'],
        evolutions: [ {
            name: "Danarius the Warlock",
            stars: 1,
            stats: [
                {level:  1,       strength:     379, magic:     450, defense:     379, resistance:     422, health:     379, luck:     423},
            ]
        } ]

    },  {

        name: "Denric the Dashing",
        code: 'Denric-the-dashing',
        wiki: 'Denric_the_Dashing',
        element: 'terra',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'deadly-poison', 'garrote'],
        evolutions: [ {
            name: "Denric the Dashing",
            stars: 1,
            stats: [
                {level:  1,       strength:     334, magic:     295, defense:     281, resistance:     263, health:     308, luck:     341},
            ]
        } ]

    },  {

        name: "Duskweald Brute",
        code: 'duskweald-brute',
        wiki: 'Duskweald_Brute',
        element: 'primal',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'rend-armor'],
        evolutions: [ {
            name: "Duskweald Brute",
            stars: 1,
            stats: [
                {level:  1,       strength:     162, magic:     103, defense:     121, resistance:     115, health:     223, luck:     143},
                {level:  5,       strength:     247, magic:     133, defense:     166, resistance:     152, health:     290, luck:     210},
                {level: 10,       strength:     410, magic:     191, defense:     253, resistance:     224, health:     418, luck:     340},
            ]
        }, {
            name: "Duskweald Brute+",
            stars: 2,
            stats: [
                {level:  5,       strength:     284, magic:     165, defense:     199, resistance:     185, health:     329, luck:     246},
                {level: 10,       strength:     455, magic:     226, defense:     291, resistance:     260, health:     463, luck:     381},
            ]
        } ]

    },  {

        name: "Duskweald Heirophant",
        code: 'duskweald-heirophant',
        wiki: 'Duskweald_Heirophant',
        element: 'primal',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal', 'smite', 'primal-infusion'],
        evolutions: [ {
            name: "Duskweald Heirophant",
            stars: 1,
            stats: [
                {level:  1,       strength:     176, magic:     192, defense:     197, resistance:     201, health:     176, luck:     187},
            ]
        }, {
            name: "Duskweald Heirophant+",
            stars: 2,
            stats: [
                {level:  1,       strength:     210, magic:     227, defense:     232, resistance:     236, health:     210, luck:     221},
                {level:  5,       strength:     255, magic:     296, defense:     301, resistance:     316, health:     255, luck:     278},
            ]
        }, {
            name: "Duskweald Heirophant++",
            stars: 3,
            stats: [
                {level:  1,       strength:     246, magic:     263, defense:     269, resistance:     273, health:     246, luck:     257},
            ]
        } ]

    },  {

        name: "Duskweald Slayer",
        code: 'duskweald-slayer',
        wiki: 'Duskweald_Slayer',
        element: 'primal',
        tier: 'epic',
        class: 'archer',
        abilities: ['aim-shot', 'poison-arrow', 'predator-s-mark'],
        evolutions: [ {
            name: "Duskweald Slayer",
            stars: 1,
            stats: [
                {level:  1,       strength:     292, magic:     263, defense:     246, resistance:     253, health:     246, luck:     257},
            ]
        }, {
            name: "Duskweald Slayer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     361, magic:     327, defense:     307, resistance:     316, health:     307, luck:     320},
            ]
        } ]

    },  {

        name: "Duskwing",
        code: 'duskwing',
        wiki: 'Duskwing',
        element: 'primal',
        tier: 'epic',
        class: 'cleric',
        abilities: ['minor-heal', 'mass-heal', 'primal-invocation'],
        evolutions: [ {
            name: "Duskwing",
            stars: 1,
            stats: [
                {level:  1,       strength:     275, magic:     317, defense:     305, resistance:     286, health:     275, luck:     328},
            ]
        }, {
            name: "Duskwing+",
            stars: 2,
            stats: [
                {level:  1,       strength:     314, magic:     358, defense:     346, resistance:     370, health:     314, luck:     352},
            ]
        }, {
            name: "Duskwing++",
            stars: 3,
            stats: [
                {level:  1,       strength:     388, magic:     440, defense:     424, resistance:     400, health:     388, luck:     453},
            ]
        }, {
            name: "Duskwing, the Verdant",
            stars: 4,
            stats: [
                {level:  1,       strength:     432, magic:     485, defense:     470, resistance:     501, health:     432, luck:     445},
            ]
        } ]

    },  {

        name: "Essence Shade",
        code: 'essence-shade',
        wiki: 'Essence_Shade',
        element: 'spirit',
        tier: 'uncommon',
        class: 'rogue',
        abilities: ['steal', 'minor-poison'],
        evolutions: [ {
            name: "Essence Shade",
            stars: 1,
            stats: [
                {level:  1,       strength:     143, magic:     116, defense:     109, resistance:     136, health:     200, luck:     152},
                {level: 10,       strength:     340, magic:     227, defense:     226, resistance:     281, health:     337, luck:     377},
                {level: 20,       strength:     690, magic:     426, defense:     435, resistance:     540, health:     582, luck:     779},
                {level: 40,       strength:    1700, magic:     997, defense:    1037, resistance:    1285, health:    1287, luck:    1935},
            ]
        } ]
    
    },  {

        name: "Essence Sprite",
        code: 'essence-sprite',
        wiki: 'Essence_Sprite',
        element: 'spirit',
        tier: 'common',
        class: 'rogue',
        abilities: ['steal'],
        evolutions: [ {
            name: "Essence Sprite",
            stars: 1,
            stats: [
                {level:  1,       strength:      87, magic:       62, defense:      55, resistance:      80, health:     145, luck:      95},
                {level:  5,       strength:     150, magic:       98, defense:      93, resistance:     127, health:     189, luck:     167},
                {level: 10,       strength:     272, magic:      167, defense:     166, resistance:     217, health:     214, luck:     307},
                {level: 15,       strength:     422, magic:      253, defense:     256, resistance:     328, health:     380, luck:     479},
                {level: 20,       strength:     602, magic:      355, defense:     364, resistance:     461, health:     505, luck:     684},
            ]
        } ]

    },  {

        name: "Freydis",
        code: 'freydis',
        wiki: 'Freydis',
        element: 'lunar',
        tier: 'legendary',
        class: 'archer',
        abilities: ['aim-shot', 'predator-s-mark', 'arrow-of-thunder'],
        evolutions: [ {
            name: "Freydis",
            stars: 1,
            stats: [
                {level:  1,       strength:     450, magic:     412, defense:     392, resistance:     390, health:     406, luck:     395},
                {level: 15,       strength:    1036, magic:     826, defense:     661, resistance:     701, health:     716, luck:     702},
                {level: 20,       strength:    1349, magic:    1048, defense:     805, resistance:     867, health:     882, luck:     867},
                {level: 25,       strength:    1713, magic:    1305, defense:     973, resistance:    1061, health:    1075, luck:    1058},
            ]
        }, {
            name: "Freydis+",
            stars: 2,
            stats: [
                {level:  1,       strength:     624, magic:     557, defense:     521, resistance:     517, health:     547, luck:     522},
            ]
        } ]

    },  {

        name: "Friar Bosric",
        code: 'friar-bosric',
        wiki: 'Friar_Bosric',
        element: 'spirit',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'punish'],
        evolutions: [ {
            name: "Friar Bosric",
            stars: 1,
            stats: [
                {level:  1,       strength:     172, magic:     129, defense:     110, resistance:     103, health:     226, luck:     157},
                {level:  5,       strength:     265, magic:     175, defense:     148, resistance:     133, health:     294, luck:     234},
            ]
        }, {
            name: "Friar Bosric+",
            stars: 2,
            stats: [
                {level:  1,       strength:     223, magic:     172, defense:     152, resistance:     143, health:     284, luck:     205},
            ]
        } ]

    },  {

        name: "Giant Rat",
        code: 'giant-rat',
        wiki: 'Giant_Rat',
        element: 'abyss',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'swindler-s-trick', 'necrotic-cut'],
        evolutions: [ {
            name: "Giant Rat",
            stars: 1,
            stats: [
                {level:  1,       strength:     202, magic:     173, defense:     183, resistance:     173, health:     183, luck:     223},
            ]
        }, {
            name: "Giant Rat+",
            stars: 2,
            stats: [
                {level:  1,       strength:     237, magic:     207, defense:     217, resistance:     207, health:     217, luck:     259},
            ]
        }, {
            name: "Giant Rat++",
            stars: 3,
            stats: [
                {level:  1,       strength:     274, magic:     242, defense:     253, resistance:     242, health:     253, luck:     297},
            ]
        }, {
            name: "Giant Rat+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     313, magic:     279, defense:     291, resistance:     279, health:     291, luck:    337},
            ]
        } ]

    },  {

        name: "Ghost",
        code: 'ghost',
        wiki: 'Ghost',
        element: 'spirit',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'flashing-blades', 'blinding-powder'],
        evolutions: [ {
            name: "Ghost",
            stars: 1,
            stats: [
                {level:  1,       strength:     202, magic:     173, defense:     202, resistance:     158, health:     291, luck:     212},
            ]
        }, {
            name: "Ghost+",
            stars: 2,
            stats: [
                {level:  1,       strength:     237, magic:     207, defense:     237, resistance:     191, health:     226, luck:     248},
            ]
        }, {
            name: "Ghost++",
            stars: 3,
            stats: [
                {level:  1,       strength:     274, magic:     242, defense:     274, resistance:     226, health:     262, luck:     285},
            ]
        }, {
            name: "Ghost+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     313, magic:     279, defense:     313, resistance:     262, health:     300, luck:     324},
            ]
        } ]

    },  {

        name: "Glacial Hunter",
        code: 'glacial-hunter',
        wiki: 'Glacial_Hunter',
        element: 'lunar',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'garrote', 'deadly-poison'],
        evolutions: [ {
            name: "Glacial Hunter",
            stars: 1,
            stats: [
                {level:  1,       strength:     197, magic:     169, defense:     202, resistance:     176, health:     178, luck:     223},
                {level:  1,       strength:     267, magic:     208, defense:     271, resistance:     219, health:     227, luck:     316},
            ]
        }, {
            name: "Glacial Hunter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     232, magic:     202, defense:     237, resistance:     210, health:     122, luck:     259},
            ]
        } ]

    },  {

        name: "Godsworn Hunter",
        code: 'godsworn-hunter',
        wiki: 'Godsworn_Hunter',
        element: 'lunar',
        tier: 'uncommon',
        class: 'archer',
        abilities: ['aimshot', 'volley'],
        evolutions: [ {
            name: "Godsworn Hunter",
            stars: 1,
            stats: [
                {level:  1,       strength:     159, magic:     143, defense:     124, resistance:     117, health:     108, luck:     116},
                {level:  5,       strength:     229, magic:     226, defense:     154, resistance:     191, health:     217, luck:     173},
                {level: 10,       strength:     377, magic:     368, defense:     227, resistance:     302, health:     281, luck:     265},
            ]
        }, {
            name: "Godsworn Hunter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     185, magic:     185, defense:     147, resistance:     166, health:     218, luck:     156},
                {level:  5,       strength:     266, magic:     263, defense:     187, resistance:     226, health:     253, luck:     206},
                {level: 10,       strength:     421, magic:     412, defense:     264, resistance:     342, health:     320, luck:     303},
            ]
        } ]

    },  {

        name: "Godsworn Leader",
        code: 'godsworn-leader',
        wiki: 'Godsworn_Leader',
        element: 'lunar',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'retribution', 'furious-roar'],
        evolutions: [ {
            name: "Godsworn Leader",
            stars: 1,
            stats: [
                {level:  1,       strength:     322, magic:     287, defense:     290, resistance:     279, health:     291, luck:     312},
                {level:  5,       strength:     413, magic:     336, defense:     346, resistance:     323, health:     351, luck:     391},
                {level: 10,       strength:     588, magic:     429, defense:     453, resistance:     408, health:     468, luck:     543},
                {level: 15,       strength:     804, magic:     545, defense:     586, resistance:     513, health:     612, luck:     732},
                {level: 20,       strength:    1062, magic:     684, defense:     744, resistance:     638, health:     784, luck:     957},
            ]
        }, {
            name: "Godsworn Leader+",
            stars: 2,
            stats: [
                {level:  1,       strength:     395, magic:     354, defense:     359, resistance:     345, health:     360, luck:     384},
            ]
        }, {
            name: "Godsworn Leader++",
            stars: 3,
            stats: [
                {level:  1,       strength:     441, magic:     399, defense:     404, resistance:     390, health:     405, luck:     430},
            ]
        }, {
            name: "Godsworn Leader+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     489, magic:     444, defense:     451, resistance:     435, health:     452, luck:     478},
            ]
        } ]

    },  {

        name: "Godsworn Mender",
        code: 'godsworn-mender',
        wiki: 'Godsworn_Mender',
        element: 'lunar',
        tier: 'uncommon',
        class: 'cleric',
        abilities: ['minor-heal', 'mass-regen'],
        evolutions: [ {
            name: "Godsworn Mender",
            stars: 1,
            stats: [
                {level:  1,       strength:     116, magic:     152, defense:     134, resistance:     152, health:     184, luck:     125},
                {level:  5,       strength:     154, magic:     226, defense:     191, resistance:     229, health:     217, luck:     173},
            ]
        }, {
            name: "Godsworn Mender+",
            stars: 2,
            stats: [
                {level:  1,       strength:     147, magic:     185, defense:     166, resistance:     185, health:     218, luck:     156},
                {level:  5,       strength:     187, magic:     263, defense:     226, resistance:     266, health:     253, luck:     206},
                {level: 10,       strength:     264, magic:     412, defense:     341, resistance:     421, health:     320, luck:     303},
            ]
        } ]

    },  {

        name: "Godsworn Shaman",
        code: 'godsworn-shaman',
        wiki: 'Godsworn_Shaman',
        element: 'lunar',
        tier: 'epic',
        class: 'cleric',
        abilities: ['minor-heal', 'mass-regen', 'mana-burst'],
        evolutions: [ {
            name: "Godsworn Shaman",
            stars: 1,
            stats: [
                {level:  1,       strength:     279, magic:     323, defense:     301, resistance:     322, health:     271, luck:     290},
                {level:  5,       strength:     323, magic:     410, defense:     368, resistance:     413, health:     310, luck:     346},
                {level: 10,       strength:     408, magic:     578, defense:     498, resistance:     588, health:     386, luck:     453},
                {level: 15,       strength:     513, magic:     786, defense:     659, resistance:     804, health:     480, luck:     586},
                {level: 20,       strength:     638, magic:    1034, defense:     850, resistance:    1062, health:     592, luck:     744},
            ]
        }, {
            name: "Godsworn Shaman+",
            stars: 2,
            stats: [
                {level:  1,       strength:     318, magic:     364, defense:     341, resistance:     363, health:     310, luck:     330},
            ]
        }, {
            name: "Godsworn Shaman++",
            stars: 3,
            stats: [
                {level:  1,       strength:     359, magic:     407, defense:     383, resistance:     406, health:     351, luck:     372},
            ]
        }, {
            name: "Godsworn Shaman+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     433, magic:     488, defense:     461, resistance:     487, health:     425, luck:     449},
            ]
        } ]

    },  {

        name: "Gorg, The Bold",
        code: 'gorg-the-bold',
        wiki: 'Gorg,_The_Bold',
        element: 'primal',
        tier: 'legendary',
        class: 'knight',
        abilities: ['defend', 'shield-bash', 'warding-guard'],
        evolutions: [ {
            name: "Gorg, The Bold",
            stars: 1,
            stats: [
                {level:  1,       strength:     418, magic:     375, defense:     436, resistance:     395, health:     430, luck:     397},
                {level:  5,       strength:     496, magic:     415, defense:     536, resistance:     453, health:     525, luck:     450},
                {level: 10,       strength:     646, magic:     493, defense:     729, resistance:     564, health:     698, luck:     553},
                {level: 15,       strength:     832, magic:     589, defense:     967, resistance:     702, health:     916, luck:     680},
                {level: 20,       strength:    1053, magic:     704, defense:    1251, resistance:     867, health:    1176, luck:     831},
                {level: 25,       strength:    1310, magic:     838, defense:    1581, resistance:    1058, health:    1478, luck:    1007},
                {level: 30,       strength:    1589, magic:     982, defense:    1938, resistance:    1265, health:    1805, luck:    1197},
                {level: 35,       strength:    1896, magic:    1141, defense:    2332, resistance:    1493, health:    2166, luck:    1407},
                {level: 40,       strength:    2224, magic:    1312, defense:    2754, resistance:    1737, health:    2552, luck:    1632},
                {level: 45,       strength:    2597, magic:    1505, defense:    3232, resistance:    2014, health:    2990, luck:    1887},
                {level: 50,       strength:    2972, magic:    1700, defense:    3714, resistance:    2293, health:    3431, luck:    2143},
                {level: 55,       strength:    3362, magic:    1902, defense:    4214, resistance:    2582, health:    3889, luck:    2410},
                {level: 60,       strength:    3776, magic:    2116, defense:    4741, resistance:    2888, health:    4372, luck:    2691},
                {level: 65,       strength:    4199, magic:    2337, defense:    5288, resistance:    3204, health:    4872, luck:    2982},
                {level: 70,       strength:    4647, magic:    2569, defense:    5862, resistance:    3537, health:    5398, luck:    3288},
                {level: 75,       strength:    5109, magic:    2809, defense:    6455, resistance:    3880, health:    5940, luck:    3604},
                {level: 80,       strength:    5585, magic:    2809, defense:    7066, resistance:    4234, health:    6500, luck:    3930},
                {level: 85,       strength:    6076, magic:    3311, defense:    7695, resistance:    4598, health:    7076, luck:    4266},
            ]
        }, {
            name: "Gorg, The Bold+",
            stars: 2,
            stats: [
                {level:  1,       strength:     505, magic:     456, defense:     526, resistance:     479, health:     520, luck:     481},
            ]
        } ]

    },  {

        name: "Green Knight",
        code: 'green-knight',
        wiki: 'Green_Knight',
        element: 'primal',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'impale', 'stalwart-stance'],
        evolutions: [ {
            name: "Green Knight",
            stars: 1,
            stats: [
                {level:  1,       strength:     188, magic:     176, defense:     218, resistance:     187, health:     197, luck:     169},
            ]
        }, {
            name: "Green Knight+",
            stars: 2,
            stats: [
                {level:  1,       strength:     222, magic:     210, defense:     254, resistance:     221, health:     232, luck:     202},
                {level:  5,       strength:     324, magic:     294, defense:     390, resistance:     317, health:     346, luck:     280},
            ]
        }, {
            name: "Green Knight+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     322, magic:     308, defense:     362, resistance:     321, health:     335, luck:     298},
            ]
        } ]

    },  {

        name: "Greenmist Drake",
        code: 'greenmist-drake',
        wiki: 'Greenmist_Drake',
        element: 'terra',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'garrote', 'flurry'],
        evolutions: [ {
            name: "Greenmist Drake",
            stars: 1,
            stats: [
                {level:  1,       strength:     213, magic:     173, defense:     183, resistance:     173, health:     183, luck:     212},
            ]
        }, {
            name: "Greenmist Drake+",
            stars: 2,
            stats: [
                {level:  1,       strength:     249, magic:     207, defense:     217, resistance:     207, health:     217, luck:     248},
                {level:  5,       strength:     334, magic:     250, defense:     276, resistance:     250, health:     272, luck:     337},
                {level: 10,       strength:     497, magic:     334, defense:     390, resistance:     334, health:     377, luck:     506},
            ]
        } ]

    },  {

        name: "Greenmist Ogre",
        code: 'greenmist-ogre',
        wiki: 'Greenmist_Ogre',
        element: 'terra',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'demoralizing-cry'],
        evolutions: [ {
            name: "Greenmist Ogre",
            stars: 1,
            stats: [
                {level:  1,       strength:     162, magic:     109, defense:     133, resistance:     106, health:     222, luck:     134},
            ]
        }, {
            name: "Greenmist Ogre+",
            stars: 2,
            stats: [
                {level:  1,       strength:     195, magic:     139, defense:     165, resistance:     136, health:     258, luck:     166},
                {level:  5,       strength:     284, magic:     175, defense:     220, resistance:     170, health:     327, luck:     229},
                {level: 10,       strength:     455, magic:     244, defense:     326, resistance:     235, health:     459, luck:     352},
            ]
        } ]

    },  {

        name: "Greenmist Ogre Chief",
        code: 'greenmist-ogre-chief',
        wiki: 'Greenmist_Ogre_Chief',
        element: 'terra',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'demoralizing-cry', 'head-crack'],
        evolutions: [ {
            name: "Greenmist Ogre Chief",
            stars: 1,
            stats: [
                {level:  1,       strength:     230, magic:     171, defense:     198, resistance:     168, health:     296, luck:     199},
                {level: 10,       strength:     554, magic:     320, defense:     411, resistance:     310, health:     557, luck:     439},
            ]
        }, {
            name: "Greenmist Ogre High Chief",
            stars: 2,
            stats: [
                {level:  1,       strength:     267, magic:     205, defense:     233, resistance:     201, health:     336, luck:     234},
                {level: 10,       strength:     554, magic:     320, defense:     411, resistance:     310, health:     557, luck:     439},
            ]
        } ]

    },  {

        name: "Greenmist Shaman",
        code: 'greenmist-shaman',
        wiki: 'Greenmist_Shaman',
        element: 'terra',
        tier: 'uncommin',
        class: 'cleric',
        abilities: ['minor-heal', 'channel-mana'],
        evolutions: [ {
            name: "Greenmist Shaman",
            stars: 1,
            stats: [
                {level:  1,       strength:     123, magic:     134, defense:     142, resistance:     137, health:     201, luck:     118},
                {level:  1,       strength:     165, magic:     194, defense:     205, resistance:     202, health:     244, luck:     161},
            ]
        }, {
            name: "Greenmist Shaman+",
            stars: 2,
            stats: [
                {level:  1,       strength:     154, magic:     166, defense:     174, resistance:     169, health:     236, luck:     149},
            ]
        } ]

    },  {

        name: "Haven Champion",
        code: 'haven-champion',
        wiki: 'Haven_Champion',
        element: 'primal',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'primal-bow', 'furious-roar'],
        evolutions: [ {
            name: "Haven Champion",
            stars: 1,
            stats: [
                {level:  1,       strength:     329, magic:     275, defense:     290, resistance:     275, health:     311, luck:     306},
            ]
        }, {
            name: "Haven Champion+",
            stars: 2,
            stats: [
                {level:  1,       strength:     370, magic:     314, defense:     330, resistance:     314, health:     352, luck:     346},
            ]
        }, {
            name: "Haven Champion++",
            stars: 3,
            stats: [
                {level:  1,       strength:     414, magic:     355, defense:     372, resistance:     355, health:     395, luck:     388},
            ]
        }, {
            name: "Haven Champion+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     460, magic:     398, defense:     416, resistance:     398, health:     440, luck:     433},
            ]
        } ]

    },  {

        name: "Haven Gard Captain",
        code: 'haven-gard-captain',
        wiki: 'Haven_Gard_Captain',
        element: 'primal',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'shield-bash', 'lunar-ward'],
        evolutions: [ {
            name: "Haven Gard Captain",
            stars: 1,
            stats: [
                {level:  1,       strength:     306, magic:     275, defense:     322, resistance:     286, health:     323, luck:     275},
            ]
        }, {
            name: "Haven Gard Captain+",
            stars: 2,
            stats: [
                {level:  1,       strength:     346, magic:     314, defense:     363, resistance:     325, health:     364, luck:     314},
            ]
        }, {
            name: "Haven Gard Captain++",
            stars: 3,
            stats: [
                {level:  1,       strength:     388, magic:     355, defense:     406, resistance:     366, health:     407, luck:     355},
            ]
        }, {
            name: "Haven Gard Captain+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     470, magic:     433, defense:     491, resistance:     445, health:     492, luck:     433},
            ]
        } ]

    },  {

        name: "Haven Medic",
        code: 'haven-medic',
        wiki: 'Haven_Medic',
        element: 'primal',
        tier: 'uncommon',
        class: 'cleric',
        abilities: ['minor-heal', 'smite'],
        evolutions: [ {
            name: "Haven Medic",
            stars: 1,
            stats: [
                {level:  1,       strength:     119, magic:     138, defense:     134, resistance:     147, health:     198, luck:     121},
                {level:  5,       strength:     159, magic:     202, defense:     191, resistance:     220, health:     239, luck:     166},
                {level: 10,       strength:     236, magic:     325, defense:     302, resistance:     361, health:     318, luck:     253},
            ]
        }, {
            name: "Haven Medic+",
            stars: 2,
            stats: [
                {level:  1,       strength:     150, magic:     170, defense:     166, resistance:     179, health:     233, luck:     152},
                {level:  5,       strength:     192, magic:     237, defense:     226, resistance:     256, health:     276, luck:     199},
                {level: 10,       strength:     273, magic:     366, defense:     342, resistance:     403, health:     359, luck:     291},
            ]
        } ]

    },  {

        name: "Haven Medicus",
        code: 'haven-medicus',
        wiki: 'Haven_Medicus',
        element: 'primal',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal', 'smite', 'primal-infusion'],
        evolutions: [ {
            name: "Haven Medicus",
            stars: 1,
            stats: [
                {level:  1,       strength:     183, magic:     204, defense:     199, resistance:     213, health:     270, luck:     185},
            ]
        }, {
            name: "Haven Medicus+",
            stars: 2,
            stats: [
                {level:  1,       strength:     217, magic:     239, defense:     234, resistance:     249, health:     309, luck:     219},
                {level:  5,       strength:     263, magic:     313, defense:     301, resistance:     334, health:     356, luck:     271},
                {level: 10,       strength:     352, magic:     455, defense:     429, resistance:     496, health:     448, luck:     372},
            ]
        } ]

    },  {

        name: "Haven Militia",
        code: 'haven-militia',
        wiki: 'Haven_Militia',
        element: 'primal',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'furious-cry'],
        evolutions: [ {
            name: "Haven Militia",
            stars: 1,
            stats: [
                {level:  1,       strength:     157, magic:     113, defense:     125, resistance:     113, health:     217, luck:     138},
                {level:  5,       strength:     238, magic:     149, defense:     173, resistance:     149, health:     279, luck:     202},
            ]
        }, {
            name: "Haven Militia+",
            stars: 2,
            stats: [
                {level:  1,       strength:     190, magic:     144, defense:     156, resistance:     144, health:     253, luck:     170},
            ]
        } ]

    },  {

        name: "Haven Warden",
        code: 'haven-warden',
        wiki: 'Haven_Warden',
        element: 'primal',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'lance', 'aegis-stance'],
        evolutions: [ {
            name: "Haven Warden",
            stars: 1,
            stats: [
                {level:  1,       strength:     197, magic:     169, defense:     212, resistance:     178, health:     213, luck:     169},
            ]
        }, {
            name: "Haven Warden+",
            stars: 2,
            stats: [
                {level:  1,       strength:     232, magic:     202, defense:     248, resistance:     212, health:     249, luck:     202},
            ]
        }, {
            name: "Haven Warden++",
            stars: 3,
            stats: [
                {level:  1,       strength:     269, magic:     237, defense:     285, resistance:     248, health:     286, luck:     237},
            ]
        }, {
            name: "Haven Warden+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     307, magic:     274, defense:     324, resistance:     285, health:     325, luck:     274},
                {level: 60,       strength:    3814, magic:    2373, defense:    4788, resistance:    2919, health:    4618, luck:    2373},
                {level: 70,       strength:    4748, magic:    2931, defense:    5980, resistance:    3621, health:    5763, luck:    2931},
            ]
        } ]

    },  {

        name: "Hawk",
        code: 'hawk',
        wiki: 'Hawk',
        element: 'primal',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'furious-cry'],
        evolutions: [ {
            name: "Hawk",
            stars: 1,
            stats: [
                {level:  1,       strength:     157, magic:     113, defense:     121, resistance:     116, health:     213, luck:     143},
                {level:  5,       strength:     238, magic:     149, defense:     166, resistance:     154, health:     273, luck:     210},
                {level: 10,       strength:     393, magic:     218, defense:     253, resistance:     227, health:     387, luck:     340},
            ]
        }, {
            name: "Hawk+",
            stars: 2,
            stats: [
                {level:  1,       strength:     190, magic:     144, defense:     152, resistance:     147, health:     249, luck:     175},
            ]
        } ]

    },  {

        name: "Heiress of Frost",
        code: 'heiress-of-Frost',
        wiki: 'Heiress_of_Frost',
        element: 'lunar',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'ice-storm', 'symbol-of-focus'],
        evolutions: [ {
            name: "Heiress of Frost",
            stars: 1,
            stats: [
                {level:  1,       strength:     295, magic:     347, defense:     263, resistance:     298, health:     295, luck:     316},
            ]
        }, {
            name: "Heiress of Frost+",
            stars: 2,
            stats: [
                {level:  1,       strength:     364, magic:     423, defense:     327, resistance:     367, health:     364, luck:     388},
            ]
        } ]

    },  {

        name: "Herridan the Swift",
        code: 'herridan-the-swift',
        wiki: 'Herridan_the_Swift',
        element: 'primal',
        tier: 'legendary',
        class: 'knight',
        abilities: ['defend', 'crusader-s-chant', 'shield-bash'],
        evolutions: [ {
            name: "Herridan the Swift",
            stars: 1,
            stats: [
                {level:  1,       strength:     747, magic:     688, defense:     736, resistance:     750, health:     763, luck:     732},
            ]
        }, {
            name: "Herridan the Swift++",
            stars: 3,
            stats: [
                {level:  1,       strength:     883, magic:     814, defense:     870, resistance:     884, health:     907, luck:     868},
            ]
        } ]

    },  {

        name: "High King Gard",
        code: 'high-king-gard',
        wiki: 'High_King_Gard',
        element: 'abyss',
        tier: 'legendary',
        class: 'knight',
        abilities: ['defend', 'abyss-ward', 'siphon-life'],
        evolutions: [ {
            name: "High King Guard",
            stars: 1,
            stats: [
                {level:  1,       strength:     768, magic:     688, defense:     804, resistance:     738, health:     802, luck:     677},
            ]
        }, {
            name: "High King Guard+",
            stars: 2,
            stats: [
                {level:  1,       strength:     907, magic:     815, defense:     949, resistance:     873, health:     947, luck:     803},
            ]
        }, {
            name: "High King Guard++",
            stars: 3,
            stats: [
                {level:  1,       strength:     981, magic:     884, defense:    1024, resistance:     945, health:    1022, luck:     872},
            ]
        }, {
            name: "High King Guard+++",
            stars: 4,
            stats: [
                {level:  1,       strength:    1055, magic:     952, defense:    1100, resistance:    1017, health:    1098, luck:     940},
            ]
        } ]

    },  {

        name: "High Queen Sigrid",
        code: 'high-queen-sigrid',
        wiki: 'High_Queen_Sigrid',
        element: 'abyss',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'deadly-poison', 'slow'],
        evolutions: [ {
            name: "High Queen Sigrid",
            stars: 1,
            stats: [
                {level:  1,       strength:     334, magic:     303, defense:     260, resistance:     287, health:     308, luck:     347},
            ]
        }, {
            name: "High Queen Sigrid+",
            stars: 2,
            stats: [
                {level:  1,       strength:     409, magic:     373, defense:     324, resistance:     354, health:     378, luck:     423},
            ]
        }, {
            name: "High Queen Sigrid++",
            stars: 3,
            stats: [
                {level:  1,       strength:     457, magic:     418, defense:     367, resistance:     399, health:     424, luck:     471},
            ]
        }, {
            name: "Sigrid, the Queen of Venom",
            stars: 4,
            stats: [
                {level:  1,       strength:     505, magic:     465, defense:     411, resistance:     444, health:     471, luck:     520},
            ]
        } ]

    },  {

        name: "Icthyox",
        code: 'icthyox',
        wiki: 'Icthyox',
        element: 'lunar',
        tier: 'legendary',
        class: 'wizard',
        abilities: ['arcane-blast', 'ice-storm', 'slow'],
        evolutions: [ {
            name: "Icthyox",
            stars: 1,
            stats: [
                {level:  1,       strength:     388, magic:     443, defense:     392, resistance:     443, health:     388, luck:     395},
            ]
        } ]

    },  {

        name: "Ice Behemoth",
        code: 'ice-behemoth',
        wiki: 'Ice_Behemoth',
        element: 'lunar',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'flowing-cut', 'reap'],
        evolutions: [ {
            name: "Ice Behemoth",
            stars: 1,
            stats: [
                {level:  1,       strength:     297, magic:     250, defense:     243, resistance:     233, health:     258, luck:     269},
            ]
        }, {
            name: "Ice Behemoth+",
            stars: 2,
            stats: [
                {level:  1,       strength:     370, magic:     316, defense:     308, resistance:     297, health:     325, luck:     337},
            ]
        } ]

    },  {

        name: "Ice Elemental",
        code: 'ice-elemental',
        wiki: 'Ice_Elemental',
        element: 'lunar',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'flowing-cut', 'reap'],
        evolutions: [ {
            name: "Ice Elemental",
            stars: 1,
            stats: [
                {level:  1,       strength:     223, magic:     180, defense:     174, resistance:     165, health:     188, luck:     197},
            ]
        }, {
            name: "Ice Elemental+",
            stars: 2,
            stats: [
                {level:  1,       strength:     259, magic:     214, defense:     208, resistance:     198, health:     222, luck:     232},
            ]
        } ]

    },  {

        name: "Judge Helfyre",
        code: 'judge-helfyre',
        wiki: 'Judge_Helfyre',
        element: 'primal',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave'],
        evolutions: [ {
            name: "Judge Helfyre",
            stars: 1,
            stats: [
                {level:  1,       strength:     347, magic:     295, defense:     272, resistance:     263, health:     321, luck:     328},
            ]
        }, {
            name: "Judge Helfyre+",
            stars: 2,
            stats: [
                {level:  1,       strength:     423, magic:     364, defense:     338, resistance:     327, health:     394, luck:     401},
            ]
        }, {
            name: "Judge Helfyre+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     480, magic:     421, defense:     395, resistance:     383, health:     450, luck:     458},
            ]
        } ]

    },  {

        name: "Kharaz Devastator",
        code: 'kharaz-devastator',
        wiki: 'Kharaz_Devastator',
        element: 'terra',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'symbol-of-focus', 'conflagration'],
        evolutions: [ {
            name: "Kharaz Devastator+",
            stars: 2,
            stats: [
                {level:  1,       strength:     354, magic:     410, defense:     337, resistance:     382, health:     337, luck:     383},
            ]
        } ]

    },  {

        name: "Katherine the Just",
        code: 'katherine-the-just',
        wiki: 'Katherine_the_Just',
        element: 'lunar',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'stalwart-stance', 'shield-bash'],
        evolutions: [ {
            name: "Katherine the Just",
            stars: 1,
            stats: [
                {level:  1,       strength:     321, magic:     263, defense:     335, resistance:     254, health:     356, luck:     271},
                {level:  5,       strength:     403, magic:     298, defense:     435, resistance:     286, health:     468, luck:     310},
                {level: 10,       strength:     559, magic:     365, defense:     628, resistance:     349, health:     683, luck:     386},
            ]
        }, {
            name: "Katherine the Just+",
            stars: 2,
            stats: [
                {level:  1,       strength:     394, magic:     327, defense:     410, resistance:     317, health:     434, luck:     337},
            ]
        }, {
            name: "Katherine the Just+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     488, magic:     414, defense:     506, resistance:     404, health:     532, luck:     426},
            ]
        } ]

    },  {

        name: "Kharaz Marauder",
        code: 'kharaz-marauder',
        wiki: 'Kharaz_Marauder',
        element: 'terra',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'slice', 'flurry'],
        evolutions: [ {
            name: "Kharaz Marauder",
            stars: 1,
            stats: [
                {level:  1,       strength:     219, magic:     187, defense:     190, resistance:     171, health:     264, luck:     230},
                {level:  5,       strength:     301, magic:     233, defense:     247, resistance:     208, health:     310, luck:     324},
            ]
        }, {
            name: "Kharaz Marauder+",
            stars: 2,
            stats: [
                {level:  1,       strength:     255, magic:     221, defense:     225, resistance:     205, health:     302, luck:     267},
                {level:  5,       strength:     341, magic:     269, defense:     285, resistance:     244, health:     351, luck:     365},
            ]
        } ]

    },  {

        name: "Kharaz Ravager",
        code: 'kharaz-ravager',
        wiki: 'Kharaz_Ravager',
        element: 'terra',
        tier: 'epic',
        class: 'archer',
        abilities: ['aim-shot', 'varra-s-arrow', 'stalker-s-mark'],
        evolutions: [ {
            name: "Kharaz Ravager++",
            stars: 3,
            stats: [
                {level:  1,       strength:     297, magic:     286, defense:     233, resistance:     253, health:     233, luck:     262},
                {level:  5,       strength:     399, magic:     375, defense:     274, resistance:     315, health:     274, luck:     325},
                {level: 10,       strength:     596, magic:     547, defense:     352, resistance:     435, health:     352, luck:     447},
            ]
        } ]

    },  {

        name: "Kharaz Prophet",
        code: 'kharaz-prophet',
        wiki: 'Kharaz_Prophet',
        element: 'terra',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal'],
        evolutions: [ {
            name: "Kharaz Prophet+",
            stars: 1,
            stats: [
                {level:  1,       strength:     180, magic:     213, defense:     183, resistance:     201, health:     165, luck:     191},
                {level:  5,       strength:     225, magic:     294, defense:     239, resistance:     277, health:     202, luck:     248},
            ]
        }, {
            name: "Kharaz Prophet+",
            stars: 2,
            stats: [
                {level:  1,       strength:     232, magic:     270, defense:     235, resistance:     256, health:     214, luck:     245},
            ]
        } ]

    },  {

        name: "Kharaz Sniper",
        code: 'kharaz-sniper',
        wiki: 'Kharaz_Sniper',
        element: 'terra',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'varra-s-arrow', 'stalker-s-eye'],
        evolutions: [ {
            name: "Kharaz Sniper",
            stars: 1,
            stats: [
                {level:  1,       strength:     223, magic:     213, defense:     165, resistance:     183, health:     165, luck:     191},
                {level:  5,       strength:     287, magic:     237, defense:     257, resistance:     207, health:     312, luck:     231},
            ]
        }, {
            name: "Kharaz Sniper+",
            stars: 2,
            stats: [
                {level:  1,       strength:     259, magic:     249, defense:     198, resistance:     217, health:     198, luck:     226},
                {level:  5,       strength:     357, magic:     334, defense:     237, resistance:     276, health:     237, luck:     286},
                {level: 10,       strength:     544, magic:     497, defense:     312, resistance:     390, health:     312, luck:     402},
            ]
        } ]

    },  {

        name: "Kram Beast-Tamer",
        code: 'kram-beast-tamer',
        wiki: 'Kram_Beast-Tamer',
        element: 'primal',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'lance', 'warding-stance'],
        evolutions: [ {
            name: "Kram Beast-Tamer",
            stars: 1,
            stats: [
                {level:  1,       strength:     211, magic:     187, defense:     190, resistance:     166, health:     223, luck:     183},
                {level:  5,       strength:     287, magic:     237, defense:     257, resistance:     207, health:     312, luck:     231},
                {level: 10,       strength:     432, magic:     333, defense:     386, resistance:     287, health:     481, luck:     322},
            ]
        }, {
            name: "Kram Beast-Tamer+++",
            stars: 1,
            stats: [
                {level:  1,       strength:     348, magic:     318, defense:     322, resistance:     291, health:     364, luck:     313},
            ]
        } ]

    },  {

        name: "Liashi Ancient One",
        code: 'liashi-ancient-one',
        wiki: 'Liashi_Ancient_One',
        element: 'terra',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal', 'mass-regen', 'flamecall'],
        evolutions: [ {
            name: "Liashi Ancient One+",
            stars: 2,
            stats: [
                {level:  1,       strength:     202, magic:     232, defense:     232, resistance:     254, health:     210, luck:     212},
            ]
        } ]

    },  {

        name: "Liashi Arbalest",
        code: 'liashi-arbalest',
        wiki: 'Liashi_Arbalest',
        element: 'spirit',
        tier: 'epic',
        class: 'archer',
        abilities: ['aim-shot', 'arrow-of-dawn', 'stalker-s-mark'],
        evolutions: [ {
            name: "Liashi Arbalest",
            stars: 1,
            stats: [
                {level:  1,       strength:     322, magic:     306, defense:     263, resistance:     326, health:     299, luck:     268},
            ]
		}, {
            name: "Liashi Arbalest+",
            stars: 2,
            stats: [
                {level:  1,       strength:     395, magic:     376, defense:     327, resistance:     399, health:     368, luck:     332},
            ]
        } ]

    },  {

        name: "Liashi Golem",
        code: 'liashi-golem',
        wiki: 'Liashi_Golem',
        element: 'terra',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'warding-stance', 'shield-bash'],
        evolutions: [ {
            name: "Liashi Golem",
            stars: 1,
            stats: [
                {level:  1,       strength:     301, magic:     275, defense:     298, resistance:     313, health:     340, luck:     259},
            ]
        } ]

    },  {

        name: "Liashi Lookout",
        code: 'liashi-lookout',
        wiki: 'Liashi_Lookout',
        element: 'spirit',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'gambler-s-trick', 'blinding-powder'],
        evolutions: [ {
            name: "Liashi Lookout",
            stars: 1,
            stats: [
                {level:  1,       strength:     312, magic:     275, defense:     281, resistance:     299, health:     313, luck:     292},
            ]
        } ]

    },  {

        name: "Liashi Ogre Chieftain",
        code: 'liashi-ogre-chieftain',
        wiki: 'Liashi_Ogre_Chieftain',
        element: 'primal',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'thorn-coat', 'mindflay-poison'],
        evolutions: [ {
            name: "Liashi Ogre Chieftain",
            stars: 1,
            stats: [
                {level:  1,       strength:     312, magic:     275, defense:     281, resistance:     299, health:     313, luck:     292},
            ]
        } ]

    },  {

        name: "Liashi Ogre Guardian",
        code: 'liashi-ogre-guardian',
        wiki: 'Liashi_Ogre_Guardin',
        element: 'terra',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'lance', 'warding-stance'],
        evolutions: [ {
            name: "Liashi Ogre Guardian",
            stars: 1,
            stats: [
                {level:  1,       strength:     188, magic:     169, defense:     218, resistance:     187, health:     197, luck:     169},
            ]
        }, {
            name: "Liashi Ogre Guardian+",
            stars: 2,
            stats: [
                {level:  1,       strength:     222, magic:     202, defense:     254, resistance:     221, health:     242, luck:     202},
            ]
        }, {
            name: "Liashi Ogre Guardian++",
            stars: 3,
            stats: [
                {level:  1,       strength:     258, magic:     237, defense:     292, resistance:     257, health:     279, luck:     237},
            ]
        }, {
            name: "Liashi Ogre Guardian+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     296, magic:     274, defense:     332, resistance:     295, health:     318, luck:     274},
                {level:  5,       strength:     365, magic:     319, defense:     435, resistance:     358, health:     408, luck:     319},
                {level: 10,       strength:     498, magic:     407, defense:     631, resistance:     480, health:     579, luck:     407},
            ]
        } ]

    },  {

        name: "Liashi Ogre Invoker",
        code: 'liashi-ogre-invoker',
        wiki: 'Liashi_Ogre_Invoker',
        element: 'terra',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'thorn-coat'],
        evolutions: [ {
            name: "Liashi Ogre Invoker",
            stars: 1,
            stats: [
                {level:  1,       strength:     275, magic:     316, defense:     283, resistance:     329, health:     283, luck:     296},
            ]
        }, {
            name: "Liashi Ogre Invoker+",
            stars: 2,
            stats: [
                {level:  1,       strength:     341, magic:     388, defense:     350, resistance:     402, health:     350, luck:     365},
            ]
        } ]

    },  {

        name: "Liashi Ogre Mage",
        code: 'liashi-ogre-mage',
        wiki: 'Liashi_Ogre_Mage',
        element: 'terra',
        tier: 'uncommon',
        class: 'wizard',
        abilities: ['arcane-blast', 'plasma-bolt'],
        evolutions: [ {
            name: "Liashi Ogre Mage",
            stars: 1,
            stats: [
                {level:  1,       strength:     113, magic:     147, defense:     119, resistance:     157, health:     194, luck:     130},
                {level:  5,       strength:     149, magic:     220, defense:     159, resistance:     238, health:     233, luck:     185},
                {level: 10,       strength:     218, magic:     361, defense:     236, resistance:     393, health:     308, luck:     290},
            ]
        }, {
            name: "Liashi Ogre Mage+",
            stars: 2,
            stats: [
                {level:  1,       strength:     144, magic:     179, defense:     150, resistance:     190, health:     229, luck:     162},
                {level:  5,       strength:     182, magic:     256, defense:     192, resistance:     275, health:     270, luck:     219},
            ]
        } ]

    },  {

        name: "Liashi Ogre Scavenger",
        code: 'liashi-ogre-scavenger',
        wiki: 'Liashi_Ogre_Scavenger',
        element: 'terra',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'thorn-coat', 'primal-bow'],
        evolutions: [ {
            name: "Liashi Ogre Scavenger",
            stars: 1,
            stats: [
                {level:  1,       strength:     207, magic:     169, defense:     187, resistance:     176, health:     197, luck:     197},
            ]
        }, {
            name: "Liashi Ogre Scavenger++",
            stars: 3,
            stats: [
                {level:  1,       strength:     302, magic:     256, defense:     278, resistance:     266, health:     291, luck:     291},
            ]
        } ]

    },  {

        name: "Liashi Siege Golem",
        code: 'liashi-siege-golem',
        wiki: 'Liashi_Siege_Golem',
        element: 'spirit',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'demoralizing-cry'],
        evolutions: [ {
            name: "Liashi Siege Golem",
            stars: 1,
            stats: [
                {level:  1,       strength:     322, magic:     275, defense:     272, resistance:     299, health:     326, luck:     284},
            ]
        } ]

    },  {

        name: "Liashi Phantom",
        code: 'liashi-phantom',
        wiki: 'Liashi_Phantom',
        element: 'spirit',
        tier: 'epic',
        class: 'cleric',
        abilities: ['minor-heal', 'channel-mana'],
        evolutions: [ {
            name: "Liashi Phantom",
            stars: 1,
            stats: [
                {level:  1,       strength:     267, magic:     334, defense:     281, resistance:     347, health:     287, luck:     281},
            ]
        } ]

    },  {

        name: "Liashi Wraith",
        code: 'liashi-wraith',
        wiki: 'Liashi_Wraith',
        element: 'spirit',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast'],
        evolutions: [ {
            name: "Liashi Wraith",
            stars: 1,
            stats: [
                {level:  1,       strength:     267, magic:     347, defense:     263, resistance:     347, health:     387, luck:     281},
            ]
        } ]

    },  {

        name: "Lyna the Doombringer",
        code: 'lyna-the-doombringer',
        wiki: 'Lyna_the_Doombringer',
        element: 'terra',
        tier: 'legendary',
        class: 'warrior',
        abilities: ['cleave', 'rend-armor', 'flowing-cut'],
        evolutions: [ {
            name: "Lyna the Doombringer",
            stars: 1,
            stats: [
                {level:  1,       strength:     804, magic:     732, defense:     700, resistance:     688, health:     768, luck:     778},
            ]
        }, {
            name: "Lyna the Doombringer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     949, magic:     867, defense:     830, resistance:     815, health:       0, luck:     919},
            ]
        }, {
            name: "Lyna the Doombringer++",
            stars: 3,
            stats: [
                {level:  1,       strength:    1031, magic:     945, defense:     906, resistance:     890, health:       0, luck:    1000},
            ]
        }, {
            name: "Lyna the Doombringer+++",
            stars: 4,
            stats: [
                {level:  1,       strength:    1112, magic:    1021, defense:     979, resistance:     963, health:       0, luck:    1079},
            ]
        } ]

    },  {

        name: "Marsh Goblin Hexer",
        code: 'marsh-goblin-hexer',
        wiki: 'Marsh_Goblin_Hexer',
        element: 'primal',
        tier: 'uncommon',
        class: 'wizard',
        abilities: ['arcane-blast'],
        evolutions: [ {
            name: "Marsh Goblin Hexer",
            stars: 1,
            stats: [
                {level:  5,       strength:     159, magic:     202, defense:     154, resistance:     220, health:     233, luck:     205},
                {level: 10,       strength:     236, magic:     328, defense:     227, resistance:     361, health:     308, luck:     327},
            ]
        }, {
            name: "Marsh Goblin Hexer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     150, magic:     169, defense:     147, resistance:     179, health:     229, luck:     174},
                {level: 10,       strength:     273, magic:     370, defense:     264, resistance:     403, health:     349, luck:     368},
            ]
        } ]

    },  {

        name: "Marsh Goblin Ambusher",
        code: 'marsh-goblin-ambusher',
        wiki: 'Marsh_Goblin_Ambusher',
        element: 'primal',
        tier: 'uncommon',
        class: 'rogue',
        abilities: ['steal', 'slice'],
        evolutions: [ {
            name: "Marsh Goblin Ambusher",
            stars: 1,
            stats: [
                {level:  1,       strength:     152, magic:     109, defense:     137, resistance:     116, health:     215, luck:     167},
            ]
        }, {
            name: "Marsh Goblin Ambusher+",
            stars: 2,
            stats: [
                {level:  1,       strength:     185, magic:     139, defense:     169, resistance:     147, health:     251, luck:     200},
                {level:  5,       strength:     262, magic:     174, defense:     232, resistance:     186, health:     305, luck:     292},
                {level: 10,       strength:     410, magic:     242, defense:     352, resistance:     263, health:     408, luck:     469},
            ]
        } ]

    },  {

        name: "Marsh Goblin Witch",
        code: 'marsh-goblin-witch',
        wiki: 'Marsh_Goblin_Witch',
        element: 'primal',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'symbol-of-shielding', 'poison-bolt'],
        evolutions: [ {
            name: "Marsh Goblin Witch",
            stars: 1,
            stats: [
                {level:  1,       strength:     283, magic:     304, defense:     279, resistance:     316, health:     283, luck:     311},
            ]
        }, {
            name: "Marsh Goblin Witch+",
            stars: 2,
            stats: [
                {level:  1,       strength:     322, magic:     344, defense:     318, resistance:     357, health:     322, luck:     352},
            ]
        }, {
            name: "Marsh Goblin Witch++",
            stars: 3,
            stats: [
                {level:  1,       strength:     386, magic:     386, defense:     359, resistance:     400, health:     396, luck:     395},
                {level: 10,       strength:     513, magic:     634, defense:     501, resistance:     678, health:     513, luck:     635},
                {level: 15,       strength:     634, magic:     836, defense:     617, resistance:     904, health:     634, luck:     830},
                {level: 20,       strength:     780, magic:    1076, defense:     755, resistance:    1174, health:     780, luck:    1063},
                {level: 25,       strength:     949, magic:    1356, defense:     915, resistance:    1487, health:     949, luck:    1334},
                {level: 30,       strength:    1131, magic:    1658, defense:    1089, resistance:    1826, health:    1131, luck:    1627},
                {level: 40,       strength:    1549, magic:    2349, defense:    1486, resistance:    2601, health:    1549, luck:    2296},
                {level: 45,       strength:    1779, magic:    2730, defense:    1704, resistance:    3027, health:    1779, luck:    2664},
                {level: 50,       strength:    2022, magic:    3133, defense:    1936, resistance:    3479, health:    2022, luck:    3054},
            ]
        }, {
            name: "Marsh Goblin Witch+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     422, magic:     468, defense:     437, resistance:     485, health:     442, luck:     479},
            ]
        } ]

    },  {

        name: "Marsh Goblin Defender",
        code: 'marsh-goblin-defender',
        wiki: 'Marsh_Goblin_Defender',
        element: 'primal',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'lance', 'warding-stance'],
        evolutions: [ {
            name: "Marsh Goblin Defender",
            stars: 1,
            stats: [
                {level:  1,       strength:     197, magic:     162, defense:     212, resistance:     178, health:     207, luck:     180},
            ]
        }, {
            name: "Marsh Goblin Defender+",
            stars: 2,
            stats: [
                {level:  1,       strength:     232, magic:     195, defense:     248, resistance:     212, health:     242, luck:     214},
            ]
        } ]

    },  {

        name: "Marshland Shadow",
        code: 'marshland-shadow',
        wiki: 'Marshland_Shadow',
        element: 'abyss',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'necrotic-cut', 'assassinate'],
        evolutions: [ {
            name: "Marshland Shadow",
            stars: 1,
            stats: [
                {level:  1,       strength:     328, magic:     275, defense:     291, resistance:     279, health:     286, luck:     329},
            ]
        }, {
            name: "Marshland Shadow+",
            stars: 2,
            stats: [
                {level:  1,       strength:     369, magic:     314, defense:     331, resistance:     318, health:     325, luck:     370},
                {level:  5,       strength:     465, magic:     258, defense:     394, resistance:     364, health:     380, luck:     470},
                {level: 10,       strength:     650, magic:     442, defense:     517, resistance:     453, health:     487, luck:     663},
            ]
        }, {
            name: "Marshland Shadow++",
            stars: 3,
            stats: [
                {level:  1,       strength:     446, magic:     384, defense:     404, resistance:     388, health:     396, luck:     448},
            ]
        }, {
            name: "Marshland Shadow+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     458, magic:     398, defense:     417, resistance:     402, health:     409, luck:     460},
            ]
        } ]

    },  {

        name: "Naema",
        code: 'naema',
        wiki: 'Naema',
        element: 'abyss',
        tier: 'legendary',
        class: 'wizard',
        abilities: ['arcane-blast', 'siphon-life', 'symbol-of-shielding'],
        evolutions: [ {
            name: "Naema",
            stars: 1,
            stats: [
                {level:  1,       strength:     379, magic:     436, defense:     392, resistance:     450, health:     397, luck:     395},
            ]
        }, {
            name: "Naema, The Destroyer",
            stars: 2,
            stats: [
                {level:  1,       strength:     460, magic:     526, defense:     476, resistance:     543, health:     481, luck:     479},
            ]
        } ]

    },  {

        name: "Nightshade Bloodletter",
        code: 'nightshade-bloodletter',
        wiki: 'Nightshade_Bloodletter',
        element: 'abyss',
        tier: 'uncommon',
        class: 'rogue',
        abilities: ['steal', 'minor-poison'],
        evolutions: [ {
            name: "Nightshade Bloodletter",
            stars: 1,
            stats: [
                {level:  1,       strength:     157, magic:     116, defense:     142, resistance:     109, health:     185, luck:     157},
                {level:  5,       strength:     234, magic:     154, defense:     205, resistance:     143, health:     222, luck:     238},
                {level: 10,       strength:     383, magic:     227, defense:     327, resistance:     209, health:     294, luck:     393},
            ]
        }, {
            name: "Nightshade Bloodletter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     190, magic:     147, defense:     174, resistance:     139, health:     219, luck:     190},
                {level:  5,       strength:     271, magic:     187, defense:     240, resistance:     175, health:     258, luck:     275},
                {level: 10,       strength:     428, magic:     264, defense:     368, resistance:     244, health:     333, luck:     438},
            ]
        } ]

    },  {

        name: "Nightshade Eviscerator",
        code: 'nightshade-eviscerator',
        wiki: 'Nightshade_Eviscerator',
        element: 'abyss',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'minor-poison', 'necrotic-cut'],
        evolutions: [ {
            name: "Nightshade Eviscerator",
            stars: 1,
            stats: [
                {level:  1,       strength:     225, magic:     179, defense:     208, resistance:     171, health:     255, luck:     225},
            ]
        }, {
            name: "Nightshade Eviscerator++",
            stars: 3,
            stats: [
                {level:  1,       strength:     242, magic:     192, defense:     223, resistance:     183, health:     275, luck:     242},
            ]
        }, {
            name: "Nightshade Eviscerator+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     261, magic:     213, defense:     243, resistance:     205, health:     293, luck:     261},
                {level:  5,       strength:     371, magic:     273, defense:     336, resistance:     260, health:     359, luck:     375},
                {level: 10,       strength:     544, magic:     358, defense:     477, resistance:     336, health:     443, luck:     555},
            ]
        } ]

    },  {

        name: "Nightshade High Priest",
        code: 'nightshade-high-priest',
        wiki: 'Nightshade_High_Priest',
        element: 'abyss',
        tier: 'epic',
        class: 'cleric',
        abilities: ['minor-heal', 'mass-heal', 'abyss-invocation'],
        evolutions: [ {
            name: "Nightshade High Priest",
            stars: 1,
            stats: [
                {level:  1,       strength:     291, magic:     312, defense:     311, resistance:     310, health:     263, luck:     295},
            ]
        }, {
            name: "Nightshade High Priest+",
            stars: 2,
            stats: [
                {level:  1,       strength:     331, magic:     353, defense:     352, resistance:     351, health:     301, luck:     335},
            ]
        }, {
            name: "Nightshade High Priest++",
            stars: 3,
            stats: [
                {level:  1,       strength:     373, magic:     396, defense:     395, resistance:     394, health:     341, luck:     377},
            ]
        }, {
            name: "Nightshade High Priest+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     450, magic:     476, defense:     475, resistance:     474, health:     413, luck:     454},
            ]
        } ]

    },  {

        name: "Primal Elemental",
        code: 'primal-elemental',
        wiki: 'Primal_Elemental',
        element: 'primal',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'primal-bow', 'demoralizing-cry'],
        evolutions: [ {
            name: "Primal Elemental",
            stars: 1,
            stats: [
                {level:  1,       strength:     212, magic:     173, defense:     183, resistance:     173, health:     211, luck:     223},
            ]
        }, {
            name: "Primal Elemental+",
            stars: 2,
            stats: [
                {level:  1,       strength:     269, magic:     224, defense:     235, resistance:     224, health:     268, luck:     281},
            ]
        } ]

    },  {

        name: "Oromei the Wise",
        code: 'oromei-the-wise',
        wiki: 'Oromei_the_Wise',
        element: 'terra',
        tier: 'legendary',
        class: 'wizard',
        abilities: ['arcane-blast', 'eruption', 'terra-s-curse-chant'],
        evolutions: [ {
            name: "Oromei the Wise",
            stars: 1,
            stats: [
                {level:  1,       strength:     716, magic:     736, defense:     688, resistance:     804, health:     716, luck:     768},
            ]
        } ]

    },  {

        name: "Owlbear",
        code: 'owlbear',
        wiki: 'Owlbear',
        element: 'primal',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'furious-cry', 'primal-blow'],
        evolutions: [ {
            name: "Owlbear",
            stars: 1,
            stats: [
                {level:  1,       strength:     212, magic:     173, defense:     183, resistance:     158, health:     211, luck:     202},
            ]
        } ]

    },  {

        name: "Pallbearer",
        code: 'pallbearer',
        wiki: 'Pallbearer',
        element: 'abyss',
        tier: 'uncommon',
        class: 'rogue',
        abilities: ['steal', 'minor-poison'],
        evolutions: [ {
            name: "Pallbearer",
            stars: 1,
            stats: [
                {level:  5,       strength:     243, magic:     175, defense:     163, resistance:     133, health:     272, luck:     256},
                {level: 10,       strength:     398, magic:     263, defense:     251, resistance:     191, health:     380, luck:     426},
            ]
        } ]

    },  {

        name: "Rampaging Bear",
        code: 'rampaging-bear',
        wiki: 'Rampaging_Bear',
        element: 'primal',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'warding-stance', 'bash'],
        evolutions: [ {
            name: "Rampaging Bear",
            stars: 1,
            stats: [
                {level:  1,       strength:     331, magic:     279, defense:     298, resistance:     272, health:     345, luck:     263},
            ]
        } ]

    },  {

        name: "Rampaging Bloodletter",
        code: 'rampaging-bloodletter',
        wiki: 'Rampaging_Bloodletter',
        element: 'abyss',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'minor-poison', 'necrotic-cut'],
        evolutions: [ {
            name: "Rampaging Bloodletter",
            stars: 1,
            stats: [
                {level:  1,       strength:     345, magic:     279, defense:     281, resistance:     263, health:     317, luck:     298},
            ]
        } ]

    },  {

        name: "Rampaging Drake",
        code: 'rampaging-drake',
        wiki: 'Rampaging_Drake',
        element: 'terra',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'garrote', 'flurry'],
        evolutions: [ {
            name: "Rampaging Drake",
            stars: 1,
            stats: [
                {level:  1,       strength:     345, magic:     279, defense:     281, resistance:     263, health:     317, luck:     298},
            ]
        } ]

    },  {

        name: "Rampaging Elemental",
        code: 'rampaging-elemental',
        wiki: 'Rampaging_Elemental',
        element: 'lunar',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'flowing-cut', 'reap'],
        evolutions: [ {
            name: "Rampaging Elemental",
            stars: 1,
            stats: [
                {level:  1,       strength:     359, magic:     279, defense:     272, resistance:     263, health:     331, luck:     289},
            ]
        } ]

    },  {

        name: "Rampaging Hunter",
        code: 'rampaging-hunter',
        wiki: 'Rampaging_Hunter',
        element: 'lunar',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steale', 'garrote', 'deadly-poison'],
        evolutions: [ {
            name: "Rampaging Hunter",
            stars: 1,
            stats: [
                {level:  1,       strength:     345, magic:     279, defense:     281, resistance:     263, health:     317, luck:     298},
            ]
        } ]

    },  {

        name: "Rampaging Screetch ",
        code: 'rampaging-screetch ',
        wiki: 'Rampaging_Screetch ',
        element: 'abyss',
        tier: 'epic',
        class: 'warrior',
        abilities: ['rend-and-tear', 'retribution', 'frightful-visage'],
        evolutions: [ {
            name: "Rampaging Screetch",
            stars: 1,
            stats: [
                {level:  1,       strength:     359, magic:     279, defense:     272, resistance:     263, health:     331, luck:     289},
            ]
        }, {
            name: "Rampaging Screetch+",
            stars: 2,
            stats: [
                {level:  1,       strength:     437, magic:     345, defense:     338, resistance:     327, health:     406, luck:     356},
            ]
        } ]

    },  {

        name: "Rampaging Shadow",
        code: 'rampaging-shadow',
        wiki: 'Rampaging_Shadow',
        element: 'abyss',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'garrote', 'flurry'],
        evolutions: [ {
            name: "Rampaging Shadow",
            stars: 1,
            stats: [
                {level:  1,       strength:     345, magic:     279, defense:     281, resistance:     263, health:     317, luck:     298},
            ]
        } ]

    },  {

        name: "Rampaging Troll",
        code: 'rampaging-troll',
        wiki: 'Rampaging_Troll',
        element: 'abyss',
        tier: 'epic',
        class: 'warrior',
        abilities: ['steal', 'garrote', 'flurry'],
        evolutions: [ {
            name: "Rampaging Troll",
            stars: 1,
            stats: [
                {level:  1,       strength:     359, magic:     279, defense:     272, resistance:     263, health:     331, luck:     298},
            ]
        } ]

    },  {

        name: "Rampaging Wolf",
        code: 'rampaging-wolf',
        wiki: 'Rampaging_Wolf',
        element: 'primal',
        tier: 'epic',
        class: 'warrior',
        abilities: [],
        evolutions: [ {
            name: "Rampaging Wolf",
            stars: 1,
            stats: [
                {level:  1,       strength:     359, magic:     279, defense:     272, resistance:     263, health:     331, luck:     298},
            ]
        } ]

    },  {

        name: "Rampaging Wretch",
        code: 'rampaging-wretch',
        wiki: 'Rampaging_Wretch',
        element: 'abyss',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'warding-stance', 'bash'],
        evolutions: [ {
            name: "Rampaging Wretch",
            stars: 1,
            stats: [
                {level:  1,       strength:     331, magic:     279, defense:     298, resistance:     272, health:     345, luck:     263},
            ]
        } ]

    },  {

        name: "Ranger of the Deepwood",
        code: 'ranger-of-the-deepwood',
        wiki: 'Ranger_of_the_Deepwood',
        element: 'primal',
        tier: 'epic',
        class: 'archer',
        abilities: ['aim-shot', 'poison-arrow', 'hunter-s-mark'],
        evolutions: [ {
            name: "Ranger of the Deepwood",
            stars: 1,
            stats: [
                {level:  1,       strength:     303, magic:     274, defense:     233, resistance:     263, health:     242, luck:     248},
            ]
        }, {
            name: "Ranger of the Deepwood+",
            stars: 2,
            stats: [
                {level:  1,       strength:     423, magic:     377, defense:     314, resistance:     362, health:     323, luck:     334},
            ]
        } ]

    },  {

        name: "Revenant of Liashi",
        code: 'revenant-of-liashi',
        wiki: 'Revenant_of_Liashi',
        element: 'spirit',
        tier: 'legendary',
        class: 'rogue',
        abilities: ['life-steal', 'haste', 'flashing-blades'],
        evolutions: [ {
            name: "Revenant of Liashi",
            stars: 1,
            stats: [
                {level:  1,       strength:     732, magic:     732, defense:     712, resistance:     732, health:     738, luck:     753},
            ]
        } ]

    },  {

        name: "Rimeholm Abomination",
        code: 'rimeholm-abomination',
        wiki: 'Rimeholm_Abomination',
        element: 'abyss',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'frightful-visage', 'furious-cry'],
        evolutions: [ {
            name: "Rimeholm Abomination",
            stars: 1,
            stats: [
                {level:  1,       strength:     347, magic:     303, defense:     254, resistance:     287, health:     321, luck:     334},
            ]
        }, {
            name: "Rimeholm Abomination",
            stars: 2,
            stats: [
                {level:  1,       strength:     423, magic:     373, defense:     317, resistance:     354, health:     394, luck:     409},
            ]
        }, {
            name: "Rimeholm Abomination",
            stars: 3,
            stats: [
                {level:  1,       strength:     471, magic:     418, defense:     360, resistance:     399, health:     440, luck:     457},
            ]
        }, {
            name: "Rimeholm Abomination",
            stars: 4,
            stats: [
                {level:  1,       strength:     520, magic:     465, defense:     404, resistance:     444, health:     488, luck:     505},
            ]
        } ]

    },  {

        name: "Rimeholm Executioner",
        code: 'rimeholm-executioner',
        wiki: 'Rimeholm_Executioner',
        element: 'lunar',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'justice', 'punish'],
        evolutions: [ {
            name: "Rimeholm Executioner",
            stars: 1,
            stats: [
                {level:  1,       strength:     235, magic:     158, defense:     191, resistance:     144, health:     229, luck:     192},
            ]
        } ]

    },  {

        name: "Rimeholm Defender",
        code: 'rimeholm-defender',
        wiki: 'Rimeholm_Defender',
        element: 'lunar',
        tier: 'uncommon',
        class: 'knight',
        abilities: ['defend', 'lance'],
        evolutions: [ {
            name: "Rimeholm Defender",
            stars: 1,
            stats: [
                {level:  1,       strength:     142, magic:     109, defense:     157, resistance:     110, health:     237, luck:     113},
                {level:  5,       strength:     205, magic:     143, defense:     238, resistance:     148, health:     317, luck:     149},
                {level: 10,       strength:     327, magic:     209, defense:     393, resistance:     221, health:     471, luck:     218},
            ]
        } ]

    },  {

        name: "Rimeholm Exorcist",
        code: 'rimeholm-exorcist',
        wiki: 'Rimeholm_Exorcist',
        element: 'abyss',
        tier: 'epic',
        class: 'cleric',
        abilities: ['minor-heal', 'flamecall', 'mana-burst'],
        evolutions: [ {
            name: "Rimeholm Exorcist",
            stars: 1,
            stats: [
                {level:  1,       strength:     295, magic:     345, defense:     260, resistance:     335, health:     295, luck:     308},
            ]
        } ]

    },  {

        name: "Rimeholm High Guard",
        code: 'rimeholm-high-guard',
        wiki: 'Rimeholm_High_Guard',
        element: 'lunar',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'lance', 'aegis-stance'],
        evolutions: [ {
            name: "Rimeholm High Guard",
            stars: 1,
            stats: [
                {level:  1,       strength:     208, magic:     171, defense:     225, resistance:     173, health:     313, luck:     176},
                {level:  5,       strength:     316, magic:     244, defense:     355, resistance:     251, health:     447, luck:     252},
                {level: 10,       strength:     457, magic:     320, defense:     535, resistance:     336, health:     625, luck:     332},
            ]
        }, {
            name: "Rimeholm High Guard+",
            stars: 2,
            stats: [
                {level:  1,       strength:     243, magic:     205, defense:     261, resistance:     207, health:     354, luck:     210},
                {level:  5,       strength:     366, magic:     277, defense:     413, resistance:     285, health:     515, luck:     285},
                {level: 10,       strength:     508, magic:     353, defense:     595, resistance:     371, health:     695, luck:     366},
            ]
        } ]

    },  {

        name: "Rimeholm Chancellor",
        code: 'rimeholm-chancellor',
        wiki: 'Rimeholm_Chancellor',
        element: 'abyss',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'glyph-of-focus', 'slow'],
        evolutions: [ {
            name: "Rimeholm Chancellor",
            stars: 1,
            stats: [
                {level:  1,       strength:     295, magic:     359, defense:     248, resistance:     335, health:     295, luck:     321},
            ]
        } ]

    },  {

        name: "Rimeholm Kingwatcher",
        code: 'rimeholm-kingwatcher',
        wiki: 'Rimeholm_Kingwatcher',
        element: 'lunar',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'barbed-arrows', 'predator-s-mark'],
        evolutions: [ {
            name: "Rimeholm Kingwatcher",
            stars: 1,
            stats: [
                {level:  1,       strength:     235, magic:     182, defense:     180, resistance:     155, health:     202, luck:     174},
            ]
        }, {
            name: "Rimeholm Kingwatcher+",
            stars: 2,
            stats: [
                {level:  1,       strength:     295, magic:     234, defense:     232, resistance:     203, health:     257, luck:     225},
            ]
        }, {
            name: "Rimeholm Kingwatcher++",
            stars: 3,
            stats: [
                {level:  1,       strength:     337, magic:     272, defense:     270, resistance:     239, health:     296, luck:     262},
            ]
        }, {
            name: "Rimeholm Kingwatcher+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     380, magic:     312, defense:     310, resistance:     277, health:     337, luck:     301},
            ]
        } ]

    },  {

        name: "Rimeholm Necromancer",
        code: 'rimeholm-necromancer',
        wiki: 'Rimeholm_Necromancer',
        element: 'abyss',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'poison-bolt', 'siphon-life'],
        evolutions: [ {
            name: "Rimeholm Necromancer",
            stars: 1,
            stats: [
                {level:  1,       strength:     295, magic:     359, defense:     248, resistance:     335, health:     295, luck:     321},
            ]
        }, {
            name: "Rimeholm Necromancer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     389, magic:     493, defense:     322, resistance:     457, health:     389, luck:     432},
            ]
        } ]

    },  {

        name: "Rimeholm Royal Guard",
        code: 'rimeholm-royal-guard',
        wiki: 'Rimeholm_Royal_Guard',
        element: 'lunar',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'stalwart-stance', 'shield-bash'],
        evolutions: [ {
            name: "Rimeholm Royal Guard",
            stars: 1,
            stats: [
                {level:  1,       strength:     211, magic:     158, defense:     223, resistance:     150, health:     243, luck:     165},
            ]
        }, {
            name: "Rimeholm Royal Guard+",
            stars: 2,
            stats: [
                {level:  1,       strength:     268, magic:     206, defense:     281, resistance:     198, health:     304, luck:     214},
            ]
        } ]

    },  {

        name: "Rimeholm Scout",
        code: 'rimeholm-scout',
        wiki: 'Rimeholm_Scout',
        element: 'lunar',
        tier: 'epic',
        class: 'rogue',
        abilities: ['steal', 'deadly-poison', 'swindler-s-ruse'],
        evolutions: [ {
            name: "Rimeholm Scout",
            stars: 1,
            stats: [
                {level:  1,       strength:     323, magic:     271, defense:     306, resistance:     263, health:     308, luck:     316},
                {level:  1,       strength:     410, magic:     310, defense:     377, resistance:     298, health:     375, luck:     402},
            ]
        }, {
            name: "Rimeholm Scout+",
            stars: 2,
            stats: [
                {level:  1,       strength:     364, magic:     310, defense:     346, resistance:     301, health:     348, luck:     357},
            ]
        }, {
            name: "Rimeholm Scout++",
            stars: 3,
            stats: [
                {level:  1,       strength:     442, magic:     381, defense:     422, resistance:     370, health:     424, luck:     435},
            ]
        }, {
            name: "Rimeholm Scout+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     452, magic:     394, defense:     432, resistance:     383, health:     435, luck:     445},
                {level:  5,       strength:     553, magic:     440, defense:     514, resistance:     423, health:     513, luck:     545},
                {level: 10,       strength:     748, magic:     527, defense:     672, resistance:     501, health:     663, luck:     737},
                {level: 15,       strength:     988, magic:     636, defense:     868, resistance:     597, health:     849, luck:     974}, 
                {level: 20,       strength:    1275, magic:     766, defense:    1101, resistance:     712, health:    1070, luck:    1258},
                {level: 25,       strength:    1633, magic:     928, defense:    1392, resistance:     855, health:    1347, luck:    1610},
                {level: 30,       strength:    2017, magic:    1102, defense:    1704, resistance:    1009, health:    1644, luck:    1990},
                {level: 35,       strength:    2534, magic:    1337, defense:    2125, resistance:    1216, health:    2043, luck:    2500},
                {level: 40,       strength:    2891, magic:    1499, defense:    2415, resistance:    1359, health:    2319, luck:    2853},
                {level: 45,       strength:    3363, magic:    1713, defense:    2799, resistance:    1548, health:    2684, luck:    3323},
                {level: 50,       strength:    3961, magic:    1940, defense:    3207, resistance:    1749, health:    3071, luck:    3814},
                {level: 55,       strength:    4385, magic:    2176, defense:    3651, resistance:    1957, health:    3473, luck:    4328},
                {level: 60,       strength:    4935, magic:    2425, defense:    4078, resistance:    2177, health:    3898, luck:    4870},
                {level: 70,       strength:    6159, magic:    2980, defense:    5073, resistance:    2668, health:    4843, luck:    6078},
                {level: 75,       strength:    6782, magic:    3262, defense:    5580, resistance:    2918, health:    5324, luck:    6694},
                {level: 80,       strength:    7494, magic:    3586, defense:    6160, resistance:    3204, health:    5875, luck:    7396},
                {level: 85,       strength:    8163, magic:    3889, defense:    6704, resistance:    3472, health:    6392, luck:    8056},
            ]
        } ],

    },  {

        name: "Rimeholm Warlord",
        code: 'rimeholm-warlord',
        wiki: 'Rimeholm_Warlord',
        element: 'lunar',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'retribution', 'flowing-cut'],
        evolutions: [ {
            name: "Rimeholm Warlord",
            stars: 1,
            stats: [
                {level:  1,       strength:     223, magic:     165, defense:     187, resistance:     158, health:     211, luck:     197},
            ]
        }, {
            name: "Rimeholm Warlord+",
            stars: 2,
            stats: [
                {level:  1,       strength:     259, magic:     198, defense:     221, resistance:     191, health:     247, luck:     232},
            ]
        } ],

    },  {

        name: "Risen Berserker",
        code: 'risen-berserker',
        wiki: 'Risen_Berserker',
        element: 'abyss',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'frightful-visage', 'demoralizing-cry'],
        evolutions: [ {
            name: "Risen Berserker",
            stars: 1,
            stats: [
                {level:  1,       strength:     201, magic:     173, defense:     187, resistance:     180, health:     202, luck:     187},
            ]
        }, {
            name: "Risen Berserker+",
            stars: 2,
            stats: [
                {level:  5,       strength:     316, magic:     250, defense:     278, resistance:     262, health:     310, luck:     286},
            ]
        } ],

    },  {

        name: "Risen Archer",
        code: 'risen-archer',
        wiki: 'Risen_Archer',
        element: 'abyss',
        tier: 'uncommon',
        class: 'archer',
        abilities: ['aim-shot', 'dual-shot'],
        evolutions: [ {
            name: "Risen Archer",
            stars: 1,
            stats: [
                {level:  1,       strength:     142, magic:     143, defense:     119, resistance:     142, health:     198, luck:     114},
            ]
        }, {
            name: "Risen Archer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     174, magic:     175, defense:     150, resistance:     174, health:     233, luck:     145},
                {level:  5,       strength:     247, magic:     246, defense:     192, resistance:     240, health:     276, luck:     187},
                {level: 10,       strength:     386, magic:     381, defense:     273, resistance:     368, health:     359, luck:     269},
            ]
        } ],

    },  {

        name: "Risen Bloodmage",
        code: 'risen-bloodmage',
        wiki: 'Risen_Bloodmage',
        element: 'abyss',
        tier: 'rare',
        class: 'wizard',
        abilities: ['arcane-blast', 'glyph-of-shielding', 'lightning-strike'],
        evolutions: [ {
            name: "Risen Bloodmage",
            stars: 1,
            stats: [
                {level:  1,       strength:     165, magic:     212, defense:     176, resistance:     223, health:     180, luck:     179},
            ]
        }, {
            name: "Risen Bloodmage+",
            stars: 2,
            stats: [
                {level:  1,       strength:     198, magic:     248, defense:     210, resistance:     259, health:     214, luck:     213},
            ]
        }, {
            name: "Risen Bloodmage++",
            stars: 3,
            stats: [
                {level:  1,       strength:     233, magic:     285, defense:     246, resistance:     297, health:     250, luck:     249},
            ]
        }, {
            name: "Risen Bloodmage+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     270, magic:     324, defense:     283, resistance:     337, health:     288, luck:     286},
                {level:  5,       strength:     313, magic:     422, defense:     333, resistance:     445, health:     341, luck:     348},
                {level: 10,       strength:     395, magic:     609, defense:     430, resistance:     651, health:     442, luck:     466},
            ]
        } ],

    },  {

        name: "Risen Rager",
        code: 'risen-rager',
        wiki: 'Risen_Rager',
        element: 'abyss',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'frightful-visage', 'demoralizing-roar'],
        evolutions: [ {
            name: "Risen Rager",
            stars: 1,
            stats: [
                {level:  1,       strength:     273, magic:     242, defense:     257, resistance:     250, health:     274, luck:     257},
            ]
        }, {
            name: "Risen Rager+",
            stars: 1,
            stats: [
                {level:  1,       strength:     335, magic:     299, defense:     317, resistance:     309, health:     336, luck:     317},
            ]
        } ],

    },  {

        name: "Runewood Alpha",
        code: 'runewood-alpha',
        wiki: 'Runewood_Alpha',
        element: 'primal',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'furious-cry', 'primal-bow'],
        evolutions: [ {
            name: "Runewood Alpha",
            stars: 1,
            stats: [
                {level:  1,       strength:     225, magic:     171, defense:     185, resistance:     179, health:     286, luck:     214},
            ]
        }, {
            name: "Runewood Alpha+",
            stars: 2,
            stats: [
                {level:  1,       strength:     283, magic:     222, defense:     237, resistance:     230, health:     353, luck:     271},
            ]
        } ],

    },  {

        name: "Runewood Bear",
        code: 'runewood-bear',
        wiki: 'Runewood_Bear',
        element: 'primal',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'warding-stance', 'bash'],
        evolutions: [ {
            name: "Runewood Bear",
            stars: 1,
            stats: [
                {level:  1,       strength:     202, magic:     165, defense:     223, resistance:     166, health:     218, luck:     169},
            ]
        }, {
            name: "Runewood Bear+",
            stars: 2,
            stats: [
                {level:  1,       strength:     237, magic:     198, defense:     259, resistance:     197, health:     254, luck:     202},
            ]
        } ],

    },  {

        name: "Runewood Forester",
        code: 'runewood-forester',
        wiki: 'Runewood_Forester',
        element: 'primal',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'primal-bow', 'demoralizing-roar'],
        evolutions: [ {
            name: "Runewood Forester",
            stars: 1,
            stats: [
                {level:  1,       strength:     341, magic:     279, defense:     281, resistance:     279, health:     301, luck:     306},
            ]
        }, {
            name: "Runewood Forester+",
            stars: 2,
            stats: [
                {level:  1,       strength:     422, magic:     348, defense:     350, resistance:     348, health:     374, luck:     380},
            ]
        }, {
            name: "Runewood Forester++",
            stars: 3,
            stats: [
                {level:  1,       strength:     427, magic:     359, defense:     361, resistance:     359, health:     383, luck:     388},
            ]
        }, {
            name: "Runewood Forester+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     473, magic:     402, defense:     404, resistance:     402, health:     427, luck:     432},
            ]
        } ],

    },  {

        name: "Runewood Guide",
        code: 'runewood-guide',
        wiki: 'Runewood_Guide',
        element: 'primal',
        tier: 'uncommon',
        class: 'knight',
        abilities: ['defend', 'warding-stance'],
        evolutions: [ {
            name: "Runewood Guide",
            stars: 1,
            stats: [
                {level:  1,       strength:     147, magic:     116, defense:     142, resistance:     125, health:     218, luck:     113},
            ]
        }, {
            name: "Runewood Guide+",
            stars: 2,
            stats: [
                {level:  1,       strength:     179, magic:     147, defense:     174, resistance:     156, health:     254, luck:     144},
                {level:  5,       strength:     213, magic:     154, defense:     211, resistance:     173, health:     284, luck:     159},
                {level: 10,       strength:     341, magic:     227, defense:     344, resistance:     265, health:     412, luck:     218},
            ]
        } ],

    },  {

        name: "Runewood Hunter",
        code: 'runewood-hunter',
        wiki: 'Runewood_Hunter',
        element: 'primal',
        tier: 'uncommon',
        class: 'archer',
        abilities: ['aim-shot', 'rain-of-arrows'],
        evolutions: [ {
            name: "Runewood Hunter",
            stars: 1,
            stats: [
                {level:  5,       strength:     256, magic:     210, defense:     143, resistance:     191, health:     228, luck:     166},
            ]
        }, {
            name: "Runewood Hunter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     200, magic:     175, defense:     139, resistance:     166, health:     226, luck:     152},
                {level:  5,       strength:     293, magic:     246, defense:     175, resistance:     226, health:     265, luck:     199},
                {level: 10,       strength:     472, magic:     381, defense:     244, resistance:     342, health:     340, luck:     291},
            ]
        } ],

    },  {

        name: "Runewood Ranger",
        code: 'runewood-ranger',
        wiki: 'Runewood_Ranger',
        element: 'primal',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'poison-arrow', 'hunter-s-eye'],
        evolutions: [ {
            name: "Runewood Ranger",
            stars: 1,
            stats: [
                {level:  1,       strength:     229, magic:     202, defense:     165, resistance:     192, health:     173, luck:     178},
            ]
        }, {
            name: "Runewood Ranger+",
            stars: 2,
            stats: [
                {level:  1,       strength:     265, magic:     237, defense:     198, resistance:     227, health:     207, luck:     212},
            ]
        } ],

    },  {

        name: "Runewood Guide",
        code: 'runewood-guide',
        wiki: 'Runewood_Guide',
        element: 'primal',
        tier: 'uncommon',
        class: 'knight',
        abilities: ['defend', 'warding-stance'],
        evolutions: [ {
            name: "Runewood Guide",
            stars: 1,
            stats: [
                {level:  1,       strength:     147, magic:     116, defense:     142, resistance:     125, health:     218, luck:     113},
            ]
        }, {
            name: "Runewood Guide+",
            stars: 2,
            stats: [
                {level:  1,       strength:     179, magic:     147, defense:     174, resistance:     156, health:     254, luck:     144},
                {level:  5,       strength:     249, magic:     187, defense:     247, resistance:     206, health:     324, luck:     182},
                {level: 10,       strength:     382, magic:     264, defense:     386, resistance:     303, health:     458, luck:     255},
            ]
        } ],

    },  {

        name: "Runewood Screetch",
        code: 'runewood-screetch',
        wiki: 'Runewood_Screetch',
        element: 'abyss',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'retribution', 'frightful-visage'],
        evolutions: [ {
            name: "Runewood Screetch",
            stars: 1,
            stats: [
                {level:  1,       strength:     235, magic:     173, defense:     174, resistance:     173, health:     183, luck:     202},
            ]
        }, {
            name: "Runewood Screetch+",
            stars: 2,
            stats: [
                {level:  1,       strength:     295, magic:     224, defense:     225, resistance:     224, health:     235, luck:     257},
            ]
        } ],

    },  {

        name: "Runewood Wretch",
        code: 'runewood-wretch',
        wiki: 'Runewood_Wretch',
        element: 'abyss',
        tier: 'uncommon',
        class: 'knight',
        abilities: ['defend', 'warding-stance'],
        evolutions: [ {
            name: "Runewood Wretch",
            stars: 1,
            stats: [
                {level:  1,       strength:     151, magic:     116, defense:     142, resistance:     125, health:     209, luck:     116},
            ]
        }, {
            name: "Runewood Wretch+",
            stars: 2,
            stats: [
                {level:  1,       strength:     184, magic:     147, defense:     174, resistance:     156, health:     224, luck:     0},
                {level:  5,       strength:     257, magic:     187, defense:     247, resistance:     206, health:     307, luck:   187},
                {level: 10,       strength:     396, magic:     264, defense:     386, resistance:     303, health:     427, luck:   264},
            ]
        } ],

    },  {

        name: "Runewood Wolf",
        code: 'runewood-wolf',
        wiki: 'Runewood_Wolf',
        element: 'primal',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'furious-cry'],
        evolutions: [ {
            name: "Runewood Wolf",
            stars: 1,
            stats: [
                {level:  1,       strength:     157, magic:     109, defense:     121, resistance:     116, health:     123, luck:     148},
                {level:  5,       strength:     238, magic:     143, defense:     166, resistance:     154, health:     273, luck:     219},
            ]
        }, {
            name: "Runewood Wolf+",
            stars: 2,
            stats: [
                {level:  1,       strength:     190, magic:     139, defense:     152, resistance:     147, health:     249, luck:     180},
                {level:  5,       strength:     238, magic:     143, defense:     166, resistance:     154, health:     273, luck:     219},
            ]
        } ],

    },  {

        name: "Scurvrent the Fetid",
        code: 'scurvrent-the-fetid',
        wiki: 'Scurvrent_the_Fetid',
        element: 'abyss',
        tier: 'rare',
        class: 'wizard',
        abilities: ['arcane-blast', 'poison-bolt', 'noxious-cloud'],
        evolutions: [ {
            name: "Scurvrent the Fetid",
            stars: 1,
            stats: [
                {level:  1,       strength:     187, magic:     235, defense:     158, resistance:     190, health:     187, luck:     206},
                {level:  5,       strength:     237, magic:     336, defense:     191, resistance:     257, health:     237, luck:     278},
                {level: 10,       strength:     333, magic:     531, defense:     254, resistance:     386, health:     333, luck:     418},
            ]
        }, {
            name: "Scurvrent the Fetid++",
            stars: 3,
            stats: [
                {level:  1,       strength:     283, magic:     348, defense:     247, resistance:     290, health:     187, luck:     206},
            ]
        }, {
            name: "Scurvrent the Fetid+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     318, magic:     380, defense:     282, resistance:     322, health:     318, luck:     342},
            ]
        } ],

    },  {

        name: "Stone Elemental",
        code: 'stone-elemental',
        wiki: 'Stone_Elemental',
        element: 'terra',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'shield-bash', 'stalwart-guard'],
        evolutions: [ {
            name: "Stone Elemental",
            stars: 1,
            stats: [
                {level:  1,       strength:     192, magic:     165, defense:     223, resistance:     166, health:     223, luck:     173},
            ]
        }, {
            name: "Stone Elemental+",
            stars: 2,
            stats: [
                {level:  1,       strength:     227, magic:     198, defense:     259, resistance:     199, health:     259, luck:     207},
                {level:  5,       strength:     293, magic:     237, defense:     357, resistance:     242, health:     352, luck:     250},
            ]
        }, {
            name: "Stone Elemental++",
            stars: 3,
            stats: [
                {level:  1,       strength:     283, magic:     251, defense:     321, resistance:     252, health:     321, luck:     261},
                {level:  5,       strength:     332, magic:     274, defense:     399, resistance:     281, health:     395, luck:     287},
                {level: 10,       strength:     465, magic:     352, defense:     596, resistance:     367, health:     582, luck:     365},
            ]
        }, {
            name: "Stone Elemental+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     301, magic:     270, defense:     337, resistance:     271, health:     337, luck:     279},
                {level:  5,       strength:     374, magic:     313, defense:     445, resistance:     319, health:     440, luck:     327},
                {level: 10,       strength:     513, magic:     395, defense:     651, resistance:     411, health:     636, luck:     419},
            ]
        } ],

    },  {

        name: "Sug-Yugol Champion",
        code: 'sug-yugol-champion',
        wiki: 'Sug-Yugol_Champion',
        element: 'lunar',
        tier: 'epic',
        class: 'knight',
        abilities: ['defend', 'impale', 'terra-ward'],
        evolutions: [ {
            name: "Sug-Yugol Champion+",
            stars: 2,
            stats: [
                {level:  1,       strength:     301, magic:     283, defense:     332, resistance:     295, health:     313, luck:     267},
            ]
        } ],

    },  {

        name: "Sug-Yugol Blade",
        code: 'sug-yugol-blade',
        wiki: 'Sug-Yugol_Blade',
        element: 'lunar',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'gambler-s-trick', 'flurry'],
        evolutions: [ {
            name: "Sug-Yugol Blade",
            stars: 1,
            stats: [
                {level:  1,       strength:     202, magic:     176, defense:     197, resistance:     176, health:     183, luck:     195},
                {level:  5,       strength:     276, magic:     219, defense:     263, resistance:     219, health:     235, luck:     266},
                {level: 10,       strength:     417, magic:     303, defense:     390, resistance:     303, health:     335, luck:     404},
            ]
        }, {
            name: "Sug-Yugol Blade+",
            stars: 2,
            stats: [
                {level:  5,       strength:     314, magic:     255, defense:     301, resistance:     255, health:     272, luck:     305},
                {level: 10,       strength:     463, magic:     343, defense:     344, resistance:     343, health:     377, luck:     449},
            ]
        } ],

    },  {

        name: "Sug-Yugol Deep One",
        code: 'sug-yugol-deep-one',
        wiki: 'Sug-Yugol_Deep_One',
        element: 'lunar',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'ice-storm', 'symbol-of-focus'],
        evolutions: [ {
            name: "Sug-Yugol Deep One",
            stars: 1,
            stats: [
                {level:  1,       strength:     279, magic:     329, defense:     283, resistance:     329, health:     279, luck:     286},
                {level:  5,       strength:     323, magic:     425, defense:     329, resistance:     425, health:     323, luck:     343},
                {level: 10,       strength:     408, magic:     608, defense:     419, resistance:     608, health:     408, luck:     453},
            ]
        }, {
            name: "Sug-Yugol Deep One+",
            stars: 2,
            stats: [
                {level:  1,       strength:     345, magic:     402, defense:     350, resistance:     402, health:     345, luck:     363},
            ]
        }, {
            name: "Sug-Yugol Deep One++",
            stars: 3,
            stats: [
                {level:  1,       strength:     359, magic:     414, defense:     363, resistance:     414, health:     359, luck:     366},
            ]
        }, {
            name: "Sug-Yugol Deep One+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     437, magic:     500, defense:     441, resistance:     500, health:     437, luck:     444},
            ]
        } ],

    },  {

        name: "Sug-Yugol Gladiator",
        code: 'sug-yugol-gladiator',
        wiki: 'Sug-Yugol_Gladiator',
        element: 'lunar',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'impale', 'terra-ward'],
        evolutions: [ {
            name: "Sug-Yugol Gladiator",
            stars: 1,
            stats: [
                {level:  1,       strength:     192, magic:     176, defense:     218, resistance:     187, health:     202, luck:     162},
                {level:  5,       strength:     255, magic:     219, defense:     307, resistance:     242, health:     276, luck:     197},
                {level: 10,       strength:     375, magic:     303, defense:     477, resistance:     347, health:     417, luck:     264},
            ]
        }, {
            name: "Sug-Yugol Gladiator+",
            stars: 2,
            stats: [
                {level:  1,       strength:     227, magic:     210, defense:     254, resistance:     221, health:     237, luck:     195},
                {level:  5,       strength:     293, magic:     255, defense:     247, resistance:     278, health:     314, luck:     232},
                {level: 10,       strength:     420, magic:     343, defense:     526, resistance:     389, health:     463, luck:     302},
            ]
        } ],

    },  {

        name: "Sug-Yugol High Priest",
        code: 'sug-yugol-high-priest',
        wiki: 'Sug-Yugol_High_Priest',
        element: 'lunar',
        tier: 'epic',
        class: 'cleric',
        abilities: ['minor-heal'],
        evolutions: [ {
            name: "Sug-Yugol High Priest+++",
            stars: 3,
            stats: [
                {level:  1,       strength:     359, magic:     401, defense:     388, resistance:     414, health:     359, luck:     357},
            ]
        }, {
            name: "Sug-Yugol High Priest+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     437, magic:     486, defense:     470, resistance:     501, health:     437, luck:     435},
            ]
        } ],

    },  {

        name: "Sug-Yugol Pillager",
        code: 'sug-yugol-pillager',
        wiki: 'Sug-Yugol_Pillager',
        element: 'lunar',
        tier: 'uncommon',
        class: 'warrior',
        abilities: ['cleave', 'punish'],
        evolutions: [ {
            name: "Sug-Yugol Pillager",
            stars: 1,
            stats: [
                {level:  1,       strength:     156, magic:     123, defense:     133, resistance:     123, health:     220, luck:     133},
                {level:  5,       strength:     236, magic:     164, defense:     185, resistance:     164, health:     279, luck:     192},
            ]
        }, {
            name: "Sug-Yugol Pillager+",
            stars: 2,
            stats: [
                {level:  1,       strength:     189, magic:     154, defense:     165, resistance:     154, health:     256, luck:     165},
            ]
        } ],

    },  {

        name: "Swamp Troll",
        code: 'swamp-troll',
        wiki: 'Swamp_Troll',
        element: 'abyss',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'punish'],
        evolutions: [ {
            name: "Swamp Troll",
            stars: 1,
            stats: [
                {level:  5,       strength:     265, magic:     149, defense:     161, resistance:     122, health:     294, luck:     219},
                {level: 10,       strength:     442, magic:     218, defense:     243, resistance:     173, health:     426, luck:     354},
            ]
        }, {
            name: "Swamp Troll+",
            stars: 2,
            stats: [
                {level:  1,       strength:     172, magic:     113, defense:     118, resistance:     96, health:     226, luck:     148},
            ]
        } ],

    },  {

        name: "Swamp Troll Brute",
        code: 'swamp-troll-brute',
        wiki: 'Swamp_Troll_Brute',
        element: 'abyss',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'punish', 'frightful-visage'],
        evolutions: [ {
            name: "Swamp Troll Brute",
            stars: 1,
            stats: [
                {level:  1,       strength:     241, magic:     176, defense:     181, resistance:     157, health:     300, luck:     214},
                {level:  5,       strength:     343, magic:     216, defense:     228, resistance:     186, health:     375, luck:     292},
                {level: 10,       strength:     539, magic:     292, defense:     319, resistance:     242, health:     520, luck:     442},
            ]
        }, {
            name: "Swamp Troll Brute+",
            stars: 2,
            stats: [
                {level:  1,       strength:     278, magic:     210, defense:     215, resistance:     190, health:     340, luck:     250},
                {level: 10,       strength:     591, magic:     332, defense:     360, resistance:     279, health:     571, luck:     489},
            ]
        } ],

    },  {

        name: "Tempest Marksman",
        code: 'tempest-marksman',
        wiki: 'Tempest_Marksman',
        element: 'spirit',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'rain-of-arrows', 'stalker-s-eye'],
        evolutions: [ {
            name: "Tempest Marksman",
            stars: 1,
            stats: [
                {level:  1,       strength:     223, magic:     202, defense:     176, resistance:     183, health:     161, luck:     191},
            ]
        }, {
            name: "Tempest Marksman+",
            stars: 1,
            stats: [
                {level:  1,       strength:     259, magic:     237, defense:     210, resistance:     217, health:     195, luck:     226},
            ]
        }, {
            name: "Tempest Marksman++",
            stars: 3,
            stats: [
                {level:  1,       strength:     297, magic:     274, defense:     246, resistance:     253, health:     230, luck:     262},
                {level:  5,       strength:     399, magic:     355, defense:     294, resistance:     315, health:     268, luck:     325},
            ]
        }, {
            name: "Tempest Marksman+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     337, magic:     313, defense:     283, resistance:     291, health:     267, luck:     300},
                {level:  5,       strength:     445, magic:     398, defense:     333, resistance:     356, health:     307, luck:     366},
                {level: 10,       strength:     651, magic:     562, defense:     430, resistance:     482, health:     385, luck:     494},
            ]
        } ],

    },  {

        name: "Tempest Mystic",
        code: 'tempest-mystic',
        wiki: 'Tempest_Mystic',
        element: 'spirit',
        tier: 'uncommon',
        class: 'cleric',
        abilities: ['minor-heal', 'major-regen'],
        evolutions: [ {
            name: "Tempest Mystic",
            stars: 1,
            stats: [
                {level:  1,       strength:     123, magic:     143, defense:     138, resistance:     142, health:     181, luck:     133},
                {level:  5,       strength:     165, magic:     210, defense:     198, resistance:     211, health:     212, luck:     185},
                {level: 10,       strength:     245, magic:     340, defense:     315, resistance:     344, health:     273, luck:     287},
            ]
        }, {
            name: "Tempest Mystic+",
            stars: 2,
            stats: [
                {level:  1,       strength:     154, magic:     175, defense:     170, resistance:     174, health:     215, luck:     165},
                {level:  5,       strength:     198, magic:     246, defense:     233, resistance:     247, health:     248, luck:     220},
                {level: 10,       strength:     282, magic:     381, defense:     355, resistance:     386, health:     311, luck:     326},
            ]
        } ],

    },  {

        name: "Tempest Captain",
        code: 'tempest-captain',
        wiki: 'Tempest_Captain',
        element: 'spirit',
        tier: 'epic',
        class: 'warrior',
        abilities: ['cleave', 'rend-armor', 'furious-roar'],
        evolutions: [ {
            name: "Tempest Captain",
            stars: 1,
            stats: [
                {level:  1,       strength:     297, magic:     242, defense:     257, resistance:     253, health:     249, luck:     286},
            ]
        }, {
            name: "Tempest Captain+",
            stars: 1,
            stats: [
                {level:  1,       strength:     337, magic:     279, defense:     295, resistance:     270, health:     286, luck:     325},
            ]
        } ],

    },  {

        name: "Tempest Firstmate",
        code: 'tempest-firstmate',
        wiki: 'Tempest_Firstmate',
        element: 'spirit',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'rend-armor', 'furious-cry'],
        evolutions: [ {
            name: "Tempest Firstmate",
            stars: 1,
            stats: [
                {level:  1,       strength:     223, magic:     173, defense:     187, resistance:     165, health:     179, luck:     213},
            ]
        }, {
            name: "Tempest Firstmate+",
            stars: 2,
            stats: [
                {level:  1,       strength:     259, magic:     207, defense:     221, resistance:     198, health:     213, luck:     249},
                {level:  5,       strength:     357, magic:     250, defense:     278, resistance:     237, health:     269, luck:     334},
                {level: 10,       strength:     544, magic:     334, defense:     389, resistance:     312, health:     376, luck:     497},
            ]
        } ],

    },  {

        name: "Tempest Pirate",
        code: 'tempest-pirate',
        wiki: 'Tempest_Pirate',
        element: 'spirit',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal'],
        evolutions: [ {
            name: "Tempest Pirate",
            stars: 1,
            stats: [
                {level: 10,       strength:     450, magic:     294, defense:     390, resistance:     273, health:     299, luck:     494},
            ]
        }, {
            name: "Tempest Pirate+",
            stars: 2,
            stats: [
                {level:  1,       strength:     249, magic:     207, defense:     232, resistance:     198, health:     204, luck:     259},
                {level:  5,       strength:     334, magic:     250, defense:     301, resistance:     237, health:     250, luck:     357},
                {level: 10,       strength:     497, magic:     334, defense:     434, resistance:     312, health:     339, luck:     544},
            ]
        } ],

    },  {

        name: "Tempest Windseeker",
        code: 'tempest-windseeker',
        wiki: 'Tempest_Windseeker',
        element: 'spirit',
        tier: 'uncommon',
        class: 'wizard',
        abilities: ['arcane-blast', 'glyph-of-focus'],
        evolutions: [ {
            name: "Tempest Windseeker",
            stars: 1,
            stats: [
                {level:  1,       strength:     123, magic:     152, defense:     119, resistance:     142, health:     181, luck:     142},
                {level:  5,       strength:     165, magic:     229, defense:     159, resistance:     211, health:     212, luck:     205},
                {level: 10,       strength:     245, magic:     377, defense:     236, resistance:     344, health:     273, luck:     327},
            ]
        }, {
            name: "Tempest Windseeker+",
            stars: 2,
            stats: [
                {level:  1,       strength:     154, magic:     185, defense:     150, resistance:     174, health:     215, luck:     174},
            ]
        } ],

    },  {

        name: "The Inquisitor",
        code: 'the-inquisitor',
        wiki: 'The_Inquisitor',
        element: 'primal',
        tier: 'legendary',
        class: 'cleric',
        abilities: ['minor-heal', 'entropy', 'mana-infusion'],
        evolutions: [ {
            name: "The Inquisitor",
            stars: 1,
            stats: [
                {level:  1,       strength:     732, magic:     786, defense:     712, resistance:     736, health:     732, luck:     744},
            ]
        } ],

    },  {

        name: "The Withered",
        code: 'the-withered',
        wiki: 'The_Withered',
        element: 'abyss',
        tier: 'legendary',
        class: 'knight',
        abilities: ['defend', 'stalwart-stance', 'lance'],
        evolutions: [ {
            name: "The Withered",
            stars: 1,
            stats: [
                {level:  1,       strength:     782, magic:     710, defense:     736, resistance:     700, health:     802, luck:     688},
            ]
        } ],

    },  {

        name: "Tothnyla the Harpooner",
        code: 'tothnyla-the-harpooner',
        wiki: 'Tothnyla_the_Harpooner',
        element: 'lunar',
        tier: 'epic',
        class: 'archer',
        abilities: ['aim-shot', 'channel-mana', 'despair-of-the-deep'],
        evolutions: [ {
            name: "Tothnyla the Harpooner",
            stars: 1,
            stats: [
                {level:  1,       strength:     347, magic:     334, defense:     264, resistance:     281, health:     295, luck:     304},
                {level:  5,       strength:     457, magic:     430, defense:     298, resistance:     334, health:     348, luck:     368},
                {level: 10,       strength:     667, magic:     613, defense:     365, resistance:     437, health:     451, luck:     492},
                {level: 15,       strength:     928, magic:     840, defense:     448, resistance:     565, health:     578, luck:     646},
            ]
        }, {
            name: "Tothnyla the Harpooner++",
            stars: 3,
            stats: [
                {level:  1,       strength:     471, magic:     457, defense:     470, resistance:     472, health:     409, luck:       0},
            ]
        } ],

    },  {

        name: "Tundra Goblin Dead-Eye",
        code: 'tundra-goblin-dead-eye',
        wiki: 'Tundra_Goblin_Dead-Eye',
        element: 'lunar',
        tier: 'epic',
        class: 'archer',
        abilities: ['aim-shot', 'predator-s-mark', 'arrow-of-thunder'],
        evolutions: [ {
            name: "Tundra Goblin Dead-Eye",
            stars: 1,
            stats: [
                {level:  1,       strength:     279, magic:     292, defense:     242, resistance:     269, health:     237, luck:     243},
            ]
        }, {
            name: "Tundra Goblin Dead-Eye+",
            stars: 2,
            stats: [
                {level:  1,       strength:     318, magic:     332, defense:     279, resistance:     307, health:     274, luck:     280},
            ]
        } ],

    },  {

        name: "Tundra Goblin Shooter",
        code: 'tundra-goblin-shooter',
        wiki: 'Tundra_Goblin_Shooter',
        element: 'lunar',
        tier: 'rare',
        class: 'archer',
        abilities: ['aim-shot', 'predator-s-mark', 'arrow-of-thunder'],
        evolutions: [ {
            name: "Tundra Goblin Shooter",
            stars: 1,
            stats: [
                {level:  5,       strength:     287, magic:     303, defense:     214, resistance:     263, health:     208, luck:     221},
                {level: 10,       strength:     441, magic:     466, defense:     294, resistance:     390, health:     283, luck:     310},
            ]
        }, {
            name: "Tundra Goblin Shooter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     242, magic:     254, defense:     207, resistance:     232, health:     202, luck:     208},
            ]
        } ],

    },  {

        name: "Tundra Goblin Raider",
        code: 'tundra-goblin-raider',
        wiki: 'Tundra_Goblin_Raider',
        element: 'lunar',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'swindler-s-trick', 'deadly-poison'],
        evolutions: [ {
            name: "Tundra Goblin Raider",
            stars: 1,
            stats: [
                {level:  1,       strength:     197, magic:     183, defense:     192, resistance:     176, health:     178, luck:     201},
                {level:  5,       strength:     267, magic:     231, defense:     255, resistance:     219, health:     227, luck:     277},
                {level: 10,       strength:     401, magic:     322, defense:     375, resistance:     303, health:     322, luck:     422},
            ]
        }, {
            name: "Tundra Goblin Raider+",
            stars: 2,
            stats: [
                {level:  1,       strength:     232, magic:     217, defense:     227, resistance:     210, health:     212, luck:     236},
                {level:  5,       strength:     305, magic:     267, defense:     293, resistance:     255, health:     264, luck:     316},
                {level: 10,       strength:     446, magic:     363, defense:     420, resistance:     343, health:     364, luck:     468},
            ]
        } ],

    },  {

        name: "Tundra Goblin Warlord",
        code: 'tundra-goblin-warlord',
        wiki: 'Tundra_Goblin_Warlord',
        element: 'lunar',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'swindler-s-ruse', 'deadly-poison'],
        evolutions: [ {
            name: "Tundra Goblin Warlord",
            stars: 1,
            stats: [
                {level:  1,       strength:     269, magic:     253, defense:     263, resistance:     246, health:     248, luck:     273},
            ]
        }, {
            name: "Tundra Goblin Warlord+",
            stars: 2,
            stats: [
                {level:  1,       strength:     307, magic:     291, defense:     301, resistance:     283, health:     285, luck:     312},
            ]
        } ],

    },  {

        name: "Undead Bear",
        code: 'undead-bear',
        wiki: 'Undead_Bear',
        element: 'abyss',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'aegis-stance', 'maul'],
        evolutions: [ {
            name: "Undead Bear",
            stars: 1,
            stats: [
                {level:  1,       strength:     183, magic:     173, defense:     218, resistance:     191, health:     213, luck:     162},
            ]
        }, {
            name: "Undead Bear+",
            stars: 2,
            stats: [
                {level:  1,       strength:     217, magic:     207, defense:     254, resistance:     226, health:     249, luck:     195},
            ]
        } ],

    },  {

        name: "Vampire Bat",
        code: 'vampire-bat',
        wiki: 'Vampire_Bat',
        element: 'abyss',
        tier: 'rare',
        class: 'warrior',
        abilities: ['rend-and-tear', 'demoralizing-cry', 'frightful-visage'],
        evolutions: [ {
            name: "Vampire Bat+",
            stars: 2,
            stats: [
                {level:  1,       strength:     254, magic:     198, defense:     221, resistance:     207, health:     222, luck:     242},
            ]
        }, {
            name: "Vampire Bat++",
            stars: 3,
            stats: [
                {level:  1,       strength:     292, magic:     233, defense:     257, resistance:     242, health:     258, luck:     279},
                {level:  5,       strength:     390, magic:     274, defense:     317, resistance:     287, health:     324, luck:     364},
                {level: 10,       strength:     577, magic:     352, defense:     433, resistance:     375, health:     450, luck:     528},
            ]
        }, {
            name: "Vampire Bat+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     361, magic:     293, defense:     320, resistance:     303, health:     321, luck:     345},
                {level:  5,       strength:     435, magic:     313, defense:     358, resistance:     327, health:     365, luck:     408},
                {level: 10,       strength:     631, magic:     395, defense:     480, resistance:     419, health:     498, luck:     579},
                {level: 50,       strength:    3827, magic:    1753, defense:    2468, resistance:    1929, health:    2659, luck:    3372},
                {level: 60,       strength:    4914, magic:    2211, defense:    3142, resistance:    2439, health:    3392, luck:    4322},
                {level: 65,       strength:    5492, magic:    2455, defense:    3500, resistance:    2710, health:    3782, luck:    4826},
                {level: 70,       strength:    6155, magic:    2735, defense:    3913, resistance:    3023, health:    4230, luck:    5406},
            ]
        } ],

    },  {

        name: "Vengeful Spirit",
        code: 'vengeful-spirit',
        wiki: 'Vengeful_Spirit',
        element: 'lunar',
        tier: 'rare',
        class: 'warrior',
        abilities: ['cleave', 'furious-cry', 'frightful-visage'],
        evolutions: [ {
            name: "Vengeful Spirit",
            stars: 1,
            stats: [
                {level:  1,       strength:     201, magic:     187, defense:     183, resistance:     173, health:     183, luck:     202},
            ]
        }, {
            name: "Vengeful Spirit+",
            stars: 2,
            stats: [
                {level:  1,       strength:     236, magic:     221, defense:     217, resistance:     207, health:     217, luck:     237},
            ]
        }, {
            name: "Vengeful Spirit++",
            stars: 3,
            stats: [
                {level:  1,       strength:     273, magic:     257, defense:     253, resistance:     242, health:     253, luck:     274},
            ]
        }, {
            name: "Vengeful Spirit+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     312, magic:     295, defense:     291, resistance:     279, health:     291, luck:     313},
            ]
        } ],

    },  {

        name: "Winter Wolf",
        code: 'winter-wolr',
        wiki: 'Winter_Wolf',
        element: 'lunar',
        tier: 'rare',
        class: 'wizard',
        abilities: ['arcane-blast', 'ice-comet', 'ice-storm'],
        evolutions: [ {
            name: "Winter Wolf",
            stars: 1,
            stats: [
                {level:  1,       strength:     173, magic:     235, defense:     180, resistance:     190, health:     165, luck:     192},
                {level:  5,       strength:     214, magic:     336, defense:     225, resistance:     257, health:     202, luck:     255},
            ]
        }, {
            name: "Winter Wolf+",
            stars: 2,
            stats: [
                {level:  1,       strength:     207, magic:     272, defense:     214, resistance:     225, health:     198, luck:     227},
            ]
        }, {
            name: "Winter Wolf++",
            stars: 3,
            stats: [
                {level:  1,       strength:     242, magic:     311, defense:     250, resistance:     261, health:     233, luck:     263},
                {level:  5,       strength:     287, magic:     423, defense:     300, resistance:     335, health:     274, luck:     332},
                {level: 10,       strength:     375, magic:     637, defense:     397, resistance:     477, health:     352, luck:     465},
            ]
        }, {
            name: "Winter Wolf+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     279, magic:     352, defense:     288, resistance:     299, health:     270, luck:     301},
                {level:  5,       strength:     327, magic:     470, defense:     341, resistance:     377, health:     313, luck:     374},
                {level: 10,       strength:     419, magic:     695, defense:     442, resistance:     526, health:     395, luck:     513},
            ]
        } ],
    } ],
};
