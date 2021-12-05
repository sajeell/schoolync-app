import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useHistory } from 'react-router-native'

import moment from 'moment'
import { Calendar } from 'react-native-calendars'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import calendar from '../../assets/calendar-illustration.png'

export default function CalendarComponent() {
  const [markedDates, setMarkedDates] = useState({})
  let history = useHistory()
  const handleDayPress = async (day) => {
    await AsyncStorage.setItem('date', day.dateString)
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,
        color: '#00B966',
      },
      [moment(day.dateString).add(0, 'days').format('YYYY-MM-DD')]: {
        color: '#00B966',
      },
    })
  }

  return (
    <View style={styles.container}>
      <Header
        back={true}
        backURL={'/parent-dashboard'}
        pageName={'Leave Apply'}
      />
      <View style={styles.contentContainer}>
        <View style={styles.calendar}>
          <Calendar
            minDate={Date()}
            enableSwipeMonths={true}
            markingType={'period'}
            markedDates={markedDates}
            onDayPress={handleDayPress}
          />
        </View>
        <Image
          source={calendar}
          style={{ width: 150, height: 200, alignSelf: 'center' }}
        />
        <TouchableOpacity
          onPress={async () => {
            const date = await AsyncStorage.getItem('date')

            if (date !== '' && date !== null) {
              history.push('/leave')
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Apply For Leave</Text>
        </TouchableOpacity>
      </View>
      <Footer calendar={true} />
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
    paddingHorizontal: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  heading: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontFamily: 'Nunito_200ExtraLight',
    letterSpacing: 3,
    top: '-180%',
  },
  calendar: {
    width: '70%',
    alignSelf: 'center',
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
