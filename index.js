const restaurantsTable = require("./fake-data-tables/restaurants.table");
const ordersTable = require("./fake-data-tables/orders.table");

require("./utils").writeToCSV(restaurantsTable.restaurants, restaurantsTable.csvPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders, ordersTable.csvPath); // Orders