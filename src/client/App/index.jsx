import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import './style.pcss'
import List from '../List'
import Form from '../Form'
import Feedback from '../Feedback'
import Aboutme from '../Aboutme'

@inject('store')
@observer
export default class App extends React.Component {
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
			case '/detail':
			case '/add':
			case '/modify':
				mainBody=<Form />
				break
			case '/aboutme':
				mainBody=<Aboutme/>
				break
			case '/feedback':
				mainBody=<Feedback />
				break
		}
		return (
			<div className='app'>
				<div className="container box">
					<div className="title">{title}</div>
					<ul className="list nav nav-pills">
						<li role="presentation" className="item">
							<button type="button" className="btn btn-primary" onClick={evt => this.handleAdd()}>add</button>
						</li>
						<li role="presentation" className="item">
							<button type="button" className="btn btn-primary" onClick={evt => store.showFeedback()}>feedback</button>
						</li>
						<li role="presentation" className="item">
							<button type="button" className="btn btn-primary" onClick={evt => store.showAboutme()}>about me</button>
						</li>
            <li role="presentation" className="button_hidden item active">
              <button type="button" className="btn btn-primary" onClick={evt=>store.goHome()} hidden={store.showAboutme()&&store.showFeedback()}>back</button>
            </li>
						<li role="presentation" className="item active">
							<button type="button" className="btn btn-primary" onClick={evt=>store.goHome()}>back</button>
					 </li>
					</ul>
					<hr />
					<div>
						<List visible={mainBody===null} />
					</div>
					{mainBody}
				</div>
			</div>
		)
	}
}
