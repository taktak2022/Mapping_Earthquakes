// Add console.log to check to see if our code is working.
console.log("working");

// MODULE 13.2.4 ADD A MAP OBJECT: 
// SEE CODE OPTION TO *NOT* USE setView function
// USED TO ADD MULTIPLE TILE LAYERS OR BACKGROUND IMAGES
// Create the map object with a center and zoom level.
// MODULE 13.4.3 CHANGED MAP CENTER TO SFO AIRPORT
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// MODULE 13.4.3 * ADD MAP LINES - LAX to SFO *
// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
// MODULE 13.4.3 CHANGED LINE TO COLOR YELLOW (& MADE IT BOLD)
L.polyline(line, {
    color: "yellow",
    weight: 8
  }).addTo(map);

// MODULE 13.4.1 * ADD A MARKER TO THE MAP *
// Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//MODULE 13.4.1 * ADD A CIRCLE RADIUS TO THE MAP *; * YELLOW CIRCLE ON DARK MAP *
//L.circleMarker([34.0522, -118.2437], {
    //radius: 20,
    //color: "black",
    //fillColor: "magenta"
 //}).addTo(map);

// MODULE 13.4.2 ADD A NEW FILE FOR DATA AND ASSIGN VARIABLE
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "black",
        fillColor: "magenta"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/dark-v10',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
