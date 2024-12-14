<template>
    <div class="my_borrow">
        <Header tit="我的借款" color="3"></Header>
        <div class="my_list">
            <div class="item">
                <div class="head">
                    <div class="num">借款编号：13689035656</div>
                    <div class="status">
                        <img src="@/assets/my/ic_next_gray.png" alt />
                        <span class="ing">正在审核</span>
                        <!-- <span>已到账</span> -->
                    </div>
                </div>
                <div class="content">
                    <div class="icon">
                        <img src="@/assets/my/bank.png" alt />
                    </div>
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
.my_borrow {
    background: #ffffff;
    padding-left: 0.6rem;
    .my_list {
        width: 100%;
        position: relative;
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
        }
        .item {
            margin-left: 0.4rem;
            border-radius: .12rem;
            border: 1px solid rgba(227, 240, 255, 1);
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
                    width: 1.4rem;
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
                height: 2rem;
                .icon {
                    width: 1.1rem;
                    height: 2rem;
                    img {
                        width: 100%;
                        height: 1.1rem;
                        margin-top: 0.45rem;
                    }
                }
            }
        }
    }
}
</style>