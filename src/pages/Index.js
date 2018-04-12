import React, {Component} from 'react';
import Job from '../components/Index/Job';
import My from '../components/Index/My';
import Search from '../components/Index/Search';

import './Index.css';
import {
	Route, //路由切换的坑
	Link, 	//模板切换的组件
	NavLink, //升级版link
	Switch, //只匹配一个组件
	Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Index extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="index">
				<header>拉勾网</header>
				<main>
					<Switch>
						<Route path="/index/job" component={Job}></Route>
						<Route path="/index/search" component={Search}></Route>
						<Route path="/index/my" component={My}></Route>
						<Redirect path="/index" to="/index/job"/>
					</Switch>
				</main>
				<footer>
					<NavLink to="/index/job" activeClassName="link_index">职位</NavLink>
					<NavLink to="/index/search" activeClassName="link_index">搜索</NavLink>
					<NavLink to="/index/my" activeClassName="link_index">我的</NavLink>
				</footer>
			</div>
		)
	}
}
export default Index;