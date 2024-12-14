<template>
    <div class="my_borrow">
        <Header tit="我的借款" color="3"></Header>
        <div class="my_list">

        </div>
    </div>
</template>
<script>
import Header from "../public/header";
export default {
    components: { Header },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.my_borrow{
    .my_list{
        width: 100%;
        height: 100px;
        &::after{
            content: '';
            display: inline-block;
            background: #E86E10;
            width: .02rem;
            height: 100%;
            opacity: .4;
        }
    }
}
</style>