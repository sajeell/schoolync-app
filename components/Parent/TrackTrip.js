import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  Linking,
} from 'react-native'
import { Link } from 'react-router-native'

import { Overlay } from 'react-native-elements'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import backArrow from '../../assets/map-back.png'
import blueMarker from '../../assets/blue-marker.png'
import redMarker from '../../assets/red-marker.png'
import busMap from '../../assets/map-bus.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import studentTrip from '../../assets/student-trip.png'

export default function TrackTrip() {
  const [visible, setVisible] = useState(false)
  const [driverName, setDriverName] = useState('')
  const [driverPhone, setDriverPhone] = useState('')
  const [studentName, setStudentName] = useState('')
  const [address, setAddress] = useState('')
  const [tripCreatedTime, setTripCreatedTime] = useState('')
  const [tripUpdatedTime, setTripUpdatedTime] = useState('')

  const [tripData, setTripData] = useState({})
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  })

  const getTripData = async () => {
    try {
      getParentData()
      const currentLocation = await fetch(
        `https://schoolync-backend.herokuapp.com/trip/current_location/${1}`
      )

      const data = await currentLocation.json()

      setLocation(data.data[0].current_location)

      const created = data.data[0].createdAt
      const updated = data.data[0].updatedAt

      const dateCreated = new Date(created)
      const dateUpdated = new Date(updated)

      setTripCreatedTime(
        `${dateCreated.getHours()} : ${dateCreated.getMinutes()}`
      )

      setTripUpdatedTime(
        `${dateUpdated.getHours()} : ${dateUpdated.getMinutes()}`
      )

      setDriverName(data.data[0].Driver.name)
      setDriverPhone(data.data[0].Driver.phone)
    } catch (error) {
      console.error(error)
    }
  }

  const getParentData = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')
      const currentLocation = await fetch(
        `https://schoolync-backend.herokuapp.com/admin/child/${parentID}`
      )

      const data = await currentLocation.json()

      setAddress(data.data[0].Parent.address)
      setStudentName(data.data[0].name)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCall = (phone) => {
    try {
      let phoneNumber = phone
      if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`
      } else {
        phoneNumber = `tel:${phone}`
      }
      Linking.openURL(phoneNumber)
    } catch (error) {
      console.error(error)
    }
  }

  const handleText = (phone) => {
    try {
      let phoneNumber = phone
      if (Platform.OS !== 'android') {
        phoneNumber = `sms:${phone}`
      } else {
        phoneNumber = `sms:${phone}`
      }
      Linking.openURL(phoneNumber)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTripData()
  }, [])

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <Header
        back={true}
        backURL={'/driver-mark-students'}
        pageName='Student Direction'
      />
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        showsUserLocation
        onUserLocationChange={getTripData}
      >
        {/* <MapViewDirections
          origin={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          destination={{ latitude: studentLat, longitude: studentLong }}
          apikey={'AIzaSyAEjvtIWPMH5ru26LtCo0ai6lH6aZ9QGuc'} // insert your API Key here
          strokeWidth={6}
          strokeColor='rgba(0, 185, 102, 255)'
          lineDashPattern={[0]}
        /> */}
        <Marker
          key={1}
          title={'Trip Location'}
          description={`Trip Location`}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          image={busMap}
        />
      </MapView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          zIndex: 1000,
          marginTop: -150,
        }}
      >
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 11,
            paddingTop: 9,
            width: 145,
            height: 142,
            borderRadius: 10,
            backgroundColor: '#00978E',
          }}
        >
          <Image
            style={{
              width: 124,
              height: 124,
            }}
            source={studentTrip}
          />
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 17,
            paddingTop: 23,
            marginStart: -6,
            paddingRight: 10,
            marginTop: 30,
            width: '65%',
            height: 94,
            backgroundColor: '#00978E',
          }}
        >
          <Text
            style={{
              fontFamily: 'Nunito_400Regular',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: 2,
              color: 'rgba(255, 255, 255, 255)',
            }}
          >
            {' '}
            {studentName}{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito_400Regular',
              fontSize: 10,
              letterSpacing: 2,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 255)',
              marginTop: 3,
            }}
          >
            {' '}
            {address}{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito_700Bold',
              fontSize: 11,
              letterSpacing: 2,
              textAlign: 'right',
              alignSelf: 'flex-end',
              color: 'rgba(255, 255, 255, 255)',
              marginTop: 9,
            }}
          >
            ETA.45 Minutes
          </Text>
        </View>
      </View>
      <Link
        component={TouchableOpacity}
        style={styles.button}
        onPress={toggleOverlay}
      >
        <Text style={styles.buttonText}>CONTACT DRIVER</Text>
      </Link>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.overlay}>
          <Text style={styles.overlayHeading}>Driver Information</Text>
          <Text style={styles.overlayText}>Driver Name: {driverName}</Text>
          <Text style={styles.overlayText}>{driverPhone}</Text>
          <TouchableOpacity
            style={styles.callButton}
            onPress={() => {
              handleCall(driverPhone)
            }}
          >
            <Text style={styles.callButtonText}>CALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.messageButton}
            onPress={() => {
              handleText(driverPhone)
            }}
          >
            <Text style={styles.messageButtonText}>MESSAGE</Text>
          </TouchableOpacity>
        </View>
      </Overlay>

      <Footer />
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
  backArrow: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 20,
    zIndex: 100,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '75%',
  },
  contentContainer: {
    height: '50%',
    marginTop: '90%',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
  },
  line: {
    width: '50%',
    marginTop: 20,
    alignSelf: 'center',
    borderBottomColor: '#00B966',
    borderBottomWidth: 3,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
    marginTop: '7%',
  },
  sourceStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
    justifyContent: 'space-between',
    height: '30%',
  },
  sourceBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#0D77BE',
    width: 30,
    height: 50,
    borderRadius: 17,
  },
  sourceInnerBox: {
    alignSelf: 'center',
    width: '40%',
    height: '25%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: '30%',
  },
  timeText: {
    fontFamily: 'Nunito_700Bold',
  },
  locationText: {
    fontFamily: 'Nunito_400Regular',
  },
  statusLine: {
    alignSelf: 'flex-start',
    marginVertical: 3,
    borderLeftWidth: 4,
    marginLeft: '4.5%',
    borderRadius: 10,
    height: 5,
  },
  destinationStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '30%',
  },
  destinationBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E7130F',
    width: 30,
    height: 50,
    borderRadius: 17,
  },
  destinationInnerBox: {
    alignSelf: 'center',
    width: '40%',
    height: '25%',
    borderRadius: 10,
    backgroundColor: '#E7130F',
    marginBottom: '30%',
  },
  etaContainer: {
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    width: '100%',
    borderRadius: 15,
    height: '20%',
    marginTop: -75,
    paddingVertical: '5%',
    paddingHorizontal: '8%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  etaHeading: {
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  etaContent: {
    fontFamily: 'Nunito_400Regular',
  },
  contactDriverText: {
    fontFamily: 'Nunito_400Regular',
  },
  hereText: {
    fontFamily: 'Nunito_700Bold',
  },
  overlay: {
    margin: 10,
    alignItems: 'center',
    width: 250,
    height: 300,
  },
  overlayHeading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
  },
  overlayText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 17,
    marginTop: 15,
  },
  callButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: '#2B88C6',
    padding: '4%',
    borderRadius: 100,
    bottom: -50,
  },
  callButtonText: {
    color: 'white',
    fontSize: 16,
  },
  messageButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: '10%',
    alignItems: 'center',
    borderColor: '#2B88C6',
    borderWidth: 1,
    padding: '4%',
    borderRadius: 100,
    bottom: -50,
  },
  messageButtonText: {
    color: '#2B88C6',
    fontSize: 16,
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    height: 55,
    backgroundColor: '#00978E',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',
    color: 'white',
    fontSize: 15,
  },
})
