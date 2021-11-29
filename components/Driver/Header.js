import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Link } from 'react-router-native'
import { Overlay } from 'react-native-elements'

import logo from '../../assets/org-logo.png'
import Menu from './Menu'
export default function Header(props) {
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }
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
        <Text style={styles.pageName}>
          {props.pageName ? props.pageName : 'Mark Attendance'}
        </Text>
        <TouchableOpacity
          style={styles.menuIconContainer}
          onPress={toggleOverlay}
        >
          <View style={styles.menuIconOne}></View>
          <View style={styles.menuIconTwo}></View>
          <View style={styles.menuIconThree}></View>
        </TouchableOpacity>
      </View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          alignSelf: 'flex-start',
          backgroundColor: 'transparent',
          margin: 0,
          padding: 0,
        }}
      >
        <View
          style={{
            alignSelf: 'flex-start',
            marginTop: 0,
            paddingTop: 0,
          }}
        >
          <Menu />
        </View>
      </Overlay>
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
