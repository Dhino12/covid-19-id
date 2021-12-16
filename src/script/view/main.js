import L from 'leaflet';

const main = () => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=T3IS26DZaHNhSyDa1msC', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);
};

export default main;
