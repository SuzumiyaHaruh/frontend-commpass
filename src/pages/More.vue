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

      <a @click="setCategory('',-1)" class="badge mr-2 cursor-pointer text-grey"
         :class="{'text-white   badge-danger':showTab===-1}">全部</a>
      <a @click="setCategory(item,index)" class="badge mr-2 cursor-pointer"
         :class="{'text-white   badge-danger':showTab===index}" v-for="(item,index) in category"
         :key="index">{{ item }}</a>
    </div>
    <hr class="mb-5"/>
    <!--    瀑布流-->
    <div id="scroll" class="row grid">
      <!--      item-->
      <div class="grid-item animate__animated animate__zoomIn col-sm-6 col-lg-3 mb-4"
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
import Cart from "../components/Card.vue";

const showTab = ref(-1)
const num = ref(1) //加载计数
const products = ref([])//商品列表
const totalPage = ref(1)//分页
const loading = ref(false)//loading
const show = ref(false)
const category = ref(['漫画','科普','文学','文化'])//分类
const productCategory = ref([])//
const ctyMark = ref('')
// 获取所有商品
const getProductEvents = async (page = 1) => {
  loading.value = true
  await getProducts(page).then(res => {
    // 获取商品列表
    products.value = [...products.value, ...res.data.products]
    productCategory.value = products.value

    //下拉加载新商品并合并
    totalPage.value = res.data.pagination.total_pages

    loading.value = false
  })
}
const setCategory = (cty, index) => {
  showTab.value = index
  ctyMark.value = cty
  if (cty) {
    products.value = productCategory.value.filter(item => item.category === cty)
  } else {
    products.value = productCategory.value
  }
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
      setCategory(ctyMark.value, showTab.value)
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
    let grid = document.querySelector(".grid")
    // 如果图片没有加载完成会导致标签重叠
    $(grid).imagesLoaded(function () {
      // 图片加载后执行的方法
      // Masonry不生效的原因和解决方案
      new Masonry(grid, {
        // options
        percentPosition: true,
        itemSelector: ".grid-item",
      })
    });
})
</script>

<style scoped>

</style>
