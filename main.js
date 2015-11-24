////////////
// MAIN MAP
////////////
function main() {
    var vizjson_url = 'https://quevs381.cartodb.com/api/v2/viz/91cab74e-8b2b-11e5-99ea-0e5db1731f59/viz.json';

    var sublayers = [];

    // instantiate map object from Leaflet
    var mapObj = new L.Map(map, {
        center: [0, 0], // Null Island
        zoom: 3 // zoom projection to adjust starting point zoom
    });


    // add basemap tiles
    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapObj);

    // add data tile layers here (if you have multiple layers, you can manipulate them in js here)
    cartodb.createLayer(mapObj,vizjson_url)
        .addTo(mapObj)
        .done(function(layer) {
          console.log("Map successfully created.");
            sublayers[0] = layer.getSubLayer(0);
            sublayers[0].set(options); // altering the SQL and CartoCSS; see above
        })
        .error(function(err) {
               console.log("Map not created: " + err);
        });
  }
$(function () {
  main();
});
