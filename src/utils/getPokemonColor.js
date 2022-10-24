import { POKEMON_TYPE_COLORS } from "./constants";

const getPokemonColor = (types) => {
  if (types.length > 1) {
    const color1 = POKEMON_TYPE_COLORS[types[0].toLowerCase()];
    const color2 = POKEMON_TYPE_COLORS[types[1].toLowerCase()];

    const red = sumColor(
      parseInt(color1.slice(0, 2), 16),
      parseInt(color2.slice(0, 2), 16)
    ).toString(16);
    const green = sumColor(
      parseInt(color1.slice(2, 4), 16),
      parseInt(color2.slice(2, 4), 16)
    ).toString(16);
    const blue = sumColor(
      parseInt(color1.slice(4), 16),
      parseInt(color2.slice(4), 16)
    ).toString(16);

    return "#" + red + green + blue;
  } else {
    return "#" + POKEMON_TYPE_COLORS[types[0].toLowerCase()];
  }
};

const sumColor = (color1, color2) => {
  return Math.floor((color1 + color2) / 2);
};

export default getPokemonColor;
