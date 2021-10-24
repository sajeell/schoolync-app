import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import emailIcon from '../assets/email.png'
import lockIcon from '../assets/lock.png'

export default function Login() {
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
          <Image source={emailIcon} style={styles.inputIcon} />
          <TextInput
            keyboardType='email-address'
            style={styles.inputField}
            placeholder='Email Address'
          ></TextInput>
        </View>
        <View style={styles.inputFieldContainer}>
          <Image source={lockIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.inputField}
            placeholder='Password'
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
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
  },
  companyText: {
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
    paddingTop: '12%',
    marginTop: '25%',
    overflow: 'hidden',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 45,
    borderRadius: 10,
    margin: 10,
    maxWidth: '90%',
    width: 270,
  },
  inputField: {
    flex: 1,
  },
  inputIcon: {
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  forgotPassword: {
    color: 'gray',
    fontSize: 13,
    marginVertical: 5,
  },
})
