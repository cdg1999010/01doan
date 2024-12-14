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
import Id_info from '@/components/my/id_info'//资料信息
import Bank_card from '@/components/my/bank_card'//银行卡
import My_borrow from '@/components/my/my_borrow'//我的借款
import Borrow_detail from '@/components/my/borrow_detail'//借款详情
import Jurisdiction from '@/components/my/jurisdiction'//开户权限
import Legal_liability from '@/components/my/legal_liability'//法律责任
import Mypassword from '@/components/my/password'//修改密码

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
			path: '/Borrow_detail',
			name: 'Borrow_detail',
			component: borrow_detail
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
		},
		{
			path: '/my/id_info',
			name: 'id_info',
			component: Id_info
		},
		{
			path: '/my/bank_card',
			name: 'bank_card',
			component: Bank_card
		},
		{
			path: '/my/my_borrow',
			name: 'my_borrow',
			component: My_borrow
		},
		{
			path: '/my/borrow_detail',
			name: 'borrow_detail',
			component: Borrow_detail
		},
		{
			path: '/my/jurisdiction',
			name: 'jurisdiction',
			component: Jurisdiction
		},
		{
			path: '/my/legal_liability',
			name: 'legal_liability',
			component: Legal_liability
		},
		{
			path: '/my/mypassword',
			name: 'mypassword',
			component: Mypassword
		}
	]
})
