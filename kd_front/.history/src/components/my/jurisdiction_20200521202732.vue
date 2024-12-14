<template>
    <div class="jurisdiction">
        <Header tit="开户权限" color="3"></Header>
        <div class="banner">
            <img src="" alt="">
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
}
</style>