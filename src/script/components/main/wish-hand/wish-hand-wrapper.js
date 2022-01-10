import './items/wish-hand-list';
import html from './templates/wish-hand-wrapper.html';

class WishHandWrapper extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.setAttribute('class', 'mt-5');
    }
}

customElements.define('wish-hand-wrapper', WishHandWrapper);
