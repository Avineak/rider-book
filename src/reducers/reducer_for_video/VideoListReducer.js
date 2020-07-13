import data from './videoList.json'
const VideoListReducer = (state = data, action) => {
  if (action.type == 'SHUFFLE') {
    left = state.slice(0, action.payload)
    right = state.slice(action.payload)
    temp = right.concat(left)
    return temp
  }
  return state
}

export default VideoListReducer
