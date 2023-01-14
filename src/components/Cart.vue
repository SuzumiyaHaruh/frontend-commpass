<template>
  <div class="card rounded-0 cursor-pointer border-0 ">
    <div class="overflow-hidden position-relative">
      <img :src="product.imageUrl" alt="" class="rounded-0 card-img-top">
    </div>
    <div class="card-body position-relative">
      <h2 class="mb-1 h4 font-weight-bold">
        <router-link :to='`/detail/${product.id}`' class="text-dark">{{product.title}}</router-link>
      </h2>
      <div>
        <span class="card-text h6  mr-3">$NT{{ product.price }}</span>
        <span class="card-text text-grey h7 line-through">$NT{{ product.origin_price }}</span>
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
  border-radius: 0;
}
</style>
