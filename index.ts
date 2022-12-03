// @ts-ignore
import nfzf from "node-fzf";
import fs from "fs";
import path from "path";
import { execSync, spawn } from "child_process";

execSync("npx tsc");

const days = fs.readdirSync(path.resolve("./dist/challenges"));
const parts = ["a", "b"];

const list = days
  .map((day) => {
    return parts.map((part) => {
      return `${day}/${part}`;
    });
  })
  .flat();

(async function () {
  const result = await nfzf({ list });
  const { selected, query } = result;

  if (!selected) {
    console.log(`No challenges found for query: ${query}`);
  } else {
    const [day, part] = selected.value.split("/");
    const filePath = path.resolve(`./dist/challenges/${day}/${part}/index.js`);

    if (fs.existsSync(filePath)) {
        spawn(`node ${filePath}`, { stdio: "inherit", shell: true });
    }
  }
})();
