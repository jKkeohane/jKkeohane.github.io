  // Create a map instance
  var map = L.map('map').setView([0, 0], 5);

  // Add a tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Define your coordinates, factors, and popup content
  var coordinates = [
    { lat: -18.38555658, lon: 147.73367280, university: 'Bristol', factor: 'Bristol', popupContent: 'Marker A' },
    { lat: 15.30215292, lon: 166.99503092, university: 'Bristol', popupContent: 'Marker B' },
    { lat: -3.39375323, lon: -62.30602304, university: 'Bristol', popupContent: 'Marker C' },
    { lat: 69.29923574, lon: 30.46184414, university: 'Bristol', popupContent: 'Marker D' },
    { lat: 11.63536438, lon: 104.95248174, university: 'Bristol', popupContent: 'Marker E' },
    { lat: 51.42343115, lon: -2.55289833, university: 'Bristol', popupContent: 'Marker F' },
    { lat: 31.08979933, lon: 48.36895530, university: 'Bristol', popupContent: 'Marker G' },
    { lat: 45.98526283, lon: 7.41794795, university: 'Bristol', popupContent: 'Marker H' },
    { lat: 30.56544322, lon: 103.98796096, university: 'Bristol', popupContent: 'Marker I' },
    { lat: 59.92232994, lon: -60.06444423, university: 'Bristol', popupContent: 'Marker J' },
    { lat: 40.65193134, lon: -74.01915299, university: 'Bristol', popupContent: 'Marker K' },
    { lat: 12.97819655, lon: 121.77279120, university: 'Bristol', popupContent: 'Marker L' },
    { lat: 15.86091831, lon: 100.96577614, university: 'Bristol', popupContent: 'Marker M' },
    { lat: 33.95475722, lon: 18.43599984, university: 'Bristol', popupContent: 'Marker N' },
    { lat: -17.83005389, lon: 30.96402258, university: 'Bristol', popupContent: 'Marker O' },
    { lat: -1.40176737, lon: 36.80295220, university: 'Bristol', popupContent: 'Marker P' },
    { lat: 51.56092996, lon: -0.07115377, university: 'Bristol', popupContent: 'Marker Q' },
    { lat: 36.81028918, lon: -119.37752724, university: 'Bristol', popupContent: 'Marker R' },
    { lat: 42.33708013, lon: -83.11102165, university: 'Bristol', popupContent: 'Marker S' },
    { lat: 40.79685139, lon: -74.01706230, university: 'Bristol', popupContent: 'Marker T' },
    { lat: 49.27423599, lon: -123.18972053, university: 'Bristol', popupContent: 'Marker U' },
    { lat: -4.51345832, lon: 54.22393650, university: 'Bristol', popupContent: 'Marker V' },
    { lat: -2.98756887, lon: -2.98756887, university: 'Bristol', popupContent: 'Marker W' },
    { lat: -106.00557074, lon: -106.00557074, university: 'Manchester', popupContent: 'Marker X' },
    { lat: -5.97377754, lon: -5.97377754, university: 'Manchester', popupContent: 'Marker Y' },
    { lat: 32.32858286, lon: 32.32858286, university: 'Manchester', popupContent: 'Marker Z' },
    { lat: 20.37596241, lon: 20.37596241, university: 'Manchester', popupContent: 'Marker AA' },
    { lat: -2.25712673, lon: -2.25712673, university: 'Manchester', popupContent: 'Marker BB' },
    { lat: 54.33134695, lon: 54.33134695, university: 'Manchester', popupContent: 'Marker CC' },
    { lat: -1.87225887, lon: -1.87225887, university: 'Manchester', popupContent: 'Marker DD' },
    { lat: -2.21591139, lon: -2.21591139, university: 'Manchester', popupContent: 'Marker EE' },
    { lat: -2.33573160, lon: -2.33573160, university: 'Manchester', popupContent: 'Marker FF' },
    { lat: 134.46502812, lon: 134.46502812, university: 'Manchester', popupContent: 'Marker GG' },
    { lat: -119.63734757, lon: -119.63734757, university: 'Manchester', popupContent: 'Marker HH' },
    { lat: 78.63629994, lon: 78.63629994, university: 'Manchester', popupContent: 'Marker II' },
    { lat: -122.41427843, lon: -122.41427843, university: 'Manchester', popupContent: 'Marker JJ' },
    { lat: 8.43732469, lon: 8.43732469, university: 'Manchester', popupContent: 'Marker KK' },
    { lat: -6.20881533, lon: -6.20881533, university: 'Manchester', popupContent: 'Marker LL' },
    { lat: 86.70674143, lon: 86.70674143, university: 'Manchester', popupContent: 'Marker MM' },
    { lat: 53.58893014, lon: 53.58893014, university: 'Manchester', popupContent: 'Marker NN' },
    { lat: -3.74948195, lon: -3.74948195, university: 'Manchester', popupContent: 'Marker OO' },
    { lat: -49.94124578, lon: -49.94124578, university: 'Manchester', popupContent: 'Marker PP' },
    { lat: -116.49601998, lon: -116.49601998, university: 'Manchester', popupContent: 'Marker QQ' },
    { lat: -116.54025537, lon: -116.54025537, university: 'Manchester', popupContent: 'Marker RR' },
    { lat: -110.43991375, lon: -110.43991375, university: 'Manchester', popupContent: 'Marker SS' },
    { lat: -2.25557524, lon: -2.25557524, university: 'Manchester', popupContent: 'Marker TT' },
    { lat: -62.19821944, lon: -62.19821944, university: 'Manchester', popupContent: 'Marker UU' },
    { lat: 116.84049728, lon: 116.84049728, university: 'Manchester', popupContent: 'Marker VV' },
    { lat: 14.60793574, lon: 14.60793574, university: 'Manchester', popupContent: 'Marker WW' }
  ];

  // Create a legend
  var legend = L.control({ position: 'topright' });

  legend.onAdd = function (port_map) {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h4>Legend</h4>';
    div.innerHTML += '<i style="background: pink;"></i>University of Bristol<br>';
    div.innerHTML += '<i style="background: green;"></i>University of Manchester<br>';
    return div;
  };

  legend.addTo(port_map);

  // Add circle markers to the map with popups
  for (var i = 0; i < coordinates.length; i++) {
    var coord = coordinates[i];
    var marker = L.circleMarker([coord.lat, coord.lon], { color: getColor(coord.factor) }).addTo(port_map);
    marker.bindPopup(coord.popupContent);
  }

  // Function to determine marker color based on factor
  function getColor(university) {
    switch (university) {
      case 'Bristol':
        return 'pink';
      case 'Manchester':
        return 'green';
      default:
        return 'gray';
    }
  }

