import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced:true,  //命名空间
  state: {
    productList:[
      {
        title:"食品",
        produc:[
          {
            name:"青椰子汁饮料（含椰子果肉）",
            price:"SGD 2.00",
            img:"http://www.qhkgt.com/icbc/images/img_01.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000204831&preview=overlay"
          },
          {
            name:"康康叻沙新鲜面餐包",
            price:"SGD 3.00",
            img:"http://www.qhkgt.com/icbc/images/img_02.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000209773&preview=overlay"
          },
          {
            name:"纯椰子水",
            price:"SGD 3.00",
            img:"http://www.qhkgt.com/icbc/images/img_11.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000204740&preview=overlay"
          },
          {
            name:"康康福建扁面",
            price:"SGD 2.00",
            img:"http://www.qhkgt.com/icbc/images/img_12.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000209776&preview=overlay"
          },
        ],
        id:0
      },
      {
        title:"玩具",
        produc:[
          {
            name:"PORORO啵乐乐系列 啵乐乐马戏团绕珠",
            price:"SGD 21.00",
            img:"http://www.qhkgt.com/icbc/images/img_03.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000206036&preview=overlay"
          },
          {
            name:"PORORO啵乐乐系列 啵乐乐木琴",
            price:"SGD 12.00",
            img:"http://www.qhkgt.com/icbc/images/img_13.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000206027&preview=overlay"
          },
          {
            name:"PORORO啵乐乐系列 啵乐乐积木玩具",
            price:"SGD 24.00",
            img:"http://www.qhkgt.com/icbc/images/img_14.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000206051&preview=overlay"
          },
          {
            name:"PORORO啵乐乐系列 啵乐乐形状配对数字时钟",
            price:"SGD 12.00",
            img:"http://www.qhkgt.com/icbc/images/img_15.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000206037&preview=overlay"
          },
        ],
        id:1
      },
      {
        title:"化妆品面膜",
        produc:[
          {
            name:"中国台湾TIMELESS TRUTH MASK 提提研 瞬白酷凉黑面膜",
            price:"CNY 79.00",
            img:"http://www.qhkgt.com/icbc/images/img_04.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000460687"
          },
          {
            name:"中国台湾TIMELESS TRUTH MASK提提研 新极轻丝极润长效保湿面膜",
            price:"CNY 109.00",
            img:"http://www.qhkgt.com/icbc/images/img_16.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000460702&preview=overlay"
          },
          {
            name:"中国台湾TIMELESS TRUTH MASK提提研 向日葵光透白皙生物纤维面膜",
            price:"CNY 199.00",
            img:"http://www.qhkgt.com/icbc/images/img_17.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000460705&preview=overlay"
          },
          {
            name:"中国台湾TIMELESS TRUTH MASK提提研 永生苔瞬活修复生物纤维面膜",
            price:"CNY 199.00",
            img:"http://www.qhkgt.com/icbc/images/img_18.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000460711&preview=overlay"
          },
        ],
        id:2
      },
      {
        title:"保洁用品",
        produc:[
          {
            name:"日本*一级帮厨房卷紙4卷50张",
            price:"CNY 35.00",
            img:"http://www.qhkgt.com/icbc/images/img_06.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000569862&preview=overlay"
          },
          {
            name:"ITO压缩面膜",
            price:"CNY 35.00",
            img:"http://www.qhkgt.com/icbc/images/img_22.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000569818&preview=overlay"
          },
          {
            name:"ITO旅行套装 内含一条浴巾和两条毛巾",
            price:"CNY 25.00",
            img:"http://www.qhkgt.com/icbc/images/img_23.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000569841&preview=overlay"
          },
          {
            name:"一级帮携带型酒精湿巾30片",
            price:"CNY 49.00",
            img:"http://www.qhkgt.com/icbc/images/img_24.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000569877&preview=overlay"
          },
        ],
        id:3
      },
      {
        title:"原材料",
        produc:[
          {
            name:"优能聚烯烃 HMV111",
            price:"SGD 10.00",
            img:"http://www.qhkgt.com/icbc/images/img_07.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000212439&preview=overlay"
          },
          {
            name:"DuraCrete 耐久绿化混凝土",
            price:"SGD 10.00",
            img:"http://www.qhkgt.com/icbc/images/img_08.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000205286&preview=overlay"
          },
          {
            name:"绿色矿渣水泥 P197 4S 大掺量矿渣水泥",
            price:"SGD 10.00",
            img:"http://www.qhkgt.com/icbc/images/img_09.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000205406&preview=overlay"
          },
          {
            name:"OptMax Shieldguard 50110 二冲程发动机气缸油",
            price:"SGD 10.00",
            img:"http://www.qhkgt.com/icbc/images/img_10.jpg",
            url:"https://trade.icbc.com.cn/wholeSaleProd/shopDetail.jhtml?prodId=B000229746&preview=overlay"
          },
        ],
        id:4
      }

    ],
    enterprise:[
      {
        left:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        right:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        id:0
      },
      {
        left:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        right:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        id:1
      },
      {
        left:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        right:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        id:2
      },
      {
        left:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        right:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        id:3
      },
      {
        left:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        right:{
          name:"深圳市八达物流股份有限公司",
          text:"深圳市八达物流股份有限公司（简称：BADA；原名：深圳外贸八达企业开发公司）于1987年经深圳市政府批准成立，是互联网+外贸的新型电子商务供应链服务企业、广东省外贸综合服务试点企业、深圳市重点外贸企业、深圳市政府直通车企业、海关AEO高级认证企业。",
          logo:"static/img/bada.6fd40818.jpg"
        },
        id:4
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

