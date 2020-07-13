import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as actions from '#nav_action/NavbarAction'
import { connect } from 'react-redux'
import Actions from 'react-native-router-flux'
const NavElement = props => {
  return (
    <TouchableNativeFeedback onPress={props.tabSwitch}>
      <View style={styles.navElement}>
        <Icon name={props.name} size={15} color={props.color} />
        <Text style={{ textAlign: 'center', color: props.color }}>
          {props.label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}
export default connect(
  null,
  actions
)(NavElement)
const styles = StyleSheet.create({
  navElement: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 90,
    height: 60,
  },
})
