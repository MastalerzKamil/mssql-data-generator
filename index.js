const restaurantsTable = require("./fake-data-tables/restaurants.table");
const ordersTable = require("./fake-data-tables/orders.table");
const mealsTable = require("./fake-data-tables/meals.table");
const productsTable = require("./fake-data-tables/products.table");
const preparationsTable = require("./fake-data-tables/preparations.table");
const complaintsTable = require("./fake-data-tables/complaints.table");

const moment = require("moment");

const T2 = moment().utcOffset("+0000").format()
const T1 = moment().subtract(7, 'days').utcOffset("+0000").format();

// t1
require("./utils").writeToCSV(restaurantsTable.restaurants, restaurantsTable.csvPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders, ordersTable.csvPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, mealsTable.csvPath); // Meals
require("./utils").writeToCSV(productsTable.products, productsTable.csvPath); // Products
require("./utils").writeToCSV(preparationsTable.preparations, preparationsTable.csvPath); // Preparations
require("./utils").writeToCSV(complaintsTable.complaints, complaintsTable.csvPath); // Complaints
