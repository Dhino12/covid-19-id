import html from '../templates/nav-bar.html';

class NavbarList extends HTMLElement {
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

customElements.define('nav-list', NavbarList);
