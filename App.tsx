import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import { View } from 'react-native'
import { UserIdentification } from './src/screens/UserIdentification'

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onLayout={onLayoutRootView} >
      <UserIdentification />
    </View>
  )
}
