// from data.js
var tableData = data;

// YOUR CODE HERE!
//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search
// through the date/time column to find rows that match user input.

console.log(tableData); //testing if data is working

//selecting table body
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // append
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// d3 select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);


    filteredData.forEach(function(selections) {
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});