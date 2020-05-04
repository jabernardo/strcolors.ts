export interface Styles {
  [key: string]: number[]
};

export const STYLES_ATTR: Styles = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29]
};

export const STYLES_FORE: Styles = {
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39]
};

export const STYLES_BACK: Styles = {
  black: [40, 49],
  red: [41, 49],
  green: [42, 49],
  yellow: [43, 49],
  blue: [44, 49],
  magenta: [45, 49],
  cyan: [46, 49],
  white: [47, 49],
  gray: [100, 49],
  grey: [100, 49],

  brightRed: [101, 49],
  brightGreen: [102, 49],
  brightYellow: [103, 49],
  brightBlue: [104, 49],
  brightMagenta: [105, 49],
  brightCyan: [106, 49],
  brightWhite: [107, 49]
};
