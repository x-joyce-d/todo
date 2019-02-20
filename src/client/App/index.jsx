import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import './style.pcss'
import List from '../List'
import Form from '../Form'
import Attention from '../Attention'
import Feedback from '../Feedback'

@inject('store')
@observer
export default class APP extends React.Component {
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: 'make a plan',
	}
	componentDidMount(){
		this.props.store.init()
	}
	handleAdd = (evt) => {
		this.props.store.showDetail()
	}
	render () {
		const { store, title } = this.props
		let mainBody = null
		switch (store.uiStore.path) {
			case '/':
				store.uiStore.listVis='show'
				break
			case '/detail':
			case '/add':
			case '/modify':
				store.uiStore.isShow='show'
				break
			case '/feedback':
				store.uiStore.fdVis='show'
				break
			case '/attention':
				store.uiStore.attentionVis='show'
		}
		return (
			<div className='app'>
				<div className="container">
					<div className="title">{title}</div>
					<ul className="list nav nav-pills">
					  <li role="presentation">
							<button type="button" className="btn btn-primary" onClick={evt => this.handleAdd()}>add</button>
						</li>
					  <li role="presentation">
							<button type="button" className="btn btn-primary" onClick={evt => store.showFeedback()}>feedback</button>
						</li>
						<li role="presentation" className="active">
							<button type="button" className="btn btn-primary" onClick={evt=>store.goHome()}>back</button>
						</li>
					</ul>
					<hr />
					{
						store.uiStore.isShow && <Form />
					}
					<div>
						<List className={store.uiStore.listVis ? 'show':'hidden'}/>
						<Form className={store.uiStore.isShow ? 'show':'hidden'}/>
					</div>
				</div>
			</div>
		)
	}
}
