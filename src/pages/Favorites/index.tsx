import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import AsyncStorage from '@react-native-community/async-storage'
import TeatcherItem, { Teatcher } from '../../components/TeatcherItem'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeatchers = JSON.parse(response)

        setFavorites(favoritedTeatchers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />

      <ScrollView
        style={styles.teatcherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teatcher: Teatcher) => {
          return (
            <TeatcherItem
              key={teatcher.id}
              teatcher={teatcher}
              favorited
            ></TeatcherItem>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites
