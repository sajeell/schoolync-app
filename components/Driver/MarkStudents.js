import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from './Header'

import { Link, useHistory } from 'react-router-native'

export default function MarkStudents() {
  const [data, setData] = useState([])
  const history = useHistory()
  const getData = () => {
    try {
      var requestOptions = {
        method: 'GET',
      }

      fetch('https://schoolync-backend.herokuapp.com/admin/child', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setData(JSON.parse(result).data)
          const temp = JSON.parse(result).data
        })
        .catch((error) => console.error('error', error))
    } catch (err) {
      console.error(err.message)
    }
  }

  const moveToDirectionsMap = async (address, name) => {
    try {
      if (address) {
        await AsyncStorage.setItem('address', address)
        await AsyncStorage.setItem('name', name)
      } else {
        await AsyncStorage.setItem('address', '244 Terry Lane')
      }
    } catch (e) {
      console.error(e)
    }

    history.push('/student-direction')
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Mark Students</Text>
      {/* <Link component={TouchableOpacity}>
        <Text style={styles.alertText}>Generate Alert</Text>
      </Link> */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ScrollView>
          {data.map((item) => (
            <View style={styles.studentBoxContainer} key={item.id}>
              <View style={styles.redBox}></View>
              <View style={styles.line}></View>

              <TouchableOpacity
                style={styles.studentBox}
                onPress={(e) => {
                  e.preventDefault()
                  moveToDirectionsMap(item.Parent.address, item.name)
                }}
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.address}>
                  {item.Parent ? item.Parent.address : '244 Terry Lane'}
                </Text>
              </TouchableOpacity>

              <View style={styles.line}></View>
              <View style={styles.greenBox}></View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <Link component={TouchableOpacity} style={styles.button}>
        <Text style={styles.buttonText}>FINISH RIDE</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  upperBG: {
    width: '100%',
    zIndex: -1,
  },
  menuIconContainer: {
    height: 80,
    width: 30,
    zIndex: 100,
    marginLeft: -50,
    marginTop: 50,
  },
  menuIcon: {
    borderTopWidth: 2,
    borderTopColor: 'white',
    marginBottom: 8,
  },
  heading: {
    fontSize: 22,
    paddingHorizontal: '5%',
    fontFamily: 'Nunito_700Bold',
  },
  alertText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    alignSelf: 'flex-end',
    paddingRight: '5%',
    letterSpacing: 1,
    color: 'red',
  },
  contentContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  studentBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  redBox: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: 'rgba(231, 19, 15, 255)',
    borderWidth: 3,
    borderColor: 'rgba(243, 136, 134, 255)',
  },
  line: {
    backgroundColor: 'rgba(112, 112, 112, 255)',
    width: 48,
    height: 1,
  },
  studentBox: {
    marginStart: -0.5,
    width: 200,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
  },
  address: {
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
  },
  greenBox: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: '#00B966',
    borderWidth: 3,
    borderColor: '#7FDCB2',
  },
  button: {
    alignSelf: 'center',
    width: 279,
    height: 49,
    borderRadius: 24.5,
    backgroundColor: 'rgba(43, 136, 198, 255)',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',
    color: 'white',
    fontSize: 15,
  },
})
