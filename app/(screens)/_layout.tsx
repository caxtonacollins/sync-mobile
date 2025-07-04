import { SplashScreen, Stack } from "expo-router";
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function ScreenLayout() {

    return (
        <Stack>
            <Stack.Screen name="signin" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
        </Stack>
    );
}
