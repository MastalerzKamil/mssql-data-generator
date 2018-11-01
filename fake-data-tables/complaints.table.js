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
    for (var i = 1; i <= config.COMPLAINTS_AMOUNT; i++) {
      const complaint = randComplaint(i, orders);
      complaintsArray.push(complaint);
    }
    return complaintsArray;
  }
};
