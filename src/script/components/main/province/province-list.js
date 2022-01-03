import './province-item';

class ProvinceList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.provinces = ['Jakarta', 'Yogyakarta', 'Bandung'];
        this.render();
    }

    render() {
        this.innerHTML = '';

        this.provinces.forEach((province) => {
            const createButton = document.createElement('province-item');
            createButton.setAttribute('class', 'list-group-item list-group-item-action');
            createButton.provinceName = province;
            this.appendChild(createButton);
        });
    }
}

customElements.define('province-list', ProvinceList);
