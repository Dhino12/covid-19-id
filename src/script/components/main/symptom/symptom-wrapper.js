import './items/symptom-list';
import html from './templates/symptom-wrapper.html';

class SymptomWrapper extends HTMLElement {
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

customElements.define('symptom-wrapper', SymptomWrapper);
