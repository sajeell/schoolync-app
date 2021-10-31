import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native'

import { Overlay } from 'react-native-elements'

import Footer from '../Footer/Footer'

import backArrow from '../../assets/map-back.png'
import blueMarker from '../../assets/blue-marker.png'
import redMarker from '../../assets/red-marker.png'
import busMap from '../../assets/map-bus.png'

export default function TrackTrip() {
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow}>
        <Image source={backArrow} />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.97343096953564,
          latitudeDelta: 0.0922,
          longitude: -75.12520805829233,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          key={1}
          title={'Hello'}
          description={'Blah blah'}
          coordinate={{
            latitude: 39.97343096953564,
            latitudeDelta: 0.0922,
            longitude: -75.12520805829233,
            longitudeDelta: 0.0421,
          }}
          image={blueMarker}
        />
        <Marker
          key={2}
          title={'Hello'}
          description={'Blah blah'}
          coordinate={{
            latitude: 39.97343096953564,
            latitudeDelta: 0.0922,
            longitude: -75.5920805829233,
            longitudeDelta: 0.0421,
          }}
          image={busMap}
        />
        <Marker
          key={3}
          title={'Hello'}
          description={'Blah blah'}
          coordinate={{
            latitude: 39.973430969539,
            latitudeDelta: 0.0922,
            longitude: -75.92820805829233,
            longitudeDelta: 0.0421,
          }}
          image={redMarker}
        />
      </MapView>
      <View style={styles.contentContainer}>
        <View style={styles.line}></View>
        <Text style={styles.heading}>Your Child's Trip</Text>
        <View style={styles.statusContainer}>
          <View style={styles.sourceStatus}>
            <View style={styles.sourceBox}>
              <View style={styles.sourceInnerBox}></View>
            </View>
            <Text style={styles.timeText}>11:00 AM</Text>
            <Text style={styles.locationText}>
              Headstart School, 8th Street
            </Text>
          </View>
          <View style={{ flex: 0, paddingVertical: 0 }}>
            <View style={styles.statusLine}></View>
            <View style={styles.statusLine}></View>
            <View style={styles.statusLine}></View>
          </View>
          <View style={styles.destinationStatus}>
            <View style={styles.destinationBox}>
              <View style={styles.destinationInnerBox}></View>
            </View>
            <Text style={styles.timeText}>11:00 AM</Text>
            <Text style={styles.locationText}>
              Headstart School, 8th Street
            </Text>
          </View>
        </View>
        <View style={styles.etaContainer}>
          <View style={styles.row}>
            <Text style={styles.etaHeading}>Driver Name:</Text>
            <Text style={styles.etaContent}>David Gustavo</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.etaHeading}>ETA:</Text>
            <Text style={styles.etaContent}>15 Minutes</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={styles.contactDriverText}>
            Want to contact driver? Click{' '}
          </Text>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.hereText}>here</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  backArrow: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 20,
    zIndex: 100,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '50%',
    position: 'absolute',
  },
  contentContainer: {
    height: '50%',
    marginTop: '90%',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
  },
  line: {
    width: '50%',
    marginTop: 20,
    alignSelf: 'center',
    borderBottomColor: '#00B966',
    borderBottomWidth: 3,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
    marginTop: '7%',
  },
  sourceStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
    justifyContent: 'space-between',
    height: '30%',
  },
  sourceBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#0D77BE',
    width: 30,
    height: 50,
    borderRadius: 17,
  },
  sourceInnerBox: {
    alignSelf: 'center',
    width: '40%',
    height: '25%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: '30%',
  },
  timeText: {
    fontFamily: 'Nunito_700Bold',
  },
  locationText: {
    fontFamily: 'Nunito_400Regular',
  },
  statusLine: {
    alignSelf: 'flex-start',
    marginVertical: 3,
    borderLeftWidth: 4,
    marginLeft: '4.5%',
    borderRadius: 10,
    height: 5,
  },
  destinationStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '30%',
  },
  destinationBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E7130F',
    width: 30,
    height: 50,
    borderRadius: 17,
  },
  destinationInnerBox: {
    alignSelf: 'center',
    width: '40%',
    height: '25%',
    borderRadius: 10,
    backgroundColor: '#E7130F',
    marginBottom: '30%',
  },
  etaContainer: {
    // alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    width: '100%',
    borderRadius: 15,
    height: '20%',
    marginTop: -75,
    paddingVertical: '5%',
    paddingHorizontal: '8%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  etaHeading: {
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  etaContent: {
    fontFamily: 'Nunito_400Regular',
  },
  contactDriverText: {
    fontFamily: 'Nunito_400Regular',
  },
  hereText: {
    fontFamily: 'Nunito_700Bold',
  },
})
