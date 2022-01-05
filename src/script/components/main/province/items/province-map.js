class ProvinceMap extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="map" style="height: 100%;"></div>
        `;
    }
}

customElements.define('province-map', ProvinceMap);
