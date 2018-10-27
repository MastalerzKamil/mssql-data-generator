const FILE_PATH = "./generated-data/restaurants.csv";
const fs = require("fs");

module.exports = {
  writeToCSV: function (array) {
    try {
      const file = fs.createWriteStream(FILE_PATH);
      array.map(function (v) {
        const record = v.join(",") + "\n";
        file.write(record);
      });
      console.log("saving to CSV done");
    } catch (err) {
      console.log("problem with saving to CSV\n" + err);
    }
  }
}