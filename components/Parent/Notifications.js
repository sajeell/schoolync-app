import React, { useState } from 'react'
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

export default function Notifications() {
  const [isAlerts, setIsAlerts] = useState(true)
  return (
    <View style={styles.container}>
      <Header back={true} backURL={'/parent-dashboard'} />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: '5%', marginBottom: 20 }}
      >
        <View style={styles.toggleWrapper}>
          <TouchableOpacity
            style={isAlerts ? styles.toggleOn : styles.toggleOff}
          >
            <Text style={styles.toggleOnText}>Alerts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!isAlerts ? styles.toggleOn : styles.toggleOff}
          >
            <Text style={styles.toggleOffText}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.notification}>
          <Image style={styles.notificationIcon} source={blueAlert} />
          <View style={styles.notificationTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowHeading}>Alert</Text>
              <Text style={styles.rowTime}>4 mins. ago</Text>
            </View>
            <Text style={styles.notificationText}>
              Lorem Ipsum dolor sit amet
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <Image style={styles.notificationIcon} source={blueAlert} />
          <View style={styles.notificationTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowHeading}>Alert</Text>
              <Text style={styles.rowTime}>4 mins. ago</Text>
            </View>
            <Text style={styles.notificationText}>
              Lorem Ipsum dolor sit amet
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <Image style={styles.notificationIcon} source={redAlert} />
          <View style={styles.notificationTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowHeading}>Alert</Text>
              <Text style={styles.rowTime}>4 mins. ago</Text>
            </View>
            <Text style={styles.notificationText}>
              Lorem Ipsum dolor sit amet
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <Image style={styles.notificationIcon} source={blueAlert} />
          <View style={styles.notificationTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowHeading}>Alert</Text>
              <Text style={styles.rowTime}>4 mins. ago</Text>
            </View>
            <Text style={styles.notificationText}>
              Lorem Ipsum dolor sit amet
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <Image style={styles.notificationIcon} source={blueAlert} />
          <View style={styles.notificationTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowHeading}>Alert</Text>
              <Text style={styles.rowTime}>4 mins. ago</Text>
            </View>
            <Text style={styles.notificationText}>
              Lorem Ipsum dolor sit amet
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <Image style={styles.notificationIcon} source={blueAlert} />
          <View style={styles.notificationTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowHeading}>Alert</Text>
              <Text style={styles.rowTime}>4 mins. ago</Text>
            </View>
            <Text style={styles.notificationText}>
              Lorem Ipsum dolor sit amet
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer notification={true} />
    </View>
  )
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
