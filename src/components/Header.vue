<template>
  <header>
    <nav class="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="./index.html"><strong>COMPASS</strong></a>
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
            <li class="nav-item">
              <a class="nav-link   h3" href="./">
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
</template>

<script setup>
import {computed, onMounted, onUpdated, ref} from "vue";
import {useStore} from "vuex";

const store = useStore()

const active = computed(() => store.state.active)
const productNum = computed(() => store.state.cart.getProductNum)
// const carts = computed(() => store.state.carts)
const activeClick = (index) => {
  store.commit('getActive', index)
  console.log(store.state.active)
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
onMounted(() => {
  store.dispatch('getCartEvent')
})
</script>

<style scoped>

</style>
