<template>
    <div class="person_data">
        <Header tit="我的资料" color="1" back="false"></Header>
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
.person_data{
    background-image: linear-gradient(to bottom, #F9BF3A, #ffffff);
}
</style>