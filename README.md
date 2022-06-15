# Mapping_Earthquakes
## Module 13 JavaScript & APIs
![MOD 13 logicStep3](https://user-images.githubusercontent.com/99851509/173930374-9d09befb-4ccf-4b8a-903d-11d97526ab72.png)


## Overview
The DISASTER REPORTING NETWORK is a non-profit company that uses data-driven disaster accounts and narratives from the world.  As a Data Visualization Specialist there, you create insightful visualizations with interactive features on earthquakes from around the world.  You do this by supporting and developing website and mobile applications that use the latest GeoJSON earthquake data from the U.S. Geological Survey.  Using this information, the creation of an interactive world map with markers that reflect the size and magnitude of earthquakes by equating that with the diameter size and color gradient of the markers is your current project.  They will also have pop-ups with earthquake location and magnitude being displayed.

## Tools
* JavaScript
* HTML
* CSS
* D3: a JavaScript library for creating custom interactive data visualizations
* Leaflet: a JavaScript library for interactive maps
* Mapbox API

## Project & Results of Analysis
This project had us creating various maps showing locations of earthquakes around the world.  The markers could be modified from the basic map teardrop-shaped marker to a circle marker that could be further adjusted by size and color variations that would reflect the magnitude and intensity of the earthquake.  The location and the magnitude would be provided by pop-ups that would show up when you select a specific location's marker.

This project also had us going in-depth with GitHub and creating branches to work on different pieces of information without affecting the main branch by "pushing" and "pulling" folders and files between what we worked on and saved on our "local" computer and GitHub.  The concept was a bit abstract and a bit intimidating at first but got easier the more I did it.  Two things that the module is missing is what happens to the folder & file structures appear in the Explorer and in VS Code as we worked through the module.  Folders and files would appear to go "missing" when they were pughed and pulled.  It was not until the final "pull" from the main branch did the "missing" folders and files show back up.  It took a while until I realized this is what was supposed to happen.

As for the map creation, it was interesting looking at the big picture of how they are created with Leaflet.  It was not until the Challenge portion when the task had us adding the Major Earthquake data did I see a pattern in the code blocks.  After the d3.json URL links, the functions followed this structure:
* STYLE INFO
* GET COLOR
* GET RADIUS
* Create the layer
* Add the Pop-Up information
* Add it to the map

Adding the Major Earthquake data involved some new variables but the structure was almost the same.  This was followed by adding the legend colors via magnitudes and the tectonic plate fault lines being inserted.

The challenges encountered when I did not get the desired outputs at various steps was mostly due to words being misspelled on my part.  I misspelled "techtonic" as opposed to the correct "tectonic" and where a ".mag" was supposed to be inserted, I placed a ".map" in error.  Nothing major but made a big difference in the end.  When all the puzzle pieces came together, the result was a very detailed map.

![MOD 13 CHALLENGE DEL I, II   III](https://user-images.githubusercontent.com/99851509/173939698-2e50067d-cc20-4710-a08c-7a4288d7f45b.png)

## Summary
The actual earthquake map showed most earthquakes around the world occured on existing fault lines.  Fortunately there were no earthquakes for the periods being shown that were larger than a magnitude of 7.0.
