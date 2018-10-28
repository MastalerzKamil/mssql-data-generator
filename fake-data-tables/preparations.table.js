const utils = require("./../utils");
const config = require("./../config");

const mealsWithComponents = [
  ["BigMac", ["bulka", "salata", "poledwiczki", "pomidor"]],
  ["Frytki", ["frytki"]],
  ["Cola", ["cola"]],
  ["Woda", ["woda"]],
  ["Hamburger", ["bulka", "salata", "poledwiczki"]],
  ["Salatka", ["salata", "pomidor", "ogorki"]],
  ["Kubelek classic", ["udka", "poledwiczki"]]
];

const componentsWithActivity = [
  ["frytki", ["smazenie", "00:03:00"]],
  ["salata", ["mycie", "00:01:00"]],
  ["bulka", ["krojenie", "00:00:30"]],
  ["cola", ["nalewanie", "00:01:30"]],
  ["woda", ["nalewanie", "00:01:30"]],
  ["poledwiczki", ["smazenie", "00:05:00"]],
  ["udka", ["smazenie", "00:05:00"]],
  ["pomidor", ["mycie", "00:01:00"]],
  ["ogorki", ["mycie", "00:01:00"]]
];

const workersWithActivity = [
  ["smazenie", ["Kucharz"]],
  ["pakowanie", ["Kasjer"]],
  ["krojenie", ["Serwis"]],
  ["mycie", ["Serwis"]],
  ["nalewanie", ["kasjer"]]
];

function randMeal() {
  const mealsTypeLength = mealsWithComponents.length;
  const randomedMealIndex = utils.randomIntFromInterval(0, mealsTypeLength - 1);
  return mealsWithComponents[randomedMealIndex];
}

// return worker position on given activity
function findWorkerForActivity(activity) {
  const foundActivity = workersWithActivity.filter(function (activityElement) {
    return (activityElement[0] == activity)
  })[0];
  return foundActivity;
}

function findComponentsWithActivity(component) {
  const activitiesWithTimes = componentsWithActivity.filter(function (compElement) {
    return component == compElement[0];
  })[0];
  return activitiesWithTimes
}

function getMealInfoObject(componentInfoArray, mealName) {
  return {
    componentName: componentInfoArray[0],
    activitesRequired: componentInfoArray[1],
    mealName: mealName
  };
}

function splitActivities(mealInfoObject) {
  const activity = mealInfoObject.activitesRequired[0];
  const timeDuration = mealInfoObject.activitesRequired[1];
  const possibleWorkers = findWorkerForActivity(activity);
  const worker = possibleWorkers[1][0];
  return [
    mealInfoObject.mealName,
    activity,
    timeDuration,
    worker
  ]
}

function getPreparationsListForRandMeal() {
  const mealWithComponents = randMeal(); // rand meal
  const randomMealName = mealWithComponents[0];
  const components = mealWithComponents[1];
  return components.map(function (comp) {
    const componentInfoArray = findComponentsWithActivity(comp)
    const mealInfoObject = getMealInfoObject(componentInfoArray, randomMealName);
    const splittedActiviteis = splitActivities(mealInfoObject);
    return splittedActiviteis;
  });
}

function getPreparations() {
  const preparationsArray = [];
  preparationsArray.push(["Id", "Czas przygotowywania", "Rodzaj", "pozycja pracownika", "Id zestawu", "Nazwa produktu"])
  for (var i = 1; i <= config.PREPARATIONS_AMOUNT; i++) {
    //const preparation = randPreparation(i);
    //preparationsArray.push(preparation);
  }
  return preparationsArray;
}
module.exports = {
  preparations: getPreparations(),
}
