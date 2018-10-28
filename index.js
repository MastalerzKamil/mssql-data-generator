const config = require("./config");
const restaurantsTable = require("./fake-data-tables/restaurants.table");
const ordersTable = require("./fake-data-tables/orders.table");
const mealsTable = require("./fake-data-tables/meals.table");
const productsTable = require("./fake-data-tables/products.table");
const preparationsTable = require("./fake-data-tables/preparations.table");
const complaintsTable = require("./fake-data-tables/complaints.table");

const worksResources = require("./fake-outsite-resources/works.resource");
const surveysResources = require("./fake-outsite-resources/surveys.resource");

// t1
require("./utils").writeToCSV(restaurantsTable.restaurants, config.t1RestaurantsPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders(config.brandStart, config.T1), config.t1OrdersPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, config.t1OrdersPath); // Meals
require("./utils").writeToCSV(productsTable.products, config.t1ProductsPath); // Products
require("./utils").writeToCSV(preparationsTable.preparations, config.t1PreparationsPath); // Preparations
require("./utils").writeToCSV(complaintsTable.complaints, config.t1ComplaintsPath); // Complaints

require("./utils").writeToCSV(worksResources.works(config.brandStart, config.T1), config.t1WorkPath); // Works
require("./utils").writeToCSV(surveysResources.surveys(config.brandStart, config.T1), config.t1SurveyPath); // Surveys

// t2
require("./utils").writeToCSV(restaurantsTable.restaurants, config.t2RestaurantsPath); // Restaurants
require("./utils").writeToCSV(ordersTable.orders(config.T1, config.T2), config.t1OrdersPath); // Orders
require("./utils").writeToCSV(mealsTable.meals, config.t2MealsPath); // Meals
require("./utils").writeToCSV(productsTable.products, config.t2ProductsPath); // Products
require("./utils").writeToCSV(preparationsTable.preparations, config.t2PreparationsPath); // Preparations
require("./utils").writeToCSV(complaintsTable.complaints, config.t2ComplaintsPath); // Complaints

require("./utils").writeToCSV(worksResources.works(config.T1, config.T2), config.t2WorkPath); // Works
require("./utils").writeToCSV(surveysResources.surveys(config.T1, config.T2), config.t2SurveyPath); // Surveys
