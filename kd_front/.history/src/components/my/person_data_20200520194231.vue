<template>
    <div class="person_data">
        <Header tit="我的资料" color="1" back="false"></Header>
        <div class="data_box"></div>
    </div>
</template>
<script>
import Header from "../public/header";
export default {
    components: { Header },
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.person_data {
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff);
    .data_box {
        margin-top: 0.2rem;
        width: 100%;
        height: 5.12rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 15px 0px rgba(6, 34, 60, 0.06);
        border-radius: 10px;
    }
}
</style>