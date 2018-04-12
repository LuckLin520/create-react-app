import React, {Component} from 'react';
import axios from 'axios';
import DetailMain from '../components/Detail/DetailMain';
import './Detail.css';

class Detail extends Component{
	constructor(){
		super();
		this.state = null;
	}
	render(){
		return(
			<div className="detail">
				<header>
					<p>
						<span onClick={()=> this.props.history.push("/")}>&lt;</span>
						<em>职位详情</em>
						<i onClick={()=>this.props.history.push("/")}></i>
					</p>
				</header>
				
				<DetailMain nowJob={this.state}/>

				<footer>
					<div className="send">投递简历</div>
				</footer>
			</div>
		)
	}
	componentDidMount(){
		axios.get("/mock/jobList.json").then((res)=>{
			res.data.forEach(v=>{
				if(v.positionId == this.props.history.location.state._id){
					this.setState(v)
				}
			})
		})
	}
}
export default Detail;

