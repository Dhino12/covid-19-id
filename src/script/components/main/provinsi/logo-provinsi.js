class LogoProvinsi extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="col shadow-blur text-center py-3" style="border-radius: 2vh;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
                    height="50vh" alt="indonesia flag" class="mb-2">
                <h4>Indonesia</h4>
            </div>
        `;
    }
}

customElements.define('logo-provinsi', LogoProvinsi);
