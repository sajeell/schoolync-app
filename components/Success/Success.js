import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import successIllustration from '../../assets/success.png'

export default function Success() {
  return (
    <View style={styles.container}>
      <Image source={successIllustration} style={{ width: 252, height: 252 }} />
      <View style={styles.contentContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={styles.heading}>Hurrrhurr </Text>
          <Text style={styles.headingPart}>aaah!!</Text>
        </View>
        <Text style={styles.subHeading}>
          You have successfully joined the best school transportation service in
          town
        </Text>
        <Text style={styles.description}>
          We can't wait more to have your contribution in our organization.
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LET'S GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
  contentContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 41,
  },
  headingPart: {
    fontSize: 29,
    fontFamily: 'Nunito_700Bold',
    opacity: 0.7,
  },
  subHeading: {
    maxWidth: 344,
    textAlign: 'center',
    fontSize: 16,
    color: '#565656',
    fontFamily: 'Nunito_700Bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
    color: '#565656',
    maxWidth: 226,
  },
  buttonContainer: {
    margin: 10,
    justifyContent: 'center',
    maxWidth: '90%',
    width: 330,
    height: 50,
    backgroundColor: '#00978E',
    borderRadius: 14,
    marginTop: 40,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Nunito_700Bold',
  },
})
