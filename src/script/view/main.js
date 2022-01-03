// import L from 'leaflet';

const main = () => {
    const idWrapper = document.querySelector('#case-wrapper'); // sudah dibuat di file covid-case-wrapper.js
    const caseCovidList = document.createElement('case-covid-list');
    caseCovidList.setAttribute('class', 'row');
    idWrapper.appendChild(caseCovidList);

    const provinceItem = document.querySelectorAll('province-item');
    const provinces = document.getElementsByTagName('province-list')[0];

    if (document.getElementsByClassName('activee')[0] === undefined) {
        provinceItem[0].classList.add('activee');
    }

    provinces.addEventListener('click', (e) => {
        provinceItem.forEach((element) => {
            element.classList.remove('activee');
        });
        e.target.classList.add('activee');
    });

    // const map = L.map('map').setView([51.505, -0.09], 13);
    // L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=T3IS26DZaHNhSyDa1msC', {
    //     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    // }).addTo(map);
};

export default main;
