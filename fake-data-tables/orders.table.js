const faker = require("faker");
const moment = require("moment");

const ORDERS_AMOUNT = 100;
const MAX_ORDER_TIME = 480  // max 8 minutes waiting for meal
const MIN_ORDER_TIME = 1  // min waitnig time

faker.locale = "pl";
moment.locale();

function convertDateToTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}

// min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randOrders(orderId) {
  var orderDate = faker.date.past();
  const orderTimestamp = convertDateToTimestamp(orderDate);
  const waitingTime = randomIntFromInterval(MIN_ORDER_TIME, MAX_ORDER_TIME);
  const finishOrderTimestamp = orderTimestamp + waitingTime;
  orderDate = moment.unix(orderTimestamp).utcOffset("+0000").format();
  const finishOrderDate = moment.unix(finishOrderTimestamp).utcOffset('+0000').format();
  return { orderDate, finishOrderDate }
}

function getOrders() {
  const ordersArray = [];
  ordersArray.push(["id", "orderDate", "finishOrderDate", "orderNumber"])
  for (var i = 1; i <= ORDERS_AMOUNT; i++) {
  }
}

randOrders();