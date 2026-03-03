import { Stat } from "./stats";

export type Nature =
  | "hardy"
  | "lonely"
  | "brave"
  | "adamant"
  | "naughty"
  | "bold"
  | "docile"
  | "relaxed"
  | "impish"
  | "lax"
  | "timid"
  | "hasty"
  | "jolly"
  | "naive"
  | "modest"
  | "mild"
  | "quiet"
  | "bashful"
  | "rash"
  | "calm"
  | "gentle"
  | "sassy"
  | "careful"
  | "quirky"
  | "serious";

type NonHpStat = Exclude<Stat, "hp">;

type NatureEffect = {
  up?: NonHpStat;
  down?: NonHpStat;
};

export const NATURE_TABLE: Record<Nature, NatureEffect> = {
  hardy: {},

  lonely: { up: "atk", down: "def" },
  brave: { up: "atk", down: "spe" },
  adamant: { up: "atk", down: "spa" },
  naughty: { up: "atk", down: "spd" },

  bold: { up: "def", down: "atk" },
  docile: {},
  relaxed: { up: "def", down: "spe" },
  impish: { up: "def", down: "spa" },
  lax: { up: "def", down: "spd" },

  timid: { up: "spe", down: "atk" },
  hasty: { up: "spe", down: "def" },
  jolly: { up: "spe", down: "spa" },
  naive: { up: "spe", down: "spd" },
  serious: {},

  modest: { up: "spa", down: "atk" },
  mild: { up: "spa", down: "def" },
  quiet: { up: "spa", down: "spe" },
  bashful: {},
  rash: { up: "spa", down: "spd" },

  calm: { up: "spd", down: "atk" },
  gentle: { up: "spd", down: "def" },
  sassy: { up: "spd", down: "spe" },
  careful: { up: "spd", down: "spa" },
  quirky: {},
};