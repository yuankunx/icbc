import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced:true,  //命名空间
  state: {
    productList:[
      {
        title:"Food",
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
        title:"Toys",
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
        title:"Cosmetics",
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
        title:"Cleaning Supplies",
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
        title:"Raw Material",
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
          name:"Shenzhen BADA Logistics Co",
          text:"Shenzhen BADA Logistics Co., Ltd(BADA), formerly known as Shenzhen Foreign Trade and Development Company, was established in 1987. It is a new e-commerce supply chain service company with internet plus foreign trade, a pilot enterprise of comprehensive foreign trade service in Guangdong Province, a key foreign trade enterprise in Shenzhen, anExpress enterprise of Shenzhen government, and a senior certification enterprise of customs AEO.",
          logo:"http://badachina.com/icbc/static/img/logo-01.jpg"
        },
        right:{
          name:"Beijing Xinku Network Technology Co",
          text:"Beijing Xinku Network Technology Co., Ltd. was established in 2011 with a registered capital of 10 million yuan. It is headquartered in Beijing, mainly engaged in software development, advertising promotion, sales and wholesale of mobile communication products.",
          logo:"http://badachina.com/icbc/static/img/logo-02.jpg"
        },
        id:0
      },
      {
        left:{
          name:"Nanjiang County Mt.GuangwuForestry Co",
          text:"The Nanjiang County Mt. GuangwuForestry Co., Ltd. is a modern agricultural enterprise that integrates planting, production, research, and sales with the entire industrial chain. The company specializes in developing rare plants -- cultivating Cyclocarya paliurus and Phyllostachys chinensis as oil crops,and conducting research, development, and production oftheir biological products.",
          logo:"http://badachina.com/icbc/static/img/logo-03.jpg"
        },
        right:{
          name:"Shenzhen Lexiang Umbrella Industry Co",
          text:"Shenzhen Lexiang Umbrella Industry Co., Ltd. sells wholesale umbrellas to the consumer market and enjoys a high position among consumers. The company has established long-term and stable cooperative relations with many retailers and agents.  Shenzhen Lexiang Umbrella Industry Co., Ltd. distributes a wide range of umbrellas with reasonable prices.  Shenzhen Lexiang Umbrella Industry Co., Ltd. ",
          logo:"http://badachina.com/icbc/static/img/logo-04.jpg"
        },
        id:1
      },
      {
        left:{
          name:"Sichuan Liangyuan Food Co",
          text:"Sichuan Liangyuan Food Co., Ltd. is located in Dongyu Industrial Park, Nanjiang County, Bazhong City, Sichuan Province. The company takes Nanjiang, Sichuan, one of the top five high-quality walnut producing areas in China, as the raw material collection place, and focuses on the development of high-end walnut products of the whole series. With a total investment of 200 million yuan, the project covers an area of 30 mu and is divided into three phases. At present, two wood oil production lines have been completed.",
          logo:"http://badachina.com/icbc/static/img/logo-05.jpg"
        },
        right:{
          name:"Shenzhen Ruidatong Supply Chain Co",
          text:"Shenzhen Ruidatong Supply Chain Co., Ltd is a professional enterprise who devotes to the integration of supply chain. With flexible alliance strategies, the company is in alliance with each excellent manufacturing enterprise and is providing quality product customization service to overseas buyers. Company’s current products mainly include electronics and packaging & printing products.",
          logo:"http://badachina.com/icbc/static/img/logo-06.jpg"
        },
        id:2
      },
      {
        left:{
          name:"Taiyi Honey Industry Co",
          text:"Taiyi Honey Industry Co., Ltd is located in Wanyuan City; it is an innovative enterprise integrated the protection of bee germplasm resources, beekeeping training, production and sales of honeybee. The company supplies natural and healthy honey products.",
          logo:"http://badachina.com/icbc/static/img/logo-07.jpg"
        },
        right:{
          name:"Shenzhen Xiongsheng Import and Export Co",
          text:"Shenzhen Xiongsheng Import and Export Co. , Ltd. is a collection of ecology, grading, inspection, warehousing and sales of eggs of integrated private enterprises. Since the company was founded, the company has been adhering to the quality first, user first, reputation-oriented, focus on management purposes, long-term supply of high-quality eggs for Hong Kong and Macao, has been unanimously praised by our customers.",
          logo:"http://badachina.com/icbc/static/img/logo-08.jpg"
        },
        id:3
      },
      {
        left:{
          name:"Brief Introduction ofYunyang Yunshan Agricultural Development Co",
          text:"“The three gorges gerbera” of Yunshan Agriculture is produced by national organic chrysanthemum comprehensive cultivation standardized demonstration in Yunyang county, Chongqin. Located in 30 degrees north latitude, the production area of “The three gorges gerbera” is richly endowed by nature, it is generally grow in the altitude of 600-1200 meters with rich soil, rainwater and sunshine, which organically certificated by China, European Union, America and Japan.",
          logo:"http://badachina.com/icbc/static/img/logo-09.jpg"
        },
        right:{
          name:"",
          text:"",
          logo:"http://badachina.com/icbc/static/img/bai.jpg"
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

