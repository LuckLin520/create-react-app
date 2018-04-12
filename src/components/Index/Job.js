import React, {Component} from 'react';
import axios from 'axios';
class Job extends Component{
	constructor(){
		super();
		this.listAxios = this.listAxios.bind(this);
		this.toDetail = this.toDetail.bind(this);
		this.creationJob = this.creationJob.bind(this);
		this.state = {
			jobList: [],
			showAmount: 10,
			pageAmount: 10,
			login: false,
			creation: "10秒钟定制职位",
			haveMore: true
		}
	}
	render(){
		let list = this.state.jobList.map((v, i)=>{
			return (
				<li key={v.positionId} data-id={v.positionId} onClick={this.toDetail}>
					<dl>
						<dt><img src={v.companyLogo}/></dt>
						<dd>
							<div className="cpname">{v.companyName}</div>
							<div className="psname">{v.positionName}<span> [{v.city}]</span></div>
							<div className="time">{v.createTime}</div>
						</dd>
					</dl>
					<p className="salary">{v.salary}</p>
				</li>
			)
		})
		return (
			<div>
				<div className="job_top">
					<div className="fl">{this.state.creation}</div><div className="fr" onClick={this.creationJob}>{this.state.login ? "编辑" : "去登录"}</div>
				</div>
				<ul className="jobList">
					{list}
				</ul>
				<div className="foot">
					<div className="more" onClick={this.listAxios}>{this.state.haveMore ? "加载更多" : "已经到底啦"}</div>
					<div className="copyright">
						<p className="reserved">©2018 Luck_lin.com, all right reserved </p>
						<p className="last"><span className="curr">移动版</span> · <span onClick={()=>alert("qq:502763576")}>联系Luck_lin</span> · <span><a href="#">回顶部</a></span></p>
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		this.setState({
			login: localStorage.getItem("user") ? true : false
		})

		let storage = JSON.parse(localStorage.getItem("creation"));
		if(storage){
			let arr = [];
			if(storage.type)
				arr.push(storage.type);
			if(storage.place)
				arr.push(storage.place);
			if(storage.money)
				arr.push(storage.money);
			if(storage.range)
				arr.push(storage.range);
			let creation = "";

			for (let i = 0; i < arr.length; i++) {
				if(i === 0)
					creation += arr[i];
				else
					creation += "/" + arr[i];
			}
			this.setState({creation});
		}
		
	}
	componentDidMount(){
		this.listAxios();
	}
	listAxios(e){
		if(e){
			this.setState({showAmount: this.state.showAmount + this.state.pageAmount});
		}
		axios.get("/mock/jobList.json").then((res)=>{
			let arr = [];
			res.data.forEach((v, i)=>{
				if(i < this.state.showAmount){
					arr.push(v);
					this.setState({haveMore: false});
				}else{
					this.setState({haveMore: true});
				}
			})
			this.setState({jobList: arr});
		})
	}
	toDetail(e){
		let _id = e.currentTarget.dataset.id;
		this.props.history.push("/detail", {_id});
	}
	creationJob(){
		if(this.state.login){
			this.props.history.push('/creation');
		}else{
			this.props.history.push('/login');
		}
	}
}
export default Job;