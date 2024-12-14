<template>
    <div class="wallet">
        <Header tit="ví tiền" color="4" back="false"></Header>
        <div class="wallet_box">
            <div class="wallet_info" :style="{backgroundImage:'url('+ images.bg_wallet +')'}">
                <div class="my_limit">Khoản vay của tôi ：{{order.money && Intl.NumberFormat('vi-VN').format(order.money) || 0}} VND</div>
                <div class="real_name">
                    <div :class="{lvl:true, yellow_color:user.is_verified,gray_color:!user.is_verified}">{{user.is_verified ? 'Xác thực tên thật ' : 'Không xác thực tên tuổi '}}</div>
                </div>
                <div class="money_tit">dư</div>
                <div class="money border_bottom1" >{{user.money && Intl.NumberFormat('vi-VN').format(user.money) || 0}}</div>
<!--                 <div class="money_tit margin">Số tiền rút</div>
                <div class="money">{{user.money_back &&  Intl.NumberFormat('vi-VN').format(user.money_back) || 0}}</div>
 -->                <div class="ljjk">
                    <button @click="show_p_d = true,tx_money = user.money" :disabled="user.money == 0">lập tức rút tiền</button>
                </div>
            </div>
            <div class="wxtip">
                <img src="@/assets/wallet/ic_safe.png" alt />
                <span class="gray_color">Ngân hàng đảm bảo an ninh của tài khoản </span>
            </div>
            <div class="status box_shadow" v-if="order.content">
                <div class="sts">
                    <div class="strip"></div>
                    <div class="sts_item gray_color">
                        <div class="item on">Đã nộp thành công </div>
                        <div :class="{item:true,on:order.status2_ok}">{{order.status2}}</div>
                        <div :class="{item:true,on:order.status3_ok}">{{order.status3}}</div>
                    </div>
                </div>
                <div class="tip">
                    <div class="tit gray_color">nhắc </div>
                    <div class="content" v-if="order.status_id<=100">{{order.content}}</div>
                    <div class="content" v-if="order.status_id>100">{{order.custom_content}}</div>
                </div>
            </div>
        </div>
        <div class="withdraw_deposit" v-show="show_p_d">
            <div class="w_d_box box_shadow">
                <img src="@/assets/wallet/xx.png" @click="show_p_d = false" alt />
                <div class="inp ">
                   <span>VND</span>
                   <input v-model="tx_money" @blur="change_tx_money" type="text" readonly placeholder="0.00" />
              
                </div>
                <div class="inp ">
                   <!--  <span>VND</span>
                    <input v-model="tx_money" @blur="change_tx_money" type="text" placeholder="0.00" />
 -->                
                    <h3 class="syellow_color">Mật khẩu 6 chữ số </h3>
                </div>
                <div class="inp2 border_bottom">
                    <input v-model="tx_password" type="text"  maxlength="6" placeholder="" />
                </div>
                <div class="ktx_tip">
                  VND {{user.money || 0}},
                  
                     <span class="syellow_color" @click="tx_money = user.money">Tổng rút lui </span>,
                     Vui lòng liên hệ với bộ phận chăm sóc khách hàng trực tuyến để hỏi mật khẩu rút tiền
                </div>
                <BigBtn label="Rút" class="w_d_btn"></BigBtn>
            </div>
        </div>
<!--         <div class="withdraw_deposit" v-show="show_w_d">
            <div class="w_d_box box_shadow">
                <img src="@/assets/wallet/xx.png" @click="show_w_d = false" alt />
                <div class="inp ">
                <span>VND</span>
                    <input v-model="tx_money" @blur="change_tx_money" type="text" placeholder="0.00" />

                </div>

                <div class="ktx_tip">
                  VND {{user.money || 0}}
                  
                    <span class="syellow_color" @click="tx_money = user.money">Tổng rút lui </span>
                </div>
                <BigBtn label="Rút" class="w_d_btn"></BigBtn>
            </div>
        </div> -->
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import BigBtn from "./public/button";
import Footer from "./public/footer";
import bg_wallet from "@/assets/wallet/bg_wallet2.png";
export default {
    components: { Header, BigBtn, Footer },
    data() {
        return {
            images: {
                bg_wallet: bg_wallet
            },
            show_w_d: false,
            show_p_d: false,
            user:{},
            order:{},
            tx_money:'',
            tx_password:''
        };
    },
    mounted() {
        this.get_data();
    },
    methods: {
        get_data() {
            this.$get(this.$path.wallet).then(res => {
                if (res.success) {
                    this.user = res.data.user || {};
                    this.order = res.data.order || {};
                }
            });
        },
        change_tx_money(){
            if(this.tx_money > this.user.money){
                this.tx_money = this.user.money;
            }
            if(isNaN(this.tx_money) || this.tx_money < 0){
                this.tx_money = 0;
            }
        },
        click_BigBtn(){
            this.$post(this.$path.withdrawal,{money:this.tx_money,password:this.tx_password}).then(res => {
                if (res.success) {
                    this.$alert('Kết thúc ');
                    this.show_p_d = false;
                    this.$router.push({ path: "/my/borrow_detail?id=1" });
                    this.get_data();
                }
            });
        }

    }
};
</script>
<style lang="scss" scoped>
.wallet {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    background-image: linear-gradient(to bottom, #fde6af, #ffffff);
    .wallet_info {
        width: 100%;
        background-size: 100% 100%;
        padding: 1rem 0.3rem 0.3rem 0.3rem;
        .my_limit {
            font-size: 0.3rem;
            width: 4rem;
            margin-left: 2.3rem;
            font-weight: 600;
        }
        .real_name {
            display: flex;
            justify-content: center;
            margin-top: 0.1rem;
            visibility: hidden;
            .lvl {
                width: 1.9rem;
                height: 0.44rem;
                background: #f6e3b0;
                border-radius: 0.22rem;
                border: 1px #e6c798 solid;
                text-align: center;
                line-height: 0.44rem;
                font-size: 0.22rem;
                visibility: hidden;
            }
        }
        .money_tit {
            color: #b25700;
            font-size: 0.34rem;
            font-weight: 600;
            padding-left: 0.4rem;
            margin-top: 0.6rem;
        }
        .money {
            color: #5c2d00;
            font-size: 0.54rem;
            font-weight: 600;
            padding-left: 0.4rem;
            padding-bottom: 0.3rem;
            margin-top: 0.2rem;
        }
        .border_bottom1 {
            border-bottom: 1px #ffffff dashed;
        }
        .margin {
            margin-top: 0.4rem;
        }
    }
    .ljjk {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
            width: 5.8rem;
            height: 1rem;
            background: #ffffff;
            border-radius: 0.5rem;
            color: #e6a600;
            font-size: 0.32rem;
            box-shadow: 0px 6px 10px 0px rgba(218, 135, 0, 0.38);
        }
    }
    .wxtip {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.4rem 0;
        img {
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.1rem;
        }
        span {
            margin-top: -0.03rem;
        }
    }
    .status {
        width: 100%;
        background: #ffffff;
        border-radius: 0.2rem;
        overflow: hidden;
        .sts {
            width: 100%;
            height: 1.8rem;
            background: #f9fafb;
            padding: 0.4rem 0.6rem;
            .strip {
                width: 4.66rem;
                height: 0.02rem;
                background: #c5cad5;
                margin: 0 auto;
                margin-top: 0.2rem;
            }
            .sts_item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 0.4rem;
                .item {
                    position: relative;
                    &::before {
                        content: "";
                        display: inline-block;
                        width: 0.2rem;
                        height: 0.2rem;
                        background: #c5cad5;
                        border-radius: 50%;
                        position: absolute;
                        top: -0.56rem;
                        left: calc(50% - 0.16rem);
                        border: 3px #ffffff solid;
                    }
                }
                .on {
                    color: #000000;
                    &::before {
                        content: "";
                        width: 0.32rem;
                        height: 0.32rem;
                        background: url('/static/img/jj.png');
                        background-size: 100% 100%;
                        top: -0.62rem;
                        left: calc(50% - 0.22rem);
                    }
                }
            }
        }
        .tip {
            padding: 0.3rem;
            display: flex;
            justify-content: space-between;
            .tit {
                width: 1.2rem;
                height: 0.4rem;
                font-size: 0.28rem;
            }
            .content {
                width: 4.7rem;
                color: #e84a10;
            }
        }
    }
    .withdraw_deposit {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.8);
        z-index: 11;
        display: flex;
        justify-content: center;
        align-items: center;
        .w_d_box {
            opacity: 1;
            width: 6.4rem;
            height: 6rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.2rem;
            position: relative;
            padding: 0.3rem;
            img {
                width: 0.24rem;
                height: 0.24rem;
                position: absolute;
                top: 0.3rem;
                right: 0.3rem;
            }
            .inp {
                width: 100%;
                height: 0.8rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                span {
                    font-size: 0.6rem;
                }
                input {
                    width: 4rem;
                    font-size: 0.8rem;
                }
            }
           .inp2 {
                width: 100%;
                height: 1.4rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                span {
                    font-size: 0.6rem;
                }
                input {
/*                     width: 4rem;
 */                    font-size: 1.4rem;
                }
            }
            .w_d_btn {
                margin-top: 0.3rem;
            }
            .ktx_tip {
                margin: 0.3rem 0;
                color:#cccccc;
            }
            ::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #cfcfcf;
                font-size: 0.9rem;
            }

            ::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: #cfcfcf;
                font-size: 0.9rem;
            }

            :-ms-input-placeholder {
                /* Internet Explorer 10+ */
                color: #cfcfcf;
                font-size: 0.9rem;
            }
        }
    }
}
</style>
