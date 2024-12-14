<template>
    <div class="bank_card">
        <Header tit="收款银行卡" color="1"></Header>
        <div class="user_data"></div>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.bank_card {
    padding-left: 0;
    padding-right: 0;
    .user_data {
        padding: 0.3rem;
        width: 100%;
        background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
    }
}
</style>