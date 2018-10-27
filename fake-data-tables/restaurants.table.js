const faker = require("faker");
const RESTARANTS_AMOUNT = 2;

faker.locale = "pl";

function randRestaurantData(id) {
  const randomRestaurant = faker.helpers.createCard(); // random contact card containing many properties
  const city = randomRestaurant.address.city;
  const street = randomRestaurant.address.streetC;
  const zipcode = randomRestaurant.address.zipcode;
  return [id, city, street, zipcode];
}

function getRestaurants() {
  const restarantsArray = [];
  restarantsArray.push(["id", "Misto", "Adres", "Kod pocztowy"])
  for (var i = 1; i <= RESTARANTS_AMOUNT; i++) {
    const restaurant = randRestaurantData(i);
    restarantsArray.push(restaurant);
  }
  return restarantsArray;
}

module.exports = {
  restaurants: getRestaurants()
}