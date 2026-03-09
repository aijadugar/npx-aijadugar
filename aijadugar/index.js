#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const divider = chalk.gray("─".repeat(54));

const morseName = chalk.magenta("A1J4DUG4R - WH3R3 T3CHN0L0GY M33T5 M4G1C");
const morseEnd = chalk.yellow("- .... . ..-. ..- - ..- .-. . .. ... .- .. --..-- .- -. -.. .. .- -- .--- .- -.. ..- --. .- .-. - --- ... .... .- .--. . .. - -.-.-");

const title = chalk.bold.green("Mr. @");
const subtitle = chalk.cyan("My career started from ONE MAN... Now I am student of Artificial Intelligence and Data Science...");

const about = chalk.white(
`Researching...Open-Source!`
);

const portfolio = chalk.green("Portfolio: ") + chalk.white("https://aijadugar.vercel.app");

const card = boxen(
`
${morseName}

${title}
${subtitle}

${divider}

${about}

${portfolio}

${divider}

${morseEnd}
`,
{
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "magenta",
});

console.log(card);