import * as React from 'react'
import {
  Text,
  ScrollView,
  FlatList,
  View,
  StyleSheet,
  Image,
} from 'react-native'
import { Card } from 'react-native-paper'
import Carder from './Carder'
const List = [
  {
    name1: 'Ahead Only',
    image1: require('./images/ahead_only.png'),
    name2: 'Axle Weight Limit',
    image2: require('./images/Axle_weight_limit.png'),
  },
  {
    name1: 'Bend To Left',
    image1: require('./images/bend_to_left.png'),
    name2: 'Bend to Right',
    image2: require('./images/bend_to_right.png'),
  },
  {
    name1: 'Breakdown Service',
    image1: require('./images/breakdown_service.png'),
    name2: 'Bus_Stop',
    image2: require('./images/bus_stop.png'),
  },
  {
    name1: 'Cattle',
    image1: require('./images/cattle.png'),
    name2: 'Check Point',
    image2: require('./images/checkpoint.png'),
  },
  {
    name1: 'Children',
    image1: require('./images/children.png'),
    name2: 'Cross Roads',
    image2: require('./images/crossroads.png'),
  },
  {
    name1: 'Dangerous Dip',
    image1: require('./images/dangerous_dip.png'),
    name2: 'Double Bend First Left',
    image2: require('./images/double_bend_first_left.png'),
  },
  {
    name1: 'Double Bend First Right',
    image1: require('./images/double_bend_first_right.png'),
    name2: 'Falling Rocks',
    image2: require('./images/falling_rocks.png'),
  },
  {
    name1: 'Filling Station',
    image1: require('./images/filling_station.png'),
    name2: 'Hospital',
    image2: require('./images/hospital.png'),
  },
  {
    name1: 'Loose Chippings',
    image1: require('./images/loose_chippings.png'),
    name2: 'Maximum Speed',
    image2: require('./images/maximum_speed.png'),
  },
  {
    name1: 'Narrow Bridge',
    image1: require('./images/narrow_bridge.png'),
    name2: 'No Entry',
    image2: require('./images/no_entry.png'),
  },
  {
    name1: 'No Horn',
    image1: require('./images/no_horn.png'),
    name2: 'No_Parking',
    image2: require('./images/no_parking.png'),
  },
]
export default class Sign extends React.Component {
  render() {
    console.log(List)
    return (
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View style={styles.container}>
          <Carder>
            <Text style={styles.paragraph}> Traffic Signs</Text>
          </Carder>

          <ScrollView>
            <FlatList
              data={List}
              renderItem={({ item }) => {
                return (
                  <View style={styles.bigCard}>
                    <Card style={styles.cardStyle}>
                      <View style={{ alignItems: 'center' }}>
                        <Image
                          source={item.image1}
                          style={{
                            width: 150,
                            height: 150,
                          }}
                        />
                        <Text style={styles.info}>{item.name1} </Text>
                      </View>
                    </Card>
                    <Card style={styles.cardStyle}>
                      <View style={{ alignItems: 'center' }}>
                        <Image
                          source={item.image2}
                          style={{
                            width: 150,
                            height: 150,
                          }}
                        />
                        <Text style={styles.info}>{item.name2} </Text>
                      </View>
                    </Card>
                  </View>
                )
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },
  bigCard: {
    backgroundColor: '#ecf0f1',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
  },
  cardStyle: {
    flex: 1,
    width: '50%',
    padding: 5,
    margin: 10,
    flexWrap: 'wrap',
  },
  info: {
    fontSize: 15,
    padding: 10,
  },
})
