<template>
  <div class="card  cursor-pointer border-0 ">
    <div class="overflow-hidden rounded shadow position-relative">
      <img :src="product.imageUrl" alt="" class="rounded card-img-top">
    </div>
    <div class="card-body position-relative">
      <h2 class="mb-1 h4 font-weight-bold">
        <router-link :to='`/detail/${product.id}`' class="text-dark">{{product.title}}</router-link>
      </h2>
      <div>
        <span class="card-text h6  mr-3">{{ product.price }}元</span>
        <span class="card-text text-grey h7 line-through">{{ product.origin_price }}元</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.rounded-0 {
  /*border-radius: 0;*/
}
</style>
