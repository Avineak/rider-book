import React, { Component } from 'react'
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import axios from 'axios'
import MapElements from './MapElements'
import MapViewer from './MapViewer'
import PolyLine from '@mapbox/polyline'
import { Polyline, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { getDistance } from 'geolib'
import { connect } from 'react-redux'

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMapPermission: false,
      destinyPoints: null,
      nearestPump: null,
      nearestShops: null,
      destination: null,
    }
    this.showDirection = this.showDirection.bind(this)
  }
  componentDidMount() {
    this.setState({ destination: this.props.destination })
    this.props.destination == 'pure map' ? null : this.showDirection()
  }

  async showDirection() {
    try {
      const result = await axios.get(
        `https://api.tomtom.com/routing/1/calculateRoute/${this.props.userLocation.latitude},${this.props.userLocation.longitude}:${this.props.destination.latitude},${this.props.destination.longitude}/json?key=c47yWqaYqVOP1GSOLpzrDgnEA8WGklZj`
      )
      direction = result.data.routes[0].legs[0].points
      console.log(direction)
      this.setState({
        destinyPoints: direction,
      })
    } catch (err) {
      console.warn(err)
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <MapViewer
            longitude={this.props.userLocation.latitude}
            latitude={this.props.userLocation.longitude}
          >
            <Marker
              coordinate={{
                latitude: 27.666311,
                longitude: 85.431296,
              }}
              title="Bhaktapur Petrol pump"
              description="Mobile: 9849211005"
              icon={require('./fuel.png')}
            />
            <Marker
              coordinate={{
                latitude: 27.666377,
                longitude: 85.434584,
              }}
              title="temp"
              description="Mobile: 984524405"
              icon={require('./fuel.png')}
            />
            <Marker
              coordinate={{
                latitude: 27.681628,
                longitude: 85.402848,
              }}
              title="Ajima Petrol pump"
              description="Mobile: 984922296"
              icon={require('./fuel.png')}
            />
            {this.state.destinyPoints == null ? null : (
              <Polyline
                coordinates={this.state.destinyPoints}
                strokeColor="#000"
                strokeWidth={5}
              />
            )}
          </MapViewer>
          <MapElements
            longitude={this.state.userLongitude}
            latitude={this.state.userLatitude}
            fuelPumps={this.state.fuelPumps}
            repairShops={this.state.repairShops}
            selection={this.props.destination}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    userLocation: state.UserLocation,
    destination: props.navigation.getParam('destination'),
  }
}
export default connect(mapStateToProps)(Maps)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
