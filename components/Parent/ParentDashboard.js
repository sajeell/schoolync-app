import React from 'react'
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import blueBus from '../../assets/bus-blue.png'
import redBus from '../../assets/bus-red.png'

export default function ParentDashboard() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Dashboard</Text>
      <ScrollView style={styles.contentContainer}>
        {/* <View style={styles.noTrips}>
          <Text style={styles.noTripsText}>No Trips Found</Text>
        </View> */}
        <ScrollView>
          <View style={styles.tripBox}>
            <Image source={blueBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripBox}>
            <Image source={redBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripBox}>
            <Image source={blueBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripBox}>
            <Image source={redBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripBox}>
            <Image source={blueBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripBox}>
            <Image source={redBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripBox}>
            <Image source={blueBus} style={styles.tripBusImage} />
            <View style={styles.tripContent}>
              <View style={styles.leftColumn}>
                <Text style={styles.introText}>David's Trip</Text>
                <Text style={styles.schoolText}>Headstart School</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>18 mins. ago</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <Footer dashboard={true} />
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
    paddingHorizontal: '5%',
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
  tripBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    margin: 5,
    height: 70,
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
  tripBusImage: {
    width: 45,
    height: 40,
    marginRight: 10,
  },
  tripContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  introText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    color: 'gray',
  },
  time: {
    marginLeft: '20%',
  },
  timeText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    color: 'gray',
  },
  schoolText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
})
