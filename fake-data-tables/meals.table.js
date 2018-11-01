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
  "KubelekClassic"
];

// orderId = random index between 1 and length-1 we have implemented header
function getOrderId(orders) {
  return utils.randomIntFromInterval(1, orders.length - 1);
}

function randMeals(mealId, orders,OrderId) {
  const mealAmount = utils.randomIntFromInterval(1, 5);
  var randMealNameIndex = utils.randomIntFromInterval(1, 10) % mealsNames.length;
  if (randMealNameIndex === 0) {
    randMealNameIndex = utils.randomIntFromInterval(0, mealsNames.length - 1);
  }
  const mealName = mealsNames[randMealNameIndex];
  return [mealId, mealName, mealAmount, "", OrderId];
}

module.exports = {
  meals: function(orders) {
    const mealsArray = [];
	var mealID=0;
    for (var i = 1; i <= orders.length; i++) {
		var randAmount = utils.randomIntFromInterval(1, 4);
		for(var j=0;j<randAmount;j++){
			mealID++;
			const meal = randMeals(mealID, orders,i);
			mealsArray.push(meal);
		}
    }
    return mealsArray;
  }
};
