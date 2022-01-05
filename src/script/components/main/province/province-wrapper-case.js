class ProvinceWrapper extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <logo-provinsi class="col-lg-3 blur py-3"></logo-provinsi>
            <div class="col-lg-9 me-0 py-3">
                <provinsi-case-list class="row justify-content-end"></provinsi-case-list>
            </div>
        `;
    }
}

customElements.define('province-wrapper', ProvinceWrapper);
