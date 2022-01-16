import L from 'leaflet';

function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7,
    })

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    const layer = e.target;
    layer.setStyle({
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
    });
}

function onEachFeature(f, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });

    // create PopUp
}

function provinceGeoJson(dataGeo) {
    const map = L.map('map').setView([-3.824181, 115.8191513], 5);

    dataGeo.forEach(async (provinceGeo) => {
        L.geoJSON(await provinceGeo, {
            onEachFeature,
        }).addTo(map);
    });
}

export default provinceGeoJson;
