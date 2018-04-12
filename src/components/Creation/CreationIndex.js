import React, {Component} from 'react';
import {
  Route, //路由切换的坑
  Link,   //模板切换的组件
  NavLink, //升级版link
  Switch, //只匹配一个组件
  Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';


class CreationIndex extends Component{
	constructor(){
		super();
		this.state = {
			type: "选择职位类型",
			place: "选择工作地点",
			money: "选择期望薪水",
			range: "选择公司规模"
		}
		this.toIndex = this.toIndex.bind(this);
	}
	render(){
		return(
			<div className="creationindex">
				<div className="indexbox">
					<dl>
						<dt>职位类型</dt>
						<dd><Link to="/creation/jobtype" style={{color: this.state.type == "选择职位类型" ? "#00b38a" : "inherit"}}>{this.state.type}</Link></dd>
					</dl>
					<dl>
						<dt>工作地点</dt>
						<dd><Link to="/creation/jobplace" style={{color: this.state.place == "选择工作地点" ? "#00b38a" : "inherit"}}>{this.state.place}</Link></dd>
					</dl>
					<dl>
						<dt>期望薪水</dt>
						<dd><Link to="/creation/jobmoney" style={{color: this.state.money == "选择期望薪水" ? "#00b38a" : "inherit"}}>{this.state.money}</Link></dd>
					</dl>
					<dl>
						<dt>公司规模</dt>
						<dd><Link to="/creation/jobrange" style={{color: this.state.range == "选择公司规模" ? "#00b38a" : "inherit"}}>{this.state.range}</Link></dd>
					</dl>
				</div>
				<footer onClick={this.toIndex}>开始搜索</footer>
			</div>
		)
	}
	componentWillMount(){
		if(this.props.location.state){
			let creation = JSON.parse(localStorage.getItem("creation")) || {};
			creation.place = this.props.location.state.place;
			localStorage.setItem("creation", JSON.stringify(creation))
		}
		let storage = JSON.parse(localStorage.getItem("creation"));
		if(storage){
			if(storage.type)
				this.setState({type: storage.type});
			if(storage.place)
				this.setState({place: storage.place});
			if(storage.money)
				this.setState({money: storage.money})
			if(storage.range)
				this.setState({range: storage.range})
		}
	}
	toIndex(){
		this.props.history.push("/");
	}
}
export default CreationIndex;