import React, { Component } from 'react'
import * as actions from '#nav_action/NavbarAction'
import { connect } from 'react-redux'
import Nav from '#nav/Nav'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Card from '#common/card/Card'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Press from '#common/Press'
import { Actions } from 'react-native-router-flux'

class Finish extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Card style={{ alignItems: 'center', padding: 20 }}>
            <View style={{ justifyConternt: 'center', alignItems: 'center' }}>
            <Icon name="ios-checkmark-circle" size={450} color="green" />
          <Text style={{ fontSize: 30, fontWeight: 'bold', color:"#000"}}>
            Congratulation you passed!
          </Text>
          <Press
            onPress={() => {
              Actions.start()
            }}
            label={'Done'}
          />
              <Icon name="th-list" size={160} color="#000" />
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>
                Quiz Exam
              </Text>
              <Text style={styles.list}>Full marks: 60</Text>
              <Text style={styles.list}>Pass marks: 24</Text>
              <Text style={styles.list}>Time: 60 minutes</Text>
            </View>
            <Press
              label="Start Quiz"
              style={{ margin: 20, width: 200 }}
              onPress={() => Actions.quiz()}
            />
          </Card>
        </View>
        <Nav />
      </View>
    )
  }
}
const mapStateToProps = state => {
  return { select: state.NavSelect }
}
export default connect(
  mapStateToProps,
  actions
)(Finish)
const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    padding: 4,
  },
  button: {
    padding: 5,
  },
})
