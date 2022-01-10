import html from '../templates/advice-list.html';
import '../../symptom/items/symptom-item'; // menggunakan card-item di symptom

class AdviceList extends HTMLElement {
    constructor() {
        super();
    }

    set advices(adviceCovid) {
        this._advices = adviceCovid;
        this.render();
    }

    render() {
        this.innerHTML = html;
        this._advices.forEach((advice) => {
            const adviceCovid = document.createElement('symptom-item');
            adviceCovid.setAttribute('class', 'col-lg-3 blur shadow-blur');
            adviceCovid.symptoms = advice;
            this.appendChild(adviceCovid);
        });
    }
}

customElements.define('advice-list', AdviceList);
