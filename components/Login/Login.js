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

import RNPickerSelect from 'react-native-picker-select'

import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('I am a')
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
              console.log(await selectedRole)
            }}
            items={[
              { label: 'Driver', value: 'driver', key: 1 },
              { label: 'Parent', value: 'parent', key: 2 },
              { label: 'School', value: 'school', key: 3 },
            ]}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Don't have an account? Click</Text>
          <TouchableOpacity>
            <Text style={styles.hereText}> here</Text>
          </TouchableOpacity>
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
