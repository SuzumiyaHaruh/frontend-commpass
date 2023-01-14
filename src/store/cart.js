import {getCart} from "../api/cart.js";
import {getProduct} from "../api/products.js";

export const cart = {
    state() {
        return {
            carts: [],//购物车
            final_total: 0,//最后总技
            total: 0, //总计
            getProductNum: 0 //总数
        }
    },
    mutations: {
        getCarts(state, carts) {
            state.cart = carts
        },
        getProductNum(state, carts) {
            let sum = 0
            const qty = carts.map(item => item.qty)
            qty.forEach(item => {
                sum = sum + item
            })
            state.getProductNum = sum
        }
    },
    actions: {
        //获取购物车
        async getCartEvent({commit}) {
            await getCart().then(res => {
                let carts = res.data.data.carts
                commit('getCarts', carts)
                commit('getProductNum', carts)
                // console.log(res.data.data)
            })
        }
    }
}
