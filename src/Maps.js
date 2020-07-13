import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import YouTube from 'react-native-youtube'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Thumbnail } from 'react-native-thumbnail-video'
import { NetInfo } from 'react-native'
const key = 'AIzaSyB5c61YDKW8kL_L-obB5CrKcwVIX7FU3lg'

class Maps extends Component {
  state = {
    height: 300,
  }

  handleReady = () => {
    setTimeout(() => this.setState({ height: 301 }), 500)
  }

  render() {
    return (
      <View>
        <YouTube
          apiKey={key}
          ref={item => (this.player = item)}
          videoId="2DYYVp4QXew"
          controls={1}
          onReady={this.handleReady}
          style={{ alignSelf: 'stretch', height: this.state.height }}
        />
        {() => {
          NetInfo.fetch().then(state => {
            return <Text>{state.type}</Text>
          })
        }}
        <Thumbnail
          url="https://www.youtube.com/watch?v=2DYYVp4QXew"
          showPlayIcon={false}
          onPress={() => {}}
        />
      </View>
    )
  }
}
export default Maps
