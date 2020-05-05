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
    red(): string,
    green(): string,
    yellow(): string,
    blue(): string,
    magenta(): string,
    cyan(): string,
    white(): string,
    gray(): string,
    grey(): string
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
  const color = STYLES_FORE[colorName] || STYLES_ATTR["reset"];
  const [ open, close ] = color;

  return this.vt100(open, close);
}

String.prototype.background = function(colorName: string): string {
  let color = STYLES_BACK[colorName] || STYLES_ATTR["reset"];
  const [ open, close ] = color;

  return this.vt100(open, close);
}

String.prototype.style = function(colorName: string): string {
  let color = STYLES_ATTR[colorName] || STYLES_ATTR["reset"];
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

String.prototype.red = function() {
  return this.color("red");
}

String.prototype.green = function() {
  return this.color("green");
}

String.prototype.yellow = function() {
  return this.color("yellow");
}

String.prototype.blue = function() {
  return this.color("blue");
}

String.prototype.magenta = function() {
  return this.color("magenta");
}

String.prototype.cyan = function() {
  return this.color("cyan");
}

String.prototype.white = function() {
  return this.color("white");
}

String.prototype.gray = String.prototype.grey = function() {
  return this.color("gray");
}
