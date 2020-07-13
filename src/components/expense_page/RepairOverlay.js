import { View, Text, TextInput } from 'react-native'
import * as repairSingle from '#expense_action/RepairworkAction'
import * as repairList from '#expense_action/RepairworklistAction'
import * as Toggler from '#expense_action/ToggleAction'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Press from '#common/Press'

class RepairOverlay extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.props.repairSingle.inputWork(text)}
          placeholder={'this is currency'}
          ref={'text1'}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.props.repairSingle.inputCost(text)}
          placeholder={'this is currency'}
          ref={'text2'}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.props.repairSingle.inputWorkshop(text)}
          placeholder={'this is currency'}
          ref={'text3'}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.props.repairSingle.inputLocation(text)}
          placeholder={'this is currency'}
          ref={'text4'}
        />
        <Press onPress={() => this.clearText('text2')} label="Add" />
        <Press
          onPress={() => this.props.Toggle.toggleRepair()}
          label={'Repair Toggle'}
        />
        <Text>
          {'work: ' + this.props.Single.work}
          {'cost: ' + this.props.Single.cost}
          {'workshop: ' + this.props.Single.workshop}
          {'location: ' + this.props.Single.location}
        </Text>
      </View>
    )
  }
}
// this.textInput.clear()
function mapDispatchToProps(dispatch) {
  return {
    repairSingle: bindActionCreators(repairSingle, dispatch),
    repairList: bindActionCreators(repairList, dispatch),
    Toggle: bindActionCreators(Toggler, dispatch),
  }
}
const mapStateToProps = state => {
  return {
    List: state.repairList,
    Single: state.repairSingle,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepairOverlay)
