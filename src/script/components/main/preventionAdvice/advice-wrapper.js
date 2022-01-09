import './items/advice-background';
import './items/advice-list';
import html from './templates/advice-wrapper.html';

class AdviceWrapper extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.setAttribute('style', 'overflow: hidden;');
    }
}

customElements.define('advice-wrapper', AdviceWrapper);
