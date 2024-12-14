<template>
    <div class="my">
        <Header tit="个人中心" color="2" back="false"></Header>
        <div class="userinfo black_bg">
            <div class="info_box" :style="{backgroundImage:'url('+ images.user_card +')'}">
                <div class="head_img">
                    <img src="@/assets/my/head_img.png" alt />
                </div>
                <div class="username">Rachel</div>
                <div class="user_lvl">
                    <div class="lvl">普通会员</div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import Footer from "./public/footer";
import user_card from "@/assets/my/user_card.png";
export default {
    components: { Header, Footer },
    data() {
        return {
            images: {
                user_card: user_card
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.my {
    .userinfo {
        width: 100%;
        height: 4rem;
        padding: 0.4rem;
        overflow: hidden;
        .info_box {
            width: 100%;
            height: 3.26rem;
            background-size: 100% 100%;
            margin-top: 1rem;
            position: relative;
            padding-top: 1rem;
            .head_img {
                width: 100%;
                display: flex;
                justify-content: center;
                position: absolute;
                top: -.94rem;
                clear: both;
                img {
                    width: 1.9rem;
                    height: 1.9rem;
                    border-radius: 50%;
                    overflow: hidden;
                }
            }
            .username{
                font-size: .36rem;
                text-align: center;
                height: .4rem;
                line-height: .4rem;
            }
            .user_lvl{

                .lvl{
                    width: 1.6rem;
                    height: .44rem;
                }
            }
        }
    }
}
</style>