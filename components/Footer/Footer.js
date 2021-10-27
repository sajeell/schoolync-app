import React from 'react'
import { StyleSheet, Image, View, Dimensions } from 'react-native'

import dashboardIcon from '../../assets/dashboard.png'
import whiteDashboardIcon from '../../assets/white-dashboard.png'

import calendarIcon from '../../assets/calendar.png'
import whiteCalendarIcon from '../../assets/white-calendar.png'

import notificationIcon from '../../assets/notification.png'
import whiteNotificationIcon from '../../assets/white-notification.png'

export default function Footer(props) {
  return (
    <View style={styles.container}>
      {props.dashboard === true ? (
        <Image
          source={whiteDashboardIcon}
          style={{ width: 26, height: 26, marginLeft: 5 }}
        />
      ) : (
        <Image source={dashboardIcon} style={{ width: 36, height: 36 }} />
      )}
      {props.calendar === true ? (
        <Image source={whiteCalendarIcon} style={{ width: 26, height: 26 }} />
      ) : (
        <Image
          source={calendarIcon}
          style={{ width: 29, height: 30.5, opacity: 0.6 }}
        />
      )}
      {props.notification === true ? (
        <Image
          source={whiteNotificationIcon}
          style={{ width: 20, height: 23 }}
        />
      ) : (
        <Image source={notificationIcon} style={{ width: 20, height: 23 }} />
      )}
    </View>
  )
}

const greenColor = '#00B966'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: greenColor,
  },
})
