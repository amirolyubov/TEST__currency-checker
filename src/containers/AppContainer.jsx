import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class AppContainer extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    const { actions: { getLasestRates } } = this.props
    getLasestRates('USD')
  }
  render () {
    const { currencies, meta, actions } = this.props
    console.log(meta);
    return <div>App Container</div>
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies,
  meta: state.meta
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
