class TitleProvinsi extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set titleProvinsi(title) {
        this._titleProvinsi = title;
    }

    render() {
        this.innerHTML = `
        <div class="col-md-12 text-center">
            <p class="mb-0">Provinsi</p>
            <h1 class="fw-bold text-gradient bg-gradient-primary">(Test Dulu) ${this._titleProvinsi}</h1>
        </div>
        `;
    }
}

customElements.define('title-provinsi', TitleProvinsi);
