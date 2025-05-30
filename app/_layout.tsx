// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { AppState, AppStateStatus } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import { Onboarding } from '@/components/Onboarding';
import { SignUp } from '@/components/SignUp';
import { SignIn } from '@/components/SignIn';
import { HomeScreen } from '@/components/HomeScreen';
import {SecureAccount} from '@/components/SecureAccount';
// import { useColorScheme } from '@/hooks/useColorScheme';

// const ONBOARDING_COMPLETE_KEY = 'onboarding_complete';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Inter': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });
  const [showOnboarding, setShowOnboarding] = useState(true); // Always show onboarding for now
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSecure, setShowSecure] = useState(false);


  // Handle app state changes
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        // App has come back to foreground
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        // COMMENTED OUT: Check if onboarding has been completed before
        // const onboardingComplete = await AsyncStorage.getItem(ONBOARDING_COMPLETE_KEY);
        // setShowOnboarding(onboardingComplete !== 'true');
        
        // Always show onboarding for testing
        setShowOnboarding(true);
      } catch (e) {
        // If there's an error reading from storage, show onboarding by default
        console.error('Error reading onboarding status', e);
        setShowOnboarding(true);
      } finally {
        setAppIsReady(true);
      }
    }

    if (loaded) {
      // Hide the native splash screen
      SplashScreen.hideAsync().catch(() => {
        // Ignore errors
      });
      
      prepare();
    }
  }, [loaded]);

  const handleOnboardingComplete = () => {
    // COMMENTED OUT: Don't save onboarding completion for testing
    // setShowOnboarding(false);
    
    // For testing, we'll still show the main app after completing onboarding
    setShowOnboarding(false);
  };

  const handleSignUpPress = () => {
    setShowOnboarding(false);
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleSignInPress = () => {
    setShowOnboarding(false);
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const handleBackToOnboarding = () => {
    setShowOnboarding(true);
    setShowSignUp(false);
    setShowSignIn(false);
  };

  const handleAuthComplete = () => {
    setShowOnboarding(false);
    setShowSignUp(false);
    setShowSignIn(false);
  };

  // This is what renders while fonts are loading
  if (!loaded) {
    return null;
  }

  // Onboarding screens
  if (appIsReady && showOnboarding) {
    return (
      <>
        <Onboarding 
          onComplete={handleOnboardingComplete} 
          onSignUp={handleSignUpPress}
          onSignIn={handleSignInPress}
        />
        <StatusBar style="light" />
      </>
    );
  }

  // Sign Up screen
  if (showSignUp) {
    return (
      <>
        <SignUp 
          onBack={handleBackToOnboarding}
          onSignIn={handleSignInPress}
          onSignUp={handleAuthComplete}
        />
        <StatusBar style="light" />
      </>
    );
  }

  // Sign In screen
  if (showSignIn) {
    return (
      <>
        <SignIn 
          onBack={handleBackToOnboarding}
          onSignUp={handleSignUpPress}
          onSignIn={handleAuthComplete}
        />
        <StatusBar style="light" />
      </>
    );
  }

  // Main app
  if (showSecure) {
    return (
      <>
        <SecureAccount />
        <StatusBar style="light" />
      </>
    );
  }


  // Main app - using HomeScreen component instead of Stack navigation
   return (
    <>
      <HomeScreen />
      <StatusBar style="light" />
    </>
  );
}
