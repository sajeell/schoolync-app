import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import blueBus from '../../assets/bus-blue.png'
import redBus from '../../assets/bus-red.png'

import { useHistory } from 'react-router-native'

export default function ParentDashboard() {
  const [childrenData, setChildrenData] = useState([])
  let history = useHistory()

  const getChildData = async () => {
    try {
      const parentID = await AsyncStorage.getItem('parentID')
      const parentAddress = await AsyncStorage.getItem('parentAddress')

      if (parentID && parentAddress) {
        const studentData = await fetch(
          `https://schoolync-backend.herokuapp.com/admin/child/${parseInt(
            parentID
          )}`
        )

        const data = await studentData.json()

        setChildrenData(data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const goToStudentDirection = async (studentID, studentName) => {
    try {
      await AsyncStorage.setItem('studentID', JSON.stringify(studentID))
      await AsyncStorage.setItem('studentName', studentName)
      history.push('/ongoing-trip')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getChildData()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Dashboard</Text>
      <ScrollView style={styles.contentContainer}>
        <ScrollView>
          {childrenData.map((child) => (
            <TouchableOpacity
              key={child.id}
              onPress={() => {
                goToStudentDirection(child.id, child.name)
              }}
            >
              <View style={styles.tripBox}>
                <Image source={blueBus} style={styles.tripBusImage} />
                <View style={styles.tripContent}>
                  <View style={styles.leftColumn}>
                    <Text style={styles.introText}>{child.name}'s Trip</Text>
                    <Text style={styles.schoolText}>Headstart School</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
      <Footer dashboard={true} />
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
  contentContainer: {
    paddingHorizontal: '5%',
  },
  noTrips: {
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 5,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 30,
    borderRadius: 10,
  },
  noTripsText: {
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
  },
  tripBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    margin: 5,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 30,
    borderRadius: 10,
  },
  tripBusImage: {
    width: 45,
    height: 40,
    marginRight: 10,
  },
  tripContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  introText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: 'gray',
  },
  time: {
    marginLeft: '20%',
  },
  timeText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    color: 'gray',
  },
  schoolText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
})
