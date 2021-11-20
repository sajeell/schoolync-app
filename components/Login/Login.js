import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { Link, useHistory } from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNPickerSelect from 'react-native-picker-select'

import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState('I am a')

  let history = useHistory()
  const proceed = () => {
    if (selectedRole === 'parent') {
      parentLogin()
    } else if (selectedRole === 'driver') {
      driverLogin()
    } else {
      alert('Please choose your role first')
      return
    }
  }

  const parentLogin = async () => {
    try {
      if (email == '') {
        alert('Enter email')
        return
      }

      if (password == '') {
        alert('Enter password')
        return
      }

      if (!validateEmail(email)) {
        alert('Invalid Email')
        return
      }

      const body = { email, password }
      const response = await fetch(
        'https://schoolync-backend.herokuapp.com/parent/authentication/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      const data = await response.json()

      if (data.success == true) {
        await AsyncStorage.setItem('parentID', JSON.stringify(data.data[0].id))
        await AsyncStorage.setItem('parentName', data.data[0].name)
        await AsyncStorage.setItem('parentAddress', data.data[0].address)
        await AsyncStorage.setItem('parent_jwt_token', data.token)
        history.push('/parent-dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const driverLogin = async () => {
    try {
      if (email == '') {
        alert('Enter email')
        return
      }

      if (password == '') {
        alert('Enter password')
        return
      }

      if (!validateEmail(email)) {
        alert('Invalid Email')
        return
      }

      const body = { email, password }
      const response = await fetch(
        'http://192.168.0.101:5000/driver/authentication/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      const data = await response.json()

      if (data.success == true) {
        await AsyncStorage.clear()
        await AsyncStorage.setItem('driverID', JSON.stringify(data.data[0].id))
        await AsyncStorage.setItem('driver_jwt_token', data.token)
        history.push('/driver-dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome to</Text>
        </View>
        <View>
          <Text style={styles.companyText}>SchooLYNC</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Sign In</Text>
        </View>
        <View style={styles.inputFieldContainer}>
          <Image
            source={emailIcon}
            style={{
              marginLeft: 10,
              marginRight: 10,
              width: 22,
              height: 17,
              opacity: 0.5,
              resizeMode: 'stretch',
              alignItems: 'center',
            }}
          />
          <TextInput
            keyboardType='email-address'
            style={styles.inputField}
            placeholder='Email Address'
            value={email}
            onChangeText={(e) => {
              setEmail(e)
            }}
          ></TextInput>
        </View>
        <View style={styles.inputFieldContainer}>
          <Image
            source={lockIcon}
            style={{
              marginLeft: 10,
              marginRight: 10,
              width: 20,
              height: 23,
              opacity: 0.5,
              resizeMode: 'stretch',
              alignItems: 'center',
            }}
          />
          <TextInput
            style={styles.inputField}
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => {
              setPassword(e)
            }}
          ></TextInput>
        </View>
        <View
          style={
            Platform.OS === 'ios'
              ? styles.iosDropdownContainer
              : styles.dropdownContainer
          }
        >
          <RNPickerSelect
            value={selectedRole}
            placeholder={{ label: 'I am a', value: selectedRole, key: 1 }}
            onValueChange={async (value) => {
              setSelectedRole(await value)
            }}
            items={[
              { label: 'Driver', value: 'driver', key: 1 },
              { label: 'Parent', value: 'parent', key: 2 },
            ]}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={proceed}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Don't have an account? Click</Text>
          <Link component={TouchableOpacity} to='/select-type'>
            <Text style={styles.hereText}> here</Text>
          </Link>
        </View>
      </View>
    </View>
  )
}

const greenColor = '#00B966'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  backgroundImageContainer: {
    width: '100%',
    height: 450,
    backgroundColor: greenColor,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 120,
    position: 'absolute',
  },
  welcomeContainer: {
    marginTop: '25%',
    marginLeft: '10%',
  },
  welcomeText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2,
    fontFamily: 'Nunito_200ExtraLight',
  },
  companyText: {
    fontSize: 25,
    letterSpacing: 2,
    color: 'white',
    fontFamily: 'Nunito_400Regular',
  },
  formContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 320,
    maxWidth: '90%',
    paddingVertical: '12%',
    marginTop: '20%',
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
  heading: {
    textAlign: 'center',
    marginBottom: 20,
  },
  headingText: {
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
    fontSize: 20,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    borderRadius: 10,
    margin: 10,
    maxWidth: '90%',
    width: 270,
  },
  inputField: {
    flex: 1,
    fontFamily: 'Nunito_400Regular',
  },
  inputIcon: {
    marginLeft: 10,
    marginRight: 10,
    width: 25,
    height: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  iosDropdownContainer: {
    maxWidth: '90%',
    width: 280,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
    color: 'gray',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
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
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    fontFamily: 'Nunito_400Regular',
  },
  forgotPassword: {
    color: 'gray',
    fontSize: 13,
    marginVertical: 5,
    right: -80,
    fontFamily: 'Nunito_400Regular',
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
    zIndex: -1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  bottomTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    left: -30,
    marginTop: 5,
  },
  bottomText: {
    color: 'gray',
    fontSize: 13,
    fontFamily: 'Nunito_400Regular',
  },
  hereText: {
    color: 'gray',
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Nunito_400Regular',
  },
})
