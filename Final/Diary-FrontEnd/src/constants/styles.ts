interface IColor {
  primary500: string;
  primary200: string;
  primary100: string;
  primary300: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
}

export const ColorsBlue: IColor = {
  backgroundColor: "#e6ebfc",
  textColor: "black",
  primary200: "#91e4ff",
  primary300: "#96b9ff",
  primary500: "#30c1ff",
  borderColor: "#30c1ff",
  primary100: "#e3f1ff",
};

export const ColorsOrange: IColor = {
  backgroundColor: "#fff5e8",
  textColor: "black",
  primary200: "#ffdcab",
  primary300: "#ffd291",
  primary500: "#ffb74d",
  borderColor: "#ff8c2e",
  primary100: "#fff3e3",
};

export const ColorsPink: IColor = {
  backgroundColor: "#ffe8ff",
  textColor: "black",
  primary200: "#ffc7ff",
  primary300: "#96b9ff",
  primary500: "#ff8fff",
  borderColor: "#ff52ff",
  primary100: "#ffe8ff",
};

export const ColorsGreen: IColor = {
  backgroundColor: "#deffe8",
  textColor: "black",
  primary200: "#9cffbd",
  primary300: "#a1ffc8",
  primary500: "#00d45d",
  borderColor: "#3bff9d",
  primary100: "#e6fff0",
};

export const ColorsRed: IColor = {
  backgroundColor: "#ffece6",
  textColor: "black",
  primary200: "#ffc3ab",
  primary300: "#a1ffc8",
  primary500: "#ff8b59",
  borderColor: "#ff7657",
  primary100: "#e8fff2",
};

export const ColorStorage = new Map([
  [0, ColorsBlue],
  [1, ColorsOrange],
  [2, ColorsPink],
  [3, ColorsGreen],
  [4, ColorsRed],
]);

export const Colors = {
  primary: "#20AB6E",
  lime: "#D7FFD4",
  pink: "#F655FF",
  brown: "#29271D",
  sky: "#E5EDFF",
  teal: "#0E4D45",
  yellow: "#FCBB80",
  orange: "#EF580B",
  blue: "#0000FA",
  green: "#172E15",
  light: "#FFFCFF",
  grey: "#242026",
  greyLight: "#B8B3BA",
  input: "#EEE9F0",
  selected: "#F7F2F9",
  dark: "#2F2D32",
};

export function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");
  let bigint = parseInt(hex, 16);
  if (isNaN(bigint) || (hex.length !== 6 && hex.length !== 3)) {
    return null;
  }

  let r, g, b;

  if (hex.length === 6) {
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
  } else if (hex.length === 3) {
    r = ((bigint >> 8) & 15) * 17;
    g = ((bigint >> 4) & 15) * 17;
    b = (bigint & 15) * 17;
  } else {
    return null;
  }

  return "rgba(" + r + ", " + g + ", " + b + "," + 1 + ")";
}
