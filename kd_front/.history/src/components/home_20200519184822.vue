<template>
    <div class="home">
        <Header tit="首页" color="2" back="false"></Header>
        <div class="max_money">
            
        </div>
    </div>
</template>
<script>
import Header from "./public/header";
export default {
    components: { Header },
    data() {
        return {};
    },
    mounted() {
        this.home_info();
    },
    methods: {
        home_info() {
            this.$post(this.$path.home).then(res => {
                if (res.success) {
                    
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
</style>