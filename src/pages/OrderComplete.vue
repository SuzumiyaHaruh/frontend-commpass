<template>
  <Loading v-if="loading"/>
  <Header/>
  <Nav/>
  <main class="container py-5">
    <StepBar/>
    <div v-if="pay"  class="row">
      <div class="col-12">

        <div class="card">
          <img src="../assets/img/gwcg.png">
          <div class="card-body">
            <h5 class="card-title">订单信息</h5>
            <table class="table table-borderless">
              <thead>
              <tr class="border-bottom">
                <th scope="col">商品名称</th>
                <th scope="col">数量</th>
                <th scope="col">价格</th>
                <th scope="col">状态</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-bottom">
                <td>再见绘梨</td>
                <td>1/本</td>
                <td>￥20</td>
                <td class="text-success">已付款</td>
              </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between">
              <div @click="$router.push('/')" class="btn btn-outline-secondary">回到主页</div>
              <div  @click="$router.push('/more')" class="btn btn-secondary">继续购物</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">订购人信息</h5>
            <table class="table table-borderless">
              <tbody>
              <tr class="border-bottom">
                <td>Email</td>
                <td>{{ user.email }}</td>
              </tr>
              <tr class="border-bottom">
                <td>姓名</td>
                <td>{{ user.name }}</td>
              </tr>
              <tr class="border-bottom">
                <td>收件人电话</td>
                <td>{{ user.tel }}</td>
              </tr>
              <tr class="border-bottom">
                <td>收件人地址</td>
                <td>{{ user.address }}</td>
              </tr>
              <tr>
                <td>付款状态</td>
                <td v-if="user.is_paid" class="text-success">已付款</td>
                <td v-else class="text-danger">未付款</td>
              </tr>
              </tbody>
            </table>
            <div @click="payEvent" class="btn btn-secondary">前往付款</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">订单信息</h5>
            <table class="table table-borderless">
              <thead>
              <tr class="border-bottom">
                <th scope="col">商品名称</th>
                <th scope="col">数量</th>
                <th scope="col">价格</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-bottom">
                <td>再见绘梨</td>
                <td>1/本</td>
                <td>￥20</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Nav from "../components/Nav.vue";
import StepBar from "../components/StepBar.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getOrder, getPay} from "../api/order.js";
import Loading from "../components/Loading.vue";

const route = useRoute()
const user = ref({})
const order_id = ref('')
const loading = ref(false)
const pay = ref(false)
const getOrderEvent = (order_id) => {
  loading.value = true
  getOrder(order_id).then(res => {
    user.value = res.data.order?.user
    loading.value = false
  })
}
const payEvent = () => {
  loading.value=true
  getPay(order_id.value).then(res => {
    if (res.data.success) {
      pay.value = true
      getOrderEvent(order_id.value)
      loading.value=false
    }
  })
}
onMounted(() => {
  order_id.value = route.params.id
  getOrderEvent(order_id.value)
})
</script>

<style scoped>

</style>
