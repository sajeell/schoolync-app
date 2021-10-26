import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import upperBG from '../../assets/up-bg.png'
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Image source={upperBG} style={styles.upperBG} />
        <View style={styles.menuIconContainer}>
          <View style={styles.menuIcon}></View>
          <View style={styles.menuIcon}></View>
          <View style={styles.menuIcon}></View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito_400Regular',
  },
  upperBG: {
    width: '100%',
    zIndex: -1,
  },
  menuIconContainer: {
    height: 80,
    width: 30,
    zIndex: 100,
    marginLeft: -50,
    marginTop: 50,
  },
  menuIcon: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    marginBottom: 8,
  },
})
