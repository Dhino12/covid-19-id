/* eslint-disable class-methods-use-this */
const { default: axios } = require('axios');

class DataProvince {
    #API_PROV = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia';

    async dataAllProvince() {
        const datas = await axios(`${this.#API_PROV}/provinsi/more`);
        const listProvinces = await datas.data;
        return listProvinces;
    }

    async dataGeoJson() {
        const datasProvince = await axios.get('./geojson/provincesName/provinceName.json');
        const nameProvinces = await datasProvince.data;
        return nameProvinces.map(async (nameProvince) => {
            const geoJsonProvince = await axios.get(`./geojson/${nameProvince.name}`);
            const allDataProvince = await geoJsonProvince.data;
            return allDataProvince;
        });
    }
}

export default DataProvince;
