//客戶購物【免驗證】
// 获得产品
import instance from "./index.js";

//获取所有商品
export function getProductsAll() {
    return instance.get(`/products/all`)
}
//获取所有商品（分页）
export function getProducts(page) {
    return instance.get(`/products/?page=${page}`)
}

// 获取单一商品详情
export function getProduct(id) {
    return instance.get(`/product/${id}`)
}


