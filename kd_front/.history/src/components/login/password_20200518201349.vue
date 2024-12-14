<template>
    <div class="login">
		<Header tit="修改密码" color="2"></Header>
		<div class="item_tit">密码</div>
		<div class="item">
			<input type="password" v-model="pass1" placeholder="请输入密码">
		</div>
		<div class="item_tit">确认密码</div>
		<div class="item">
			<input type="password" v-model="pass2" placeholder="请再次输入密码">
		</div>
		<BigBtn label="确认" class="btn"></BigBtn>
	</div>
</template>

<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
	components: { Header,BigBtn },
    data() {
        return {
			pass1:'',
			pass2:''
		};
	},
	methods:{
		click_BigBtn(){
			if (this.pass1 !== this.pass2) {
                return this.$alert("两次密码不一致！");
            }
            this.$post(this.$path.resetPsw, {
				phone: this.$route.query.phone,
				password:this.pass1,
				sms_code:this.$route.query.code
            }).then(res => {
                if (res.success) {
					this.$alert("修改成功");
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
@import './login.scss';
</style>
