import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject , computed} from 'mobx-react'
import moment from 'moment'

@inject('store')
@observer
export default class Form extends React.Component {
	componentDidMount(){
		this.props.store.init()
	}
	lookProgress(){
		var time1=this.props.store.goalStore.currentItem.intendStart_time //计划开始时间
		var time2=this.props.store.goalStore.currentItem.intendFinish_time //计划完成时间
		var time3=this.props.store.goalStore.currentItem.actual_time //实际完成时间
		var t1 = (new Date(time1).getTime())
		var t2 = (new Date(time2).getTime())
		var t3 = (new Date(time3).getTime())
		var used=(t2-t1)/(1000*60) //已用时间
		var left=(t3-t2)/(1000*60) //剩余时间
		var persent=parseInt(((t2-t1)/(t3-t1))*100+"%")
	}
	render () {
		const {store,title} = this.props
		const {content,desc,create_time,intendStart_time} = store.goalStore.currentItem
		return (
			<div className="container">
				<div className="list-group-item active" checked>
						<h4 className="list-group-item-heading">{content}
						</h4>
						<h6 className="list-group-item-heading">{desc}
						</h6>
						<p className="list-group-item-text" >have used：
						</p>
						<p className="list-group-item-text" >still left：
						</p>
						<p className="list-group-item-text" >
						<em>{moment(create_time).format()}</em>
						</p>
						<div className="progress">
							<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >40%</div>
							<p className="notice">you have to do it !!</p>
						</div>
						<button type="button" className="btn btn-info" onClick={evt => this.lookProgress()}>do it</button>
				</div>
			</div>
		)
	}
}
