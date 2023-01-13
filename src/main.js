import {createApp} from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store/index.js";
import '../src/assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import {VueMasonryPlugin} from 'vue-masonry'
import 'animate.css/animate.css'
createApp(App).use(store).use(VueMasonryPlugin).use(router).mount('#app')
