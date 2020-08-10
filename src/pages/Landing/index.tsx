import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import LandingImage from '../../assets/images/landing.png'
import ImageStudy from '../../assets/images/icons/study.png'
import giveClasses from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
  return (
    <ScrollView>

   
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#8257E5',
        alignItems: 'center',
      }}
    >
      <Image source={LandingImage} style={styles.banner} />
      <Text style={styles.title}>Seja Bem-vindo! {'\n'}</Text>
      <Text style={styles.titleBold}>O que deseja fazer? {'\n'}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.buttons, styles.buttonPrimary]}>
          <Image source={ImageStudy} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
        <View style={{ width: 13 }} />
        <TouchableOpacity style={[styles.buttons, styles.buttonSecondary]}>
          <Image source={giveClasses} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total de 900000 conexões ja efetuadas {'  '}
        <Image source={heartIcon} />
      </Text>
    </View>
    </ScrollView>
  )
}

export default Landing
