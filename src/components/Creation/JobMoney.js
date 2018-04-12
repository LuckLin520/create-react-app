import React, {Component} from 'react';

class JobMoney extends Component{
	render(){
		let money = ["没有要求", "2k以下", "2k-5k", "5k-10k", "10k-15k", "15k-25k", "25k-50k", "50k以上"];
		let list = money.map((v, i)=>{
			return <li onClick={this.toCreation.bind(this)} key={i}>{v}</li>;
		})
		return(
			<div className="jobmoney">
				<div className="info">
		            <span className="text">
		                <em className="left"></em>
		                    你值得更好的生活，&emsp;<br/>&emsp;告诉我你期望的薪水
		                <em className="right" style={{top: "38px", right: "-20px"}}></em>
		            </span>
		        </div>
		        <ul className="list">
		        	{list}
		        </ul>
			</div>
		)
	}
	toCreation(e){
		let creation = JSON.parse(localStorage.getItem("creation")) || {};
		creation.money = e.target.innerText;
		localStorage.setItem("creation", JSON.stringify(creation));
		this.props.history.push("/creation/creationindex");
	}
}
export default JobMoney;