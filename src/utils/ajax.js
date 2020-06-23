

import axios from "axios";

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common["token"] = token //请求头是空
axios.defaults.headers.post["Content-type"] = "application/json:charset=UTF-8"

axios.interceptors.request.use(function (config) {
    // ajax 请求发送之前
    // console.log(config)
    config.params.time = new Date().getTime().toString()  //每次请求需要添加参数时间
    let token = window.sessionStorage.userInfo
    if (token) {
        token = JSON.parse(token);
        config.headers.common['token'] = token//把token放入到请求头中
    }
    return config;
}, function (error) {
    // ajax 请求无法发送  
    return Promise.reject(error);
});

//响应拦截器
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    // console.log(response)
    // if (response.data.code == '401') {
    //     //默认token失效 重定向到登录页面
    //     router.push({ name: "login" })
    //     sessionStorage.usename = ""
    //     sessionStorage.touxiang = ""
    // }
    return response;
}, function (error) {
    // 后台数据返回失败 
    return Promise.reject(error);
});

export default axios;