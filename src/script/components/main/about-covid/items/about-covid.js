import html from '../template/about-covid.html';

class AboutCovid extends HTMLElement {
    constructor() {
        super();
    }

    set titleCovid(title) {
        this._title = title;
    }

    set contentCovid(content) {
        this._content = content;
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.querySelector('#title-covid').innerText = this._title;
        this.querySelector('#content').innerText = this._content;
    }
}

customElements.define('about-covid', AboutCovid);
