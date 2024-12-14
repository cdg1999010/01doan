<template>
    <div class="wallet">
        <Header tit="钱包" color="4" back="false"></Header>
        <div class="wallet_box">
            <div class="wallet_info" :style="{backgroundImage:'url('+ images.bg_wallet +')'}">
                <div class="my_limit">我的额度：￥0.00</div>
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
            images:{
                bg_wallet:bg_wallet
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.wallet {
    .wallet_box {
        background-image: linear-gradient(to bottom, #fde6af, #ffffff);
        padding: 0 .3rem;
        .wallet_info{
            width: 100%;
            height: 7.8rem;
            background-size: 100% 100%;
            padding: .9rem .3rem .3rem .3rem;
        }
    }
}
</style>