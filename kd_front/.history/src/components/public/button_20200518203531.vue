<template>
    <div class="big_btn">
        <button @click="emit_perent" :disabled="disabled">{{label}}</button>
    </div>
</template>
<script>
export default {
    props: ["label","disabled"],
    data() {
        return {};
    },
    methods:{
        emit_perent(){
            this.$parent.click_BigBtn && this.$parent.click_BigBtn();
        }
    }
};
</script>
<style lang="scss" scoped>
.big_btn {
    
    button {
        width: 100%;
        height: 1rem;
        background-image: linear-gradient(to right, #D2A64C, #F9D88D);
        border-radius: 0.5rem;
        font-size: 0.32rem;
        color: #613600;
    }
    button[disabled]{
        background: #A9B1BF;
        color: #ffffff;
    }
}
</style>