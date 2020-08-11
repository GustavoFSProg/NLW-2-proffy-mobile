import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TeatchersList from '../pages/TeatchersList.tsx'
import Favorites from '../pages/Favorites'
import { Archivo_700Bold } from '@expo-google-fonts/archivo'
import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

export default function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          showOpatici: 0,
          elevation: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            )
          },
        }}
        name="TeatcherList"
        component={TeatchersList}
      />
      <Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            )
          },
        }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  )
}
