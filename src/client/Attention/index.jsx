import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

@inject('store')
@observer
export default class Form extends React.Component {
	render () {
		return (
			<div className="progress">
				<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
					<span className="sr-only">40% Complete </span>
				</div>
			</div>
		)
	}
}
