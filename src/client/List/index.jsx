import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

import './style.pcss'

@inject('store')
@observer
export default class List extends  React.Component{
	render(){
		return(
			<div>developing...</div>
		)
	}
}
