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

import personIcon from '../../assets/person.png'
import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'
import cityIcon from '../../assets/city-location-marker.png'
import busIllustration from '../../assets/father-hug.png'
import RNPickerSelect from 'react-native-picker-select'
import { Link, useHistory } from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window')

export default function ParentSignUp() {
  let history = useHistory()
  const [selectedCity, setSelectedCity] = useState('')

  const [isDriver, setIsDriver] = useState(true)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [childID, setChildID] = useState(0)

  const signUp = async () => {
    try {
      const body = {
        email: email,
        password: password,
        name: fullName,
        childID: childID,
        address: address,
        city: selectedCity,
      }

      const parent = await fetch(
        'https://schoolync-backend.herokuapp.com/parent/authentication/register',
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

      if (data.data == 'No child exists') {
        alert('No Child Exists')
        return
      } else if (data.data == 'Parent already exist!') {
        alert('Parent Already Exists')
        return
      } else {
        await AsyncStorage.setItem('parentID', JSON.stringify(data.data.id))
        await AsyncStorage.setItem('parent_jwt_token', data.token)
        history.push('/add-address')
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (isDriver === true) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Link
            component={TouchableOpacity}
            style={styles.back}
            to='/select-type'
          >
            <Text style={styles.backText}>{'<'}</Text>
          </Link>
          <View>
            <Image
              source={busIllustration}
              style={{ width: 260, height: 260 }}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.toggleWrapper}>
            <TouchableOpacity style={styles.toggleOn}>
              <Text style={styles.toggleOnText}>Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toggleOff}
              onPress={() => setIsDriver(false)}
            >
              <Text style={styles.toggleOffText}>Address</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.formHeading}>Parent Details</Text>
          <ScrollView></ScrollView>
          <View style={styles.inputContainer}>
            <Image source={personIcon} style={styles.inputIcon} />
            <TextInput
              placeholder='Full Name'
              style={styles.input}
              value={fullName}
              onChangeText={(e) => setFullName(e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={emailIcon}
              style={{ width: 24, height: 17, opacity: 0.5, marginRight: 20 }}
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
            <Image
              source={lockIcon}
              style={{ width: 18, height: 23, marginRight: 20 }}
            />
            <TextInput
              placeholder='Password'
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <TouchableOpacity
            onPress={() => setIsDriver(false)}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style='light' />
      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Link
            component={TouchableOpacity}
            style={styles.back}
            to='/select-type'
          >
            <Text style={styles.backText}>{'<'}</Text>
          </Link>
          <View>
            <Image
              source={busIllustration}
              style={{ width: 260, height: 260 }}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.toggleWrapper}>
            <TouchableOpacity
              style={styles.toggleOff}
              onPress={() => setIsDriver(true)}
            >
              <Text style={styles.toggleOffText}>Parent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleOnRight}>
              <Text style={styles.toggleOnText}>Address</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.formHeading}>Address Details</Text>
          <ScrollView></ScrollView>
          <View style={styles.inputContainer}>
            <Image source={cityIcon} style={styles.inputIcon} />
            <TextInput
              placeholder='Street Address'
              style={styles.input}
              value={address}
              onChangeText={(e) => setAddress(e)}
            />
          </View>
          <View style={styles.inputContainer}>
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
          <TouchableOpacity onPress={signUp} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Complete</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style='light' />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: width,
    backgroundColor: '#00978E',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  formContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    paddingBottom: '12%',
    paddingTop: '6%',
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
  toggleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    width: '50%',
    marginBottom: 15,
    borderColor: '#00988C',
  },
  toggleOn: {
    paddingLeft: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#00988C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
  },
  toggleOnNotification: {
    paddingLeft: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#565656',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
  },
  toggleOff: {
    paddingLeft: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
  toggleOnRight: {
    paddingLeft: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
    backgroundColor: '#00988C',
  },
  toggleOnText: {
    color: 'white',
    fontSize: 16,
  },
  toggleOffText: {
    color: '#00988C',
    fontSize: 16,
  },
  formHeading: {
    fontSize: 25,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '90%',
    width: 330,
    marginBottom: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 14,
    borderColor: 'white',
    height: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  inputIcon: {
    width: 24,
    height: 22,
    marginRight: 20,
  },
  iosDropdownContainer: {
    maxWidth: '90%',
    width: 260,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
    color: 'gray',
    paddingBottom: 20,
    marginLeft: 10,
    paddingLeft: 8,
  },
  dropdownContainer: {
    maxWidth: '90%',
    width: 280,
    fontFamily: 'Nunito_400Regular',
    color: 'gray',
    borderRadius: 14,
    borderColor: 'gray',
    marginLeft: 10,
  },
  input: {
    width: 260,
    fontFamily: 'Nunito_400Regular',
  },
  buttonContainer: {
    margin: 10,
    justifyContent: 'center',
    maxWidth: '90%',
    width: 330,
    height: 50,
    backgroundColor: '#00978E',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Nunito_700Bold',
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 37,
    height: 37,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: -30,
    right: 20,
  },
  backText: {
    fontSize: 25,
    top: -2,
  },
})
