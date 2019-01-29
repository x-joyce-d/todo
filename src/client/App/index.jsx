import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import './style.pcss'

@inject('uiStore')
@observer
export default class APP extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: 'untitle',
  }

  render () {
    const { uiStore, title } = this.props
    return (
      <div className='app'>
        <h2>{title}</h2>
        {uiStore.loading ? 'loading...' : 'loaded.'}
      </div>
    )
  }
}
