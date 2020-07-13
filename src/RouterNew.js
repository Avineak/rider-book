import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'
import CalcPage from '#expense/CalcPage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import MapDashboard from '#maps/MapDashboard'
import Dashboard from '#dashboard/Dashboard'

const nav = createMaterialBottomTabNavigator(
  {
    Expenses: {
      screen: CalcPage,
      navigationOptions: {
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="comments-dollar" color={tintColor} size={20} />
        ),
      },
    },
    MapDashboard: {
      screen: MapDashboard,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" color={tintColor} size={20} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Expenses',
    activeColor: '#000',
    inactiveColor: '#ddd',
    barStyle: {
      backgroundColor: '#fff',
      width: '100%',
      alignSelf: 'center',
      borderWidth: 0.1,
      borderRadius: 2,
      borderColor: '#fff',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { widht: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
  }
)

export default createAppContainer(nav)
