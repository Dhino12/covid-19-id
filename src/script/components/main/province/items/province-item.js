class ProvinceItem extends HTMLElement {
    constructor() {
        super();
    }

    // eslint-disable-next-line class-methods-use-this
    setNameToCapitalLetters(nameProvince) {
        return nameProvince.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    }

    set setProvinceName(province) {
        this._province = this.setNameToCapitalLetters(province.toLowerCase());
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this.type = 'button';
        this.innerText = this._province;
    }
}

customElements.define('province-item', ProvinceItem);
