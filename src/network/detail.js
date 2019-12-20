import {request} from './request'

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(res) {
    this.title = res.result.itemInfo.title;
    this.oldPrice = res.result.itemInfo.oldPrice;
    this.lowNowPrice = res.result.itemInfo.lowNowPrice;
    this.discountDesc = res.result.itemInfo.discountDesc;
    this.columns = res.result.columns;
    this.services = res.result.shopInfo.services;
    this.iid = res.iid;
    this.shop = {
      shopName: res.result.shopInfo.name,
      shopUrl: res.result.shopInfo.allGoodsUrl,
      shopId: res.result.shopInfo.shopId,
      shopLogo: res.result.shopInfo.shopLogo
    };
    this.countInCart = 0;
  }
}
