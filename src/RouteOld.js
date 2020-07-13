import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'
import { Scene, Router, Tabs } from 'react-native-router-flux'
import CalcPage from '#expense/CalcPage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Maps from '#maps/Maps'
import RepairCalc from '#expense/RepairCalc'
import FuelCalc from '#expense/FuelCalc'
import ServicingCalc from '#expense/ServicingCalc'

const RouteOld = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene
          key="tabBar"
          tabs={true}
          tabBarPosition="bottom"
          tabBarStyle={styles.nav}
          showLabel={false}
        >
          <Scene
            key="oneis here"
            hideNavBar
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="comments-dollar"
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
                  Expense
                </Text>
              </View>
            )}
          >
            <Scene
              key="dashboard"
              hideNavBar
              component={CalcPage}
              title="Expenses"
              initial
            />
            <Scene
              key="repair"
              hideNavBar
              component={RepairCalc}
              title="Repair Expense"
              hideNavBar
              hideTabBar
            />
            <Scene
              key="fuel"
              hideNavBar
              component={FuelCalc}
              title="Fuel Expense"
              hideTabBar
            />
            <Scene
              key="servicing"
              hideNavBar
              component={ServicingCalc}
              title="Servicing Info"
              hideTabBar
            />
          </Scene>
          <Scene
            key="two"
            component={Maps}
            title="Maps"
            hideNavBar
            icon={({ focused }) => (
              <View style={styles.navElement}>
                <Icon
                  name="map"
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
                  Maps
                </Text>
              </View>
            )}
          />
        </Scene>
      </Scene>
    </Router>
  )
}
export default RouteOld

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
    backgroundColor: '#fff',
    padding: 0,
    height: 55,
    borderTopWidth: 0,
  },
})
// {/*     </Tabs> */}
