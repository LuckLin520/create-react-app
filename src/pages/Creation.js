import React, {Component} from 'react';
import CreationIndex from '../components/Creation/CreationIndex';
import JobType from '../components/Creation/JobType';
import JobPlace from '../components/Creation/JobPlace';
import JobMoney from '../components/Creation/JobMoney';
import JobRange from '../components/Creation/JobRange';
import './Creation.css';
import {
  Route, //路由切换的坑
  Link,   //模板切换的组件
  NavLink, //升级版link
  Switch, //只匹配一个组件
  Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Creation extends Component{
	render(){
		return(
			<div className="creation">
				<header>
					<span onClick={()=> this.props.history.goBack()}>&lt;</span>
					设置定制信息
				</header>
				<div>
				<Switch>
					<Route path="/creation/creationindex" component={CreationIndex}></Route>
					<Route path="/creation/jobtype" component={JobType}></Route>
					<Route path="/creation/jobplace" component={JobPlace}></Route>
					<Route path="/creation/jobmoney" component={JobMoney}></Route>
					<Route path="/creation/jobrange" component={JobRange}></Route>
					<Redirect path="/creation" to="/creation/creationindex" exact/>
				</Switch>
				</div>
			</div>
		)
	}
}

export default Creation;