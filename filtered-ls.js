let fs = require("fs");
let path = require("path");
let pathToUse = process.argv[2];
let ext = "." + process.argv[3];

fs.readdir(pathToUse, function (err, files) {
  if (err) {
    throw err;
  } else {
    let filteredFiles = files.filter(function (file) {
      if (path.extname(file) === ext) {
        return true;
      } else {
        return false;
      }
    });
    for (let x = 0; x < filteredFiles.length; x++) {
      console.log(filteredFiles[x]);
    }
  }
});
