<template>
    <div class="home">
        <Header tit="首页" color="2" back="false"></Header>
        <div class="max_money">
            <img src="@/assets/home/banner_home.png" alt />
        </div>
        <div class="home_box">
            <div class="product_tit">
                <div class="tit black_color">产品详情</div>
                <div class="tit2 yellow_color">Product</div>
            </div>
            <div class="detail" :style="{backgroundImage:'url('+ images.detail_bg +')'}">
                <div class="item">
                    <div class="tit">最低日息</div>
                    <div class="content yellow_color">
                        <span>0.226%</span>
                        <span>0.366%</span>
                    </div>
                </div>
                <div class="item">
                    <div class="tit">借款额度</div>
                    <div class="content yellow_color">￥200000-500000</div>
                </div>
                <div class="item">
                    <div class="tit">分期期限</div>
                    <div class="content yellow_color">可选3/6/9/12/24/36期</div>
                </div>
            </div>
            <div class="apply_money" :style="{backgroundImage:'url('+ images.apply_bg +')'}">
                <div class="head syellow_color">申请金额(元)</div>
                <div class="money">10000</div>
                <div class="strip_box">
                    <div class="subtract">
                        <img src="@/assets/home/ic_reduction.png" alt />
                    </div>
                    <div class="max_strip">
                        <div class="strip">
                            <img src="@/assets/home/ic_point.png" alt />
                        </div>
                    </div>
                    <div class="add">
                        <img src="@/assets/home/ic_add.png" alt />
                    </div>
                </div>
                <div class="jkqx">
                    <div class="tit black_color">借款期限</div>
                    <div class="item syellow_color">
                        <div class="on">3个月</div>
                        <div>6个月</div>
                        <div>7个月</div>
                        <div>12个月</div>
                        <div>24个月</div>
                        <div>36个月</div>
                    </div>
                </div>
                <div class="mqhk">
                    <div class="tit black_color">每期还款</div>
                    <div class="hk_money">￥16966.67</div>
                    <div class="remark">（日利率0.02% 月利息￥290.00）</div>
                </div>
            </div>
            <div class="notice">
                <div class="icon">
                    <img src alt />
                </div>
                <marquee scrollamount="3" class="content">公告公告公告公告公告公告公告公告公告公告公告</marquee>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import Footer from "./public/footer";
import detail_bg from "@/assets/home/detail_bg.png";
import apply_bg from "@/assets/home/apply_bg.png";
export default {
    components: { Header, Footer },
    data() {
        return {
            images: {
                detail_bg: detail_bg,
                apply_bg: apply_bg
            }
        };
    },
    mounted() {
        this.home_info();
    },
    methods: {
        home_info() {
            this.$post(this.$path.home).then(res => {
                if (res.success) {
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.home {
    background: #ffffff;
    .max_money {
        width: 100%;
        height: 3.64rem;
        img {
            margin-top: -0.04rem;
            width: 100%;
        }
    }
    .home_box {
        padding: 0 0.3rem;
        .product_tit {
            width: 100%;
            height: 0.6rem;
            display: flex;
            flex-direction: row;
            margin-top: 0.3rem;
            .tit,
            .tit2 {
                font-size: 0.4rem;
                font-weight: bold;
            }
            .tit2 {
                margin-left: 0.2rem;
            }
        }
        .detail {
            width: 100%;
            height: 2.28rem;
            background-size: 100% 100%;
            margin-top: 0.2rem;
            padding: 0.3rem;
            .item {
                width: 100%;
                height: 0.56rem;
                line-height: 0.56rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.28rem;
                .tit {
                    color: #a2a2a2;
                }
                .content {
                    span:nth-child(2) {
                        color: #999999;
                    }
                }
            }
        }
        .apply_money {
            width: 100%;
            height: 5.9rem;
            margin-top: 0.3rem;
            background-size: 100% 100%;
            padding: 0.3rem;
            .head {
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.34rem;
                text-align: center;
                font-weight: 600;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 1.16rem;
                    height: 0.02rem;
                    margin-right: 0.2rem;
                    margin-bottom: 0.12rem;
                    background-image: linear-gradient(
                        to right,
                        #fbde60,
                        #e46f00
                    );
                }
                &::after {
                    content: "";
                    display: inline-block;
                    width: 1.16rem;
                    height: 0.02rem;
                    margin-left: 0.2rem;
                    margin-bottom: 0.12rem;
                    background-image: linear-gradient(
                        to right,
                        #e46f00,
                        #fbde60
                    );
                }
            }
            .money {
                font-size: 0.8rem;
                text-align: center;
                color: #5c2d00;
                font-weight: bold;
            }
            .strip_box {
                height: 0.8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .subtract,
                .add {
                    width: 0.4rem;
                    height: 0.4rem;
                    img {
                        width: 100%;
                    }
                }
                .max_strip {
                    width: 4.8rem;
                    height: 0.24rem;
                    background: #ffffff;
                    border-radius: 0.12rem;
                    .strip {
                        width: 20%;
                        height: 0.24rem;
                        border-radius: 0.12rem;
                        position: relative;
                        background-image: linear-gradient(
                            to bottom,
                            #f3654d,
                            #f9ad7d
                        );
                        img {
                            width: 0.42rem;
                            height: 0.58rem;
                            position: absolute;
                            top: -0.1rem;
                            right: -0.2rem;
                        }
                    }
                }
            }
            .jkqx {
                margin-top: 0.5rem;
                .tit {
                    font-size: 0.28rem;
                    font-weight: 600;
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 0.2rem;
                    div {
                        width: 1rem;
                        height: 0.52rem;
                        border-radius: 0.26rem;
                        text-align: center;
                        line-height: 0.52rem;
                        background: #fffbba;
                    }
                    .on {
                        background-image: linear-gradient(
                            to bottom,
                            #f3654d,
                            #f9ad7d
                        );
                        color: #ffffff;
                    }
                }
            }
            .mqhk {
                height: 1rem;
                margin-top: 0.44rem;
                display: flex;
                border-top: 1px #ffffff solid;
                .tit {
                    font-weight: 600;
                }
                .hk_money {
                    margin-left: 0.37rem;
                    font-size: 0.3rem;
                    color: #b25700;
                }
                .remark {
                    font-size: 0.22rem;
                }
                div {
                    line-height: 1rem;
                }
            }
        }
        .notice {
            width: 100%;
            height: 0.72rem;
            border-radius: .26rem;
            margin-top: .3rem;
            background-image: linear-gradient(to right, #fab277, #fcfaf8);
        }
    }
}
</style>