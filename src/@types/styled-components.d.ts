import * as styledComponents from 'styled-components'
import type { ThemedStyledComponentsModule } from 'styled-components'

import type { ThemeTypes } from '../styles/themes'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeTypes>

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeTypes {}
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
