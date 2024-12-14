<template>
    <div class="my_borrow">
        <Header tit="我的借款" color="3"></Header>
        <div class="my_list">
            <div class="item">
                <div class="head">
                    <div class="num">借款编号：13689035656</div>
                    <div class="status">
                        <span>正在审核</span>
                        <img src="@/assets/my/ic_next_gray.png" alt="">
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
        height: 100px;
        &::after {
            content: "";
            display: inline-block;
            background: #e86e10;
            width: 0.02rem;
            height: 100%;
            opacity: 0.4;
        }
        .item {
            margin-left: 0.4rem;
            .head {
                width: 100%;
                height: .9rem;
                background: rgba(245, 247, 250, 1);
                padding: 0 .3rem;
                .num{
                    height: 100%;
                    line-height: .9rem;
                }
                .status{
                    
                }
            }
        }
    }
}
</style>