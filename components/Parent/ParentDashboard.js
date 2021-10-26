import React from 'react'
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native'

import upperBG from '../../assets/up-bg.png'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
export default function ParentDashboard() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.noTrips}>
          <Text style={styles.noTripsText}>No Trips Found</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
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
    fontFamily: 'Nunito_700Bold',
  },
  contentContainer: {
    paddingHorizontal: '5%',
  },
  noTrips: {
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 5,
    height: 50,
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
  noTripsText: {
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
  },
})
