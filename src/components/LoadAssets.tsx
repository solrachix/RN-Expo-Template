import type { ReactElement } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { useTheme } from 'styled-components/native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import type { InitialState } from '@react-navigation/native'

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest?.sdkVersion}`

type FontSource = Parameters<typeof Font.loadAsync>[0]
const usePromiseAll = (
  promises: Promise<void | void[] | Asset[]>[],
  cb: () => void
) =>
  useEffect(() => {
    ;(async () => {
      await Promise.all(promises)
      cb()
    })()
  })

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false)
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map(asset => Asset.loadAsync(asset))],
    () => setReady(true)
  )
  return ready
}

interface LoadAssetsProps {
  fonts?: FontSource
  assets?: number[]
  children: ReactElement | ReactElement[]
}

export const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__)
  const [initialState, setInitialState] = useState<InitialState | undefined>()
  const ready = useLoadAssets(assets || [], fonts || {})
  const theme = useTheme().colors

  const navTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      card: theme.background.dark,
      text: theme.text.normal,
      primary: theme.primary.normal,
      background: 'transparent'
    }
  }

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        )
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined
        setInitialState(state)
      } finally {
        setIsNavigationReady(true)
      }
    }

    if (!isNavigationReady) {
      restoreState()
    }
  }, [isNavigationReady])

  const onStateChange = useCallback(
    state => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  )

  if (!ready || !isNavigationReady) {
    return null
  }
  return (
    <NavigationContainer theme={navTheme} {...{ onStateChange, initialState }}>
      <StatusBar style='light' />
      {children}
    </NavigationContainer>
  )
}
