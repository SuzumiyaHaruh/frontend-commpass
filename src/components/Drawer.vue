<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
       aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">{{ title }}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <slot/>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
</script>

<style scoped>
.offcanvas-body::-webkit-scrollbar {
  width: 0 !important;
}
</style>
