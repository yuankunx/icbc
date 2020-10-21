<template>
   <div class="icbc-list" >
     <div v-for="item in this.productList" :key="item.id">
      <div class="title-box" :id="item.id">— {{item.title}} —</div>
      <div class="list-box">
          <div class="product-box" v-for="product in item.produc" :key="product.name">
             <div class="img-box"><a :href="product.url" target="_blank"><img :src="product.img" alt=""></a></div>
             <div class="product-info">
                <div class="product-title"><a :href="product.url" target="_blank">{{product.name}}</a></div>
                <div class="product-price">{{product.price}}</div>
                <div class="Price-btn"><a :href="product.url" class="btn" target="_blank">点击抢购</a></div>
             </div> 
          </div>
      </div>
     </div>
      <div class="left-nav">
         <ul>
           <li v-for="item in this.productList" :key="item.id"><a :href="'#'+item.id">{{item.title}}</a></li>
           <li><a href="#">TOP</a></li>
         </ul>
       </div>
   </div>
</template>
<script>
    export default {
      data(){
        return {
          productList: this.$store.state.productList
        }
      }
    }
</script>
<style scoped>
.icbc-list{width: 100%;}
.icbc-list .title-box{ width: 100%; height: 150px; text-align: center; line-height: 150px; font-size: 36px; color: #fff; font-weight: bold;}
.icbc-list .list-box{ width: 100%; display: flex; justify-content: space-between;}
.icbc-list .list-box .product-box{width: 282px; height: 430px;  background-color:#fff; border-radius: 5px; overflow: hidden;}
.icbc-list .list-box .product-box .img-box{width: 282px; height: 282px; background-color: #f0f0f0;}
.icbc-list .list-box .product-box .product-info{padding:10px 20px;}
.icbc-list .list-box .product-box .product-info .product-title{height: 40px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;}
.icbc-list .list-box .product-box .product-info .product-price{height: 40px; line-height: 40px; font-size: 16px; color: #ff4e53;}
.icbc-list .list-box .product-box .product-info .Price-btn{margin-top: 15px;}
.icbc-list .list-box .product-box .product-info .Price-btn .btn{padding: 6px 92px; background-color: #ff4e53; color: #fff; border: none;
border-radius: 5px; text-decoration: none;}
.left-nav{width: 150px; overflow: hidden; font-size: 16px; position: fixed; top: 500px; left: 0; background-color: #fb5b02; text-align: center;}
.left-nav li{height: 40px; line-height: 40px;}
.left-nav li:nth-child(even){background-color: #eb5502;}
.left-nav li a{color: #fff; display: block; text-decoration: none;}
</style>
