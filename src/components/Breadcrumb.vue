<template>
  <div class="my-3">
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item" v-for="(item,index) in state.list" :key="index">
          <a v-if="index===state.list.length-1">{{ item.meta.title }}</a>
          <router-link to="item.path" href="#" v-else>{{ item.meta.title }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive, toRefs, watch} from "vue";

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

<style scoped>

</style>
