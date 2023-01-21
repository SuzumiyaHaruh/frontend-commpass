import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/js/vendor/jquery.min.js'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import './assets/css/main.css'
import './assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'animate.css'
// import './assets/js/vendor/jquery.min.js'
// import './assets/js/vendor/popper.min.js'
// import './assets/js/vendor/bootstrap.min.js'
// 这块一定要加,否者会有部分动画无法执行
import 'animate.css/animate.compat.css'
import {VueMasonryPlugin} from 'vue-masonry'
import App from './App.vue'
import router from './router'
import store from "./store/index.js";

// import 'animate.css/animate.css'

createApp(App).use(ElementPlus).use(store).use(VueMasonryPlugin).use(router).mount('#app')
