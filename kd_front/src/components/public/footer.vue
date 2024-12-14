<template>
    <div class="footer">
        <div
            v-for="item of list"
            :key="item.id"
            @click="switch_module(item.code)"
            :class="{nav_item:true,yellow_color:item.code == ckecked_code}"
        >
            <img :src="item.code == ckecked_code ? item.icon_c : item.icon" alt />
            <div class="nav_tit">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
import home from "@/assets/footer/home.png";
import wallet from "@/assets/footer/wallet.png";
import my from "@/assets/footer/my.png";
import service from "@/assets/footer/service.png";
import home_checked from "@/assets/footer/home_checked.png";
import wallet_checked from "@/assets/footer/wallet_checked.png";
import my_checked from "@/assets/footer/my_checked.png";
import service_checked from "@/assets/footer/service_checked.png";
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: "trang chủ",
                    icon: home,
                    icon_c: home_checked,
                    code: "home"
                },
                {
                    id: 2,
                    name: "ví",
                    icon: wallet,
                    icon_c: wallet_checked,
                    code: "wallet"
                },
                {
                    id: 3,
                    name: "CSKH",
                    icon: service,
                    icon_c: service_checked,
                    code: "service"
                },
                {
                    id: 4,
                    name: "Của tôi",
                    icon: my,
                    icon_c: my_checked,
                    code: "my"
                }
            ],
            ckecked_code: this.$route.name
        };
    },
    methods: {
        switch_module(code) {
            if (code == "service") {
                this.$get(this.$path.kefu).then(res => {
                    if (res.success) {
                        console.log(res.data.kefu_url);
                        //debugger
                        window.location = res.data.kefu_url;
                        //window.open(res.data.kefu_url);
                        //this.$router.push({ name: code }
/*                         mui.openWindow({
                            url: res.data.kefu_url,
                            id: "jmyc",
                            styles: {
                                // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
                                titleNView: {
                                    // 窗口的标题栏控件
                                    autoBackButton: true, //新打开的窗口是否有返回键
                                    // titleText:"标题栏",                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
                                    titleColor: "#000000", // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
                                    titleSize: "17px", // 字体大小,默认17px
                                    backgroundColor: "#F7F7F7", // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
                                    progress: {
                                        // 标题栏控件的进度条样式
                                        color: "#00FF00", // 进度条颜色,默认值为"#00FF00"
                                        height: "2px" // 进度条高度,默认值为"2px"
                                    },
                                    splitLine: {
                                        // 标题栏控件的底部分割线，类似borderBottom
                                        color: "#CCCCCC", // 分割线颜色,默认值为"#CCCCCC"
                                        height: "1px" // 分割线高度,默认值为"2px"
                                    }
                                }
                            }
                        }); */
                    }
                });
            } else {
                if (this.$route.name != code) {
                    this.$router.push({ name: code });
                }
            }
        }
    }
};
</script>
<style scoped>
.footer {
    width: 100%;
    height: 1.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
    box-shadow: 1px -2px 10px -8px #212c62;
    z-index: 1;
}
.nav_item {
    width: 1.3rem;
    height: 1.3rem;
}
.nav_item img {
    width: 0.54rem;
    height: 0.54rem;
    margin-left: 0.38rem;
    margin-top: 0.14rem;
}
.nav_tit {
    height: 0.3rem;
    font-size: 0.24rem;
    text-align: center;
}
</style>
