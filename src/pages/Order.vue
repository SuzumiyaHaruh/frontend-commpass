<template>
  <!--  头部-->
  <Loading v-if="loading"/>
  <Header/>
  <!--  面包屑-->
  <Nav/>
<!--  <Breadcrumb/>-->
  <main class="py-5">
    <StepBar/>
    <section class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">订单资料</h5>
              <Form
                  ref="formRef"
                  class="form"
                  :validation-schema="mySchema"
                  v-slot="{ errors }"
                  autocomplete="off"
              >
                <div class="mb-3">
                  <label class="form-label">邮箱</label>
                  <Field v-model="form.email" name="email" type="email" :class="{ 'border-danger': errors.email }"
                         placeholder="请输入邮箱" class="form-control"/>
                  <div class="text-danger fs-6" v-if="errors.email">
                    <i class="bi mr-2 bi-exclamation-square"></i>{{ errors.email }}
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">收件人姓名</label>
                  <Field v-model="form.account" name="account" :class="{ 'border-danger': errors.account }" type="text"
                         placeholder="请输入收件人姓名" class="form-control"/>
                  <div class="text-danger fs-6" v-if="errors.account">
                    <i class="bi mr-2 bi-exclamation-square"></i>{{ errors.account }}
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">收件人电话</label>
                  <Field v-model="form.mobile" name="mobile" :class="{ 'border-danger': errors.mobile }" type="number"
                         placeholder="请输入收件人电话" class="form-control"/>
                  <div class="text-danger fs-6" v-if="errors.mobile">
                    <i class="bi mr-2 bi-exclamation-square"></i>{{ errors.mobile }}
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">收件人地址</label>
                  <Field v-model="form.address" name="address" :class="{ 'border-danger': errors.address }" type="text"
                         placeholder="请输入收件人地址" class="form-control"/>
                  <div class="text-danger fs-6" v-if="errors.address">
                    <i class="bi mr-2 bi-exclamation-square"></i>{{ errors.address }}
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">收件人留言(选填)</label>
                  <textarea v-model="form.message" class="form-control" rows="3"></textarea>
                </div>
              </Form>
              <div class="d-flex mt-md-4 mt-2 justify-content-between">
                <button @click="$router.go(-1)" class="btn btn-outline-secondary">上一页</button>
                <button @click="submit" class="btn btn-secondary">确认订购<i class="bi ml-2 bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">订单金额</h5>
              <div class="d-flex py-2 border-top border-bottom justify-content-between">
                <span>总金额</span>
                <span>￥{{ total }}</span>
              </div>
              <div class="d-flex py-2  border-bottom justify-content-between">
                <span>优惠折扣</span>
                <span>-￥{{ keepTwoDecimal(total-final_total) }}</span>
              </div>
              <div class="d-flex py-2  border-bottom justify-content-between">
                <span>应付金额</span>
                <span class="text-secondary">￥{{keepTwoDecimal(final_total) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</template>

<script setup>
import {Form, Field} from 'vee-validate'
import Loading from "../components/Loading.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import StepBar from "../components/StepBar.vue";
import schema from '../utils/vee-validate-schema.js'
import {computed, reactive, ref} from "vue";
import {setOrder} from "../api/order.js";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import Nav from "../components/Nav.vue";

const store = useStore()
const router = useRouter()
const loading = ref(false)
const formRef = ref(null)
const orderId = ref('')
// 表单对象数据
const form = reactive({
  account: null, // 账号
  email: null, //邮箱
  mobile: null, //手机号
  address: null,//地址
  message: null // 留言
})
// 校验规则对象
const mySchema = {
  account: schema.account,
  email: schema.email,
  mobile: schema.mobile,
  address: schema.address
}
const final_total = computed(() => store.state.cart.final_total)//最终价格
const total = computed(() => store.state.cart.total)//原价
const submit = async () => {

  // Form组件提供了一个 validate 函数作为整体表单校验，当是返回的是一个promise
  const valid = await formRef.value.validate()
  if (valid) {
    loading.value = true
    await setOrder({
      data: {
        user: {name: form.account, email: form.email, tel: form.mobile, address: form.address},
        message: form.message
      }
    }).then(res => {
      loading.value = false
      if (res.data.success) {
        store.dispatch('getCartEvent')
        if (res.data.success) {
          orderId.value = res.data.orderId
          router.push(`/order_complete/${orderId.value}`)
        }
      }
    })
  }
}
const keepTwoDecimal=(num)=> {

  let result = parseFloat(num);

  if (isNaN(result)) {

    alert('传递参数错误，请检查！');

    return false;

  }

  result = Math.round(num * 100) / 100;

  return result;

};
</script>

<style scoped>

</style>
