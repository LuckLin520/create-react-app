import React, {Component} from 'react';
import {
	Route, //路由切换的坑
	Link, 	//模板切换的组件
	NavLink, //升级版link
	Switch, //只匹配一个组件
	Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Mianshi extends Component{
	render(){
		return(
			<div className="mianshi">
				<header>
					<span onClick={()=> this.props.history.push("/index/my")}>&lt;</span>
					我的面试
				</header>
				<div className="mianshi_tab">
					<NavLink to="/other/mianshi/did" activeClassName="mianshi_link">已面试</NavLink>
					<NavLink to="/other/mianshi/will" activeClassName="mianshi_link">将面试</NavLink>
				</div>
				<div>
					<Switch>
						<Route path="/other/mianshi/did" render={()=><div>暂时没有已面试的记录，去<Link to="/" className="underline">投简历</Link>吧！</div>}></Route>
						<Route path="/other/mianshi/will" render={()=><div>暂时没有将面试的记录，去<Link to="/" className="underline">投简历</Link>吧！</div>}></Route>
						<Redirect path="/other/mianshi" to="/other/mianshi/did" exact/>
					</Switch>
				</div>

			</div>
		)
	}
}
export default Mianshi;