<template>
  <!--  头部-->
  <Loading v-if="loading"/>
  <Header/>
  <!--  主内容-->
  <main class="container py-5">
    <!-- 面包屑-->
    <div class="my-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/more">全部</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">购物车</li>
        </ol>
      </nav>
    </div>
    <!--    内容-->
    <section>
      <div class="row">
        <table class="table table-borderless ">
          <thead>
          <tr>
            <th scope="col">图片</th>
            <th scope="col">产品名称</th>
            <th scope="col">单价</th>
            <th scope="col">数量</th>
            <th scope="col">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr class="py-3 border-bottom border-top" v-for="item in carts" :key="item.id">
            <td>
              <img class="shadow rounded" width="60" :src="item?.product?.imageUrl" alt="">
            </td>
            <td>{{ item?.product?.title }}</td>
            <td>{{ String(item.final_total).replace(/^(.*\..{2}).*$/, "$1") }}元</td>
            <td>
              <select class="form-control w-25 mr-4" v-model="item.qty">
                <option :value="num" v-for="num in 5" :key="num">{{ num }}</option>
              </select>
            </td>
            <td>
              <div @click="deleteCartEvent(item.id)" class="cursor-pointer">
                <i class="bi bi-trash"></i>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!--    优惠券和总价-->
    <section class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <h5 class="font-weight-bold spanborder"><span>优惠券</span></h5>
          <div class="input-group col-md-8 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-success" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h5 class="font-weight-bold spanborder"><span>总价</span></h5>
          <div>
            <span v-if="final_total!==total" class="text-right h4 text-decoration-line-through">原价：{{
                String(total).replace(/^(.*\..{2}).*$/, "$1")
              }}元</span>
            <span v-else class="h4">原价：{{ String(total).replace(/^(.*\..{2}).*$/, "$1") }}元</span>
          </div>
          <div class="mt-2" v-if="final_total !== total">
            <span class="text-right h3 text-success">折扣</span>
            <span class="text-right h3 text-success">{{ String(final_total).replace(/^(.*\..{2}).*$/, "$1") }}元!</span>
            <span class="text-right ml-2 text-success">已使用优惠价</span>
          </div>
        </div>
      </div>
    </section>
    <!--    结账-->

  </main>
  <!--  底部-->
  <Footer/>
</template>

<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

const loading = ref(true)
const store = useStore()
import {computed, ref} from "vue";
import {useStore} from "vuex";
import Loading from "../components/Loading.vue";
import {deleteCart} from "../api/cart.js";

const final_total = computed(() => store.state.cart.final_total)
const total = computed(() => store.state.cart.total)
const carts = computed(() => store.state.cart.carts)
//删除订单
const deleteCartEvent = (id) => {
  deleteCart(id).then((res) => {
    if (res.data.success) {
      store.dispatch('getCartEvent')
    }
  })
}
//这里突然发现数据已经存储在veux了，但是不转两圈看着难受
setTimeout(()=>{
  loading.value=false
},500)
</script>

<style scoped>
.table tbody tr td {
  vertical-align: middle;
}
</style>
