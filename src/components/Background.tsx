import styled from 'styled-components/native'

const Container = styled.Image.attrs(() => ({
  source: require('../../assets/background.png')
}))`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: -1;
`

export default Container
