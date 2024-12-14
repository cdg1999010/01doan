import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Forget from '@/components/login/forget'//忘记密码
import Password from '@/components/login/password'//忘记密码
import Register from '@/components/login/register'//注册
import Home from '@/components/home'//首页
import Wallet from '@/components/wallet'//钱包
import Service from '@/components/service'//客服
import My from '@/components/my'//我的
import Person_data from '@/components/my/person_data'//个人资料
import Data_info from '@/components/my/data_info'//资料信息

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
			component: Login
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/login/forget',
			name: 'forget',
			component: Forget
		},
		{
			path: '/login/password',
			name: 'password',
			component: Password
		},
		{
			path: '/login/register',
			name: 'register',
			component: Register
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/wallet',
			name: 'wallet',
			component: Wallet
		},
		{
			path: '/service',
			name: 'service',
			component: Service
		},
		{
			path: '/my',
			name: 'my',
			component: My
		},
		{
			path: '/my/person_data',
			name: 'person_data',
			component: Person_data
		},
		{
			path: '/my/data_info',
			name: 'data_info',
			component: Data_info
		}
	]
})
