const faker = require("faker");
const config = require("./../config");

faker.locale = "pl";

function randRestaurantData(restaurantId) {
  const randomRestaurant = faker.helpers.createCard(); // random contact card containing many properties
  const city = randomRestaurant.address.city;
  const street = randomRestaurant.address.streetC;
  const zipcode = randomRestaurant.address.zipcode;
  return [restaurantId, city, street, zipcode];
}

function getRestaurants() {
  const restarantsArray = [];
  restarantsArray.push(["id", "Miasto", "Adres", "Kod pocztowy"])
  for (var i = 1; i <= config.RESTARANTS_AMOUNT; i++) {
    const restaurant = randRestaurantData(i);
    restarantsArray.push(restaurant);
  }
  return restarantsArray;
}

module.exports = {
  restaurants: getRestaurants()
}