import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject , computed} from 'mobx-react'
import moment from 'moment'

@inject('store')
@observer
export default class Form extends React.Component {
	render () {
		const {store,title} = this.props
		const {content,desc,create_time} = store.goalStore.currentItem
		return (
				<div className="list-group-item active" checked>
						<h4 className="list-group-item-heading">{content}
						</h4>
						<h6 className="list-group-item-text">{desc}
						</h6>
						<p className="list-group-item-text" >已完成：
						</p>
						<p className="list-group-item-text" >还剩：
						</p>
						<p className="list-group-item-text" >
						<em>{moment(create_time).format()}</em>
						</p>
				</div>
		)
	}
}
