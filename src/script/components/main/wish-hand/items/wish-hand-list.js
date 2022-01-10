import './wish-hand-item';

class WishHandList extends HTMLElement {
    constructor() {
        super();
    }

    set wishHandDatas(datas) {
        this._wishHandDatas = datas;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this.setAttribute('class', 'row justify-content-center');
        this.setAttribute('style', 'margin-top: 4rem;');
        this._wishHandDatas.forEach((data) => {
            const wishHandItem = document.createElement('wish-hand-item');
            wishHandItem.setAttribute('class', 'col-lg-2');
            wishHandItem.wishHandData = data;
            this.appendChild(wishHandItem);
        });
    }
}

customElements.define('wish-hand-list', WishHandList);
