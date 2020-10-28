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
          name:"Zhongding Guoyuan (Shenzhen) Electronic Commerce Co., Ltd",
          text:"The company took the lead in the jewelry industry to launch [national V] standards, leading industrial transformation and upgrading, environmental protection, the application of the Internet of things, planning enterprise standards and so on, the market-oriented service providers of Chinese state institutions (the following list).",
          logo:"http://badachina.com/icbc/static/img/logo-10.jpg"
        },
        id:4
      },

        {
            left:{
                name:"Dongguan Hongyang Packaging Material",
                text:"Founded in 2007, engaged in the production and sales of various types of tape, the company has advanced equipment technology and strict quality management system. In the face of fierce market competition, our company attaches great importance to the research and development of new products, actively introduces new technology, new technology and new equipment, and speeds up technical transformation.",
                logo:"http://badachina.com/icbc/static/img/logo-11.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004700"
            },
            right:{
                name:"Shopping Global Cheaper Price & Unique Service",
                text:"We have 15 years of product export experience, rich product variety, wholesale advantages, good service, good user experience.",
                logo:"http://badachina.com/icbc/static/img/logo-12.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004722"
            },
            id:5
        },
        {
            left:{
                name:"Health OL store for SuperSun",
                text:"The company is a high-tech Internet service-oriented enterprise. Based on the new payment layout of mobile Internet and the Internet marketing field of physical commerce, Chaoshun mall platform system builds the Internet ecological chain in the era of entity business intelligence, provides new intelligent tools for recycling consumption for the interconnection and upgrading of physical commerce, and creates a new intelligent era of consumption in new business scenarios. ",
                logo:"http://badachina.com/icbc/static/img/logo-13.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004726"
            },
            right:{
                name:"Shenzhen Uni-Right Industrial & Trading co",
                text:"Shenzhen Uni-Right Industrial & Trading co., Ltd , was established in April 1997.We are an export.oriented copmany in electrical home appliances areas, dealing with various kinds of fans ,heaters  ,small.",
                logo:"http://badachina.com/icbc/static/img/logo-14.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004728"
            },
            id:6
        },
        {
            left:{
                name:"Huizhou Minjie Technology Co",
                text:"Huizhou Minjie Technology Co., Ltd is established in 2011. We are a professional high-tech barcode scanner, thermal printer and all-in-one tablet POS manufacturer. Our company specialized in the development, manufacturing, sales and service of automatic identification products. ",
                logo:"http://badachina.com/icbc/static/img/logo-16.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004803"
            },
            right:{
                name:"SHENZHEN XINYI TECHNOLOGY CO",
                text:"Established in  2010, up to 2014, mainly focused on development, production, innovation of  audio ,video product and related products. we go under sincerity with innovative spirit, we have enormous reliable business resource and excellent R&D team, based on the strengths of electronic and software, what's more, we have established cooperation with the outstanding experts in the international universities and institutes.",
                logo:"http://badachina.com/icbc/static/img/logo-17.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004823"
            },
            id:7
        },
        {
            left:{
                name:"SenDe Electronics co.,Ltd",
                text:"The company is a research and development, production in one comprehensive company. It mainly produces various types of PC power supply, server power supply, vehicle computer power supply, portable computer power tester and related peripheral equipment.",
                logo:"http://badachina.com/icbc/static/img/logo-18.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004859"
            },
            right:{
                name:"Jiumu Group Co.,Ltd",
                text:"Founded in 1990, Jiumu Group Co., Ltd. is headquartered in Quanzhou, Fujian Province, the Economic Zone on the west side of the Taiwan Strait. It also has an operation center in Xiamen. ",
                logo:"http://badachina.com/icbc/static/img/logo-19.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004860"
            },
            id:8
        },
        {
            left:{
                name:"DONGGUAN LEADERWAVE",
                text:"Leaderwave Electronics was established in 1975. Our company offers audio products including High Power Street Dance Boombox, Bluetooth Speaker, DJ Speaker,...,etc.",
                logo:"http://badachina.com/icbc/static/img/logo-20.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004881"
            },
            right:{
                name:"Tong Xiang intelligent securit",
                text:"The company is a high-tech enterprise integrating R & D, manufacturing, system integration and service. Products include intelligent parking system, intelligent channel system, intelligent access control system, intelligent elevator management system, intelligent attendance system, intelligent consumption / Club POS system, intelligent patrol system.",
                logo:"http://badachina.com/icbc/static/img/logo-21.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004975"
            },
            id:9
        },
        {
            left:{
                name:"Shenzhen Leadtek Technology Co.Ltd",
                text:"Shenzhen Leadtek Technology Co.Ltd (Leadtek), founded in 2009, is a wholly-owned subsidiary of Leadtek Technology Group Ltd. We are a high-tech enterprise covering research and development, manufacture and marketing with state-of-the-art production facilities that occupy over 3,800 square meters of which over 1,300 square meters is allocated to clean rooms.",
                logo:"http://badachina.com/icbc/static/img/logo-22.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004982"
            },
            right:{
                name:"PEGASUS CELADON CO., LTD",
                text:"Longquan celadon started in the Five Dynasties, reached its summit during the Song and Yuan Dynasties and lasted to the Ming and Qing Dynasties. It is the longest and largest kiln family in the Chinese celadon history. ",
                logo:"http://badachina.com/icbc/static/img/logo-23.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004983"
            },
            id:10
        },
        {
            left:{
                name:"Baoyuanchang flagship store",
                text:"We are committed to providing each customer with the highest quality products, the most affordable prices, and the most considerate services. ",
                logo:"http://badachina.com/icbc/static/img/logo-28.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005621"
            },
            right:{
                name:"YOUPICK COMPANY",
                text:"Youpinyunshang has multiple sales stores on mainstream platforms such as Tmall, JD.com, Suning, etc. It has multiple operating accounts such as direct network supply and offline store distribution. It has successfully operated more than 300 brands and its own warehouse is 2000㎡. ",
                logo:"http://badachina.com/icbc/static/img/logo-30.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005771"
            },
            id:11
        },
        {
            left:{
                name:"Fanbeilin Jewelry Co.,Ltd",
                text:"Fanbeilin Jewelry Co., Ltd. is a large jewelry enterprise integrating design, production and processing. It provides diversified supply chain services for domestic famous jewelry brands.",
                logo:"http://badachina.com/icbc/static/img/logo-32.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005974"
            },
            right:{
                name:"PELXURY JEWELRY",
                text:"Shenzhen  Pelxury jewelry  of one branch  NanYangHenXin for retailing  and wholesale.mainly for silver and precious metal. ",
                logo:"http://badachina.com/icbc/static/img/logo-35.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=006021"
            },
            id:12
        },

        {
            left:{
                name:"LEONEJEWELRY",
                text:"LEONE JEWELRY is a wholly-owned subsidiary of lion gold company (established in 2006). It mainly deals in jewelry and jewelry. It is dedicated to providing customers at home and abroad with a wide range of products, novel and unique styles, and all kinds of exquisite jewelry with great personality charm.",
                logo:"http://badachina.com/icbc/static/img/logo-36.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=006022"
            },
            right:{
                name:"Shenzhen breo Technology Co., Ltd",
                text:"Shenzhen breo Technology Co., Ltd. was founded in 2000.  It focuses on the research and development of portable intelligent Dao health products, reproducing traditional Chinese medicine techniques such as needle, needle, moxibustion, sound, etc., and strives to bring users a new experience of meridian health.",
                logo:"http://badachina.com/icbc/static/img/logo-44.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004759"
            },
            id:13
        },
        {
            left:{
                name:"Shengwen Health Technology",
                text:"Shenzhen shengwen GUFA water purifier consist of Out cylinder and inner liner. made of Medical stone, glacial rock and other 20kinds of natural minerals. Every step is made by hand. ",
                logo:"http://badachina.com/icbc/static/img/logo-50.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004824"
            },
            right:{
                name:"1More Authorized Shop",
                text:"1More believes that music is the monologue of the soul. With advanced and professional technology, we are committed to presenting you with a more pure and infectious voice. When wearing 1More headphones, we hope you can forget technology and integrate with music.",
                logo:"http://badachina.com/icbc/static/img/logo-54.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004884"
            },
            id:14
        },
        {
            left:{
                name:"Shenzhen Allcall Technology C",
                text:"AllCall was established in 2005，which is a global electronics and technology service provider and delivers the latest and  most exquisite mobile in over 20 Cuntries、 including Europe，Southeast Asia, the middle east and Africa.",
                logo:"http://badachina.com/icbc/static/img/logo-55.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004885"
            },
            right:{
                name:"",
                text:"",
                logo:"http://badachina.com/icbc/static/img/bai.jpg",
                url:""
            },
            id:15
        }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

