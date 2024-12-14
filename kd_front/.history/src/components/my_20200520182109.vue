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
        <div class="action">
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
                        <img src="@/assets/my/right.png" alt />
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
                        <img src="@/assets/my/right.png" alt />
                    </div>
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
                    icon: "",
                    code: "person_data"
                },
                {
                    id: 2,
                    label: "修改密码",
                    icon: "",
                    code: "password"
                },
                {
                    id: 3,
                    label: "佣金收益",
                    icon: "",
                    code: "commission_income"
                },
                {
                    id: 4,
                    label: "我要提现",
                    icon: "",
                    code: "withdraw_deposit"
                },
                {
                    id: 5,
                    label: "朋友圈分享",
                    icon: "",
                    code: "share"
                },
                {
                    id: 6,
                    label: "联系客服",
                    icon: "",
                    code: "service"
                },
                {
                    id: 7,
                    label: "关于",
                    icon: "",
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
                top: -0.94rem;
                clear: both;
                img {
                    width: 1.9rem;
                    height: 1.9rem;
                    border-radius: 50%;
                    overflow: hidden;
                }
            }
            .username {
                font-size: 0.36rem;
                text-align: center;
                height: 0.4rem;
                line-height: 0.4rem;
            }
            .user_lvl {
                display: flex;
                justify-content: center;
                margin-top: 0.1rem;
                .lvl {
                    width: 1.6rem;
                    height: 0.44rem;
                    background: #f6e3b0;
                    border-radius: 0.22rem;
                    border: 1px #e6c798 solid;
                    text-align: center;
                    line-height: 0.44rem;
                }
            }
        }
    }
    .action {
        padding: 0.3rem;
        .action_bar {
            width: 100%;
            background: #ffffff;
            padding: .3rem;
            border-radius: .2rem;
            .a_b_item {
                width: 100%;
                height: 0.4rem;
                margin-top: 0.5rem;
                .icon {
                    width: 0.4rem;
                    float: left;
                    margin-top: 0.02rem;
                    img {
                        width: 0.36rem;
                        margin-top: 0.02rem;
                    }
                }
                .label {
                    font-size: 0.3rem;
                    float: left;
                    margin-left: 0.2rem;
                }
                .op {
                    width: 0.4rem;
                    float: right;
                    img {
                        width: 0.2rem;
                        margin-top: 0.1rem;
                        float: right;
                    }
                }
            }
            .a_b_item:nth-child(1){
                margin-top: 0;
            }
        }
        .action_bar:nth-child(n+2){
            margin-top: .2rem;
        }
    }
}
</style>