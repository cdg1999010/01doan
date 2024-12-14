const ip = '';
// const ip = 'http://43.240.38.124:8080';
const http = ip + "/api/v1/"
const path = {
    ip:ip,
    register: http + 'register',//注册
    captcha: http + 'captcha',//验证码
    login: http + 'login',//登录
    logout: http + 'logout',//登出
    restpassword: http + 'member/restpassword',
    mobilecode: http + 'mobilecode',//短信验证码
    home: http + 'member/home',//首页相关信息
    member_info: http + 'member/info',//资料完整
    member_info_detail: http + 'member/info/detail',//资料
    upload: http + 'upload',//上传文件
    idInfo: http + 'member/info/idInfo',//提交身份信息
    basicInfo: http + 'member/info/basicInfo',//提交基本信息
    bankInfo: http + 'member/info/bankInfo',//提交银行信息
    apply: http + 'member/order/apply',//申请订单
    withdrawal: http + 'member/wallet/withdrawal',//提现
    wallet: http + 'member/wallet',//钱包信息
    order_detail: http + 'member/order/detail',//订单详情
    kefu: http + 'member/kefu',//客服
    mine: http + 'member/mine',
    alipayInfo: http + 'member/info/alipayInfo',
    extraInfo: http + 'member/info/extraInfo',
    agreement: http + 'member/agreement',
    pay_info: http + 'member/mine/pay_info',
    sign: http + 'member/info/sign',
    contact: http + 'member/mine/contact',
    legal_liability: http + 'member/mine/legal_liability'
}
export default path;