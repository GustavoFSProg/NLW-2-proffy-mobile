import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  banner: {
    resizeMode: 'contain',
    padding: 40,
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#fff',
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#fff',
    lineHeight: 30,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  buttons: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 14,
  },
  totalConnections:{
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth:140,
    marginTop: 40,
    marginLeft: -105
  }
})

export default styles
