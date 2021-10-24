import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SelectType() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}></View>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>here's where</Text>
        </View>
        <View>
          <Text style={styles.companyText}>it begins</Text>
        </View>
      </View>
    </View>
  )
}

const greenColor = '#00B966'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  backgroundImageContainer: {
    width: '100%',
    height: 450,
    backgroundColor: greenColor,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 120,
    position: 'absolute',
  },
  welcomeContainer: {
    marginTop: '25%',
    marginLeft: '10%',
  },
  welcomeText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2,
  },
  companyText: {
    fontSize: 25,
    letterSpacing: 2,
    color: 'white',
  },
})
