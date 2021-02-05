import React from 'react'

export const ThemeContext = React.createContext()

export const lightTheme = {
  colors: {
    textColorDark: '#727272',
    textColorLight: '#939393',
    buttonTextColor: '#fff',
    bgColor: '#fff',
    bgColorDark: '#f8f8f8',
    bgColorLight: '#fbfbfb',
    yellow: '#f8bb10',
    lineColor: 'rgba(93, 93, 93, 0.3)',
    formColor: '#fff'
  },
}

export const darkTheme = {
  colors: {
    textColorDark: '#939393',
    textColorLight: '#EEEEEE',
    buttonTextColor: '#2b2c2c',
    bgColor: '#2b2c2c',
    bgColorDark: '#292a2a',
    bgColorLight: '#2d2e2e',
    bgColorSuperDark: '#212121',
    yellow: '#f8bb10',
    lineColor: 'rgba(93, 93, 93, 0.3)',
    formColor: '#EEEEEE'
  },
}
