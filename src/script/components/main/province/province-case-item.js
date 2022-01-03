class ProvinsiCaseItem extends HTMLElement {
    constructor() {
        super();
    }

    set caseItem(caseCovid) {
        this._caseItem = caseCovid;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="text-center py-3">
                <p>${this._caseItem}</p>
                <h2 class="fw-bold">4000+</h2>
            </div>
        `;
    }
}

customElements.define('provinsi-case-item', ProvinsiCaseItem);
