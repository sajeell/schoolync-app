import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/lock.png'

export default function Login() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ])

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
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{ borderWidth: 0.5, fontFamily: 'Nunito_400Regular' }}
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
    fontFamily: 'Nunito_400Regular',
    elevation: 5,
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
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  dropdownContainer: {
    maxWidth: '90%',
    width: 270,
    marginTop: 15,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 10,
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
