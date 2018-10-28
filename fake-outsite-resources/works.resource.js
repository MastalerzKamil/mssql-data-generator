const config = require("./../config");
const utils = require("./../utils");
const faker = require("faker");
const moment = require("moment");

function randWork(workerId, startPeriod, endPeriod) {
  var randomedWorkerId = workerId % config.WORKERS_AMOUNT;

  if (randomedWorkerId === 0) {
    randomedWorkerId = utils.randomIntFromInterval(1, config.WORKERS_AMOUNT);
  }
  var startWork = faker.date.between(startPeriod, endPeriod)
  startWork = moment().utcOffset("+0000").format();
  var endWork = faker.date.between(startWork, endPeriod)
  endWork = moment().utcOffset("+0000").format();
  return [randomedWorkerId, startWork, endWork];
}

module.exports = {
  works: function (startPeriod, endPeriod) {
    const worksArray = [];
    worksArray.push(["id_pracownika", "poczatek_zmiany", "koniec_zmiany"]);
    for (var i = 1; i <= config.WORKS_AMOUNT; i++) {
      const work = randWork(i, startPeriod, endPeriod);
      worksArray.push(work);
    }
    return worksArray;
  }
}