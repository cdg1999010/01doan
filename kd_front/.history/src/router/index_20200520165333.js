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
		}
	]
})
