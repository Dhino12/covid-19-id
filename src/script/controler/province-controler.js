class ProvinceControler {
    #dataAllProvince = [];

    #dataGeoJson = [];

    constructor(provinceDatas, provinceView) {
        this.provinceDatas = provinceDatas;
        this.provinceView = provinceView;
    }

    async getNameProvince() {
        this.#dataAllProvince = await this.provinceDatas.dataAllProvince();
        this.provinceView.dataReceiver(this.#dataAllProvince);
        this.provinceView.listProvinceName();
        this.provinceView.provinceTitleName();
    }

    async getProvinceGeoJson() {
        this.#dataGeoJson = await this.provinceDatas.dataGeoJson();
        this.provinceView.dataReceiverGeoJson(this.#dataGeoJson);
    }
}

export default ProvinceControler;
