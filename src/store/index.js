import {createStore} from 'vuex'

export default createStore({
    state: () => {
        return {
            active: 0
        }
    },
    mutations: {
        getActive(state, val) {
            state.active = val
        }
    },
    actions: {}
})
