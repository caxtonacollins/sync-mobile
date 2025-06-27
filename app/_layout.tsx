import { useFonts } from "expo-font";
import { SplashScreen, Stack, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { View } from 'react-native';
import storage from '@/lib/storage';

SplashScreen.preventAutoHideAsync();

const PERSISTENCE_KEY = 'initial_route';

export default function RootLayout() {
  const segments = useSegments();
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Inter': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  // Restore saved navigation state on load
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedRoute = await storage.getItem(PERSISTENCE_KEY);
        if (savedRoute) {
          setInitialRoute(savedRoute);
        }
      } catch (e) {
        console.warn('Failed to load saved route', e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    };

    restoreState();
  }, []);


  useEffect(() => {
    const saveRoute = async () => {
      const currentRoute = `/${segments.join('/')}`;
      await storage.setItem(PERSISTENCE_KEY, currentRoute);
    };

    saveRoute();
  }, [segments]);

  if (!fontsLoaded || !isLoadingComplete) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      </Stack>
    </View>
  );
}
