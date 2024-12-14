<template>
    <div class="wallet">
        <Header tit="钱包" color="4" back="false"></Header>
        <div class="wallet_box">
            sadsa
        </div>
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
    .wallet_box {
        background-image: linear-gradient(to bottom, #fde6af, #ffffff);
    }
}
</style>