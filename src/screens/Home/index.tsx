import { useEffect } from 'react'
import React from 'react-native'

import { newSuccess } from '../../utils/Toast'
import Text from '../../components/Text'

import { Container } from './styles'

export default function Home() {
  useEffect(() => {
    newSuccess({
      title: 'Opa',
      text: 'Welcome'
    })
  }, [])

  return (
    <Container>
      <Text
        align='center'
        // size={60}
        fontFamily='SFProDisplay-Semibold'
        typography='title1'
      >
        Bem vindo
      </Text>
      <Text align='center' size={20} fontFamily='SFProDisplay-Medium'>
        Template por Solrachix 🎉
      </Text>
    </Container>
  )
}
