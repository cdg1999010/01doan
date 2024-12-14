<template>
  <div class="confirm">
    <div class="weui-mask" v-if="show"></div>
    <div class="weui-dialog" v-if="show">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title"></strong>
      </div>
      <div class="weui-dialog__bd" v-show="obj.icon">
        <img :src="obj.icon" alt="">
      </div>
      <div class="weui-dialog__bd">
        <p style="text-align: center;">{{obj.msg}}</p>
      </div>
      <div class="weui-dialog__ft">
        <a
          href="javascript:;"
          class="weui-dialog__btn weui-dialog__btn_default"
          v-if="obj.cancel_btn"
          @click="close"
        >取消</a>
        <a
          href="javascript:;"
          class="weui-dialog__btn weui-dialog__btn_primary"
          @click="ok"
        >{{obj.ok_text || '确定'}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      obj: {
        msg: "",
        tit: "",
        cancel_btn: true
      }
    };
  },
  methods: {
    close() {
      
    },
    ok() {
      
    }
  }
};
</script>
<style scoped>
.weui-mask,
.weui-mask_transparent {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.weui-mask {
  background: rgba(0, 0, 0, 0.6);
}
.weui-dialog {
  position: fixed;
  display: table;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.weui-dialog__hd {
  padding: 1.3em 1.6em 0.5em;
}
.weui-dialog__title {
  font-weight: 400;
  font-size: 18px;
}
.weui-dialog__bd {
  padding: 0.8em 1.6em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
  color: #0C0F27;
}
.weui-dialog__ft {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.weui-dialog__btn {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
}
.weui-dialog__ft:after {
  content: " ";
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-dialog__btn_default {
  color: #f90;
}
.weui-dialog__btn_default {
  color: #353535;
}
</style>