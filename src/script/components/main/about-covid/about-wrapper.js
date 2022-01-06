class AboutWrapper extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 'html';
    }
}

customElements.define('about-wrapper', AboutWrapper);
