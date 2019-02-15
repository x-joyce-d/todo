import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import './style.pcss'
import List from '../List'
import Form from '../Form'
import Attention from '../Attention'

@inject('store')
@observer
export default class APP extends React.Component {
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: 'make a plan',
	}
	render () {
		const { store, title } = this.props
    let mainBody = null
    switch (store.uiStore.path) {
      case '/add':
      case '/modify':
        mainBody = <Form />
        break
			case '/attention':
				mainBody = <Attention />
				break
			case '/':
				mainBody =<List />
				break
      default:
        mainBody = <List />
    }
		return (
			<div className='app'>
        <div className="container">
          <nav className="navbar">
            <span className="navbar-brand">{title}</span>
						<button type="button" className="btn btn-primary" onClick={evt => store.uiStore.showForm()}>+</button>
						<hr/>
            <button type="button" className="btn btn-primary" onClick={evt => store.uiStore.showProgress()}>look progress</button>
						<hr/>
						<button type="button" className="btn btn-primary" onClick={evt=>store.uiStore.goHome()}>返回</button>
          </nav>
					{/**/}
          {mainBody}
        </div>
			</div>
		)
	}
}