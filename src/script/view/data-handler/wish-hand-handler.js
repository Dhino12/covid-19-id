class WishHandHandler {
    static set querySelector(wishQuery) {
        this._queryWish = document.querySelector(wishQuery);
    }

    static set setDataWishHand(datas) {
        this._queryWish.wishHandDatas = datas;
    }
}

export default WishHandHandler;
