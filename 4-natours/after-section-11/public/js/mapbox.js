/* eslint-disable */
const locations = JSON.parse(document.querySelector('#map').dataset.locations);
console.log(map);
mapboxgl.accessToken =
  'pk.eyJ1IjoiamFuZS1kYXQwOSIsImEiOiJjbGU4bXJqMTEwaDRsM3JxeDIyMGhvOWV1In0.8nm1Y7_W8yL0IQxFxXMMqw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
