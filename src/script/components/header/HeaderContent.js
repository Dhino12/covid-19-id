class HeaderContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header-content">
                <div class="page-header">
                    <span class="mask bg-gradient-primary"></span>
                    <div class="container" style="z-index: 1;">
                        <div class="row">
                            <div class="col-lg-9 text-center mx-auto text-white">
                                <h1 class="fw-bold">Kasus COVID-19 Indonesia</h1>
                                <p class="lead">Dapatkan informasi terkait penyebaran virus COVID-19 di Indonesia dengan
                                    mudah. <br>Pantau covid-19 di seluruh indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('header-content', HeaderContent);
