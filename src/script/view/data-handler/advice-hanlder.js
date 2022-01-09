class AdviceHandler {
    static set querySelector(advice) {
        this._elementAdvice = document.querySelector(advice);
    }

    static set dataAdvice(advicesCovid) {
        this._elementAdvice.advices = advicesCovid;
    }
}

export default AdviceHandler;
