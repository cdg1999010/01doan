<template>
    <div class="id_info">
        <Header tit="基本信息" color="1"></Header>
        <div class="user_data">
            <div class="input_bar box_shadow">
                <div class="head">填写真实有效的信息，审核才会通过哦~</div>
                <div class="item">
                    <div class="label">手机号码</div>
                    <input type="text" placeholder="请输入真实姓名" />
                </div>
                <div class="item">
                    <div class="label">身份证号</div>
                    <input type="text" placeholder="请输入真实身份证号" />
                </div>
            </div>
            <div class="img_bar box_shadow">
                <div class="head">
                    <div>*须本人身份证，且内容清晰可辨</div>
                    <div>请您确认拍照权限已开启</div>
                </div>
                <div class="file_box box_shadow">
                    <div class="img">
                        <img src="@/assets/my/ic_photo.png" alt="">
                        <p>拍摄身份证人像面</p>
                    </div>
                    <input type="file">
                </div>
            </div>
            <div class="img_bar box_shadow">
                <div class="file_box box_shadow">
                    <div class="img">
                        <img src="@/assets/my/ic_photo.png" alt="">
                        <p>拍摄身份证国徽面</p>
                    </div>
                    <input type="file">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../public/header";
import BigBtn from "../public/button";
export default {
    components: { Header, BigBtn },
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.id_info {
    padding-left: 0;
    padding-right: 0;
    .user_data {
        padding: 0.3rem;
        width: 100%;
        background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
        .input_bar,
        .img_bar {
            padding-left: 0.3rem;
            background: #ffffff;
            border-radius: 0.16rem;
            overflow: hidden;
            .head {
                width: 6.9rem;
                height: 0.8rem;
                line-height: 0.8rem;
                text-align: center;
                background: #f6f9fd;
                color: #738aa4;
                margin-left: -0.3rem;
            }
            .item {
                width: 100%;
                height: 1.16rem;
                border-bottom: 1px #e5e5e5 solid;
                .label {
                    width: 1.6rem;
                    height: 100%;
                    line-height: 1.16rem;
                    font-size: 0.32rem;
                    float: left;
                }
                input {
                    float: left;
                    margin-left: 0.2rem;
                    width: 4rem;
                    height: 100%;
                }
                .next {
                    width: 0.56rem;
                    height: 100%;
                    float: right;
                    img {
                        margin-top: 0.45rem;
                        width: 0.26rem;
                        height: 0.26rem;
                        margin-right: 0.3rem;
                    }
                }
            }
        }
        .img_bar{
            margin-top: .2rem;
            padding-left: 0;
            .head{
                width: 100%;
                height: 1.2rem;
                padding: .2rem;
                margin-left: 0;
                div{
                    height: .4rem;
                    line-height: .4rem;
                }
            }
            .file_box{
                width: 5.6rem;
                height: 3.4rem;
                margin: .4rem auto;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                .img{
                    width: 2.36rem;
                    height: 2.2rem;
                    img{
                        width: 100%;
                    }
                    p{
                        text-align: center;
                        margin-top: .2rem;
                    }
                }
                input{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 5.6rem;
                    height: 3.4rem;
                    opacity: 0;
                }
            }
        }
    }
}
</style>