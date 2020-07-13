import { View, Text, StyleSheet } from 'react-native'
import NavElement from './NavElement'
import React, { Component } from 'react'
import Card from '#common/card/Card'
import { connect } from 'react-redux'
import * as actions from '#nav_action/NavbarAction'
import { Actions } from 'react-native-router-flux'

class Nav extends Component {
  element(num, name, label) {
    if (num == this.props.select) {
      return (
        <View>
          <NavElement
            name={name}
            color={'#5c85bd'}
            tabSwitch={() => this.tabHandler(num)}
            number={num}
            label={label}
          />
        </View>
      )
    }
    return (
      <View>
        <NavElement
          name={name}
          color={'#000'}
          tabSwitch={() => this.tabHandler(num)}
          number={num}
          label={label}
        />
      </View>
    )
  }

  tabHandler = num => {
    this.props.NavbarAction(num)
    switch (num) {
      case 1:
        Actions.pop()
        Actions.one()
        break

      case 2:
        Actions.pop()
        Actions.two()
        break

      case 3:
        Actions.pop()
        Actions.three()
        break

      case 4:
        Actions.pop()
        Actions.four()
        break

      case 5:
        Actions.pop()
        Actions.five()
        break
      case 6:
        Actions.pop()
        Actions.six()
      default:
        break
    }
    return 1
  }
  render() {
    return (
      <Card style={styles.nav}>
        {this.element(1, 'brain', 'Tips')}
        {this.element(2, 'book-open', 'Study')}
        {this.element(3, 'play', 'Videos')}
        {this.element(4, 'th-list', 'Quiz')}
        {this.element(5, 'traffic-light', 'Traffic Signs')}
        {this.element(6, 'comments-dollar', 'Expenses')}
      </Card>
    )
  }
}
const setStateToProps = state => {
  return { select: state.NavSelect }
}
export default connect(
  setStateToProps,
  actions
)(Nav)
const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    position: 'absolute',
    bottom: 0,
  },
})
