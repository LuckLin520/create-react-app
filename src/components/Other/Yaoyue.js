import React, {Component} from 'react';
import {
	Route, //路由切换的坑
	Link, 	//模板切换的组件
	NavLink, //升级版link
	Switch, //只匹配一个组件
	Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Yaoyue extends Component{
	render(){
		return(
			<div className="yaoyue">
				<header>
					<span onClick={()=> this.props.history.goBack()}>&lt;</span>
					我的邀约
				</header>
				<div className="con">
					<i className="icon"></i>
					<p>开启拉勾PLUS（邀约功能）,将自己匿名展示给职位发布者,并可以收到来自企业的主动邀请;关闭此功能你将不会被任何企业发现,但可能会错过匹配的职位。</p>
					<div className="plusbtn">
						<span>已关闭</span>
						<div className="btn">
							<em className="circle"></em>
							<i className="close"></i>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Yaoyue;