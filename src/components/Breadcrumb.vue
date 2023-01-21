<template>
  <div class="row position-relative">
    <img src="../assets/img/footer.png"/>
    <div class="col-12 position-absolute h-100 align-items-center d-flex justify-content-center">
      <div class="text-center">
        <div class="d-none d-md-block">
          <div class="d-flex">
            <router-link class="h2 text-decoration-none fw-bold text-white" to="/">首页&nbsp|&nbsp</router-link>
            <slot/>
            <div v-for="(item,index) in state.list" :key="index">
              <a class="h2 fw-bold text-white" style="color:#cfcfcf;" v-if="index===state.list.length-1">{{ item.meta.title }}</a>
              <router-link to="item.path" style="color:#cfcfcf;" class="h2 fw-bold text-white" v-else>{{item.meta.title }}|
              </router-link>
            </div>
          </div>
        </div>
        <!--        <nav aria-label="breadcrumb " class="opacity-75 d-none d-md-block">-->
        <!--          <ol class="breadcrumb">-->
        <!--            <li class="breadcrumb-item">-->
        <!--              <router-link to="/">首页</router-link>-->
        <!--            </li>-->
        <!--            <li class="breadcrumb-item" v-for="(item,index) in state.list" :key="index">-->
        <!--              <a v-if="index===state.list.length-1">{{ item.meta.title }}</a>-->
        <!--              <router-link to="item.path" href="#" v-else>{{ item.meta.title }}</router-link>-->
        <!--            </li>-->
        <!--          </ol>-->
        <!--        </nav>-->
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive, watch} from "vue";

const route = useRoute();
const state = reactive({list: []});
//onMounted
onMounted(() => {
  let matched = route.matched;//获取菜单对应的路由信息
  state.list = matched;
})
//watch
watch(() => route.matched, (newVal, oldVal) => {
  let matched = newVal;
  state.list = matched;//更新路由菜单数组
})
</script>

<style lang="scss" scoped>
</style>
