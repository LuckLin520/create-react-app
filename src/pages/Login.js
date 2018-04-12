import React, {Component} from 'react';
import './Login.css';
import Form from '../components/Login/Form'

class Login extends Component{
	constructor(){
		super();
		this.state = {
			phoneLogin: false,
			change: "手机号登录",
			normalform: {
				phoneEmail: "",
				pwd: ""
			},
			phoneform: {
				phoneNumber: "",
				imgCode: "4396AB",
				imgCodeWrite: "",
				phoneCode: ""
			}
		}
		this.loginMethod = this.loginMethod.bind(this);
		this.toRegist = this.toRegist.bind(this);

		this.normalLogin = this.normalLogin.bind(this);
		this.phoneLogin = this.phoneLogin.bind(this);
	}
	render(){
		return (
			<div className="login">
				<div className="tit">
					<h2>登录拉勾</h2><p onClick={this.toRegist}>注册</p>
				</div>

				<Form data={this.state} onnormal={this.normalLogin} onphone={this.phoneLogin} history={this.props.history}/>

				<p className="change" onClick={this.loginMethod}>{this.state.change}</p>
			</div>
		)
	}
	loginMethod(){
		this.setState({
			phoneLogin: this.state.phoneLogin === false ? true : false,
			change: this.state.change === "手机号登录" ? "密码登录" : "手机号登录"
		})
	}
	toRegist(){
		this.props.history.push("/regist");
	}
	
	normalLogin(obj){
		let key = null;
		if(obj.name === "phone"){
			key = "phoneEmail";
		}else if(obj.name === "pwd"){
			key = "pwd";
		}
		this.setState({
			normalform: Object.assign({}, this.state.normalform, {[key]: obj.val})
		})
	}
	phoneLogin(obj){
		let key = null;
		if(obj.name === "phone"){
			key = "phoneNumber";
		}else if(obj.name === "imgCode"){
			key = "imgCodeWrite";
		}else if(obj.name === "phoneCode"){
			key = "phoneCode";
		}
		this.setState({
			phoneform: Object.assign({}, this.state.phoneform, {[key]: obj.val})
		})
	}
}
export default Login;