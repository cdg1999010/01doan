<template>
    <div class="login" :style="{backgroundImage:'url('+images.login_bg+')'}">
        <Header tit="忘记密码" color="2"></Header>
        <div class="item_tit">手机号</div>
        <div class="item get_code">
            <input type="text" v-model="phone" placeholder="请输入您的手机号码" />
            <button
                @click="sendPswSms"
                :disabled="code_count_down != 0"
            >{{code_count_down > 0 ? code_count_down+ 's后可发送' : '获取验证码'}}</button>
        </div>
        <div class="item_tit">验证码</div>
        <div class="item">
            <input type="text" v-model="code" placeholder="请输入验证码" />
        </div>
        <BigBtn label="下一步" class="btn" :disabled="!code"></BigBtn>
    </div>
</template>

<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            phone: "", //手机号码
            code: "", //验证码
            code_count_down: 0, //验证码倒计时
            play: null, //验证码定时器
        };
    },
    beforeDestroy(){
        clearInterval(this.play);
    },
    methods: {
        click_BigBtn() {
            this.$router.push({
                name: "forgetpassword",
                query: { code: this.code,phone: this.phone }
            });
        },
        sendPswSms() {
            if (!this.phone) {
                return this.$alert("请输入手机号码！");
            }
            this.$post(this.$path.sendPswSms, {
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
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./login.scss";
</style>
