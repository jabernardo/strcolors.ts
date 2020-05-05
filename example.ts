import "./mod.ts";

console.log(`RED`.color("white").background("red").style("underline").bold().strike());
console.log(`R${"E".red()}D`.blue());
console.log(`R${"E".yellow()}D`.red());
