const utils = require("./../utils");
const config = require("./../config");

const complainReasons = [
  "Zbyt dlugi czas oczekiwania",
  "nieswieze jedzenie",
  "zle zapakowane jedzenie",
  "inne"
];

function randComplaint(complaintId, orders) {
  const complaintIndex = utils.randomIntFromInterval(
    0,
    complainReasons.length - 1
  );
  const reason = complainReasons[complaintIndex];
  var orderId = utils.randomIntFromInterval(1, orders.length);
  return [complaintId, reason, "", orderId];
}

module.exports = {
  complaints: function(orders) {
    const complaintsArray = [];
	const randomAmount = utils.randomIntFromInterval(orders.length/5, orders.length/2)
    for (var i = 1; i < randomAmount; i++) {
      const complaint = randComplaint(i, orders);
      complaintsArray.push(complaint);
    }
    return complaintsArray;
  }
};
