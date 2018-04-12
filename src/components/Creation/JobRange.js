import React, {Component} from 'react';

class JobRange extends Component{
	render(){
		this.toCreation = this.toCreation.bind(this);
		return(
			<div className="jobrange">
				<div className="info">
		            <span className="text">
		                <em className="left"></em>
		                    对公司的规模可有要求？
		                <em className="right"></em>
		            </span>
		        </div>
		        <ul className="list">
		        	<li onClick={this.toCreation}>没有要求</li>
		        	<li onClick={this.toCreation}>初创型<span>( 天使轮及未融资 )</span></li>
		        	<li onClick={this.toCreation}>成长型<span>( A轮或B轮融资 )</span></li>
		        	<li onClick={this.toCreation}>成熟型<span>( C轮融资以上但未上市 )</span></li>
		        	<li onClick={this.toCreation}>上市公司</li>
		        </ul>
			</div>
		)
	}
	toCreation(e){
		let creation = JSON.parse(localStorage.getItem("creation")) || {};
		creation.range = e.currentTarget.childNodes[0].nodeValue;
		localStorage.setItem("creation", JSON.stringify(creation));
		this.props.history.push("/creation/creationindex");
	}
}
export default JobRange;