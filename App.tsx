import { ThemeProvider } from 'styled-components'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { defaultTheme } from '@theme/default'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <View /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
