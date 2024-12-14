<template>
    <div class="supplement">
        <Header tit="thông tin bổ sung" color="1"></Header>
        <div class="content border_bottom">Chứng nhận xe, căn nhà, chứng nhận lao động và chứng nhận thu nhập</div>
        <img :src="img_src" v-show="$ht_ip + img_src" alt />
        <div class="add_file">
            <BigBtn label="Thêm thông tin" class="btn"></BigBtn>
            <input type="file" accept="image/*" capture="camera" @change="get_file($event,'sc')" />
        </div>
        <BigBtn label="Xác nhận" class="btn" @click.native="add_info"></BigBtn>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {
            img_src: ""
        };
    },
    mounted(){
        this.get_data();
    },
    methods: {
        get_data() {
            this.$get(this.$path.extraInfo).then(res => {
                if (res.success) {
                    this.img_src = res.data.extra_img_url;
                }
            });
        },
        add_info() {
            if (!this.img_src) return;
            this.$post(this.$path.extraInfo, {
                extra_img_url: this.img_src
            }).then(res => {
                if (res.success) {
                    this.$alert("Đã nộp thành công!");
                    this.$router.go(-1);
                }
            });
        },
        get_file(e) {
            this.img_load = true;
            let formData = new FormData();
            formData.append("img", e.currentTarget.files[0]);
            this.$file(this.$path.upload, formData)
                .then(res => {
                    this.img_load = false;
                    this.img_src = res.data.path;
                })
                .catch(err => {
                    this.img_load = false;
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.supplement {
    .content {
        font-size: 0.3rem;
        padding: 0.3rem 0;
        text-align: center;
        color: #8f8f94;
    }
    img {
        width: 90%;
        margin-left: 5%;
        margin-top: 0.3rem;
    }
    .btn {
        margin-top: 0.4rem;
    }
    .add_file {
        width: 100%;
        height: 1rem;
        position: relative;
        input {
            width: 100%;
            height: 1rem;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }
    }
}
</style>
