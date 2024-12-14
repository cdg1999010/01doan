<template>
    <div class="login">
        <Header tit="Đổi mật khẩu " color="1"></Header>
        <div class="register_box box_shadow">
            <div class="input_bar">
                <div class="item">
                    <div class="label">Số di động</div>
                    <input type="text" v-model="phone" placeholder="" />
                </div>
                <div class="item get_code">
                    <div class="label">Xin nhập</div>
                    <input type="text" v-model="img_code" placeholder="" />
                    <img :src="$path.captcha" alt />
                </div>
                <div class="item get_code" v-if="$route.query.forget == 1">
                    <div class="label">Mã kiểm tra SMS</div>
                    <input type="text" v-model="sms_code" placeholder="" />
                    <button
                        @click="sendPswSms"
                        :disabled="code_count_down != 0"
                        class="syellow_color"
                    >{{code_count_down > 0 ? code_count_down+ 'sCó thể gửi sau ' : 'Lấy mật khẩu '}}</button>
                </div>
                <div class="item">
                    <div class="label">mật khẩu</div>
                    <input type="password" v-model="pass" placeholder="" />
                </div>
                <div class="item">
                    <div class="label">mật khẩu</div>
                    <input type="password" v-model="pass2" placeholder="" />
                </div>
            </div>
        </div>
        <BigBtn class="btn" style="margin-top:50px;" label="Hoàn tấtàn"></BigBtn>
    </div>
</template>

<script>
import Header from "../public/header";
import BigBtn from "../public/button";

export default {
    components: { Header, BigBtn },
    data() {
        return {
            pass: "",
            pass2: "",
            phone:'',
            code_count_down: 0, //验证码倒计时
            play: null, //验证码定时器
            img_code:'',
            sms_code:this.$route.query.forget == 1 ? '' : '888888',
            sendRegSms:''
        };
    },
    methods: {
        //注册
        click_BigBtn() {
            if (this.pass !== this.pass2) {
                return this.$alert("Hai mật khẩu không khớp với nhau!");
            }
            if (!this.pass2) {
                return this.$alert("Xin nhập mật khẩu!");
            }
            this.$post(this.$path.restpassword, {
                pass1: this.pass,
                pass2: this.pass2,
                mobile_code:this.sms_code,
                mobile:this.phone,
                code:this.img_code
            }).then(res => {
                if (res.success) {
                    this.$alert("\n" +
                      "\n" +
                      "Sửa thành công\n");
                    setTimeout(() => {
                        this.$router.push({ name: "login" });
                    }, 2000);
                }
            });
        },
        sendPswSms() {
            if (!this.phone) {
                return this.$alert("Xin hãy nhập số điện thoại! ");
            }
            if(!this.img_code){
                return this.$alert("Hãy nhập mật mã số đồ họa!");
            }
            this.$post(this.$path.mobilecode, {
                phone: this.phone,
                code:this.img_code
            }).then(res => {
                if (res.success) {
                    this.$alert("Gửi thành công");
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
                    width: 2.4rem;
                    height: 100%;
                    line-height: 1.1rem;
                    font-size: 0.32rem;
                    float: left;
                }
                input {
                    float: left;
                    margin-left: 0.2rem;
                    width: 3.4rem;
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
