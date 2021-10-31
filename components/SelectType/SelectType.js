import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'

import buttonBg from '../../assets/button-bg.png'
import driverIcon from '../../assets/driver.png'
import parentIcon from '../../assets/parents.png'
import schoolIcon from '../../assets/school.png'

const { width, height } = Dimensions.get('window')

export default function SelectType() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
      <TouchableOpacity style={styles.backContainer}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>here's where</Text>
        </View>
        <View>
          <Text style={styles.companyText}>it begins</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonContainer} delayPressIn={0}>
          <Image source={buttonBg} style={styles.leftGreenBg}></Image>
          <View style={styles.roundContainer}>
            <View style={styles.innerRound}>
              <Image source={driverIcon} style={styles.innerIcon}></Image>
            </View>
          </View>
          <View style={styles.rightContentContainer}>
            <Text style={styles.rowOne}>I am a</Text>
            <Text style={styles.rowTwo}>Bus Driver</Text>
            <Text style={styles.rowThree}>→</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image source={buttonBg} style={styles.leftGreenBg}></Image>
          <View style={styles.roundContainer}>
            <View style={styles.innerRound}>
              <Image
                source={parentIcon}
                style={{ width: 26, height: 18 }}
              ></Image>
            </View>
          </View>
          <View style={styles.rightContentContainer}>
            <Text style={styles.rowOne}>I am a</Text>
            <Text style={styles.rowTwo}>Kid's Parent</Text>
            <Text style={styles.rowThree}>→</Text>
          </View>
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
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '75%',
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 280,
    maxWidth: '80%',
    height: 150,
    borderRadius: 15,
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
    fontFamily: 'Nunito_200ExtraLight',
    fontSize: 17,
  },
  rowTwo: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 19,
  },
  rowThree: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 25,
    alignSelf: 'flex-end',
  },
})
