class ProvinceControler {
    constructor(provinceDatas, provinceView) {
        this.provinceDatas = provinceDatas;
        this.provinceView = provinceView;
    }

    async setDataNameProvince() {
        const dataAllProvince = await this.provinceDatas.dataAllProvince();
        this.provinceView.listProvince(dataAllProvince);
    }
}

export default ProvinceControler;
