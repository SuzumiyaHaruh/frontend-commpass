<template>
  <!--  loading-->
  <Loading v-if="loading"/>
  <!--  header-->
  <Header/>
  <!--  main-->
  <main>
    <!--      主画面-->
    <section>
      <div class="row position-relative">
        <img src="../assets/img/bg.png">
        <div class="col-12 position-absolute h-100 align-items-center d-flex justify-content-center">
          <div class="text-center">
            <h1 class="text-white d-none d-md-block fs-big fw-bold">
              鸟语。书斋
            </h1>
            <h2 class="text-white d-none d-md-block line fw-bold">
              「唯书有色，艳于西子，唯文有华，秀于百卉。」
            </h2>
            <button class="button mt-5">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text"><router-link class="text-white text-decoration-none" to="/more">查看更多</router-link></span>
    </span>
            </button>
          </div>
          <div v-if="showpd" class="box d-md-block d-none position-absolute bottom-0">
            <img src="../assets/img/ud.png" alt="">
          </div>
        </div>
      </div>
    </section>

    <section>
      <section class="slice slice-lg mt-md-5">
        <div class="container">
          <!-- Section title -->
          <div class="row mb-md-5 justify-content-center text-center">
            <div class="col-lg-6">
              <h2 class=" mt-4 fw-bold wow animate__animated animate__fadeInUp ">新书推荐</h2>
              <div class="mt-2 wow animate__animated animate__fadeInUp">
                <p class="my-4">在书与非书之间，我们阅读</p>
              </div>
            </div>
          </div>

          <div class="py-4">
            <div class="row  row-grid justify-content-between align-items-center">
              <div class="col-lg-5 my-3 wow animate__animated animate__fadeInUp">
                <h5 class="h3 text-center">再見繪梨</h5>
                <p class="line-clamp2 my-4">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只要能记起，就不怕会忘记。
                  以电影收藏回忆，以虚构化解伤痛的青春物语在悲伤时，来一抹奇幻色彩吧！
                  📱“请你拍到我死的那一刻为止……”
                  受病重的母亲请求，优太开始拍摄关于她的电影。
                  可随着母亲的去世与电影的失败，
                  优太也失去了人生的希望。
                  在偶遇的神秘少女绘梨的帮助下，
                  优太终于重拾了对电影的热情，
                  却不知绘梨其实怀抱着一个秘密……
                  💿现实与虚构交织，情感在至深处炸裂。
                  将真相丢入回收站，把爱意留在电影中。
                </p>
                <button class="order-btn">
                  立即订购
                </button>
              </div>
              <div class="col-lg-6 my-3 wow animate__animated animate__fadeInUp animate__delay-1s">
                <div style="background: #ffe508" class="card mb-0 mr-lg-5">
                  <div class="card-body p-2">
                    <img alt="Image placeholder" src="../assets/img/001.png" class="img-fluid shadow rounded">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <div class="row row-grid justify-content-between align-items-center">
              <div class="col-lg-5 order-lg-2 my-3 wow animate__animated animate__fadeInUp animate__delay-1s">
                <h5 class="h3">运动中的视觉</h5>
                <p class="line-clamp2 my-4">
                  1947年，《运动中的影响》出版后，如今已经是第8版。全书有440幅配图，其中11幅是彩色图片。本书是对1947年前后现代设计运动的一个详尽的视觉汇编。包括包豪斯和新包豪斯时期很多设计大师的作品，包括马歇?布劳耶（Marcel
                  Breuer）、格罗皮乌斯（Walter Gropius）、奥斯卡?史莱姆（Oskar Schlemmer）和赫伯特?拜耶（Herbert
                  Bayer）等。出现在本书里的艺术家、建筑家、设计师和摄影家都是20世纪现代运动中里程碑式的人物。如阿尔瓦?阿尔托、赫伯特?拜耶、德里弗斯、柯布西耶、格罗皮乌斯、保罗?兰德、怀特等。格罗皮乌斯评价：“本书是将会是设计教育里的先锋。”
                </p>
                <button class="order-btn">
                  立即订购
                </button>
              </div>
              <div class="col-lg-6 order-lg-1 my-3 wow animate__animated animate__fadeInUp ">
                <div style="background: #f6f6f6" class="card mb-0 mr-lg-5">
                  <div class="card-body p-2">
                    <img alt="Image placeholder" src="../assets/img/002.png"
                         class="img-fluid shadow rounded">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary">
      <div class="container">
        <!-- Title -->
        <!-- Section title -->
        <div class="row mb-5 justify-content-center text-center">
          <div class="col-lg-6">
            <h2 class=" mt-4 fw-bold wow animate__animated animate__fadeInUp">关于我们</h2>
            <div class="mt-2 wow animate__animated animate__fadeInUp">
              <p class="my-4">书中横卧着整个过去的灵魂，所谓天堂，我们想，就是书店的样子</p>
            </div>
            <button class="order-btn wow animate__animated animate__fadeInUp animate__delay-1s">立即订购</button>
          </div>
        </div>
        <!-- Card -->
        <div class="row mt-5 wow animate__animated animate__fadeInUp animate__delay-1s">
          <div class="col-md-4 my-2">
            <div class="card">
              <div class="card-body pb-5">
                <div class="py-2">
                  <img src="../assets/img/spcx.png" class="img-fluid img-center" alt="Illustration"/>
                </div>
                <h5 class="h4 lh-130 fw-bold mb-3">商品促销</h5>
                <p class="text-muted mb-0">立即加入鸟语书斋成为店铺会员，享受会员权益！
                  即可享受8折，会员专供尖货商品，每月可领取超大优惠券</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-2">
            <div class="card">
              <div class="card-body pb-5">
                <div class="py-2">
                  <img src="../assets/img/jjgw.png" class="img-fluid img-center"
                       alt="Illustration"/>
                </div>
                <h5 class="h4 lh-130 fw-bold mb-3">居家购物</h5>
                <p class="text-muted mb-0">
                  你想购物吗？想开心购物吗？请来鸟语书斋居家，让你称心而归！各种品类书籍应有尽有</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-2">
            <div class="card">
              <div class="card-body pb-5">
                <div class="py-2">
                  <img src="../assets/img/wlxx.png" class="img-fluid img-center" alt="Illustration"/>
                </div>
                <h5 class="h4 fw-bold lh-130 mb-3">订单信息</h5>
                <p class="text-muted mb-0">您首先看到「订单列表」，
                  而未付款的在线支付订单，您可以查看并对买家发送召回通知。点击查看更详细「弃单」功能介绍。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!--  footer-->
  <Discounts/>
  <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
import {getProducts} from "../api/products.js";
import {onMounted, ref} from "vue";
import WOW from "wow.js";
import Discounts from "../components/Discounts.vue";

const showpd = ref(true)
const loading = ref(false)
const products = ref([])

const getProductEvents = async () => {
  loading.value = true
  await getProducts(1).then(res => {
    products.value = res.data.products.splice(0, 6)
    loading.value = false
  })
}
onMounted(() => {
  getProductEvents()
  let wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
  /////////////////////////////
  //滚动监听
  $().ready(function () {
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();//获取当前滑动的位置
      // console.log(scrollTop)
      if (scrollTop > 300) {
        showpd.value = false
      } else if (scrollTop === 0) {
        showpd.value = true
      }
    })
  })
  /////////////////////////////////
})
</script>

<style lang="scss" scoped>
.order-btn {
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  -webkit-transition: all ease 0.1s;
  transition: all ease 0.1s;
  -webkit-box-shadow: 0px 5px 0px 0px #a29bfe;
  box-shadow: 0px 5px 0px 0px #a29bfe;
}

.order-btn:active {
  -webkit-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px);
  -webkit-box-shadow: 0px 0px 0px 0px #a29bfe;
  box-shadow: 0px 0px 0px 0px #a29bfe;
}

///////////////////////////////////
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #6c5ce7;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

.fs-big {
  font-size: 60px;
  margin-bottom: 20px;
}

@keyframes typing {

  from {
    width: 0
  }

}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.line {
  border-right: .08em solid;
  width: 45rem;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 6s steps(22, end),
  blink-caret .2s step-end infinite alternate; //这里的alternate是为了让光标闪烁的正常一点
}

.box {
  width: 50px;
  height: 50px;
  margin: 80px auto;
  animation: bounce-up 1.5s linear infinite;
}

@keyframes bounce-up {
  25% {
    transform: translateY(10px)
  }
  50%, 100% {
    transform: translateY(0)
  }
  75% {
    transform: translateY(-10px)
  }
}

.img {
  border: none;
  background-size: cover;
  background-image: url(../assets/img/s33654945.jpg);
}



.cover {
  background-size: cover;
}

.hw {
  height: 80px;
  width: 120px;
  min-width: 120px;
  min-height: 80px;
}

.mt-75 {
  margin-top: 75px;
}

.rounded-0 {
  border-radius: 0;
}

.scroll {
  /*margin: 100px auto;*/
  margin: 0 auto;
  overflow: hidden;
}

.scroll .item {
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: space-between;*/
  /*padding: 3px 0;*/
}

.warp {
  //width: 130px * 4;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;

  .item-list {
    list-style: none;
    padding: 0;
    margin: 0 auto;

    &.item-list {
      display: flex;

      .item {
        width: 120px;
        height: 120px;
        margin-right: 10px;
        line-height: 120px;
        background-color: #999;
        color: #fff;
        text-align: center;
        font-size: 30px;
      }
    }
  }
}

.headline-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% 、 -50%);
}

.headline {
  color: white;
  z-index: 1000;
}

.line-clamp2 {
  color: #71809d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
