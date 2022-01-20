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
import IndoCovidHandler from './data-handler/indo-covid-handler';
import IndoCaseController from '../controler/indo-case-controller';

const main = async () => {
    const models = new DataProvince();

    /* Case Covid Indonesia */
    const indoCovid = new IndoCovidHandler();
    const indoCaseController = new IndoCaseController(models, indoCovid);
    indoCaseController.getDataCovidIndo();

    /* province */
    const provinceView = new Province();
    const provinceController = new ProvinceControler(models, provinceView);
    await provinceController.getProvinceGeoJson();
    await provinceController.getNameProvince();
    // await provinceController.setCaseProvince();
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

};

export default main;
