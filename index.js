var map1 = "https://raw.githubusercontent.com/Reachsangmonash/Fit3179_Vis2/main/worldGDP.topojson";
var map2 = "https://raw.githubusercontent.com/Reachsangmonash/Fit3179_Vis2/main/Countries.topojson";
var bubbleGraph = "https://raw.githubusercontent.com/Reachsangmonash/Fit3179_Vis2/main/population_GDP_GDPperCapita_bubble.vg.json"
var eodb = "https://raw.githubusercontent.com/Reachsangmonash/Fit3179_Vis2/main/ease_of_doing_business.vg.json"
var ieportGraph = "https://raw.githubusercontent.com/Reachsangmonash/Fit3179_Vis2/main/import_export.vg.json"
// Access vega view
vegaEmbed('#map01', map1).then(function (result) {

}).catch(console.error);
vegaEmbed('#bbgraph', bubbleGraph).then(function (result) {

}).catch(console.error);
vegaEmbed('#eodb', eodb).then(function (result) {

}).catch(console.error);
vegaEmbed('#ieport', ieportGraph).then(function (result) {

}).catch(console.error);

vegaEmbed('#map02', map2).then(function (result) {

}).catch(console.error);