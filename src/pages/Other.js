import React, {Component} from 'react';
import Toudi from '../components/Other/Toudi';
import Shoucang from '../components/Other/Shoucang';
import Mianshi from '../components/Other/Mianshi';
import Yaoyue from '../components/Other/Yaoyue';
import './Other.css';
import {
  BrowserRouter as Router, //表示用路径模式的路由，哈希模式：hashRouter，路由的最外层
  Route, //路由切换的坑
  Link,   //模板切换的组件
  NavLink, //升级版link
  Switch, //只匹配一个组件
  Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class Other extends Component{
	render(){
		return(
			<Switch>
				<Route path="/other/toudi" component={Toudi}></Route>
				<Route path="/other/shoucang" component={Shoucang}></Route>
				<Route path="/other/mianshi" component={Mianshi}></Route>
				<Route path="/other/yaoyue" component={Yaoyue}></Route>
			</Switch>
		)
	}
}
export default Other;