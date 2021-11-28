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
} from 'react-native'

import personIcon from '../../assets/person.png'
import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'
import cityIcon from '../../assets/city.png'
import ageIcon from '../../assets/age.png'

import RNPickerSelect from 'react-native-picker-select'
import { Link, useHistory } from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window')

export default function DriverSignUp() {
  let history = useHistory()
  const [selectedCity, setSelectedCity] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState()
  const [phone, setPhone] = useState()

  const signUp = async () => {
    try {
      if (
        email == '' ||
        password == '' ||
        name == '' ||
        age == '' ||
        selectedCity == '' ||
        phone == ''
      ) {
        alert('Missing Values')
        return
      }
      const body = {
        email: email,
        password: password,
        name: name,
        age: age,
        city: selectedCity,
        phone: phone,
      }

      await AsyncStorage.setItem('driverSignUpBody', JSON.stringify(body))

      history.push('/add-bus')

      // const parent = await fetch(
      //   'https://schoolync-backend.herokuapp.com/driver/authentication/register',
      //   {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(body),
      //   }
      // )

      // const data = await parent.json()

      // console.log(data)

      // await AsyncStorage.setItem('driverID', JSON.stringify(data.data.id))
      // await AsyncStorage.setItem('driver_jwt_token', data.token)

      // history.push('/add-bus')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
      <Link
        to='/select-type'
        component={TouchableOpacity}
        style={styles.backContainer}
      >
        <Text style={styles.backText}>← Back</Text>
      </Link>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>let's add a</Text>
        </View>
        <View>
          <Text style={styles.companyText}>driver</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image source={personIcon} style={styles.inputIcon} />
          <TextInput
            placeholder='Full Name'
            style={styles.input}
            value={name}
            onChangeText={(e) => setName(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={emailIcon}
            style={{ width: 24, height: 17, opacity: 0.5 }}
          />
          <TextInput
            placeholder='Email Address'
            style={styles.input}
            keyboardType='email-address'
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={lockIcon} style={{ width: 18, height: 23 }} />
          <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={cityIcon} style={{ width: 18, height: 23 }} />
          <View
            style={
              Platform.OS === 'ios'
                ? styles.iosDropdownContainer
                : styles.dropdownContainer
            }
          >
            <RNPickerSelect
              value={selectedCity}
              placeholder={{ label: 'City', value: selectedCity, key: 1 }}
              onValueChange={async (value) => {
                setSelectedCity(await value)
              }}
              items={[
                {
                  label: 'Alabama',
                  value: 'AL',
                  key: 1,
                },
                {
                  label: 'Alaska',
                  value: 'AK',
                  key: 2,
                },
                {
                  label: 'American Samoa',
                  value: 'AS',
                  key: 3,
                },
                {
                  label: 'Arizona',
                  value: 'AZ',
                  key: 4,
                },
                {
                  label: 'Arkansas',
                  value: 'AR',
                  key: 5,
                },
                {
                  label: 'California',
                  value: 'CA',
                  key: 6,
                },
                {
                  label: 'Colorado',
                  value: 'CO',
                  key: 7,
                },
                {
                  label: 'Connecticut',
                  value: 'CT',
                  key: 8,
                },
                {
                  label: 'Delaware',
                  value: 'DE',
                  key: 9,
                },
                {
                  label: 'District Of Columbia',
                  value: 'DC',
                  key: 10,
                },
                {
                  label: 'Federated States Of Micronesia',
                  value: 'FM',
                  key: 11,
                },
                {
                  label: 'Florida',
                  value: 'FL',
                  key: 12,
                },
                {
                  label: 'Georgia',
                  value: 'GA',
                  key: 13,
                },
                {
                  label: 'Guam',
                  value: 'GU',
                  key: 14,
                },
                {
                  label: 'Hawaii',
                  value: 'HI',
                  key: 15,
                },
                {
                  label: 'Idaho',
                  value: 'ID',
                  key: 16,
                },
                {
                  label: 'Illinois',
                  value: 'IL',
                  key: 17,
                },
                {
                  label: 'Indiana',
                  value: 'IN',
                  key: 18,
                },
                {
                  label: 'Iowa',
                  value: 'IA',
                  key: 19,
                },
                {
                  label: 'Kansas',
                  value: 'KS',
                  key: 20,
                },
                {
                  label: 'Kentucky',
                  value: 'KY',
                  key: 21,
                },
                {
                  label: 'Louisiana',
                  value: 'LA',
                  key: 22,
                },
                {
                  label: 'Maine',
                  value: 'ME',
                  key: 23,
                },
                {
                  label: 'Marshall Islands',
                  value: 'MH',
                  key: 24,
                },
                {
                  label: 'Maryland',
                  value: 'MD',
                  key: 25,
                },
                {
                  label: 'Massachusetts',
                  value: 'MA',
                  key: 26,
                },
                {
                  label: 'Michigan',
                  value: 'MI',
                  key: 27,
                },
                {
                  label: 'Minnesota',
                  value: 'MN',
                  key: 28,
                },
                {
                  label: 'Mississippi',
                  value: 'MS',
                  key: 29,
                },
                {
                  label: 'Missouri',
                  value: 'MO',
                  key: 30,
                },
                {
                  label: 'Montana',
                  value: 'MT',
                  key: 31,
                },
                {
                  label: 'Nebraska',
                  value: 'NE',
                  key: 32,
                },
                {
                  label: 'Nevada',
                  value: 'NV',
                  key: 33,
                },
                {
                  label: 'New Hampshire',
                  value: 'NH',
                  key: 34,
                },
                {
                  label: 'New Jersey',
                  value: 'NJ',
                  key: 35,
                },
                {
                  label: 'New Mexico',
                  value: 'NM',
                  key: 36,
                },
                {
                  label: 'New York',
                  value: 'NY',
                  key: 37,
                },
                {
                  label: 'North Carolina',
                  value: 'NC',
                  key: 38,
                },
                {
                  label: 'North Dakota',
                  value: 'ND',
                  key: 39,
                },
                {
                  label: 'Northern Mariana Islands',
                  value: 'MP',
                  key: 40,
                },
                {
                  label: 'Ohio',
                  value: 'OH',
                  key: 41,
                },
                {
                  label: 'Oklahoma',
                  value: 'OK',
                  key: 42,
                },
                {
                  label: 'Oregon',
                  value: 'OR',
                  key: 43,
                },
                {
                  label: 'Palau',
                  value: 'PW',
                  key: 44,
                },
                {
                  label: 'Pennsylvania',
                  value: 'PA',
                  key: 45,
                },
                {
                  label: 'Puerto Rico',
                  value: 'PR',
                  key: 46,
                },
                {
                  label: 'Rhode Island',
                  value: 'RI',
                  key: 47,
                },
                {
                  label: 'South Carolina',
                  value: 'SC',
                  key: 48,
                },
                {
                  label: 'South Dakota',
                  value: 'SD',
                  key: 49,
                },
                {
                  label: 'Tennessee',
                  value: 'TN',
                  key: 50,
                },
                {
                  label: 'Texas',
                  value: 'TX',
                  key: 51,
                },
                {
                  label: 'Utah',
                  value: 'UT',
                  key: 52,
                },
                {
                  label: 'Vermont',
                  value: 'VT',
                  key: 53,
                },
                {
                  label: 'Virgin Islands',
                  value: 'VI',
                  key: 54,
                },
                {
                  label: 'Virginia',
                  value: 'VA',
                  key: 55,
                },
                {
                  label: 'Washington',
                  value: 'WA',
                  key: 56,
                },
                {
                  label: 'West Virginia',
                  value: 'WV',
                  key: 57,
                },
                {
                  label: 'Wisconsin',
                  value: 'WI',
                  key: 58,
                },
                {
                  label: 'Wyoming',
                  value: 'WY',
                  key: 59,
                },
              ]}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Image source={ageIcon} style={{ width: 22, height: 23 }} />
          <TextInput
            keyboardType={'number-pad'}
            placeholder='Age'
            style={styles.input}
            value={age}
            onChangeText={(e) => setAge(e)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: 300,
            marginLeft: 30,
            marginBottom: 25,
          }}
        >
          <TextInput
            keyboardType={'number-pad'}
            placeholder='Phone Number'
            style={{
              maxWidth: '90%',
              width: 300,
              alignSelf: 'center',
              paddingBottom: 20,
              fontFamily: 'Nunito_400Regular',
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}
            value={phone}
            onChangeText={(e) => setPhone(e)}
          />
        </View>
        <View style={styles.inputContainer}></View>
        <TouchableOpacity onPress={signUp} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
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
