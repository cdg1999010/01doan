<template>
    <div class="person_data">
        <Header tit="thông tin của tôi" color="1"></Header>
        <div class="user_data">
            <div class="item" @click="go_detail1">
                <div class="icon">
                    <img src="@/assets/my/id_info.png" alt />
                </div>
                <div class="info">
                    <div class="tit">Thông tin </div>
                    <div class="remark">*Cho chúng tôi biết thông tin </div>
                </div>
                <div class="op">
                    <div class="status">{{data.idInfo ? 'Hoàn thành ' : 'Chưa hoàn '}}</div>
                    <div class="r_icon">
                        <img src="@/assets/my/ic_next_gray.png" alt />
                    </div>
                </div>
            </div>
            <div class="item border_top" @click="go_detail2">
                <div class="icon">
                    <img src="@/assets/my/data_info.png" alt />
                </div>
                <div class="info">
                    <div class="tit">Thông tin </div>
                    <div class="remark">*Cho chúng tôi biết thông tin </div>
                </div>
                <div class="op">
                    <div class="status">{{data.basicInfo ? 'Hoàn thành ' : 'Chưa hoàn'}}</div>
                    <div class="r_icon">
                        <img src="@/assets/my/ic_next_gray.png" alt />
                    </div>
                </div>
            </div>
            <div class="item border_top" @click="go_detail3">
                <div class="icon">
                    <img src="@/assets/my/bank.png" alt />
                </div>
                <div class="info">
                    <div class="tit">Thông tin thẻ ngân hàng</div>
                    <div class="remark">*Tài khoản vay sẽ đưa tiền vào thẻ. </div>
                </div>
                <div class="op">
                    <div class="status">{{data.bankInfo ? 'Hoàn thành' : 'Chưa hoàn '}}</div>
                    <div class="r_icon">
                        <img src="@/assets/my/ic_next_gray.png" alt />
                    </div>
                </div>
            </div>
        </div>
        <div class="user_data">
            <div class="head">Thông tin bổ sung</div>
            <!-- <div class="item" @click="$router.push({name:'zhima'})">
                <div class="icon">
                    <img src="@/assets/my/id_info.png" alt />
                </div>
                <div class="info">
                    <div class="tit">芝麻信用</div>
                    <div class="remark">*测评您的信用资质</div>
                </div>
                <div class="op">
                    <div class="status">{{data.zhimaInfo ? '已验证' : '未验证'}}</div>
                    <div class="r_icon">
                        <img src="@/assets/my/ic_next_gray.png" alt />
                    </div>
                </div>
            </div>-->
            <div class="item border_top" @click="$router.push({name:'supplement'})">
                <div class="icon">
                    <img src="@/assets/my/data_info.png" alt />
                </div>
                <div class="info">
                    <div class="tit">thông tin bổ sung</div>
                    <div class="remark">tăng tỷ lệ xét duyệt</div>
                </div>
                <div class="op">
                </div>
            </div>
        </div>
        <BigBtn class="go_home" label="Trang chủี" @click.native="$router.push({name:'home'})"></BigBtn>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header,BigBtn },
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
            this.$get(this.$path.member_info).then(res => {
                if (res.success) {
                    this.data = res.data;
                }
            });
        },
        go_detail1() {
            this.$router.push({ name: "id_info" });
        },
        go_detail2() {
            if (!this.data.idInfo) {
                this.$router.push({ name: "id_info" });
            }else{
                this.$router.push({ name: "data_info" });
            }
        },
        go_detail3() {
            if (!this.data.idInfo) {
                this.$router.push({ name: "id_info" });
            } else if (!this.data.basicInfo) {
                this.$router.push({ name: "data_info" });
            } else {
                this.$router.push({ name: "bank_card" });
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.person_data {
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff);
    .user_data {
        margin-top: 0.2rem;
        width: 100%;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 15px 0px rgba(6, 34, 60, 0.06);
        border-radius: 0.2rem;
        overflow: hidden;
        .head {
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            background: #f6f9fd;
            color: #738aa4;
        }
        .item {
            width: 100%;
            height: 1.7rem;
            padding: 0.3rem;
            display: flex;
            justify-content: space-between;
            .icon {
                width: 0.76rem;
                height: 100%;
                img {
                    width: 0.76rem;
                    height: 0.76rem;
                    margin-top: 0.17rem;
                }
            }
            .info {
                width: 4rem;
                height: 100%;
                .tit {
                    margin-top: 0.1rem;
                    font-size: 0.32rem;
                    font-weight: 600;
                }
                .remark {
                    margin-top: 0.08rem;
                    color: #858b9c;
                    font-size: 0.24rem;
                }
            }
            .op {
                width: 1.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #858b9c;
                .r_icon {
                    width: 0.26rem;
                    height: 0.26rem;
                    display: flex;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    .audit {
        margin: 0.6rem 0;
    }
    .go_home{
        margin-top: .4rem;
    }
}
</style>
