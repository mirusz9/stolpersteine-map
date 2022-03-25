const map = L.map('map').setView([52.074854, 4.303209], 12);
const accessToken =
	'pk.eyJ1IjoibWlydXN6OSIsImEiOiJjbDE2dzR1OHIweWJuM3FrYXpodjV2Y2Q4In0.bQJyzmUya7_HxwIjTT5ikg';

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
	attribution:
		'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	minZoom: 3,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken,
}).addTo(map);

function onMapClick(e) {
	console.log('You clicked the map at ' + e.latlng);
}

map.on('click', onMapClick);

const coords = [52.080973, 4.280876];
const redIcon = new L.Icon({
	iconUrl:
		'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const marker = L.marker(coords, { icon: redIcon }).addTo(map);

marker.bindPopup('i died');

const randomCoords = [52.146572, 4.404675];

const randomMarker = L.marker(randomCoords, { icon: redIcon }).addTo(map);

randomMarker.bindPopup('55 new stones..');

const randomCoords2 = [52.09187, 4.382101];

const randomMarker2 = L.marker(randomCoords2, { icon: redIcon }).addTo(map);

randomMarker2.bindPopup('Just gimme a second..');
