import React, {Component} from 'react';

class DetailMain extends Component{
	render(){
		let job = this.props.nowJob;
		if(job === null){
			return <main>Loding...</main>
		}
		let condition = job.condition.text.map((v, i)=>{
							return <p key={i}>{i+1}, {v}</p>
						})
		let doth = job.doth.map((v, i)=>{
						return <p key={i}>{i+1}, {v}</p>
					})
		return(
			<main>
				<div className="tit">
					<h2>{job.positionName}</h2>
					<dl>
						<dt><i></i></dt>
						<dd>未收藏</dd>
					</dl>
				</div>
				<div className="detail">
					<ul className="info">
						<li><i></i>{job.salary}</li>
						<li><i></i>{job.city}</li>
						<li><i></i>{job.condition.work}</li>
						<li><i></i>{job.condition.exp}</li>
						<li><i></i>{job.condition.edu}</li>
						<li></li>
					</ul>
					<p className="attract">职位诱惑：<span>{job.attract}</span></p>
					
				</div>
				<div className="log">
					<dl>
						<dt><img src={job.companyLogo}/></dt>
						<dd><h3>{job.companyName}</h3><p>{job.companyFullName}</p></dd>
					</dl>
					<div className="ico"><i></i></div>
				</div>
				<div className="description">
					<h2>职位描述</h2>
					<div className="con">
						<h4>任职要求：</h4>
						<div className="text">
							{condition}
						</div>
						<h4>工作内容：</h4>
						<div className="text">
							{doth}
						</div>
					</div>	
				</div>
			</main>
		)
	}
}
export default DetailMain;