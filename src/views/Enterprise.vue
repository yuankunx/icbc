<template>
<div class="icbc-box">
    <div class="icbc-enterprise" v-for="item in enterprise" :key="item.id">
        <div class="enterprise-box g-f-l">
            <a :href="item.left.url" target="_blank"><img :src="item.left.logo" alt=""></a>
            <div class="enterprise-text">
                <h1><a :href="item.left.url" target="_blank">{{item.left.name}}</a></h1>
                <p>{{item.left.text}}</p>
            </div>
        </div>
        <div class="enterprise-line"></div>
        <div class="enterprise-box g-f-r">
            <a :href="item.right.url" target="_blank"><img :src="item.right.logo" alt=""></a>
            <div class="enterprise-text">
                <h1><a :href="item.right.url" target="_blank">{{item.right.name}}</a></h1>
                <p>{{item.right.text}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
      data(){
        return {
          enterprise: this.$store.state.enterprise
        }
      }
    }
</script>
<style scoped>
.icbc-box{margin: 30px 0;}
.icbc-enterprise{ width: 1190px; overflow: hidden; background-color: #fff; margin-bottom: 20px; border-radius: 5px;}
.icbc-enterprise .enterprise-box{width: 594px; overflow: hidden; box-sizing: border-box; padding: 30px;}
.icbc-enterprise .enterprise-box img{width: 120px; height: 120px; float: left; margin-right: 20px;}
.icbc-enterprise .enterprise-box .enterprise-text{ width: 394px; float: left;}
.icbc-enterprise .enterprise-box .enterprise-text h1{padding-bottom: 10px; font-size: 18px;}
.icbc-enterprise .enterprise-box .enterprise-text h1 a{color: #fb5b02; }
.icbc-enterprise .enterprise-box .enterprise-text p{line-height: 24px;}
.icbc-enterprise .enterprise-line{width: 1px; height: 115px; background-color: #dadada; float: left; margin-top: 40px;}
</style>