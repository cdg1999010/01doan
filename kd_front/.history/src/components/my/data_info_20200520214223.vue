<template>
    <div class="data_info">
        <Header tit="提交资料" color="1"></Header>
        <div class="data_box">
            <div class="input_bar box_shadow">
                <div class="item">
                    <div class="label">姓名</div>
                    <input type="text" placeholder="请输入真实姓名" />
                </div>
                <div class="item">
                    <div class="label">身份证号</div>
                    <input type="text" placeholder="请输入身份证号" />
                </div>
                <div class="item">
                    <div class="label">单位名称</div>
                    <input type="text" placeholder="请输入" />
                </div>
                <div class="item">
                    <div class="label">职位</div>
                    <input type="text" placeholder="请输入" />
                </div>
                <div class="item no_border">
                    <div class="label">单位电话</div>
                    <input type="text" placeholder="号码加区号（非必填）" />
                </div>
                <div class="item no_border">
                    <div class="label">工作年龄</div>
                    <input type="text" placeholder="请工作年龄" />
                </div>
                <div class="item no_border">
                    <div class="label">单位地址</div>
                    <input type="text" placeholder="请选择省市区" />
                </div>
                <div class="item no_border">
                    <div class="label">详细地址</div>
                    <input type="text" placeholder="请输入" />
                </div>
                <div class="item no_border">
                    <div class="label">现居住地址</div>
                    <input type="text" placeholder="请输入" />
                </div>
                <div class="item no_border">
                    <div class="label">详细地址</div>
                    <input type="text" placeholder="例：东北石油大学启智寝室楼2A603" />
                </div>
            </div>
            <div class="input_bar box_shadow">
                <div class="head">以下为选填 补充资料可增加额度和审核通过率</div>
                <div class="item">
                    <div class="label">姓名</div>
                    <input type="text" placeholder="请输入真实姓名" />
                </div>
                <div class="item">
                    <div class="label">手机号码</div>
                    <input type="text" placeholder="请输入手机号码" />
                </div>
                <div class="item">
                    <div class="label">关系</div>
                    <input type="text" placeholder="请选择关系" />
                </div>
            </div>
            <BigBtn label="提交" class="submit_data" disabled></BigBtn>
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
.data_info {
    padding-left: 0;
    padding-right: 0;
    .data_box {
        padding: 0.3rem;
        width: 100%;
        background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
        .input_bar {
            padding-left: 0.3rem;
            background: #ffffff;
            border-radius: 0.16rem;
            .head {
                width: 100%;
                height: 0.8rem;
                line-height: 0.8rem;
                text-align: center;
                background: #f6f9fd;
                color: #738aa4;
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
                    width: 4.5rem;
                    height: 100%;
                }
            }
            .no_border {
                border: none;
            }
        }
        .input_bar:nth-child(2) {
            margin-top: 0.2rem;
        }
        .submit_data {
            margin: 0.6rem 0;
        }
    }
}
</style>