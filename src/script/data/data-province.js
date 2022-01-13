const { default: axios } = require('axios');

class DataProvince {
    #API_PROV = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia';

    async dataAllProvince() {
        const datas = await axios(`${this.#API_PROV}/provinsi`);
        const listProvinces = await datas.data;
        return listProvinces;
    }
}

export default DataProvince;
