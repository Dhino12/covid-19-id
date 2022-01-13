class ProvinceControler {
    #dataAllProvince = [];

    constructor(provinceDatas, provinceView) {
        this.provinceDatas = provinceDatas;
        this.provinceView = provinceView;
    }

    async setNameProvince() {
        this.#dataAllProvince = await this.provinceDatas.dataAllProvince();

        this.provinceView.dataReceiver(this.#dataAllProvince.map((province) => province));
        this.provinceView.listProvinceName();
        this.provinceView.provinceTitleName();
    }
}

export default ProvinceControler;
