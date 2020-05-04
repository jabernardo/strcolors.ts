import { STYLES_ATTR, STYLES_FORE, STYLES_BACK } from "./styles.ts";

declare global {
  interface String {
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
    strike(): string
  }
}

String.prototype.color = function(colorName: string): string {
  let color = STYLES_FORE[colorName] || STYLES_ATTR["reset"];

  return `\u001b[${color[0]}m${this.toString()}\u001b[${color[1]}m`;
}

String.prototype.background = function(colorName: string): string {
  let color = STYLES_BACK[colorName] || STYLES_ATTR["reset"];

  return `\u001b[${color[0]}m${this.toString()}\u001b[${color[1]}m`;
}

String.prototype.style = function(colorName: string): string {
  let color = STYLES_ATTR[colorName] || STYLES_ATTR["reset"];

  return `\u001b[${color[0]}m${this.toString()}\u001b[${color[1]}m`;
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
