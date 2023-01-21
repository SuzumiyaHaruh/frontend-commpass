import instance from "./index.js";

// 获得优惠劵
export function getCoupons(page) {
    return instance.get(`/admin/coupons?page=${page}`)
}

// 添加优惠劵
export function addCoupon(data) {
    return instance.post(`/admin/coupon`, data)
}

// 修改優惠券
export function updateCoupon(id, data) {
    return instance.put(`/admin/coupon/${id}`, data)
}

//删除優惠券
export function deleteCoupon(id) {
    return instance.delete(`/admin/coupon/${id}`)
}
//使用優惠券 使用
export function useCoupon(code) {
    return instance.post(`/coupon`, code)
}
