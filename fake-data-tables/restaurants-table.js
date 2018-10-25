const faker = require("faker");
const fs = require("fs");
const ARRAY_SIZE = 2;
const FILE_PATH = "restaurants.csv";

faker.locale = "pl";

function randRestaurantData() {
  const randomRestaurant = faker.helpers.createCard(); // random contact card containing many properties
  const city = randomRestaurant.address.city;
  const street = randomRestaurant.address.streetC;
  const zipcode = randomRestaurant.address.zipcode;
  return [city, street, zipcode];
}

function getRestaurantsArray() {
  const restarantsArray = [];
  for (var i = 0; i < ARRAY_SIZE; i++) {
    const restaurant = randRestaurantData();
    restarantsArray.push(restaurant);
  }
  return restarantsArray;
}

function writeRestaurantsToCSV() {
  const file = fs.createWriteStream(FILE_PATH);
  const array = getRestaurantsArray();
  array.map(function(v) {
    const record = v.join(";") + "\n";
    file.write(record);
  });
}

writeRestaurantsToCSV();
