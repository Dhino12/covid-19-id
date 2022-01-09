import svg from '../templates/advice-background.html';

class AdviceBackground extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = svg;
    }
}

customElements.define('advice-background', AdviceBackground);
