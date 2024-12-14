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
                    <button>立即提现</button>
                </div>
            </div>
            <div class="wxtip">
                <img src="@/assets/wallet/ic_safe.png" alt />
                <span class="gray_color">账户资金安全由银行保障</span>
            </div>
            <div class="status box_shadow">
                <div class="sts">
                    <div class="strip"></div>
                    <div class="sts_item gray_color">
                        <div class="item on">提交成功</div>
                        <div class="item">正在审核</div>
                        <div class="item">到账成功</div>
                    </div>
                </div>
                <div class="tip">
                    <div class="tit gray_color">温馨提示</div>
                    <div class="content">您的个人信用贷款正在审核，请留意您的审核状态！如有疑问，请联系业务员咨询…</div>
                </div>
            </div>
        </div>
        <div class="withdraw_deposit">
            <div class="w_d_box box_shadow">
                <img src="@/assets/wallet/xx.png" alt />
                <div class="inp border_bottom">
                    <span>￥</span>
                    <input type="text" placeholder="0.00" />
                </div>
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
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    background-image: linear-gradient(to bottom, #fde6af, #ffffff);
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
    .ljjk {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
            width: 5.8rem;
            height: 1rem;
            background: #ffffff;
            border-radius: 0.5rem;
            color: #e6a600;
            font-size: 0.32rem;
            box-shadow: 0px 6px 10px 0px rgba(218, 135, 0, 0.38);
        }
    }
    .wxtip {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.4rem 0;
        img {
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.1rem;
        }
        span {
            margin-top: -0.03rem;
        }
    }
    .status {
        width: 100%;
        background: #ffffff;
        border-radius: 0.2rem;
        overflow: hidden;
        .sts {
            width: 100%;
            height: 1.8rem;
            background: #f9fafb;
            padding: 0.4rem 0.6rem;
            .strip {
                width: 4.66rem;
                height: 0.02rem;
                background: #c5cad5;
                margin: 0 auto;
                margin-top: 0.2rem;
            }
            .sts_item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 0.4rem;
                .item {
                    position: relative;
                    &::before {
                        content: "";
                        display: inline-block;
                        width: 0.2rem;
                        height: 0.2rem;
                        background: #c5cad5;
                        border-radius: 50%;
                        position: absolute;
                        top: -0.56rem;
                        left: calc(50% - 0.16rem);
                        border: 3px #ffffff solid;
                    }
                }
                .on {
                    color: #000000;
                    &::before {
                        content: "";
                        width: 0.32rem;
                        height: 0.32rem;
                        // background-image: url(@/assets/my/bank.png);
                        top: -0.62rem;
                        left: calc(50% - 0.22rem);
                    }
                }
            }
        }
        .tip {
            padding: 0.3rem;
            display: flex;
            justify-content: space-between;
            .tit {
                width: 1.2rem;
                height: 0.4rem;
                font-size: 0.28rem;
            }
            .content {
                width: 4.7rem;
                color: #e84a10;
            }
        }
    }
    .withdraw_deposit {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.8);
        z-index: 11;
        display: flex;
        justify-content: center;
        align-items: center;
        .w_d_box {
            opacity: 1;
            width: 6.4rem;
            height: 4.2rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.2rem;
            position: relative;
            padding: 0.3rem;
            img {
                width: 0.24rem;
                height: 0.24rem;
                position: absolute;
                top: 0.3rem;
                right: 0.3rem;
            }
            .inp {
                width: 100%;
                height: 1.2rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                span {
                    font-size: 0.6rem;
                }
                input {
                    width: 4rem;
                    font-size: 0.9rem;
                }
            }
            ::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #cfcfcf;
                font-size: .9rem;
            }

            ::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: #cfcfcf;
                font-size: .9rem;
            }

            :-ms-input-placeholder {
                /* Internet Explorer 10+ */
                color: #cfcfcf;
                font-size: .9rem;
            }
        }
    }
}
</style>