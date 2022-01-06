import './case-covid-item';

class CaseCoronaList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.listCaseCorona = ['Total Kasus Covid-19', 'Terpapar Covid-19', 'Meninggal Dunia', 'Pulih dari Covid-19'];
        this.render();
    }

    render() {
        this.innerHTML = '';

        this.listCaseCorona.forEach((cases) => {
            const caseWrapper = document.createElement('case-wrapper');
            caseWrapper.setAttribute('class', 'col-md-3 position-relative br-not-last');

            const caseCovidElement = document.createElement('case-covid-item');
            caseCovidElement.setAttribute('class', 'text-center py-3');
            caseCovidElement.itemCovid = cases;

            caseWrapper.appendChild(caseCovidElement);
            this.appendChild(caseWrapper);
        });

        this.innerHTML += `
        <p class="text-center mt-2 mb-0" style="color: #a5a5a5;">
            Berdasarkan data 14 Desember 2021
        </p>
        `;
    }
}

customElements.define('case-covid-list', CaseCoronaList);
