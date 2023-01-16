<template>
  <header>
    <nav class="topnav navbar  navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container ">
        <router-link to="/" class="navbar-brand"><strong>COMPASS</strong></router-link>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarColor02" style="">
          <ul class="navbar-nav  ml-auto d-flex align-items-center">
            <li @click="activeClick(index)" :class="{'active':active===index}" class="nav-item"
                v-for="(item,index) in navs" :key="index">
              <router-link :to="item.path" class="nav-link">
                {{ item.title }} <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li @click="getCartEvent" class="nav-item" data-bs-toggle="offcanvas"
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

  <!--  侧边栏-->
  <Drawer title="购物车">
    <div class="card mb-3 border-0 shadow-sm" v-for="(item,index) in carts" :key="index">
      <div class="row align-items-center">
        <div class="col-4">
          <img :src="item.product?.imageUrl" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-6">
          <div class="card-body">
            <h6 class="card-title">{{ item.product?.title }}</h6>
            <small class="d-block text-muted ">总价：{{
                String(item.final_total).replace(/^(.*\..{2}).*$/, "$1")
              }}元</small>
            <small class="d-block text-muted">数量：{{ item.qty }}</small>
          </div>
        </div>
        <div class="col-2">
          <i @click="deleteCartEvent(item.id)" class="bi bi-trash"></i>
        </div>
      </div>
    </div>
    <div style="height: 100px"></div>
    <div class="cart-bottom py-3 w-100">
      <div class="d-flex ">
        <h5 v-if="total!==final_total" class="border-bottom text-decoration-line-through mr-3 py-3">
          总价：{{ String(total).replace(/^(.*\..{2}).*$/, "$1") }}元</h5>
        <h5 v-else class="border-bottom mr-3 py-3">总价：{{ String(total).replace(/^(.*\..{2}).*$/, "$1") }}元</h5>
        <h5 v-if="final_total!==total" class="border-bottom text-success py-3">
          优惠价：{{ String(final_total).replace(/^(.*\..{2}).*$/, "$1") }}元</h5>
      </div>
      <div data-bs-dismiss="offcanvas" aria-label="Close" @click="toCart" class="btn-dark btn">查看购物车</div>
    </div>
  </Drawer>
</template>

<script setup>
import {computed, onMounted, onUpdated, ref} from "vue";
import {useStore} from "vuex";
import Drawer from "./Drawer.vue";
import {useRouter} from "vue-router";
import {deleteCart} from "../api/cart.js";

const router = useRouter()
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
})
</script>

<style scoped>
.cart-bottom {
  position: fixed;
  z-index: 90000;
  background: white;
  bottom: 0;
}
</style>
