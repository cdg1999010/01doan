<template>
    <div class="jurisdiction">
        <Header tit="Mở tài khoản " color="3"></Header>
        <div class="banner">
            <img src="@/assets/my/banner_vip.png" alt />
        </div>
        <div class="content">
            <div class="buy_box box_shadow">
                <div class="head">
                    <div class="tit gray_color">Nhắc nhở ấm </div>
                    <div class="text">*Nếu không còn tiền trong vòng lăm phút nữa, quỹ sẽ được trả về tài khoản cá nhân. </div>
                </div>
                <div class="vip">
                    <div class="vip_detail border_bottom">
                        <div class="item" @click="type = 1">
                            <div>￥{{data.vip1_price}}</div>
                            <div>Thành viên cấp cao </div>
                            <img src="@/assets/my/ic_get_no.png" v-show="type != 1" alt />
                            <img src="@/assets/home/agreement.png" v-show="type == 1" alt />
                        </div>
                        <div class="item" @click="type = 2">
                            <div>￥{{data.vip2_price}}</div>
                            <div>Thành viên cấp cao </div>
                            <img src="@/assets/my/ic_get_no.png" v-show="type != 2" alt />
                            <img src="@/assets/home/agreement.png" v-show="type == 2" alt />
                        </div>
                    </div>
                    <div class="pay_tit gray_color">Phương pháp thanh toán </div>
                    <div class="pay_way">
                        <img class="icon" src="@/assets/my/ic_wechat.png" alt />
                        <div class="name">{{data.pay_qrcode_title}}</div>
                        <img class="c" src="@/assets/my/ic_get.png" alt />
                    </div>
                </div>
            </div>
            <div class="consent">
                <div class="icon">
                    <img
                        src="@/assets/home/agreement.png"
                        v-show="agreement"
                        @click="agreement = false"
                        alt
                    />
                    <img
                        src="@/assets/my/ic_get_no.png"
                        v-show="!agreement"
                        @click="agreement = true"
                        alt
                    />
                </div>
                <span>
                    Tôi đã đọc và đồng ý
                    <span class="syellow_color">《Thỏa thuận người dùng》</span>
                </span>
            </div>
            <BigBtn label="Mua ngay đi. " class="submit_data" @click.native="code_show = true" :disabled="!agreement"></BigBtn>
        </div>
        <div class="qr_code" v-show="code_show">
            <div class="code_box">
                <p>Đầu mối ấm, liên hệ với chuyên gia dịch vụ khách hàng để xử lý.</p>
                <img :src="$ht_ip + data.pay_qrcode" alt />
                <span class="close" @click="code_show = false">×</span>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            data: {},
            agreement: false,
            type: 1,
            code_show:false
        };
    },
    mounted() {
        this.get_data();
    },
    methods: {
        get_data() {
            this.$get(this.$path.pay_info).then(res => {
                if (res.success) {
                    this.data = res.data;
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.jurisdiction {
    padding-left: 0;
    padding-right: 0;
    background: #ffffff;
    .banner {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .content {
        padding: 0.3rem;
        .buy_box {
            width: 100%;
            border-radius: 0.2rem;
            background: #ffffff;
            overflow: hidden;
            .head {
                width: 100%;
                height: 1.6rem;
                padding: 0.3rem;
                background: rgba(249, 191, 58, 0.1);
                div {
                    height: 0.5rem;
                    line-height: 0.5rem;
                }
                .text {
                    color: #e84a10;
                    font-size: 0.28rem;
                }
            }
            .vip {
                padding: 0.3rem;
                .vip_detail {
                    .item {
                        width: 100%;
                        height: 0.6rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 0.36rem;
                        margin-bottom: 0.3rem;
                        div:nth-child(2) {
                            margin-left: -1rem;
                        }
                        img {
                            width: 0.4rem;
                            height: 0.4rem;
                        }
                    }
                }
                .pay_tit {
                    margin-top: 0.3rem;
                }
                .pay_way {
                    width: 100%;
                    height: 0.6rem;
                    margin-top: 0.2rem;
                    line-height: 0.6rem;
                    .icon {
                        width: 0.52rem;
                        height: 0.52rem;
                        float: left;
                        margin-top: 0.04rem;
                    }
                    div {
                        float: left;
                        margin-left: 0.4rem;
                        font-size: 0.36rem;
                    }
                    .c {
                        width: 0.4rem;
                        height: 0.4rem;
                        float: right;
                        margin-top: 0.1rem;
                    }
                }
            }
        }
        .consent {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0.4rem 0;
            img {
                width: 0.3rem;
                height: 0.3rem;
                margin-right: 0.2rem;
                margin-top: 0.08rem;
            }
        }
        .submit_data {
            margin: 0.6rem 0;
        }
    }
    .qr_code {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba($color: #000000, $alpha: 0.6);
        z-index: 11;
        .code_box {
            width: 6rem;
            height: 6.4rem;
            background: #ffffff;
            border-radius: 0.12rem;
            position: relative;
            .close {
                position: absolute;
                top: 0.1rem;
                right: 0.3rem;
                font-size: .6rem;
            }
            img{
                width: 5rem;
                height: 5rem;
                margin-left: .5rem;
                margin-top: .4rem;
            }
            p{
                padding-left: .6rem;
                font-weight: bold;
                margin-top: .2rem;
            }
        }
    }
}
</style>
