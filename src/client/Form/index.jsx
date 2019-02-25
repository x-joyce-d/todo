import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import './style.pcss'

@inject('store')
@observer
export default class Form extends React.Component {
	componentDidMount(){
		this.props.store.init()
	}
	submitGoalHandler=evt=>{
		evt.preventDefault()
		const form=evt.target
		const {currentId} = this.props.store.goalStore
		const data = {
			content:form.content.value,
			desc:form.desc.value,
			beginTime: form.beginTime.value,
			endTime: form.endTime.value,
		}
		if(currentId){
			this.props.store.goalStore.modify({
				...data,
				id:currentId,
			})
		}else{
			this.props.store.goalStore.add(data)
		}
		this.props.store.goHome()
	}
	render () {
		const { store, title } = this.props
		const { content, desc, beginTime, endTime } = store.goalStore.currentItem || {}
		const default_time = moment().format("YYYY-MM-DDTHH:mm")
		return (
			<form onSubmit={this.submitGoalHandler} autoComplete="off">
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">title</label>
					<input type="text" className="form-control" classID="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter big plan" name="content" defaultValue={content}>
					</input>
					<small classID="emailHelp" className="form-text text-muted">hhahahhahahhahha</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">content</label>
					<input type="text" className="form-control" classID="exampleInputPassword1" placeholder="enter small plan" name="desc" defaultValue={desc}/>
				</div>
				<div className="form-group">
					<label>begin time</label>
					<input type="datetime-local" name="beginTime" defaultValue={beginTime || default_time} className="form-control"/>
				</div>
				<div className="form-group">
					<label >end time</label>
					<input type="datetime-local" name="endTime" defaultValue={endTime || default_time} className="form-control"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}
