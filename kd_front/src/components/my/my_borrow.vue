<template>
    <div class="my_borrow">
        <Header :tit="$route.query.type == 1 ? 'Tiền của tôi ' : 'Tiền của ta '" color="3"></Header>
        <div class="my_list">
            <div class="item box_shadow" v-if="data.order_num">
                <div class="head">
                    <div class="num">Số vay ：{{data.order_num}}</div>
                    <div class="status" @click="$router.push({name:'borrow_detail',query:{id:1}})">
                        <img src="@/assets/my/ic_next_gray.png" alt />
                        <span class="ing" v-if="!data.status3_ok">{{data.status2}}</span>
                        <span v-if="data.status3_ok">{{data.status3}}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="icon">
                        <img src="@/assets/my/bank.png" alt />
                    </div>
                    <div class="info">
                        <div class="money">Tổng ：{{Intl.NumberFormat('vi-VN').format(data.money)}} VND</div>
                        <div class="yg">Trả nợ hàng tháng：{{data.monthly_supply_money}}x{{data.month}}</div>
                        <div class="date gray_color">Ngày đăng ký vay ：{{data.created_at}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m_b_nodata" v-if="!data.order_num">
            <img src="@/assets/my/m_b_nodata.png" alt />
            <p class="gray_color">Không Bill! </p>
            <p class="gray_color">Hiện giờ anh không có hóa đơn cho vay. </p>
        </div>
    </div>
</template>
<script>
import Header from "../public/header";
export default {
    components: { Header },
    data() {
        return {
            data: {}
        };
    },
    mounted() {
        this.get_data();
    },
    methods: {
        get_data() {
            if (this.$route.query.type == 1) {
                this.$get(this.$path.order_detail).then(res => {
                    if (res.success) {
                        this.data = res.data.order || [];
                    }
                });
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.my_borrow {
    background: #ffffff;
    padding-left: 0.6rem;
    .my_list {
        width: 100%;
        position: relative;
        padding-top: 0.2rem;
        &::after {
            content: "";
            display: inline-block;
            background: #e86e10;
            width: 0.02rem;
            height: 100%;
            opacity: 0.4;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .item {
            margin-left: 0.4rem;
            border-radius: 0.12rem;
            border: 1px solid rgba(227, 240, 255, 1);
            position: relative;
            &::after {
                content: "";
                display: inline-block;
                width: 0.17rem;
                height: 0.17rem;
                border: 0.06rem #f9bf3a solid;
                border-radius: 50%;
                position: absolute;
                top: 0.3rem;
                left: -0.56rem;
                background: #ffffff;
                z-index: 2;
            }
            .head {
                width: 100%;
                height: 0.9rem;
                background: rgba(245, 247, 250, 1);
                padding: 0 0.3rem;
                display: flex;
                justify-content: space-between;
                .num {
                    height: 100%;
                    line-height: 0.9rem;
                }
                .status {
                    width: 1.8rem;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    img {
                        width: 0.26rem;
                        height: 0.26rem;
                        margin-left: 0.06rem;
                    }
                    .ing {
                        color: #e86e10;
                    }
                }
            }
            .content {
                width: 100%;
                /* height: 2rem; */
                padding: 0.3rem;
                display: flex;
                flex-direction: row;
                .icon {
                    width: 1.1rem;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 1.1rem;
                        margin-top: 0.15rem;
                    }
                }
                .info {
                    margin-left: 0.2rem;
                    div {
                        /* height: 0.466rem; */
                        line-height: 0.466rem;
                    }
                    .money {
                        color: #06223c;
                        font-size: 0.3rem;
                    }
                    .yg {
                        color: #e86e10;
                        font-size: 0.3rem;
                    }
                }
            }
        }
        .item:nth-child(n + 2) {
            margin-top: 0.2rem;
        }
    }
    .m_b_nodata {
        margin-left: -0.3rem;
        margin-top: 2rem;
        img {
            width: 100%;
            margin-bottom: 0.4rem;
        }
        p {
            text-align: center;
            font-size: 0.32rem;
        }
    }
}
</style>
