import { View, Texti, ScrollView, Dimensions } from 'react-native'
const Start = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true}>
      <View style={styles.outer}>
        <Text>This is first page</Text>
      </View>
      <View style={styles.outer}>
        <Text>This is first page</Text>
      </View>
      <View style={styles.outer}>
        <Text>This is first page</Text>
      </View>
      <View style={styles.outer}>
        <Text>This is first page</Text>
      </View>
      <View style={styles.outer}>
        <Text>This is first page</Text>
      </View>
    </ScrollView>
  )
}
export default Start
const style = StyleSheet.create({
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innettext: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
})
