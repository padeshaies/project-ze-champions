import { describe, it, expect } from "vitest";
import { asEV } from "../types/stats";

describe("asEV", () => {
    it("Valid EV functions properly", () => {
        const ev = asEV(31);

        expect(ev).toBe(31);
    })

    it("Invalid EV throws error if not an integer", () => {
        expect(() => asEV(24.5)).toThrow("Invalid EV");
    })

    it("Invalid EV throws error if below 0", () => {
        expect(() => asEV(-1)).toThrow("Invalid EV");
    })

    it("Invalid EV throws error if over 32", () => {
        expect(() => asEV(35)).toThrow("Invalid EV");
    })

});
