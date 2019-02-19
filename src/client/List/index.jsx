import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

import './style.pcss'

@inject('store')
@observer
export default class List extends  React.Component{
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: 'make a plan',
	}
	componentDidMount(){
		this.props.store.init()
	}
	handleDetail = (evt,item) =>{
		this.props.store.showDetail(item.id)
	}
	handleDelete = (evt,item) =>{
		this.props.store.goalStore.remove(item.id)
	}
	handleProgress = (evt,item) => {
		this.props.store.showProgress(item.id)
	}
	render(){
		const { store, title } = this.props
		return(
			<div>
				{store.goalStore.list.map(item=>(
					<ul className="list-group " key={item.id}>
						<li className="list-group-item active" checked>
								<h4 className="list-group-item-heading">{item.content}
								</h4>
								<p className="list-group-item-text" >
								</p>
								<p className="list-group-item-text" >
								<em>{moment(item.create_time).format()}</em>
								</p>
								<p className="list-group-item-text" >
								<em></em>
								</p>
								<button type="button" className="btn btn-info" onClick={evt => this.handleDetail(evt,item)} data-index={this.index} >detail</button>&nbsp;&nbsp;
								<button type="button" className="btn btn-warning" onClick={evt => this.handleDelete(evt,item)}>delete</button>&nbsp;&nbsp;
								<button type="button" className="btn btn-success" onClick={evt => this.handleProgress(evt,item)}>look progress</button>
						</li>
					</ul>
				))}
			</div>
		)
	}
}
