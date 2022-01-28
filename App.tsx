import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import { Root as PopupUiProvider } from 'popup-ui'

import type { Routes } from './src/Routes'
import Background from './src/components/Background'
import { DarkTheme } from './src/styles/themes'
import { LoadAssets } from './src/components/LoadAssets'
import { fonts } from './src/components/Text'
import Home from './src/screens/Home'

// const assets = []

const Stack = createStackNavigator<Routes>()
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Home}
      options={{
        title: 'Inicio'
      }}
    />
  </Stack.Navigator>
)

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <PopupUiProvider>
        <Background />
        <LoadAssets fonts={fonts}>
          <AppNavigator />
        </LoadAssets>
      </PopupUiProvider>
    </ThemeProvider>
  )
}

export default App
