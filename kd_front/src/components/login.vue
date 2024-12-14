<template>
    <div class="login">
        <Header tit="đăng nhập" color="1" back="false"></Header>
        <div class="tit_e">đăng nhập</div>

        <div class="item_tit margin">Số tài khoản</div>
        <div class="item">
            <input type="text" v-model="phone" maxlength="11" placeholder="Thẻ nhân viên hay số di động " />
        </div>
        <div class="item_tit">mật khẩu </div>
        <div class="item">
            <input type="password" v-model="pass"  placeholder="Hãy nhập mật khẩu." />
        </div>
        <BigBtn label="đăng nhập" class="btn"></BigBtn>
        <div class="op">
            <div class="register" @click="register">đăng ký tài khoản</div>
            <!-- <div class="forget" @click="forget">忘记密码</div> -->
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
            this.$router.push({ name: "password",query:{
                forget:1
            } });
        },
        register() {
            this.$router.push({ name: "register" });
        },
        click_BigBtn() {
            if (!this.phone) {
                return this.$alert("Hãy nhập số điện thoại di động ！");
			}
			if (!this.pass) {
                return this.$alert("Nhập mật khẩu đi. ！");
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
