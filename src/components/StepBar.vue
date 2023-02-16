<template>
  <div class="text-center mb-5 d-flex align-items-center justify-content-center">
    <div class="p-2 py-md-2-2 px-md-6" :class="{'bg-secondary text-white' :active===0}">
      <span class="d-block ">STEP 01</span>
      <span class="d-block">确认订单信息</span>
    </div>
    <div :class="{'bg-secondary text-white ' :active===1}" class="p-2 py-md-2-2 px-md-6">
      <span class="d-block ">STEP 02</span>
      <span class="d-block">输入订单资料</span>
    </div>
    <div :class="{'bg-secondary text-white ' :active===2}" class="p-2 py-md-2-2 px-md-6">
      <span class="d-block ">STEP 03</span>
      <span class="d-block">付款/完成订单</span>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue"
import {useRouter} from "vue-router";

const active = ref(0)
const router = useRouter()
watch(() => router.currentRoute.value.path, (newValue,oldValue) => {
  console.log(newValue)
  if (newValue === "/cart") {
    active.value = 0
  }
  if (newValue === "/order") {
    active.value = 1
  }
  if (newValue !=='/cart'&& newValue !=='/order') {
     active.value = 2
   }
}, {immediate: true, deep: true})
</script>

<style scoped>

</style>
