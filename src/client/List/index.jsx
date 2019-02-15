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
	render(){
		const { store, title } = this.props
		return(
			<div>
				{store.goalStore.list.map(item=>(
					<ul className="list-group" key={item.id}>
						<li className="list-group-item">
								<h4 className="list-group-item-heading">{item.content}
								</h4>
								<p className="list-group-item-text" >
								</p>
								<p className="list-group-item-text" >
								<em>{moment(item.create_time).format()}</em>
								</p>
						</li>
					</ul>
				))}
			</div>
		)
	}
}
