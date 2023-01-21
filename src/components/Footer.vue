<template>
  <div class="container">
    <footer class="bg-white border-top p-3 text-muted small">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="navbar-brand mr-2">
           <img  height="25" class="mb-1" src="../assets/img/Bird2.png" alt="">
            <strong style="font-family: 'Noto Serif SC'">鸟语书斋</strong></span> Copyright &copy;
          <span>{{ date.year }}</span>
          . 版权所有.
        </div>
        <div class="col-md-4">
          <a href="#" class="contact text-dark  border m-2 d-inline-block rounded px-3 py-1 ">博客</a>
          <a href="#" class="contact text-dark border m-2 d-inline-block rounded px-3 py-1 ">github</a>
          <a href="http://suzumiya.iuo.ink/" class="contact border text-dark m-2 d-inline-block rounded px-3 py-1 ">控制台</a>
        </div>
        <div class="col-md-4">
          作者:<span class="text-secondary font-weight-bold"> by Haruhi Suzumiya</span> 此网站为个人展示，非首页使用
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
let nowDate = new Date();
let date = {
  year: nowDate.getFullYear()
}
</script>

<style>
</style>
