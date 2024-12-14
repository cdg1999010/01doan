<template>
    <div class="agreement_pop">
        <!-- <div class="tit border_bottom">{{data.title}}</div> -->
        <div class="text gray_color" v-html="data.content"></div>
        <div class="close">
            <img src="@/assets/wallet/xx.png" @click="$parent.agreement_pop = false" alt />
        </div>
    </div>
</template>
<script>
export default {
    props:['data'],
    data() {
        return {
            
        };
    }
};
</script>
<style lang="scss" scoped>
.agreement_pop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #ffffff, $alpha: 0.9);
    z-index: 11;
    padding: 0.4rem;
    overflow-y: scroll;
    .tit {
        margin-top: 0.3rem;
        font-size: 0.4rem;
        text-align: center;
        padding-bottom: 0.2rem;
    }
    .text {
        margin-top: 0.2rem;
        font-size: 0.28rem;
    }
    .btn {
        margin: 1rem auto;
        display: flex;
        justify-content: center;
        button {
            width: 6rem;
            height: 1rem;
            background: none;
            border: 1px #bc7c1c solid;
            border-radius: 0.5rem;
            font-size: 0.3rem;
        }
    }
    .close {
        position: fixed;
        top: 0.3rem;
        right: 0.3rem;
        text-align: center;
    }
}
</style>