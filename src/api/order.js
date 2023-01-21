import instance from "./index.js";

// 建立訂單
export function setOrder(data) {
    return instance.post(`/order`, data)
}
//查看订单
export function getOrder(order_id) {
    return instance.get(`/order/${order_id}`)
}
//付款
export function getPay(order_id) {
    return instance.post(`/pay/${order_id}`)
}
