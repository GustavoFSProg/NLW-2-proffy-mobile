import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from '../routes/StudyTabs'

const AppStack = createStackNavigator()


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landing"
      >
        <AppStack.Screen name="Landing" component={Landing} />
        <AppStack.Screen name="Giveclasses" component={GiveClasses} />
        <AppStack.Screen name="Study" component={StudyTabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
