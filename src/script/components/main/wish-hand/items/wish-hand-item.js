import html from '../templates/wish-hand-item.html';

class WishHandItem extends HTMLElement {
    constructor() {
        super();
    }

    set wishHandData(data) {
        this._wishHandData = data;
        this.render();
    }

    render() {
        this.innerHTML = html;
        this.querySelector('img').src = this._wishHandData.img;
        this.querySelector('h4').innerText = this._wishHandData.title;
    }
}

customElements.define('wish-hand-item', WishHandItem);
