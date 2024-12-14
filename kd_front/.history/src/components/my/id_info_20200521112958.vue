<template>
    <div class="id_info">
        <Header tit="基本信息" color="1"></Header>
        <div class="data_box">
            <div class="input_bar box_shadow">
                <div class="head">填写真实有效的信息，审核才会通过哦~</div>
                <div class="item">
                    <div class="label">手机号码</div>
                    <input type="text" placeholder="请输入真实姓名" />
                </div>
                <div class="item">
                    <div class="label">身份证号</div>
                    <input type="text" placeholder="请输入真实身份证号" />
                </div>
            </div>
            <div class="img_bar box_shadow">
                <div class="head">填写真实有效的信息，审核才会通过哦~</div>
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
.id_info {
    padding-left: 0;
    padding-right: 0;
    .data_box {
        padding: 0.3rem;
        width: 100%;
        background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
        .input_bar,
        .img_bar {
            padding-left: 0.3rem;
            background: #ffffff;
            border-radius: 0.16rem;
            overflow: hidden;
            .head {
                width: 6.9rem;
                height: 0.8rem;
                line-height: 0.8rem;
                text-align: center;
                background: #f6f9fd;
                color: #738aa4;
                margin-left: -0.3rem;
            }
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
                    width: 4rem;
                    height: 100%;
                }
                .next {
                    width: 0.56rem;
                    height: 100%;
                    float: right;
                    img {
                        margin-top: 0.45rem;
                        width: 0.26rem;
                        height: 0.26rem;
                        margin-right: 0.3rem;
                    }
                }
            }
        }
        .img_bar{
            margin-top: .2rem;
        }
    }
}
</style>