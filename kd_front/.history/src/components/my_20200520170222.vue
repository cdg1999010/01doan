<template>
    <div class="my">
        <Header tit="个人中心" color="2" back="false"></Header>
        <div class="userinfo"></div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import Footer from "./public/footer";
export default {
    components: { Header, Footer },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.my{

    .userinfo{
        width: 100%;
        height: 4rem;
    }
}
</style>