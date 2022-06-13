// Add console.log to check to see if our code is working.
console.log("working");

// MODULE 13.6.1
// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// MODULE 13.5.4 ADDING AN OPTIONAL MAP (MULTIPLE MAPS)
// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Satellite Streets": satelliteStreets,
  "Streets": streets,
  //Dark: dark,
  //Street: light
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Creating a GeoJSON layer with the retrieved data.
  //L.geoJSON(data, {
  //onEachFeature: function(feature, data) {
    //data.bindPopup("<h2>" + feature.properties.place + "</h2> <hr> <h2> Magnitude:  " + feature.properties.mag + "</h2>")
    //}
  //}).addTo(map);

// Create a style for the lines.
//let myStyle = {
  //color: "blue",
  //fillColor: "magenta",
  //weight: 3
//}

// MODULE 13.6.1 ADDING EARTHQUAKE DATA TO THE MAP
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data, {
  //style: myStyle,
  //onEachFeature: function(feature, layer) {
    //layer.bindPopup("<h3> NEIGHBORHOOD: " + feature.properties.AREA_NAME + "</h3>");
    //layer.bindPopup("<h2> Location: " + feature.properties.place + "</h2><hr><h3> Magnitude:  " + feature.properties.mag + "</h3>");
    //}
  //})
  //.addTo(map);


