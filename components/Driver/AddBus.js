import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native'

import licenseIcon from '../../assets/license.png'
import industryIcon from '../../assets/industry.png'
import calendarIcon from '../../assets/calendar-driver.png'
import driverIcon from '../../assets/registered-driver.png'
import seatIcon from '../../assets/seat.png'

import RNPickerSelect from 'react-native-picker-select'
import { Link, useHistory } from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window')

export default function AddBus() {
  let history = useHistory()
  const [selectedCity, setSelectedCity] = useState('')
  const [licenseNumber, setLicenseNumber] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [modelName, setModelName] = useState('')
  const [chassisNum, setChassisNum] = useState('')
  const [year, setYear] = useState()
  const [capacity, setCapacity] = useState()

  const signUp = async () => {
    try {
      const passedBody = await AsyncStorage.getItem('driverSignUpBody')
      const processedBody = await JSON.parse(passedBody)

      const body = {
        full_name: processedBody.name,
        email: processedBody.email,
        password: processedBody.password,
        city: processedBody.city,
        age: processedBody.age,
        registered: true,
        manufacturer: manufacturer,
        reg_num: licenseNumber,
        year_of_manufacture: year,
        capacity: capacity,
        color: 'yellow',
        model_name: modelName,
        chassis_num: chassisNum,
      }
      const parent = await fetch(
        'http://192.168.0.101:5000/driver/authentication/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      const data = await parent.json()

      if (parent.status == 200) {
        await AsyncStorage.setItem('driverID', JSON.stringify(data.data.id))
        await AsyncStorage.setItem('driver_jwt_token', data.token)

        alert('Success!')
        history.push('/driver-dashboard')
      } else {
        alert(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
      <Link
        to='/driver-signup'
        component={TouchableOpacity}
        style={styles.backContainer}
      >
        <Text style={styles.backText}>← Back</Text>
      </Link>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>let's add your</Text>
        </View>
        <View>
          <Text style={styles.companyText}>bus</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image source={licenseIcon} style={styles.inputIcon} />
          <TextInput
            placeholder='License Number'
            style={styles.input}
            value={licenseNumber}
            onChangeText={(e) => setLicenseNumber(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={industryIcon}
            style={{ width: 24, height: 17, opacity: 0.5 }}
          />
          <TextInput
            placeholder='Manufacturer'
            style={styles.input}
            value={manufacturer}
            onChangeText={(e) => setManufacturer(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={calendarIcon} style={{ width: 21, height: 23 }} />
          <TextInput
            placeholder='Manufacturing Year'
            style={styles.input}
            keyboardType={'number-pad'}
            value={year}
            onChangeText={(e) => setYear(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={calendarIcon} style={{ width: 21, height: 23 }} />
          <TextInput
            placeholder='Chassis Number'
            style={styles.input}
            keyboardType={'number-pad'}
            value={chassisNum}
            onChangeText={(e) => setChassisNum(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={calendarIcon} style={{ width: 21, height: 23 }} />
          <TextInput
            placeholder='Model Name'
            style={styles.input}
            value={modelName}
            onChangeText={(e) => setModelName(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={driverIcon} style={{ width: 18, height: 23 }} />
          <View
            style={
              Platform.OS === 'ios'
                ? styles.iosDropdownContainer
                : styles.dropdownContainer
            }
          >
            <RNPickerSelect
              value={selectedCity}
              placeholder={{
                label: 'Registered Driver?',
                value: selectedCity,
                key: 1,
              }}
              onValueChange={async (value) => {
                setSelectedCity(await value)
              }}
              items={[
                { label: 'Yes', value: 'yes', key: 1 },
                { label: 'No', value: 'no', key: 2 },
                { label: 'Pending', value: 'pending', key: 3 },
              ]}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Image source={seatIcon} style={{ width: 22, height: 23 }} />
          <TextInput
            keyboardType={'number-pad'}
            placeholder='Capacity'
            style={styles.input}
            value={capacity}
            onChangeText={(e) => setCapacity(e)}
          />
        </View>
        <View style={styles.inputContainer}></View>
        <TouchableOpacity onPress={signUp} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style='light' />
    </View>
  )
}

const greenColor = '#00B966'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: height,
    maxWidth: width,
  },
  backgroundImageContainer: {
    width: '100%',
    height: 450,
    backgroundColor: greenColor,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 120,
    position: 'absolute',
  },
  backContainer: {
    marginTop: '15%',
    marginLeft: '10%',
  },
  backText: {
    fontFamily: 'Nunito_400Regular',
    color: 'white',
  },
  welcomeContainer: {
    marginTop: '5%',
    marginLeft: '10%',
  },
  welcomeText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2,
    fontFamily: 'Nunito_200ExtraLight',
    fontWeight: '100',
  },
  companyText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 25,
    letterSpacing: 2,
    color: 'white',
  },
  formContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 320,
    maxWidth: '90%',
    paddingVertical: '12%',
    marginTop: '8%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontFamily: 'Nunito_400Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '90%',
    width: 270,
    marginBottom: 25,
  },
  inputIcon: {
    width: 24,
    height: 22,
  },
  iosDropdownContainer: {
    maxWidth: '90%',
    width: 260,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
    color: 'gray',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginLeft: 10,
    paddingLeft: 8,
  },
  dropdownContainer: {
    maxWidth: '90%',
    width: 280,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
    color: 'gray',
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginLeft: 15,
  },
  input: {
    maxWidth: '90%',
    width: 230,
    paddingBottom: 20,
    fontFamily: 'Nunito_400Regular',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  buttonContainer: {
    margin: 10,
    justifyContent: 'center',
    maxWidth: '90%',
    width: 270,
    height: 45,
    backgroundColor: greenColor,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
})
