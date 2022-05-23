var latitude = 13.052547061481416;
var longitude = 77.50458772698047;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hpdmFtNTY2NzgiLCJhIjoiY2wzaWx2ZXFjMGJ1ZzNqcGN1YzBzeG4zZiJ9.1FzK8R47RwQutJC8fSsF-A";

// creating map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitude, latitude],
  zoom: 16,
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: false },
    trackUserLocation: true
  })
);

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken,
    }),
    "top-right"
)