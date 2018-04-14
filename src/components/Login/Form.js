import React, {Component} from 'react';

class Form extends Component{
	render(){
		this.phoneChange = this.phoneChange.bind(this);
		this.normalChange = this.normalChange.bind(this);
		this.onphoneLogin = this.onphoneLogin.bind(this);
		this.onnormalLogin = this.onnormalLogin.bind(this);

		let {normalform, phoneform, phoneLogin} = this.props.data;
		if(phoneLogin){
			return(
				<div className="phoneform">
					<p className="phone">
						<span>0086</span>
						<input type="text" 
							placeholder="请输入常用手机号"
							value={phoneform.phoneNumber}
							onChange={this.phoneChange}
						/>
					</p>
					<p className="imgCode">
						<input type="text" 
							placeholder="请证明你不是机器人"
							value={phoneform.imgCodeWrite}
							onChange={this.phoneChange}
						/>
						<span>{phoneform.imgCode}</span>
					</p>
					<p className="phoneCode">
						<input type="text" 
							placeholder="请输入收到的验证码"
							value={phoneform.phoneCode}
							onChange={this.phoneChange}
						/>
						<span>获取验证码</span>
					</p>
					<div className="sbt" onClick={this.onphoneLogin}>登录</div>
				</div>
			)
		}
		return(
			<div className="normalform">
				<p className="phone">
					<input type="text" 
						placeholder="请输入已验证的手机号或邮箱"
						value={normalform.phoneEmail}
						onChange={this.normalChange}
					/>
				</p>
				<p className="pwd">
					<input type="text" placeholder="请输入密码"
						value={normalform.pwd}
						onChange={this.normalChange}
					/>
				</p>
				<div className="sbt" onClick={this.onnormalLogin}>登录</div>
			</div>
		)
	}
	phoneChange(e){
		let name = e.target.parentNode.className;
		this.props.onphone({name, val: e.target.value});
	}
	normalChange(e){
		let name = e.target.parentNode.className;
		this.props.onnormal({name, val: e.target.value});
	}
	onphoneLogin(){
		let {phoneNumber, imgCode, imgCodeWrite, phoneCode} = this.props.data.phoneform;
		if(!phoneNumber){
			alert("手机号不能为空！");
			return;
		}
		localStorage.setItem("user", phoneNumber);
		alert("登陆成功！")
		this.props.history.replace("/index/job")
	}
	onnormalLogin(){
		let {phoneEmail, pwd} = this.props.data.normalform;
		if(!phoneEmail){
			alert("手机或邮箱不能为空！");
			return;
		}
		localStorage.setItem("user", phoneEmail);
		alert("登陆成功！")
		this.props.history.replace("/index/job")
	}
}
export default Form;