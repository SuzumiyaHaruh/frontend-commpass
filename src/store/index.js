import {createStore} from 'vuex'
import {cart} from "./cart.js";

export default createStore({
    modules: {
        cart
    },
    state: () => {
        return {
            active: 0, //nav

        }
    },
    mutations: {
        getActive(state, val) {
            state.active = val
        },

    },
    actions: {}
})
