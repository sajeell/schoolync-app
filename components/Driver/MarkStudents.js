import React from 'react'
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import Footer from '../Footer/Footer'
import Header from './Header'

import { Link } from 'react-router-native'

export default function MarkStudents() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Mark Students</Text>
      {/* <Link component={TouchableOpacity}>
        <Text style={styles.alertText}>Generate Alert</Text>
      </Link> */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ScrollView>
          <View style={styles.studentBoxContainer}>
            <View style={styles.redBox}></View>
            <View style={styles.line}></View>
            <Link
              component={TouchableOpacity}
              to='/student-direction'
              style={styles.studentBox}
            >
              <Text style={styles.name}>Maria Salem</Text>
              <Text style={styles.address}>Dubai Plaza, New York</Text>
            </Link>
            <View style={styles.line}></View>
            <View style={styles.greenBox}></View>
          </View>
        </ScrollView>
      </ScrollView>
      <Link component={TouchableOpacity} style={styles.button}>
        <Text style={styles.buttonText}>FINISH RIDE</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  upperBG: {
    width: '100%',
    zIndex: -1,
  },
  menuIconContainer: {
    height: 80,
    width: 30,
    zIndex: 100,
    marginLeft: -50,
    marginTop: 50,
  },
  menuIcon: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    marginBottom: 8,
  },
  heading: {
    fontSize: 22,
    paddingHorizontal: '5%',
    fontFamily: 'Nunito_700Bold',
  },
  alertText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    alignSelf: 'flex-end',
    paddingRight: '5%',
    letterSpacing: 1,
    color: 'red',
  },
  contentContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  studentBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redBox: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: 'rgba(231, 19, 15, 255)',
    borderWidth: 3,
    borderColor: 'rgba(243, 136, 134, 255)',
  },
  line: {
    backgroundColor: 'rgba(112, 112, 112, 255)',
    width: 48,
    height: 1,
  },
  studentBox: {
    marginStart: -0.5,
    width: 200,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
  },
  address: {
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
  },
  greenBox: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: '#00B966',
    borderWidth: 3,
    borderColor: '#7FDCB2',
  },
  button: {
    alignSelf: 'center',
    width: 279,
    height: 49,
    borderRadius: 24.5,
    backgroundColor: 'rgba(43, 136, 198, 255)',
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
