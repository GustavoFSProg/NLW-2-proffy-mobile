import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeatcherItem, { Teatcher } from '../../components/TeatcherItem'
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

function TeatchersList() {
  const [isFiltersVisible, setFiltersVisible] = useState(false)

  function handleTogglerFiltersVisible() {
    setFiltersVisible(!isFiltersVisible)
  }

  useEffect(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeatchers = JSON.parse(response)
        const favoritedTeatchersIds = favoritedTeatchers.map(
          (teatcher: Teatcher) => {
            return teatcher.id
          }
        )

        setFavorites(favoritedTeatchersIds)
      }
    })
  }, [])

  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [teactchers, setTeatchers] = useState([])

  async function handleFilterSubmit() {
    const response = await api.get('/', {
      params: {
        week_day,
        subject,
        time,
      },
    })

    setTeatchers(response.data)

    setFiltersVisible(false)

    console.log(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={handleTogglerFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Máteria:</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a Matéria? "
              value={subject}
              onChangeText={(text) => setSubject(text)}
            ></TextInput>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia Da semana:</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Dia da Semana? "
                  value={week_day}
                  onChangeText={(text) => setWeek_day(text)}
                ></TextInput>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário: </Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Horário "
                ></TextInput>
              </View>
            </View>

            <RectButton
              onPress={handleFilterSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teatcherList}
        contentContainerStyle={{
          paddingBottom: 24,
        }}
      >
        {teactchers.map((teatcher: Teatcher) => {
          return (
            <TeatcherItem
              favorited={favorites.includes(teatcher.id)}
              key={teatcher.id}
              teatcher={teatcher}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TeatchersList
