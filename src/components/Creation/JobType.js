import React, {Component} from 'react';

class JobType extends Component{
	constructor(){
		super();
		this.state = {
			type: ""
		}
		this.toCreation = this.toCreation.bind(this);
		this.putChange = this.putChange.bind(this);
	}
	render(){
		let position = ["产品经理", "Java", "运营", "Android", "PHP", "UI", "IOS", "编辑", "BD"];
		let list = position.map((v, i)=>{
			return <li onClick={this.toCreation} key={i}>{v}</li>
		})
		return(
			<div className="jobtype">
			        <div className="info">
			            <span className="text">
			                <em className="left"></em>
			                    想找什么职位？
			                <em className="right"></em>
			            </span>
			        </div>
			        <div className="rinputer">
				        <input value={this.state.type} onChange={this.putChange} className="inputer" placeholder="输入你想定制的职位"/>
				        <span onClick={this.toCreation} className="button">OK</span>
			        </div>
			        <ul className="list">
			        	{list}
			        </ul>
			</div>
		)
	}
	toCreation(e){
		let creation = JSON.parse(localStorage.getItem("creation")) || {};

		if(e.target.innerText === "OK" && this.state.type){
			creation.type = this.state.type;
		}else if(e.target.tagName === "LI"){
			creation.type = e.target.innerText;
		}
		localStorage.setItem("creation", JSON.stringify(creation));
		this.props.history.push("/creation/creationindex");
	}
	putChange(e){
		this.setState({type: e.target.value});
	}
}
export default JobType;