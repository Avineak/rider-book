import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import Card from '#common/card/Card'
import Icon from 'react-native-vector-icons/FontAwesome5'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fuel: [{ name: 'hdsjflsd', price: 1231231, id: 3423423 }],
      repair: this.props.List.repair,
      servicing: this.props.List.servicing,
    }
    this.renderItem = this.renderItem.bind(this)
  }
  renderItem = ({ item }) => {
    ;<Card
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Icon name="wrench" color="black" size={25} />
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Price:</Text>
        <Text>{item.price}</Text>
      </View>
    </Card>
  }
  render() {
    return (
      <View>
        {this.state.fuel == null ? (
          <Card style={{ padding: 15 }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              NO RECORDS
            </Text>
          </Card>
        ) : (
          <FlatList
            data={this.state.fuel}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
          />
        )}
        <Card
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Icon name="wrench" color="black" size={25} />
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Car Repair</Text>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Price:</Text>
            <Text>Rs 40000</Text>
          </View>
        </Card>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    List: state.Notifications,
  }
}
export default connect(mapStateToProps)(History)
