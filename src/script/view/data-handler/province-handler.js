/* eslint-disable class-methods-use-this */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable prefer-destructuring */
import L from 'leaflet';
import ComponentQuerySelector from '../selector/ComponentQuerySelector'; 

class Province extends ComponentQuerySelector {
    #dataProvinceList = [];

    #geoJson = [];

    constructor() {
        super();
        this._province = document.getElementsByTagName('province-list')[0];
        this.provinceNameTitle = '';
    }

    dataReceiver(datas) {
        this.#dataProvinceList = datas;
    }

    dataReceiverGeoJson(datas) {
        this.#geoJson = datas;
    }

    #provinceListClicked = (e) => {
        const { provinceItem } = this.getProvinceQuerySelector();
        provinceItem.forEach((element) => {
            element.classList.remove('activee');
        });
        this.provinceNameTitle = e.target.innerText;
        e.target.classList.add('activee');
        this.provinceTitleName();

        const searchProvinceCase = this.#dataProvinceList.filter(
            (prov) => prov.provinsi.toLowerCase() === e.target.innerText.toLowerCase(),
        )[0];
        this.provinceCase(searchProvinceCase);
    }

    listProvinceName() {
        this._province.setProvinceNames = this.#dataProvinceList;
        const { province, provinceItem, activeeClass } = this.getProvinceQuerySelector();

        if (activeeClass === null) {
            provinceItem[0].classList.add('activee');
            this.provinceNameTitle = provinceItem[0].innerText;
            this.provinceCase(this.#dataProvinceList[0]);
        }

        province.addEventListener('click', this.#provinceListClicked);

        this.provinceGeoJson(this.#geoJson)
    }

    provinceTitleName() {
        const { provinceName } = this.getProvinceQuerySelector();
        provinceName.innerText = this.provinceNameTitle;
    }

    provinceCase(caseCovid) {
        const { provinceCaseList } = this.getProvinceQuerySelector();
        provinceCaseList.provinceCases = caseCovid;
    }

    #highlightFeature = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7,
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }

    #resetHighlight = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
        });
    }

    #onEachFeature = (f, layer) => {
        layer.on({
            mouseover: this.#highlightFeature,
            mouseout: this.#resetHighlight,
        });
        const province = f.properties.provinsi
        const {
            provinsi,
            kasus,
            sembuh,
            meninggal,
        } = this.#dataProvinceList.filter((provData) => province === provData.provinsi)[0];
        const table = `
            <table>
                <tr>
                    <td><h6>${provinsi}</h6></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Positif</td>
                    <td>${kasus}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sembuh</td>
                    <td>${sembuh}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Meninggal</td>
                    <td>${meninggal}</td>
                </tr>
            </table>
        `;
        layer.bindPopup(table);
        // layer.bindPopup(popup)
    }

    provinceGeoJson(dataGeo) {
        const map = L.map('map').setView([-3.824181, 115.8191513], 5);

        dataGeo.forEach(async (provinceGeo) => {
            L.geoJSON(await provinceGeo, {
                onEachFeature: this.#onEachFeature,
            }).addTo(map);
        });
    }
}

export default Province;
