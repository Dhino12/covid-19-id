import html from '../templates/waveHeader.html';

class WaveHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.shadowDom = this.attachShadow({ mode: 'closed' });
        this.render();
    }

    render() {
        this.shadowDom.innerHTML = html;
    }
}

customElements.define('wave-header', WaveHeader);
