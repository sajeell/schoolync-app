import React from 'react'
import { StatusBar } from 'expo-status-bar'
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

// import Login from './components/Login/Login'
import SelectType from './components/SelectType/SelectType'
import DriverSignUp from './components/Driver/DriverSignUp'
import ParentSignUp from './components/Parent/ParentSignUp'
import AddAddress from './components/Parent/AddAddress'
import ParentDashboard from './components/Parent/ParentDashboard'
import OnGoingTrip from './components/Parent/OnGoingTrip'
import TrackTrip from './components/Parent/TrackTrip'
import CalendarComponent from './components/Parent/Calendar'
import Leave from './components/Parent/Leave'
import Notifications from './components/Parent/Notifications'
import Menu from './components/Parent/Menu'
import AddBus from './components/Driver/AddBus'

export default function App() {
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
          {/* <Login /> */}
          <AddBus />
        </Route>
        <Route path='/select-type'>
          <SelectType />
        </Route>
        <Route exact path='/driver-signup'>
          <DriverSignUp />
        </Route>
        <Route exact path='/add-bus'>
          <DriverSignUp />
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
        <Route exact path='/notifications'>
          <Notifications />
        </Route>
        <Route exact path='/menu'>
          <Menu />
        </Route>
        <StatusBar style='light' />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito_400Regular',
  },
})
