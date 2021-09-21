let fs = require("fs");
let file = process.argv[2];

fs.readFile(file, function (err, contenu) {
  let lines = contenu.toString().split("\n").length - 1;
  console.log(lines);
});
