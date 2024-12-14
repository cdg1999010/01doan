<template>
    <div class="my">
        <Header tit="个人中心" color="2" back="false"></Header>
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
</style>