<template>
    <div class="login">
        <Header tit="登录" color="1" back="false"></Header>
        <div class="tit_e">LOGIN IN</div>
        <div class="tit_c">登录</div>
        <div class="item_tit margin">账号</div>
        <div class="item">
            <input type="text" v-model="phone" placeholder="会员ID或手机号码" />
        </div>
        <div class="item_tit">密码</div>
        <div class="item">
            <input type="password" v-model="pass" placeholder="请输入您密码" />
        </div>
        <BigBtn label="登录" class="btn"></BigBtn>
        <div class="op">
            <div class="register" @click="register">注册账号</div>
            <div class="forget" @click="forget">忘记密码</div>
        </div>
    </div>
</template>

<script>
import Header from "./public/header";
import BigBtn from "./public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            phone: "", //类型：String  必有字段  备注：无
            pass: "" //类型：String  必有字段  备注：无
        };
    },
    methods: {
        forget() {
            this.$router.push({ name: "forget" });
        },
        register() {
            this.$router.push({ name: "register" });
        },
        click_BigBtn() {
            if (!this.phone) {
                return this.$alert("请输入手机号码！");
			}
			if (!this.pass) {
                return this.$alert("请输入密码！");
            }
            this.$post(this.$path.login, {
                mobile: this.phone,
                pass: this.pass
            }).then(res => {
                if (res.success) {
                    this.$router.push({ name: "home" });
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./login/login.scss";
</style>
