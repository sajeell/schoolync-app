import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import { Link } from 'react-router-native'
import { Overlay } from 'react-native-elements'

import Header from './Header'

import startRideBG from '../../assets/start-ride-bg.jpg'

export default function DriverDashboard() {
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          alignSelf: 'center',
          height: '60%',
          width: '70%',
          margin: 0,
          padding: 0,
          backgroundColor: 'white',
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        <View style={{ alignSelf: 'center' }}>
          <Image
            source={startRideBG}
            style={{
              height: 200,
              width: 280,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />

          <Text
            style={{
              fontFamily: 'Nunito_400Regular',
              textAlign: 'center',
              fontSize: 15,
              paddingHorizontal: 30,
              marginTop: '10%',
              marginBottom: '10%',
            }}
          >
            Are you sure you want to start the ride?
          </Text>

          <Link
            component={TouchableOpacity}
            to='/driver-mark-students'
            style={styles.alertButton}
          >
            <Text style={styles.alertButtonText}>START RIDE</Text>
          </Link>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: 200,
              height: 49,
              borderRadius: 24.5,
              borderColor: 'rgba(43, 136, 198, 255)',
              borderWidth: 1.5,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={toggleOverlay}
          >
            <Text style={styles.schoolButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
      <View>
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 15,
            paddingLeft: '10%',
          }}
        >
          Hey,
        </Text>
        <Text
          style={{
            fontFamily: 'Nunito_700Bold',
            fontSize: 20,
            paddingLeft: '10%',
          }}
        >
          Driver
        </Text>
      </View>

      <TouchableOpacity style={styles.schoolButton} onPress={toggleOverlay}>
        <Text style={styles.schoolButtonText}>START RIDE</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
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
  heading: {
    fontSize: 22,
    paddingHorizontal: '5%',
    fontFamily: 'Nunito_700Bold',
  },
  alertText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    alignSelf: 'flex-end',
    paddingRight: '5%',
    letterSpacing: 1,
    color: 'red',
  },
  contentContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  studentBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  redBox: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: 'rgba(231, 19, 15, 255)',
    borderWidth: 3,
    borderColor: 'rgba(243, 136, 134, 255)',
  },
  line: {
    backgroundColor: 'rgba(112, 112, 112, 255)',
    width: 48,
    height: 1,
  },
  studentBox: {
    marginStart: -0.5,
    width: 200,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
  },
  address: {
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
  },
  greenBox: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: '#00B966',
    borderWidth: 3,
    borderColor: '#7FDCB2',
  },
  button: {
    alignSelf: 'center',
    width: 279,
    height: 49,
    borderRadius: 24.5,
    backgroundColor: 'rgba(43, 136, 198, 255)',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',
    color: 'white',
    fontSize: 15,
  },
  schoolButton: {
    alignSelf: 'center',
    width: 279,
    height: 49,
    borderRadius: 24.5,
    borderColor: 'rgba(43, 136, 198, 255)',
    borderWidth: 1.5,
    backgroundColor: 'white',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  schoolButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: 'rgba(43, 136, 198, 255)',
    fontSize: 15,
  },
  iosDropdownContainer: {
    maxWidth: '90%',
    width: 280,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
    color: 'gray',
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'gray',
    paddingLeft: 8,
    marginTop: 20,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  dropdownContainer: {
    maxWidth: '90%',
    width: 280,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
    color: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    fontFamily: 'Nunito_400Regular',
  },
  alertButton: {
    alignSelf: 'center',
    width: 200,
    height: 49,
    borderRadius: 24.5,
    backgroundColor: 'rgba(43, 136, 198, 255)',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: 'white',
    fontSize: 14,
  },
})
