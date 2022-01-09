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
    }
}

customElements.define('wish-hand-item', WishHandItem);
