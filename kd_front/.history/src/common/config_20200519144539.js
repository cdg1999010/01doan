const ip = '';//http://121.127.226.165:2000
const http = ip + "/api/v1/"
const path = {
    ip:ip,
    register: http + register,//注册
}
export default path;