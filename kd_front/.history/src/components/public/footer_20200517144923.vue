<template>
    <div class="footer">
        <div
            v-for="item of list"
            :key="item.id"
            @click="switch_module(item.code)"
            :class="{nav_item:true,active:item.code == ckecked_code}"
        >
            <img :src="item.code == ckecked_code ? item.icon_c : item.icon" alt />
            <div class="nav_tit">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
import home from "@/assets/footer/home.png";
import robot from "@/assets/footer/robot.png";
import recharge from "@/assets/footer/recharge.png";
import service from "@/assets/footer/service.png";
import home_checked from "@/assets/footer/home_checked.png";
import robot_checked from "@/assets/footer/robot_checked.png";
import recharge_checked from "@/assets/footer/recharge_checked.png";
import service_checked from "@/assets/footer/service_checked.png";
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: "首页",
                    icon: home,
                    icon_c: home_checked,
                    code: "home"
                },
                {
                    id: 2,
                    name: "机器人",
                    icon: robot,
                    icon_c: robot_checked,
                    code: "robot"
                },
                {
                    id: 3,
                    name: "充值",
                    icon: recharge,
                    icon_c: recharge_checked,
                    code: "recharge"
                },
                {
                    id: 4,
                    name: "个人中心",
                    icon: service,
                    icon_c: service_checked,
                    code: "usercenter"
                }
            ],
            ckecked_code: this.$route.name
        };
    },
    methods: {
        switch_module(code) {
            if (this.$route.name != code) {
                this.$router.push({ name: code });
            }
        }
    }
};
</script>
<style scoped>
.footer {
    width: 100%;
    height: 1.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
    box-shadow: 1px -2px 10px -8px #212c62;
}
.nav_item {
    width: 1.3rem;
    height: 1.3rem;
}
.nav_item img {
    width: 0.54rem;
    height: 0.54rem;
    margin-left: 0.38rem;
    margin-top: 0.14rem;
}
.nav_tit {
    height: 0.3rem;
    font-size: 0.24rem;
    text-align: center;
}
.active {
    color: #0039ff;
}
</style>