<template>
    <div class="data_info">
        <Header tit="提交资料" color="1"></Header>
        <div class="input_bar">
            <div class="item">
                <div class="label">昵称*</div>
                <input type="text" placeholder="请输入昵称" />
            </div>
            <div class="item">
                <div class="label">真实姓名*</div>
                <input type="text" placeholder="请输入申请人真实姓名" />
            </div>
            <div class="item">
                <div class="label">银行名称*</div>
                <input type="text" placeholder="请输入" />
            </div>
            <div class="item">
                <div class="label">开户支行*</div>
                <input type="text" placeholder="请输入" />
            </div>
            <div class="item no_border">
                <div class="label">银行账号*</div>
                <input type="text" placeholder="请输入" />
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
.data_info {
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff);
    .input_bar {
        padding-left: 0.3rem;
        background: #ffffff;
        border-radius: 0.16rem;
        margin-top: 0.3rem;
        .item {
            width: 100%;
            height: 1.16rem;
            border-bottom: 1px #e5e5e5 solid;
            .label {
                width: 1.6rem;
                height: 100%;
                line-height: 1.16rem;
                font-size: 0.32rem;
                float: left;
            }
            input {
                float: left;
                margin-left: 0.2rem;
                width: 4.5rem;
                height: 100%;
            }
        }
        .no_border {
            border: none;
        }
    }
}
</style>