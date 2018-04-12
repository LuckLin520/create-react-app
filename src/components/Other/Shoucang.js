import React, {Component} from 'react';
import {
	Route, //路由切换的坑
	Link, 	//模板切换的组件
	NavLink, //升级版link
	Switch, //只匹配一个组件
	Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Shoucang extends Component{
	render(){
		return(
			<div className="shoucang">
				<header>
					<span onClick={()=> this.props.history.goBack()}>&lt;</span>
					我的收藏
				</header>
				<div className="shoucang_list">
					还有没有收藏的职位~
				</div>

			</div>
		)
	}
}
export default Shoucang;