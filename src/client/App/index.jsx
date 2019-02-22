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
				store.uiStore.listVis=true
				break
			case '/detail':
			case '/add':
			case '/modify':
				store.uiStore.isShow=true
				break
			case '/feedback':
				store.uiStore.fdVis=true
				break
			case '/attention':
				store.uiStore.attentionVis=true
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
					<div>
						{
							store.uiStore.listVis && <List/>
						}
					</div>
					<div>
						{
							store.uiStore.isShow && <Form />
						}
					</div>
					<div>
						{
							store.uiStore.fdVis && <Feedback/>
						}
					</div>
					<div>
						{
							store.uiStore.attentionVis && <Attention/>
						}
					</div>
			{/*<div>
						<List className={store.uiStore.listVis ? true:'hidden'}/>
						<Form className={store.uiStore.isShow ? true:'hidden'}/>
					</div>*/}
				</div>
			</div>
		)
	}
}
