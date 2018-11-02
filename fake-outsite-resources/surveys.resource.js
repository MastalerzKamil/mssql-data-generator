const config = require("./../config");
const utils = require("./../utils");
const faker = require("faker");
const moment = require("moment");

function randSurvey(startPeriod, endPeriod) {
  var randDate = faker.date.between(startPeriod, endPeriod);
  randDate = moment(randDate).utcOffset("+0000").format();
  return [
    utils.randomIntFromInterval(1, 5),
    randDate
  ];
}

module.exports = {
  surveys: function (startPeriod, endPeriod) {
    const surveysArray = [];
    for (var i = 1; i <= config.SURVEYS_AMOUNT; i++) {
      const survey = randSurvey(startPeriod, endPeriod);
      surveysArray.push(survey);
    }
    return surveysArray;
  }
}
