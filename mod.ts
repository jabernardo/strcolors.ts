import { STYLES_ATTR, STYLES_FORE, STYLES_BACK } from "./styles.ts";

const { noColor } = Deno;

declare global {
  interface String {
    vt100(open: number, close: number): string,
    color(colorName: string): string,
    background(colorName: string): string,
    style(colorName: string): string,

    reset(): string,
    bold(): string,
    dim(): string,
    italic(): string,
    underline(): string,
    inverse(): string,
    hidden(): string,
    strike(): string,

    black(): string,
    gray(): string,
    grey(): string,
    red(bright?: boolean): string,
    green(bright?: boolean): string,
    yellow(bright?: boolean): string,
    blue(bright?: boolean): string,
    magenta(bright?: boolean): string,
    cyan(bright?: boolean): string,
    white(bright?: boolean): string

    bgBlack(): string,
    bgGray(): string,
    bgGrey(): string,
    bgRed(bright?: boolean): string,
    bgGreen(bright?: boolean): string,
    bgYellow(bright?: boolean): string,
    bgBlue(bright?: boolean): string,
    bgMagenta(bright?: boolean): string,
    bgCyan(bright?: boolean): string,
    bgWhite(bright?: boolean): string
  }
}

String.prototype.vt100 = function(open: number, close: number): string {
  if (noColor) return this.toString();

  const term_open = `\u001b[${open}m`;
  const term_close = `\u001b[${close}m`;

  return `${term_open}${this.toString().replace(
      new RegExp(`\\u001b\\[${close}m`, "g"),
      term_open
    )}${term_close}`;
}

String.prototype.color = function(colorName: string): string {
  const color = STYLES_FORE[colorName.toLowerCase()] || STYLES_ATTR["reset"];
  const [ open, close ] = color;

  return this.vt100(open, close);
}

String.prototype.background = function(colorName: string): string {
  let color = STYLES_BACK[colorName.toLowerCase()] || STYLES_ATTR["reset"];
  const [ open, close ] = color;

  return this.vt100(open, close);
}

String.prototype.style = function(colorName: string): string {
  let color = STYLES_ATTR[colorName.toLowerCase()] || STYLES_ATTR["reset"];
  const [ open, close ] = color;

  return this.vt100(open, close);
}

/** Styles **/

String.prototype.reset = function() {
  return this.style("reset");
}

String.prototype.bold = function() {
  return this.style("bold");
}

String.prototype.dim = function() {
  return this.style("dim");
}

String.prototype.italic = function() {
  return this.style("italic");
}

String.prototype.underline = function() {
  return this.style("underline");
}

String.prototype.inverse = function() {
  return this.style("inverse");
}

String.prototype.hidden = function() {
  return this.style("hidden");
}

String.prototype.strike = function() {
  return this.style("strikethrough");
}

/** Colors **/

String.prototype.black = function() {
  return this.color("black");
}

String.prototype.gray = String.prototype.grey = function() {
  return this.color("gray");
}

String.prototype.red = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}red`);
}

String.prototype.green = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}green`);
}

String.prototype.yellow = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}yellow`);
}

String.prototype.blue = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}blue`);
}

String.prototype.magenta = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}magenta`);
}

String.prototype.cyan = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}cyan`);
}

String.prototype.white = function(bright: boolean = false) {
  return this.color(`${bright ? "bright_" : ""}white`);
}

/** Background Colors **/

String.prototype.bgBlack = function() {
  return this.background("black");
}

String.prototype.bgGray = String.prototype.bgGrey = function() {
  return this.background("gray");
}

String.prototype.bgRed = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}red`);
}

String.prototype.bgGreen = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}green`);
}

String.prototype.bgYellow = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}yellow`);
}

String.prototype.bgBlue = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}blue`);
}

String.prototype.bgMagenta = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}magenta`);
}

String.prototype.bgCyan = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}cyan`);
}

String.prototype.bgWhite = function(bright: boolean = false) {
  return this.background(`${bright ? "bright_" : ""}white`);
}

