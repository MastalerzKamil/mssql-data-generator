const faker = require("faker");
const orders = require("./orders.table").orders();
const utils = require("./../utils");
const config = require("./../config");

faker.locale = "pl";

// orderId = random index between 1 and length-1 we have implemented header
function getOrderId() {
  return utils.randomIntFromInterval(1, orders.length - 1);
}

function randMeals(mealId) {
  const mealAmount = utils.randomIntFromInterval(1, 15);
  var foreignOrderId = mealId % orders.length - 1
  if (foreignOrderId === 0) foreignOrderId = getOrderId();
  return [mealId, mealAmount, "", foreignOrderId];
}

function getMeals() {
  const mealsArray = [];
  mealsArray.push(["Id", "Ilosc", "Uwagi", "Id zamowienia"])
  for (var i = 1; i <= config.MEALS_AMOUNT; i++) {
    const meal = randMeals(i);
    mealsArray.push(meal);
  }
  return mealsArray;
}

module.exports = {
  meals: getMeals(),
};
