import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeatcherItem from '../../components/TeatcherItem'
import { ScrollView } from 'react-native-gesture-handler'

function TeatchersList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis" />
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
