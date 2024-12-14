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
                <div class="item select_bank">
                    <div class="label">开户银行</div>
                    <div class="op">
                        <div class="status">请选择</div>
                        <img src="@/assets/my/ic_next_gray.png" alt />
                    </div>
                </div>
                <div class="item">
                    <div class="label">银行卡号</div>
                    <input type="text" placeholder="请输入银行卡号" />
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
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
    .user_data {
        width: 100%;
        .input_bar:nth-child(2){
            margin-top: .3rem;
        }
        .select_bank{
            display: flex;
            justify-content: space-between;
            .op{
                width: 1.2rem;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #C5CAD5;
                margin-right: .3rem;
                font-size: .3rem;
                img{
                    width: .3rem;
                    height: .3rem;
                }
            }
        }
    }
}
</style>