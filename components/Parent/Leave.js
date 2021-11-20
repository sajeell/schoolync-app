import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useHistory } from 'react-router-native'

import { CheckBox } from 'react-native-elements'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Leave() {
  let history = useHistory()

  const [toggleMorningCheckBox, setToggleMorningCheckBox] = useState(false)
  const [toggleEveningCheckBox, setToggleEveningCheckBox] = useState(false)

  const [comments, setComments] = useState('')

  const [date, setDate] = useState('')

  const submitLeave = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')

      if (toggleEveningCheckBox === false && toggleMorningCheckBox === false) {
        alert('Select at least one time')
        return
      }

      const body = {
        parentID: parentID,
        morning: toggleEveningCheckBox,
        evening: toggleEveningCheckBox,
        comments: comments,
      }

      const leaveResponse = await fetch('http://192.168.0.101:5000/leave', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (leaveResponse.status == 200) {
        history.push('/parent-dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(async () => {
    const dateIntent = await AsyncStorage.getItem('date')
    setDate(dateIntent)
  }, [])

  return (
    <View style={styles.container}>
      <Header back={true} backURL={'/parent-dashboard'} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Leave Application</Text>

        <Text style={styles.mainText}>
          No ride for
          <Text style={{ fontFamily: 'Nunito_700Bold' }}> {date}</Text>
        </Text>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            checked={toggleMorningCheckBox}
            onPress={() => {
              setToggleMorningCheckBox(!toggleMorningCheckBox)
            }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
              margin: 0,
              marginLeft: 0,
            }}
          />
          <Text style={styles.checkBoxText}>Morning Shift</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            checked={toggleEveningCheckBox}
            onPress={() => {
              setToggleEveningCheckBox(!toggleEveningCheckBox)
            }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
              margin: 0,
              marginLeft: 0,
              fontFamily: 'Nunito_400Regular',
            }}
          />
          <Text style={styles.checkBoxText}>Afternoon Shift</Text>
        </View>
        <View style={{ marginTop: 20 }}></View>
        <Text style={styles.mainText}>Leave Comments</Text>
        <TextInput
          style={styles.comments}
          scrollEnabled
          multiline
          textAlign='left'
          onChangeText={(e) => {
            setComments(e)
          }}
        />
        <TouchableOpacity style={styles.button} onPress={submitLeave}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <Footer calendar={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    maxHeight: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    paddingHorizontal: '5%',
    top: -10,
    bottom: 0,
  },
  mainText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    marginBottom: 20,
  },
  checkBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkBoxText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  },
  heading: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontFamily: 'Nunito_200ExtraLight',
    letterSpacing: 3,
    marginBottom: '20%',
  },
  comments: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 150,
    paddingBottom: 100,
    paddingTop: 10,
    paddingLeft: 10,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '70%',
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: '#2B88C6',
    padding: '4%',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})
