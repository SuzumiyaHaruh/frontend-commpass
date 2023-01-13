<template>
  <!--  header-->
  <Header/>
  <!--  main-->
  <main>
    <!--    slider-->
    <section class="container mt-5 mb-5">
      <div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
        <div class="pl-4 pr-0 h-100 tofront">
          <div class="row justify-content-between">
            <div class="col-md-6 pt-6 pb-6 align-self-center">
              <h1 class="mb-3 font-weight-bold">世界的每一瞬间</h1>
              <h1 class="font-weight-bold">———都是一幅画。</h1>
              <p class="mb-3">
                除了艺术之外，没有更妥善的逃世之方；而要与世界联系，也没有一种方法比艺术更好。
              </p>
              <a href="./article.html" class="btn btn-dark">立即订阅</a>
            </div>
            <div class="col-md-6 img d-none d-md-block pr-0">

            </div>
          </div>
        </div>
      </div>
    </section>



  </main>
  <!--  footer-->
  <Footer/>
</template>

<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
</script>

<style scoped>
.img {
  background-size: cover;
  background-image: url(../assets/img/demo/home.jpg);
}

</style>
