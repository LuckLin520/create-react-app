import React, {Component} from 'react';

class My extends Component{
	constructor(){
		super();
		this.state = {
			login: true
		}
		this.toToudi = this.toToudi.bind(this);
		this.toMianshi = this.toMianshi.bind(this);
		this.toShoucang = this.toShoucang.bind(this);
		this.toYaoyue = this.toYaoyue.bind(this);
	}
	render(){
		this.quitLogin = this.quitLogin.bind(this);
		let user = localStorage.getItem("user");
		let IsLogin = ()=>{
			if(!user){
				return <div className="userInfo" onClick={()=>this.props.history.push("/login")}>登录/注册</div>;
			}else{
				return <div className="userLogo"><p>{user}</p><div onClick={this.quitLogin} className="quit">退出登录</div></div>;
			}
			
		}
		return(
			<div className="my">
				<IsLogin/>
				<ul className="fnItem">
					<li onClick={this.toToudi}>投递</li><li onClick={this.toMianshi}>面试</li>
					<li onClick={this.toYaoyue}>邀约</li><li onClick={this.toShoucang}>收藏</li>
				</ul>
			</div>
			)
	}
	quitLogin(){
		localStorage.clear();
		this.setState({
			loginL: false
		})
	}
	toToudi(){
		this.props.history.push("/other/toudi");
	}
	toMianshi(){
		this.props.history.push("/other/mianshi");
	}
	toShoucang(){
		this.props.history.push("/other/shoucang");
	}
	toYaoyue(){
		this.props.history.push("/other/yaoyue");
	}
}
export default My;