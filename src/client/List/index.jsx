import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

import './style.pcss'

@inject('store')
@observer
export default class List extends React.Component{
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: 'make a plan',
	}
	componentDidMount(){
		this.props.store.init()
		this.reverse()
		// setTimeout(()=>{},6000)
	}
	reverse = evt => {
		const {currentItem,list} = this.props.store.goalStore
		let newList=[];
		for(var i=list.length-1;i>=0;i++){
			newList.push(list[i])
			console.log(list[i]);
		}
	}
	handleDetail = (evt,item) =>{
		this.props.store.showDetail(item.id)
	}
	handleDelete = (evt,item) =>{
		this.props.store.goalStore.remove(item.id)
	}
	computeProgress ({beginTime, endTime}) {
		beginTime = moment(beginTime).toDate().getTime()
		endTime = moment(endTime).toDate().getTime()
		const now = Date.now()
		if (now > endTime) {
			return 100
		} else if (now < beginTime) {
			return 0
		}
		const value = (now - beginTime)/(endTime - beginTime)
		if (isNaN(value)) {
			return 0
		}
		return Math.floor(value*100)
		console.log("45646")
	}
	render(){
		const { store, title, visible } = this.props
		return(
			<div className={!visible ? 'list_hidden' : ''}>
				{store.goalStore.list.map(item=>(
					<ul className="list-group " key={item.id}>
						<li className="list-group-item active">
								<h4 className="list-group-item-heading">{item.content}
								</h4>
								<p className="list-group-item-text" >{item.desc}
								</p>
								<p className="list-group-item-text" >
								<em>{moment(item.create_time).format("YYYY-MM-DD HH:mm")}</em>
								</p>
								<p>
									<meter value={this.computeProgress(item)} max="100" high="80"></meter>
								</p>
								<button type="button" className="btn btn-info" onClick={evt => this.handleDetail(evt,item)} data-index={this.index} >detail</button>&nbsp;&nbsp;
								<button type="button" className="btn btn-warning" onClick={evt => this.handleDelete(evt,item)}>delete</button>&nbsp;&nbsp;
						</li>
					</ul>
				))}
			</div>
		)
	}
}
