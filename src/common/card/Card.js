import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = props => {
  return (
    <View {...props} style={[styles.card, props.style]}>
      {props.children}
    </View>
  )
}
export default Card

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.1,
    borderRadius: 2,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#fff',
  },
})
