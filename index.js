const config = require("./config");
const ordersTable = require("./fake-data-tables/orders.table");
const mealsTable = require("./fake-data-tables/meals.table");
const productsTable = require("./fake-data-tables/products.table");
const preparationsTable = require("./fake-data-tables/preparations.table");
const complaintsTable = require("./fake-data-tables/complaints.table");

const worksResources = require("./fake-outsite-resources/works.resource");
const surveysResources = require("./fake-outsite-resources/surveys.resource");

const ordersT1 = ordersTable.orders(config.brandStart, config.T1);
//const ordersT2 = ordersTable.orders(config.T1, config.T2);

const complaintsT1 = complaintsTable.complaints(ordersT1);
//const complaintsT2 = complaintsTable.complaints(ordersT2);

const mealsT1 = mealsTable.meals(ordersT1);
//const mealsT2 = mealsTable.meals(ordersT2);

const preparationsT1 = preparationsTable.preparations(ordersT1, mealsT1);
//const preparationsT2 = preparationsTable.preparations(ordersT2, mealsT2);

// t1
require("./utils").writeToCSV(ordersT1, config.t1OrdersPath); // Orders
require("./utils").writeToCSV(mealsT1, config.t1MealsPath); // Meals
require("./utils").writeToCSV(productsTable.products, config.t1ProductsPath); // Products
require("./utils").writeToCSV(preparationsT1, config.t1PreparationsPath); // Preparations
require("./utils").writeToCSV(complaintsT1, config.t1ComplaintsPath); // Complaints

require("./utils").writeToCSV(
  worksResources.works(config.brandStart, config.T1),
  config.t1WorkPath
); // Works
require("./utils").writeToCSV(
  surveysResources.surveys(config.brandStart, config.T1),
  config.t1SurveyPath
); // Surveys

// t2
/*require("./utils").writeToCSV(
  restaurantsTable.restaurants,
  config.t2RestaurantsPath
); // Restaurants
require("./utils").writeToCSV(ordersT2, config.t2OrdersPath); // Orders
require("./utils").writeToCSV(mealsT2, config.t2MealsPath); // Meals
require("./utils").writeToCSV(productsTable.products, config.t2ProductsPath); // Products
require("./utils").writeToCSV(preparationsT2, config.t2PreparationsPath); // Preparations
require("./utils").writeToCSV(complaintsT2, config.t2ComplaintsPath); // Complaints

require("./utils").writeToCSV(
  worksResources.works(config.T1, config.T2),
  config.t2WorkPath
); // Works
require("./utils").writeToCSV(
  surveysResources.surveys(config.T1, config.T2),
  config.t2SurveyPath
); // Surveys*/
