// Commenting out IVs as they seem to be locked to 31 in Champions
/*
export type IV = number & { __brand: "IV" };

export function asIV(value: number): IV {
  if (!Number.isInteger(value) || value < 0 || value > 31) {
    throw new Error(`Invalid IV: ${value}`);
  }
  return value as IV;
}*/

export type EV = number & { __brand: "EV" };

export function asEV(value: number): EV {
  if (!Number.isInteger(value) || value < 0 || value > 32) {
    throw new Error(`Invalid EV: ${value}`);
  }
  return value as EV;
}

export type Stat = "hp" | "atk" | "def" | "spa" | "spd" | "spe";