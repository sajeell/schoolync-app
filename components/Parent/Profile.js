import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import Header from '../Header/Header'

import avatar from '../../assets/parent-avatar.png'
import profileEditIcon from '../../assets/profile-edit.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Link } from 'react-router-native'

export default function ParentProfile() {
  const [data, setData] = useState('')
  const [date, setDate] = useState('')

  const getData = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')
      const user = await fetch(
        `https://schoolync-backend.herokuapp.com/admin/parent/${parentID}`
      )

      const temp = await user.json()

      setData(await temp.data[0])

      setDate(await data.createdAt)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  })

  return (
    <View>
      <Header pageName={'My Profile'} />

      <Image
        source={avatar}
        style={{
          alignSelf: 'center',
          width: 278,
          height: 276,
          marginTop: 20,
        }}
      />
      <View style={styles.contentContainer}>
        <View
          style={{
            borderTopColor: 'gray',
            borderTopWidth: 3,
            width: '40%',
            alignSelf: 'center',
          }}
        ></View>
        <View style={styles.profileContent}>
          <View>
            <Text style={styles.boxSubTitle}>{data.name}</Text>
            <Text style={styles.title}>{data.email}</Text>
          </View>
          <Link component={TouchableOpacity} to='/parent-update-profile'>
            <Image source={profileEditIcon} />
          </Link>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.topRow}>
            <View style={styles.topLeftBox}>
              <Text style={styles.boxTitle}>City:</Text>
              <Text style={styles.boxSubTitle}>{data.city}</Text>
            </View>
            <View style={styles.topRightBox}>
              <Text style={styles.boxTitle}>Experience:</Text>
              <Text style={styles.boxSubTitle}>1 Years</Text>
            </View>
          </View>
          <View style={styles.topRow}>
            <View style={styles.bottomLeftBox}>
              <Text style={styles.boxTitle}>School:</Text>
              <Text style={styles.boxSubTitle}>New York School</Text>
            </View>
            <View style={styles.bottomRightBox}>
              <Text style={styles.boxTitle}>Joined:</Text>
              <Text style={styles.boxSubTitle}>
                {date
                  ? date.length > 10
                    ? date.substr(0, 10)
                    : date.substr(0, 1)
                  : ''}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -20,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    height: '100%',
  },
  boxContainer: {
    marginTop: 50,
    bottom: 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLeftBox: {
    padding: 50,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  topRightBox: {
    padding: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  bottomLeftBox: {
    padding: 50,
    borderRightWidth: 1,
  },
  bottomRightBox: {
    padding: 30,
  },
  boxTitle: {
    fontSize: 14,
  },
  boxSubTitle: {
    fontSize: 19,
    fontFamily: 'Nunito_700Bold',
    width: 110,
    textAlign: 'left',
  },
  profileContent: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 50,
  },
})
