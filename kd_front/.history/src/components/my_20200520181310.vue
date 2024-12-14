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
                    <div class="lvl yellow_color">普通会员</div>
                </div>
            </div>
        </div>
        <div class="action_bar">
            <div
                class="a_b_item"
                v-for="item of action_list"
                :key="item.id"
                @click="click_item(item.code)"
            >
                <div class="icon">
                    <img :src="item.icon" alt />
                </div>
                <div class="label">{{item.label}}</div>
                <div class="op">
                    <img src="@/assets/usercenter/right.png" alt />
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
            },
            action_list: [
                {
                    id: 1,
                    label: "个人资料",
                    icon: '',
                    code: "person_data"
                },
                {
                    id: 2,
                    label: "修改密码",
                    icon: '',
                    code: "password"
                },
                {
                    id: 3,
                    label: "佣金收益",
                    icon: '',
                    code: "commission_income"
                },
                {
                    id: 4,
                    label: "我要提现",
                    icon: '',
                    code: "withdraw_deposit"
                },
                {
                    id: 5,
                    label: "朋友圈分享",
                    icon: '',
                    code: "share"
                },
                {
                    id: 6,
                    label: "联系客服",
                    icon: '',
                    code: "service"
                },
                {
                    id: 7,
                    label: "关于",
                    icon: as_regards,
                    code: "about"
                }
            ]
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
            margin-top: 1.2rem;
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
                display: flex;
                justify-content: center;
                margin-top: .1rem;
                .lvl{
                    width: 1.6rem;
                    height: .44rem;
                    background: #F6E3B0;
                    border-radius: .22rem;
                    border: 1px #e6c798 solid;
                    text-align: center;
                    line-height: .44rem;
                }
            }
        }
    }
}
</style>