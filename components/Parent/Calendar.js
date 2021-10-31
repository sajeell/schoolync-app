import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'

import moment from 'moment'
import { Calendar } from 'react-native-calendars'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function CalendarComponent() {
  const [markedDates, setMarkedDates] = useState({})

  const handleDayPress = (day) => {
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
      <Header back={true} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.heading}>Choose Date</Text>
        </View>
        <View style={styles.calendar}>
          <Calendar
            minDate={Date()}
            enableSwipeMonths={true}
            markingType={'period'}
            markedDates={markedDates}
            onDayPress={handleDayPress}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply For Leave</Text>
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
    marginBottom: '10%',
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
