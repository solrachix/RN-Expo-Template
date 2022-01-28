import React from 'react'
import type { StyleProp, TextStyle } from 'react-native'

import type { Typography } from './styles'
import type { Fonts } from './fonts'
import { Text } from './styles'
import { fonts } from './fonts'

export { fonts }

interface Props {
  align?: string
  size?: number
  color?: string
  weight?: string | number
  numberOfLines?: number
  style?: StyleProp<TextStyle>
  fontFamily?: Fonts
  typography?: keyof Typography
}

const TextComponent: React.FC<Props> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

TextComponent.defaultProps = {
  size: 16,
  // typography: 'body',
  weight: 'normal',
  align: 'left'
}

export default TextComponent
