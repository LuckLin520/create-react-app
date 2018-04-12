import React, {Component} from 'react';
import './Regist.css';

class Regist extends Component{
	constructor(){
		super();
		this.state = {
			phone: "",
			imgCode: "PK9805",
			imgCodeWrite: "",
			phoneCode: "",
			warningColor: ""
		}
		this.toLogin = this.toLogin.bind(this);
		this.putChange = this.putChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	render(){
		return (
			<div className="regist">
				<div className="tit">
					<h2>注册拉勾</h2><p onClick={this.toLogin}>登录</p>
				</div>
				<div className="form">
					<p className="phone" style={{borderBottomColor: this.state.warningColor}}>
						<span>0086</span>
						<input type="number" 
							placeholder="请输入常用手机号"
							value={this.state.phone}
							onChange={this.putChange}
						/>
					</p>
					<p className="imgCode">
						<input type="text" 
							placeholder="请证明你不是机器人"
							value={this.state.imgCodeWrite}
							onChange={this.putChange}
						/>
						<span>{this.state.imgCode}</span>
					</p>
					<p className="phoneCode">
						<input type="number" 
							placeholder="请输入收到的验证码"
							value={this.state.phoneCode}
							onChange={this.putChange}
						/>
						<span>获取验证码</span>
					</p>
					<div className="sbt" onClick={this.onSubmit}>注册</div>
					<p className="agree">注册拉勾代表你已同意<i>《拉勾用户协议》</i></p>
				</div>
			</div>
		)
	}
	toLogin(){
		this.props.history.push("/login");
	}
	putChange(e){
		this.setState({warningColor: ""});
		let name = e.target.parentNode.className;
		if(name === "imgCode") name = "imgCodeWrite";
		this.setState({
			[name]: e.target.value
		})
	}
	onSubmit(){
		let {phone, imgCode, imgCodeWrite, phoneCode} = this.state;
		if(!phone){
			this.setState({warningColor: "#fd5f39"});
			alert("手机号不能为空")
		}
	}
}
export default Regist;