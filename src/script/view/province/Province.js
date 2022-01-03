/* eslint-disable prefer-destructuring */
class Province {
    constructor() {
        this._provinceItem = document.querySelectorAll('province-item');
        this._province = document.getElementsByTagName('province-list')[0];
        this._provinceName = document.querySelector('title-provinsi div h1');
        this.provinceNameTitle = '';
    }

    listProvince() {
        if (document.querySelector('.activee') === null) {
            this._provinceItem[0].classList.add('activee');
            this.provinceNameTitle = this._provinceItem[0]._province;
            
            return this.provinceNameTitle;
        }
        
        this._province.addEventListener('click', (e) => {
            this._provinceItem.forEach((element) => {
                element.classList.remove('activee');
            });
            this.provinceNameTitle = e.target.innerText;
            e.target.classList.add('activee');
            this.provinceName();
        });

        return this.provinceNameTitle;
    }

    provinceName() {
        this._provinceName.innerText = this.listProvince();
    }
}

export default Province;
