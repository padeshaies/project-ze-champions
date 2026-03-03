import { describe, it, expect } from "vitest";
import { calculateStat } from "./statHelper";
import { asEV } from "../types/stats";


// Source: https://x.com/CentroLeaks/status/2028530998124712340/photo/1
describe("calculateStat - Champions Whimsicott", () => {
    it("calculates hp properly", () => {
        const hp = calculateStat("hp", 60, 50, asEV(32), 'bold');

        expect(hp).toBe(167);
    })

    it("calculates neutral stat properly", () => {
        const spe = calculateStat("spe", 116, 50, asEV(2), 'bold');

        expect(spe).toBe(138);
    })

    it("calculates negative stat properly", () => {
        const atk = calculateStat("atk", 67, 50, asEV(0), 'bold');

        expect(atk).toBe(78);
    })

    it("calculates positive stat properly", () => {
        const def = calculateStat("def", 85, 50, asEV(32), 'bold');

        expect(def).toBe(150);
    })

})