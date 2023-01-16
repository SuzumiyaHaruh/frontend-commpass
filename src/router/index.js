import {createRouter, createWebHistory} from "vue-router"
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import More from '../pages/More.vue'
import Detail from "../pages/Detail.vue";
import Cart from "../pages/Cart.vue"
const routes = [
    {
        path: "/:catchAll(.*)",
        redirect: '/'
    },
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {          //主要是meta里面得带标题数据
            title: '首页'
        }
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: {          //主要是meta里面得带标题数据
            title: '关于'
        }
    },
    {
        path: "/more",
        name: "more",
        component: More,
        meta: {          //主要是meta里面得带标题数据
            title: '全部'
        },
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: Detail,
        meta: {          //主要是meta里面得带标题数据
            title: '详情'
        },
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
        meta: {          //主要是meta里面得带标题数据
            title: '购物车'
        },
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
});
export default router
