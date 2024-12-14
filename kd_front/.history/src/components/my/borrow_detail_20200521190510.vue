<template>
    <div class="borrow_detail">
        <Header tit="借款详情" color="1"></Header>
        <div class="status box_shadow">
            <div class="head border_bottom">
                <img src="@/assets/my/ic_thread_4.png" alt="">
                <span>借款进度 2020/03/23 18:23:21</span>
            </div>
            <div class="sts">
                <div class="strip"></div>
                <div class="sts_item">
                    <div class="item">提交成功</div>
                    <div class="item">正在审核</div>
                    <div class="item">到账成功</div>
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
        border-radius: .2rem;
        .head{
            width: 100%;
            height: 1rem;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding: 0 .3rem;
            img{
                width: .4rem;
                height: .4rem;
            }
        }
        .sts{
            width: 100%;
            height: 1.8rem;
            background: #F9FAFB;
            padding: .4rem .6rem;
            .strip{
                width: 4.66rem;
                height: .02rem;
                background: #C5CAD5;
                margin: 0 auto;
            }
            .sts_item{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>