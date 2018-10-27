const faker = require("faker");
const orders = require("./orders.table").orders;
const utils = require("./../utils");

const ORDERS_AMOUNT = 100000;

faker.locale = "pl";

// orderId = random index between 1 and length-1 we have implemented header
function getOrderId() {
  return utils.randomIntFromInterval(1, orders.length - 1);
}

function randMeals(mealId) {
  const mealAmount = utils.randomIntFromInterval(1, 15);
  return [mealId, mealAmount, getOrderId()];
}

function getMeals() {
  const mealsArray = [];
  mealsArray.push(["Id", "Ilosc", "Id zamowienia"])
  for (var i = 1; i <= ORDERS_AMOUNT; i++) {
    const meal = randMeals(i);
    mealsArray.push(meal);
  }
  return mealsArray;
}

module.exports = {
  meals: getMeals(),
  csvPath: "./generated-data/meals.csv"
};
