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
            big: 'http://img1.wikia.nocookie.net/__cb20140205222442/honorbound-juicebox/images/0/0b/Lunar_icon.png',
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
        mana: -1 // unknown
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
        name: "Destruction",
        code: 'destruction',
        description: "Attack a single enemy for massive damage.",
        mana: 12
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
        name: "Primal Fusion",
        code: 'primal-fusion',
        description: "Make all party members regenerate health over time.",
        mana: 0 // passive
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
        code: 'A-san-the-tempest',
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
            ]
        }, {
            name: "Alshin Dead-Eye+",
            stars: 2,
            stats: [
                {level:  1,       strength:     267, magic:     255, defense:     210, resistance:     230, health:     292, luck:     223},
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
            ]
        }, {
            name: "Alshin Scryer+",
            stars: 2,
            stats: [
                {level:  1,       strength:     214, magic:     259, defense:     202, resistance:     242, health:     198, luck:     227},
            ]
        } ]

    },  {

        name: "Alshin Shadow",
        code: 'alshin-shadow',
        wiki: 'Alshin_Shadow',
        element: 'spirit',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal'],
        evolutions: [ {
            name: "Alshin Shadow",
            stars: 1,
            stats: [
                {level:  1,       strength:     213, magic:     180, defense:     188, resistance:     169, health:     174, luck:     212},
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

        name: "Duskweald Hierophant",
        code: 'duskweald-hierophant',
        wiki: 'Duskweald_Hierophant',
        element: 'primal',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal', 'smite', 'primal-fusion'],
        evolutions: [ {
            name: "Duskweald Hierophant",
            stars: 1,
            stats: [
                {level:  1,       strength:     176, magic:     192, defense:     197, resistance:     201, health:     176, luck:     187},
            ]
        }, {
            name: "Duskweald Hierophant+",
            stars: 2,
            stats: [
                {level:  1,       strength:     210, magic:     227, defense:     232, resistance:     236, health:     210, luck:     221},
            ]
        }, {
            name: "Duskweald Hierophant++",
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
            ]
        }, {
            name: "Freydis+",
            stars: 2,
            stats: [
                {level:  1,       strength:     624, magic:     557, defense:     521, resistance:     517, health:     547, luck:     522},
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
            ]
        }, {
            name: "Glacial Hunter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     232, magic:     202, defense:     237, resistance:     210, health:     122, luck:     259},
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
            name: "Green Knight",
            stars: 1,
            stats: [
                {level:  1,       strength:     213, magic:     173, defense:     183, resistance:     173, health:     183, luck:     212},
            ]
        }, {
            name: "Green Knight+",
            stars: 2,
            stats: [
                {level:  1,       strength:     249, magic:     207, defense:     217, resistance:     207, health:     217, luck:     248},
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
            name: "Green Ogre Chief",
            stars: 1,
            stats: [
                {level:  1,       strength:     230, magic:     171, defense:     198, resistance:     168, health:     296, luck:     199},
            ]
        }, {
            name: "Green Ogre High Chief",
            stars: 2,
            stats: [
                {level:  1,       strength:     267, magic:     205, defense:     233, resistance:     201, health:     336, luck:     234},
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

        name: "Haven Medicus",
        code: 'haven-medicus',
        wiki: 'Haven_Medicus',
        element: 'primal',
        tier: 'rare',
        class: 'cleric',
        abilities: ['minor-heal', 'smite', 'primal-fusion'],
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
            ]
        } ]

    },  {

        name: "High King Guard",
        code: 'high-king-guard',
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

        name: "Kharaz Marauder",
        code: 'kharaz-marauder',
        wiki: 'Kharaz_Marauder',
        element: 'terra',
        tier: 'rare',
        class: 'rogue',
        abilities: ['steal', 'slice', 'flurry'],
        evolutions: [ {
            name: "Kharaz Marauder++",
            stars: 3,
            stats: [
                {level:  1,       strength:     219, magic:     187, defense:     190, resistance:     171, health:     264, luck:     230},
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

        name: "Liashi Ogre Guardian",
        code: 'liashi-ogre-guardian',
        wiki: 'Liashi_Orgre_Guardin',
        element: 'terra',
        tier: 'rare',
        class: 'knight',
        abilities: ['defend', 'lance', 'warding-stance'],
        evolutions: [ {
            name: "Liashi Ancient One+",
            stars: 2,
            stats: [
                {level:  1,       strength:     222, magic:     202, defense:     254, resistance:     221, health:     242, luck:     202},
            ]
        }, {
            name: "Liashi Ancient One++",
            stars: 3,
            stats: [
                {level:  1,       strength:     258, magic:     237, defense:     292, resistance:     257, health:     279, luck:     237},
            ]
        }, {
            name: "Liashi Ancient One+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     296, magic:     274, defense:     332, resistance:     295, health:     318, luck:     274},
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
            ]
        }, {
            name: "Rimeholm High Guard+",
            stars: 2,
            stats: [
                {level:  1,       strength:     243, magic:     205, defense:     261, resistance:     207, health:     354, luck:     210},
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
            ]
        }, {
            name: "Stone Elemental++",
            stars: 3,
            stats: [
                {level:  1,       strength:     283, magic:     251, defense:     321, resistance:     252, health:     321, luck:     261},
            ]
        }, {
            name: "Stone Elemental+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     301, magic:     270, defense:     337, resistance:     271, health:     337, luck:     279},
            ]
        } ],

    },  {

        name: "Sug-Yougol Deep One",
        code: 'sug-yougol-deep-one',
        wiki: 'Sug-Yougol_Deep_One',
        element: 'lunar',
        tier: 'epic',
        class: 'wizard',
        abilities: ['arcane-blast', 'ice-storm', 'symbol-of-focus'],
        evolutions: [ {
            name: "Sug-Yougol Deep One",
            stars: 1,
            stats: [
                {level:  1,       strength:     279, magic:     329, defense:     283, resistance:     329, health:     279, luck:     286},
            ]
        }, {
            name: "Sug-Yougol Deep One+",
            stars: 2,
            stats: [
                {level:  1,       strength:     345, magic:     402, defense:     350, resistance:     402, health:     345, luck:     363},
            ]
        }, {
            name: "Sug-Yougol Deep One++",
            stars: 3,
            stats: [
                {level:  1,       strength:     359, magic:     414, defense:     363, resistance:     414, health:     359, luck:     366},
            ]
        }, {
            name: "Sug-Yougol Deep One+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     437, magic:     500, defense:     441, resistance:     500, health:     437, luck:     444},
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
            ]
        }, {
            name: "Swamp Troll Brute+",
            stars: 2,
            stats: [
                {level:  1,       strength:     278, magic:     210, defense:     215, resistance:     190, health:     340, luck:     250},
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
            name: "Tempest Captain+",
            stars: 1,
            stats: [
                {level:  1,       strength:     297, magic:     242, defense:     257, resistance:     253, health:     249, luck:     286},
            ]
        }, {
            name: "Tempest Captain++",
            stars: 1,
            stats: [
                {level:  1,       strength:     337, magic:     279, defense:     295, resistance:     270, health:     286, luck:     325},
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
            name: "Tempest Pirate+",
            stars: 2,
            stats: [
                {level:  1,       strength:     249, magic:     207, defense:     232, resistance:     198, health:     204, luck:     259},
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
            name: "Tundra Goblin Shooter+",
            stars: 2,
            stats: [
                {level:  1,       strength:     242, magic:     254, defense:     207, resistance:     232, health:     202, luck:     208},
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
            ]
        }, {
            name: "Vampire Bat+++",
            stars: 4,
            stats: [
                {level:  1,       strength:     361, magic:     293, defense:     320, resistance:     303, health:     321, luck:     345},
                {level: 50,       strength:    3827, magic:    1753, defense:    2468, resistance:    1929, health:    2659, luck:    3372},
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
            ]
        } ],
    } ],
};