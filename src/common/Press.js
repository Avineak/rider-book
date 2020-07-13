import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
const Press = props => {
  styles = {
    borderRadius: 5,
    backgroundColor: '#4c85bd',
    alignItems: 'center',
    justifyContent: 'center',
    width: 135,
    height: 50,
  }
  return (
    <TouchableNativeFeedback {...props}>
      <View style={[styles, props.style]}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {props.label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}
export default Press
