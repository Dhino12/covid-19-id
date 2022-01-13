import './symptom-item';

class SymptomList extends HTMLElement {
    constructor() {
        super();
    }

    set symptoms(sympotmsCovid) {
        this._symptoms = sympotmsCovid;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this.innerHTML += '<h1 class="fw-bold text-gradient bg-gradient-primary">Gejala</h1>';
        this._symptoms.forEach((symptom) => {
            const symptomElement = document.createElement('symptom-item');
            symptomElement.setAttribute('class', 'col-lg-3 blur shadow-blur');
            symptomElement.symptoms = symptom;
            this.appendChild(symptomElement);
        });
    }
}

customElements.define('symptom-list', SymptomList);
