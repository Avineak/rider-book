const VideoReducer = (
  state = {
    height: 275,
    videoId: 'sX7-4uiuLzg',
  },
  action
) => {
  temp = { ...state }
  if (action.type == 'SELECT_VIDEO') {
    temp.videoId = action.payload
    return temp
  }
  if (action.type == 'VIDEO_RESIZE') {
    temp.height = 276
    return temp
  }
  return state
}
export default VideoReducer
