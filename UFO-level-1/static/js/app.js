// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select(".form-group");
var tbody = d3.select("tbody");



// Give the button and form a function to run on an event

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select(".form-control");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    tbody.html("")

    filteredData.forEach(function(sightingsList) { 

        var row = tbody.append("tr");
        
        Object.entries(sightingsList).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value)

    })}
)};