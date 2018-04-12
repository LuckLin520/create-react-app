import React, {Component} from 'react';
import data from './placeData';

import {
  Link   //模板切换的组件
} from 'react-router-dom';

class PlaceMain extends Component{
	render(){
		let pathname = this.props.currentPath;//获取当前请求该组件luyou，以便于点击后携带参数往哪个路由跳转

		let ABCDEFG = data.ABCDEFG;
		let arrABCDEFG = [];
		[].slice.call('ABCDEFG').forEach(v=>{
			arrABCDEFG = arrABCDEFG.concat(ABCDEFG[v]);
		})
		arrABCDEFG.title = "ABCDEFG";

		let HJKLMN = data.HJKLMN;
		let arrHJKLMN = [];
		[].slice.call('HJKLMN').forEach(v=>{
			arrHJKLMN = arrHJKLMN.concat(HJKLMN[v]);
		})
		arrHJKLMN.title = "HJKLMN";

		let PQST = data.PQST;
		let arrPQST = [];
		[].slice.call('PQST').forEach(v=>{
			arrPQST = arrPQST.concat(PQST[v]);
		})
		arrPQST.title = "PQST";

		let WXYZ = data.WXYZ;
		let arrWXYZ = [];
		[].slice.call('WXYZ').forEach(v=>{
			arrWXYZ = arrWXYZ.concat(WXYZ[v]);
		})
		arrWXYZ.title = "WXYZ";
		let hotCity = data.hotCity;
		hotCity.title = "热门城市";
		let AllCity =[hotCity, arrABCDEFG, arrHJKLMN, arrPQST, arrWXYZ].map((v, i)=>{
			return(
				<dl key={i}>
					<dt>{v.title}</dt>
					<dd>
						{v.map((val, idx)=>{
							return <Link key={idx} to={ {pathname, state: {place: val}} }>{val}</Link>
						})}
					</dd>
				</dl>
			)
		})
		return(
			<main>
				{AllCity}
			</main>
		)
	}
}
export default PlaceMain;

