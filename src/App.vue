<script setup>

</script>

<template>
  <transition mode="out-in"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
  >
    <router-view/>
  </transition>
</template>

<style>

</style>
