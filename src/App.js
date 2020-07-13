import React, { Component } from 'react'
import { createStore } from 'redux'
import Route from './Route'
import reducers from '#reducer'
import './global.js'
import { Provider } from 'react-redux'
import RouterUser from './RouterUser'
// import Maps from './components/map_page/Maps'
import { View, Text } from 'react-native'
import SQLite from 'react-native-sqlite-storage'
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, backgroundColor: '#D3D3D3' }}>
          <RouterUser />
        </View>
      </Provider>
    )
  }
}
// <Route />
