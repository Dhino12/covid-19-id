/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
import L from 'leaflet';
import ComponentQuerySelector from '../selector/ComponentQuerySelector';

class Province extends ComponentQuerySelector {
    #dataProvinceList = []; // list data from API

    #dataGeoObj = {}; // dataGeoObj from leaflet based on provinceName

    #dataGeoJson = []; // map GeoJson

    #indicatorMobileView = true;

    constructor() {
        super();
        this._province = document.getElementsByTagName('province-list')[0];
        this.provinceNameTitle = '';
    }

    dataReceiver(datas) {
        this.#dataProvinceList = datas;
    }

    dataReceiverGeoJson(datas) {
        this.#dataGeoJson = datas;
    }

    #setNameToCapitalLetters(nameProvince) {
        return nameProvince.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    }

    #provinceListClicked = (e) => {
        const { provinceItem } = this.getProvinceQuerySelector();
        provinceItem.forEach((element) => {
            element.classList.remove('activee');
        });
        e.target.classList.add('activee');
        this.provinceTitleName(e.target.innerText);

        const searchProvinceCase = this.#dataProvinceList.filter(
            (prov) => prov.provinsi.toLowerCase() === e.target.innerText.toLowerCase(),
        )[0];

        const thiIdItem = e.target.getAttribute('data-id');

        if (this.#indicatorMobileView) {
          const set = this.#dataGeoObj[thiIdItem];
          set.eachLayer((f) => {
              f.openPopup();
          });
        }
        this.provinceCase(searchProvinceCase);
    };

    listProvinceName() {
        this._province.setProvinceNames = this.#dataProvinceList;
        const { provinceList, provinceItem, activeeClass } = this.getProvinceQuerySelector();
        const cbChooseDataShow = this.getComboBoxDataCovid(); // combo box

        if (activeeClass === null) {
            provinceItem[0].classList.add('activee');
            this.provinceTitleName(provinceItem[0].innerText);
            this.provinceCase(this.#dataProvinceList[0]);
        }

        provinceList.addEventListener('click', this.#provinceListClicked);

        const mobileRes = window.matchMedia('(max-width: 992px)');
        mobileRes.addListener((x) => {
            if (x.matches) {
              cbChooseDataShow.classList.add('d-none');
              this.#indicatorMobileView = false;
            } else {
                cbChooseDataShow.classList.remove('d-none');
                this.#indicatorMobileView = true;
            }
        });

        if (this.#indicatorMobileView) {
            this.provinceGeoJson(this.#dataGeoJson);
        }
    }

    provinceTitleName(name) {
        const { provinceName } = this.getProvinceQuerySelector();
        provinceName.innerText = name;
    }

    provinceCase(caseCovid) {
        const { provinceCaseList } = this.getProvinceQuerySelector();
        provinceCaseList.provinceCases = caseCovid;
    }

    #searchCaseCovid = (dataProv, dataMapProv) => {
        const {
          provinsi,
          kasus,
          sembuh,
          meninggal,
          penambahan,
        } = dataProv.filter((provData) => provData.provinsi === dataMapProv)[0];
        return {
            provinsi,
            kasus,
            sembuh,
            meninggal,
            penambahan,
        };
    };

    #getColor = (positive) => {
        let color = '#0d0';
        if (positive > 1000) {
            color = '#222';
        } else if (positive > 500) {
            color = '#555';
        } else if (positive > 200) {
            color = '#f00';
        } else if (positive > 100) {
            color = '#f90';
        } else if (positive > 50) {
            color = '#09d';
        } else if (positive > 20) {
            color = '#09d';
        }
        return color;
    };

    #styleMap = (f) => {
        const { penambahan } = this.#searchCaseCovid(
            this.#dataProvinceList,
            f.properties.provinsi,
        );
        return {
            weight: 2,
            opacity: 0.6,
            color: 'white',
            fillOpacity: 0.7,
            fillColor: this.#getColor(penambahan.positif),
        };
    };

    #highlightFeature = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 2,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7,
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    };

    #provinceMapClicked = (e) => {
        const { provinceItem } = this.getProvinceQuerySelector();
        const provinceMap = e.target.feature.properties.provinsi;
        const provItem = {};
        provinceItem.forEach((data, index) => {
            if (data.innerText.toUpperCase() === provinceMap) {
                provItem.component = data;
                provItem.data = this.#dataProvinceList[index];
            }
            data.classList.remove('activee');
        });
        this.provinceCase(provItem.data);
        this.provinceTitleName(this.#setNameToCapitalLetters(provItem.data.provinsi.toLowerCase()));
        provItem.component.classList.add('activee');
    };

    #resetHighlight = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
        });
    };

    #onEachFeature = (f, layer) => {
        layer.on({
            mouseover: this.#highlightFeature,
            mouseout: this.#resetHighlight,
            click: this.#provinceMapClicked,
        });
        const { provinsi, penambahan } = this.#searchCaseCovid(
            this.#dataProvinceList,
            f.properties.provinsi,
        );

        const table = `
            <table>
                <tr>
                    <td colspan="2"><h6>${provinsi}</h6></td>
                </tr>
                <tr>
                    <td colspan="2"><p style="font-size:11px; margin:0;">Kasus Covid-19 Hari ini </p></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Positif</td>
                    <td>${penambahan.positif}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sembuh</td>
                    <td>${penambahan.sembuh}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Meninggal</td>
                    <td>${penambahan.meninggal}</td>
                </tr>
            </table>
        `;
        layer.bindPopup(table);
        // layer.bindPopup(popup)
    };

    provinceGeoJson(dataGeo) {
        const map = L.map('map').setView([-3.824181, 115.8191513], 5);

        const legend = L.control({ position: 'bottomright' });
        legend.onAdd = (mapProv) => {
            const div = L.DomUtil.create('div', 'info-legend');
            const grades = [0, 20, 50, 100, 200, 500];
            const labels = [];
            let form = 0;
            let to = 0;

            grades.forEach((value, index) => {
                form = grades[index];
                to = grades[index + 1];
                labels.push(
                    `<i style="background: ${this.#getColor(form + 1)}; padding: 2px; color:white; font-weight:bold; font-size:14px;"> ${form} ${to ? `&ndash; ${to}` : '+'
                    }`,
                );
            });
            div.innerHTML = labels.join('<br>');
            console.log(mapProv);
            return div;
        };
        legend.addTo(map);

        dataGeo.forEach(async (provinceGeo) => {
            const dataProvObj = await provinceGeo;
            this.#dataGeoObj[dataProvObj.properties.provinsi] = L.geoJSON(
                await provinceGeo,
                {
                    onEachFeature: this.#onEachFeature,
                    style: this.#styleMap,
                },
            ).addTo(map);
        });
    }
}

export default Province;
