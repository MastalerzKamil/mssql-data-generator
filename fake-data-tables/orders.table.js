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

function formatTime(time){
	var time=moment(time, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD, HH:mm:ss");
	return time;
}

// generating record to Orders Table
function randOrders(orderId, startO) {
    const waitingTime = utils.randomIntFromInterval(config.MIN_ORDER_TIME, config.MAX_ORDER_TIME);
	
  var endO = new moment(startO);
  endO.add(waitingTime,'seconds');

  const orderNumber = orderId % config.MAX_ORDER_NUMBER;  // TODO change into small amounts of ORDER_NUMBER

  var randRestaurantForeignId = utils.randomIntFromInterval(1, config.ORDERS_AMOUNT);
  // if modulo was 0 forieign id will be random 
  if (randRestaurantForeignId === 0) {
    randRestaurantForeignId = getRestaurantId();
  }

  return [orderId, formatTime(startO), formatTime(endO), orderNumber, randRestaurantForeignId];
}

module.exports = {
  orders: function ( startPeriodDate, endPeriodDate) {
    const ordersArray = [];
	var start = new moment(config.startT1);
	var end = new moment(config.stopT1);
		do
		{
			for (var i = 1; i < config.ORDERS_AMOUNT; i++) {
			const order = randOrders(i, start);
			ordersArray.push(order);
			const waitingTime = utils.randomIntFromInterval(config.MIN_ORDER_TIME, config.MAX_ORDER_TIME);
			start.add(waitingTime,'seconds');
			}
			start.toDate();
			start.add(1,'days');
			console.log("while");
		}
		while(!(start.month()-end.month()==0 && start.day()-end.day()==0 && start.year()-end.year()==0))
    return ordersArray;
  }
}