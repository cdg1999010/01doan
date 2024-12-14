<template>
    <div class="borrow_detail">
        <Header tit="Chi tiết vay " color="1"></Header>
        <div class="status box_shadow">
            <div class="head">
                <img src="@/assets/my/ic_thread_4.png" alt />
                <span v-if="data.status_id <100">Tiến trình vay {{data.created_at}}</span>
                <span v-if="data.status_id>=100">Quy trình rút tiền</span>
            </div>
            <div class="sts">
                <div class="strip"></div>
                <div class="sts_item gray_color">
                    <div class="item on">Đã nộp thành công </div>
                    <div :class="{item:true,on:data.status2_ok}">{{data.status2}}</div>
                    <div :class="{item:true,on:data.status3_ok}">{{data.status3}}</div>
                </div>
            </div>
            <div class="tip">
                <div class="tit gray_color">nhắc</div>
                <div class="content">{{data.content}}</div>
            </div>
        </div>
        <div class="detail box_shadow">
            <div class="head">
                <img src="@/assets/my/ic_thread_1.png" alt />
                <span>Chi tiết vay</span>
            </div>
            <div class="content">
                <div class="item">
                    <div class="tit">Số Thứ tự</div>
                    <div class="text">{{data.order_num}}</div>
                </div>
                <div class="item">
                    <div class="tit">Số khoản vay </div>
                    <div class="text">{{Intl.NumberFormat('vi-VN').format(data.money)}}</div>
                </div>
                <div class="item">
                    <div class="tit">Kì hạn </div>
                    <div class="text">{{data.month}}Tháng</div>
                </div>
                <div class="item">
                    <div class="tit">Ngân hàng thu</div>
                    <div class="text">{{user.open_bank}}</div>
                </div>
                <div class="item">
                    <div class="tit">Khoản trả góp</div>
                    <div class="text">{{Intl.NumberFormat('vi-VN').format(data.monthly_supply_money)}}</div>
                </div>
                <div class="item">
                    <div class="tit">Mô tả</div>
                    <div class="text">Xin hãy trả lại đúng giờ mỗi tháng. </div>
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
        return {
            data:{},
            user:{}
        };
    },
    mounted(){
        this.get_data();
    },
    methods:{
        get_data(){
            this.$get(this.$path.order_detail).then(res => {
                if (res.success) {
                    this.data = res.data.order;
                    this.user = res.data.user;
                }
            });
        }
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
                        background: url('/static/img/jj.png');
                        background-size: 100% 100%;
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
        overflow: hidden;
        .head{
            background: #f9fafb;
        }
        .content {
            padding: .3rem;
            .item {
                width: 100%;
                min-height: 0.6rem;
                line-height: 0.6rem;
                display: flex;
                justify-content: space-between;
                font-size: .28rem;
                .tit{
                    color: #8997AE;
                    width: 1.4rem;
                }
                .text{
                    width: 4.8rem;
                    text-align: right;
                }
            }
        }
    }
}
</style>
