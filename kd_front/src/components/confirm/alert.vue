<template>
    <div class="alert" v-show="show">
        <div>{{obj.msg}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            obj: {
                msg: ""
            }
        };
    },
    created(){
        setTimeout(()=>{
            this.show = false;
        },3000)
    }
};
</script>
<style lang="scss" scoped>
.alert {
    width: 100%;
    min-height: 0.8rem;
    position: fixed;
    bottom: 1.4rem;
    display: flex;
    justify-content: center;
    z-index: 100;
    div {
        min-width: 3rem;
        max-width: 5.6rem;
        height: 100%;
        background: #000000;
        // opacity: 0.6;
        padding: 0 0.4rem;
        color: #ffffff;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.8rem;
        border-radius: 0.04rem;
    }
}
</style>