import html from '../templates/province-logo.html';

class LogoProvinsi extends HTMLElement {
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

customElements.define('logo-provinsi', LogoProvinsi);
