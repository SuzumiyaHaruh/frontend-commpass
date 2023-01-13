<template>
  <!--  头部-->
  <Header/>

  <!--  main-->
  <main class="container py-5">
    <!--    面包屑-->
    <Breadcrumb/>
    <!--    油画展示-->
    <section class="mt-5">
      <!--    标题-->
      <h1>Bootstrap and Masonry</h1>
      <hr class="mb-5"/>
      <div class="row">
        <div class="col-md-6 offset-md-1">
          <img class="w-100 shadow-sm rounded h-100" src="../assets/img/demo/blog8.jpg" alt="">
        </div>
        <div class="col-md-6 d-none d-md-block offset-md-5 -top-5">
          <div class="bg-white rounded p-4 shadow-sm">
            <h2 class="mb-1 h4 font-weight-bold">
              Nearly 200 Great Barrier Reef coral species also live in the deep sea
            </h2>
            <p>
              There are more coral species lurking in the deep ocean that previously thought.
            </p>
          </div>
        </div>
        <div class="col-md-6 d-md-none d-block">
          <div class="bg-white rounded -top-1 p-4 shadow-sm">
            <h2 class="mb-1 h4 font-weight-bold">
              Nearly 200 Great Barrier Reef coral species also live in the deep sea
            </h2>
            <p>
              There are more coral species lurking in the deep ocean that previously thought.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!--  底部-->
  <Footer/>

</template>
<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
</script>

<style scoped>


</style>
