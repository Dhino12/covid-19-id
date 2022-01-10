import titleInfection from './templates/title-infection.html';
import html from './templates/infection-wrapper.html';

class InfectionWrapper extends HTMLElement {
    constructor() {
        super();
    }

    set infection(dataInfection) {
        this._infection = dataInfection;
        this.render();
    }

    render() {
        this.innerHTML = html;
        const getIdDesc = this.querySelector('#desc');
        getIdDesc.innerHTML += titleInfection;
        getIdDesc.innerHTML += this._infection;
    }
}

customElements.define('infection-wrapper', InfectionWrapper);
