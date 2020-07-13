import React, { Component } from 'react'
import * as action1 from '#quiz_action/QuizSelectionAction'
import * as action2 from '#quiz_action/SelectionAction'
import * as action3 from '#quiz_action/OverlayAction'
import { connect } from 'react-redux'
import { View, Text, Button, Dimensions } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import Card from '#common/card/Card'
import Stack from '#quiz/Stack'
import { bindActionCreators } from 'redux'
import Press from '#common/Press'
import Icon from 'react-native-vector-icons/Ionicons'
import Timer from '#quiz/Timer'

const screenWidth = Dimensions.get('window').width - 10
class QuizPage extends Component {
  element(name, num) {
    if (num == this.props.SelectedOption) {
      return (
        <Stack
          name={name}
          backgroundcolor={'#4c85bd'}
          textcolor={'white'}
          optionSwitch={() => this.optionHandler(num)}
        />
      )
    }
    return (
      <Stack
        name={name}
        backgroundcolor={'black'}
        textcolor={'white'}
        optionSwitch={() => this.optionHandler(num)}
      />
    )
  }

  optionHandler(num) {
    this.props.optionAction.SelectionAction(num)
  }
  nextQuiz() {
    this.props.optionAction.ResetAction()
    this.props.overlayAction.OverlayAction()
    this.props.quizAction.IncreaseQuiz()
  }

  checkAnswer() {
    if (
      this.props.SelectedOption == this.props.List[this.props.Selector].Answer
    ) {
      return (
        <Overlay visible={this.props.overlayStatus}>
          <Icon name="ios-checkmark-circle" size={450} color="green" />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            The Answer is correct
          </Text>
          <Press
            onPress={() => {
              if (this.props.Selector == 61) {
                Action.finish()
              }

              this.nextQuiz()
            }}
            label={'Next'}
          />
        </Overlay>
      )
    }
    return (
      <Overlay visible={this.props.overlayStatus}>
        <Icon name="ios-close-circle" size={450} color="red" />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          The Answer is wrong
        </Text>
        <Press onPress={() => this.nextQuiz()} label={'Next'} />
      </Overlay>
    )
  }
  render() {
    console.log(this.props.List.length)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Timer />
        <View style={styles.card}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
              fontSize: 22,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            {this.props.List[this.props.Selector].Question}
          </Text>
          <View style={{ marginBottom: 10 }}>
            {this.element(
              this.props.List[this.props.Selector].Options[0].label,
              1
            )}
            {this.element(
              this.props.List[this.props.Selector].Options[1].label,
              2
            )}
            {this.element(
              this.props.List[this.props.Selector].Options[2].label,
              3
            )}
            {this.element(
              this.props.List[this.props.Selector].Options[3].label,
              4
            )}
          </View>
          <Press
            onPress={() => this.props.overlayAction.OverlayAction()}
            label={'Check Answer'}
          />
        </View>
        {this.checkAnswer()}
      </View>
    )
  }
}

const mapStateToProp = state => {
  return {
    List: state.QuizList,
    Selector: state.QuizSelect,
    SelectedOption: state.OptionSelect,
    overlayStatus: state.ToggleOverlay,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    quizAction: bindActionCreators(action1, dispatch),
    optionAction: bindActionCreators(action2, dispatch),
    overlayAction: bindActionCreators(action3, dispatch),
  }
}
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(QuizPage)

const styles = {
  card: {
    borderWidth: 0.1,
    borderRadius: 2,
    bordorColor: '#ddd',
    bordorBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10,
    margin: 10,
    alignItems: 'center',
    paddingVertical: 15,
    width: screenWidth,
    backgroundColor: '#fff',
  },
}
