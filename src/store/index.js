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
          logo:"http://badachina.com/icbc/static/img/logo-01.jpg"
        },
        right:{
          name:"北京信酷网络技术有限公司",
          text:"北京信酷网络技术有限公司成立于2011年，注册资金为1000万元，总部位于北京，主要从事集软件开发、广告推广、移动通信产品的销售和批发。",
          logo:"http://badachina.com/icbc/static/img/logo-02.jpg"
        },
        id:0
      },
      {
        left:{
          name:"南江县光雾山林业有限公司",
          text:"南江县光雾山林业有限公司是一家集种植、生产、科研、销售为一体的全产业链现代化农业企业。公司专注于发展珍稀植物——青钱柳、毛叶山桐子木本油料作物的培育、种植及其生物制品的研发和生产。",
          logo:"http://badachina.com/icbc/static/img/logo-03.jpg"
        },
        right:{
          name:"深圳市乐翔伞业有限公司",
          text:"深圳市乐翔伞业有限公司经销批发的伞畅销消费者市场，在消费者当中享有较高的地位，公司与多家零售商和代理商建立了长期稳定的合作关系。深圳市乐翔伞业有限公司经销的伞品种齐全、价格合理。深圳市乐翔伞业有限公司实力雄厚，重信用、守合同、保证产品质量，以多品种经营特色和薄利多销的原则，赢得了广大客户的信任。",
          logo:"http://badachina.com/icbc/static/img/logo-04.jpg"
        },
        id:1
      },
      {
        left:{
          name:"四川良源食品有限公司",
          text:"四川良源食品有限公司位于四川省巴中市南江县东榆工业园区，公司以全国五大优质核桃产区——四川南江为原料采集地，专注于核桃全系列高端产品的开发。项目总投资 2 亿元，用地 30 亩，工程共分 3 期建设，目前已完成建设 2 条木本油料生产线。",
          logo:"http://badachina.com/icbc/static/img/logo-05.jpg"
        },
        right:{
          name:"深圳市瑞达通供应链有限公司",
          text:"深圳市瑞达通供应链有限公司是一家深耕于供应链整合的专业企业，通过灵活的策略联盟，联合各个优秀的生产企业，为海外买家提供优质的产品定制服务。公司产品范围目前主要有电子产品和包装印刷两类。",
          logo:"http://badachina.com/icbc/static/img/logo-06.jpg"
        },
        id:2
      },
      {
        left:{
          name:"万源市太一蜂业有限公司",
          text:"万源市太一蜂业有限公司是集保护中蜂种质资源、养蜂技术培训、生产和销售百花蜜为一体的创新型企业，自然健康蜂产品的供应商。",
          logo:"http://badachina.com/icbc/static/img/logo-07.jpg"
        },
        right:{
          name:"深圳市雄盛进出口有限公司",
          text:"深圳市雄盛进出口有限公司是一家集生态、分级、检验、仓储及销售蛋品的综合性民营企业。自公司创建以来，公司一直秉承“质量第一，用户至上，信誉为本，注重管理”的宗旨，长期为港澳地区供应优质蛋品，得到了广大客户的一致好评。",
          logo:"http://badachina.com/icbc/static/img/logo-08.jpg"
        },
        id:3
      },
      {
        left:{
          name:"云阳芸山农业开发有限公司",
          text:"芸山农业“三峡阳菊”产品产自重庆市云阳县国家级有机菊花栽培综合标准化示范区。“三峡阳菊”产区自然条件得天独厚，处于北纬30度，普遍种植于海拔600-1200米，土壤肥沃，雨水丰沛，日照充足，获得了中国、欧盟、美国、日本四个有机认证。",
          logo:"http://badachina.com/icbc/static/img/logo-09.jpg"
        },
        right:{
          name:"中鼎国源（深圳）电子商务有限公司",
          text:"公司率先在珠宝首饰业推出【国V】标准，引领产业转型升级、环境保护、物联网应用、规划企业标准等，中国国家机构(以下名单)的市场化服务商。",
          logo:"http://badachina.com/icbc/static/img/logo-10.jpg"
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

