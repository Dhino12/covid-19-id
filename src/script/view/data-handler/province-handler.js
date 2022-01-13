import DataProvince from '../../data/data-province';

/* eslint-disable prefer-destructuring */
class Province {
    constructor() {
        this._provinceItem = document.querySelectorAll('province-item');
        this._province = document.getElementsByTagName('province-list')[0];
        this._provinceName = document.querySelector('title-provinsi div h1');
        this.provinceNameTitle = '';
    }

    listProvince(dataProvinceList) {
        this._province.setProvinceNames = dataProvinceList;
        console.log(this._provinceItem);
        if (document.querySelector('.activee') === null) {
            console.log('masuk');
            this._provinceItem[0].classList.add('activee');
            this.provinceNameTitle = this._provinceItem[0].innerText;
        }

        this._province.addEventListener('click', (e) => {
            this._provinceItem.forEach((element) => {
                element.classList.remove('activee');
            });
            this.provinceNameTitle = e.target.innerText;
            e.target.classList.add('activee');
            this.provinceName();
        });
    }

    provinceName() {
        this._provinceName.innerText = this.provinceNameTitle;
    }
}

export default Province;
