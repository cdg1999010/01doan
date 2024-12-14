<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            transitionName: ""
        };
    },
    watch: {
        // 使用watch 监听$router的变化
        $route(to, from) {
            if (this.is_index(to.name) && this.is_index(from.name)) {
                return this.transitionName = "active";
            }
            if (sessionStorage.getItem("back_status")) {
                this.transitionName = "slide-right";
            } else {
                this.transitionName = "slide-left";
            }
        }
    },
    mounted() {
        //app返回处理
        this.$mui.plusReady(() => {
            var backcount = 0;
            this.$mui.back = () => {
                let path = this.$route.path;
                // console.log("path:" + path);
                const name = this.$route.name;
                if (name == "login" || this.is_index(name)) {
                    // 主导航页
                    if (this.$mui.os.ios) return;
                    if (backcount > 0) {
                        if (window.plus) plus.runtime.quit();
                        return;
                    }
                    this.$alert("再点击一次退出应用!");
                    backcount++;
                    setTimeout(() => {
                        backcount = 0;
                    }, 2000);
                } else {
                    // 子页面
                    // console.log("子页面后退键");
                    sessionStorage.setItem("back_status", 1);
                    this.$router.go(-1);
                    setTimeout(() => {
                        sessionStorage.removeItem("back_status");
                    }, 300);
                }
            };
        });
    },
    methods: {
        is_index(name) {
            if (
                name == "home" ||
                name == "wallet" ||
                name == "my"
            ) {
                return true;
            }
        }
    }
};
</script>

<style>
/* 路由切换动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 300ms;
    position: fixed;
}
.slide-right-enter {
    opacity: 0;
    transform: translateX(-100%);
}
.slide-right-leave-active {
    opacity: 0;
    transform: translateX(100%);
}
.slide-left-enter {
    opacity: 0;
    transform: translateX(100%);
}
.slide-left-leave-active {
    opacity: 0;
    transform: translateX(-100%);
}
/* 可滚动窗口高度设置 */
.home,
.wallet,
.my {
    width: 100%;
    /* height: calc(100vh - 1.1rem); */
    height: 100vh;
    overflow-y: scroll;
    padding-top: 0.88rem;
    /* padding-bottom: 0.4rem; */
    padding-bottom: 1.5rem;
}
.password,
.login,
.service,
.person_data,
.data_info,
.id_info,
.bank_card{
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0.88rem 0.3rem 0 0.3rem;
}
.yellow_color {
    color: #F9BF3A;
}
.syellow_color{
    color: #BC7C1C;
}
.yellow_bg {
    background: #F9BF3A;
}
.black_color{
    color: #141414;
}
.black_bg{
    background: #151515;
}
.gray_color{
    color: #858B9C;
}
.font_overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.border_top {
    border-top: 1px #EEEEEE solid;
}
.border_bottom {
    border-bottom: 1px #EEEEEE solid;
}
.box_shadow {
    box-shadow: 0px 0px 7px -3px #b4b3b3;
}
.no_data {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
}
article,
aside,
blockquote,
body,
button,
dd,
details,
div,
dl,
dt,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
input,
legend,
li,
menu,
nav,
ol,
p,
section,
td,
textarea,
th,
ul {
    margin: 0;
    padding: 0;
}
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    font-size: 0.26rem;
    line-height: 1.5;
    color: #111a34;
    background-color: #f6f9fd;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
input,
button {
    border: none;
    outline: none;
}
input {
    background: none;
}
::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #cfcfcf;
    font-size: .32rem;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #cfcfcf;
    font-size: .32rem;
}

:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #cfcfcf;
    font-size: .32rem;
}
</style>
