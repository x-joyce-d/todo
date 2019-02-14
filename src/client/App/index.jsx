import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import './style.pcss'

@inject('store')
@observer
export default class APP extends React.Component {
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: 'make a plan',
	}

	componentDidMount () {
		this.props.store.init()
	}
	addGoalHandler = evt => {
		evt.preventDefault()
		const form = evt.target
		if (form.content.value) {
			this.props.store.goalStore.add({
				content: form.content.value,
			})
		}
	}

	render () {
		const { store, title } = this.props
		var myStyle = {
			width:450,
			minHeight:200,
			fontSize:16,
		};
		var submit = {
			marginLeft:10,
		};
		return (
			<div className='app'>
				<button type="submit" >返回</button>
				<h1>{title}</h1>
				<hr />
				<form onSubmit={this.addGoalHandler} autoComplete='off'>
					<textarea placeholder="please write your plan..." style = {myStyle} name="content" defaultValue="oops,oops,oops,oops,"></textarea>
					<button type='submit' style = {submit}>submit</button>
				</form>
				<hr />
				{store.goalStore.list.map((item,index) => (
					<dl key={item.id}>
						<dt>{item.content}</dt>
						{/*<button className="del" onClick={handleClick}>删除</button>*/}
						<hr />
							<div className="secondList"></div>
								<ul>
									<li>get up at 5:00 am.</li>
								</ul>
						<dd><em>{moment(item.create_time).format()}</em></dd>
						{/**/}
					</dl>
				))}
				<div>
					<h2></h2>
				</div>
			</div>
		)
	}
}
