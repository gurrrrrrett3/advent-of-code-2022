import loadData from "../../../misc/loadData";

const data = loadData(6).split("");

let lastFourChars: string[] = [];
// load first 4 chars
for (let i = 0; i < 4; i++) {
  lastFourChars.push(data[i]);
}

for (let i = 4; i < data.length; i++) {
  const char = data[i];
  lastFourChars.push(char);
  lastFourChars = lastFourChars.slice(-4);
  
  console.log(i, char, lastFourChars);

  // if last 4 chars are all different, log index
  if (areAllDifferent(lastFourChars)) {
    console.log(i + 1)
    process.exit();
  }
}

function areAllDifferent(arr: string[]): boolean {
    const set = new Set(arr);
    return set.size === arr.length;
}
