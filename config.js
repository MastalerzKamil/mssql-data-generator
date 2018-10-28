const moment = require("moment");

module.exports = {
  brandStart: moment().subtract(2, 'years').utcOffset("+0000").format(),
  T1: moment().utcOffset("+0000").format(),
  T2: moment().subtract(7, 'days').utcOffset("+0000").format(),
  t1RestaurantsPath: "generated-data/t1/restaurantsT1.csv",
  t2RestaurantsPath: "generated-data/t2/restaurantsT2.csv",
  t1OrdersPath: "generated-data/t1/ordersT1.csv",
  t2OrdersPath: "generated-data/t2/ordersT2.csv",
  t1ComplaintsPath: "generated-data/t1/complatintsT1.csv",
  t2ComplaintsPath: "generated-data/t2/complatintsT2.csv",
  t1MealsPath: "generated-data/t1/mealsT1.csv",
  t2MealsPath: "generated-data/t2/mealsT2.csv",
  t1PreparationsPath: "generated-data/t1/preparationsT1.csv",
  t2PreparationsPath: "generated-data/t2/preparationsT2.csv",
  t1ProductsPath: "generated-data/t1/productsT1.csv",
  t2ProductsPath: "generated-data/t2/productsT2.csv",
  RESTAURANTS_AMOUNT: 2,
  PREPARATIONS_AMOUNT: 200000,
  ORDERS_AMOUNT: 10000,
  MAX_ORDER_TIME: 480,  // max 8 minutes waiting for meal
  MIN_ORDER_TIME: 1,  // min waitnig time
  MAX_ORDER_NUMBER: 1000,
  MEALS_AMOUNT: 100000,
  COMPLAINTS_AMOUNT: 1000,
}