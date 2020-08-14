import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Linking } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import WhatsappIcon from '../../assets/images/icons/whatsapp.png'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Teatcher {
  id: number
  name: string
  avatar: string
  bio: string
  cost: number
  whatsapp: string
  subject: string
}

interface TeatcherItemProps {
  teatcher: Teatcher
  favorited: boolean
}

const TeatcherItem: React.FC<TeatcherItemProps> = ({ teatcher, favorited }) => {
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teatcher.whatsapp}`)

    api.post('connections', {
      user_id: teatcher.id,
    })
  }

  const [isFavorited, setIsFavorites] = useState(favorited)

  async function handleToogleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoritesIndex = favoritesArray.findIndex(
        (teatcherItem: Teatcher) => {
          return teatcherItem.id === teatcher.id
        }
      )

      favoritesArray.splice(favoritesIndex, 1)

      setIsFavorites(false)
    } else {
      favoritesArray.push(teatcher)

      setIsFavorites(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teatcher.avatar }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teatcher.name} </Text>
          <Text style={styles.subject}>{teatcher.subject} </Text>
        </View>
      </View>
      <Text style={styles.bio}>{teatcher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Preço/ Hora </Text>
        <Text style={styles.priceValue}> R$ {teatcher.cost} </Text>

        <View style={styles.Buttonscontainer}>
          <RectButton
            onPress={handleToogleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartIcon} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={WhatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeatcherItem
