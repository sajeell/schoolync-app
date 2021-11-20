import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import onGoingTripPic from '../../assets/ongoing.png'
import pickingStudentsPic from '../../assets/picking-students.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function OnGoingTrip() {
  const [tripData, setTripData] = useState({})
  const [childName, setChildName] = useState('')

  const getData = async () => {
    try {
      const studentName = await AsyncStorage.getItem('studentName')
      setChildName(studentName)

      const currentLocation = await fetch(
        `https://schoolync-backend.herokuapp.com/trip/current_location/${1}`
      )

      const data = await currentLocation.json()

      setTripData(data.data[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (tripData.current_status == 'on_my_way') {
    return (
      <View style={styles.container}>
        <Header back={true} backURL={'/parent-dashboard'} />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{childName}'s Trip</Text>
          <View style={styles.ongoingBox}>
            <Image
              source={onGoingTripPic}
              style={{ width: '87%', height: '87%' }}
            ></Image>
          </View>
          <Link
            style={styles.button}
            component={TouchableOpacity}
            to='/track-trip'
          >
            <Text style={styles.buttonText}>Track</Text>
          </Link>
        </View>
        <Footer />
      </View>
    )
  } else if (tripData.current_status == 'picking_students') {
    return (
      <View style={styles.container}>
        <Header back={true} backURL={'/parent-dashboard'} />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{childName}'s Trip</Text>
          <View style={styles.ongoingBox}>
            <Image
              source={pickingStudentsPic}
              style={{ width: '87%', height: '87%' }}
            ></Image>
          </View>
          <Link
            style={styles.button}
            component={TouchableOpacity}
            to='/track-trip'
          >
            <Text style={styles.buttonText}>Track</Text>
          </Link>
        </View>
        <Footer />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Header back={true} backURL={'/parent-dashboard'} />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{childName}'s Trip</Text>
          <View style={styles.ongoingBox}>
            <Image
              source={pickingStudentsPic}
              style={{ width: '87%', height: '87%' }}
            ></Image>
          </View>
          <Link
            style={styles.button}
            component={TouchableOpacity}
            to='/track-trip'
          >
            <Text style={styles.buttonText}>Track</Text>
          </Link>
        </View>
        <Footer />
      </View>
    )
  }
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
