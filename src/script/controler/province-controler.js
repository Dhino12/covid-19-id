class ProvinceControler {
    #dataAllProvince = [];

    #dataGeoJson = [];

    constructor(provinceDatas, provinceView) {
        this.provinceDatas = provinceDatas;
        this.provinceView = provinceView;
    }

    // eslint-disable-next-line class-methods-use-this
    #sortProvinceName(datas) {
        return datas.sort((a, b) => {
            const nameProvA = a.provinsi.toUpperCase();
            const nameProvB = b.provinsi.toUpperCase();

            if (nameProvA < nameProvB) {
                return -1;
            }

            if (nameProvA > nameProvB) {
                return 1;
            }
            return 0;
        });
    }

    async getNameProvince() {
        this.#dataAllProvince = await this.provinceDatas.dataAllProvince();
        this.#dataAllProvince = this.#sortProvinceName(this.#dataAllProvince);
        this.provinceView.dataReceiver(this.#dataAllProvince);
        this.provinceView.listProvinceName();
    }

    async getProvinceGeoJson() {
        this.#dataGeoJson = await this.provinceDatas.dataGeoJson();
        this.provinceView.dataReceiverGeoJson(this.#dataGeoJson);
    }
}

export default ProvinceControler;
