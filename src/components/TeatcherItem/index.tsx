import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import WhatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeatcherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/51864014?s=400&u=431f414ca00ec298196ca8a4f948e4ccbb52b550&v=4',
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}> Gustavo Sohne </Text>
          <Text style={styles.subject}> Matematica </Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Entusiasta de tecnologias de matematicaas
        {'\n'}
        {'\n'}
        relacionadas a Informação de matematicaas
        {'\n'} de matematicaas
        {'\n'}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Preço/ Hora </Text>
        <Text style={styles.priceValue}> R$ 2000,00 </Text>

        <View style={styles.Buttonscontainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={heartIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={WhatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>

          {/* <Image source={unfavoriteIcon} /> */}
        </View>
      </View>
    </View>
  )
}

export default TeatcherItem
