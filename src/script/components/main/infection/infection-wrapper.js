import titleInfection from './templates/title-infection.html';
import html from './templates/infection-wrapper.html';

class InfectionWrapper extends HTMLElement {
    constructor() {
        super();
    }

    set infection(dataInfection) {
        this._infection = dataInfection;
    }

    render() {
        this.innerHTML = html;
        const getIdDesc = this.querySelector('#desc');
        getIdDesc.innerText += titleInfection;
        getIdDesc.innerText += this._infection;
    }
}

customElements.define('infection-wrapper', InfectionWrapper);
