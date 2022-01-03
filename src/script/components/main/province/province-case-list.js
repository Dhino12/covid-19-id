import './province-case-item';

class ProvinsiCaseList extends HTMLElement {
    constructor() {
        super();
        this._caseCovid = ['Terpapar Covid-19', 'Meninggal Dunia', 'Pulih dari Covid-19'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._caseCovid.forEach((caseCovid) => {
            const caseItemElement = document.createElement('provinsi-case-item');
            caseItemElement.setAttribute('class', 'col-md-3 ms-3 shadow-blur');
            caseItemElement.setAttribute('style', 'border-radius: 2vh;');
            caseItemElement.caseItem = caseCovid;
            this.appendChild(caseItemElement);
        });
    }
}

customElements.define('provinsi-case-list', ProvinsiCaseList);
