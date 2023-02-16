<template>
  <!--  头部-->
  <Loading v-if="loading"/>
  <Header/>
  <!--  面包屑-->
  <Nav/>
  <!--  <Breadcrumb/>-->
  <!--  主内容-->
  <main class="container py-5">
    <!--    步骤条-->
    <StepBar/>
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
          <tbody v-if="carts">
          <tr class="py-3 border-bottom border-top" v-for="item in carts" :key="item.id">
            <td>
              <img class="shadow rounded" width="60" :src="item?.product?.imageUrl" alt="">
            </td>
            <td>{{ item?.product?.title }}</td>
            <td class="text-muted">￥{{ String(item.final_total).replace(/^(.*\..{2}).*$/, "$1") }}</td>
            <td>
              <div style="width: 50px" class=" input-group">
<!--                <input-->
<!--                    v-model="item.qty"-->
<!--                    oninput="value=value.replace(/\D|^0/g, '')"-->
<!--                    @change="updateCartEvent(item.id, item.qty)"-->
<!--                    min="1"-->
<!--                    type="number"-->
<!--                    class="form-control px-2"-->
<!--                    placeholder="數量"-->
<!--                    aria-label="Username"-->
<!--                    aria-describedby="basic-addon1"-->
<!--                />-->
                <select @change="updateCartEvent(item.id, item.qty)" class="form-control " v-model="item.qty">
                  <option   :value="num" v-for="num in 5" :key="num">{{ num }}</option>
                </select>
              </div>
            </td>
            <td>
              <div @click="deleteCartEvent(item.id)" class="cursor-pointer">
                <i class="bi bi-x-lg"></i>
              </div>
            </td>
          </tr>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
        <div class="w-100 d-flex justify-content-center">
          <img v-if="carts.length===0" width="400" src="../assets/img/zwnr.png">
        </div>
      </div>
    </section>
    <!--    优惠券和总价-->
    <section class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <h5 class="font-weight-bold spanborder"><span>优惠券</span></h5>

          <div class="card">
            <div class="card-header fw-bold bg-white  ">
              输入您的代码
            </div>
            <div class="card-body">
              <div class="input-group col-md-8 input-group-sm">
                <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                <div class="input-group-append">
                  <button class="btn btn-secondary" type="button" @click="addCouponCode">
                    套用优惠码
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h5 class="font-weight-bold spanborder"><span>总价</span></h5>

          <div class="card ">
            <div class="card-header fw-bold bg-white">
              购物车总计
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div class="fw-bold text-muted">小计：</div>
                <div class="text-muted">￥{{ String(total).replace(/^(.*\..{2}).*$/, "$1") }}</div>
              </div>
              <div class="d-flex mt-2 align-items-center justify-content-between">
                <div class="fw-bold">合计：</div>
                <div v-if="final_total!==total" class="text-right ml-2 text-secondary">已使用优惠价</div>
                <div class="fs-3 fw-bold text-secondary">￥{{
                    String(final_total).replace(/^(.*\..{2}).*$/, "$1")
                  }}
                </div>
              </div>
              <div class="d-flex mt-3 justify-content-between">
                <button @click="$router.push('/more')" class="btn-outline-secondary  btn">返回购物</button>
                <button @click="$router.push('/order')" class="btn-secondary  btn">继续结账</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    结账-->
  </main>
  <!--  底部-->
  <!--  <Discounts/>-->
  <Footer/>
</template>

<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

const loading = ref(true)
const store = useStore()
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import Loading from "../components/Loading.vue";
import {deleteCart, updateCart} from "../api/cart.js";
import {useCoupon} from "../api/coupon.js";
import {ElNotification} from "element-plus";
import Discounts from "../components/Discounts.vue";
import StepBar from "../components/StepBar.vue";
import Nav from "../components/Nav.vue";
const productNum = ref(1)
const coupon_code = ref('')//优惠券
const final_total = computed(() => store.state.cart.final_total)//最终价格
const total = computed(() => store.state.cart.total)//原价
const carts = computed(() => store.state.cart.carts)//购物车

// const getCartEvent = () => {
//   getCart().then(res => {
//     console.log(res)
//   })
// }
//删除订单
const deleteCartEvent = (id) => {
  loading.value = true
  deleteCart(id).then((res) => {
    loading.value = false
    if (res.data.success) {
      ElNotification({
        title: '提示',
        message: '删除商品成功',
        type: 'success',
        duration: 2000,
      })
      store.dispatch('getCartEvent')
    }
  })
}
//更新购物车
const updateCartEvent = (id, qty) => {
  loading.value = true
    if (qty===''){
      loading.value = false
      ElNotification({
        title: '提示',
        message: '商品数量不能为空',
        type: 'error',
        duration: 2000,
      })
    }
    else {
      updateCart(id, {data: {product_id: id, qty: qty}}).then(res => {
        if (res.data.success) {
          store.dispatch('getCartEvent')
        }
        loading.value = false
      })
    }
}
const addCouponCode = () => {
  loading.value = true
  useCoupon({data: {code: coupon_code.value}}).then(res => {
    if (res.data.success) {
      store.dispatch('getCartEvent')
    }
    loading.value = false
  })
}
//这里突然发现数据已经存储在veux了，但是不转两圈看着难受
setTimeout(() => {
  loading.value = false
}, 500)
</script>

<style scoped>
.table tbody tr td {
  vertical-align: middle;
}
</style>
