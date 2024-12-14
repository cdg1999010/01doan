import axios from 'axios';
import router from '../router'
import { theConfirm, theAlert } from '../components/confirm/confirm.js'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8',
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
    if (response.data.errorCode == -1) {
      if (window.location.href.indexOf('/login') == -1) {
        theConfirm({msg:response.data.errorMsg,cancel:false}).then(() => {
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
        if (!dis_alert && !response.data.success) theAlert(response.data.error);
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