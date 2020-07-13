import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { Thumbnail } from 'react-native-thumbnail-video'
import React from 'react'
import Card from '#common/card/Card'

const VideoList = props => {
  return (
    <TouchableNativeFeedback onPress={() => props.click()}>
      <Card
        {...props}
        style={{
          backgroundColor: props.background,
          flexDirection: 'row',
          padding: 2,
          marginHorizontal: 20,
        }}
      >
        <Thumbnail
          url={'https://www.youtube.com/watch?v=' + props.id}
          showPlayIcon={false}
          imageWidth={100}
          imageHeight={80}
        />
        <View style={styles.detail}>
          <View style={{ flexWrap: 'wrap' }}>
            <Text>{props.heading}</Text>
          </View>
          <View style={{ flexWrap: 'wrap' }}>
            <Text>{props.description}</Text>
          </View>
        </View>
      </Card>
    </TouchableNativeFeedback>
  )
}
export default VideoList
const styles = StyleSheet.create({
  listwrapper: {
    flexDirection: 'row',
    padding: 8,
  },
  heading: {
    fontSize: 16,
    color: '#000',
  },
  detail: {
    justifyContent: 'space-around',
    marginLeft: 20,
    paddingVertical: 15,
  },
})
