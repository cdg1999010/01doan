<template>
    <div class="contract">
        <Header tit="Hợp đồng vay" color="1"></Header>
        <div class="content" v-html="data.content"></div>
        <div class="content2" v-show="data.content">

            <p>Thời gian ký：{{data.sign_date && new Date(Date.parse(data.sign_date)).toLocaleString('vi-VN')}}</p>
            <p v-if="data.money">Số tiền vay (Bằng số/VND)：{{data.money}}</p>
            <p v-if="data.rate">Lãi suất hàng tháng (%)：{{data.rate}}</p>
            <p v-if="data.month">Kỳ hạn vay (tháng)：{{data.month}}</p>

            <p>Số điện thoại：{{data.mobile}}</p>
            <p>Số nhận diện：{{data.id_card_num}}</p>


            <p>Ký của bên A：</p>
            <img :src="$ht_ip + data.sign_img_url" alt="">
            
            <p>Chữ ký công ty cho vay：</p>

              <div class="seal">
                <img :src="data.seal" >
            </div>

        </div>
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
            this.$get(this.$path.contact).then(res => {
                if (res.success) {
                    this.data = res.data;
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.contract{
    .content2{
        margin-top:1rem;
        p{
            color: red;
            margin-bottom: .1rem;
        }
    }
    .seal{
        position: relative;
        img{
            position:absolute;
            right:0;
            height: 6.6rem;
        }
    }
}
</style>
