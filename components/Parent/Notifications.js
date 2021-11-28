import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import blueAlert from '../../assets/blue-alert.png'
import redAlert from '../../assets/red-alert.png'
import { now } from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Notifications() {
  const [isAlerts, setIsAlerts] = useState(true)

  const [alerts, setAlerts] = useState([])
  const [notifications, setNotifications] = useState([])
  const [alertMessage, setAlertMessage] = useState('')

  const getAlerts = async () => {
    try {
      const alerts = await fetch('https://schoolync-backend.herokuapp.com/alert')

      const alertsData = await alerts.json()

      setAlerts(alertsData.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getNotifications = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')
      const notifications = await fetch(
        `https://schoolync-backend.herokuapp.com/leave/${parentID}`
      )

      const notificationsData = await notifications.json()

      setNotifications(notificationsData.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAlerts()
  }, [])

  if (isAlerts === true) {
    return (
      <View style={styles.container}>
        <Header back={true} backURL={'/parent-dashboard'} />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: '5%', marginBottom: 20 }}
        >
          <View style={styles.toggleWrapper}>
            <TouchableOpacity style={styles.toggleOn}>
              <Text style={styles.toggleOnText}>Alerts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toggleOff}
              onPress={() => {
                getNotifications()
                setIsAlerts(false)
              }}
            >
              <Text style={styles.toggleOffText}>Notifications</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {alerts.map((alert) => (
            <View style={styles.notification} key={alert.id}>
              <Image style={styles.notificationIcon} source={redAlert} />
              <View style={styles.notificationTextContainer}>
                <View style={styles.row}>
                  <Text style={styles.rowHeading}>Alert</Text>
                  <Text style={styles.rowTime}>
                    {Math.round(
                      ((new Date() - (new Date(alert.createdAt) % 86400000)) %
                        3600000) /
                        6000
                    )}{' '}
                    mins. ago
                  </Text>
                </View>
                <Text style={styles.notificationText}>{alert.message}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <Footer notification={true} />
      </View>
    )
  } else if (isAlerts === false) {
    return (
      <View style={styles.container}>
        <Header back={true} backURL={'/parent-dashboard'} />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: '5%', marginBottom: 20 }}
        >
          <View style={styles.toggleWrapper}>
            <TouchableOpacity
              style={styles.toggleOff}
              onPress={() => setIsAlerts(true)}
            >
              <Text style={styles.toggleOffText}>Alerts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleOnNotification}>
              <Text style={styles.toggleOffText}>Notifications</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {notifications.map((notification) => (
            <View style={styles.notification} key={notification.id}>
              <Image style={styles.notificationIcon} source={blueAlert} />
              <View style={styles.notificationTextContainer}>
                <View style={styles.row}>
                  <Text style={styles.rowHeading}>Notification</Text>
                  <Text style={styles.rowTime}>
                    {Math.round(
                      ((new Date() -
                        (new Date(notification.createdAt) % 86400000)) %
                        3600000) /
                        6000
                    )}{' '}
                    mins. ago
                  </Text>
                </View>
                <Text style={styles.notificationText}>
                  {notification.comments}
                  {'\n'}
                  {notification.morning === true ? 'Morning Shift' : ''} {'\n'}
                  {notification.evening === true ? 'Evening Shift' : ''}{' '}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <Footer notification={true} />
      </View>
    )
  }
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
    paddingHorizontal: '5%',
    alignSelf: 'flex-start',
    top: 0,
  },
  toggleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
  },
  toggleOn: {
    paddingLeft: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#565656',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
  },
  toggleOnNotification: {
    paddingLeft: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#565656',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
  },
  toggleOff: {
    paddingLeft: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
  toggleOnText: {
    color: 'white',
    fontSize: 16,
  },
  toggleOffText: {
    color: 'black',
    fontSize: 16,
  },
  notification: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  notificationTextContainer: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '90%',
    width: 309,
    alignItems: 'center',
  },
  rowHeading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
  },
  rowTime: {
    fontFamily: 'Nunito_400Regular',
  },
  notificationText: {
    marginTop: 10,
    fontFamily: 'Nunito_400Regular',
  },
})
