<template>
    <div class="borrow_detail">
        <Header tit="借款详情" color="1"></Header>
        <div class="status box_shadow">
            <div class="head border_bottom">
                <img src="@/assets/my/ic_thread_4.png" alt />
                <span>借款进度 2020/03/23 18:23:21</span>
            </div>
            <div class="sts">
                <div class="strip"></div>
                <div class="sts_item gray_color">
                    <div class="item on">提交成功</div>
                    <div class="item">正在审核</div>
                    <div class="item">到账成功</div>
                </div>
            </div>
            <div class="tip">
                <div class="tit gray_color">温馨提示</div>
                <div class="content">您的个人信用贷款正在审核，请留意您的审核状态！如有疑问，请联系业务员咨询…</div>
            </div>
        </div>
        <div class="detail">
            <div class="head border_bottom">
                <img src="@/assets/my/ic_thread_1.png" alt />
                <span>借款详情</span>
            </div>
            <div class="content">
                <div class="item">
                    <div class="tit">订单编号</div>
                    <div class="text">L2132353y5677</div>
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
    .status {
        width: 100%;
        background: #ffffff;
        border-radius: 0.2rem;

        .sts {
            width: 100%;
            height: 1.8rem;
            background: #f9fafb;
            padding: 0.4rem 0.6rem;
            .strip {
                width: 4.66rem;
                height: 0.02rem;
                background: #c5cad5;
                margin: 0 auto;
                margin-top: 0.2rem;
            }
            .sts_item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 0.4rem;
                .item {
                    position: relative;
                    &::before {
                        content: "";
                        display: inline-block;
                        width: 0.2rem;
                        height: 0.2rem;
                        background: #c5cad5;
                        border-radius: 50%;
                        position: absolute;
                        top: -0.56rem;
                        left: calc(50% - 0.16rem);
                        border: 3px #ffffff solid;
                    }
                }
                .on {
                    color: #000000;
                    &::before {
                        content: "";
                        width: 0.32rem;
                        height: 0.32rem;
                        // background-image: url(@/assets/my/bank.png);
                        top: -0.62rem;
                        left: calc(50% - 0.22rem);
                    }
                }
            }
        }
        .tip {
            padding: 0.3rem;
            display: flex;
            justify-content: space-between;
            .tit {
                width: 1.2rem;
                height: 0.4rem;
                font-size: 0.28rem;
            }
            .content {
                width: 4.7rem;
                color: #e84a10;
            }
        }
    }
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
        .content{
            display: flex;
            justify-content: space-between;
            .item{
                width: 100%;
                height: .6rem;
                line-height: .6rem;
            }
        }
    }
}
</style>