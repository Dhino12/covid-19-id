import './province-case-item';

class ProvinsiCaseList extends HTMLElement {
    #casesCovid = {};

    constructor() {
        super();
        this._caseCovid = ['Terpapar Covid-19', 'Pulih dari Covid-19', 'Meninggal Dunia'];
    }

    connectedCallback() {
        this.render();
    }

    set provinceCases(cases) {
        this.#casesCovid = cases;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._caseCovid.forEach((caseCovid, index) => {
            const caseItemElement = document.createElement('provinsi-case-item');
            caseItemElement.setAttribute('class', 'col-md-3 ms-3 shadow-blur');
            caseItemElement.setAttribute('style', 'border-radius: 2vh;');
            caseItemElement.caseItemTitle = caseCovid;
            if (index === 0) {
                caseItemElement.caseTotal = this.#casesCovid.kasus;
            } else if (index === 1) {
                caseItemElement.caseTotal = this.#casesCovid.sembuh;
            } else {
                caseItemElement.caseTotal = this.#casesCovid.meninggal;
            }
            this.appendChild(caseItemElement);
        });
    }
}

customElements.define('provinsi-case-list', ProvinsiCaseList);
