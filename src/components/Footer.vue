<template>
  <div class="container mt-5">
    <footer class="bg-white border-top p-3 text-muted small">
      <div class="row align-items-center justify-content-between">
        <div>
          <span class="navbar-brand mr-2"><strong>COMPASS</strong></span> Copyright &copy;
          <span>{{ date.year }}</span>
          . 版权所有.
        </div>
        <div>
          <div class="contact  border m-2 d-inline-block rounded px-3 py-1 ">博客</div>
          <div class="contact border m-2 d-inline-block rounded px-3 py-1 ">github</div>
          <div class="contact border m-2 d-inline-block rounded px-3 py-1 ">邮箱</div>
          <div class="contact border m-2 d-inline-block rounded px-3 py-1 ">控制台</div>
        </div>
        <div>
          作者:<span  class="text-secondary font-weight-bold"> by Haruhi Suzumiya</span> 此网站为个人展示，非首页使用
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

<style scoped>

</style>
