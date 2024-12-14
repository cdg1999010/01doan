<template>
    <div class="borrow_detail">
        <Header tit="Chi tiết vay" color="1"></Header>
        <div class="detail box_shadow">
            <div class="head">
                <img src="@/assets/my/ic_thread_1.png" alt />
                <span>Xác nhận thông tin vay</span>
            </div>
            <div class="content">
                <div class="item">
                    <div class="tit">Số khoản vay</div>
                    <div class="text">{{Intl.NumberFormat('vi-VN').format($route.query.money)}} VND</div>
                </div>
                <div class="item">
                    <div class="tit">Bán tạm</div>
                    <div class="text">{{$route.query.month}}Tháng</div>
                </div>
                <!-- <div class="item">
                    <div class="tit">到账银行</div>
                    <div class="text">{{$route.query.open_bank}}</div>
                </div>
                <div class="item">
                    <div class="tit">收款账号</div>
                    <div class="text">{{$route.query.bank_num}}</div>
                </div> -->
            </div>
        </div>
        <div class="detail box_shadow">
            <div class="head">
                <img src="@/assets/my/ic_thread_4.png" alt />
                <span>sử dụng vay</span>
            </div>
            <div class="remark">
                <input type="text" v-model="remark" placeholder="Hãy ghi vào mục đích vay mượn" />
            </div>
        </div>
        <div class="consent">
            <img
                src="@/assets/home/agreement.png"
                v-show="agreement"
                @click="agreement = false"
                alt
            />
            <img src="@/assets/my/ic_get_no.png" v-show="!agreement" @click="agreement = true" alt />
            <span>
                Tôi đã đọc và đồng ý
                <span class="yellow_color" @click="get_agreement(1)">《Hợp đồng vay》</span>
            </span>
        </div>
        <div class="signature" v-show="signature_show">
            <div class="signature_box" :style="{backgroundImage:'url('+ images.signature +')'}">
                <div class="tit">Chữ ký viết tay</div>
                <div class="canvas_cz">
                    <Canvas ref="canvas" v-if="signature_show" :width="cnavas_w" :height="cnavas_h"></Canvas>
                </div>
                <button class="yellow_color border_top" @click="submit_signature">xác định</button>
            </div>
        </div>
        <Agreement v-if="agreement_pop" ref="agreement" :data="agreement_data"></Agreement>
        <BigBtn label="Gởi đơn xin" :disabled="!agreement"></BigBtn>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
import Canvas from "../home/canvas";
import Agreement from "./agreement";
import signature from "@/assets/home/signature.png";
export default {
    components: { Header, BigBtn, Canvas,Agreement },
    data() {
        return {
            images: {
                signature: signature
            },
            data: {},
            cnavas_w: 0,
            cnavas_h: 0,
            agreement: false,
            signature_show: false,
            agreement_pop:false,
            remark: "",
            is_signature: false
        };
    },
    methods: {
        click_BigBtn() {
            if (this.is_signature) {
                this.submit_apply();
            } else {
                this.signature();
            }
        },
        submit_signature() {
            this.$refs.canvas.submit_signature();
        },
        signature() {
            this.signature_show = true;
            this.agreement_pop = false;
            setTimeout(() => {
                const d = document.getElementsByClassName("canvas_cz")[0];
                this.cnavas_w = d.clientWidth;
                this.cnavas_h = d.clientHeight;
            }, 30);
        },
        submit_apply() {
            this.$post(this.$path.apply, {
                money: this.$route.query.money,
                month: this.$route.query.month,
                remark: this.remark
            }).then(res => {
                if (res.success) {
                    this.$alert('Ứng dụng thành công');
                    this.$router.push({name:'my_borrow',query:{type:1}});
                } else {
                    this.$confirm({
                        msg: res.error,
                        icon: "",
                        cancel: false,
                        ok_text: "Tốt"
                    });
                }
            });
        },
        get_agreement(id){
            this.$get(this.$path.agreement,{id:id}).then(res => {
                if (res.success) {
                    this.agreement_data = res.data;
                    this.agreement_pop = true;
                }
            });
        },
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
    .head {
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 0.3rem;
        font-size: 0.3rem;
        font-weight: 600;
        img {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0.2rem;
        }
    }
    .detail {
        width: 100%;
        background: #ffffff;
        border-radius: 0.2rem;
        margin-top: 0.2rem;
        overflow: hidden;
        .head {
            background: #f9fafb;
        }
        .remark {
            display: flex;
            justify-content: center;
            padding: 0.3rem;
            input {
                width: 5rem;
                height: 0.9rem;
                border-radius: 0.1rem;
                border: 1px solid rgba(197, 202, 213, 1);
                padding: 0 0.2rem;
            }
        }
        .content {
            padding: 0.3rem;
            .item {
                width: 100%;
                min-height: 0.6rem;
                line-height: 0.6rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.28rem;
                .tit {
                    color: #8997ae;
                    width: 1.4rem;
                }
                .text {
                    width: 4.8rem;
                    text-align: right;
                }
            }
        }
    }
    .consent {
        margin: 0.4rem 0;
        display: flex;
        align-items: center;
        img {
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.1rem;
        }
    }
    .signature {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.8);
        z-index: 11;
        display: flex;
        justify-content: center;
        align-items: center;
        .signature_box {
            width: 6rem;
            border-radius: 0.1rem;
            background-size: 100% 100%;
            .tit {
                padding: 0.3rem;
                text-align: center;
                font-size: 0.3rem;
            }
            .canvas_cz {
                width: 6rem;
                height: 3rem;
            }
            button {
                width: 100%;
                height: 1rem;
                background: none;
                font-size: 0.3rem;
            }
        }
    }
}
</style>
