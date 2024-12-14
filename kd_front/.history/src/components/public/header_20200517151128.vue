<template>
    <div :class="{header:true,bg_black:color == 1,bg_white:color == 2}">
        <div class="back h_box" @click="click_back">
            <img
                :src="color == 1 ? images.ic_back_white : images.ic_back_black"
                alt
                v-show="back != 'false'"
            />
        </div>
        <div class="title h_box">{{tit}}</div>
        <div class="more h_box">
            <!-- <img :src="color == 1 ? images.rectangle : images.b_rectangle" alt=""> -->
        </div>
    </div>
</template>
<script>
import rectangle from "@/assets/rectangle.png";
import b_rectangle from "@/assets/b_rectangle.png";
import ic_back_white from "@/assets/ic_back_white.png";
import ic_back_black from "@/assets/ic_back_black.png";
export default {
    props: ["tit", "color", "back"],
    data() {
        return {
            images: {
                rectangle: rectangle,
                b_rectangle: b_rectangle,
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
.bg_black {
    color: #ffffff;
}
.bg_white {
    background: #ffffff;
    color: #151515;
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