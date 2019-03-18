import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import {observable} from 'mobx'
import moment from 'moment'

import './style.pcss'

@inject('store')
@observer
export default class List extends React.Component{
	static propTypes = {
		title: PropTypes.string,
	}
	static defaultProps = {
		title: 'make a plan',
	}
  @observable tabs = ['finished','doing','unfinished'];
  @observable tabIndex = 0;
	componentDidMount(){
		this.props.store.init()
		// window.setInterval(this.computeProgress(),60000)
	}
  handleNavClick=(index)=>{
    this.tabIndex = index
  }
	handleDetail = (evt,item) =>{
		this.props.store.showDetail(item.id)
	}
	handleDelete = (evt,item) =>{
		this.props.store.goalStore.remove(item.id)
	}
  computeProgress ({beginTime, endTime}) {
    beginTime = moment(beginTime).toDate().getTime()
    endTime = moment(endTime).toDate().getTime()
    const now = Date.now()
    if (now > endTime) {
      return 100
    } else if (now < beginTime) {
      return 0
    }
    const value = (now - beginTime)/(endTime - beginTime)
    if (isNaN(value)) {
      return 0
    }
    return Math.floor(value*100)
  }
  renderFinishedList(){
    return(
      <ul className="list-group">
        {store.goalStore.newList.map(item=>(
            <li className="list-group-item active"  key={item.id}>
                <h4 className="list-group-item-heading">{item.content}
                </h4>
                <p className="list-group-item-text">{item.desc}
                </p>
                <p className="list-group-item-text">
                <em>{moment(item.create_time).format("YYYY-MM-DD HH:mm")}</em>
                </p>
                <p>
                  <meter value={this.computeProgress(item)} max="100" high="80"></meter>
                </p>
                <button type="button" className="btn btn-info" onClick={evt => this.handleDetail(evt,item)} data-index={this.index} >detail</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-warning" onClick={evt => this.handleDelete(evt,item)}>delete</button>&nbsp;&nbsp;
            </li>
        ))}
      </ul>
    )
  }
  renderDoingList(){
    return(
      <ul className="list-group">
        {store.goalStore.newList.map(item=>(
            <li className="list-group-item active"  key={item.id}>
                <h4 className="list-group-item-heading">{item.content}
                </h4>
                <p className="list-group-item-text">{item.desc}
                </p>
                <p className="list-group-item-text">
                <em>{moment(item.create_time).format("YYYY-MM-DD HH:mm")}</em>
                </p>
                <p>
                  <meter value={this.computeProgress(item)} max="100" high="80"></meter>
                </p>
                <button type="button" className="btn btn-info" onClick={evt => this.handleDetail(evt,item)} data-index={this.index} >detail</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-warning" onClick={evt => this.handleDelete(evt,item)}>delete</button>&nbsp;&nbsp;
            </li>
        ))}
      </ul>
    )
  }
  renderUnfinishedList(){
    return(
      <ul className="list-group">
        {store.goalStore.newList.map(item=>(
            <li className="list-group-item active"  key={item.id}>
                <h4 className="list-group-item-heading">{item.content}
                </h4>
                <p className="list-group-item-text">{item.desc}
                </p>
                <p className="list-group-item-text">
                <em>{moment(item.create_time).format("YYYY-MM-DD HH:mm")}</em>
                </p>
                <p>
                  <meter value={this.computeProgress(item)} max="100" high="80"></meter>
                </p>
                <button type="button" className="btn btn-info" onClick={evt => this.handleDetail(evt,item)} data-index={this.index} >detail</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-warning" onClick={evt => this.handleDelete(evt,item)}>delete</button>&nbsp;&nbsp;
            </li>
        ))}
      </ul>
    )
  }
	render(){
		const { store, title, visible } = this.props
		return(
			<div className={!visible ? 'list_hidden' : ''}>
				<ul className="btns">
        {
          this.tabs.map((item,index)=>{
            <li key={index}>
              <button type="button" className="btn btn-primary" onClick={evt=>this.handleNavClick(index)}>{item}</button>
            </li>
          })
        }
				</ul>
        {
          this.tabIndex==0 && this.renderFinishedList()
        }
        {
          this.tabIndex==1 && this.renderDoingList()
        }
        {
          this.tabIndex==2 && this.renderUnfinishedList()
        }
			</div>
		)
	}
}
