import React, {Component} from 'react';
import PlaceMain from '../components/Place/PlaceMain';
import './Place.css';
import {
	Route, //路由切换的坑
	Link, 	//模板切换的组件
	NavLink, //升级版link
	Switch, //只匹配一个组件
	Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Place extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="place">
				<header>
					<span onClick={()=> this.props.history.goBack()}>&lt;</span>
					拉勾网
				</header>
				
				<PlaceMain currentPath="/index/search"/>

				<footer>
					<NavLink to="/index/job" activeClassName="link_index">职位</NavLink>
					<NavLink to="/index/search" activeClassName="link_index">搜索</NavLink>
					<NavLink to="/index/my" activeClassName="link_index">我的</NavLink>
				</footer>
			</div>
		)
	}
}
export default Place;