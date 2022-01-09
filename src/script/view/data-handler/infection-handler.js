class InfectionHandler {
    static set querySelector(query) {
        this._infectionQuery = document.querySelector(query);
    }

    static set infectionSetData(infectionDesc) {
        this._infectionQuery.infection = infectionDesc;
    }
}

export default InfectionHandler;
