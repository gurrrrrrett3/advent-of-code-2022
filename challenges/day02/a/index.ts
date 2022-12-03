import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.resolve("./challenges/day02/input.txt"), "utf-8");

const legend = {
  against: {
    ROCK: "A",
    PAPER: "B",
    SCISSORS: "C",
  },
  play: {
    ROCK: "X",
    PAPER: "Y",
    SCISSORS: "Z",
  },
};

let score = 0;

input.split("\n").forEach((line) => {
  const [against, play] = line.split(" ");

  score += calcScore(play, against);
});

console.log(score);

function calcScore(play: string, against: string) {
  let score = 0;

  if (play == legend.play.ROCK) {
    score += 1;
  } else if (play == legend.play.PAPER) {
    score += 2;
  } else if (play == legend.play.SCISSORS) {
    score += 3;
  }

  // tie
  if (
    (play == legend.play.ROCK && against == legend.against.ROCK) ||
    (play == legend.play.PAPER && against == legend.against.PAPER) ||
    (play == legend.play.SCISSORS && against == legend.against.SCISSORS)
  ) {
    console.log(`${play} vs ${against} = tie (+ ${score + 3})`);
    return score += 3;
  }

  // win
  if (
    (play == legend.play.ROCK && against == legend.against.SCISSORS) ||
    (play == legend.play.PAPER && against == legend.against.ROCK) ||
    (play == legend.play.SCISSORS && against == legend.against.PAPER)
  ) {
    console.log(`${play} vs ${against} = win (+ ${score + 6})`);
    return score += 6;
  }

  // lose
  console.log(`${play} vs ${against} = lose (+ ${score})`);
  return score;
}
