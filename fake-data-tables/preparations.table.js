const utils = require("./../utils");
const meals = require("./meals.table").meals;
const products = require("./products.table").products;
const config = require("./../config");

const preparationTypes = ['smazenie', 'pieczenie', 'grillowanie', 'pakowania', 'krojenie', 'skladania',
  'panierowanie', 'nakladanie', 'nalewanie'];

const jobPositions = ['Uczacy sie', 'Kasjer', 'Kucharz', 'Serwis', 'Pakowacz'];

function convertSecondsToTime(secNum) {
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - (hours * 3600)) / 60);
  var seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  if (hours == "00") {
    return minutes + ':' + seconds;
  } else {
    return hours + ':' + minutes + ':' + seconds;
  }
}

function randPreparation(preparationId) {
  const randomSeconds = utils.randomIntFromInterval(40, 1800);
  const preaprationTime = convertSecondsToTime(randomSeconds);
  const typeIndex = utils.randomIntFromInterval(0, preparationTypes.length - 1);
  const type = preparationTypes[typeIndex];
  const positionIndex = utils.randomIntFromInterval(0, jobPositions.length - 1);
  const position = jobPositions[positionIndex];
  var mealId = preparationId % (meals.length - 1);

  if (mealId === 0) {
    mealId = 1;
  }

  var productIndex = preparationId % (products.length - 1);

  if (productIndex === 0) {
    productIndex = 1;
  }
  const productName = products[productIndex];
  return [preparationId, preaprationTime, type, position, mealId, productName];
}

function getPreparations() {
  const preparationsArray = [];
  preparationsArray.push(["Id", "Czas przygotowywania", "Rodzaj", "pozycja pracownika", "Id zamowienia", "Nazwa produktu"])
  for (var i = 1; i <= config.PREPARATIONS_AMOUNT; i++) {
    const preparation = randPreparation(i);
    preparationsArray.push(preparation);
  }
  return preparationsArray;
}

module.exports = {
  preparations: getPreparations(),
}
