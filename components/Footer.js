import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
  )
}

export default Footer

const styles = StyleSheet.create({
footer: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})