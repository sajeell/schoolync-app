import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Link } from 'react-router-native'

import logo from '../../assets/org-logo.png'
export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.upperBG} />
      <View style={styles.contentContainer}>
        {props.back ? (
          <Link component={TouchableOpacity} to={props.backURL}>
            <Text style={styles.backText}>{'<'} BACK</Text>
          </Link>
        ) : (
          <Text style={styles.temp}></Text>
        )}
        <Text style={styles.pageName}>Mark Attendance</Text>
        <View style={styles.menuIconContainer}>
          <View style={styles.menuIconOne}></View>
          <View style={styles.menuIconTwo}></View>
          <View style={styles.menuIconThree}></View>
        </View>
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
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
  },
  upperBG: {
    width: 116,
    height: 67,
  },
  temp: {
    width: 40,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pageName: {
    fontSize: 21,
    fontFamily: 'Nunito_700Bold',
    marginHorizontal: 30,
  },
  menuIconContainer: {
    width: 16,
    alignItems: 'flex-end',
  },
  menuIconOne: {
    borderTopColor: 'black',
    borderTopWidth: 2,
    width: '100%',
  },
  menuIconTwo: {
    borderTopColor: 'black',
    borderTopWidth: 2,
    width: '50%',
    marginTop: 5,
  },
  menuIconThree: {
    borderTopColor: 'black',
    borderTopWidth: 2,
    width: '25%',
    marginTop: 5,
  },
})
