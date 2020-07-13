import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import YouTube from 'react-native-youtube'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Thumbnail } from 'react-native-thumbnail-video'
import { NetInfo } from 'react-native'
import VideoList from '#video/VideoList'
import { connect } from 'react-redux'
import * as action1 from '#video_action/VideoAction'
import * as action2 from '#video_action/VideoListAction'
import { bindActionCreators } from 'redux'
const key = 'AIzaSyB5c61YDKW8kL_L-obB5CrKcwVIX7FU3lg'

class Video extends Component {
  handleReady = () => {
    setTimeout(() => this.props.videoAction.resizeVideo(), 500)
  }
  renderVideo = video => {
    if (this.props.Video == video.item.id) {
      return (
        <VideoList
          id={video.item.id}
          heading={video.item.heading}
          description={video.item.description}
          click={() => this.props.videoAction.selectVideo(video.item.id)}
          background="#D3D3D3"
        />
      )
    }
    return (
      <VideoList
        id={video.item.id}
        heading={video.item.heading}
        description={video.item.description}
        click={() => {
          this.props.videoListAction.videoShuffle(
            this.props.Videos.findIndex(val => val.id == video.item.id)
          )
          this.props.videoAction.selectVideo(video.item.id)
        }}
        background="#fff"
      />
    )
  }

  render() {
    return (
      <View>
        <YouTube
          apiKey={key}
          videoId={this.props.Video}
          controls={1}
          onReady={this.handleReady}
          style={{ alignSelf: 'stretch', height: this.props.Height }}
          loop={true}
        />
        <FlatList
          data={this.props.Videos}
          keyExtractor={video => video.id}
          renderItem={video => this.renderVideo(video)}
        />
        <VideoList />
      </View>
    )
  }
}
mapStateToProps = state => {
  return {
    Video: state.SelectedVideo.videoId,
    Videos: state.VideoList,
    Height: state.SelectedVideo.height,
  }
}
mapDispatchToProps = dispatch => {
  return {
    videoAction: bindActionCreators(action1, dispatch),
    videoListAction: bindActionCreators(action2, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video)
