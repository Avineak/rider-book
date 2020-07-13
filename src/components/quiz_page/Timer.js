import { View, Text } from 'react-native'
import * as action from '#quiz_action/TimerAction'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class Timer extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.TimeDecrease()
    }, 1000)
  }
  componentDidUpdate() {
    if (this.props.minute == 0 && this.props.second == 0) {
      clearInterval(this.timer)
      this.props.TimeReset()
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    this.props.TimeReset()
  }
  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>
            Timer
          </Text>
          <Text
            style={
              this.props.minute < 10
                ? { color: 'red', fontWeight: 'bold', fontSize: 20 }
                : { color: 'black', fontWeight: 'bold', fontSize: 20 }
            }
          >
            {this.props.minute < 10
              ? '0' + this.props.minute.toString()
              : this.props.minute}{' '}
            :{' '}
            {this.props.second < 10
              ? '0' + this.props.second.toString()
              : this.props.second}
          </Text>
        </View>
      </View>
    )
  }
}
const mapStateToProp = state => {
  return {
    second: state.Timer.second,
    minute: state.Timer.minute,
    switch: state.Timer.switch,
  }
}
export default connect(
  mapStateToProp,
  action
)(Timer)
