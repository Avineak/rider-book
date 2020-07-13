import React, { Component } from 'react'
import * as actions from '#nav_action/NavbarAction'
import { connect } from 'react-redux'
import Actions from 'react-native-router-flux'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from '#common/card/Card'
import list from './Tiplist.json'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, 1)`,
  strokeWidth: 1, // optional, default 3
}

const data = {
  labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 6', 'Jun 7'],
  datasets: [
    {
      data: [0, 33, 12, 53, 32, 12],
      strokeWidth: 1, // optional
    },
  ],
}
const quote = list[Math.floor(Math.random() * list.length)]

class Tips extends Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Card>
          <View style={{ textAlign: 'center' }}>
            <Icon
              name="lightbulb-on"
              color="#000"
              style={{ fontSize: 30, textAlign: 'center' }}
            />
          </View>
          <Text style={styles.heading}>Tips Of The Day</Text>
          <View style={styles.bodyview}>
            <Text style={styles.body}>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>"</Text>

              {quote.text}
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>"</Text>
            </Text>
          </View>
        </Card>
        <Card styles={{ paddingTop: 5, borderRadius: 5, shadowRadius: 5 }}>
          <View style={{ padding: 5 }}>
            <Text style={styles.heading}>Quiz Performance</Text>
          </View>
          <LineChart
            data={data}
            width={screenWidth - 10}
            height={220}
            chartConfig={chartConfig}
            withShadow={true}
            withInnerLines={false}
            withOuterLines={false}
            fromZero={true}
          />
        </Card>
        <Card>
          <Text style={styles.heading}>Last Quiz</Text>
          <Text style={[styles.body, { padding: 10 }]}>10:03 PM</Text>
        </Card>
      </ScrollView>
    )
  }
}
const mapStateToProps = state => {
  return { select: state.NavSelect }
}
export default connect(
  mapStateToProps,
  actions
)(Tips)
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginTop: 5,
  },
  bodyview: {
    padding: 20,
  },
  body: {
    fontSize: 20,
    fontFamily: 'serif',
    textAlign: 'center',
  },
})
