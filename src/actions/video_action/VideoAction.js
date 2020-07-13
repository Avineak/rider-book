export const VideoAction = () => {
  return {
    type: null,
  }
}
export const selectVideo = id => {
  return {
    type: 'SELECT_VIDEO',
    payload: id,
  }
}
export const resizeVideo = () => {
  return {
    type: 'VIDEO_RESIZE',
  }
}
