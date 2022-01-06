class AboutCovidHandler {
    static set querySelector(selector) {
        this._aboutCovidSelector = document.querySelector(selector);
    }

    static set titleCovid(title) {
        this._aboutCovidSelector.titleCovid = title;
    }

    static set contentCovid(content) {
        this._aboutCovidSelector.contentCovid = content;
    }
}

export default AboutCovidHandler;
