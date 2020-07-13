import MapView, { Marker } from 'react-native-maps' // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class MapViewer extends Component {
  render() {
    return (
      <MapView
        showsUserLocation
        followsUserLocation
        showsMyLocationButton={false}
        showsScale={false}
        toolbarEnabled={false}
        showsCompass={false}
        style={styles.map}
        region={{
          latitude: this.props.userLocation.latitude,
          longitude: this.props.userLocation.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0021,
        }}
      >
        {this.props.children}
      </MapView>
    )
  }
}

const mapStateToProps = state => {
  return {
    userLocation: state.UserLocation,
  }
}
export default connect(mapStateToProps)(MapViewer)

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
