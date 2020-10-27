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
          logo:"http://badachina.com/icbc/static/img/logo-01.jpg",
            url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004653"
        },
        right:{
          name:"北京信酷网络技术有限公司",
          text:"北京信酷网络技术有限公司成立于2011年，注册资金为1000万元，总部位于北京，主要从事集软件开发、广告推广、移动通信产品的销售和批发。",
          logo:"http://badachina.com/icbc/static/img/logo-02.jpg",
            url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004978"
        },
        id:0
      },
      {
        left:{
          name:"南江县光雾山林业有限公司",
          text:"南江县光雾山林业有限公司是一家集种植、生产、科研、销售为一体的全产业链现代化农业企业。公司专注于发展珍稀植物——青钱柳、毛叶山桐子木本油料作物的培育、种植及其生物制品的研发和生产。",
          logo:"http://badachina.com/icbc/static/img/logo-03.jpg",
            url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005615"
        },
        right:{
          name:"深圳市乐翔伞业有限公司",
          text:"深圳市乐翔伞业有限公司经销批发的伞畅销消费者市场，在消费者当中享有较高的地位，公司与多家零售商和代理商建立了长期稳定的合作关系。深圳市乐翔伞业有限公司经销的伞品种齐全、价格合理。深圳市乐翔伞业有限公司实力雄厚，重信用、守合同、保证产品质量，以多品种经营特色和薄利多销的原则，赢得了广大客户的信任。",
          logo:"http://badachina.com/icbc/static/img/logo-04.jpg",
            url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004779"
        },
        id:1
      },
      {
        left:{
          name:"四川良源食品有限公司",
          text:"四川良源食品有限公司位于四川省巴中市南江县东榆工业园区，公司以全国五大优质核桃产区——四川南江为原料采集地，专注于核桃全系列高端产品的开发。项目总投资 2 亿元，用地 30 亩，工程共分 3 期建设，目前已完成建设 2 条木本油料生产线。",
          logo:"http://badachina.com/icbc/static/img/logo-05.jpg",
            url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005605"
        },
        right:{
          name:"深圳市瑞达通供应链有限公司",
          text:"深圳市瑞达通供应链有限公司是一家深耕于供应链整合的专业企业，通过灵活的策略联盟，联合各个优秀的生产企业，为海外买家提供优质的产品定制服务。公司产品范围目前主要有电子产品和包装印刷两类。",
          logo:"http://badachina.com/icbc/static/img/logo-06.jpg",
            url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004721"
        },
        id:2
      },
      {
        left:{
          name:"万源市太一蜂业有限公司",
          text:"万源市太一蜂业有限公司是集保护中蜂种质资源、养蜂技术培训、生产和销售百花蜜为一体的创新型企业，自然健康蜂产品的供应商。",
          logo:"http://badachina.com/icbc/static/img/logo-07.jpg",
          url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005611"
        },
        right:{
          name:"深圳市雄盛进出口有限公司",
          text:"深圳市雄盛进出口有限公司是一家集生态、分级、检验、仓储及销售蛋品的综合性民营企业。自公司创建以来，公司一直秉承“质量第一，用户至上，信誉为本，注重管理”的宗旨，长期为港澳地区供应优质蛋品，得到了广大客户的一致好评。",
          logo:"http://badachina.com/icbc/static/img/logo-08.jpg",
          url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005924"
        },
        id:3
      },
      {
        left:{
          name:"云阳芸山农业开发有限公司",
          text:"芸山农业“三峡阳菊”产品产自重庆市云阳县国家级有机菊花栽培综合标准化示范区。“三峡阳菊”产区自然条件得天独厚，处于北纬30度，普遍种植于海拔600-1200米，土壤肥沃，雨水丰沛，日照充足，获得了中国、欧盟、美国、日本四个有机认证。",
          logo:"http://badachina.com/icbc/static/img/logo-09.jpg",
          url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005821"
        },
        right:{
          name:"中鼎国源（深圳）电子商务有限公司",
          text:"公司率先在珠宝首饰业推出【国V】标准，引领产业转型升级、环境保护、物联网应用、规划企业标准等，中国国家机构(以下名单)的市场化服务商。",
          logo:"http://badachina.com/icbc/static/img/logo-10.jpg",
          url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005559"
        },
        id:4
      },
        {
            left:{
                name:"东莞市宏洋包装材料有限公司",
                text:"成立于2007年，从事各类胶带生产、销售，公司拥有先进的设备工艺以及严格的质量管理体系。面对激烈的市场竞争，我公司十分重视新产品的研制开发，积极引进新工艺、新技术、新装备，加快技术改造。",
                logo:"http://badachina.com/icbc/static/img/logo-11.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004700"
            },
            right:{
                name:"深圳市卓旺科技有限公司",
                text:"深圳卓旺科技有限公司创建于2005年，是一家专注于跨境电子商务的科技公司。一路走来，公司始终坚持以市场为导向、以打造便捷消费类产品供应链，服务全球伙伴为目标，长期致力于自主产品设计及研发、自主创新，不断开发出高颜值、高品质、高性价比的产品，并努力打造中国品牌。",
                logo:"http://badachina.com/icbc/static/img/logo-12.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004722"
            },
            id:4
        },
        {
            left:{
                name:"深圳市超顺电子商务有限公司",
                text:"公司是一家是高科技互联网服务型企业，超顺商城平台系统立足于移动互联网新型支付布局及实体商业互联网营销领域，构建实体商业智能时代的互联网生态链，为实体商业的互联升级提供循环消费的智能新工具，开创实体新商业场景消费的智能新时代。通过“互联网空间思维”作为企业战略的指导总思想，为实体商业提供应用于场景消费中的智能“创利”新工具，以全系技术的新型服务，创建用户消费增值平台；为中国实体商业插上互联网的翅膀。",
                logo:"http://badachina.com/icbc/static/img/logo-13.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004726"
            },
            right:{
                name:"深圳市友瑞德贸易有限公司",
                text:"公司成立于1997年4月。我们是一家以出口为主营业务的公司，在家电领域，拥有各种类型的电风扇、加热器、面包机、熨斗、咖啡机、搅拌机，个人护理等各种产品，以及定制的LCD媒体屏幕和音频播放器，每年营业额超过5000万美元。我们很荣幸地说，我们的产品已经进入了跨国超市、连锁商店、零售商店，甚至是地方杂货铺，声誉良好。",
                logo:"http://badachina.com/icbc/static/img/logo-14.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004728"
            },
            id:5
        },
        {
            left:{
                name:"惠州市敏捷科技有限公司",
                text:"公司是一家专业从事自动识别产品研发、生产、销售、移动设备研发生产、移动数据设备嵌入式软件、专业应用软件开发、行业应用系统集成和服务。 适用于不同行业、不同规模、不同信息化阶段的客户,主要产品有扫描枪、条码打印机、条码扫描枪、采集器配件等。 公司拥有国内最早从事条码扫描设备设计应用的多名工程师,年产能15万支条码扫描器的专业制造商。",
                logo:"http://badachina.com/icbc/static/img/logo-16.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004803"
            },
            right:{
                name:"深圳市忻毅科技有限公司",
                text:"公司成立于2010年，国家高新科技企业，拥有多年图像视频产品及移动穿戴AI 产品研发制造的实践经验，并在相关领域取得多项发明专利、实用新型、软件著作、外观专利以及国内外商标与认证等知识产权，技术领域涉及人工智能，大数据，云计算与边缘计算等物联网多维度多层次应用，产品应用并赋能于众多行业的智慧升级，如大数安保，智慧物流，3D网购，远程医疗，实时场景教育，实景导航，等行业应用。",
                logo:"http://badachina.com/icbc/static/img/logo-17.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004823"
            },
            id:6
        },
        {
            left:{
                name:"东莞市森德电子有限公司",
                text:"公司是一家集研发，生产于一体的综合性公司。主要生产各种型号PC电脑电源,服务器电源,车载电脑电源,便携式电脑电源测试器及相关外围设备。公司秉承\"以人为本，品质第一”的经营理念，期待与全国各地贸易公司和外商建立长久的合作关系，，为新老客户提供极具竞争力的多功能产品。",
                logo:"http://badachina.com/icbc/static/img/logo-18.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004859"
            },
            right:{
                name:"九牧（厦门）建材有限公司",
                text:"九牧集团有限公司创立于1990年，总部位于海峡西岸经济区福建泉州，并在厦门设立运营中心，目前拥有5大生产基地、16个工厂，十多家子公司，全球拥有专卖店超过4000家，50000多个销售网点，累计销量超过10亿件。是一家集研发、生产、销售、服务于一体的大型卫浴企业。",
                logo:"http://badachina.com/icbc/static/img/logo-19.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004860"
            },
            id:7
        },
        {
            left:{
                name:"东莞清溪利得威电子科技有限公司",
                text:"公司是原东莞清溪利得威电子厂就地转型的独资企业，分别在香港、台湾、美国均有注册公司，公司势力强大，曾属东莞500强。\n" +
                "公司位于中国最美小镇-清溪镇荔横村康怡路利得威工业园，园内花草树木郁郁葱葱，四季花团锦簇。园外高速互通6个，最近的清溪大道清溪收费站不到两公里。",
                logo:"http://badachina.com/icbc/static/img/logo-20.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004881"
            },
            right:{
                name:"东莞通翔数码科技有限公司",
                text:"公司是一家集研发、制造、系统集成和服务于一体的高科技技术企业。产品涵盖智能停车场系统、智能通道系统、智能门禁系统、智能电梯管理系统、智能考勤系统、智能消费/会所POS系统、智能巡更系统。在电子信息技术、出入口控制设施、智能管理软件、专业服务等领域都确立了领先地位。",
                logo:"http://badachina.com/icbc/static/img/logo-21.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004975"
            },
            id:8
        },
        {
            left:{
                name:"深圳市岦泰科技有限公司",
                text:"公司成立于2009年，是一家集研发、生产、销售为一体的高新技术企业，拥有先进的生产设备3800多平方米，其中，300平方米被分配给洁净室。我们成立于深圳，面向世界，在各级政府和企业的支持和重视下，在技术和质量上不断发展。探索、适应科学高效的管理体制，营造鲜明特色、开放包容的企业文化环境，形成了一支集科研、生产、销售、服务等方面优秀员工为一体的精英团队。在技术创新、制造、市场开拓、技术服务等方面实现了跨越式发展，形成了各具特色。",
                logo:"http://badachina.com/icbc/static/img/logo-22.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004982"
            },
            right:{
                name:"深圳市飞马祥龙实业有限公司",
                text:"公司是全球领先的龙泉青瓷产品和服务供应商。龙泉青瓷始于五代，宋元时期达到顶峰，一直延续到明清时期。它是中国青瓷历史上最长、规模最大的窑户。我们竭诚欢迎国内外客户建立业务关系。我们非常感谢您真诚的询问，以达到互利共赢，共创美好未来。",
                logo:"http://badachina.com/icbc/static/img/logo-23.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004983"
            },
            id:9
        },
        {
            left:{
                name:"深圳市宝源昌珠宝有限公司",
                text:"我们致力于为每一位客户提供最优质的产品，最实惠的价格，最周到的服务。",
                logo:"http://badachina.com/icbc/static/img/logo-28.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005621"
            },
            right:{
                name:"四川优品云商科技有限公司",
                text:"优品云商在天猫等主流平台拥有多家销售店，京东拥有网络直供、线下门店分销等多个经营账户。已成功经营300多个品牌，自有仓库2000平方米。入驻5个省级云仓库，累计年销售额近亿元。利用团队多年的实践经验和公司的资源优势，为许多地方政府提供县域特色产业规划、行业公共品牌建设、特色农产品推广、大型电子商务活动策划、电子商务人才培养（实训）等服务。营业部也是四川省“老川牌”唯一的电子商务整体运营商、天猫服务商仓储企业、京东云西南服务商",
                logo:"http://badachina.com/icbc/static/img/logo-30.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005771"
            },
            id:10
        },
        {
            left:{
                name:"深圳市梵贝琳珠宝有限公司",
                text:"梵贝琳珠宝有限公司是集，设计，生产，加工为一体的大型珠宝企业，为国内知名珠宝品牌提供多元化的供应链服务。",
                logo:"http://badachina.com/icbc/static/img/logo-32.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=005974"
            },
            right:{
                name:"深圳市宝诗瑞珠宝首饰有限公司",
                text:"宝诗瑞珠宝做为深圳南洋恒信旗下零售批发品牌，为电商及零售服务，主营银饰品及其它贵金属批发零售！ ",
                logo:"http://badachina.com/icbc/static/img/logo-35.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=006021"
            },
            id:11
        },

        {
            left:{
                name:"厦门理昂电子商务有限公司",
                text:"理昂珠宝是理昂黄金公司（成立于2006年）的全资子公司，主营珠宝首饰，竭诚向国内外客户提供货品种类繁多、款式新颖独特、极具个性魅力的各式精美珠宝首饰。 ",
                logo:"http://badachina.com/icbc/static/img/logo-36.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=006022"
            },
            right:{
                name:"深圳市倍轻松科技股份有限公司",
                text:"深圳市倍轻松科技股份有限公司成立于du2000年，专注于研发便携式智能健康产品，再现传统砭、针、灸、音等中医技法，力求带给用户经络健康全新体验。经过14年的发展，产品销售遍布全球70多个国家及地区，在国内建立超过200家的品牌自营店，在京东、天猫等网络平台也均有销售。",
                logo:"http://badachina.com/icbc/static/img/logo-44.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004759"
            },
            id:12
        },
        {
            left:{
                name:"深圳圣文古法净水科技实业有限公司",
                text:"深圳圣文古法净水器由外筒和内衬组成。由药用石、冰川石等20多种天然矿物制成。每一步都是手工做的。",
                logo:"http://badachina.com/icbc/static/img/logo-50.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004824"
            },
            right:{
                name:"深圳能源物流有限公司",
                text:"1MORE 相信，音乐是心灵的独白，运用先进且专业的技术，我们致力于为您呈现更纯粹、富有感染力的声音。当戴上 1MORE 耳机，我们希望您可以忘记科技，与音乐融为一体。 ",
                logo:"http://badachina.com/icbc/static/img/logo-54.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004884"
            },
            id:13
        },
        {
            left:{
                name:"深圳欧乐酷科技有限公司",
                text:"欧乐酷成立于2005年，是一家全球性的电子技术服务提供商，在欧洲、东南亚、中东和非洲等20多个城市提供最新、最精致的手机。成为新兴市场最具影响力和最受青睐的移动通信设备及相关服务提供商。",
                logo:"http://badachina.com/icbc/static/img/logo-55.jpg",
                url:"https://trade.icbc.com.cn/shopstore/b2bshopindex.jhtml?shopId=004885"
            },
            right:{
                name:"",
                text:"",
                logo:"http://badachina.com/icbc/static/img/bai.jpg",
                url:""
            },
            id:14
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

