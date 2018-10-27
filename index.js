const restaurantsTable = require("./fake-data-tables/restaurants.table");
const ordersTable = require("./fake-data-tables/orders.table");
const mealsTable = require("./fake-data-tables/meals.table");

require("./utils").writeToCSV(restaurantsTable.restaurants, restaurantsTable.csvPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders, ordersTable.csvPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, mealsTable.csvPath); // Orders
