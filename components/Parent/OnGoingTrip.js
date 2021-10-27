import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function OnGoingTrip() {
  return (
    <View style={styles.container}>
      <Header back={true} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>David's Trip</Text>
        <View style={styles.ongoingBox}></View>
      </View>
      <Footer dashboard={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
})
