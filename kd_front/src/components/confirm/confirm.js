import Vue from 'vue';
import confirm from './confirm.vue';
import alert from './alert.vue';

let confirmConstructor = Vue.extend(confirm);
let alertConstructor = Vue.extend(alert);

let theConfirm = function (obj) {
    obj.cancel_btn = obj.cancel == undefined ? true : obj.cancel;
    return open(obj)
    function open(obj) {
        if (document.getElementsByClassName('confirm').length > 0) {
            document.getElementsByClassName('confirm')[0].remove();
        }
        obj.tit = obj.tit || 'Mẹo';
        return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
            let confirmDom = new confirmConstructor({
                el: document.createElement('div')
            })
            document.body.appendChild(confirmDom.$el);  //new一个对象，然后插入body里面
            confirmDom.show = true;
            confirmDom.obj = obj;   //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
            confirmDom.ok = function () {
                confirmDom.show = false
                res()
            }
            confirmDom.close = function () {
                confirmDom.show = false
                rej()
            }
        })
    };
}
let theAlert = function (msg) {
    let obj = {
        msg: msg
    }
    open(obj);
    function open(obj) {
        // if (document.getElementsByClassName('alert').length) {
        //     document.getElementsByClassName('alert')[0].childNodes[0].innerText = obj.msg;
        // }else{

        // }
        let confirmDom = new alertConstructor({
            el: document.createElement('div')
        })
        document.body.appendChild(confirmDom.$el);  //new一个对象，然后插入body里面
        confirmDom.show = true;
        confirmDom.obj = obj;   //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
    };
}


export { theConfirm, theAlert };
