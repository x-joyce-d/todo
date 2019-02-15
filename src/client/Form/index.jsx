import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import './style.pcss'

@inject('store')
@observer
export default class Form extends React.Component {
	componentDidMount(){
		this.props.store.init()
	}
	addGoalHandler=evt=>{
		evt.preventDefault()
		const form=evt.target
		if(form.content.value && form.desc.value){
			this.props.store.goalStore.add({
				content:form.content.value,
				desc:form.desc.value
			})
			this.props.store.uiStore.goHome()
		}
	}
	render () {
		const { store, title } = this.props
		return (
			<form onSubmit={this.addGoalHandler} autoComplete="off">
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">big plan</label>
					<textarea type="text" className="form-control" classID="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter big plan" defaultValue="wowwowwwoowowo" name="content">
					</textarea>
					<small classID="emailHelp" className="form-text text-muted">hhahahhahahhahha</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">small plan</label>
					<input type="text" className="form-control" classID="exampleInputPassword1" placeholder="enter small plan" defaultValue="eeeeeeeeeeeeeeeeeee" name="desc"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}
