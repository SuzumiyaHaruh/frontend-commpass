<!--&lt;!&ndash;//////////////删除瀑布流写法////////////////////////////&ndash;&gt;-->
<!--<template>-->
<!--  &lt;!&ndash;  loading&ndash;&gt;-->
<!--  <Loading v-if="loading"/>-->
<!--  &lt;!&ndash;  导航&ndash;&gt;-->
<!--  <Header/>-->
<!--  &lt;!&ndash;    面包屑&ndash;&gt;-->
<!--  <Breadcrumb/>-->
<!--  &lt;!&ndash;  内容&ndash;&gt;-->
<!--  <main class="container py-5">-->
<!--    &lt;!&ndash;    分类&ndash;&gt;-->
<!--    <div>-->

<!--      <a @click="setCategory('',-1)" class="badge mr-2 cursor-pointer text-grey"-->
<!--         :class="{'text-white   badge-danger':showTab===-1}">全部</a>-->
<!--      <a @click="setCategory(item,index)" class="badge mr-2 cursor-pointer"-->
<!--         :class="{'text-white   badge-danger':showTab===index}" v-for="(item,index) in category"-->
<!--         :key="index">{{ item }}</a>-->
<!--    </div>-->
<!--    <hr class="mb-5"/>-->
<!--    &lt;!&ndash;    瀑布流&ndash;&gt;-->
<!--    &lt;!&ndash;    <div id="scroll" class="row grid">&ndash;&gt;-->
<!--    &lt;!&ndash;      &lt;!&ndash;      item&ndash;&gt;&ndash;&gt;-->
<!--    &lt;!&ndash;      <div class="grid-item animate__animated animate__zoomIn col-sm-6 col-lg-3 mb-4"&ndash;&gt;-->
<!--    &lt;!&ndash;           v-for="item in products" :key="item.id">&ndash;&gt;-->
<!--    &lt;!&ndash;        <Cart :item="item"/>&ndash;&gt;-->
<!--    &lt;!&ndash;      </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <div id="scroll" class="row ">-->
<!--      &lt;!&ndash;      item&ndash;&gt;-->
<!--      <div class="animate__animated animate__fadeIn col-sm-4 col-6 col-lg-3 mb-4"-->
<!--           v-for="item in products" :key="item.id">-->
<!--        <Cart :item="item"/>-->
<!--      </div>-->
<!--    </div>-->
<!--  </main>-->
<!--  &lt;!&ndash;  底部&ndash;&gt;-->
<!--  <Footer/>-->
<!--</template>-->

<!--<script setup>-->
<!--import Header from "../components/Header.vue";-->
<!--import Footer from "../components/Footer.vue";-->
<!--import Breadcrumb from "../components/Breadcrumb.vue";-->
<!--import Loading from "../components/Loading.vue";-->
<!--import Masonry from "masonry-layout"-->
<!--import {onMounted, onUnmounted, onUpdated, ref} from "vue";-->
<!--import {getProducts} from "../api/products.js";-->
<!--import Cart from "../components/Card.vue";-->

<!--const showTab = ref(-1)-->
<!--const num = ref(1) //加载计数-->
<!--const products = ref([])//商品列表-->
<!--const totalPage = ref(1)//分页-->
<!--const loading = ref(false)//loading-->
<!--const show = ref(false)-->
<!--const category = ref(['漫画', '科普', '文学'])//分类-->
<!--const productCategory = ref([])//-->
<!--const ctyMark = ref('')-->
<!--// 获取所有商品-->
<!--const getProductEvents = async (page = 1) => {-->
<!--  loading.value = true-->
<!--  await getProducts(page).then(res => {-->
<!--    // 获取商品列表-->
<!--    products.value = [...products.value, ...res.data.products]-->
<!--    productCategory.value = products.value-->

<!--    //下拉加载新商品并合并-->
<!--    totalPage.value = res.data.pagination.total_pages-->

<!--    loading.value = false-->
<!--  })-->
<!--}-->
<!--const setCategory = (cty, index) => {-->
<!--  showTab.value = index-->
<!--  ctyMark.value = cty-->
<!--  if (cty) {-->
<!--    products.value = productCategory.value.filter(item => item.category === cty)-->
<!--  } else {-->
<!--    products.value = productCategory.value-->
<!--  }-->
<!--}-->
<!--const debounce = (fn, delay) => {-->
<!--  let timer = null; //借助闭包-->
<!--  return function () {-->
<!--    if (timer) {-->
<!--      clearTimeout(timer);-->
<!--    }-->
<!--    timer = setTimeout(fn, delay); // 简化写法-->
<!--  };-->
<!--}-->
<!--// 实时滚动条高度-->
<!--const onScroll = () => {-->
<!--  //变量scrollTop是滚动条滚动时，距离顶部的距离-->
<!--  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;-->
<!--  //变量windowHeight是可视区的高度-->
<!--  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;-->
<!--  //变量scrollHeight是滚动条的总高度-->
<!--  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;-->
<!--  // 滚动到底部-->
<!--  if (scrollTop + windowHeight >= scrollHeight - 200) {-->
<!--    num.value++-->
<!--    if (num.value <= totalPage.value) {-->
<!--      getProductEvents(num.value)-->
<!--      setCategory(ctyMark.value, showTab.value)-->
<!--    }-->
<!--  }-->
<!--}-->


<!--// 安装-->
<!--onMounted(() => {-->
<!--  getProductEvents()-->
<!--  // 监听滚动条位置-->
<!--  window.addEventListener('scroll', debounce(onScroll, 500), true)-->
<!--})-->
<!--onUnmounted(() => {-->
<!--  window.removeEventListener("scroll", onScroll)-->
<!--})-->
<!--// 更新-->
<!--onUpdated(() => {-->
<!--  let grid = document.querySelector(".grid")-->
<!--  // 如果图片没有加载完成会导致标签重叠-->
<!--  $(grid).imagesLoaded(function () {-->
<!--    // 图片加载后执行的方法-->
<!--    // Masonry不生效的原因和解决方案-->
<!--    new Masonry(grid, {-->
<!--      // options-->
<!--      percentPosition: true,-->
<!--      itemSelector: ".grid-item",-->
<!--    })-->
<!--  });-->
<!--})-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template class="">
  <!--  loading-->
  <Loading v-if="loading"/>
  <!--  导航-->
  <Header/>
  <!--    面包屑-->
  <Breadcrumb/>
  <!--  内容-->
  <main>
    <!--    标签-->
    <section class="py-5 container">
      <div>
        <span v-for="(item,index) in category" :class="{'badge-danger text-white':index===active}" :key="item"
              @click="setCategory(item,index)" class="badge  cursor-pointer text-dark mr-2">{{ item }}</span>
      </div>
    </section>

    <!--    商品列表-->
    <section class="py-5 bg-section-secondary ">
      <div class="container">
        <div ref="scrollRef" class="row">
          <div class=" animate__animated  animate__fadeIn  col-lg-3 col-6 col-md-4 mb-5" v-for="item in products"
               :key="item.id">
            <Card :item="item"/>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Discounts/>
  <Footer/>
</template>

<script setup>
import Loading from "../components/Loading.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Header from "../components/Header.vue";
import {onMounted, onUnmounted, ref} from "vue";
import Footer from "../components/Footer.vue";
import {getProducts, getProductsAll} from "../api/products.js";
import Card from "../components/Card.vue";
import Discounts from "../components/Discounts.vue";

const scrollRef = ref(null)
const loading = ref(true)
const products = ref([])
const category = ref(['全部', '文学', '科学', '漫画'])
const active = ref(0)
const productCategory = ref([])
// 获取所有商品
// 获取所有商品
const getProductEvents = async () => {
  loading.value = true
  await getProductsAll().then(res => {
    // 获取商品列表
    productCategory.value = res.data.products
    products.value = productCategory.value
    loading.value = false
  })
}
const setCategory = (cty, index) => {
  active.value=index
  if (cty === '全部') {
    products.value = productCategory.value
  } else {
    products.value = productCategory.value.filter(item => item.category === cty)
  }
}
//防抖
// const debounce = (fn, delay) => {
//   let timer = null; //借助闭包
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(fn, delay); // 简化写法
//   };
// }
// const handleScroll = () => {
//   let scrollTop = document.documentElement.scrollTop//滚动条在Y轴滚动过的高度
//   let scrollHeight = document.documentElement.scrollHeight//滚动条的高度
//   let clientHeight = document.documentElement.clientHeight//浏览器的可视高度
//   //so 判断滚动条到底部的判断条件就是
//   //scrollTop+clientHeight==scrollHeight
//   // console.log('滚动高度',document.documentElement.scrollHeight)
//   // console.log('浏览器的可视高度',document.documentElement.clientHeight)
//   // console.log('距离顶部的高度u',scrollTop)
//   if (scrollTop + clientHeight >= scrollHeight - 10) {
//     // console.log('滚动到底部了')
//     num.value++
//     if (num.value <= totalPage.value) {
//       getProductEvents(num.value)
//       setCategory(ctyMark.value, showTab.value)
//     }
//   }
// }
onMounted(() => {
  getProductEvents()
  // window.addEventListener('scroll', debounce(handleScroll, 500))
})
</script>

<style lang="scss" scoped>
// Images as card backgrounds
.scroller {
  height: 100%;
}

.card-img-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-size: cover;
  //border-radius: $card-border-radius;
  -webkit-backface-visibility: hidden;
  //@include transition($transition-base);

  & ~ .card-body {
    position: relative;
  }
}

.card {
  &:hover {
    .card-img-bg {
      transform: scale(1.1);
    }
  }
}

// IE fixes

.card {
  .card-image,
  .animate-this,
  > a {
    min-height: 1px;
  }
}


</style>
