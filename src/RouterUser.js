import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouterNew from './RouterNew'
import RepairCalc from '#expense/RepairCalc'
import FuelCalc from '#expense/FuelCalc'
import ServicingCalc from '#expense/ServicingCalc'
import Maps from '#maps/Maps'
import History from '#expense/History'

const nav = createStackNavigator(
  {
    Route: RouterNew,
    Repair: RepairCalc,
    Fuel: FuelCalc,
    Servicing: ServicingCalc,
    Maps: Maps,
    History: History,
  },
  {
    headerMode: 'none',
  }
)
export default createAppContainer(nav)
