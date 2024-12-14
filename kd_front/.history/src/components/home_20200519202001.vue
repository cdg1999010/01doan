<template>
    <div class="home">
        <Header tit="首页" color="2" back="false"></Header>
        <div class="max_money">
            <img src="@/assets/home/banner_home.png" alt="">
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
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./public/header";
import detail_bg from '@/assets/home/detail_bg.png';
import apply_bg from '@/assets/home/apply_bg.png';
export default {
    components: { Header },
    data() {
        return {
            images:{
                detail_bg:detail_bg,
                apply_bg:apply_bg
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
        img{
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
            margin-top: .3rem;
            .tit,
            .tit2 {
                font-size: 0.4rem;
                font-weight: bold;
            }
            .tit2 {
                margin-left: 0.2rem;
            }
        }
        .detail{
            width: 100%;
            height: 2.28rem;
            background-size: 100% 100%;
            margin-top: .2rem;
            padding: .3rem;
            .item{
                width: 100%;
                height: .56rem;
                line-height: .56rem;
                display: flex;
                justify-content: space-between;
                font-size: .28rem;
                .tit{
                    color: #A2A2A2;
                }
                .content{

                    span:nth-child(2){
                        color: #999999;
                    }
                }
            }
        }
        .apply_money{
            width: 100%;
            height: 6rem;
            margin-top: .3rem;
            background-size: 100% 100%;
            padding: .3rem;
            .head{
                height: .5rem;
                line-height: .5rem;
                font-size: .34rem;
                text-align: center;
                &::before{
                    content:'';
                    display: inline-block;
                    width: 1.16rem;
                    height: .02rem;
                    background-image: linear-gradient(to right, #FBDE60, #E46F00);
                }
            }
            .money{
                font-size: .8rem;
                text-align: center;
                color: #5C2D00;
                font-weight: bold;
            }
        }
    }
}
</style>