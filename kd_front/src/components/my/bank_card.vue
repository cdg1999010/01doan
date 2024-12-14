<template>
    <div class="bank_card">
        <Header tit="Đang nhận thẻ ngân hàng " color="1"></Header>
        <div class="user_data">
            <div class="input_bar box_shadow">
                <div class="head">Điền đầy đủ các thông tin bên dưới </div>
                <div class="item">
                    <div class="label">Tên chủ thẻ</div>
                    <input type="text" v-model="data.real_name" disabled placeholder="Hãy nhập tên thật của bạn" />
                </div>
                <div class="item">
                    <div class="label">CMND/CCCD</div>
                    <input type="text" v-model="data.id_card_num" disabled placeholder="Hãy nhập số nhận diện" />
                </div>
            </div>
            <div class="input_bar box_shadow">
                <div class="item select_bank">
                    <div class="label">Ngân hàng</div>
                    <div class="op" @click="bank_name">
                        <div class="status">{{data.open_bank ? data.open_bank : 'Hãy chọn'}}</div>
                        <img src="@/assets/my/ic_next_gray.png" alt />
                    </div>
                </div>
                <div class="item">
                    <div class="label">Số thẻ ngân hàng</div>
                    <input type="text" v-model="data.banK_num" :disabled="dis" placeholder="Xin hãy nhập số thẻ ngân hàng" />
                </div>
            </div>
        </div>
        <div class="tip">
            <div class="tit gray_color">nhắc</div>
            <div class="content">
<!--                 <p>Thẻ ngân hàng được điền phải là thẻ của bạn hoặc người thân.</p>
 -->                <p>Khi xác nhận sẽ không thể thay đổi. </p>
            </div>
        </div>
        <BigBtn label="Xác nhận" class="submit_data" :disabled="!data.open_bank || !data.banK_num"></BigBtn>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
import { bank_list } from "@/common/data";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            data: {},
            select_bank_name: "",
            picker: null,
            dis:false
        };
    },
    mounted() {
        this.get_data();
    },
    beforeDestroy() {
        if (this.picker) {
            this.picker.hide();
            this.picker.dispose();
        }
    },
    methods: {
        get_data() {
            this.$get(this.$path.member_info_detail).then(res => {
                if (res.success) {
                    this.data = res.data;
                    this.dis = this.data.banK_num ? true : false;
                }
            });
        },
        bank_name() {
            if(this.dis)return;
            this.picker = new mui.PopPicker({
                layer: 1
            });
            let index = 0;
            for (const i in bank_list) {
                if (bank_list[i].value == this.data.open_bank) {
                    index = i;
                }
            }
            this.picker.pickers[0].setSelectedIndex(index);
            this.picker.setData(bank_list);
            this.picker.show(SelectedItem => {
                this.data.open_bank = SelectedItem[0].value;
            });
        },
        click_BigBtn() {
            this.$post(this.$path.bankInfo, this.data).then(res => {
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
.bank_card {
    background-image: linear-gradient(
        to bottom,
        #f9bf3a,
        #f9bf3a,
        #ffffff,
        #ffffff
    );
    .user_data {
        width: 100%;
        .input_bar:nth-child(2) {
            margin-top: 0.3rem;
        }
        .select_bank {
            display: flex;
            justify-content: space-between;
            .op {
                width: 1.9rem;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color: #c5cad5;
                margin-right: 0.3rem;
                font-size: 0.3rem;
                img {
                    width: 0.3rem;
                    height: 0.3rem;
                }
            }
        }
    }
    .tip {
        margin-top: 0.3rem;
        .content {
            color: #e84a10;
            margin-top: 0.1rem;
        }
    }
    .submit_data {
        margin: 0.6rem 0;
    }
}
</style>
