import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'

// import Login from './components/Login/Login'
// import SelectType from './components/SelectType/SelectType'
// import DriverSignUp from './components/Driver/DriverSignUp'
// import ParentSignUp from './components/Parent/ParentSignUp'
// import AddAddress from './components/Parent/AddAddress'
import ParentDashboard from './components/Parent/ParentDashboard'

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
import OnGoingTrip from './components/Parent/OnGoingTrip'
import TrackTrip from './components/Parent/TrackTrip'

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
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <SelectType /> */}
      {/* <DriverSignUp /> */}
      {/* <ParentSignUp /> */}
      {/* <AddAddress /> */}
      {/* <ParentDashboard /> */}
      {/* <OnGoingTrip /> */}
      <TrackTrip />
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito_400Regular',
  },
})
