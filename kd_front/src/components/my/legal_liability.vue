<template>
    <div class="legal_liability">
        <Header :tit="data.title" color="1"></Header>
        <div class="content" v-html="data.content"></div>
    </div>
</template>
<script>
import Header from "../public/header";
export default {
    components: { Header },
    data(){
        return{
            data:{}
        }
    },
    mounted(){
        this.get_data();
    },
    methods:{
        get_data(){
            this.$get(this.$path.legal_liability).then(res => {
                if (res.success) {
                    this.data = res.data;
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.legal_liability {
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff);
    color: rgba(87, 52, 0, 1);
    .tit {
        height: .98rem;
        font-size: .7rem;
        font-weight: 600;
        line-height: .98rem;
    }
    .tit_e{
        font-size: .3rem;
        padding-bottom: .4rem;
        border-bottom: 1px #ffffff solid;
    }
    .content{
        margin-top: .4rem;
    }
}
</style>