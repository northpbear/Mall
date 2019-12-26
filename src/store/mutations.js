import th from "element-ui/src/locale/lang/th";
import el from "element-ui/src/locale/lang/el";

export default {
  addGoodsToCart(state, payload){
    class NewGoods {
      constructor(payload) {
        this.shopId = payload.shop.shopId;
        this.shopName = payload.shop.shopName;
        this.shopUrl = payload.shop.shopUrl;
        this.prodect = []
      }
    }
    const goods = new NewGoods(payload);
    console.log('我执行啦');
    let goodsIndex = state.goodsList.findIndex(item => {
      return item.shopId === payload.shop.shopId
    });
    console.log('goodsIndex = '+goodsIndex);
    if (goodsIndex === -1){
      goods.prodect.push(payload);
      state.goodsList.push(goods);

    }else {
      console.log(goodsIndex);
      payload.countInCart = 1;
      state.goodsList[goodsIndex].prodect.push(payload)
    }
    // state.goodsList.push(payload);
  },
  addCountInCart(state, payload){
    let prodectIndex = -1;
    let index = state.goodsList.findIndex(item => {
      prodectIndex = item.prodect.findIndex(goods => {
        return goods.iid ===payload.iid
      });//n | -1
      return prodectIndex !== -1
    });
    if (prodectIndex !== -1){
      state.goodsList[index].prodect[prodectIndex].countInCart += 1;
    }
    // payload.countInCart += 1;
  },
  add(state, id){
    const goodsIndex = state.goodsList.findIndex(item => {
      return item.shopId === id.shopId
    });
    const theShop = state.goodsList[goodsIndex];
    const i = theShop.prodect.findIndex(goods => {
      return goods.iid === id.iid;
    });
    theShop.prodect[i].countInCart++;
  },
  minus(state, id) {
    const goodsIndex = state.goodsList.findIndex(item => {
      return item.shopId === id.shopId
    });
    const theShop = state.goodsList[goodsIndex];
    const i = theShop.prodect.findIndex(goods => {
      return goods.iid === id.iid;
    });
    if (theShop.prodect[i].countInCart > 1){
      theShop.prodect[i].countInCart--;
    }else {
      theShop.prodect.splice(i, 1);
      if (theShop.prodect.length === 0 ){
        state.goodsList.splice(goodsIndex, 1);
      }
    }
  }
}
