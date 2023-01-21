//加入购物车
import instance from "./index.js";

// 加入购物车
export function addCart(data) {
    return instance.post(`/cart`, data)
}

export function updateCart(id, data) {
    return instance.put(`/cart/${id}`, data)
}

///获取购物车
export function getCart() {
    return instance.get(`/cart`)
}

//删除购物车
export function deleteCart(id) {
    return instance.delete(`/cart/${id}`)
}
