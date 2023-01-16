<template>
  <!--  loading-->
  <Loading v-if="loading"/>
  <!--  header-->
  <Header/>
  <!--  main-->
  <main>
    <!--    slider-->
    <section class="container mt-5 mb-5">
      <div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
        <div class="pl-4 pr-0 h-100 tofront">
          <div class="row justify-content-between">
            <div class="col-md-6 pt-6 pb-6 align-self-center">
              <h1 class="mb-3 font-weight-bold">世界的每一瞬间</h1>
              <h1 class="font-weight-bold">———都是一本书。</h1>
              <p class="mb-3">
                除了文字之外，没有更妥善的逃世之方；而要与世界联系，也没有一种方法比文字更好。
              </p>
              <router-link to="/more" @click="$store.commit('getActive',1)" class="btn btn-dark">立即订阅</router-link>
            </div>
            <div class="col-md-6 img d-none  d-md-block pr-0">

            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    最新大作-->
    <section class="container pt-4 pb-4">
      <h5 class="font-weight-bold spanborder"><span>最新大作</span></h5>
      <div class="row">
        <!--        item-->
        <div class="col-lg-6" v-for="item in products" :key="item.id">
          <div class="mb-3 d-flex align-items-center">
            <div class="cover hw" :style="{ backgroundImage: `url(${item.imageUrl})` }">
            </div>
            <div class="pl-3">
              <h2 class="mb-2 h6 font-weight-bold">
                <a class="text-dark cursor-pointer text-overflow-1">简介：{{ item.description }}</a>
              </h2>
              <div class="card-text text-muted small">
                书名：{{ item.title }}
              </div>
              <small class="text-muted">作者：{{ item.unit }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row justify-content-between">
        <div class="col-md-8">
          <h5 class="font-weight-bold spanborder"><span>所有分类</span></h5>
          <div class="mb-3 d-flex justify-content-between">
            <div class="pr-3">
              <h2 class="mb-1 h4 font-weight-bold">
                <a class="text-dark" href="./article.html">文学</a>
              </h2>
              <p>
                There are more coral species lurking in the deep ocean that previously thought.
              </p>
              <div class="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small class="text-muted">Dec 12 &middot; 5 min read</small>
            </div>
            <img height="120" src="../assets/img/demo/blog8.jpg">
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <div class="pr-3">
              <h2 class="mb-1 h4 font-weight-bold">
                <a class="text-dark" href="./article.html">漫画</a>
              </h2>
              <p>
                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East
                Antarctica.
              </p>
              <div class="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small class="text-muted">Dec 12 &middot; 5 min read</small>
            </div>
            <img height="120" src="../assets/img/demo/1.jpg">
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <div class="pr-3">
              <h2 class="mb-1 h4 font-weight-bold">
                <a class="text-dark" href="./article.html">科学</a>
              </h2>
              <p>
                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East
                Antarctica.
              </p>
              <div class="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small class="text-muted">Dec 12 &middot; 5 min read</small>
            </div>
            <img height="120" src="../assets/img/demo/5.jpg">
          </div>
        </div>
        <div class="col-md-4 pt-5 pb-6 pr-6 align-self-center">
          <p class="text-uppercase font-weight-bold">
            <a class="text-danger" href="./category.html">Stories</a>
          </p>
          <h1 class="display-4 secondfont mb-3 font-weight-bold">Sterling could jump 8% if Brexit deal gets approved by
            UK Parliament</h1>
        </div>
      </div>
    </section>
    <section class="container">
      <vue3-seamless-scroll
          :step="0.5"
          direction="left"
          :list="listData"
          :class-option="classOption"
          class="warp"
      >
        <div class="item-list">
          <div class="item" v-for="(item, index) in listData" :key="index">
            {{ item }}
          </div>
        </div>
      </vue3-seamless-scroll>
    </section>
  </main>
  <!--  footer-->
  <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
import {getProducts} from "../api/products.js";
import {onMounted, reactive, ref} from "vue";
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";

const loading = ref(false)
const products = ref([])
const classOption = {
  limitMoveNum: 2,
  direction: 3,
}
const listData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const getProductEvents = async () => {
  loading.value = true
  await getProducts(1).then(res => {
    products.value = res.data.products.splice(0, 6)
    loading.value = false
  })
}
onMounted(() => {
  getProductEvents()
})
</script>

<style lang="scss" scoped>
.img {
  border: none;
  background-size: cover;
  background-image: url(../assets/img/s33654945.jpg);
}

.cover {
  background-size: cover;
}

.hw {
  height: 80px;
  width: 120px;
  min-width: 120px;
  min-height: 80px;
}

.mt-75 {
  margin-top: 75px;
}

.rounded-0 {
  border-radius: 0;
}

.scroll {
  /*margin: 100px auto;*/
  margin: 0 auto;
  overflow: hidden;
}

.scroll .item {
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: space-between;*/
  /*padding: 3px 0;*/
}
.warp {
  //width: 130px * 4;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    &.item-list {
      display: flex;
      .item {
        width: 120px;
        height: 120px;
        margin-right: 10px;
        line-height: 120px;
        background-color: #999;
        color: #fff;
        text-align: center;
        font-size: 30px;
      }
    }
  }
}
</style>
