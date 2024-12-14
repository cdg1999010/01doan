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
                    <div class="tit">收款账号</div>
                    <div class="text">6217********1690</div>
                </div>
            </div>
        </div>
        <div class="detail box_shadow">
            <div class="head">
                <img src="@/assets/my/ic_thread_4.png" alt />
                <span>确认借款信息</span>
            </div>
            <div class="content">
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
                    <div class="tit">收款账号</div>
                    <div class="text">6217********1690</div>
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
    background-image: linear-gradient(
        to bottom,
        #f9bf3a,
        #f9bf3a,
        #ffffff,
        #ffffff
    );
    .head {
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 0.3rem;
        font-size: 0.3rem;
        font-weight: 600;
        img {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0.2rem;
        }
    }
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