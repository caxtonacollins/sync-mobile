import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Onboarding } from '@/components/Onboarding';
import { SignUp } from '@/components/SignUp';
import { SignIn } from '@/components/SignIn';
import { AppTabs } from '@/components/AppTabs';
import { SecureAccount } from '@/components/SecureAccount';
import "../global.css"

// const ONBOARDING_COMPLETE_KEY = 'onboarding_complete';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true); // Always show onboarding for now
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSecure, setShowSecure] = useState(true);


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

    prepare();
  }, []);

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

  const handleRemindLater = () => {
    setShowSecure(false);
  };

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
        <SecureAccount onRemindLater={handleRemindLater} onBack={handleSignInPress} />
        <StatusBar style="light" />
      </>
    );
  }


  // Main app - tabs navigation
  return (
    <>
      <AppTabs />
      <StatusBar style="light" />
    </>
  );
}
