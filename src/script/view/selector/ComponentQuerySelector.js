/* eslint-disable prefer-destructuring */
class ComponentQuerySelector {
    #provinceQueryItem = {};

    #provinceQuerySelector() {
        this.#provinceQueryItem.provinceList = document.getElementsByTagName('province-list')[0];
        this.#provinceQueryItem.provinceItem = document.querySelectorAll('province-item');
        this.#provinceQueryItem.provinceName = document.querySelector('title-provinsi div h1');
        this.#provinceQueryItem.provinceCaseList = document.querySelector('provinsi-case-list');
        this.#provinceQueryItem.activeeClass = document.querySelector('.activee');
    }

    #indoCovidSelector() {
        return document.getElementsByTagName('case-covid-list')[0];
    }

    getProvinceQuerySelector() {
        this.#provinceQuerySelector();
        return this.#provinceQueryItem;
    }

    getIndoCovidSelector() {
        return this.#indoCovidSelector();
    }
}

export default ComponentQuerySelector;
