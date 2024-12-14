<template>
    <div class="legal_liability">
        <Header tit color="1"></Header>
        <div class="tit">法律责任</div>
        <div class="tit tit_e">The legal responsibi</div>
        <div
            class="content1"
        >为明确本产品用户（以下简称“用户”或“您”）与以下简称“本公司”或“我们”或“平台”）之间的权利义务关系，维护双方的合法权益，本着平等互利的原则，双方就本产品服务之相关事宜达成以下协议（下称“本协议”），以资共同遵守。本协议适用于用户注册、使用本公司产品、服务的全部活动，为避免误解，用户成功注册本产品即视为本产品用户，受本协议约束。</div>
        <div
            class="content2"
        >在注册成为本产品用户前，请用户务必认真、仔细阅读，并对本协议全部内容作充分理解。用户成功注册或使用本产品，即视为用户已经充分理解和同意本协议全部内容，本协议立即在用户与本公司之间产生法律效力，用户注册使用本产品服务的全部活动将受到本协议的约束并承担相应的责任和义务。如用户不同意本协议内容，请不要注册或使用本产品。</div>
        <div class="content3">用户须保证在注册或使用本产品时，已经年满18周岁且具备完全民事行为能力。如用户不具备前述条件，用户应终止注册或停止使用本产品</div>
    </div>
</template>
<script>
import Header from "../public/header";
export default {
    components: { Header },
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.legal_liability {
    background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);
    .tit {
        height: .98rem;
        font-size: .7rem;
        font-weight: 600;
        color: rgba(87, 52, 0, 1);
        line-height: .98rem;
    }
    .tit_e{
        font-size: .3rem;
    }
}
</style>