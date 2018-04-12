import React, {Component} from 'react';
import PlaceMain from '../Place/PlaceMain';


class JobPlace extends Component{
	render(){
		return(
			<div className="jobplace">
				<div className="info">
		            <span className="text">
		                <em className="left"></em>
		                    告诉我你期望的工作地点？
		                <em className="right"></em>
		            </span>
		        </div>
		        <PlaceMain currentPath="/creation/creationindex"/>
			</div>
		)
	}
}
export default JobPlace;