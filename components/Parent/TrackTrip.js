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

import backArrow from '../../assets/map-back.png'
import blueMarker from '../../assets/blue-marker.png'
import redMarker from '../../assets/red-marker.png'
import busMap from '../../assets/map-bus.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function TrackTrip() {
  const [visible, setVisible] = useState(false)
  const [driverName, setDriverName] = useState('')
  const [driverPhone, setDriverPhone] = useState('')
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
        `http://192.168.0.101:5000/trip/current_location/${1}`
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
        `http://192.168.0.101:5000/admin/child/${parentID}`
      )

      const data = await currentLocation.json()

      setAddress(data.data[0].Parent.address)
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
      <Link
        style={styles.backArrow}
        component={TouchableOpacity}
        to='/ongoing-trip'
      >
        <Image source={backArrow} />
      </Link>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          key={1}
          title={'Bus'}
          description={'Updated 1s ago'}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          image={busMap}
        />
      </MapView>
      <View style={styles.contentContainer}>
        <View style={styles.line}></View>
        <Text style={styles.heading}>Your Child's Trip</Text>
        <View style={styles.statusContainer}>
          <View style={styles.sourceStatus}>
            <View style={styles.sourceBox}>
              <View style={styles.sourceInnerBox}></View>
            </View>
            <Text style={styles.timeText}>{tripCreatedTime}</Text>
            <Text style={styles.locationText}>
              Headstart School, 8th Street
            </Text>
          </View>
          <View style={{ flex: 0, paddingVertical: 0 }}>
            <View style={styles.statusLine}></View>
            <View style={styles.statusLine}></View>
            <View style={styles.statusLine}></View>
          </View>
          <View style={styles.destinationStatus}>
            <View style={styles.destinationBox}>
              <View style={styles.destinationInnerBox}></View>
            </View>
            <Text style={styles.timeText}>{tripUpdatedTime}</Text>
            <Text style={styles.locationText}>{address}</Text>
          </View>
        </View>
        <View style={styles.etaContainer}>
          <View style={styles.row}>
            <Text style={styles.etaHeading}>Driver Name:</Text>
            <Text style={styles.etaContent}>{driverName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.etaHeading}>ETA:</Text>
            <Text style={styles.etaContent}>15 Minutes</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={styles.contactDriverText}>
            Want to contact driver? Click{' '}
          </Text>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.hereText}>here</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    height: '50%',
    position: 'absolute',
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
})
