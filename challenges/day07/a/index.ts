import loadData from "../../../misc/loadData";

const input = loadData(7).split("\n");

const dirs = new Map<string, Directory>();

class Directory {
  public size: number = 0;
  public path: string;
  public parent: Directory | null;
  constructor( path: string, parent: Directory | null = null) {
    this.path = path;
    this.parent = parent;
    dirs.set(path, this);
  }

  public addSize(size: number) {
    this.size += size;
    let current = this.parent;
    // recursively add up the size of all parents until we reach the root
    while (current) {
      current.size += size;
      current = current.parent;
    }
  }
}

let currentDirectory = new Directory("/");

// loop through all the commands in the input

for (let i = 0; i < input.length; i++) {
  const line = input[i];
  console.log(currentDirectory.path, line);
  const parts = line.split(" ");

  if (parts[0] == "$") {
    const command = parts[1];

    if (command == "cd") {
      const dir = parts[2];
      if (dir == "..") {
        currentDirectory = currentDirectory.parent!;
      } else if (dir == "/") {
        currentDirectory = dirs.get("/")!;
      } else {
        const path = currentDirectory.path + dir + "/";
        currentDirectory = dirs.get(path) || new Directory(path, currentDirectory);
      }
    } else if (command == "ls") {
      // read the next lines until we hit another command or the end of the input
      while (true) {
        const nextLine = input[i + 1];
        if (nextLine == "" || nextLine.startsWith("$")) break;
        i++;
        const nextParts = nextLine.split(" ");

        if (nextParts[0] != "dir") {
          // it's a file
          // {size} {name}
          const size = parseInt(nextParts[0]);
          currentDirectory.addSize(size);
        }
      }
    }
  }
}

const allDirs = Array.from(dirs.values());
const total = allDirs.filter((dir) => dir.size <= 100000).reduce((acc, dir) => acc + dir.size, 0);

console.log(total)
