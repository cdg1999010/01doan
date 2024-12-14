<template>
    <div class="login">
        <Header tit="注册" color="1"></Header>
        <div class="tit_e">SIGN IN</div>
        <div class="tit_c">注册</div>

        <div class="register_box box_shadow">
            <div class="input_bar">
                <div class="item">
                    <div class="label">手机号码</div>
                    <input type="text" placeholder="请输入手机号码" />
                </div>
                <div class="item">
                    <div class="label">图文验证码</div>
                    <input type="text" placeholder="请输入图文验证码" />
                </div>
                <div class="item">
                    <div class="label">短信验证码</div>
                    <input type="text" placeholder="请输入验证码" />
                </div>
                <div class="item">
                    <div class="label">登录密码</div>
                    <input type="text" placeholder="请设置6-16位密码" />
                </div>
            </div>
        </div>
        <BigBtn class="btn" label="注册"></BigBtn>
        <div class="go_login" @click="go_login">登录</div>
    </div>
</template>

<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            phone: "", //类型：String  必有字段  备注：无
            nick_name: "", //类型：String  必有字段  备注：昵称
            password1: "",
            password2: "", //类型：String  必有字段  备注：无
            sms_code: "", //类型：String  必有字段  备注：验证码
            parent_tj_code: this.$route.query.tj_code || "", //类型：String  必有字段  备注：推荐码
            code_count_down: 0, //验证码倒计时
            play: null //验证码定时器
        };
    },
    methods: {
        forget() {
            this.$router.push({ name: "forget" });
        },
        //发送验证码
        sendRegSms() {
            if (!this.phone) {
                return this.$alert("请输入手机号码！");
            }
            this.$post(this.$path.sendRegSms, {
                phone: this.phone
            }).then(res => {
                if (res.success) {
                    this.$alert("发送成功");
                    this.code_count_down = 60;
                    this.count_down();
                }
            });
        },
        count_down() {
            this.play = setInterval(() => {
                if (this.code_count_down > 0) {
                    this.code_count_down--;
                } else {
                    clearInterval(this.play);
                }
            }, 1000);
        },
        go_login(){
            this.$rouer.push({name:'login'});
        },
        //注册
        click_BigBtn() {
            if (this.password1 !== this.password2) {
                return this.$alert("两次密码不一致！");
            }
            if (!this.phone) {
                return this.$alert("请输入手机号码！");
            }
            if (!this.nick_name) {
                return this.$alert("请输入昵称！");
            }
            if (!this.password1) {
                return this.$alert("请输入密码！");
            }
            if (!this.sms_code) {
                return this.$alert("请输入验证码！");
            }
            if (!this.parent_tj_code) {
                return this.$alert("请输入推荐码！");
            }
            this.$post(this.$path.register, {
                phone: this.phone,
                nick_name: this.nick_name,
                password: this.password1,
                sms_code: this.sms_code,
                parent_tj_code: this.parent_tj_code
            }).then(res => {
                if (res.success) {
                    this.$alert("注册成功");
                    setTimeout(() => {
                        this.$router.push({ name: "login" });
                    }, 2000);
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./login.scss";
.login {
    .get_code {
        border: none;
        input {
            border-bottom: 1px #cfcfcf solid;
        }
    }
    .register_box {
        width: 100%;
        background: #ffffff;
        border-radius: 0.2rem;
        .input_bar {
            padding-left: 0.3rem;
            background: #ffffff;
            border-radius: 0.16rem;
            margin-top: 0.3rem;
            .item {
                width: 100%;
                height: 1.16rem;
                border-bottom: 1px #e5e5e5 solid;
                .label {
                    width: 1.6rem;
                    height: 100%;
                    line-height: 1.1rem;
                    font-size: 0.32rem;
                    float: left;
                }
                input {
                    float: left;
                    margin-left: 0.2rem;
                    width: 4.5rem;
                    height: 100%;
                    margin-top: 0;
                }
            }
            .no_border {
                border: none;
            }
        }
    }
    .go_login{
        color: #666666;
        margin-top: -0.2rem;
    }
}
</style>
