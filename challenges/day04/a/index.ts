import loadData from "../../../misc/loadData";

const input = loadData(4);

let count = 0;

input.split("\n").forEach((pair) => {
  if (pair === "") return;
  const [pairA, pairB] = pair.split(",");

  if (doesOnePairContainAnother(pairA, pairB)) {
    console.log("Pair", pairA, pairB, "contains each other");
    count++;
  }
});

console.log(count);

function doesOnePairContainAnother(pairA: string, pairB: string) {
  const [pairAStart, pairAEnd] = pairA.split("-");
  const [pairBStart, pairBEnd] = pairB.split("-");

  const pairAStartNumber = parseInt(pairAStart);
  const pairAEndNumber = parseInt(pairAEnd);
  const pairBStartNumber = parseInt(pairBStart);
  const pairBEndNumber = parseInt(pairBEnd);

  if (
    (pairAStartNumber >= pairBStartNumber && pairAEndNumber <= pairBEndNumber) ||
    (pairBStartNumber >= pairAStartNumber && pairBEndNumber <= pairAEndNumber)
  ) {
    return true;
  }

  return false;
}
