import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

import { DarkTheme } from '../../styles/themes'

import type { Fonts } from './fonts'

export type Typography = typeof DarkTheme.typography

interface Props {
  align?: string
  size?: number
  color?: string
  weight?: string | number
  style?: unknown
  fontFamily?: Fonts
  typography?: keyof Typography
}

function typeOfText(type: keyof Typography, typography: Typography) {
  const obj = typography[type]
  const style = []
  for (const [key, value] of Object.entries(obj)) {
    const prop = key.replace(/([A-Z])/g, '-$1').toLowerCase()

    if (typeof value === 'string') {
      style.push(`${prop}: ${value}`)
    } else if (typeof value === 'number') {
      style.push(`${prop}: ${value}px`)
    }
  }

  return style.join(';')
}

export const Text = styled(Animated.Text)<Props>`
  ${props => css`
    width: auto;
    height: auto;
    text-align: ${props.align};
    font-size: ${props.size}px;
    font-weight: ${props.weight};
    font-family: ${props.fontFamily || 'SFProDisplay-Medium'};
    letter-spacing: 1px;
    color: ${props.color || props.theme.colors.text.normal};
    ${props.typography && typeOfText(props.typography, DarkTheme.typography)}
  `}
`
