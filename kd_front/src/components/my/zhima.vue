<template>
    <div class="zhima">
        <Header tit="Tín dụng Sesame " color="1"></Header>
        <div class="authorize-zhima-title">
            <img class="authorize-logo" src="@/assets/my/t1ndlgxethxxxxxxxx.jpg" />
        </div>
        <div class="protocol-auth-detail">
            <div calss="protocol-detail-title">Nhấn vào nút "đồng ý cho phép" để chấp nhận nội dung theo đây: </div>
            <div class="protocol-detail-content">
                <div class="protocol-detail-content">
                    <div class="protocol-detail-content-ul">
                        <div>Cho phép tài trợ vay để chuyển thông tin sau đây, bao gồm cả tên, số thẻ căn cước và số điện thoại di động, để nhận khoản tín dụng để kiểm tra thông tin nhận dạng của chính nó hoặc qua các tổ chức hợp tác; </div>
                        <div>Thẩm quyền tài trợ cho vay để thẩm vấn điểm sesame và thông tin tín dụng liên quan từ credit để đánh giá các giao dịch hay các điều kiện dịch giữa nó và bạn. </div>
                        <div class="tit">Đặc biệt chú ý </div>
                        <div>Trong trường hợp bị mặc định hoặc có hành vi xấu khác tác động đến tín dụng: </div>
                        <div>1. Ông cho phép tín dụng sesame cung cấp số điện thoại, địa chỉ và các thông tin liên lạc khác có thể liên lạc với các bạn dựa trên yêu cầu tài chính vay mượn, để điều tra tính mạng vì xâm phạm hợp đồng. </div>
                        <div>2. Tín dụng Sesame sẽ ghi lại sự vi phạm hợp đồng và cung cấp nó cho những người khác theo luật pháp, mà có thể ảnh hưởng đến các dịch vụ của cuộc sống tín dụng như vay mượn. </div>
                    </div>
                </div>
            </div>
        </div>
        <BigBtn label="để cấp phép" class="sq"></BigBtn>
        <div class="what_zhima gray_color" @click="$router.push({name:'what_zhima'})">Cái gì là nợ vừng</div>
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
            this.$router.push({ name: "zhima_sq" });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.zhima {
    background: #ffffff;
    .authorize-zhima-title {
        width: 100%;
        height: 1.6rem;
        background: #fff;
        border-bottom: 2px solid #00c68d;
        padding-top: 0.3rem;
    }
    .authorize-logo {
        display: block;
        width: 3.3rem;
        margin: 0 auto;
    }
    .protocol-detail-content-ul div {
        margin-bottom: 10px;
    }
    .protocol-detail-content-ul .tit {
        font-weight: bold;
    }
    .protocol-auth-detail{
        padding-top: .2rem;
    }
    .sq {
        margin-top: 0.4rem;
    }
    .what_zhima {
        text-align: right;
        margin-top: 0.2rem;
    }
}
</style>
