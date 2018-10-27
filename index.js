const restaurantsTable = require("./fake-data-tables/restaurants.table");
const ordersTable = require("./fake-data-tables/orders.table");
const mealsTable = require("./fake-data-tables/meals.table");
const productsTable = require("./fake-data-tables/products.table");

require("./utils").writeToCSV(restaurantsTable.restaurants, restaurantsTable.csvPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders, ordersTable.csvPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, mealsTable.csvPath); // Meals
require("./utils").writeToCSV(productsTable.products, productsTable.csvPath); // Products
