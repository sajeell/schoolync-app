import React, { useState, useRef, useEffect } from 'react'
// import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import { StyleSheet, View, Text } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito'

import Login from './components/Login/Login'
import SelectType from './components/SelectType/SelectType'
import DriverSignUp from './components/Driver/DriverSignUp'
import ParentSignUp from './components/Parent/ParentSignUp'
import AddAddress from './components/Parent/AddAddress'
import ParentDashboard from './components/Parent/ParentDashboard'
import OnGoingTrip from './components/Parent/OnGoingTrip'
import TrackTrip from './components/Parent/TrackTrip'
import CalendarComponent from './components/Parent/Calendar'
import Leave from './components/Parent/Leave'
// import Notifications from './components/Parent/Notifications'
import Menu from './components/Parent/Menu'
import AddBus from './components/Driver/AddBus'
import MarkStudents from './components/Driver/MarkStudents'
import StudentDirection from './components/Driver/StudentDirections'
import DriverDashboard from './components/Driver/DriverDashboard'
import FAQ from './components/Parent/FAQ'
import SchoolDirection from './components/Driver/SchoolDirection'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('')
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification)
      })

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response)
      })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  async function registerForPushNotificationsAsync() {
    try {
      let token
      if (Constants.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync()
          finalStatus = status
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!')
          return
        }
        token = (await Notifications.getExpoPushTokenAsync()).data
      } else {
        alert('Must use physical device for Push Notifications')
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        })
      }

      return token
    } catch (error) {
      console.error(error)
    }
  }

  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  })
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/select-type'>
          <SelectType />
        </Route>
        <Route exact path='/driver-signup'>
          <DriverSignUp />
        </Route>
        <Route exact path='/add-bus'>
          <AddBus />
        </Route>
        <Route exact path='/parent-signup'>
          <ParentSignUp />
        </Route>
        <Route exact path='/add-address'>
          <AddAddress />
        </Route>
        <Route exact path='/parent-dashboard'>
          <ParentDashboard />
        </Route>
        <Route exact path='/ongoing-trip'>
          <OnGoingTrip />
        </Route>
        <Route exact path='/track-trip'>
          <TrackTrip />
        </Route>
        <Route exact path='/calendar'>
          <CalendarComponent />
        </Route>
        <Route exact path='/leave'>
          <Leave />
        </Route>
        <Route exact path='/faq'>
          <FAQ />
        </Route>
        <Route exact path='/driver-dashboard'>
          <DriverDashboard />
        </Route>
        <Route exact path='/driver-mark-students'>
          <MarkStudents />
        </Route>
        {/* <Route exact path='/notifications'>
          <Notifications />
        </Route> */}
        <Route exact path='/menu'>
          <Menu />
        </Route>
        <Route exact path='/student-direction'>
          <StudentDirection />
        </Route>
        <Route exact path='/school-direction'>
          <SchoolDirection />
        </Route>
        {/* <StatusBar style='light' /> */}
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito_400Regular',
  },
})
