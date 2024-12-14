<template>
    <div class="bank_card">
        <Header tit="收款银行卡" color="1"></Header>
        <div class="user_data">
            <div class="input_bar box_shadow">
                <div class="head">填写真实有效的信息，审核才会通过哦~</div>
                <div class="item">
                    <div class="label">姓名</div>
                    <input type="text" />
                </div>
                <div class="item">
                    <div class="label">身份证号</div>
                    <input type="text" />
                </div>
            </div>
            <div class="input_bar box_shadow">
                <div class="item">
                    <div class="label">姓名</div>
                    <input type="text" />
                </div>
                <div class="item">
                    <div class="label">身份证号</div>
                    <input type="text" />
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
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
@import "./user_data.scss";
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