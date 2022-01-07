// import L from 'leaflet';
import AboutCovidHandler from './data-handler/about-covid-handler';
import SymptomHandler from './data-handler/symptom-handler';
import Province from './data-handler/province-handler';
import { aboutCovid, symptom } from '../data/about-covid-data';

const main = () => {
    /* province */
    const ProvinceIndonesia = new Province();
    ProvinceIndonesia.listProvince();
    ProvinceIndonesia.provinceName();
    /* end-province */

    /* about-covid */
    AboutCovidHandler.querySelector = 'about-covid';
    AboutCovidHandler.titleCovid = aboutCovid.title;
    AboutCovidHandler.contentCovid = aboutCovid.content;
    /* end about-covid */

    /* symptom / gejala */
    SymptomHandler.dataSymptom = symptom;
    /* end symptom / gejala */

    // const map = L.map('map').setView([51.505, -0.09], 13);
    // L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=T3IS26DZaHNhSyDa1msC', {
    //     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    // }).addTo(map);
};

export default main;
