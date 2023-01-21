export default {
    // 校验account
    account(value) {
        if (!value) return '请输入用户名'
        return true
    },
    password(value) {
        if (!value) return '请输入密码'
        if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
        return true
    },
    email(value) {
        if (!value) return '请输入邮箱'
        if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)) return '邮箱格式错误'
        return true
    },
    mobile(value) {
        if (!value) return '请输入手机号'
        if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
        return true
    },
    code(value) {
        if (!value) return '请输入验证码'
        if (!/^\d{6}$/.test(value)) return '验证码是6个数字'
        return true
    },
    address(value) {
        if (!value) return '请输入地址'
        return true
    },
    isAgree(value) {
        if (!value) return '请勾选同意用户协议'
        return true
    }
}
