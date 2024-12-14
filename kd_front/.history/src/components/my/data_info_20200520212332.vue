<template>
    <div class="data_info">
        <Header tit="提交资料" color="1"></Header>
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
.data_info{
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff);

}
</style>