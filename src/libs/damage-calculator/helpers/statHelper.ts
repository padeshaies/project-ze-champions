import { EV, Stat } from "../types/stats";
import { Nature, NATURE_TABLE,  } from "../types/nature";

// IV are stuck at 31 in Champions
// Source: Centro Leak (https://x.com/CentroLeaks/status/2028569121126850669/photo/1)
export function calculateStat( stat: Stat, baseStat: number, level: number, ev: EV, nature: Nature ) {
    if (stat === "hp") {
        return Math.floor((2 * baseStat + 31) * level / 100) + level + 10 + ev;
    }

    // todo: nature bonus
    const natureBonus = getNatureModifier(stat, nature);

    return Math.floor((Math.floor((2 * baseStat + 31) * level / 100 ) + 5 + ev) * natureBonus);
}

function getNatureModifier(stat: Stat, nature: Nature): number {
    if (stat === 'hp') return 1;

    const effect = NATURE_TABLE[nature];
    if (!effect) return 1;

    if (effect.up === stat) return 1.1;
    if (effect.down === stat) return 0.9;

    return 1;
}