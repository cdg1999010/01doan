<template>
    <div class="home">
        <Header tit="trang chủ" color="2" back="false"></Header>
        <div class="max_money">
            <img :src="$ht_ip + data.banner" alt />
        </div>
        <div class="home_box">
            <div class="product_tit">
                <div class="tit black_color">chi tiết sản phẩm </div>
                <div class="tit2 yellow_color">FINSOCASH</div>
            </div>
            <div class="detail" :style="{backgroundImage:'url('+ images.detail_bg +')'}">
                <div class="item">
                    <div class="tit">tiền lãi tối thiểu hàng tháng</div>
                    <div class="content yellow_color">
                        <span>{{data.service_rate_text}}%</span>
                    </div>
                </div>
                <div class="item">
                    <div class="tit">số tiền vay</div>
                    <div class="content yellow_color">{{Intl.NumberFormat('vi-VN').format(data.min_money)}}-{{Intl.NumberFormat('vi-VN').format(data.max_money)}}VND</div>
                </div>
                <div class="item">
                    <div class="tit">thời hạn trả góp </div>
                    <div class="content yellow_color">{{data.allow_month1}} Tháng</div>
                </div>
            </div>
            <div class="apply_money" :style="{backgroundImage:'url('+ images.apply_bg +')'}">
                <div class="head syellow_color">Đơn xin</div>
                <div class="money">{{Intl.NumberFormat('vi-VN').format(data.init_money)}}VND</div>
                <div class="strip_box">
                    <div class="subtract" @click="subtract">
                        <img src="@/assets/home/ic_reduction.png" alt />
                    </div>
                    <div ref="max_strip" class="max_strip">
                        <div ref="strip" class="strip" :style="{width:strip_width}">
                            <img
                                src="@/assets/home/ic_point.png"
                                @touchstart="mousedown_strip($event)"
                                alt
                            />
                        </div>
                    </div>
                    <div class="add" @click="add">
                        <img src="@/assets/home/ic_add.png" alt />
                    </div>
                </div>
                <div class="jkqx">
                    <div class="tit black_color">Thời gian vay </div>
                    <div class="item syellow_color">
                        <div
                            v-for="item in data.allow_month"
                            :key="item"
                            :class="{on:month == item}"
                            @click="select_month(item)"
                        >{{item}}Tháng </div>
                    </div>
                </div>
                <div class="mqhk">
                    <div class="tit black_color">Khoản trả góp </div>
                    <div class="mqhk_content">
                      <div class="hk_money">{{Intl.NumberFormat('vi-VN').format(month_money)}}VND</div>
                      <div class="remark">（Tiền tháng {{Intl.NumberFormat('vi-VN').format(month_interest)}}VND）</div>
                    </div>
                </div>
            </div>
            <div class="publicity">
                <div class="icon">
                    <img src="@/assets/home/publicity.png" alt />
                </div>
                <div class="publicity_list">
                    <div class="scroll">
                        <div
                            class="content_s"
                            v-for="(item,index) of advertising_list"
                            :key="index"
                        >
                            {{item.date}}
                            <span class="yellow_color">{{item.phone}}</span>vay
                            <span class="syellow_color">{{item.money}}VND</span>
                        </div>
                    </div>
                </div>
            </div>
<!--             <div class="agreement">
                <div class="icon">
                    <img
                        src="@/assets/home/agreement.png"
                        v-show="agreement"
                        @click="agreement = false"
                        alt
                    />
                    <img
                        src="@/assets/my/ic_get_no.png"
                        v-show="!agreement"
                        @click="agreement = true"
                        alt
                    />
                </div>
                <div class="content">
                    tôi đã đọc và đồng ý
                    <span class="yellow_color" @click="get_agreement(3)">《Hợp đồng quyền 》</span>
                    <span class="yellow_color" @click="get_agreement(2)">《Giao dịch platform 》</span>
                    <span class="yellow_color" @click="get_agreement(1)">《Hợp đồng vay 》</span>
                </div>
            </div> -->
            <div class="ljjk">
                <BigBtn label="Vay ngay" :disabled="!agreement"></BigBtn>
            </div>
        </div>
        <Agreement v-if="agreement_pop" ref="agreement" :data="agreement_data"></Agreement>
        <div class="complete_info" v-show="complete_info">
            <div class="complete_box">
                <div class="head">
                    <img src="@/assets/home/pic_1@2x.png" alt />
                </div>
                <div class="text">Làm ơn cải thiện thông tin! </div>
                <div class="write">
                    <button class="box_shadow" @click="write_data">Điền vào</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "./public/header";
import Footer from "./public/footer";
import BigBtn from "./public/button";
import Agreement from "./home/agreement";
import apply_bg from "@/assets/home/apply_bg.png";
import detail_bg from "@/assets/home/detail_bg.png";
import order_icon from "@/assets/home/pic_2@2x.png";
export default {
    components: { Header, Footer, BigBtn, Agreement },
    data() {
        return {
            images: {
                apply_bg: apply_bg,
                order_icon: order_icon,
                detail_bg: detail_bg
            },
            data: {},
            strip_width: 0,
            start_loca: 0,
            month_money: 0,
            month: 0,
            month_interest: 0,
            agreement: true,
            complete_info: false,
            agreement_pop: false,
            scroll_h: 0,
            now_scroll_h: 0,
            advertising_list: [],
            agreement_data: "",
            play: null,
            errcode: 0,
            editInfo:'Thông tin chưa hoàn chỉnh ',
        };
    },
    beforeDestroy() {
        if (this.play) clearInterval(this.play);
    },
    mounted() {
        this.home_info();
        //生成dk广告
        this.play = setInterval(() => {
            this.scroll_h = document.getElementsByClassName(
                "content_s"
            )[0].clientHeight;
            this.create_advertising();
            this.now_scroll_h += this.scroll_h * 1;
            document.getElementsByClassName("scroll")[0].style.transform =
                "translateY(-" + this.now_scroll_h + "px)";
        }, 3000);
    },
    methods: {
        create_advertising() {
            let date = new Date().toLocaleDateString("en-US");
            const prefixArray = new Array(
                "082",
                "091",
                "081"
            );
            let i = parseInt(prefixArray.length * Math.random());
            let prefix = prefixArray[i];
            let money = 0;
            for (let j = 0; j < 7; j++) {
                if (j < 4) {
                    prefix += "*";
                } else {
                    prefix = prefix + Math.floor(Math.random() * 10);
                }
            }
            let num = Math.random();
            if ((num * 100).toFixed() * 1 < this.data.max_money / 10000) {
                money = (num * 100).toFixed() * 10000;
            } else {
                money = (num * 10).toFixed() * 10000;
            }
            if (money < this.data.min_money) money = this.data.min_money;
            let obj = {
                date: date,
                phone: prefix,
                money: Intl.NumberFormat('vi-VN').format(money)
            };
            this.advertising_list.push(obj);
        },
        home_info() {
            
            this.$get(this.$path.home).then(res => {
                if (res.success) {
                    res.data.allow_month = res.data.allow_month.split(",");
                    res.data.allow_month1 = res.data.allow_month.join("/");
                                        
                    //res.data.service_rate = res.data.service_rate.split(',');
                    res.data.service_rate_text =res.data.service_rate.split(',')[0];
                    this.data = res.data;
                    this.month = this.data.init_month;
                    this.set_month_money();
                    this.set_strip_width();
                    this.create_advertising();
                }
            });
        },
        subtract() {
            if (this.data.init_money - 5000000 >= this.data.min_money) {
                this.data.init_money -= 5000000;
            }
            if (this.data.init_money - 5000000 < this.data.min_money) {
                this.data.init_money = this.data.min_money;
            }
            this.set_strip_width();
        },
        add() {
            if (this.data.init_money + 5000000 <= this.data.max_money) {
                this.data.init_money += 5000000;
            } else {
                this.data.init_money = this.data.max_money;
            }
            this.set_strip_width();
        },
        set_strip_width() {
            this.strip_width =
                (this.data.init_money / this.data.max_money) * 100 + "%";
        },
        mousedown_strip(e) {
            return false;
            this.start_loca = e.touches[0].clientX;
            this.strip_width = this.$refs.strip.offsetWidth;
            e.target.addEventListener("touchmove", this.touchmove);
            e.target.addEventListener("touchend", ee => {
                e.target.removeEventListener("touchmove", this.touchmove);
            });
        },
        touchmove(e) {
            let w = e.touches[0].clientX - this.start_loca; //拖动距离
            if (
                this.strip_width + w < this.$refs.max_strip.offsetWidth &&
                this.strip_width + w > 0
            ) {
                this.$refs.strip.style.width = this.strip_width + w + "px";
                let m =
                    (
                        ((this.strip_width + w) /
                            this.$refs.max_strip.offsetWidth) *
                        this.data.max_money
                    ).toFixed() ;
                m = m - m % 1000;
                this.data.init_money = m;
                if (m <= this.data.min_money) {
                    this.data.init_money = this.data.min_money;
                }
                if (
                    this.$refs.max_strip.offsetWidth -
                        this.$refs.strip.offsetWidth <
                    3
                ) {
                    this.data.init_money = this.data.max_money;
                }
                this.set_month_money();
            }
        },
        select_month(m) {
            this.month = m;
            this.set_month_money();
        },
        set_month_money() {
            const service_rate = this.data.service_rate.split(",")[
                this.month - 1
            ];
            this.month_interest = (
                this.data.init_money *
                (service_rate / 100)
            ).toFixed(2);
            this.month_money = (
                this.data.init_money / this.month +
                this.month_interest * 1
            ).toFixed(2);
        },
        click_BigBtn() {
            this.$get(
                this.$path.apply,
                {
                    money: this.data.init_money,
                    month: this.month
                },
                true
            ).then(res => {
                if (res.success) {
                    this.$router.push({
                        name: "borrow_detail_h",
                        query: {
                            money: this.data.init_money,
                            month: this.month,
                            bank_num: res.data.bank_num,
                            open_bank: res.data.open_bank
                        }
                    });
                } else if (
                    res.errcode == 101
                ) {
                    this.errcode = res.errcode;
                    this.editInfo=res.error;
                    this.complete_info = true;
                }else if (
                    res.errcode == 111
                ) {
                    this.errcode = res.errcode;
                    this.editInfo=res.error;
                    this.complete_info = true;
                }else if (
                    res.errcode == 121
                )  {
                    this.errcode = res.errcode;
                    this.editInfo=res.error;
                    this.complete_info = true;
                } else if (res.errcode == 102) {
                    this.$confirm({
                        msg: res.error,
                        icon: order_icon,
                        cancel: false,
                        ok_text: "Tốt "
                    });
                }
            });
        },
        get_agreement(id) {
            this.$get(this.$path.agreement, { id: id }).then(res => {
                if (res.success) {
                    this.agreement_data = res.data;
                    this.agreement_pop = true;
                }
            });
        },
        write_data() {
            if (this.errcode == 101) {
                this.$router.push({ name: "data_info" });
            } else if (this.errcode == 111) {
                this.$router.push({ name: "id_info" });
            } else if (this.errcode == 121) {
                this.$router.push({ name: "bank_card" });
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.home {
    background: #ffffff;
    .max_money {
        width: 100%;
        img {
            margin-top: -0.04rem;
            width: 100%;
        }
    }
    .home_box {
        padding: 0 0.3rem;
        .product_tit {
            width: 100%;
            height: 0.6rem;
            display: flex;
            flex-direction: row;
            margin-top: 0.3rem;
            .tit,
            .tit2 {
                font-size: 0.4rem;
                font-weight: bold;
            }
            .tit2 {
                margin-left: 0.2rem;
            }
        }
        .detail {
            width: 100%;
            background-size: 100% 100%;
            margin-top: 0.2rem;
            img {
                width: 100%;
            }
        }
        .detail {
            width: 100%;
            height: 2.28rem;
            background-size: 100% 100%;
            margin-top: 0.2rem;
            padding: 0.3rem;
            .item {
                width: 100%;
                height: 0.56rem;
                line-height: 0.56rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.28rem;
                .tit {
                    color: #a2a2a2;
                }
                .content {
                    span:nth-child(2) {
                        color: #999999;
                    }
                }
            }
        }
        .apply_money {
            width: 100%;
            height: 7rem;
            margin-top: 0.3rem;
            background-size: 100% 100%;
            padding: 0.3rem;
            .head {
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.34rem;
                text-align: center;
                font-weight: 600;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 1.16rem;
                    height: 0.02rem;
                    margin-right: 0.2rem;
                    margin-bottom: 0.12rem;
                    background-image: linear-gradient(
                        to right,
                        #fbde60,
                        #e46f00
                    );
                }
                &::after {
                    content: "";
                    display: inline-block;
                    width: 1.16rem;
                    height: 0.02rem;
                    margin-left: 0.2rem;
                    margin-bottom: 0.12rem;
                    background-image: linear-gradient(
                        to right,
                        #e46f00,
                        #fbde60
                    );
                }
            }
            .money {
                font-size: 0.8rem;
                text-align: center;
                color: #5c2d00;
                font-weight: bold;
            }
            .strip_box {
                height: 0.8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .subtract,
                .add {
                    width: 0.4rem;
                    height: 0.4rem;
                    img {
                        width: 100%;
                    }
                }
                .max_strip {
                    width: 4.8rem;
                    height: 0.24rem;
                    background: #ffffff;
                    border-radius: 0.12rem;
                    .strip {
                        height: 0.24rem;
                        border-radius: 0.12rem;
                        position: relative;
                        background-image: linear-gradient(
                            to bottom,
                            #f3654d,
                            #f9ad7d
                        );
                        img {
                            width: 0.42rem;
                            height: 0.58rem;
                            position: absolute;
                            top: -0.1rem;
                            right: -0.2rem;
                        }
                    }
                }
            }
            .jkqx {
                margin-top: 0.5rem;
                .tit {
                    font-size: 0.28rem;
                    font-weight: 600;
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 0.2rem;
                    div {
                        width: 1rem;
                        height: 0.52rem;
                        border-radius: 0.26rem;
                        text-align: center;
                        line-height: 0.52rem;
                        background: #fffbba;
                    }
                    .on {
                        background-image: linear-gradient(
                            to bottom,
                            #f3654d,
                            #f9ad7d
                        );
                        color: #ffffff;
                    }
                }
            }
            .mqhk {
                height: 1rem;
                margin-top: 0.44rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-top: 1px #ffffff solid;
                .mqhk_content{
                  display: flex;
                }
                .tit {
                    font-weight: 600;
                }
                .hk_money {
                    font-size: 0.3rem;
                    color: #b25700;
                }
                .remark {
                    font-size: 0.22rem;
                    color: #ffffff;
                }
                div {
                    line-height: 1rem;
                }
            }
        }
        .publicity {
            width: 100%;
            height: 0.72rem;
            border-radius: 0.36rem;
            margin-top: 0.3rem;
            background-image: linear-gradient(to right, #fae1cf, #fcfaf8);
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 0.3rem;
            .icon {
                width: 0.5rem;
                height: 0.5rem;
                img {
                    width: 100%;
                }
            }
            .publicity_list {
                width: 100%;
                height: 0.4rem;
                overflow: hidden;
                position: relative;
                .scroll {
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: all 300ms;
                    .content_s {
                        display: flex;
                        justify-content: space-between;
                        overflow: auto;
                        height: 0.4rem;
                        margin-left: 0.2rem;
                        span:nth-child(1) {
                            color: #ec6401;
                        }
                        span:nth-child(2) {
                            font-size: 0.28rem;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
        .agreement {
            display: flex;
            flex-direction: row;
            margin-top: 0.3rem;
            .icon {
                width: 0.3rem;
                height: 0.3rem;
                margin-right: 0.1rem;
                img {
                    width: 100%;
                }
            }
            .content {
                font-size: 0.24rem;
            }
        }
        .ljjk {
            padding: 0.2rem 0;
        }
    }
    .complete_info {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.7);
        z-index: 11;
        display: flex;
        justify-content: center;
        align-items: center;
        .complete_box {
            width: 5.6rem;
            border-radius: 0.16rem;
            background: #ffffff;
            .head {
                width: 100%;
                height: 1.7rem;
                border-top-left-radius: 0.16rem;
                border-top-right-radius: 0.16rem;
                background-image: linear-gradient(to right, #fedc3d, #ffbb47);
                position: relative;
                img {
                    position: absolute;
                    top: -0.8rem;
                    left: 1.8rem;
                    width: 2rem;
                    height: 2rem;
                }
            }
            .text {
                margin: 0.4rem 0;
                text-align: center;
                font-size: 0.3rem;
            }
            .write {
                display: flex;
                justify-content: center;
                padding-bottom: 0.4rem;
                button {
                    width: 3.5rem;
                    height: 0.8rem;
                    border-radius: 0.4rem;
                    background-image: linear-gradient(
                        to right,
                        #fedc3d,
                        #ffbb47
                    );
                    color: #613600;
                }
            }
        }
    }
}
</style>
