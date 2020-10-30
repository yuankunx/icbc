<template>
  <div id="app">
    <div class="kht-banner">
        <div class="language"><a href="http://www.badachina.com/icbc/">中文</a><em>/</em><span>English</span></div>
    </div>
    <div class="box">
      <div class="icbc-nav">
        <router-link tag="div" class="nav-box" to="/icbc/en/">★  Products ★</router-link>
        <router-link tag="div" class="nav-box" to="/icbc/en/enterprise">★ Companies ★</router-link>
        <router-link tag="div" class="nav-box" to="/icbc/en/crossBorder">★ Cross Border Collection ★</router-link>
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
  background: url(./images/banner-en.jpg) no-repeat center top;
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
  font-size: 26px;
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
    padding-top: 45px;
    font-size: 24px;
    color: #fff;
}
.language a{color: #fff;}
.language span{color: #ffc29f;}
.language em{padding: 0 10px;}
</style>