import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '#map_action/MapAction'
import AsyncStorage from '@react-native-community/async-storage'
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this._retrieveData = this._retrieveData.bind(this)
    this._storeData = this._storeData.bind(this)
  }
  _retrieveData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('fuel')
      const value2 = await AsyncStorage.getItem('repair')
      const value3 = await AsyncStorage.getItem('servicing')
      const value4 = await AsyncStorage.getItem('distance')
      if (value1 == null || value2 == null) {
        console.log('retrive failed')
        this._storeData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  _storeData = async () => {
    console.log('storing data')
    try {
      await AsyncStorage.setItem('fuel', '0')
      await AsyncStorage.setItem('repair', '0')
      await AsyncStorage.setItem('servicing', '0')
      await AsyncStorage.setItem('distance', '0')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    this._retrieveData()
    return (
      <View>
        <Text>this is dashboard</Text>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    destination: state.Destination,
  }
}
export default connect(
  mapStateToProps,
  actions
)(Dashboard)
