import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Forget from '@/components/login/forget'//忘记密码
import Forgetpassword from '@/components/login/password'//忘记密码
import Register from '@/components/login/register'//注册

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
			path: '/home/company_video',
			name: 'company_video',
			component: Company_video
		},
		{
			path: '/home/income_introduced',
			name: 'income_introduced',
			component: Income_introduced
		},
		{
			path: '/home/agent_introduced',
			name: 'agent_introduced',
			component: Agent_introduced
		},
		{
			path: '/home/earnings_league',
			name: 'earnings_league',
			component: Earnings_league
		},{
			path: '/home/dividend_policy',
			name: 'dividend_policy',
			component: Dividend_policy
		},
		{
			path: '/home/task_order',
			name: 'task_order',
			component: Task_order
		},
		{
			path: '/home/robot_task',
			name: 'robot_task',
			component: Robot_task
		},
		{
			path: '/robot',
			name: 'robot',
			component: Robot
		},
		{
			path: '/recharge',
			name: 'recharge',
			component: Recharge
		},
		{
			path: '/recharge/success',//改这个要改success.vue文件
			name: 'success',
			component: Success
		},
		{
			path: '/usercenter',
			name: 'usercenter',
			component: Usercenter
		},
		{
			path: '/usercenter/password',
			name: 'password',
			component: Password
		},
		{
			path: '/usercenter/commission_income',
			name: 'commission_income',
			component: Commission_income
		},
		{
			path: '/usercenter/withdraw_deposit',
			name: 'withdraw_deposit',
			component: Withdraw_deposit
		},
		{
			path: '/usercenter/application_withdrawal',
			name: 'application_withdrawal',
			component: Application_withdrawal
		},
		{
			path: '/usercenter/withdrawal_record',
			name: 'withdrawal_record',
			component: Withdrawal_record
		},
		{
			path: '/usercenter/person_data',
			name: 'person_data',
			component: Person_data
		},
		{
			path: '/usercenter/edit_data',
			name: 'edit_data',
			component: Edit_data
		},{
			path: '/usercenter/my_team',
			name: 'my_team',
			component: My_team
		},{
			path: '/usercenter/share',
			name: 'share',
			component: Share
		},{
			path: '/usercenter/member',
			name: 'member',
			component: Member
		},{
			path: '/usercenter/about',
			name: 'about',
			component: About
		}
	]
})
