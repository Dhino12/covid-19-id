import './items/NavbarList';
import './items/HeaderContent';
import './items/WaveHeader';
import './items/case-covid-list';

// global template diluar header folder
import html from '../templates/header.html';

class CaseWrapper extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = html;
    }
}

customElements.define('covid-case-wrapper', CaseWrapper);
