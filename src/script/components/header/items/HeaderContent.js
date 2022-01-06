import html from '../templates/header-content.html';

class HeaderContent extends HTMLElement {
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

customElements.define('header-content', HeaderContent);
