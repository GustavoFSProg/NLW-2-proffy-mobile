import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import bgImage from '../../assets/images/give-classes-background.png'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigationBack() {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={bgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastar na nossa plataforma Web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigationBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
