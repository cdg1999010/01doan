<template>
    <div class="wallet">
        <Header tit="钱包" color="4" back="false"></Header>
        <div class="wallet_box">
            <div class="wallet_info" :style="{backgroundImage:'url('+ images.bg_wallet +')'}">
                <div class="my_limit">我的额度：￥0.00</div>
                <div class="real_name">
                    <div :class="{lvl:true, yellow_color:false,gray_color:true}">未实名制认证</div>
                </div>
                <div class="balance_tit">账户余额（元）</div>
                <div class="balance">0.00</div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import Footer from "./public/footer";
import bg_wallet from "@/assets/wallet/bg_wallet.png";
export default {
    components: { Header, Footer },
    data() {
        return {
            images: {
                bg_wallet: bg_wallet
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.wallet {
    .wallet_box {
        background-image: linear-gradient(to bottom, #fde6af, #ffffff);
        padding: 0 0.3rem;
        .wallet_info {
            width: 100%;
            height: 7.8rem;
            background-size: 100% 100%;
            padding: 1rem 0.3rem 0.3rem 0.3rem;
            .my_limit {
                font-size: 0.3rem;
                width: 4rem;
                margin-left: 2.3rem;
                font-weight: 600;
            }
            .real_name {
                display: flex;
                justify-content: center;
                margin-top: 0.1rem;
                .lvl {
                    width: 1.9rem;
                    height: 0.44rem;
                    background: #f6e3b0;
                    border-radius: 0.22rem;
                    border: 1px #e6c798 solid;
                    text-align: center;
                    line-height: 0.44rem;
                    font-size: 0.22rem;
                }
            }
        }
    }
}
</style>