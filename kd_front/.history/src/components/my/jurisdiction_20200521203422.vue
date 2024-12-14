<template>
    <div class="jurisdiction">
        <Header tit="开户权限" color="3"></Header>
        <div class="banner">
            <img src="" alt="">
        </div>
        <div class="content">
            <div class="buy_box box_shadow">
                <div class="head">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.jurisdiction{
    padding-left: 0;
    padding-right: 0;
    .banner{
        width: 100%;
        height: 4rem;
        img{
            width: 100%;
        }
    }
    .content{
        padding: .3rem;
        .buy_box{
            width: 100%;
            height: 2rem;
            border-radius: .2rem;
            background: #ffffff;
            overflow: hidden;
            .head{
                width: 100%;
                height: 1.6rem;
                padding: .3rem;
                background: #F9BF3A;
            }
        }

    }
}
</style>