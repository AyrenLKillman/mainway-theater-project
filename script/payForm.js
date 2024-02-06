/*const cost = Number(document.getElementById('ticket').value);
const displayCost = "$" + cost * 5;
document.getElementById('check').addEventListener('click', function() {document.getElementById('cost').innerHTML = "<p>" + displayCost + "</p>";});*/







function findCost(quantity) {
    const cost = quantity * 25;
    const displayCost = "$" + cost;
    return displayCost;
}


findCost(Number(document.getElementById('ticket').value));

document.getElementById('cost').innerHTML = "<p>" + findCost(document.getElementById('ticket').value) + "</p>";
document.getElementById('check').addEventListener('click', function() {document.getElementById('cost').innerHTML = "<p>" + findCost(document.getElementById('ticket').value) + "</p>";});