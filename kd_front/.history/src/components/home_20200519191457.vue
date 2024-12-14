<template>
    <div class="home">
        <Header tit="首页" color="2" back="false"></Header>
        <div class="max_money">

        </div>
        <div class="product_tit">
            <div class="tit black_color">产品详情</div>
            <div class="tit2 yellow_color">Product</div>
        </div>
    </div>
</template>
<script>
import Header from "./public/header";
export default {
    components: { Header },
    data() {
        return {};
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
.home{

    .max_money{
        width: 100%;
        height: 3.4rem;
    }
    .product_tit{
        width: 100%;
        height: .6rem;
        display: flex;
        flex-direction: row;
        .tit{
            font-size: .4rem;
            font-weight: bold;
        }
    }
}
</style>