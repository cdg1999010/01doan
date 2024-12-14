<template>
    <div class="borrow_detail">
        <Header tit="借款详情" color="1"></Header>
        <div class="detail box_shadow">
            <div class="head">
                <img src="@/assets/my/ic_thread_1.png" alt />
                <span>借款详情</span>
            </div>
            <div class="content">
                <div class="item">
                    <div class="tit">订单编号</div>
                    <div class="text">L2132353y5677</div>
                </div>
                <div class="item">
                    <div class="tit">借款金额</div>
                    <div class="text">￥500000.00</div>
                </div>
                <div class="item">
                    <div class="tit">借款期限</div>
                    <div class="text">3个月</div>
                </div>
                <div class="item">
                    <div class="tit">到账银行</div>
                    <div class="text">中国银行</div>
                </div>
                <div class="item">
                    <div class="tit">每期还款</div>
                    <div class="text">￥2245.9827</div>
                </div>
                <div class="item">
                    <div class="tit">还款说明</div>
                    <div class="text">请您于每月按时进行还款操作，逾期将给您这生活带来不便！</div>
                </div>
            </div>
        </div>
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
.borrow_detail {
    .detail {
        width: 100%;
        background: #ffffff;
        border-radius: 0.2rem;
        margin-top: 0.2rem;
        overflow: hidden;
        .head {
            background: #f9fafb;
        }
        .content {
            padding: 0.3rem;
            .item {
                width: 100%;
                min-height: 0.6rem;
                line-height: 0.6rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.28rem;
                .tit {
                    color: #8997ae;
                    width: 1.4rem;
                }
                .text {
                    width: 4.8rem;
                    text-align: right;
                }
            }
        }
    }
}
</style>