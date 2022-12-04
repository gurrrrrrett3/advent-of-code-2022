import loadData from "../../../misc/loadData";

const input = loadData(4);

let count = 0;

input.split("\n").forEach((pair) => {
  if (pair === "") return;
  const [pairA, pairB] = pair.split(",");

  if (doPairsOverlap(pairA, pairB)) {
    console.log("Pair", pairA, pairB, "contains each other");
    count++;
  }
});

console.log(count);

function doPairsOverlap(pairA: string, pairB: string) {
    const [pairAStart, pairAEnd] = pairA.split("-");
    const [pairBStart, pairBEnd] = pairB.split("-");

    const pairAStartNumber = parseInt(pairAStart);
    const pairAEndNumber = parseInt(pairAEnd);
    const pairBStartNumber = parseInt(pairBStart);
    const pairBEndNumber = parseInt(pairBEnd);

    if (
        (pairBStartNumber >= pairAStartNumber && pairBStartNumber <= pairAEndNumber) ||
        (pairBEndNumber >= pairAStartNumber && pairBEndNumber <= pairAEndNumber) ||
        (pairAStartNumber >= pairBStartNumber && pairAStartNumber <= pairBEndNumber) ||
        (pairAEndNumber >= pairBStartNumber && pairAEndNumber <= pairBEndNumber)
    ) {
        return true;
    }

  return false;
}
