<template>
  <header>
    <nav class="topnav navbar  navbar-expand-lg  bg-dark opacity-75 fixed-top">
      <div class="container ">
        <router-link to="/" class="navbar-brand text-white align-items-center">
          <img v-if="!showLogo" height="25" class="mb-1" src="../assets/img/Bird.png" alt="">
          <img v-if="showLogo" height="25" class="mb-1" src="../assets/img/Bird2.png" alt="">
          <strong style="font-family: 'Noto Serif SC'">鸟语书斋</strong></router-link>
        <button @click="showToggler=!showToggler" class="navbar-toggler" type="button">
          <i class="bi text-white fw-bold bi-filter-left"></i>
        </button>
        <div class="navbar-collapse animate__animated animate__fadeInDown" :class="{'collapse':showToggler}"
             id="navbarColor02" style="">
          <ul class="navbar-nav   ml-auto d-flex align-items-center">
            <li @click="activeClick(index)" :class="{'active-1':active===index}" class="nav-item "
                v-for="(item,index) in navs" :key="index">
              <router-link :to="item.path" class="nav-link text-white">
                {{ item.title }} <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li @click="toCart" class="nav-item cursor-pointer text-white" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions">
              <a class="nav-link   h3">
                <i class="bi position-relative bi-cart ">
                  <span class=" shop-cart-tab translate-middle badge text-white bg-danger">{{ productNum }}</span>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {computed, onMounted, onUpdated, ref} from "vue";
import {useStore} from "vuex";
import Drawer from "./Drawer.vue";
import {useRoute, useRouter} from "vue-router";
import {deleteCart} from "../api/cart.js";

const showLogo = ref(false)
const showToggler = ref(true)
const router = useRouter()
const route = useRoute()
const store = useStore()
const total = computed(() => store.state.cart.total)
const final_total = computed(() => store.state.cart.final_total)
const carts = computed(() => store.state.cart.carts)
const active = computed(() => store.state.active)
const productNum = computed(() => store.state.cart.getProductNum)
const activeClick = (index) => {
  store.commit('getActive', index)
}
const deleteCartEvent = (id) => {
  deleteCart(id).then((res) => {
    if (res.data.success) {
      store.dispatch('getCartEvent')
    }
  })
}
const navs = ref([
  {
    path: '/',
    title: '首页'
  },
  {
    path: '/more',
    title: '全部'
  },
  {
    path: '/about',
    title: '关于'
  }
])
const toCart = () => {
  router.push('/cart')
}
onMounted(() => {
  store.dispatch('getCartEvent')
  if (route.path === '/cart'||route.path === '/order'||route.path.indexOf('order_complete')) {
    $(".navbar").addClass("bg-white");
    $(".navbar").addClass("bg-white");
    $(".navbar-brand").removeClass("text-white");
    $(".navbar").removeClass("opacity-75");
    $(".nav-link").removeClass("text-white");
    $(".nav-item").removeClass("text-white");
  }
  $().ready(function () {
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();//获取当前滑动的位置
      if (route.path === '/cart'||route.path === '/order'||route.path.indexOf('order_complete')) {
        $(".navbar").addClass("bg-white");
        $(".navbar").addClass("bg-white");
        $(".navbar-brand").removeClass("text-white");
        $(".navbar").removeClass("opacity-75");
        $(".nav-link").removeClass("text-white");
        $(".nav-item").removeClass("text-white");
      }
      else if (scrollTop > 69.75) {
        showLogo.value = true
        $(".navbar").addClass("bg-white");
        $(".navbar").addClass("bg-white");
        $(".navbar-brand").removeClass("text-white");
        $(".navbar").removeClass("opacity-75");
        $(".nav-link").removeClass("text-white");
        $(".nav-item").removeClass("text-white");
        $(".bi-filter-left").removeClass("text-white");

      } else {
        showLogo.value = false
        $(".navbar").removeClass("bg-white");
        $(".navbar").addClass("opacity-75");
        $(".nav-item").addClass("text-white");
        $(".nav-link").addClass("text-white");
        $(".navbar-brand").addClass("text-white");
        $(".bi-filter-left").addClass("text-white");
      }
      // }
    })
  })
})
</script>

<style scoped>
.cart-bottom {
  position: fixed;
  z-index: 90000;
  background: white;
  bottom: 0;
}

.active-1 {
  font-weight: bold;
}

.fw-bold {
  font-weight: bold;
}
</style>
