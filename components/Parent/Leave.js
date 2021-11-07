import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import { Link } from 'react-router-native'

import { CheckBox } from 'react-native-elements'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Leave() {
  const [toggleMorningCheckBox, setToggleMorningCheckBox] = useState(false)
  const [toggleEveningCheckBox, setToggleEveningCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <Header back={true} backURL={'/parent-dashboard'} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Leave Application</Text>

        <Text style={styles.mainText}>
          No ride for
          <Text style={{ fontFamily: 'Nunito_700Bold' }}>
            {' '}
            12th October, 2021
          </Text>
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
        <TextInput style={styles.comments} />
        <Link
          style={styles.button}
          component={TouchableOpacity}
          to='/parent-dashboard'
        >
          <Text style={styles.buttonText}>Apply</Text>
        </Link>
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
    height: 250,
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
