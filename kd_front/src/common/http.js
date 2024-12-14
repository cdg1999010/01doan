import axios from 'axios';
import router from '../router'
import { theConfirm, theAlert } from '../components/confirm/confirm.js'

//axios.defaults.timeout = 15000;
axios.defaults.timeout = 35000;
axios.defaults.baseURL = '';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = config.file ? config.data : JSON.stringify(config.data);
    config.headers = {
      'Content-Type': config.file ? 'multipart/form-data' : 'application/json;charset=utf-8',
      'uid': sessionStorage.getItem('uid')
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errcode == 100) {
      if (window.location.href.indexOf('/login') == -1) {
        theConfirm({ msg: response.data.error, cancel: false }).then(() => {
          router.push({
            name: "login",
            querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
          })
        })
      }
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, dis_alert = false) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        if (!dis_alert && !response.data.success && response.data.errcode != 100) theAlert(response.data.error);
        response && resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, dis_alert = false) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if (!dis_alert && !response.data.success && response.data.errcode != 100) theAlert(response.data.error);
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装文件上传
 * @param url
 * @param data
 * @returns {Promise}
 */

export function file(url, data = {}, dis_alert = false) {
  return new Promise((resolve, reject) => {
    axios.post(url, data,{file:1})
      .then(response => {
        if (!dis_alert && !response.data.success) theAlert(response.data.error);
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {

        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}