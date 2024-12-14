<template>
    <div class="jurisdiction">
        <Header tit="开户权限" color="3"></Header>
        <div class="banner">
            <img src="@/assets/my/banner_vip.png" alt />
        </div>
        <div class="content">
            <div class="buy_box box_shadow">
                <div class="head">
                    <div class="tit gray_color">温馨提醒</div>
                    <div class="text">*十五分钟没有下款，资金将原路退回个人账</div>
                </div>
                <div class="vip">
                    <div class="vip_detail border_bottom">
                        <div class="item">
                            <div>￥1300.00</div>
                            <div>中级VIP会员</div>
                            <img src="@/assets/my/ic_get_no.png" alt />
                        </div>
                        <div class="item">
                            <div>￥1300.00</div>
                            <div>中级VIP会员</div>
                            <img src="@/assets/my/ic_get_no.png" alt />
                        </div>
                    </div>
                    <div class="pay_tit gray_color">支付方式</div>
                    <div class="pay_way">
                        <img class="icon" src="@/assets/my/ic_wechat.png" alt="">
                        <div class="name">微信</div>
                        <img class="c" src="@/assets/my/ic_get.png" alt />
                    </div>
                </div>
            </div>
            <div class="consent">
                <img src="@/assets/my/ic_get.png" alt="">
                <span>我已阅读并同意 <span class="syellow_color">《用户协议》</span></span>
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
        return {};
    }
};
</script>
<style lang="scss" scoped>
.jurisdiction {
    padding-left: 0;
    padding-right: 0;
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
                        font-size: .36rem;
                        margin-bottom: .3rem;
                        div:nth-child(2){
                            margin-left: -1rem;
                        }
                        img{
                            width: .4rem;
                            height: .4rem;
                        }
                    }
                }
                .pay_tit{
                    margin-top: .3rem;
                }
                .pay_way{
                    width: 100%;
                    height: .6rem;
                    margin-top: .2rem;
                    line-height: .6rem;
                    .icon{
                        width: .52rem;
                        height: .52rem;
                        float: left;
                        margin-top: .04rem;
                    }
                    div{
                        float: left;
                        margin-left: .4rem;
                        font-size: .36rem;
                    }
                    .c{
                        width: .4rem;
                        height: .4rem;
                        float: right;
                        margin-top: .1rem;
                    }
                }
            }
        }
        .consent{
            display: flex;
            flex-direction: row;
            align-items: center;
            img{
                width: .3rem;
                height: .3rem;
                margin-left: .1rem;
            }
        }
    }
}
</style>