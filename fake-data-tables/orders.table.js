const faker = require("faker");
const moment = require("moment");
const utils = require("./../utils");
const config = require("./../config");

faker.locale = "pl";
moment.locale(); // setting local timezone to formating date

function convertDateToTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}

// restaurantId = random index between 1 and length-1 we have implemented header
function getRestaurantId() {
  return utils.randomIntFromInterval(1, config.ORDERS_AMOUNT - 1);
}

// generating record to Orders Table
function randOrders(orderId, startPeriodDate, endPeriodDate) {
  var startOrderDate = faker.date.between(startPeriodDate, endPeriodDate);
  // we need timestamp to generate finish order date
  const startOrderTimestamp = convertDateToTimestamp(startOrderDate);
  const waitingTime = utils.randomIntFromInterval(config.MIN_ORDER_TIME, config.MAX_ORDER_TIME);
  const finishOrderTimestamp = startOrderTimestamp + waitingTime;
  // changing Date format to timestamp
  startOrderDate = moment.unix(startOrderTimestamp).utcOffset("+0000").format();
  const finishOrderDate = moment.unix(finishOrderTimestamp).utcOffset('+0000').format();

  const orderNumber = orderId % config.MAX_ORDER_NUMBER;  // TODO change into small amounts of ORDER_NUMBER

  var randRestaurantForeignId = utils.randomIntFromInterval(1, config.ORDERS_AMOUNT);
  // if modulo was 0 forieign id will be random 
  if (randRestaurantForeignId === 0) {
    randRestaurantForeignId = getRestaurantId();
  }

  return [orderId, startOrderDate, finishOrderDate, orderNumber, randRestaurantForeignId];
}

module.exports = {
  orders: function (startPeriodDate, endPeriodDate) {
    const ordersArray = [];
    for (var i = 1; i < config.ORDERS_AMOUNT; i++) {
      const order = randOrders(i, startPeriodDate, endPeriodDate);
      ordersArray.push(order);
    }
    return ordersArray;
  }
}