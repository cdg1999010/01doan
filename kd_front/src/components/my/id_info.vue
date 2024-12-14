<template>
    <div class="id_info">
        <Header tit="Thông tin quan trọng " color="1"></Header>
        <div class="user_data">
            <div class="input_bar box_shadow">
                <div class="head">Điền đầy thông tin đúng và hợp lệ. </div>
                <div class="item">
                    <div class="label">Họ Tên </div>
                    <input type="text" v-model="real_name" :disabled="dis" placeholder="Họ Tên  thật của bạn" />
                </div>
                <div class="item">
                    <div class="label">CMND/CCCD </div>
                    <input
                        type="text"
                        v-model="id_card_num"
                        :disabled="dis"
                        placeholder="Hãy nhập CMND/CCCD diện thật của bạn "
                    />
                </div>
            </div>
            <div class="img_bar box_shadow">
                <div class="head">
                    <div>*Bạn phải có thẻ căn cước riêng và nội dung rõ ràng và dễ đọc. Xin hãy xác nhận cho phép chụp ảnh được bật lên</div>
                </div>
                <div class="file_box box_shadow">
                    <img class="id_img" :src="$ht_ip + rx_img" v-show="rx_img" alt />
                    <div class="img" v-show="!rx_img">
                        <img src="@/assets/my/ic_photo.png" alt />
                        <p class="gray_color"> Ảnh mặt trước CMND/CCCD</p>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        capture="camera"
                        @change="get_file($event,'rx')" :disabled="dis"
                    />
                </div>
                <div class="file_box box_shadow">
                    <img class="id_img" :src="$ht_ip + gh_img" v-show="gh_img" alt />
                    <div class="img" v-show="!gh_img">
                        <img src="@/assets/my/ic_photo.png" alt />
                        <p class="gray_color">Ảnh mặt sau CMND/CCCD</p>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        capture="camera"
                        @change="get_file($event,'gh')" :disabled="dis"
                    />
                </div>
                <div class="file_box box_shadow">
                    <img class="id_img" :src="$ht_ip + sc_img" v-show="sc_img" alt />
                    <div class="img" v-show="!sc_img">
                        <img src="@/assets/my/ic_photo.png" alt />
                        <p class="gray_color">Ảnh CMND/CCCD chụp cùng khuôn mặt bạn</p>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        capture="camera"
                        @change="get_file($event,'sc')" :disabled="dis"
                    />
                </div>
                <div class="require_a">
                    <div class="tit">Điều kiện chụp</div>
                    <div class="content">
                        <div class="item_a">
                            <img src="@/assets/my/require1.png" alt />
                            <div class="text gray_color">√Tiêu chuẩn</div>
                        </div>
                        <div class="item_a">
                            <img src="@/assets/my/require2.png" alt />
                            <div class="text gray_color">×Thiếu biên giới </div>
                        </div>
                        <div class="item_a">
                            <img src="@/assets/my/require3.png" alt />
                            <div class="text gray_color">×Mờ ảnh </div>
                        </div>
                        <div class="item_a">
                            <img src="@/assets/my/require4.png" alt />
                            <div class="text gray_color">×Ánh sáng mạnh</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="img_load" v-show="img_load">Đang tải ảnh ...</div>
            <BigBtn
                label="Xác"
                class="submit_data"
                :disabled="!rx_img || !gh_img || !sc_img || !real_name || !id_card_num"
            ></BigBtn>
        </div>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
import lrz from "lrz";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            img_load: false,
            dis: false,
            rx_img: "",
            gh_img: "",
            sc_img: "",
            real_name: "",
            id_card_num: ""
        };
    },
    mounted() {
        this.get_data();
    },
    methods: {
        get_data() {
            this.$get(this.$path.member_info_detail).then(res => {
                if (res.success) {
                    this.real_name = res.data.real_name;
                    this.dis = this.real_name ? true : false;
                    this.id_card_num = res.data.id_card_num;
                    this.rx_img = res.data.id_card_front_img;
                    this.gh_img = res.data.id_card_back_img;
                    this.sc_img = res.data.id_hold_card_img;
                }
            });
        },
        get_file(e, type) {
            let img_file = e.currentTarget.files[0];
            lrz(img_file, { width: 800 })
                .then(rst => {
                    //成功时执行
                    let formData = new FormData();
                    formData.append(
                        "img",
                        this.convertBase64UrlToBlob(rst.base64)
                    );
                    this.img_load = true;
                    this.$file(this.$path.upload, formData)
                        .then(res => {
                            this.img_load = false;
                            if (res.success) {
                                if (type == "rx") {
                                    this.rx_img = res.data.path;
                                } else if (type == "gh") {
                                    this.gh_img = res.data.path;
                                } else if (type == "sc") {
                                    this.sc_img = res.data.path;
                                }
                            }
                            e.target.value = null;
                        })
                        .catch(err => {
                            this.img_load = false;
                            e.target.value = null;
                        });
                })
                .catch(function(error) {
                    //失败时执行
                })
            // this.img_load = true;
            // let formData = new FormData();
            // formData.append("img", e.currentTarget.files[0]);
            // this.$file(this.$path.upload, formData)
            //     .then(res => {
            //         this.img_load = false;
            //         if (res.success) {
            //             if (type == "rx") {
            //                 this.rx_img = res.data.path;
            //             } else if (type == "gh") {
            //                 this.gh_img = res.data.path;
            //             } else if (type == "sc") {
            //                 this.sc_img = res.data.path;
            //             }
            //         }
            //     })
            //     .catch(err => {
            //         this.img_load = false;
            //     });
        },
        convertBase64UrlToBlob(urlData) {
            let bytes = window.atob(urlData.split(",")[1]); //去掉url的头，并转换为byte

            //处理异常,将ascii码小于0的转换为大于0
            let ab = new ArrayBuffer(bytes.length);
            let ia = new Uint8Array(ab);
            for (let i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i);
            }

            return new Blob([ab], { type: "image/png" });
        },
        click_BigBtn() {
            this.$post(this.$path.idInfo, {
                real_name: this.real_name,
                id_card_num: this.id_card_num,
                id_card_front_img: this.rx_img,
                id_card_back_img: this.gh_img,
                id_hold_card_img: this.sc_img
            }).then(res => {
                if (res.success) {
                    this.$alert("Lưu thành công !");
                    this.$router.go(-1);
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "./user_data.scss";
.id_info {
    padding-left: 0;
    padding-right: 0;
    .user_data {
        padding: 0.3rem;
        width: 100%;
        background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
        .input_bar,
        .img_bar {
            .id_img {
                width: 80%;
                height: 80%;
            }
            .item {
                .next {
                    width: 0.56rem;
                    height: 100%;
                    float: right;
                    img {
                        margin-top: 0.45rem;
                        width: 0.26rem;
                        height: 0.26rem;
                        margin-right: 0.3rem;
                    }
                }
                input{
                    width:100%;
                }
            }
        }
        .img_bar {
            margin-top: 0.2rem;
            padding-left: 0;
            .head {
                width: 100%;
                height: 1.4rem;
                padding: 0.2rem;
                margin-left: 0;
                div {
                    height: 0.4rem;
                    line-height: 0.4rem;
                    text-align: left;
                }
            }
            .file_box {
                width: 5.6rem;
                height: 3.4rem;
                margin: 0.4rem auto;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                .img {
                    width: 2.36rem;
                    height: 2.2rem;
                    img {
                        width: 100%;
                    }
                    p {
                        text-align: center;
                        margin-top: 0.2rem;
                    }
                }
                input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 5.6rem;
                    height: 3.4rem;
                    opacity: 0;
                }
            }
            .require_a {
                padding: 0.1rem;
                .tit {
                    height: 0.4rem;
                    font-size: 0.24rem;
                }
                .content {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 0.1rem;
                    .item_a {
                        width: 1.48rem;
                        height: 1.32rem;
                        img {
                            width: 100%;
                            height: 0.92rem;
                        }
                        .text {
                            height: 0.4rem;
                            font-size: 0.22rem;
                            line-height: 0.4rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .img_load {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba($color: #000000, $alpha: 0.7);
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 11;
        }
        .submit_data {
            margin: 0.6rem 0;
        }
    }
}
</style>
