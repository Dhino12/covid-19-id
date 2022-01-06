import html from '../templates/province-title.html';

class TitleProvinsi extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set titleProvinsi(title) {
        this._titleProvinsi = title;
    }

    render() {
        this.innerHTML = html;
        this.querySelector('h1').innerText = this._titleProvinsi;
    }
}

customElements.define('title-provinsi', TitleProvinsi);
