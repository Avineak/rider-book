import React, { Component } from 'react'
import * as actions from '#nav_action/NavbarAction'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Study1 from './Study1'

class Study extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Study1 />
      </View>
    )
  }
}
const mapStateToProps = state => {
  return { select: state.NavSelect }
}
export default connect(
  mapStateToProps,
  actions
)(Study)
