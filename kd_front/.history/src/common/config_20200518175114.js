const ip = '';//http://121.127.226.165:2000
const http = ip + "/mb/api/mobile/"
const path = {
    ip:ip,
    register: ip + "/mb/index/register",//注册
    sendRegSms: ip + '/mb/index/sendRegSms',//发送验证码
    sendPswSms: ip + '/mb/index/sendPswSms',//发送验证码
    resetPsw: ip + '/mb/index/fgResetPsw',//修改密码
    resetPsw2: ip + '/mb/index/resetPsw',//修改密码
    login: ip + "/mb/index/login",//登录
    logout:ip + '/mb/index/logout',//登出
    getGrzx: http + 'member/getGrzx',//个人中心
    getGrzl: http + 'member/getGrzl',//个人资料
    updateGrzl: http + 'member/updateGrzl',//更新个人资料
    pageSonPrf: http + 'member/pageSonPrf',//直接会员收益
    pageGrandsonPrf: http + 'member/pageGrandsonPrf',//间接会员收益
    countSub: http + 'member/countSub',//我的团队
    getPrd: http + 'prd/getPrd',//机器人
    buyPrd: http + 'prd/buy',//购买机器人
    getWalet: http + 'wallet/getWalet',//提现页面
    applyBalanceOut:http + 'wallet/applyBalanceOut',//提现
    getPrfRank:http + 'member/getPrfRank',//收益排行
    getBuyRec:http + 'prd/getBuyRec',//购买记录
    memberIndex:http + 'member/memberIndex',//首页
    //getComBank:http + 'sys/getComBank',//充值
    getItemItrd:http + 'sys/getItemItrd',//获取内容(公司视频,代理介绍,收益介绍)
    rbtrefresh:http + 'rbt/refresh',//点赞刷新
    handPrf:http + 'rbt/handPrf',//点赞
    getComPrf:http + 'sys/getComPrf',//公司收益报表
    pageBill:http + 'wallet/pageBill',//分页佣金收益
    getOutRec:http + 'wallet/pageOutRec',//提现记录
    applyRcharge:http + 'wallet/applyRcharge',//提现申请
    getComBonus:http + 'sys/getComBonus',//公司分红
    getUnpickRbtPrf:http + 'rbt/getUnpickRbtPrf',//获取机器人收益列表
    pickRbtPrf:http + 'rbt/pickRbtPrf',//领取机器人收益
    getKefu:http + 'sys/getKefu',//客服
    memberQr:http + 'member/memberQr',//分享二维码
    pay:http + 'pay/pay',//充值
    pay_status:http + 'pay/',//查询充值状态
    getMbLv:http + 'member/getMbLv',//获取等级信息
    getDzPrf:http + '/rbt/getDzPrf',//点赞收益详情
}
export default path;