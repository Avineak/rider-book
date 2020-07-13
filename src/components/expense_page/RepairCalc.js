import {
  TouchableWithoutFeedback,
  FlatList,
  View,
  Text,
  TextInput,
} from 'react-native'
import * as actions from '#expense_action/RepairworklistAction'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Press from '#common/Press'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Card from '#common/card/Card'

class RepairCalc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      price: '',
      shop: '',
      location: '',
      time: '',
      date: '',
      icon: '',
    }
    this.clearInput = this.clearInput.bind(this)
    this.addToList = this.addToList.bind(this)
  }
  componentDidMount() {
    this.clock = new Date()
  }
  addToList() {
    if (
      this.state.name == '' ||
      this.state.price == '' ||
      this.state.shop == '' ||
      this.state.location == ''
    ) {
      console.log('empty input')
    }
    times = this.clock.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    dates = this.clock.toDateString().substring(4)
    id = Math.floor(Date.now() / 1000)
      .toString()
      .substring(3)
    this.setState({ time: times, date: dates, id: id }, () => {
      this.props.addRepair(this.state)
      this.clearInput()
    })
  }
  clearInput() {
    this.setState({
      name: '',
      price: '',
      shop: '',
      location: '',
      time: '',
      date: '',
      id: '',
      icon: '',
    })
    this.ref.focus()
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ name: text })}
          placeholder={'this is name'}
          value={this.state.name}
          ref={ref => (this.ref = ref)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ price: text })}
          placeholder={'this is price'}
          value={this.state.price}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ shop: text })}
          placeholder={'this is shop'}
          value={this.state.shop}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ location: text })}
          placeholder={'this is location'}
          value={this.state.location}
        />
        <Press onPress={this.addToList} label="Add" />
        {this.props.List.length > 0 ? (
          <FlatList
            data={this.props.List}
            keyExtractor={item => item.id}
            renderItem={item => (
              <Card
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  alignItems: 'center',
                }}
              >
                <Icon name="wrench" color="black" size={40} />
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    {item.item.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {item.item.price}
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => this.props.removeRepair(item.item.id)}
                >
                  <View>
                    <Icon name="times" color="red" size={30} />
                  </View>
                </TouchableWithoutFeedback>
              </Card>
            )}
          />
        ) : null}
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    List: state.repairList,
  }
}
const reducer = state => {}
export default connect(
  mapStateToProps,
  actions
)(RepairCalc)
