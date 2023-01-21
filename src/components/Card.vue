<template>
  <div data-animate-hover="2" class="item animate-this position-relative animate__animated  animate__fadeIn">
    <div>
        <img alt="Image placeholder" class="img-fluid rounded shadow-sm" :src="item.imageUrl">
        <div class="glass-box d-flex flex-column align-items-center justify-content-center position-absolute rounded w-100 h-100 top-0 start-0 animate__animated  animate__fadeIn">
          <i @click="$router.push(`/detail/${item.id}`)" class="search cursor-pointer fs-1   animate__animated  animate__fadeIn bi bi-search-heart"></i>
          <h6 class="search   py-2 fw-bold animate__animated animate__fadeInUp">{{item.title}}</h6>
        </div>
    </div>
  </div>
  <!--  <div @click="$router.push(`/detail/${product.id}`)" class="card  cursor-pointer border-0 ">-->
  <!--    <div class="overflow-hidden rounded shadow position-relative">-->
  <!--      <img :src="product.imageUrl" alt="" class="rounded card-img-top">-->
  <!--    </div>-->
  <!--    <div class="card-body position-relative">-->
  <!--      <h6 class="mb-1 fw-bold">-->
  <!--        {{product.title}}-->
  <!--      </h6>-->
  <!--      <div>-->
  <!--        <span class="card-text h6  mr-3">￥{{ product.price }}</span>-->
  <!--        <span class="card-text text-grey h7 line-through">￥{{ product.origin_price }}</span>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default() {
      return {}
    }}
})
</script>

<style scoped>
.rounded-0 {
  /*border-radius: 0;*/
}

.item :hover > .glass-box {
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}

.glass-box > .search {
  display: none;
}

.item :hover > .search {
  display: block;
}

</style>
