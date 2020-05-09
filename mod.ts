import { STYLES_ATTR, STYLES_FORE, STYLES_BACK } from "./styles.ts";

const { noColor } = Deno;

declare global {
  interface String {
    /**
     * strcolors.ts: Apply Styles for String
     *
     * @param   {number}  open  - Opening code
     * @param   {number}  close - Closing code
     * @return  {string}  Styled String
     */
    vt100(open: number, close: number): string,

    /**
     * strcolors.ts: Change string color
     *
     * @param   {string}  colorName  - Color name
     * @return  {string}  Styled String
     *
     */
    color(colorName: string): string,

    /**
     * strcolors.ts: Change string color background
     *
     * @param   {string}  colorName  - Color name
     * @return  {string}  Styled String
     *
     */
    background(colorName: string): string,

    /**
     * strcolors.ts: Change string style
     *
     * @param   {string}  format  - Color name
     * @return  {string}  Styled String
     *
     */
    style(format: string): string,

    /**
     * strcolors.ts:  Reset string style
     *
     * @return {string} Styled String
     *
     */
    reset(): string,

    /**
     * strcolors.ts: Bold String
     *
     * @return {string} Styled String
     *
     */
    bold(): string,


    /**
     * strcolors.ts:  Dim string style
     *
     * @return {string} Styled String
     *
     */
    dim(): string,

    /**
     * strcolors.ts:  Italic string style
     *
     * @return {string} Styled String
     *
     */
    italic(): string,

    /**
     * strcolors.ts:  Underline string style
     *
     * @return {string} Styled String
     *
     */
    underline(): string,

    /**
     * strcolors.ts:  Inverse string style
     *
     * @return {string} Styled String
     *
     */
    inverse(): string,

    /**
     * strcolors.ts:  Hidden string style
     *
     * @return {string} Styled String
     *
     */
    hidden(): string,

    /**
     * strcolors.ts:  Stikethrough string style
     *
     * @return {string} Styled String
     *
     */
    strike(): string,

    /**
     * strcolors.ts: Change color of string to black
     *
     * @return {string} Styled String
     *
     */
    black(): string,

    /**
     * strcolors.ts: Change color of string to gray
     *
     * @return {string} Styled String
     *
     */
    gray(): string,

    /**
     * strcolors.ts: Change color of string to grey
     *
     * @return {string} Styled String
     *
     */
    grey(): string,

    /**
     * strcolors.ts: Change color of string to red
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    red(bright?: boolean): string,

    /**
     * strcolors.ts: Change color of string to green
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    green(bright?: boolean): string,

    /**
     * strcolors.ts: Change color of string to yellow
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    yellow(bright?: boolean): string,

    /**
     * strcolors.ts: Change color of string to blue
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    blue(bright?: boolean): string,

    /**
     * strcolors.ts: Change color of string to magenta
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    magenta(bright?: boolean): string,

    /**
     * strcolors.ts: Change color of string to cyan
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    cyan(bright?: boolean): string,

    /**
     * strcolors.ts: Change color of string to white
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    white(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to black
     *
     * @return {string}   Styled String
     *
     */
    bgBlack(): string,

    /**
     * strcolors.ts: Change background color of string to gray
     *
     * @return {string}   Styled String
     *
     */
    bgGray(): string,

    /**
     * strcolors.ts: Change background color of string to grey
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgGrey(): string,

    /**
     * strcolors.ts: Change background color of string to red
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgRed(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to green
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgGreen(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to yellow
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgYellow(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to blue
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgBlue(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to magenta
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgMagenta(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to cyan
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgCyan(bright?: boolean): string,

    /**
     * strcolors.ts: Change background color of string to white
     *
     * @param  {boolean}  [bright] - Use bright color (default: false)
     * @return {string}   Styled String
     *
     */
    bgWhite(bright?: boolean): string


    /**
     * strcolors.ts: Change color of string to any random color
     *
     * @return {string}   Styled String
     *
     */
    randomColor(): string,

    /**
     * strcolors.ts: Change background color of string to any random color
     *
     * @return {string}   Styled String
     *
     */
    randomBackground(): string
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

/** Utils **/

String.prototype.randomColor = function() {
  const colors = Object.keys(STYLES_FORE);
  const randomIndex = (Math.floor(Math.random() * colors.length));

  return this.color(colors[randomIndex]);
}

String.prototype.randomBackground = function() {
  const colors = Object.keys(STYLES_BACK);
  const randomIndex = (Math.floor(Math.random() * colors.length));

  return this.background(colors[randomIndex]);
}
