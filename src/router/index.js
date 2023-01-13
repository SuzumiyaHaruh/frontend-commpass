import {createRouter, createWebHistory} from "vue-router"
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import More from '../pages/More.vue'

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
        }
    },
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
