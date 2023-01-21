<template>
  <Loading v-if="loading"/>
  <!--  头部-->
  <Header/>
  <!--    面包屑-->
  <Breadcrumb>
    <router-link class="h2 text-decoration-none fw-bold text-white" to="/more">全部&nbsp|&nbsp</router-link>
  </Breadcrumb>
  <main class="container py-5">
    <!-- 面包屑-->
    <hr/>
    <!--    内容-->
    <section class="container mt-4 mb-5 animate__animated animate__zoomIn animate__delay-1s">
      <div class="row">
        <div class="col-md-6 ">
          <div class="container w-75 group">
            <a class="book-container">
              <div class="book" :style="{'--background':`url(${productDetail.imageUrl})`}">
                <div class="book-cover">
                  <!-- 书的正面图 -->
                  <img :src="productDetail.imageUrl" alt=""/>
                </div>
                <div class="book-spine" :style="{ backgroundImage: `url(${productDetail.imageUrl})` }">
                  <h1>{{ productDetail.title }}</h1>
                </div>
              </div>
            </a>
          </div>
          <div style="text-align:center;clear:both"><br></div>
        </div>
        <div class="col-md-6 pb-6 align-self-center">
          <h1 class="mb-3 font-weight-bold">{{ productDetail.title }}</h1>
          <div class="mb-2">
            <span class="card-text fw-bold h4 line-through mr-3">￥{{ productDetail.origin_price }}</span>
            <span class="card-text fw-bold text-secondary h4 ">￥{{ productDetail.price }}</span>
          </div>
          <div class="badge badge-danger mb-3">{{ productDetail.category }}</div>
          <p class="fs-7 text-grey-bright">{{ productDetail.description }}</p>
          <h6>作者：{{ productDetail.unit }}</h6>

          <div class="d-flex mt-md-4">
            <select class="form-control w-120  mr-3 " v-model="productNum">
              <option :value="num" v-for="num in 5" :key="num">选购{{ num }}本</option>
            </select>
            <div @click="addCartEvent(productDetail.id,productNum)" class="btn btn-secondary">加入购物车</div>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <i class="bi mr-4 fs-3 bi-twitter"></i>
            <i class="bi mr-4 fs-3  bi-instagram"></i>
            <i class="bi mr-4 fs-3 bi-facebook"></i>
          </div>
        </div>
      </div>
      <div class="mt-md-5">
<!--        <h5 class="font-weight-bold cursor-pointer spanborder">-->
<!--          <span @click="showIdt =1" class="text-grey" :class="{'active':showIdt===1,'border-0':showIdt===2}">介绍</span>-->
<!--          <span @click="showIdt =2" class="text-grey ml-3"-->
<!--                :class="{'text-dark':showIdt===2,'border-0':showIdt===1}">说明</span></h5>-->
<!--        <p v-if="showIdt===1"></p>-->
<!--        <p v-else>-->
<!--        </p>-->
      </div>
    </section>

  </main>
  <section class="bg-section-secondary">
    <h4 class="text-center fw-bold py-4">---- 为你推荐 ----</h4>
    <div class="container">
      <div class="fw-bold py-3 cursor-pointer  text-right"><router-link class="text-secondary" to="/more"><i class="bi mr-2 bi-arrow-right-short"></i>查看更多</router-link></div>
      <div ref="scrollRef" class="row">
        <div class=" animate__animated  animate__fadeIn  col-lg-3 col-6 col-md-4 mb-5" v-for="item in products"
             :key="item.id">
          <Card :item="item"/>
        </div>
      </div>
    </div>
  </section>
  <Discounts/>
  <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import {getProduct, getProductsAll} from "../api/products.js";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import Loading from "../components/Loading.vue";
import {addCart} from "../api/cart.js";
import {useStore} from "vuex";
import Nav from "../components/Nav.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import {ElNotification} from 'element-plus'
import Discounts from "../components/Discounts.vue";
import Card from "../components/Card.vue";
const productNum = ref(1)
const store = new useStore()
const route = useRoute()
const loading = ref(false)
const productDetail = ref({})
let showIdt = ref(1)
const id = ref('')
const idArray = ref([])
const products=ref([])
// 获取所有商品
const getProductEvents = async () => {
  await getProductsAll().then(res => {
    // 获取商品列表
    products.value = res.data.products.slice(0,4)
  })
}
//获取订单详情
const getProductEvent = async (id) => {
  loading.value = true
  await getProduct(id).then(res => {
    productDetail.value = res.data.product
    loading.value = false
  })
}
//加入购物车
const addCartEvent = async (id, num) => {
  await addCart({data: {product_id: id, qty: num}}).then(res => {
    if (res.data.success) {
      ElNotification({
        title:'提示',
        message: '加入购物车成功',
        type: 'success',
        duration:2000
      })
      store.dispatch('getCartEvent')
    }
  })
}
onMounted(() => {
  id.value = route.params.id
  getProductEvent(id.value)
  getProductEvents()
})
</script>

<style scoped>
.w-120 {
  width: 120px;
}

.group:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

* html .group {
  height: 1%;
}

*:first-child + html .group {
  min-height: 1px;
}

body {
  line-height: 1.9em;
  color: #fff;
  background-color: #0b3065;
  background-size: cover;
  font-family: arial,
  sans-serif;
}

.container {
  /*max-width: 60em;*/
  /*margin: 0 auto;*/
  /*padding: 0 2em;*/
}

.fs-7 {
  font-size: 14px;
}

.text.container {
  max-width: 38em;
  text-align: center;
  margin: 50px auto 100px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
}

.text-grey-bright {
  color: #898b98;
}

a {
  color: #da9803;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1.main-title {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  font-weight: normal;
  margin: 1.25em;
  text-align: center;
  font-size: 2.75em;
  letter-spacing: -1px;
}

p {
  margin-bottom: 1em;
  font-size: 1.25em;
}

hr {
  margin: 2em 0;
}

.book-container {
  /*width: 375px;*/
  /*margin: 0 auto;*/
  display: block;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  perspective: 1200px;
}

.book {
  z-index: 5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.75s;
  -moz-transition: 0.75s;
  transition: 0.75s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 125px 0;
  -moz-transform-origin: 125px 0;
  transform-origin: 125px 0;
}

.book:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  width: 7px;
  /* 翻页转角处的图片 */
  background: var(--background) repeat-y;
  z-index: 20;
  -webkit-transform: translateZ(1px);
}

.book:hover {
  -webkit-transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(45deg);
  -moz-transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(45deg);
  transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(45deg);
}

.book-cover {
  position: relative;
  z-index: 10;
}

.book-cover img {
  vertical-align: bottom;
  max-width: 100%;
  height: auto;
}

.book-spine {
  position: absolute;
  color: #fff;
  position: absolute;
  bottom: 0;
  top: 0;
  width: 50px;
  z-index: 5;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  /* 书的侧面图片 */
  background: -64px 0 no-repeat;
  background-size: auto 100%;
  -webkit-transform: rotateY(-90deg) translateX(-49px);
  -moz-transform: rotateY(-90deg) translateX(-49px);
  transform: rotateY(-90deg) translateX(-49px);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  transform-origin: 0 0;
}

.book-spine h1 {
  display: block;
  width: 325px;
  text-align: left;
  color: #fff;
  position: absolute;
  top: 0;
  left: 39px;
  text-indent: 43px;
  text-transform: uppercase;
  font-family: "league_gothic_condensedRg", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2em;
  opacity: 0.75;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-transform: rotateZ(90deg);
  -moz-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  transform-origin: 0 0;
}

.book-spine:before {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.spanborder > .active {
  font-weight: bold;
  color: black;
}
</style>
