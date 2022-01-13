/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable prefer-destructuring */
import ComponentQuerySelector from '../selector/ComponentQuerySelector';

class Province extends ComponentQuerySelector {
    #dataProvinceList = [];

    constructor() {
        super();
        this._province = document.getElementsByTagName('province-list')[0];
        this.provinceNameTitle = '';
    }

    dataReceiver(datas) {
        this.#dataProvinceList = datas;
    }

    listProvinceName() {
        this._province.setProvinceNames = this.#dataProvinceList;
        const { province, provinceItem, activeeClass } = this.getProvinceQuerySelector();

        if (activeeClass === null) {
            provinceItem[0].classList.add('activee');
            this.provinceNameTitle = provinceItem[0].innerText;
            this.provinceCase(this.#dataProvinceList[0]);
        }

        province.addEventListener('click', (e) => {
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
        });
    }

    provinceTitleName() {
        const { provinceName } = this.getProvinceQuerySelector();
        provinceName.innerText = this.provinceNameTitle;
    }

    provinceCase(caseCovid) {
        const { provinceCaseList } = this.getProvinceQuerySelector();
        provinceCaseList.provinceCases = caseCovid;
    }
}

export default Province;
