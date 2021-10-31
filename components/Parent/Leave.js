import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'

import { CheckBox } from 'react-native-elements'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Leave() {
  const [toggleMorningCheckBox, setToggleMorningCheckBox] = useState(false)
  const [toggleEveningCheckBox, setToggleEveningCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <Header back={true} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Leave Application</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.mainText}>No ride for</Text>
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
                fontFamily: 'Nunito_400Regular',
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
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Track</Text>
        </TouchableOpacity>
      </View>
      <Footer dashboard={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    maxHeight: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    paddingHorizontal: '5%',
    top: 0,
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
    // top: '-100%',
  },
  ongoingBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    margin: 5,
    height: '70%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 30,
    borderRadius: 10,
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
