import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import onGoingTripPic from '../../assets/ongoing.png'

export default function OnGoingTrip() {
  return (
    <View style={styles.container}>
      <Header back={true} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>David's Trip</Text>
        <View style={styles.ongoingBox}>
          <Image
            source={onGoingTripPic}
            style={{ width: '87%', height: '87%' }}
          ></Image>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Track</Text>
        </TouchableOpacity>
      </View>
      <Footer dashboard={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    maxHeight: '85%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: '5%',
    top: 0,
    bottom: 0,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Nunito_200ExtraLight',
    letterSpacing: 3,
  },
  ongoingBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    margin: 5,
    height: '70%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 30,
    borderRadius: 10,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '70%',
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: '#2B88C6',
    padding: '4%',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})