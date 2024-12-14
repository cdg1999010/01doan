<template>
    <div class="login">
        <Header tit="修改密码" color="1"></Header>
        <div class="register_box box_shadow">
            <div class="input_bar">
                <div class="item">
                    <div class="label">手机号码</div>
                    <input type="text" v-model="phone" placeholder="请输入手机号码" />
                </div>
                <div class="item get_code">
                    <div class="label">图文验证码</div>
                    <input type="text" v-model="img_code" placeholder="请输入图文验证码" />
                    <img :src="$path.captcha" alt />
                </div>
                <div class="item get_code">
                    <div class="label">短信验证码</div>
                    <input type="text" v-model="sms_code" placeholder="请输入验证码" />
                    <button
                        @click="sendRegSms"
                        :disabled="code_count_down != 0"
                        class="syellow_color"
                    >{{code_count_down > 0 ? code_count_down+ 's后可发送' : '获取验证码'}}</button>
                </div>
                <div class="item">
                    <div class="label">新密码</div>
                    <input type="password" v-model="password" placeholder="请设置6-16位密码" />
                </div>
                <div class="item">
                    <div class="label">确认密码</div>
                    <input type="password" v-model="password" placeholder="请设置6-16位密码" />
                </div>
            </div>
        </div>
        <BigBtn class="btn" label="完成"></BigBtn>
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
            password: "",
            sms_code: "", //类型：String  必有字段  备注：验证码
            img_code: "", //类型：String  必有字段  备注：验证码
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
            if (!this.img_code) {
                return this.$alert("请输入图文验证码！");
            }
            this.$post(this.$path.mobilecode, {
                code: this.img_code
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
        go_login() {
            this.$router.push({ name: "login" });
        },
        //注册
        click_BigBtn() {
            if (this.password1 !== this.password2) {
                return this.$alert("两次密码不一致！");
            }
            if (!this.phone) {
                return this.$alert("请输入手机号码！");
            }
            if (!this.password) {
                return this.$alert("请输入密码！");
            }
            if (!this.sms_code) {
                return this.$alert("请输入短信验证码！");
            }
            if (!this.img_code) {
                return this.$alert("请输入图片验证码！");
            }
            this.$post(this.$path.register, {
                mobile: this.phone,
                pass: this.password,
                mobile_code: this.sms_code,
                code: this.img_code
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
@import "../login/login.scss";
.login {
    .get_code {
        border: none;
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
                    width: 1.8rem;
                    height: 100%;
                    line-height: 1.1rem;
                    font-size: 0.32rem;
                    float: left;
                }
                input {
                    float: left;
                    margin-left: 0.2rem;
                    width: 4rem;
                    height: 100%;
                    margin-top: 0;
                }
            }
            .get_code {
                display: flex;
                flex-direction: row;
                input {
                    width: 2.75rem;
                }
                button {
                    width: 1.6rem;
                    height: 0.64rem;
                    border: 1px #bc7c1c solid;
                    background: none;
                    border-radius: 0.4rem;
                    margin-top: 0.26rem;
                    margin-right: 0.2rem;
                    font-size: 0.2rem;
                }
                img{
                    width: 1.6rem;
                    height: .6rem;
                    margin-top: .28rem;
                }
            }
            .no_border {
                border: none;
            }
        }
    }
    .go_login {
        color: #666666;
        margin-top: -0.2rem;
    }
}
</style>
