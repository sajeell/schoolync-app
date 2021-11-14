import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Link, useHistory } from 'react-router-native'
import { Overlay } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select'

import Header from './Header'

import alertBG from '../../assets/alert-bg.jpg'

export default function MarkStudents() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const [traffic, setTraffic] = useState(false)
  const [selectedRole, setSelectedRole] = useState('I am a')

  const history = useHistory()
  const getData = () => {
    try {
      var requestOptions = {
        method: 'GET',
      }

      fetch(
        'https://schoolync-backend.herokuapp.com/admin/child',
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          setData(JSON.parse(result).data)
          const temp = JSON.parse(result).data
        })
        .catch((error) => console.error('error', error))
    } catch (err) {
      console.error(err.message)
    }
  }

  const moveToDirectionsMap = async (address, name) => {
    try {
      if (address) {
        await AsyncStorage.setItem('address', address)
        await AsyncStorage.setItem('name', name)
      } else {
        await AsyncStorage.setItem('address', '244 Terry Lane')
      }
    } catch (e) {
      console.error(e)
    }

    history.push('/student-direction')
  }

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          alignSelf: 'center',
          height: '70%',
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
            source={alertBG}
            style={{
              height: 200,
              width: 280,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />

          <Text
            style={{
              fontFamily: 'Nunito_700Bold',
              fontSize: 17,
              textAlign: 'center',
              marginTop: 15,
            }}
          >
            Send Alerts
          </Text>

          <View
            style={
              Platform.OS === 'ios'
                ? styles.iosDropdownContainer
                : styles.dropdownContainer
            }
          >
            <RNPickerSelect
              value={selectedRole}
              placeholder={{
                label: 'Select Message',
                value: selectedRole,
                key: 1,
              }}
              onValueChange={async (value) => {
                setSelectedRole(await value)
              }}
              items={[
                { label: 'Bus Damage', value: 'bus_damage', key: 2 },
                { label: 'Traffic Jam', value: 'traffic_jam', key: 3 },
              ]}
            />
          </View>
          <View style={{ maxWidth: '90%', alignSelf: 'center' }}>
            <Text
              style={{
                fontFamily: 'Nunito_400Regular',
                fontSize: 14,
                textAlign: 'left',
                marginTop: 5,
              }}
            >
              Dear Parent,
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito_400Regular',
                fontSize: 14,
                textAlign: 'left',
                marginTop: 3,
              }}
            >
              The school bus will be late due to traffic
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito_400Regular',
                fontSize: 14,
                textAlign: 'left',
                marginTop: 20,
              }}
            >
              Regards,
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito_400Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Westminster School
            </Text>
          </View>
          <Link component={TouchableOpacity} style={styles.alertButton}>
            <Text style={styles.alertButtonText}>SEND ALERT</Text>
          </Link>
        </View>
      </Overlay>
      <Text style={styles.heading}>Mark Students</Text>
      <TouchableOpacity onPress={toggleOverlay}>
        <Text style={styles.alertText}>Generate Alert</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ScrollView>
          {data.map((item) => (
            <View style={styles.studentBoxContainer} key={item.id}>
              <View style={styles.redBox}></View>
              <View style={styles.line}></View>

              <TouchableOpacity
                style={styles.studentBox}
                onPress={(e) => {
                  e.preventDefault()
                  moveToDirectionsMap(item.Parent.address, item.name)
                }}
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.address}>
                  {item.Parent ? item.Parent.address : '244 Terry Lane'}
                </Text>
              </TouchableOpacity>

              <View style={styles.line}></View>
              <View style={styles.greenBox}></View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <Link component={TouchableOpacity} style={styles.schoolButton}>
        <Text style={styles.schoolButtonText}>TO SCHOOL</Text>
      </Link>
      <Link component={TouchableOpacity} style={styles.button}>
        <Text style={styles.buttonText}>FINISH RIDE</Text>
      </Link>
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
