import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Overlay } from 'react-native-elements'
import * as Location from 'expo-location'
import MapViewDirections from 'react-native-maps-directions'
import RadioGroup from 'react-native-radio-buttons-group'
import Geocoder from 'react-native-geocoding'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from './Header'
import redMarker from '../../assets/red-marker.png'

import studentTrip from '../../assets/student-trip.png'

import { Link, useHistory } from 'react-router-native'

export default function StudentDirection() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [studentName, setStudentName] = useState('')
  const [studentLocation, setStudentLocation] = useState('')
  const [errorMsg, setErrorMsg] = useState({})
  const [visible, setVisible] = useState(false)
  const [studentLat, setStudentLat] = useState(0)
  const [studentLong, setStudentLong] = useState(0)
  const [attendanceStatus, setAttendanceStatus] = useState(false)

  let history = useHistory()

  const updateLocation = async (latitude, longitude) => {
    try {
      const body = {
        trip_id: 1,
        current_location: {
          latitude: latitude,
          longitude: longitude,
        },
      }
      const location = await fetch(
        'https://schoolync-backend.herokuapp.com/trip/update_location',
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  const markAttendance = async () => {
    try {
      // toggleOverlay()

      const driverID = await AsyncStorage.getItem('driverID')
      const studentID = await AsyncStorage.getItem('id')

      const body = {
        driver_id: driverID,
        student_id: studentID,
        status: attendanceStatus,
      }

      const attendance = await fetch(
        'https://schoolync-backend.herokuapp.com/attendance',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      const response = await attendance.json()

      if (response.success === true) {
        alert('Successfully Marked Attendance')
        history.push('/driver-mark-students')
        toggleOverlay()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    onRegionChange()
  }, [])

  const onRegionChange = async () => {
    Geocoder.init('AIzaSyAEjvtIWPMH5ru26LtCo0ai6lH6aZ9QGuc')
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }
    let locationUser = await Location.getCurrentPositionAsync({})
    setLatitude(locationUser.coords.latitude)
    setLongitude(locationUser.coords.longitude)

    updateLocation(locationUser.coords.latitude, locationUser.coords.longitude)

    try {
      const address = await AsyncStorage.getItem('address')
      const name = await AsyncStorage.getItem('name')
      if (address !== null) {
        setStudentLocation(address)
        setStudentName(name)

        console.log(address)

        Geocoder.from(address)
          .then((json) => {
            var location = json.results[0].geometry.location
            setStudentLat(location.lat)
            setStudentLong(location.lng)
          })
          .catch((error) => console.error(error))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const radioButtonsData = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Present',
      value: 'present',
    },
    {
      id: '2',
      label: 'Absent',
      value: 'absent',
    },
  ]

  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray)
    const presentData = radioButtonsArray[0].selected
    const absentData = radioButtonsArray[1].selected

    if (presentData) {
      setAttendanceStatus(true)
    } else {
      setAttendanceStatus(false)
    }
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
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        showsUserLocation
        onUserLocationChange={onRegionChange}
      >
        <MapViewDirections
          origin={{
            latitude: latitude,
            longitude: longitude,
          }}
          destination={{ latitude: studentLat, longitude: studentLong }}
          apikey={'AIzaSyAEjvtIWPMH5ru26LtCo0ai6lH6aZ9QGuc'} // insert your API Key here
          strokeWidth={6}
          strokeColor='rgba(0, 185, 102, 255)'
          lineDashPattern={[0]}
        />
        <Marker
          key={1}
          title={studentName}
          description={`${studentName} Location`}
          coordinate={{
            latitude: studentLat,
            longitude: studentLong,
          }}
          image={redMarker}
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
            {studentLocation}{' '}
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
        <Text style={styles.buttonText}>MARK ATTENDANCE</Text>
      </Link>

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          alignSelf: 'center',
          height: '35%',
          width: '70%',
          margin: 0,
          padding: 0,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: 20,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Nunito_700Bold',
              fontSize: 18,
            }}
          >
            Mark Attendance
          </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            containerStyle={{ marginTop: 20 }}
          />

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '100%',
              height: '25%',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 24.5,
              backgroundColor: 'rgba(43, 136, 198, 255)',
              marginTop: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={markAttendance}
          >
            <Text
              style={{
                fontFamily: 'Nunito_700Bold',
                color: 'white',
                fontSize: 12,
              }}
            >
              MARK
            </Text>
          </TouchableOpacity>
        </View>
      </Overlay>
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
    width: '100%',
    height: 55,
    backgroundColor: '#00978E',
    marginBottom: 20,
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
  schoolButton: {
    alignSelf: 'center',
    width: 279,
    height: 49,
    borderRadius: 24.5,
    borderColor: 'rgba(43, 136, 198, 255)',
    borderWidth: 1.5,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  schoolButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: 'rgba(43, 136, 198, 255)',
    fontSize: 15,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '83%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
})
