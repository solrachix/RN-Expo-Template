// import { shade } from 'polished'

export const DarkTheme = {
  title: 'Dark',
  spacing: 8,
  typography: {
    body: {
      fontSize: 17,
      lineHeight: 20
    },
    callout: {
      fontSize: 16,
      lineHeight: 20
    },
    caption: {
      fontSize: 11,
      lineHeight: 13
    },
    footnote: {
      fontSize: 13,
      lineHeight: 18,
      color: '#999999'
    },
    headline: {
      fontSize: 17,
      lineHeight: 22
    },
    subhead: {
      fontSize: 15,
      lineHeight: 20
    },
    title1: {
      fontSize: 34,
      lineHeight: 41
    },
    title2: {
      fontSize: 28,
      lineHeight: 34
    },
    title3: {
      fontSize: 22,
      lineHeight: 26
    }
  },
  colors: {
    primary: {
      lighter: '#6866FB',
      light: '#5659EB',
      normal: '#4347FE',
      dark: '#494CDB',
      darker: '#3846D4'
    },
    secondary: '#1C2028',
    tertiary: '#2B303A',

    background: {
      lighter: '#2c323f',
      light: '#232832',
      normal: '#1C2028',
      dark: '#161a20',
      darker: '#12151a'
    },
    text: {
      light: '#D4C2FF',
      normal: '#9C98A6',
      dark: '#6A6180'
    },

    white: '#f7f7f7',
    grey: '#aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#2436e8',
    lightBlue: '#3AC5FF',
    red: '#E96379',
    yellow: '#e7de79'
  }
}

export type ThemeTypes = typeof DarkTheme
