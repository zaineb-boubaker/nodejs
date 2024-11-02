const fs = require("fs");
const path = require("path");


const filepath = path.resolve("files","welcome.txt")
const data = fs.readFileSync(filepath, { encoding: "utf-8" });
console.log(data);