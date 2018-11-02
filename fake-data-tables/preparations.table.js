const utils = require("./../utils");
const config = require("./../config");


const mealsWithComponents = [
  ["BigMac", ["bulka", "salata", "poledwiczki", "pomidor"]], 
  ["Frytki", ["frytki"]], 
  ["Cola", ["cola"]], 
  ["Woda", ["woda"]], 
  ["Hamburger", ["bulka", "salata", "poledwiczki"]], 
  ["Salatka", ["salata", "pomidor", "ogorki"]],
  ["KubelekClassic", ["udka", "poledwiczki"]] 
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

// return worker position on given activity
function findWorkerForActivity(activity) {
  const foundActivity = workersWithActivity.filter(function(activityElement) {
    return activityElement[0] == activity;
  })[0];
  return foundActivity;
}

function findComponentsWithActivity(component) {
  const activitiesWithTimes = componentsWithActivity.filter(function(
    compElement
  ) {
    return component == compElement[0];
  })[0];
  return activitiesWithTimes;
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
  const componentName = mealInfoObject.componentName;
  const possibleWorkers = findWorkerForActivity(activity);
  const worker = possibleWorkers[1][0];
  return [
    // mealInfoObject.mealName,
    preparationId,
    componentName,
    activity,
    timeDuration,
    worker,
	idZestawu
  ];
}

function findMeal(meal) {
  for(var i = 0; i<mealsWithComponents.length;i++){
  if (mealsWithComponents[i][0]==meal)
	  return mealsWithComponents[i];
  }
}

function getPreparationsListForMeal(meal) {
  const mealWithComponents = findMeal(meal);
  
  const randomMealName = mealWithComponents[0];
  const components = mealWithComponents[1];
  return components.map(function(comp) {
    preparationId++;
    const componentInfoArray = findComponentsWithActivity(comp);
    const mealInfoObject = getMealInfoObject(
      componentInfoArray,
      randomMealName
    );
    const splittedActiviteis = splitActivities(mealInfoObject);
    return splittedActiviteis;
  });
}

const preparationsArray = [];
var preparationId = 0;
var idZestawu = 0;
function randPreparations(iteration, orders,meal) { 
  const mealPreparation = getPreparationsListForMeal(meal);
  mealPreparation.map(function(componentPreparation, index) {
    preparationsArray.push(componentPreparation);
  });
}

module.exports = {
  preparations: function(orders,meals) {
    
	var MapMeals=[""];
	meals.map(function (mealsElement) {
		MapMeals.push(mealsElement[1]); 
    });
	idZestawu=1;
	for (var i = 1; i < MapMeals.length; i++) {
      randPreparations(i, orders, MapMeals[idZestawu]); // FIXME don't use global variables
	  idZestawu++;
    }
    return preparationsArray;
  }
};
