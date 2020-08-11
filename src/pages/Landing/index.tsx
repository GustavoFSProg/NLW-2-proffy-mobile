import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import LandingImage from '../../assets/images/landing.png'
import ImageStudy from '../../assets/images/icons/study.png'
import giveClasses from '../../assets/images/icons/give-classes.png'
import { RectButton } from 'react-native-gesture-handler'
import heartIcon from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

function Landing() {
  const { navigate } = useNavigation()

  function handleNavigateToGiveClassestoPage() {
    navigate('Giveclasses')
  }

  function handleNavigateToStudyPages() {
    navigate('Study')
  }

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])
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
          <RectButton
            onPress={handleNavigateToStudyPages}
            style={[styles.buttons, styles.buttonPrimary]}
          >
            <Image source={ImageStudy} />
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>
          <View style={{ width: 13 }} />
          <RectButton
            onPress={handleNavigateToGiveClassestoPage}
            style={[styles.buttons, styles.buttonSecondary]}
          >
            <Image source={giveClasses} />
            <Text style={styles.buttonText}>Dar Aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões ja efetuadas {'  '}
          <Image source={heartIcon} />
        </Text>
      </View>
    </ScrollView>
  )
}

export default Landing
