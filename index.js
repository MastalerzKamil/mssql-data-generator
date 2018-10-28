const moment = require("moment");

const config = require("./config");
const restaurantsTable = require("./fake-data-tables/restaurants.table");
const ordersTable = require("./fake-data-tables/orders.table");
const mealsTable = require("./fake-data-tables/meals.table");
const productsTable = require("./fake-data-tables/products.table");
const preparationsTable = require("./fake-data-tables/preparations.table");
const complaintsTable = require("./fake-data-tables/complaints.table");

// t1
require("./utils").writeToCSV(restaurantsTable.restaurants, config.t1RestaurantsPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders, config.t1OrdersPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, config.t1OrdersPath); // Meals
require("./utils").writeToCSV(productsTable.products, config.t1ProductsPath); // Products
require("./utils").writeToCSV(preparationsTable.preparations, config.t1PreparationsPath); // Preparations
require("./utils").writeToCSV(complaintsTable.complaints, config.t1ComplaintsPath); // Complaints

// t2
require("./utils").writeToCSV(restaurantsTable.restaurants, config.t2RestaurantsPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders, config.t2OrdersPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, config.t2MealsPath); // Meals
require("./utils").writeToCSV(productsTable.products, config.t2ProductsPath); // Products
require("./utils").writeToCSV(preparationsTable.preparations, config.t2PreparationsPath); // Preparations
require("./utils").writeToCSV(complaintsTable.complaints, config.t2ComplaintsPath); // Complaints