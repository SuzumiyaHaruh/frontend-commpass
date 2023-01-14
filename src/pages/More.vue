<template>
  <!--  loading-->
  <Loading v-if="loading"/>
  <!--  导航-->
  <Header/>
  <!--  内容-->
  <main class="container py-5">
    <!--    面包屑-->
    <Breadcrumb/>
    <!--    分类-->
    <div>

      <a class="badge mr-2 text-white cursor-pointer text-grey badge-danger">全部</a>
      <a class="badge mr-2 cursor-pointer">印象</a>
      <a class="badge mr-2 cursor-pointer">抽象</a>
      <a class="badge mr-2 cursor-pointer">素描</a>
    </div>
    <hr class="mb-5"/>
    <!--    瀑布流-->
    <div id="scroll" class="row grid"
         data-masonry='{"percentPosition": true }'>
      <!--      item-->
      <div class="grid-item grid animate__animated animate__zoomIn col-sm-6 col-lg-3 mb-4"
           v-for="item in products" :key="item.id">
        <Cart :product="item"/>
      </div>
    </div>
  </main>
  <!--  底部-->
  <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Loading from "../components/Loading.vue";
import Masonry from "masonry-layout"
import {onMounted, onUnmounted, onUpdated, ref} from "vue";
import {getProducts} from "../api/products.js";
import Cart from "../components/Cart.vue";

const num = ref(1)
const products = ref([])
const totalPage = ref(1)
const loading = ref(false)
const show = ref(false)
// 获取所有商品
const getProductEvents = async (page = 1) => {
  loading.value = true
  await getProducts(page).then(res => {
    console.log(res.data)
    products.value = [...products.value, ...res.data.products]
    totalPage.value = res.data.pagination.total_pages
    loading.value = false
  })
}
// 实时滚动条高度
const onScroll = () => {
  //变量scrollTop是滚动条滚动时，距离顶部的距离
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //变量windowHeight是可视区的高度
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  //变量scrollHeight是滚动条的总高度
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  // 滚动到底部
  if (scrollTop + windowHeight >= scrollHeight) {
    num.value++
    if (num.value <= totalPage.value) {
      getProductEvents(num.value)
    }
  }
}
// 安装
onMounted(() => {
  getProductEvents()
  // 监听滚动条位置
  window.addEventListener('scroll', onScroll, true)
})
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
})
// 更新
onUpdated(() => {
  let row = document.querySelector(".row")
  // 如果图片没有加载完成会导致标签重叠
  $(row).imagesLoaded(function () {
    // 图片加载后执行的方法
    // Masonry不生效的原因和解决方案
    new Masonry(row, {
      // options
      percentPosition: true,
      itemSelector: ".col-sm-6",
    })
  });
})
</script>

<style scoped>

</style>
