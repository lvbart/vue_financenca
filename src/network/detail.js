import {request} from './request'


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
    return request({
      url: '/recommend',

    })
 }


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgcolor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    //this.services = shopInfo.services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}


export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
