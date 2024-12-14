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
            <div class="action_bar" v-for="(list,index) in action_list" :key="index">
                <div
                    class="a_b_item"
                    v-for="item of list"
                    :key="item.id"
                    @click="click_action(item.code)"
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
import ic_courier from "@/assets/my/ic_courier.png";
import ic_courier1 from "@/assets/my/ic_courier1.png";
import ic_courier2 from "@/assets/my/ic_courier2.png";
import ic_courier3 from "@/assets/my/ic_courier3.png";
import ic_courier4 from "@/assets/my/ic_courier4.png";
import ic_courier5 from "@/assets/my/ic_courier5.png";
import ic_courier6 from "@/assets/my/ic_courier6.png";
import ic_courier7 from "@/assets/my/ic_courier7.png";
export default {
    components: { Header, Footer },
    data() {
        return {
            images: {
                user_card: user_card,
                ic_courier: ic_courier,
                ic_courier1: ic_courier1,
                ic_courier2: ic_courier2,
                ic_courier3: ic_courier3,
                ic_courier4: ic_courier4,
                ic_courier5: ic_courier5,
                ic_courier6: ic_courier6,
                ic_courier7: ic_courier7
            },
            action_list: [
                [
                    {
                        id: 1,
                        label: "我的资料",
                        icon: ic_courier,
                        code: "person_data"
                    },
                    {
                        id: 2,
                        label: "我的借款",
                        icon: ic_courier1,
                        code: "my_borrow"
                    },
                    {
                        id: 3,
                        label: "我的还款",
                        icon: ic_courier2,
                        code: "my_borrow"
                    },
                    {
                        id: 4,
                        label: "获取开户权限",
                        icon: ic_courier3,
                        code: "jurisdiction"
                    },
                    {
                        id: 5,
                        label: "法律责任",
                        icon: ic_courier4,
                        code: "legal_liability"
                    },
                    {
                        id: 6,
                        label: "帮助中心",
                        icon: ic_courier5,
                        code: "person_data"
                    }
                ],
                [
                    {
                        id: 7,
                        label: "修改密码",
                        icon: ic_courier6,
                        code: "mypassword"
                    },
                    {
                        id: 8,
                        label: "退出登录",
                        icon: ic_courier7,
                        code: "logout"
                    }
                ]
            ]
        };
    },
    mounted() {
        
    },
    methods: {
        click_action(name){
            this.$router.push({name:name});
        }
    },
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
                    font-size: .22rem;
                }
            }
        }
    }
    .action {
        padding: 0.3rem;
        .action_bar {
            width: 100%;
            background: #ffffff;
            padding: 0.3rem;
            border-radius: 0.2rem;
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
            .a_b_item:nth-child(1) {
                margin-top: 0;
            }
        }
        .action_bar:nth-child(n + 2) {
            margin-top: 0.2rem;
        }
    }
}
</style>