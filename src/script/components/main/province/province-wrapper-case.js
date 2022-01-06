import './items/province-title';
import './items/province-case-list';
import './items/province-logo';
import './items/province-list';
import './items/province-cb';

import html from './templates/province-wrapper.html';

class ProvinceWrapper extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;
    }
}

customElements.define('province-wrapper', ProvinceWrapper);
