<template>
    <div class="home">
        <Header tit="首页" color="2" back="false"></Header>
        <div class="max_money"></div>
        <div class="home_box">
            <div class="product_tit">
                <div class="tit black_color">产品详情</div>
                <div class="tit2 yellow_color">Product</div>
            </div>
            <div class="detail">

            </div>
        </div>
    </div>
</template>
<script>
import Header from "./public/header";
import detail_bg from '@/assets/home/detail_bg.png';
export default {
    components: { Header },
    data() {
        return {
            images:{
                detail_bg:detail_bg
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
    .max_money {
        width: 100%;
        height: 3.4rem;
    }
    .home_box {
        padding: 0 0.3rem;
        .product_tit {
            width: 100%;
            height: 0.6rem;
            display: flex;
            flex-direction: row;
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
            height: 2.2rem;
        }
    }
}
</style>