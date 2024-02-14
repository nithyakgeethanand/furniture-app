import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      {/* <Text style={styles.headerText}>Header</Text> */}
      <MaterialCommunityIcons name="dots-square" size={24} color="black" />
      <View style={{
        flexDirection: "row",
        //backgroundColor: "red",
        padding: 5,
        justifyContent: "space-between"
      }}>
        <Feather name="search" size={24} color="black" />
        <SimpleLineIcons name="bag" size={24} color="black" />
      </View>

    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    //backgroundColor: 'lightblue',
    //padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
