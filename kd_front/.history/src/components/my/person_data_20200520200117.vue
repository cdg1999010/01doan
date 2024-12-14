<template>
    <div class="person_data">
        <Header tit="我的资料" color="1" back="false"></Header>
        <div class="data_box">
            <div class="item">
                <div class="icon">
                    <img src="@/assets/my/id_info.png" alt="">
                </div>
                <div class="info">
                    <div class="tit">身份信息</div>
                    <div class="remark">*让我们了解您的资料信息</div>
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
.person_data {
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff);
    .data_box {
        margin-top: 0.2rem;
        width: 100%;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 15px 0px rgba(6, 34, 60, 0.06);
        border-radius: .2rem;
        .item{
            width: 100%;
            height: 1.7rem;
            padding: .3rem;
            .icon{
                width: .76rem;
                height: 100%;
                img{
                    width: .76rem;
                    height: .76rem;
                    margin-top: .46rem;
                }
            }
            .content{

            }
        }
    }
}
</style>