import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { View } from 'react-native';
import "../global.css"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Inter': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
          // headerTransparent: true
        }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
