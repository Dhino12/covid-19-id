/* eslint-disable prefer-destructuring */
class ComponentQuerySelector {
    #provinceQueryItem = {};

    #provinceQuerySelector() {
        this.#provinceQueryItem.province = document.getElementsByTagName('province-list')[0];
        this.#provinceQueryItem.provinceItem = document.querySelectorAll('province-item');
        this.#provinceQueryItem.provinceName = document.querySelector('title-provinsi div h1');
        this.#provinceQueryItem.provinceCaseList = document.querySelector('provinsi-case-list');
        this.#provinceQueryItem.activeeClass = document.querySelector('.activee');
    }

    getProvinceQuerySelector() {
        this.#provinceQuerySelector();
        return this.#provinceQueryItem;
    }
}

export default ComponentQuerySelector;
