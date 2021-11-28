import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useHistory } from 'react-router'
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
import idCardIcon from '../../assets/id-card.png'

const { width, height } = Dimensions.get('window')

export default function ParentSignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [childID, setChildID] = useState(0)
  let history = useHistory()

  const signUp = async () => {
    try {
      const body = {
        email: email,
        password: password,
        name: fullName,
        childID: childID,
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

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
      <TouchableOpacity style={styles.backContainer}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>let's add a</Text>
        </View>
        <View>
          <Text style={styles.companyText}>parent</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image source={personIcon} style={styles.inputIcon} />
          <TextInput
            placeholder='Full Name'
            style={styles.input}
            value={fullName}
            onChangeText={(value) => setFullName(value)}
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
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={lockIcon} style={{ width: 19, height: 25 }} />
          <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={idCardIcon} style={{ width: 23, height: 23 }} />
          <TextInput
            placeholder='Child Unique ID'
            style={styles.input}
            value={childID}
            onChangeText={(value) => setChildID(value)}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={signUp}>
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
