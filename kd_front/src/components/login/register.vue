<template>
    <div class="login">
        <Header tit="đăng ký" color="1"></Header>
        <div class="tit_e">đăng ký</div>

        <!-- <form> -->
        <div class="register_box box_shadow">
            <div class="input_bar">
                <div class="item">
                    <div class="tit">Số điện thoại</div>
                    <input type="text" v-model="phone"   maxlength="10" placeholder="Hãy nhập số điện thoại di động" />
                </div>
                <div class="item get_code">
                    <div class="tit">mã xác nhận Captcha</div>
                    <input type="text" v-model="img_code" placeholder="Hãy nhập mã số kiểm tra đồ họa." />
                    <img :src="$path.captcha" alt />
                </div>
                <!-- <div class="item get_code">
                    <div class="label">短信验证码</div>
                    <input type="text" v-model="sms_code" placeholder="请输入验证码" />
                    <button
                        @click="sendRegSms"
                        :disabled="code_count_down != 0"
                        class="syellow_color"
                    >{{code_count_down > 0 ? code_count_down+ 's后可发送' : '获取验证码'}}</button>
                </div> -->
                <div class="item">
                    <div class="tit">Nhập mật khẩu</div>
                    <input type="password" v-model="password" placeholder="Xin hãy đặt mật khẩu số 6-16" />
                </div>
                <div class="item">
                    <div class="tit">Mã mời</div>
                    <input type="text" v-model="invite_code" placeholder="Mã mời" />
                </div>
            </div>
        </div>
        <BigBtn @click="click_BigBtn" class="btn" label="Đăng kí"></BigBtn>
        <div class="go_login" @click="go_login">Ký vô.</div>
        <!-- </form> -->
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
            sms_code: "888888", //类型：String  必有字段  备注：验证码
            img_code: "", //类型：String  必有字段  备注：验证码
            invite_code:"",
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
                return this.$alert("Hãy nhập mã số kiểm tra đồ họa！");
            }
            this.$post(this.$path.mobilecode, {
                code: this.img_code
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
        },
        go_login() {
            this.$router.go(-1);
        },
        //注册
        click_BigBtn() {
            if (this.password1 !== this.password2) {
                return this.$alert("Hai mật khẩu không khớp với nhau. ！");
            }
            
            if (!this.phone || this.phone.length<9 || this.phone.length>10) {
               // return this.$alert("Hãy nhập số điện thoại di động ！");
                return this.$alert("Số điện thoại di động có tối thiểu 9-10 chữ số ！");
            }
            if (!this.password || this.password.length<6) {
                return this.$alert("Nhập mật khẩu đi. ！");
            }
            if (!this.sms_code) {
                return this.$alert("Hãy nhập mã kiểm tra SMS！");
            }
            if (!this.img_code) {
                return this.$alert("Hãy nhập mã để kiểm tra ảnh.！");
            }
            
            if (!this.invite_code) {
                return this.$alert("Hãy nhập Mã mời.！");
            }
            this.$post(this.$path.register, {
                mobile: this.phone,
                pass: this.password,
                mobile_code: this.sms_code,
                code: this.img_code,
                invite_code:this.invite_code
            }).then(res => {
                debugger
                if (res.success) {
                    this.$alert("đã đăng nhập thành công ");
                    setTimeout(() => {
                        //this.$router.push({ name: "my" });
                        this.$router.push({ path: "/my" });
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
