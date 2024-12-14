import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Forget from '@/components/login/forget'//忘记密码
import Forgetpassword from '@/components/login/password'//忘记密码
import Register from '@/components/login/register'//注册
import Home from '@/components/home'//主页
import Company_video from '@/components/home/company_video'//公司视频
import Income_introduced from '@/components/home/income_introduced'//收益介绍
import Agent_introduced from '@/components/home/agent_introduced'//代理介绍
import Earnings_league from '@/components/home/earnings_league'//收益排行榜
import Dividend_policy from '@/components/home/dividend_policy'//分红收益
import Task_order from '@/components/home/task_order'//任务点单
import Robot_task from '@/components/home/robot_task'//机器人任务
import Robot from '@/components/robot'//机器人
import Recharge from '@/components/recharge'//充值
import Success from '@/components/recharge/success'//充值成功
import Usercenter from '@/components/usercenter'//客服
import Password from '@/components/usercenter/password'//修改密码
import Person_data from '@/components/usercenter/person_data'//个人资料
import Edit_data from '@/components/usercenter/edit_data'//修改资料
import Commission_income from '@/components/usercenter/commission_income'//佣金收益
import Withdraw_deposit from '@/components/usercenter/withdraw_deposit'//我要提现
import Application_withdrawal from '@/components/usercenter/application_withdrawal'//提现申请
import Withdrawal_record from '@/components/usercenter/withdrawal_record'//提现记录
import My_team from '@/components/usercenter/my_team'//我的团队
import Share from '@/components/usercenter/share'//分享
import Member from '@/components/usercenter/member'//会员
import About from '@/components/usercenter/about'//关于

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
			path: '/login/forgetpassword',
			name: 'forgetpassword',
			component: Forgetpassword
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
