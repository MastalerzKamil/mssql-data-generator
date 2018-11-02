const config = require("./../config");
const utils = require("./../utils");
const faker = require("faker");
const moment = require("moment");

const workers = [
  "smazenie",
  "pakowanie",
  "krojenie",
  "mycie",
  "nalewanie"
];

function formatTime(time){
	var time=moment(time, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD, HH:mm:ss");
	return time;
}

function findWorked(id){
	for(var i=0;i<worked.length;i++){
		if(id == worked[i]){
		id++;
		return findWorked(id%(config.WORKERS_AMOUNT));
		}
	}
	worked.push(id);
	return id;
}
function randWork(position, startWork, endWork) {
  
  var randomedWorkerId = utils.randomIntFromInterval(1, config.WORKERS_AMOUNT);
 	randomedWorkerId=findWorked(randomedWorkerId);
  return [randomedWorkerId, formatTime(startWork), formatTime(endWork),workers[position]];
}


var worked = [0];

module.exports = {
  works: function () {
    const worksArray = [];
	
	var startWork = new moment(config.startT1);
	const endWork = new moment(config.startT1);
	startWork.toDate();
	endWork.toDate();
	endWork.add(8,'hours');
	worked = [];
	for (var i = 0; i < 2; i++) { 
		for (var j = 0; j < workers.length; j++) { 
		var amount=utils.randomIntFromInterval(1, 3);
		  for (var k = 0; k < amount; k++){
			const work = randWork(j, startWork, endWork);
			worksArray.push(work);
		  }
		}
		startWork = moment(endWork);
		endWork.add(8,'hours');
	}
    return worksArray;
  }
}