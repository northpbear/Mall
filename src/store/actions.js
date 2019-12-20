export default {
  addGoodsToCartOrCountAdd(context, payload) {
    const goodInCart = context.state.goodsList.findIndex(item => {
      return item.shopId === payload.shop.shopId
    });
    if (goodInCart === -1) {
      payload.countInCart = 1;
      context.commit('addGoodsToCart', payload);
      // console.log(goodInCart);
      console.log(payload.countInCart);
    } else {
      console.log(goodInCart);
      if (context.state.goodsList[goodInCart].prodect.findIndex(good => {
        return good.iid === payload.iid;
      }) !== -1){
        context.commit('addCountInCart', payload);
      }else {
        context.commit('addGoodsToCart', payload);
      }
      // console.log(goodInCart.countInCart);
    }
  }
}
