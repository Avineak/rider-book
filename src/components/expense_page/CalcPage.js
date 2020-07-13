import React, { Component } from 'react'
import {
  TouchableNativeFeedback,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import * as repairSingle from '#expense_action/RepairworkAction'
import * as repairList from '#expense_action/RepairworklistAction'
import { bindActionCreators } from 'redux'
import FuelOverlay from './FuelOverlay'
import ServicingOverlay from './ServicingOverlay'
import { LineChart, Grid, ProgressCircle } from 'react-native-svg-charts'
import Card from '#common/card/Card'
import { Actions } from 'react-native-router-flux'
import Press from '#common/Press'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { PieChart } from 'react-native-chart-kit'
import AsyncStorage from '@react-native-community/async-storage'

class CalcPage extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.state = {
      pieRepair: 4,
      pieFuel: 4,
      pieServicing: 4,
    }
    this.data = [
      {
        name: 'Repairing',
        population: this.state.pieRepair,
        color: '#808080',
        legendFontColor: '#000',
        legendFontSize: 13,
      },
      {
        name: 'Fuel',
        population: this.state.pieFuel,
        color: '#696969',
        legendFontColor: '#000',
        legendFontSize: 13,
      },
      {
        name: 'Servicing',
        population: this.state.pieServicing,
        color: '#A9A9A9',
        legendFontColor: '#000',
        legendFontSize: 13,
      },
    ]
  }
  chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  }

  getData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('fuel')
      const value2 = await AsyncStorage.getItem('repair')
      const value3 = await AsyncStorage.getItem('servicing')
      if (value1 !== null) {
        this.setState({
          pieRepair: value1,
          pieFuel: value2,
          pieServicing: value3,
        })
      }
    } catch (e) {}
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    console.log(this.state)
    return (
      <ScrollView>
        <Card style={{ padding: 8, alignItems: 'flex-end' }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
            }}
          >
            Expense Overview
          </Text>
          <PieChart
            data={this.data}
            width={screenWidth}
            height={220}
            chartConfig={this.chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </Card>

        <View style={{ flexDirection: 'row' }}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Repair')}
          >
            <Card style={styles.icon}>
              <Icon
                name="wrench"
                color="black"
                size={30}
                style={styles.inicon}
              />
              <View>
                <Text style={styles.body}>Repairing</Text>
                <Text style={styles.body}>Expenses</Text>
                <Text style={styles.body}>Rs. 5500</Text>
              </View>
            </Card>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Card style={styles.icon}>
              <Icon
                name="gas-pump"
                color="black"
                size={30}
                style={styles.inicon}
              />
              <View>
                <Text style={styles.body}>Fuel</Text>
                <Text style={styles.body}>Expenses</Text>
                <Text style={styles.body}>Rs. 1500</Text>
              </View>
            </Card>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Card style={styles.icon}>
              <Icon
                name="hourglass-half"
                color="black"
                size={30}
                style={styles.inicon}
              />
              <View>
                <Text style={styles.body}>Servicing</Text>
                <Text style={styles.body}>Expenses</Text>
                <Text style={styles.body}>Rs. 5500</Text>
              </View>
            </Card>
          </TouchableNativeFeedback>
        </View>

        <View>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('History')}
          >
            <Card
              style={{
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Icon name="clock" color="black" size={38} />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  History of Expenses
                </Text>
              </View>
            </Card>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    )
  }
}
const mapStateToProps = state => {
  return {
    List: state.repairList,
    Single: state.repairSingle,
    fuelStatus: state.Status.fuelStatus,
    repairStatus: state.Status.repairStatus,
    servicingStatus: state.Status.servicingStatus,
    fuelStatus: state.Status.fuelStatus,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    repairSingle: bindActionCreators(repairSingle, dispatch),
    repairList: bindActionCreators(repairList, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalcPage)
const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  icon: {
    padding: 10,
    flex: 1,
    borderBottomWidth: 1,
  },
  body: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
  inicon: {
    textAlign: 'center',
    padding: 10,
  },
})
//
// {/* <View style={{ padding: 5 }}></View> */}
// {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}> */}
// {/*   <Text style={styles.textBold}>70%</Text> */}
// {/*   <Text style={styles.textBold}>980 | 1500</Text> */}
// {/*   <Text style={styles.textBold}> Km</Text> */}
// {/* </View> */}
