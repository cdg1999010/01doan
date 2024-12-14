const ip = '';//http://121.127.226.165:2000
const http = ip + "/api/v1/"
const path = {
    ip:ip,
    register: http + 'register',//注册
    captcha: http + 'captcha',//验证码
    login: http + 'login',//登录
    login: http + 'logout',
    mobilecode: http + 'mobilecode',//短信验证码
    home: http + 'member/home',//首页相关信息
}
export default path;