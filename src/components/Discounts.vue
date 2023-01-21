<template>
  <div style="height: 150px" class="img-1">
    <div class="d-flex flex-column h-100 w-100 justify-content-center align-items-center">
      <h2 class="fw-bold d-none  d-md-block">訂閱我們以獲得更多優惠資訊</h2>
      <h4 class="fw-bold d-md-none ">訂閱我們以獲得更多優惠資訊</h4>
      <div class="input-group w-50 py-2">
        <input type="text" class="form-control" placeholder="输入Email以获取优惠码" aria-label="Recipient's username"
               aria-describedby="button-addon2">
        <div class="input-group-append ">
          <button class="btn btn-secondary" type="button" @click="showModal" id="button-addon2">获取</button>
        </div>
      </div>
    </div>
  </div>
  <!--  Modal-->
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">优惠券</h5>
          <button type="button" @click="hideModal" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <img src="../assets/img/yhm.png">
          你的专属优惠码是：<span class="fw-bold text-secondary">XNKL</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showModal=()=>{
  $('#exampleModal').modal('show')
}
const hideModal=()=>{
  $('#exampleModal').modal('hide')
}
</script>

<style scoped>
/*.img-1 {*/
/*  border: none;*/
/*  background-size: cover;*/
/*  background-image: url(../assets/img/footer.png);*/
/*}*/
</style>
