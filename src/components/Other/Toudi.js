import React, {Component} from 'react';
import {
	Route, //路由切换的坑
	Link, 	//模板切换的组件
	NavLink, //升级版link
	Switch, //只匹配一个组件
	Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Toudi extends Component{
	render(){
		return(
			<div className="toudi">
				<header>
					<span onClick={()=> this.props.history.push("/index/my")}>&lt;</span>
					投递记录
				</header>
				<div className="toudi_tab">
					<NavLink to="/other/toudi/all" activeClassName="toudi_link">全部</NavLink>
					<NavLink to="/other/toudi/please" activeClassName="toudi_link">邀请面试</NavLink>
					<NavLink to="/other/toudi/no" activeClassName="toudi_link">不合适</NavLink>
				</div>
				<div>
					<Switch>
						<Route path="/other/toudi/all" render={()=><div>暂无全部记录！</div>}></Route>
						<Route path="/other/toudi/please" render={()=><div>暂无邀请面试记录！</div>}></Route>
						<Route path="/other/toudi/no" render={()=><div>暂无不合适记录！</div>}></Route>
						<Redirect path="/other/toudi" to="/other/toudi/all" exact/>
					</Switch>
				</div>

			</div>
		)
	}
}
export default Toudi;