import html from '../templates/province-case-item.html';

class ProvinsiCaseItem extends HTMLElement {
    constructor() {
        super();
    }

    set caseItem(caseCovid) {
        this._caseItem = caseCovid;
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.querySelector('p').innerText = this._caseItem;
    }
}

customElements.define('provinsi-case-item', ProvinsiCaseItem);
