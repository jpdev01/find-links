import getFile from "./index.js";

const path = process.argv[2];
console.log(await getFile(path));