//
// const user_name = window.prompt(
//   "Please enter your name",
//   "Type your name here"
// );
//
// const visitorName = user_name || "Visitor";
//
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("header").querySelector("h1").textContent =
//     "Hello, welcome " + visitorName + "!";
// });


var webmaps = [
  [
    "USGS Latest Earthquakes",
    "https://earthquake.usgs.gov/earthquakes/map/?extent=-22.43134,-129.19922&extent=72.1818,-60.82031",
    "The purpose of this application is to display recent earthquakes based on location, magnitude, depth, and time. Its strengths include frequent updates, understandable visuals, and accessible GIS layers. However, some terminology may be unfamiliar to general users, and its spatial analysis capabilities are limited. It offers GIS functions such as changing basemaps and displaying additional geographic layers. I found the application straightforward and accessible, but I would add more specific date filtering options."
  ],
  [
    "EPA WATERS GeoViewer",
    "https://experience.arcgis.com/experience/3ca15d32b00947c281e35b08082474b6/page/Page",
    "The purpose of this application is to explore surface water and watersheds in the United States. Its strengths include extensive water-related data, spatial analysis tools, and detailed attribute information. However, the application can be overwhelming, lacks a legend, and requires prior knowledge of water resources. It offers GIS functions such as feature selection, attribute queries, data overlay, and network analysis. I would make the application more beginner-friendly by providing clearer instructions."
  ]
];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";
  return message;
}

f
function webmap_table()
{
  document.write("<table width=100%>");

  for (var row = 0; row < webmaps.length; row++) {
    document.write("<tr>");

    for (var column = 0; column < webmaps[0].length; column++) {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }

    document.write("</tr>");
  }

  document.write("</table>");
  return "";
}
