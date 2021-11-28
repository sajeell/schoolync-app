import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Link } from 'react-router-native'

import buttonBg from '../../assets/button-bg.png'
import driverIcon from '../../assets/driver.png'
import parentIcon from '../../assets/parents.png'
import driverIllustration from '../../assets/driver-select-type.png'
// import motherHugIllustration from '../../assets/mother-hug.png'
import motherHugIllustration from '../../assets/father-hug.png'

const { width, height } = Dimensions.get('window')

export default function SelectType() {
  return (
    <View style={styles.container}>
      <Link component={TouchableOpacity} to='/' style={styles.backContainer}>
        <Text style={styles.backText}>{'<'} Back</Text>
      </Link>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>Select</Text>
        </View>
        <View>
          <Text style={styles.companyText}>user type</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Link
          to='/driver-signup'
          component={TouchableOpacity}
          style={styles.buttonContainer}
          delayPressIn={0}
        >
          <Image
            source={driverIllustration}
            style={{ width: 138, height: 138 }}
          />
          <View style={styles.rightContentContainer}>
            <Text style={styles.rowOne}>Driver</Text>
            <Text style={styles.rowTwo}>You will be taking trips</Text>
          </View>
        </Link>
        <Link
          to='/parent-signup'
          component={TouchableOpacity}
          style={styles.parentButtonContainer}
        >
          <Image
            source={motherHugIllustration}
            style={{ width: 120, height: 138 }}
          />
          <View style={styles.rightContentContainer}>
            <Text style={styles.rowOne}>Parent</Text>
            <Text style={styles.rowTwo}>
              You will be monitoring child's trips
            </Text>
          </View>
        </Link>
      </View>
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
    color: 'black',
    fontSize: 16,
  },
  welcomeContainer: {
    marginTop: '10%',
    marginLeft: '10%',
  },
  welcomeText: {
    fontSize: 32,
    color: 'black',
    letterSpacing: 2,
    fontFamily: 'Nunito_700Bold',
    fontWeight: '100',
  },
  companyText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 32,
    letterSpacing: 2,
    color: 'black',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '75%',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CFFAF5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 343,
    maxWidth: '80%',
    height: 161,
    borderRadius: 17,
  },
  parentButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B3F8EF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 343,
    maxWidth: '80%',
    height: 161,
    borderRadius: 17,
    paddingLeft: 20,
  },
  leftGreenBg: {
    height: '100%',
    position: 'absolute',
  },
  roundContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 80,
    marginLeft: 30,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerRound: {
    borderRadius: 50,
    width: '50%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    padding: 22,
    borderColor: 'lightgray',
  },
  innerIcon: {
    width: 22,
    height: 24,
  },
  rightContentContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  rowOne: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 28,
    marginBottom: 25,
  },
  rowTwo: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 15,
    maxWidth: 134,
  },
  rowThree: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 25,
    alignSelf: 'flex-end',
  },
})
