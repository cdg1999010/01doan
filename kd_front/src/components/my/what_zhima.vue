<template>
    <div class="what_zhima">
        <Header tit="Cái gì là nợ vừng " color="1"></Header>
        <div class="container margin-t30">
            <div class="page">
                <div class="header">
                    <img src="https://os.alipayobjects.com/rmsportal/dJyTlCRqRfCxUVf.png" />
                    <p
                        class="content"
                    >Hội đồng tín dụng Sesame, một tổ chức đánh giá tín dụng và quản lý độc lập của những đối tượng tài chính khác dưới các dịch vụ tài chính kiến tạo ra khách hàng, khách sạn, khách sạn, thuê, du lịch, hôn nhân và tình yêu, thông tin mật, dịch vụ sinh viên, dịch vụ công ích xã Thương nhân cung cấp dịch vụ tín dụng, và nhiều người dùng hưởng lợi từ tín dụng. Mối quan hệ giữa con người và giữa con người và kinh doanh đang trở nên đơn giản vì tín dụng. </p>
                </div>
                <div class="box box-1">
                    <h3 class="title">Hạt vừng </h3>
                    <p
                        class="txt"
                    >Ghi điểm Sesame là một s ố điểm toàn diện mà xử lý và đánh giá tất cả các khía cạnh của thông tin của người dùng và khách quan đặt trạng thái tín dụng cá nhân dưới sự cho phép của người dùng. Điểm số thay đổi từ 350 tới 950. Giá trị cao hơn thì tín dụng càng cao. Một số sesame cao có thể giúp người dùng kiếm dịch vụ hiệu quả và chất lượng cao. </p>
                    <img src="https://os.alipayobjects.com/rmsportal/xidrMrQSpUlavDl.png" />
                </div>
                <div class="box box-2">
                    <h3 class="title">Đánh dấu sesame </h3>
                    <p class="txt">Bạn có thể xem nó trên ứng dụng ví của Alipay, hoặc trên trang web hoặc ứng dụng của vài thương nhân hợp tác sau khi bạn đã có giấy phép. </p>
                    <p class="txt">Ghi chú Sesame sẽ không tiết lộ thông tin cá nhân liên quan đến tín dụng của bạn cho người khác mà không có giấy phép và sự đồng ý </p>
                    <img src="https://os.alipayobjects.com/rmsportal/dCAdDNQEShdbnmL.png" />
                </div>
                <div class="box box-3">
                    <h3 class="title">chia với vừng </h3>
                    <p class="txt">Các thương gia dịch vụ mạng và các tổ chức tài chính khác nhau có thể tham khảo điểm số của bạn để đưa ra quyết định nhanh hơn và chính xác hơn và cung cấp dịch vụ tốt hơn cho bạn. </p>
                    <p class="txt">Người dân cũng có thể biết mức độ tín dụng của nhau qua điểm vừng, để giúp bạn có nhiều quyết định tốt hơn. </p>
                    <img src="https://os.alipayobjects.com/rmsportal/VGcVLnLkUMMIicS.png" />
                </div>
                <div class="box box-4">
                    <h3 class="title">Tăng điểm sesame</h3>
                    <p
                        class="txt"
                    >Sự cải thiện tín dụng là một tiến trình từng bước, mà không thể phát triển nhanh chóng qua một hành vi hay một sự kiện, và cần tích tụ và chú ý lâu dài. Trong cuộc sống hàng ngày, chúng ta nên sử dụng tất cả các loại vay tiền, thực phẩm tiêu thụ và dịch vụ tín dụng nhiều nhất có thể, và thực hiện đúng thời gian. Bằng cách cải thiện thông tin cá nhân của bạn, nó cũng sẽ giúp đánh giá hoàn to àn mức độ tín dụng của bạn. </p>
                    <img src="https://os.alipayobjects.com/rmsportal/RQDZipmgezVUrsq.png" />
                </div>
                <a
                    href="http://d.alipay.com/i/index.htm?iframeSrc=alipays%3A%2F%2Fplatformapi%2FstartApp%3FappId%3D20000118%26target%3Dcredit"
                    class="footer"
                >Để tìm hiểu thêm về tín dụng sesame, hãy chuyển tới khách hàng ví Alipay  &gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </div>
            <!-- CMS:信用中心cms/芝麻授权/什么是芝麻信用结束:xy/auth/whatszhima.vm -->
        </div>
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
a {
    text-decoration: none;
}
h3,
p {
    margin: 0 15px;
    text-align: left;
    line-height: 25px;
    font-size: 14px;
}
h3 {
    margin: 20px 15px 5px;
    font-size: 16px;
    color: #000;
}
.page {
    color: #666;
    font-family: "Microsoft Yahei";
    font-size: 15px;
}
.header,
.footer {
    text-align: center;
}
.footer {
    height: 40px;
    line-height: 32px;
    text-align: center;
    color: #a5a5a5;
    font-size: 12px;
    display: block;
}
.header .content {
    color: #8f8f95;
}
.header img {
    width: 39%;
    margin: 10% 0 5%;
}
.header .ps {
    margin-bottom: 10px;
}
.box img {
    width: 100%;
    margin: 20px 0 10px;
}
.box .txt {
    color: #666;
}
.box-4 {
    margin-bottom: 40px;
}
</style>
