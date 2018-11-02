const moment = require("moment");

module.exports = {
  brandStart: moment()
    .subtract(1, "days")//(2, "months")
    .utcOffset("+0000")
    .format(),
  T1: moment()
    .utcOffset("+0000")
    .format(),
  T2: moment()
    .subtract(1, "days")
    .utcOffset("+0000")
    .format(),
	
startT1: moment("2018-01-01 08:00:00", "YYYY-MM-DD HH:mm:ss"),
stopT1: moment("2018-01-03 08:00:00", "YYYY-MM-DD HH:mm:ss"),

  t1OrdersPath: "generated-data/t1/ordersT1.csv",
  t1ComplaintsPath: "generated-data/t1/complatintsT1.csv",
  t1MealsPath: "generated-data/t1/mealsT1.csv",
  t1PreparationsPath: "generated-data/t1/preparationsT1.csv",
  t1ProductsPath: "generated-data/t1/productsT1.csv",
  t1WorkPath: "generated-data/outsite-resources-t1/workT1.csv",
  t1SurveyPath: "generated-data/outsite-resources-t1/surveyT1.csv",
  RESTAURANTS_AMOUNT: 2,
  ORDERS_AMOUNT: 10,
  MAX_ORDER_TIME: 480, // max 8 minutes waiting for meal
  MIN_ORDER_TIME: 1, // min waitnig time
  MAX_ORDER_NUMBER: 1000,
  WORKERS_AMOUNT: 45,
  SURVEYS_AMOUNT: 5
};
