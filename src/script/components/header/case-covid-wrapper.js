class CaseWrapper extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = '';
        const containerCase = document.createElement('div');
        containerCase.setAttribute('class', 'container pb-0');

        const rowsCase = document.createElement('div');
        rowsCase.setAttribute('class', 'row');

        const colCase = document.createElement('div');
        colCase.setAttribute('class', 'col-lg-9 blur shadow-blur mx-auto py-3');
        colCase.setAttribute('style', 'margin-top: -8rem; border-radius: 1rem;');
        colCase.setAttribute('id', 'case-wrapper');

        rowsCase.appendChild(colCase);
        containerCase.appendChild(rowsCase);
        this.appendChild(containerCase);
    }
}

customElements.define('covid-case-wrapper', CaseWrapper);
