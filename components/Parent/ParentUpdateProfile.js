import React, { useEffect, useState } from 'react'

import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import Header from '../Header/Header'

import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'
import personIcon from '../../assets/person.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ParentUpdateProfile() {
  const [data, setData] = useState()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const getData = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')
      const user = await fetch(
        `https://schoolync-backend.herokuapp.com/admin/parent/${parentID}`
      )

      const temp = await user.json()

      setData(await temp.data[0])

      setEmail(await data.email)
      setName(await data.name)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Header
        pageName={'Edit Profile'}
        back={true}
        backURL={'/parent-profile'}
      />
      <View style={styles.contentContainer}>
        <View style={styles.inputFieldContainer}>
          <Image
            source={personIcon}
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
            style={styles.inputField}
            placeholder=''
            value={name}
            onChangeText={(e) => {
              setName(e)
            }}
          ></TextInput>
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
            editable={false}
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
            secureTextEntry
            style={styles.inputField}
            placeholder='New Password'
            value={password}
            onChangeText={(e) => {
              setPassword(e)
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
            secureTextEntry
            style={styles.inputField}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChangeText={(e) => {
              setConfirmPassword(e)
            }}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('Success!')
          }}
        >
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    marginTop: 50,
  },

  inputFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#000',
    height: 50,
    borderRadius: 10,
    margin: 10,
    width: '90%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  button: {
    alignSelf: 'center',
    width: '90%',
    height: 49,
    borderRadius: 8,
    backgroundColor: '#00978E',
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
})
