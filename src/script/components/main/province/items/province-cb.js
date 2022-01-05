class ProvinceCb extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <select class="form-select form-select-lg mb-3 text-center" aria-label=".form-select-lg example">
                <option selected value="1">Peta Covid-19</option>
                <option value="2">Statistik</option>
                <option value="3">Diagram</option>
            </select>
        `;
    }
}

customElements.define('province-cb', ProvinceCb);
