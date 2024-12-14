<template>
    <div :class="{header:true,yellow_bg:color == 1,black_bg:color == 2,black_bg:color == 3}">
        <div class="back h_box" @click="click_back">
            <img
                :src="color == 1 ? images.ic_back_white : images.ic_back_black"
                alt
                v-show="back != 'false'"
            />
        </div>
        <div class="title h_box">{{tit}}</div>
        <div class="more h_box">
        </div>
    </div>
</template>
<script>
import ic_back_white from "@/assets/ic_back_white.png";
import ic_back_black from "@/assets/ic_back_black.png";
export default {
    props: ["tit", "color", "back"],
    data() {
        return {
            images: {
                ic_back_white: ic_back_white,
                ic_back_black: ic_back_black
            }
        };
    },
    methods: {
        click_back() {
            if(eval(this.back) == false)return;
            sessionStorage.setItem('back_status',1);
            this.$router.go(-1);
            setTimeout(() => {
                sessionStorage.removeItem('back_status');
            }, 300);
        }
    }
};
</script>
<style lang="scss" scoped>
.yellow_bg {
    color: #ffffff;
}
.white_bg {
    background: #ffffff;
    color: #151515;
}
.black_bg{
    color: #ffffff;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    z-index: 10;
    .back {
        width: 0.6rem;
        height: 0.88rem;
        img {
            width: 0.36rem;
            height: 0.36rem;
            margin-top: 0.26rem;
        }
    }
    .title {
        height: 0.88rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.88rem;
        font-size: 0.32rem;
    }
    .more {
        width: 0.58rem;
        height: 0.88rem;
        img {
            height: 0.58rem;
            margin-top: 0.15rem;
        }
    }
}
</style>