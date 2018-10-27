const fs = require("fs");

module.exports = {
  writeToCSV: function (array, filePath) {
    try {
      const file = fs.createWriteStream(filePath);
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