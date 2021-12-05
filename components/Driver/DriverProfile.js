import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import Header from './Header'

import avatar from '../../assets/driver-avatar.png'
import profileEditIcon from '../../assets/profile-edit.png'

export default function DriverProfile() {
  return (
    <View>
      <Header pageName={'My Profile'} />
      <Image
        source={avatar}
        style={{
          alignSelf: 'center',
          width: 278,
          height: 276,
          marginTop: 20,
        }}
      />
      <View style={styles.contentContainer}>
        <View
          style={{
            borderTopColor: 'gray',
            borderTopWidth: 3,
            width: '40%',
            alignSelf: 'center',
          }}
        ></View>
        <View style={styles.profileContent}>
          <View>
            <Text style={styles.boxSubTitle}>Stephen Graslon</Text>
            <Text style={styles.title}>abc@abc.com</Text>
          </View>
          <Image source={profileEditIcon} />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.topRow}>
            <View style={styles.topLeftBox}>
              <Text style={styles.boxTitle}>City:</Text>
              <Text style={styles.boxSubTitle}>Islamabad</Text>
            </View>
            <View style={styles.topRightBox}>
              <Text style={styles.boxTitle}>City:</Text>
              <Text style={styles.boxSubTitle}>Islamabad</Text>
            </View>
          </View>
          <View style={styles.topRow}>
            <View style={styles.bottomLeftBox}>
              <Text style={styles.boxTitle}>City:</Text>
              <Text style={styles.boxSubTitle}>Islamabad</Text>
            </View>
            <View style={styles.bottomRightBox}>
              <Text style={styles.boxTitle}>City:</Text>
              <Text style={styles.boxSubTitle}>Islamabad</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -20,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    height: '100%',
  },
  boxContainer: {
    marginTop: 50,
    bottom: -20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLeftBox: {
    padding: 50,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  topRightBox: {
    padding: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  bottomLeftBox: {
    padding: 50,
    borderRightWidth: 1,
  },
  bottomRightBox: {
    padding: 50,
  },
  boxTitle: {
    fontSize: 14,
  },
  boxSubTitle: {
    fontSize: 19,
    fontFamily: 'Nunito_700Bold',
  },
  profileContent: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 50,
  },
})
