import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.resolve("./challenges/day02/a/input.txt"), "utf-8");

const legend = {
  against: {
    ROCK: "A",
    PAPER: "B",
    SCISSORS: "C",
  },
  outcome: {
    LOSE: "X",
    TIE: "Y",
    WIN: "Z",
  },
  play: {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
  },
};

let score = 0;

input.split("\n").forEach((line) => {
  const [against, outcome] = line.split(" ");

  score += calcScore(against, outcome);
});

console.log(score);

function calcScore(against: string, outcome: string) {
  let score = 0;

  let play = 0;

  if (outcome == legend.outcome.LOSE) {
    score += 0;

    if (against == legend.against.ROCK) play = legend.play.SCISSORS
    if (against == legend.against.PAPER) play = legend.play.ROCK
    if (against == legend.against.SCISSORS) play = legend.play.PAPER

  } else if (outcome == legend.outcome.TIE) {
    score += 3;

    if (against == legend.against.ROCK) play = legend.play.ROCK
    if (against == legend.against.PAPER) play = legend.play.PAPER
    if (against == legend.against.SCISSORS) play = legend.play.SCISSORS
    
  } else if (outcome == legend.outcome.WIN) {
    score += 6;

    if (against == legend.against.ROCK) play = legend.play.PAPER
    if (against == legend.against.PAPER) play = legend.play.SCISSORS
    if (against == legend.against.SCISSORS) play = legend.play.ROCK
  }

  console.log(`${Object.keys(legend.play)[play]} vs ${against} = ${outcome} (+ ${score + play})`);
  
  return score + play;
}
