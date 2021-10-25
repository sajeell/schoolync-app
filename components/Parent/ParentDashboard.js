import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function ParentDashboard() {
  return (
    <View style={styles.container}>
      <Text>Parent Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito_400Regular',
  },
})
