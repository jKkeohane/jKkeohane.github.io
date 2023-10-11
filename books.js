// Initialize the map
var map = L.map('map').setView([0, 0], 2);

// Add a basemap layer (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Load your GeoJSON data (replace 'your-countries.geojson' with your file path)
fetch('your-countries.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    fillColor: 'transparent',
                    fillOpacity: 0,
                    color: 'black', // Border color
                    weight: 1,
                };
            },
            onEachFeature: function (feature, layer) {
                // Determine the PNG image filename based on the country identifier
                var countryIdentifier = feature.properties.countryCode; // Replace with your identifier
                var backgroundImageURL = 'images/' + countryIdentifier + '.png'; // Update the path

                // Add PNG image as a background
                layer.setStyle({
                    backgroundImage: 'url(' + backgroundImageURL + ')',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                });

                // Add popup
                layer.bindPopup(feature.properties.name);
            },
        }).addTo(map);
    });
