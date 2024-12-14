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
                <div class="op">
                    <div class="status">不完整</div>
                    <div class="r_icon">
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
            display: flex;
            justify-content: space-between;
            .icon{
                width: .76rem;
                height: 100%;
                img{
                    width: .76rem;
                    height: .76rem;
                    margin-top: .17rem;
                }
            }
            .info{
                width: 4rem;
                height: 100%;
                .tit{
                    margin-top: .1rem;
                    font-size: .32rem;
                    font-weight: 600;
                }
                .remark{
                    margin-top: .08rem;
                    color: #858B9C;
                    font-size: .24rem;
                }
            }
            .op{
                width: 1.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #858B9C;
                .r_icon{
                    width: .26rem;
                    height: .26rem;
                    display: flex;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>