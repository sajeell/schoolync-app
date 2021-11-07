import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Link } from 'react-router-native'

import upperBG from '../../assets/up-bg.png'

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {props.back ? (
          <Link
            component={TouchableOpacity}
            to={props.backURL}
            style={styles.backContainer}
          >
            <Text style={styles.backText}>← Back</Text>
          </Link>
        ) : (
          <View></View>
        )}
        <Image source={upperBG} style={styles.upperBG} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito_400Regular',
  },
  backContainer: {
    marginTop: '12%',
    marginLeft: '5%',
    position: 'absolute',
  },
  backText: {
    fontFamily: 'Nunito_400Regular',
    color: 'white',
  },
  upperBG: {
    width: '100%',
    zIndex: -1,
  },
  menuIconContainer: {
    width: 26,
    zIndex: 100,
    marginLeft: -50,
    marginTop: 50,
  },
  menuIcon: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    marginBottom: 6,
  },
})
