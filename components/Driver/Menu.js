import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Link } from 'react-router-native'

import logo from '../../assets/PNG_Logo.png'
import avatar from '../../assets/driver-avatar.png'

export default function Menu() {
  const [parentName, setParentName] = useState('')

  useEffect(async () => {
    const parent = await AsyncStorage.getItem('driverName')
    setParentName(parent)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.menuRowContainer}>
        <Image source={avatar} style={{ width: 96, height: 96, left: -20 }} />
        <Text style={styles.subtitle}>Hey,</Text>
        <Text style={styles.title}>{parentName}</Text>
        <Link component={TouchableOpacity} to='/driver-dashboard'>
          <Text style={styles.menuItemText}>- Home</Text>
        </Link>
        <Link component={TouchableOpacity} to='/driver-profile'>
          <Text style={styles.menuItemText}>- Profile</Text>
        </Link>
        <Link component={TouchableOpacity} to='/parent-dashboard'>
          <Text style={styles.menuItemText}>- About Us</Text>
        </Link>
        <Link component={TouchableOpacity} to='/'>
          <Text style={styles.menuItemText}>- Log Out</Text>
        </Link>
      </View>
      <Image source={logo} style={styles.menuImage} />
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
    width: '65%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  subtitle: {
    fontFamily: 'Nunito_200ExtraLight',
    fontSize: 18,
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 22,
    marginBottom: 40,
  },
  menuItemText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    marginBottom: 15,
  },
  menuImage: {
    alignSelf: 'center',
    width: 160,
    height: 120,
  },
})
