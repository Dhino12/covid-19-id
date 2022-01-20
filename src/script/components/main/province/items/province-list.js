import './province-item';

class ProvinceList extends HTMLElement {
    constructor() {
        super();
    }

    set setProvinceNames(names) {
        this._provinceNames = names;
        this.render();
    }

    render() {
        this.innerHTML = '';

        this._provinceNames.forEach((province, index) => {
            const createButton = document.createElement('province-item');
            createButton.setAttribute('class', 'list-group-item list-group-item-action');
            createButton.setAttribute('data-id', index);
            createButton.setProvinceName = province.provinsi;
            this.appendChild(createButton);
        });
    }
}

customElements.define('province-list', ProvinceList);
