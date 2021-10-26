import React from 'react'
import { StyleSheet, Image, View, Dimensions } from 'react-native'

import dashboardIcon from '../../assets/dashboard.png'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image source={dashboardIcon} style={{ width: 35, height: 35 }} />
      <Image source={dashboardIcon} style={{ width: 35, height: 35 }} />
      <Image source={dashboardIcon} style={{ width: 35, height: 35 }} />
    </View>
  )
}

const greenColor = '#00B966'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: greenColor,
  },
})
