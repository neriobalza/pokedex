const palette = {
  white: "#efefef",
  black: "#161616",
  darkgray: "#333333",
  gray: "#B3B6B7",
  fadedBlack: "rgba(0,0,0, 0.15)",
  fadedWhite: "rgba(255,255,255, 0.75)",
  blue: "#0066ff",
  red: "#ED1B24",
  purple: "#484b6a",
};

export default theme = {
  colors: {
    background: palette.white,
    foreground: palette.purple,
    text: palette.black,
    btnBg: palette.blue,
    danger: palette.red,
    blue: palette.blue,
    red: palette.red,
    gray: palette.gray,
    fadedBlack: palette.fadedBlack,
    fadedWhite: palette.fadedWhite,
  },
  spacing: {
    none: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  fontSize: {
    text: {
      xs: 12,
      s: 16,
      m: 20,
      l: 24,
    },
    title: {
      s: 32,
      m: 36,
      l: 40,
    },
  },
};
