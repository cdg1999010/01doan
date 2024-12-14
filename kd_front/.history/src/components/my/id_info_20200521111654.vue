<template>
    <div class="id_info">
        <Header tit="基本信息" color="1"></Header>
        <div class="data_box">
            
        </div>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header,BigBtn },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.id_info{
    padding-left: 0;
    padding-right: 0;
    .data_box {
        padding: 0.3rem;
        width: 100%;
        background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
    }
}
</style>