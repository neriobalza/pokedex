import { POKEMON_TYPE_COLORS } from "./constants";

const getPokemonColor = (types) => {
  if (types.length === 2) {
    const firstType = types[0].toLowerCase;
    const secondType = types[1].toLowerCase;
  } else {
    return POKEMON_TYPE_COLORS[types[0].toLowerCase];
  }
};
