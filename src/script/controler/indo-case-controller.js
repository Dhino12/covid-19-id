class IndoCaseController {
    constructor(provinceDatas, provinceView) {
        this.provinceDatas = provinceDatas;
        this.provinceView = provinceView;
    }

    async getDataCovidIndo() {
        this.provinceView.setCovidData(await this.provinceDatas.dataCaseIndonesia());
    }
}

export default IndoCaseController;
