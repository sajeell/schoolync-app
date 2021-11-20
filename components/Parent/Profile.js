import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { useHistory } from 'react-router-native'
import { TextInput } from 'react-native-gesture-handler'

export default function ParentProfile() {
  const [parentData, setParentData] = useState({})

  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')

  let history = useHistory()

  const getParentData = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')

      if (parentID) {
        const parent = await fetch(
          `http://192.168.0.101:5000/admin/parent/${parseInt(parentID)}`
        )

        const data = await parent.json()

        setParentData(data.data[0])

        setFullName(parentData.name)
        setAddress(parentData.address)

      }
    } catch (error) {
      console.error(error)
    }
  }

  const updateParentData = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')

      if (parentID) {
        const body = { fullName, address }

        const parent = await fetch(
          `http://192.168.0.101:5000/admin/parent/${parseInt(parentID)}`,
          {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(body),
          }
        )

        alert('Updated Successfully!')
        history.push('/parent-dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getParentData()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Update Profile</Text>
      <View style={{ top: -100 }}>
        <View>
          <TextInput
            placeholder='Full Name'
            style={styles.inputField}
            value={fullName}
            onChangeText={(e) => {
              setFullName(e)
            }}
          />
          <TextInput
            placeholder='Address'
            multiline
            scrollEnabled
            value={address}
            style={styles.inputField}
            onChangeText={(e) => {
              setAddress(e)
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={updateParentData}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      <Footer dashboard={true} />
    </View>
  )
}

const greenColor = '#00B966'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },

  heading: {
    fontSize: 22,
    paddingHorizontal: '5%',
    fontFamily: 'Nunito_700Bold',
    top: -50,
  },
  inputField: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 20,
    marginBottom: 10,
    height: 50,
    borderRadius: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    maxWidth: '90%',
    width: 270,
    height: 45,
    backgroundColor: greenColor,
    borderRadius: 10,
    top: -100,
    alignSelf: 'center',
    zIndex: -1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
})
