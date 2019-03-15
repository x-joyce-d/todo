import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

import './style.pcss'

@inject('store')
@observer
export default class App extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: 'untitle',
  }

  componentDidMount () {
    this.props.store.init()
  }

  addGoalHandler = evt => {
    evt.preventDefault()
    const form = evt.target
    if (form.title.value) {
      this.props.store.goalStore.add({
        title: form.title.value,
        desc: form.desc.value,
      })
    }
  }

  render () {
    const { store, title } = this.props
    return (
      <div className='app'>
        <h1>{title}</h1>
        <hr />
        <form onSubmit={this.addGoalHandler} autoComplete='off'>
          Title: <input type='text' name='title'
            defaultValue='Morgawr' />
          Description: <input type='text' name='desc'
            defaultValue='A sea serpent.' />
          <button type='submit'>OK</button>
        </form>
        <hr />
        {store.goalStore.list.map(item => (
          <dl key={item.id}>
            <dt>{item.title}</dt>
            <dd>{item.desc}</dd>
            <dd><em>{moment(item.create_time).format()}</em></dd>
          </dl>
        ))}
      </div>
    )
  }
}
