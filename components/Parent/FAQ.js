import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Collapsible from 'react-native-collapsible'

import faqVector from '../../assets/faq.jpg'
import Header from '../Header/Header'

export default function FAQ() {
  const [faq, setFaq] = useState([
    {
      question: '\n\nGetting Started with SchooLync',
      answer: 'SchooLync is a transport providing service',
      open: true,
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      open: true,
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      open: true,
    },
  ])

  const toggleFAQ = (index) => {
    setFaq(
      faq.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        }

        return faq
      })
    )
  }

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Header back={true} backURL={'/parent-dashboard'} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Here are some FAQs</Text>
        </View>
        {faq.map((faq, i) => (
          <View key={i} style={styles.faq}>
            <Text
              style={styles.faqQuestion}
              onPress={() => {
                toggleFAQ(i)
              }}
            >
              {faq.question}
            </Text>
            <Collapsible collapsed={faq.open}>
              <View style={styles.faqAnswer}>
                <Text style={styles.faqAnswerHeading}>Answer:</Text>
                <Text style={styles.faqAnswerText}>{faq.answer}</Text>
              </View>
            </Collapsible>
          </View>
        ))}
      </ScrollView>
      <View>
        <Image
          source={faqVector}
          style={{
            alignSelf: 'center',
            width: 300,
            height: 220,
            marginTop: 100,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  faq: {
    marginLeft: 10,
    marginRight: 10,
  },
  faqQuestion: {
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'Nunito_700Bold',
  },
  faqAnswerHeading: {
    paddingTop: 8,
    fontFamily: 'Nunito_400Regular',
    paddingLeft: 20,
  },
  faqAnswerText: {
    paddingTop: 12,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    fontFamily: 'Nunito_400Regular',
  },
  faqAnswer: {
    backgroundColor: '#e9f0fe',
  },
  heading: {
    textAlign: 'center',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 20,
  },
})
