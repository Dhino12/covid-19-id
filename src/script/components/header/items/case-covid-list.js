import './case-covid-item';

class CaseCoronaList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.listCaseCorona = ['Total Kasus Covid-19', 'Di Rawat Covid-19', 'Meninggal Dunia', 'Pulih dari Covid-19'];
    }

    set dataCovid(covidObj) {
        this._covidIndo = covidObj;
        this._dateUpdate = new Date(covidObj.lastUpdate);
        this._dateUpdate = this._dateUpdate.toDateString();
        this.render();
    }

    render() {
        this.innerHTML = '';

        this.listCaseCorona.forEach((cases, index) => {
            const caseWrapper = document.createElement('case-wrapper');
            caseWrapper.setAttribute('class', 'col-md-3 position-relative br-not-last');

            const caseCovidElement = document.createElement('case-covid-item');
            caseCovidElement.setAttribute('class', 'text-center py-3');
            caseCovidElement.itemCovid = cases;

            if (index === 0) {
                caseCovidElement.dataCovidItem = this._covidIndo.positif;
            } else if (index === 1) {
                caseCovidElement.dataCovidItem = this._covidIndo.dirawat;
            } else if (index === 2) {
                caseCovidElement.dataCovidItem = this._covidIndo.meninggal;
            } else {
                caseCovidElement.dataCovidItem = this._covidIndo.sembuh;
            }

            caseWrapper.appendChild(caseCovidElement);
            this.appendChild(caseWrapper);
        });

        this.innerHTML += `
        <p class="text-center mt-2 mb-0" style="color: #a5a5a5;">
            Berdasarkan data ${this._dateUpdate}
        </p>
        `;
    }
}

customElements.define('case-covid-list', CaseCoronaList);
