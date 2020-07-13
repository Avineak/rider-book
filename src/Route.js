import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'
import { Scene, Router, Tabs } from 'react-native-router-flux'
import Tips from '#tips/Tips'
import Study from '#study/Study'
import Video from '#video/Video'
import Quiz from '#quiz/Quiz'
import Sign from '#sign/Sign'
import Finish from '#quiz/Finish'
import CalcPage from '#expense/CalcPage'
// import CalcPage from '#expense/CalcPage'
import Icon from 'react-native-vector-icons/FontAwesome5'

// {/* <Text style={{ color: selected ? '#00BFFF' : 'black' }}>{title}</Text> */}
const TabIcon = ({ focused }) => {
  return (
    <View style={styles.navElement}>
      <Icon
        name="brain"
        size={20}
        color={focused ? '#00BFFF' : 'black'}
        style={{ textAlign: 'center' }}
      />
      <Text
        style={{ textAlign: 'center', color: focused ? '#00BFFF' : 'black' }}
      >
        this is it
      </Text>
    </View>
  )
}
const Route = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Tabs showLabel={false} tabBarStyle={styles.nav} swipeEnabled={false}>
          <Scene
            key="one"
            title="Tips"
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="brain"
                  size={20}
                  color={focused ? '#00BFFF' : 'black'}
                  style={{ textAlign: 'center' }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: focused ? '#00BFFF' : 'black',
                  }}
                >
                  Tips
                </Text>
              </View>
            )}
            component={Tips}
            hideNavBar
          />
          <Scene
            key="two"
            component={Study}
            title="Study"
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="book-open"
                  size={20}
                  color={focused ? '#00BFFF' : 'black'}
                  style={{ textAlign: 'center' }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: focused ? '#00BFFF' : 'black',
                  }}
                >
                  Study
                </Text>
              </View>
            )}
            nabs={false}
          />
          <Scene
            key="three"
            component={Video}
            title="Video"
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="play"
                  size={20}
                  color={focused ? '#00BFFF' : 'black'}
                  style={{ textAlign: 'center' }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: focused ? '#00BFFF' : 'black',
                  }}
                >
                  Video
                </Text>
              </View>
            )}
          />
          <Scene
            key="four"
            component={Quiz}
            title="Quiz"
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="th-list"
                  size={20}
                  color={focused ? '#00BFFF' : 'black'}
                  style={{ textAlign: 'center' }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: focused ? '#00BFFF' : 'black',
                  }}
                >
                  Quiz
                </Text>
              </View>
            )}
          />
          <Scene
            key="five"
            component={Sign}
            title="Sign"
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="traffic-light"
                  size={20}
                  color={focused ? '#00BFFF' : 'black'}
                  style={{ textAlign: 'center' }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: focused ? '#00BFFF' : 'black',
                  }}
                >
                  Traffic-Sign
                </Text>
              </View>
            )}
          />
          <Scene
            key="six"
            component={CalcPage}
            title="Expense"
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="comments-dollar"
                  size={20}
                  color={focused ? '#00BFFF' : 'black'}
                  style={{ textAlign: 'center' }}
                  hideNavBar
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: focused ? '#00BFFF' : 'black',
                  }}
                >
                  Expense
                </Text>
              </View>
            )}
          />
        </Tabs>
      </Scene>
    </Router>
  )
}
export default Route

const styles = StyleSheet.create({
  navElement: {
    padding: 1,
  },
  nav: {
    borderWidth: 0.1,
    borderRadius: 2,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 20,
    height: 75,
    borderTopWidth: 0,
  },
})
