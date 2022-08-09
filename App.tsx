import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import Rn from 'react-native'
import { Welcome } from './src/screens/Welcome'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Rn.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onLayout={onLayoutRootView} >
      <Welcome />
    </Rn.View>
  )
}
