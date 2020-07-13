import { combineReducers } from 'redux'
import NavbarReducer from './reducer_for_navbar/NavbarReducer'
import QuizListReducer from './reducer_for_quiz/QuizListReducer'
import QuizSelectReducer from './reducer_for_quiz/QuizSelectReducer'
import SelectionReducer from './reducer_for_quiz/SelectionReducer'
import OverlayReducer from './reducer_for_quiz/OverlayReducer'
import TimerReducer from './reducer_for_quiz/TimerReducer'
import RepairworkReducer from './reducer_for_expense/RepairworkReducer'
import RepairworklistReducer from './reducer_for_expense/RepairworklistReducer'
import ToggleReducer from './reducer_for_expense/ToggleReducer'
import VideoListReducer from './reducer_for_video/VideoListReducer'
import VideoReducer from './reducer_for_video/VideoReducer'
import ClosestReducer from './reducer_for_maps/ClosestReducer'
import PositionReducer from './PositionReducer'
import NotificationReducer from './NotificationReducer'
export default combineReducers({
  NavSelect: NavbarReducer,
  QuizList: QuizListReducer,
  QuizSelect: QuizSelectReducer,
  OptionSelect: SelectionReducer,
  ToggleOverlay: OverlayReducer,
  Timer: TimerReducer,
  repairSingle: RepairworkReducer,
  repairList: RepairworklistReducer,
  Status: ToggleReducer,
  SelectedVideo: VideoReducer,
  VideoList: VideoListReducer,
  Destination: ClosestReducer,
  UserLocation: PositionReducer,
  Notifications: NotificationReducer,
})
