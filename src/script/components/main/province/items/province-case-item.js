import html from '../templates/province-case-item.html';

class ProvinsiCaseItem extends HTMLElement {
    constructor() {
        super();
    }

    set caseItemTitle(caseCovidTitle) {
        this._caseItem = caseCovidTitle;
    }

    set caseTotal(caseCovidTotal) {
        this._caseCovid = caseCovidTotal;
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.querySelector('p').innerText = this._caseItem;
        this.querySelector('h2').innerText = `${this._caseCovid}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}

customElements.define('provinsi-case-item', ProvinsiCaseItem);
