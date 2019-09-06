mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2s1NDAiLCJhIjoiY2swNnl2ZWxvMDFzejNocHFsbjAyZWtjbCJ9.fUXg978Ltdq6SpK4QQSvrg';
var geojson = {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "message": "Foo",
                            "iconSize": [40, 40]
                    },
                "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -90.5541581999999,
                                14.5773818
                            ]
                        }
                    },
                    {
                "type": "Feature",
                        "properties": {
                            "message": "Foo",
                            "iconSize": [40, 40]
                    },
                "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -90.5537405,
                                14.6212574
                            ]
                        }
                    }
                ]
};
 
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-90.5541581999999, 14.5773818],
zoom: 10
});
 
// add markers to map
geojson.features.forEach(function(marker) {
// create a DOM element for the marker
var el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage = 'url(yo.jpg)';
el.style.width = marker.properties.iconSize[0] + 'px';
el.style.height = marker.properties.iconSize[1] + 'px';
 
el.addEventListener('click', function() {
window.alert(marker.properties.message);
});
 
// add marker to map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});