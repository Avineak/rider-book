import MapView from 'react-native-maps' // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, Text, StyleSheet } from 'react-native'

import React, { Component } from 'react'

class Maps extends Component {
  state = {
    userLongitude: 0,
    userLatitude: 0,
  }
  componentDidMount() {
    this.observeLocation = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        })
      },
      err => console.warn(err),
      {
        enableHighAccuracy: true,
      }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.observeLocation)
  }

  render() {
    return (
      <MapView
        showsUserLocation
        followsUserLocation
        style={styles.map}
        region={{
          latitude: this.state.userLatitude,
          longitude: this.state.userLongitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0021,
        }}
      ></MapView>
    )
  }
}
export default Maps
