import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{
	constructor(){
		super();
		this.state = {
			place: "全国",
			value: "",
			result: [],//搜索结果列表
			search: [],//搜索历史记录
			showSearch: true, 
			showAmount: 8,
			pageAmount: 8, //用于还原显示条数和点击更多加出来的条数
			haveMore: true
		}
		this.toPlace = this.toPlace.bind(this);
		this.searchJob = this.searchJob.bind(this);
		this.putChange = this.putChange.bind(this);
		this.removeStorage = this.removeStorage.bind(this);
		this.lodingMore = this.lodingMore.bind(this);
	}
	render(){
		let place = this.props.location.state ? this.props.location.state.place : this.state.place;
		
		let list = this.state.result.map((v, i)=>{
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
		let storage = this.state.search.map((v, i)=>{
			return(
				<li key={i} onClick={this.searchJob} data-id={i}><span>{v.value}</span><i onClick={this.removeStorage}>×</i></li>
			)
		})

		return(
			<div>
				<div className="search">
					<div onClick={this.toPlace} className="place">{place}</div>
					<input type="text" onChange={this.putChange} value={this.state.value} placeholder="搜索职位或公司"/>
					<div className="ico" onClick={this.searchJob}>○</div>
				</div>
				<ul className="jobList">
					{list}
				</ul>
				<ul className="storage" style={{display: this.state.showSearch ? "block" : "none"}}>
					{storage}
				</ul>
				<div className="foot" style={{display: this.state.showSearch ? "none" : "block"}}>
					<div className="more" onClick={this.lodingMore}>{this.state.haveMore ? "加载更多" : "已经到底啦"}</div>
					<div className="copyright">
						<p className="reserved">©2015 lagou.com, all right reserved </p>
						<p className="last"><span className="curr">移动版</span> · <span>电脑版</span> · <span>回顶部</span></p>
					</div>
				</div>
			</div>
			)
	}
	toPlace(){
		this.props.history.push("/place");
	}
	putChange(e){
		let value = e.target.value;
		this.setState({value})
	}
	componentWillMount(){
		let search = JSON.parse(localStorage.getItem("search")) || [];
		this.setState({search});
	}
	toDetail(e){
		let _id = e.currentTarget.dataset.id;
		this.props.history.push("/detail", {_id});
	}
	searchJob(e){//点击搜索按钮和搜索历史记录共用事件
		this.setState({showAmount: this.state.pageAmount + 0});//搜索一次要将搜索结果显示条数还原
		if(e.currentTarget.tagName == "LI"){
			this.setState({value: e.currentTarget.firstChild.innerText}, ()=>{
				if(!this.state.value) return;
				this.listAxios();
				let search = JSON.parse(localStorage.getItem("search")) || [];
				search.push({value: this.state.value});
				if(search.length >= 6){
					search.splice(0, 1);
				}
				this.setState({search});
				localStorage.setItem("search", JSON.stringify(search));
			});
		}else{
			this.listAxios();
			let search = JSON.parse(localStorage.getItem("search")) || [];
			search.push({value: this.state.value});
			if(search.length >= 6){
				search.splice(0, 1);
			}
			this.setState({search});
			localStorage.setItem("search", JSON.stringify(search));
		}

	}
	listAxios(){
		axios.get("/mock/jobList.json").then((res)=>{
			let re = res.data.filter((v)=>{
				return v.positionName.indexOf(this.state.value) != -1;
			})
			
			let result = [];
			re.forEach((v, i)=>{
				if(i < this.state.showAmount){
					result.push(v);
					this.setState({
						haveMore: false
					})
				}else{
					this.setState({
						haveMore: true
					})
				}
			})
			this.setState({result, showSearch: false});
		})
	}
	lodingMore(){
		this.setState({showAmount: this.state.showAmount + this.state.pageAmount}, ()=>{
			this.listAxios();
		})
	}
	removeStorage(e){
		let idx = e.target.parentNode.dataset.id;
		let search = JSON.parse(localStorage.getItem("search"));
		search.splice(idx, 1);
		localStorage.setItem("search", JSON.stringify(search));
		this.setState({search});
	}
}
export default Search;