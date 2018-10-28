const orders = require("./orders.table").orders;
const utils = require("./../utils");
const config = require("./../config");

const complainReasons = ['Zbyt dlugi czas oczekiwania', 'nieswieze jedzenie', 'zle zapakowane jedzenie',
  'inne'];

function randComplaint(complaintId) {
  const complaintIndex = utils.randomIntFromInterval(0, complainReasons.length - 1);
  const reason = complainReasons[complaintIndex];
  var orderId = complaintId % orders.length - 1;

  if (orderId === 0) {
    orderId = utils.randomIntFromInterval(1, orders.length - 1);
  }
  return [complaintId, reason, orderId];
}

function getComplaints() {
  const complaintsArray = [];
  complaintsArray.push(["id", "Przyczyna", "ID Zamówienia"]);
  for (var i = 1; i <= config.COMPLAINTS_AMOUNT; i++) {
    const complaint = randComplaint(i);
    complaintsArray.push(complaint);
  }
  return complaintsArray;
}

module.exports = {
  complaints: getComplaints(),
}
