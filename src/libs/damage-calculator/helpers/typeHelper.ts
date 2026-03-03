import {
  PokemonType,
  getTypeModifier as getTypeModifierFromChart,
} from "types/pokemon-type";

export type TypeModifierInput = {
  attackType: PokemonType;
  defenderTypes: PokemonType[];
};

export function getTypeModifier({
  attackType,
  defenderTypes,
}: TypeModifierInput): number {
  return getTypeModifierFromChart(attackType, defenderTypes);
}

