import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Overlay } from 'react-native-elements'

import upperBG from '../../assets/up-bg.png'
import Menu from '../Parent/Menu'
export default function Header(props) {
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {props.back ? (
          <TouchableOpacity style={styles.backContainer}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Image source={upperBG} style={styles.upperBG} />
        <View style={styles.menuIconContainer}>
          <TouchableOpacity onPress={toggleOverlay}>
            <View style={styles.menuIcon}></View>
            <View style={styles.menuIcon}></View>
            <View style={styles.menuIcon}></View>
          </TouchableOpacity>
        </View>
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
