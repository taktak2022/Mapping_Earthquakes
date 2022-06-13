// Add console.log to check to see if our code is working.
//console.log("working");

// MODULE 13.2.4 ADD A MAP OBJECT: 
// SEE CODE OPTION TO *NOT* USE setView function
// USED TO ADD MULTIPLE TILE LAYERS OR BACKGROUND IMAGES
// Create the map object with a center and zoom level.
// MODULE 13.4.3 CHANGED MAP CENTER TO SFO AIRPORT
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// MODULE 13.5.2 MAP GEOJSON POINT TYPE
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// MODULE 13.5.3 CHANGE TO GEOGRAPHICAL CENTER OF THE EARTH
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
    //"type":"Feature",
    //"properties":{
        //"id":"3469",
        //"name":"San Francisco International Airport",
        //"city":"San Francisco",
        //"country":"United States",
        //"faa":"SFO",
        //"icao":"KSFO",
        //"alt":"13",
        //"tz-offset":"-8",
        //"dst":"A",
        //"tz":"America/Los_Angeles"},
        //"geometry":{
            //"type":"Point",
            //"coordinates":[-122.375,37.61899948120117]}}
//]};

// MODULE 13.5.2 THE pointToLayer FUNCTION
// THEN CHANGED TO onEachFeature CALLBACK FUNCTION
// Grabbing our GeoJSON data; ADDING pointToLayer CALLBACK FUNCTION
//L.geoJSON(sanFranAirport, { 
  // We turn each feature into a marker on the map.
  //pointToLayer: function(feature, latlng) {
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //return L.marker(latlng)
    //layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h1>" + feature.properties.faa + "</h1>");
   //}
//}).addTo(map);

// MODULE 13.4.3 * ADD MAP LINES - LAX to SFO *
// Coordinates for each point to be used in the line.
//let line = [
    //[33.9416, -118.4085],
    //[37.6213, -122.3790],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088]
  ////];

// Create a polyline using the line coordinates and make the line red.
// MODULE 13.4.3 CHANGED LINE TO COLOR YELLOW (& MADE IT BOLD)
//L.polyline(line, {
    //color: "orange",
    //weight: 8
  //}).addTo(map);

// MODULE 13.4.1 * ADD A MARKER TO THE MAP *
// Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//MODULE 13.4.1 * ADD A CIRCLE RADIUS TO THE MAP *; * YELLOW CIRCLE ON DARK MAP *
//L.circleMarker([34.0522, -118.2437], {
    //radius: 20,
    //color: "black",
    //fillColor: "magenta"
 //}).addTo(map);

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/dark-v10',
    //id: 'mapbox/satellite-streets-v11',
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

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
  center: [43.7, -79.3],
  zoom: 10,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// MODULE 13.5.3 MAP MULTIPLE GeoJSON POINTS
// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/taktak2022/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
    //console.log(data);
  //L.geoJson(data).addTo(map);

  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJSON(data, {
  //onEachFeature: function(feature, data) {
    //data.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h2> Airport Code:  " + feature.properties.faa + "</h2>")
    //}
  //}).addTo(map);

// MODULE 13.5.5 MAPPING GeoJSON LINESTRINGS
// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/taktak2022/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "magenta",
  weight: 3
}

// MODULE 13.5.6 MAPPING GeoJSON POLYGONS
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/taktak2022/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json"

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJSON(data).addTo(map);
//});

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> NEIGHBORHOOD: " + feature.properties.AREA_NAME + "</h3>");
    //layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2><hr><h3> Toronto ---> Destination:  " + feature.properties.dst + "</h3>");
    }
  })
  .addTo(map);
});

