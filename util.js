var honorbounder = honorbounder || {};

honorbounder.util = {

    getHeroEvolution: function(hero, stars)
    {
        var heroEvolution;

        $.each(hero.evolutions, function(idx, evolution) {
            if (stars == null || evolution.stars == stars) {
                heroEvolution = evolution;
                return false;
            }
        } );

        return heroEvolution;
    },

    getHeroStat: function(hero, stars, level)
    {
        var getHeroStat;
        var heroEvolution = honorbounder.util.getHeroEvolution(hero, stars);

        if (heroEvolution) {
            $.each(heroEvolution.stats, function(idx, stat) {
                if (level == null || stat.level == level) {
                    getHeroStat = stat;
                }
            } );
        }

        return getHeroStat;
    },

    getDataByCode: function(type, code)
    {
        var found = null;

        $.each(honorbounder.data[type], function(idx, d) {
            if (d.code == code) {
                found = d;
                return false;
            }
        } );

        return found;
    }
};
