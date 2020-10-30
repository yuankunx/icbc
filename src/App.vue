<template>
  <div id="app">
    <div class="kht-banner">
        <div class="language"><span>中文</span><em>/</em><a href="http://www.badachina.com/icbc/en/">English</a></div>
    </div>
    <div class="box">
      <div class="icbc-nav">
        <router-link tag="div" class="nav-box" to="/icbc">★ 产品展示 ★</router-link>
        <router-link tag="div" class="nav-box" to="/icbc/enterprise">★ 企业展示 ★</router-link>
        <router-link tag="div" class="nav-box" to="/icbc/crossBorder">★ 跨境收款 ★</router-link>
      </div>
      <router-view class="router-view" />
    </div>
    <div class="icbc-foot">
      <div class="box">
          <div class="g-f-l">
             <a href="http://www.icbc.com.cn/icbc/">工行首页</a>
             <em>|</em>
             <a href="http://trade.icbc.com.cn/index.html">返回企业商城首页</a>
          </div>
          <div class="g-f-r">中国工商银行版权所有 京ICP证030247号</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.kht-banner {
  width: 100%;
  min-width: 1190px;
  height: 500px;
  background: url(./images/banner.jpg) no-repeat center top;
}
.icbc-nav{
  width: 1190px;
  height: 112px;
  background: url(./images/nav-bj.jpg) no-repeat center top;
  border-radius: 5px;
  overflow: hidden;
}
.icbc-nav .nav-box{
  width: 33.3%;
  float: left;
  text-align: center;
  line-height: 112px;
  font-size: 30px;
  color: #b14700;
  cursor: pointer;
  font-weight: bold;
}
.icbc-nav .exact{color: #ff3c00;}
.icbc-foot{
  width: 100%;
  min-width: 1190px;
  height: 50px;
  line-height: 50px;
  margin-top: 100px;
  background-color: #fff;
}
.icbc-foot em{
  margin: 0 10px;
  color: #c6c6c6;
}
.language{
    width: 1200px;
    height: 50px;
    margin:auto;
    text-align: right;
    padding-top: 70px;
    font-size: 24px;
    color: #fff;
}
.language a{color: #fff;}
.language span{color: #ffc29f;}
.language em{padding: 0 10px;}
</style>