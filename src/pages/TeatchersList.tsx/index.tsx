import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeatcherItem from '../../components/TeatcherItem'
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

function TeatchersList() {
  const [isFiltersVisible, setFiltersVisible] = useState(false)

  function handleTogglerFiltersVisible() {
    setFiltersVisible(!isFiltersVisible)
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
            ></TextInput>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia Da semana:</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Dia da Semana? "
                ></TextInput>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário: </Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Horário "
                ></TextInput>
              </View>
            </View>

            <RectButton style={styles.submitButton}>
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
        <TeatcherItem />
        <TeatcherItem />
        <TeatcherItem />
      </ScrollView>
    </View>
  )
}

export default TeatchersList
