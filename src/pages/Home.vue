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
  </main>
  <!--  footer-->
  <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
import {getProductsAll} from "../api/products.js";
import {onMounted, ref} from "vue";

const loading = ref(false)
const products = ref([])
const getProductEvents = async () => {
  loading.value = true
  await getProductsAll().then(res => {
    products.value = res.data.products.splice(0, 6)
    loading.value = false
    console.log(products)
  })
}
onMounted(() => {
  getProductEvents()
})
</script>

<style scoped>
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
</style>
