<template>
    <div class="login">
        <Header tit="Quên mật khẩu " color="1"></Header>
        <div class="item_tit">Số di động</div>
        <div class="item get_code">d
            <input type="text" v-model="phone" placeholder="Hãy nhập số điện thoại di động" />
            <button
                @click="sendPswSms"
                :disabled="code_count_down != 0"
                class="syellow_color"
            >{{code_count_down > 0 ? code_count_down+ 'sCó thể gửi sau' : 'Lấy mật khẩu '}}</button>
        </div>
        <div class="item_tit">Mật khẩu</div>
        <div class="item">
            <input type="text" v-model="code" placeholder="Hãy nhập mật mã kiểm tra." />
        </div>
        <BigBtn label="bước kế tiếp " class="btn" :disabled="!code"></BigBtn>
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
            play: null //验证码定时器
        };
    },
    beforeDestroy() {
        clearInterval(this.play);
    },
    methods: {
        click_BigBtn() {
            this.$router.push({
                name: "forgetpassword",
                query: { code: this.code, phone: this.phone }
            });
        },
        sendPswSms() {
            if (!this.phone) {
                return this.$alert("Hãy nhập số điện thoại di động ！");
            }
            this.$post(this.$path.sendPswSms, {
                phone: this.phone
            }).then(res => {
                if (res.success) {
                    this.$alert("Gửi thành công ");
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
.get_code {
    display: flex;
    justify-content: space-between;
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
    img {
        width: 1.6rem;
        height: 0.6rem;
        margin-top: 0.28rem;
    }
}
</style>
