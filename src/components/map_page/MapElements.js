import {
  TouchableNativeFeedback,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import React, { Component } from 'react'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome5'

class MapElements extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      prediction: [],
    }
    this.getPlaces = this.getPlaces.bind(this)
    this.setDestination = this.setDistination.bind(this)
  }
  async getPlaces(input) {
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAUADj1aXwZipb2IWtdB9Qd8onxivcYXjc&input=${input}`
      // `https://api.tomtom.com/search/2/search/${input}.JSON?key=c47yWqaYqVOP1GSOLpzrDgnEA8WGklZj&limit=10&countrySet=NP&lat=${this.props.latitude}&lon=${this.props.longitude}`
    )
    this.setState({ prediction: result.data.predictions })
  }

  setDistination(text) {
    this.setState({ input: text, prediction: [] })
  }
  render() {
    const predictions = this.state.prediction.map(prediction => (
      <TouchableNativeFeedback
        key={prediction.id}
        onPress={() => {
          this.setDistination(prediction.structured_formatting.main_text)
          this.props.showDirection(prediction.place_id)
        }}
      >
        <View style={styles.list}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>
            {prediction.structured_formatting.main_text}
          </Text>
          <Text>{prediction.structured_formatting.secondary_text}</Text>
        </View>
      </TouchableNativeFeedback>
    ))
    return (
      <View style={styles.container}>
        {this.props.selection != 'pure map' ? null : (
          <TextInput
            value={this.state.input}
            placeholder="Place to go..."
            style={styles.input}
            autoCorrect={false}
            autoCapitalization="none"
            onChangeText={input => {
              this.setState({ input: input })
              this.getPlaces(input)
            }}
          />
        )}
        {this.state.prediction.length == 0 ? null : (
          <View style={styles.listContainer}>{predictions}</View>
        )}
      </View>
    )
  }
}
export default MapElements
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 5,
    height: 50,
    marginTop: 20,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,100,0.2)',
    borderRadius: 5,
    width: '90%',
  },
  container: {
    marginTop: 3,
    alignItems: 'center',
  },
  list: {
    height: 50,
    backgroundColor: 'white',
    padding: 5,
    borderBottomColor: 'rgba(0,0,100,0.2)',
    borderBottomWidth: 1,
  },
  second: {
    color: '#777',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,100,0.2)',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '90%',
    padding: 5,
  },
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    elevation: 1,
    borderWidth: 1,
  },
  mapMode: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
})
//        <View style={styles.button}>
//          <View style={styles.mapMode}>
//          <Icon name="gas-pump" size={25} color="red" />
//      </View>
//      <View style={styles.button}>
//          <Icon name="gas-pump" size={25} color="red" />
//      </View>
//      <View style={styles.button}>
//          <Icon name="gas-pump" size={25} color="red" />
//      </View>
//  </View>
