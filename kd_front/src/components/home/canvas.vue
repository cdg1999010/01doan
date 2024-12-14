<template>
    <div class="canvas">
        <canvas
            ref="canvas"
            style="background: rgba(255,255,155,0)"
            :width="width"
            :height="height"
            @touchstart.stop="touchstart"
            @touchmove.stop="touchmove"
            @touchend.stop="touchend"
            @mousedown.stop="down"
            @mouseup.stop="up"
        >Hiện trình duyệt không hỗ trợ chữ ký viết tay </canvas>
    </div>
</template>
<script>
export default {
    name: "signCanvas",
    props: {
        width: {
            default: 300
        },
        height: {
            default: 150
        },
        lineWidth: {
            default: 1
        },
        text: {
            default: "Vùng ký hiệu "
        },
        fontSize: {
            default: 20
        }
    },
    data() {
        return {
            dom: null,
            cxt: null,
            start: 0,
            end: 0,
            img_load: false,
            isnull:true
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        // 初始化
        init() {
            this.dom = this.$refs["canvas"];
            if (!this.dom.getContext) {
                alert("Hiện trình duyệt không hỗ trợ chữ ký viết tay ");
                return;
            }
            this.position();
            this.canvasInit();
            window.addEventListener("touchmove", this.position);
            window.addEventListener("resize", this.position);
            window.addEventListener("wheel", this.position);
            window.addEventListener("scroll", this.position);
        },
        // 位置初始化
        position() {
            let direct = this.dom.getBoundingClientRect();
            this.start = direct.x;
            this.end = direct.y;
        },
        // 画布初始化
        canvasInit() {
            this.cxt = this.dom.getContext("2d");
            // this.cxt.fillStyle = "#000000";
            this.cxt.lineCap = "round";
            this.cxt.lineWidth = this.lineWidth;
            this.cxt.clearRect(0, 0, this.width, this.height);
        },
        // pc端鼠标按下开始绘画
        down(e) {
            this.startLine(e.clientX, e.clientY, e);
            e.target.addEventListener("mousemove", this.move);
            document.addEventListener("mouseleave", this.up);
            document.addEventListener("mouseup", this.up);
        },
        // pc端鼠标按下开始绘画后，跟踪移动轨迹
        move(e) {
            this.moveLine(e.clientX, e.clientY, e);
        },
        // pc端鼠标松开结束绘画
        up(e) {
            e.target.removeEventListener("mousemove", this.move);
            this.toSave();
        },
        // 移动端触摸开始绘画
        touchstart(e) {
            this.startLine(
                e.changedTouches[0].clientX,
                e.changedTouches[0].clientY,
                e
            );
        },
        // 移动端触摸开始绘画后，跟踪滑动轨迹
        touchmove(e) {
            this.moveLine(e.touches[0].clientX, e.touches[0].clientY, e);
        },
        touchend() {
            this.toSave();
        },
        // 开始绘画
        startLine(x, y) {
            this.cxt.beginPath();
            x -= this.start;
            y -= this.end;
            this.cxt.moveTo(x, y);
        },
        // 绘制移动轨迹
        moveLine(x, y, event) {
            this.isnull = false;
            event && event.preventDefault();
            x -= this.start;
            y -= this.end;
            this.cxt.lineTo(x, y);
            this.cxt.stroke();
        },
        // 清空绘画数据
        toClear() {
            this.init();
        },
        // 保存绘画数据
        toSave() {
            let base64 = this.dom.toDataURL("image/png");
            // base64转为file对象
            let image = dataURLtoFile(base64, Math.ceil(Math.random() * 100));
            function dataURLtoFile(dataurl, filename) {
                var arr = dataurl.split(","),
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]),
                    n = bstr.length,
                    u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, { type: mime });
            }
            this.$emit("input", base64);
            return image;
        },
        submit_signature() {
            if(this.isnull)return this.$alert('Hãy nhập tên vào');
            this.img_load = true;
            let formData = new FormData();
            formData.append("img", this.toSave());
            this.$file(this.$path.upload, formData)
                .then(res => {
                    this.img_load = false;
                    if (res.success) {
                        this.$post(this.$path.sign, {
                            sign_img_url: res.data.path
                        }).then(res => {
                            this.$parent.is_signature = true;
                            this.$parent.signature_show = false;
                        });
                    }
                })
                .catch(err => {
                    this.img_load = false;
                });
        }
    },
    beforeDestroy() {
        this.toClear();
    }
};
</script>
<style lang='scss' scoped>
.canvas {
    display: flex;
    justify-content: center;
}
canvas {
    width: 6rem;
    height: 3rem;
}
</style>
