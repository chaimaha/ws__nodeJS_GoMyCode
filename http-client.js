let http = require("http");
let url = process.argv[2];

http.get(url, function (reponse) {
  reponse.on("data", function (data) {
    console.log(data.toString());
  });
});
