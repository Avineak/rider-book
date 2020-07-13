import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Slider from '@react-native-community/slider'
import Video from 'react-native-af-video-player'
const url = require('./test.mp4')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

class VideoTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video url={url} />
      </View>
    )
  }
}
export default VideoTest
