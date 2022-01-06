import html from '../templates/province-cb.html';

class ProvinceCb extends HTMLElement {
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

customElements.define('province-cb', ProvinceCb);
