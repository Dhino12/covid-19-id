class ProvinceItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set provinceName(province) {
        this._province = province;
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
