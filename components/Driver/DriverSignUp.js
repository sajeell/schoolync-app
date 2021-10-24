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
} from 'react-native'

import personIcon from '../../assets/person.png'
import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'
import cityIcon from '../../assets/city.png'
import ageIcon from '../../assets/age.png'

import DropDownPicker from 'react-native-dropdown-picker'

const { width, height } = Dimensions.get('window')

export default function DriverSignUp() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Chicago', value: 'apple' },
    { label: 'Houston', value: 'banana' },
  ])

  const [genderOpen, setGenderOpen] = useState(false)
  const [genderValue, setGenderValue] = useState(null)
  const [genderItems, setGenderItems] = useState([
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' },
  ])

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
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
            underlineColorAndroid='gray'
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={emailIcon} style={{ width: 25, height: 18 }} />
          <TextInput
            placeholder='Email Address'
            underlineColorAndroid='gray'
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={lockIcon} style={{ width: 18, height: 23 }} />
          <TextInput
            placeholder='Password'
            underlineColorAndroid='gray'
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={cityIcon} style={{ width: 18, height: 23 }} />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            placeholder='City'
            setItems={setItems}
            style={{
              borderWidth: 0,
              borderBottomWidth: 1,
              maxWidth: '90%',
              marginBottom: 10,
              marginTop: -10,
              width: 230,
              alignSelf: 'center',
              borderBottomColor: 'gray',
              fontFamily: 'Nunito_400Regular',
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={ageIcon} style={{ width: 22, height: 23 }} />
          <TextInput
            keyboardType={'number-pad'}
            placeholder='Age'
            underlineColorAndroid='gray'
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <DropDownPicker
            open={genderOpen}
            value={genderValue}
            items={genderItems}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            placeholder='Gender'
            setItems={setGenderItems}
            style={{
              borderWidth: 0,
              borderBottomWidth: 1,
              width: '100%',
              marginBottom: 10,
              marginTop: -10,
              width: '100%',
              alignSelf: 'center',
              borderBottomColor: 'gray',
              fontFamily: 'Nunito_400Regular',
            }}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
  welcomeContainer: {
    marginTop: '25%',
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
  input: {
    maxWidth: '90%',
    width: 230,
    paddingBottom: 20,
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
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
})
