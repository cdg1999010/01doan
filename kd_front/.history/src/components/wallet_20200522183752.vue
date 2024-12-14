<template>
    <div class="wallet">
        <Header tit="钱包" color="4" back="false"></Header>
        <div class="wallet_box">
            <div class="wallet_info" :style="{backgroundImage:'url('+ images.bg_wallet +')'}">
                <div class="my_limit">我的额度：￥0.00</div>
                <div class="real_name">
                    <div :class="{lvl:true, yellow_color:false,gray_color:true}">未实名制认证</div>
                </div>
                <div class="money_tit">账户余额（元）</div>
                <div class="money border_bottom1">0.00</div>
                <div class="money_tit margin">待还款金额（元）</div>
                <div class="money">0.00</div>
                <div class="ljjk">
                    <button>立即借款</button>
                </div>
            </div>
            <div class="tip">
                <img src="@/assets/wallet/ic_safe.png" alt="">
                <span>账户资金安全由银行保障</span>
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
            .money_tit {
                color: #b25700;
                font-size: 0.34rem;
                font-weight: 600;
                padding-left: 0.4rem;
                margin-top: 0.6rem;
            }
            .money {
                color: #5c2d00;
                font-size: 0.54rem;
                font-weight: 600;
                padding-left: 0.4rem;
                padding-bottom: 0.3rem;
                margin-top: 0.2rem;
            }
            .border_bottom1 {
                border-bottom: 1px #ffffff dashed;
            }
            .margin {
                margin-top: 0.4rem;
            }
        }
    }
    .ljjk {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
            width: 5.8rem;
            height: 1rem;
            background: #ffffff;
            border-radius: 0.5rem;
            color: #E6A600;
            font-size: .32rem;
            box-shadow:0px 6px 10px 0px rgba(218,135,0,0.38);
        }
    }
    .tip{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: .3rem;
            height: .3rem;
        }
    }
}
</style>