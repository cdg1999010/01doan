<template>
    <div class="wallet">
        <Header tit="钱包" color="4" back="false"></Header>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import Footer from "./public/footer";
export default {
    components: { Header, Footer },
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.wallet {
    background-image: linear-gradient(to bottom, #FDE6AF, #ffffff,#ffffff);
}
</style>