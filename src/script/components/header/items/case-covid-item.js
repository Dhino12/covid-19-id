class CaseCovidItem extends HTMLElement {
    constructor() {
        super();
    }

    set itemCovid(item) {
        this._itemCovid = item;
    }

    set dataCovidItem(item) {
        this._covidIndo = `${item}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        this.render();
    }

    connectedCallback() {
        this._classList = this.getAttribute('class');
    }

    render() {
        this.innerHTML = `
            <h1 class="fw-bold text-gradient bg-gradient-primary">${this._covidIndo}</h1>
            <p>${this._itemCovid}</p>
        `;
    }
}

customElements.define('case-covid-item', CaseCovidItem);
