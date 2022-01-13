import L from 'leaflet';
import AboutCovidHandler from './data-handler/about-covid-handler';
import AdviceHandler from './data-handler/advice-hanlder';
import InfectionHandler from './data-handler/infection-handler';
import Province from './data-handler/province-handler';
import SymptomHandler from './data-handler/symptom-handler';
import WishHandHandler from './data-handler/wish-hand-handler';

import {
    aboutCovid,
    infection,
    preventionAdvice,
    symptom,
    wishHand,
} from '../data/data-about-covid';
import ProvinceControler from '../controler/province-controler';
import DataProvince from '../data/data-province';

const main = async () => {
    /* province */
    const provinceModel = new DataProvince();
    const provinceView = new Province();
    const provinceController = new ProvinceControler(provinceModel, provinceView);
    await provinceController.setNameProvince();
    await provinceController.setCaseProvince();
    /* end-province */

    /* about-covid */
    AboutCovidHandler.querySelector = 'about-covid';
    AboutCovidHandler.titleCovid = aboutCovid.title;
    AboutCovidHandler.contentCovid = aboutCovid.content;
    /* end about-covid */

    /* symptom / gejala */
    SymptomHandler.dataSymptom = symptom;
    /* end symptom / gejala */

    /* advice */
    AdviceHandler.querySelector = 'advice-list';
    AdviceHandler.dataAdvice = preventionAdvice;
    /* end advice */

    /* infection description */
    InfectionHandler.querySelector = 'infection-wrapper';
    InfectionHandler.infectionSetData = infection.infection;
    /* end infection description */

    /* wish-hand */
    WishHandHandler.querySelector = 'wish-hand-list';
    WishHandHandler.setDataWishHand = wishHand;
    /* end wish-hand */

    const map = L.map('map').setView([-3.824181, 115.8191513], 5);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=T3IS26DZaHNhSyDa1msC', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);
};

export default main;
