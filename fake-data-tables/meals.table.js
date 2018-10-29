const faker = require("faker");
const utils = require("./../utils");
const config = require("./../config");

faker.locale = "pl";

const mealsNames = [
  "BigMac",
  "Frytki",
  "Cola",
  "Woda",
  "Hamburger",
  "Salatka",
  "Kubelek classic"
];

// orderId = random index between 1 and length-1 we have implemented header
function getOrderId(orders) {
  return utils.randomIntFromInterval(1, orders.length - 1);
}

function randMeals(mealId, orders) {
  const mealAmount = utils.randomIntFromInterval(1, 15);
  var foreignOrderId = mealId % orders.length;
  var randMealNameIndex = mealId % mealsNames.length;

  if (randMealNameIndex === 0) {
    randMealNameIndex = utils.randomIntFromInterval(0, mealsNames.length - 1);
  }
  const mealName = mealsNames[randMealNameIndex];
  if (foreignOrderId === 0) foreignOrderId = getOrderId(orders);
  return [mealId, mealName, mealAmount, "", foreignOrderId];
}

module.exports = {
  meals: function(orders) {
    const mealsArray = [];
    mealsArray.push([
      "Id",
      "Nazwa_zamowienia",
      "Ilosc",
      "Uwagi",
      "Id zamowienia"
    ]);
    for (var i = 1; i <= config.MEALS_AMOUNT; i++) {
      const meal = randMeals(i, orders);
      mealsArray.push(meal);
    }
    return mealsArray;
  }
};
