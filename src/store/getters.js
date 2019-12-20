export default {
  goodsCountInCart(state){
    let total = 0;
    state.goodsList.forEach(currentValue => {
      total += currentValue.prodect.reduce((sum, count) => {
        return sum + count.countInCart;
      }, 0);
    })
    return total;
    // return state.goodsList.length;
  },
  goodsList(state){
    return state.goodsList;
  }
}
