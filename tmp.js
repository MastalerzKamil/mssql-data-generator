const faker = require("faker");

function randDateBetween(from, to) {
  var fromMilli = Date.parse(from);
  var dateOffset = faker.random.number(Date.parse(to) - fromMilli);

  var newDate = new Date(fromMilli + dateOffset);

  return newDate;
};