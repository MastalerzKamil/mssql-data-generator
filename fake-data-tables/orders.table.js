const faker = require("faker");
const moment = require("moment");
const restaurants = require("./restaurants.table").restaurants;
const utils = require("./../utils");

const ORDERS_AMOUNT = 100000;
const MAX_ORDER_TIME = 480  // max 8 minutes waiting for meal
const MIN_ORDER_TIME = 1  // min waitnig time
const MAX_ORDER_NUMBER = 1000

faker.locale = "pl";
moment.locale(); // setting local timezone to formating date

function convertDateToTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}

// restaurantId = random index between 1 and length-1 we have implemented header
function getRestaurantId() {
  return utils.randomIntFromInterval(1, restaurants.length - 1);
}

// generating record to Orders Table
function randOrders(orderId) {
  var startOrderDate = faker.date.past();
  const startOrderTimestamp = convertDateToTimestamp(startOrderDate);
  const waitingTime = utils.randomIntFromInterval(MIN_ORDER_TIME, MAX_ORDER_TIME);
  const finishOrderTimestamp = startOrderTimestamp + waitingTime;
  //changing Date format to seconds
  startOrderDate = moment.unix(startOrderTimestamp).utcOffset("+0000").format();
  const finishOrderDate = moment.unix(finishOrderTimestamp).utcOffset('+0000').format();

  const orderNumber = orderId % MAX_ORDER_NUMBER;

  const randRestaurantForeignId = getRestaurantId();
  return [orderId, startOrderDate, finishOrderDate, orderNumber, randRestaurantForeignId];
}

function getOrders() {
  const ordersArray = [];
  ordersArray.push(["id", "Data Zamówienia", "Data Odebrania zamówienia", "Numer zamówienia", "Id restauracji"])
  for (var i = 1; i <= ORDERS_AMOUNT; i++) {
    const order = randOrders(i);
    ordersArray.push(order);
  }
  return ordersArray;
}

module.exports = {
  csvPath: "./generated-data/orders.csv",
  orders: getOrders()
}