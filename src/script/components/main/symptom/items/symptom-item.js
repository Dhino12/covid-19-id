import html from '../templates/symptom-item.html';

class SymptomItem extends HTMLElement {
    constructor() {
        super();
    }

    set symptoms(sympotmsCovid) {
        this._symptoms = sympotmsCovid;
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.querySelector('img').src = this._symptoms.img;
        this.querySelector('h4').innerText = this._symptoms.title;
        this.querySelector('p').innerText = this._symptoms.content;
    }
}

customElements.define('symptom-item', SymptomItem);
