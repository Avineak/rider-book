import React, { Component } from 'react'
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '#actions/PositionAction'
import { getDistance } from 'geolib'
import Card from '#common/card/Card'
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'

const pumps = require('./pumps.json')
const shops = require('./shops.json')

class MapDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      motion: 'pause',
      address: null,
    }
    this.getPump = this.getPump.bind(this)
    this.toggle = this.toggle.bind(this)
    this.getAddress = this.getAddress.bind(this)
    this.getShop = this.getShop.bind(this)
  }
  componentDidMount() {
    this.requestLocation()
    this.observeLocation = navigator.geolocation.watchPosition(
      position => {
        this.props.inputLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        this.getPump(position.coords.latitude, position.coords.longitude)
        this.getAddress()
        this.getShop()
      },
      err => console.warn(err),
      {
        enableHighAccuracy: true,
      }
    )
    // this.getPump()
    // this.getShop()
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.observeLocation)
  }
  async requestLocation() {
    try {
      if (Platform.OS == 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        if (granted == PermissionsAndroid.RESULTS.GRANRED) {
          this.setState({ hadMapPermission: true })
        }
      } else {
        this.setState({ hasMapPermission: true })
      }
    } catch (err) {
      console.warn(err)
    }
  }
  getPump = (latitude, longitude) => {
    close = pumps[0]
    pumps.forEach(pump => {
      if (
        getDistance(
          {
            latitude: latitude,
            longitude: longitude,
          },
          { latitude: pump.latitude, longitude: pump.longitude }
        ) <
        getDistance(
          {
            latitude: latitude,
            longitude: longitude,
          },
          { latitude: close.latitude, longitude: close.longitude }
        )
      ) {
        close = pump
      }
    })
    this.props.inputPump(close)
  }
  getShop = (latitude, longitude) => {
    close = shops[0]
    pumps.forEach(shop => {
      if (
        getDistance(
          {
            latitude: latitude,
            longitude: longitude,
          },
          { latitude: shop.latitude, longitude: shop.longitude }
        ) <
        getDistance(
          {
            latitude: latitude,
            longitude: longitude,
          },
          { latitude: close.latitude, longitude: close.longitude }
        )
      ) {
        close = shop
      }
    })
  }
  // {this.props.userLocation.pump == null ? null : (
  // )}
  toggle() {
    this.state.motion == 'pause'
      ? this.setState({ motion: 'play' })
      : this.setState({ motion: 'pause' })
  }

  async getAddress() {
    try {
      const result = await axios.get(
        `https://us1.locationiq.com/v1/reverse.php?key=22e4333e4131d4&lat=${this.props.userLocation.latitude}&lon=${this.props.userLocation.longitude}&format=json`
      )
      this.setState({
        address: {
          exact: result.data.address.footway,
          near: result.data.address.neighbourhood,
          town: result.data.address.town,
        },
      })
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Card style={{ padding: 10 }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              Tap to {this.state.motion == 'pause' ? 'play' : 'pause'}
            </Text>
            <TouchableNativeFeedback onPress={this.toggle}>
              <Icon
                name={
                  this.state.motion == 'pause' ? 'play-circle' : 'pause-circle'
                }
                color="black"
                size={200}
                style={{ textAlign: 'center', padding: 5 }}
              />
            </TouchableNativeFeedback>
          </Card>
        </View>
        <View style={styles.map}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.userLocation.longitude == null
                ? null
                : this.props.navigation.navigate('Maps', {
                    destination: 'pure map',
                  })
            }}
          >
            <Card style={{ padding: 5, paddingHorizontal: 10 }}>
              <Icon
                name="map"
                color="black"
                size={30}
                style={{ textAlign: 'center', padding: 5 }}
              />
              <Text style={styles.rest}>Map</Text>
            </Card>
          </TouchableNativeFeedback>
          <Card style={{ flex: 1, padding: 5 }}>
            <View style={styles.position}>
              <Icon
                name="map-marked-alt"
                color="black"
                size={30}
                style={{ padding: 5 }}
              />
              <View style={{ paddingLeft: 5, flex: 1 }}>
                <Text style={styles.head}>Current Location</Text>
                {this.state.address == null ? (
                  <ActivityIndicator size="small" color="#a9a9a9" />
                ) : (
                  <Text style={styles.rest}>
                    {this.state.address.exact} near {this.state.address.near},
                    {this.state.address.town}
                  </Text>
                )}
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.container}>
          <TouchableNativeFeedback>
            <Card style={styles.box}>
              <View>
                <Icon
                  name="wrench"
                  color="black"
                  size={30}
                  style={{ textAlign: 'center', padding: 5 }}
                />
                <Text style={styles.head}>Closest Repair Shop</Text>
                <Text style={styles.rest}>Maishowori repair center</Text>
                <Text style={styles.head}>Location</Text>
                <Text style={styles.rest}>Jagati, Bhaktapur</Text>
                <Text style={styles.head}>Phone: </Text>
                <Text style={styles.rest}>9849235415</Text>
              </View>
            </Card>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.userLocation.pump == null
                ? console.log('not ready')
                : this.props.navigation.navigate('Maps', {
                    destination: this.props.userLocation.pump,
                  })
            }}
          >
            <Card style={styles.box}>
              <View>
                <Icon
                  name="gas-pump"
                  color="black"
                  size={30}
                  style={{ textAlign: 'center', padding: 5 }}
                />
                <Text style={styles.head}>Closest Petrol Pump</Text>
                {this.props.userLocation.pump == null ? (
                  <ActivityIndicator size="small" color="#a9a9a9" />
                ) : (
                  <Text style={styles.rest}>
                    {this.props.userLocation.pump.name}
                  </Text>
                )}
                <Text style={styles.head}>Location</Text>
                {this.props.userLocation.pump == null ? (
                  <ActivityIndicator size="small" color="#a9a9a9" />
                ) : (
                  <Text style={styles.rest}>
                    {this.props.userLocation.pump.location}
                  </Text>
                )}
                <Text style={styles.head}>Phone: </Text>
                {this.props.userLocation.pump == null ? (
                  <ActivityIndicator size="small" color="#a9a9a9" />
                ) : (
                  <Text style={styles.rest}>
                    {this.props.userLocation.pump.phone}
                  </Text>
                )}
              </View>
            </Card>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    )
  }
}
const mapStateToProps = state => {
  return {
    userLocation: state.UserLocation,
  }
}
export default connect(
  mapStateToProps,
  actions
)(MapDashboard)
const styles = StyleSheet.create({
  box: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
  },
  head: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  rest: {
    textAlign: 'center',
    color: 'black',
  },
  map: {
    flexDirection: 'row',
  },
  position: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
})
