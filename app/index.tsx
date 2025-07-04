import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const ONBOARDING_COMPLETE_KEY = 'onboarding_complete';

interface OnboardingItemProps {
  title: string;
  description: string;
  image: any;
}

const onboardingData: OnboardingItemProps[] = [
  {
    title: 'Hey!! Welcome to KryptoSync',
    description: 'Powering seamless wallet-to-wallet transfers, trusted infrastructure streamlining access to the Web3 ecosystem',
    image: require('../assets/images/onboarding/icon1.png'),
  },
  {
    title: 'Take Control of Your Digital Assets.',
    description: 'Store, send, and swap tokens, NFTs, Ethereum, and more. All in one secure place.',
    image: require('../assets/images/onboarding/icon2.png'),
  },
  {
    title: 'Your Web3 Journey Starts Here.',
    description: 'Connect to KryptoSync to trade, earn, and transact effortlessly in the decentralized world',
    image: require('../assets/images/onboarding/icon3.png'),
  },
  {
    title: 'Let\'s Get You Started',
    description: 'Create an account or sign in to begin your journey with KryptoSync',
    image: require('../assets/images/onboarding/icon1.png'), // Reusing icon1 for now - you can replace with icon4 later
  },
];

const OnboardingItem = ({ item, currentIndex, index }: { item: OnboardingItemProps, currentIndex: number, index: number }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, i) => (
          <View
            key={i}
            style={[
              styles.indicator,
              { backgroundColor: i === currentIndex ? '#2D52EC' : '#FFFFFF' },
              { width: i === currentIndex ? 20 : 8 } // Make active indicator wider (dash)
            ]}
          />
        ))}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
    } catch (error) {
      console.error('Error saving onboarding status', error);
    }
  };

  const onSignUp = () => {
    completeOnboarding();
    router.push('/(screens)/signup');
  };

  const onSignIn = () => {
    completeOnboarding();
    router.push('/(screens)/signin');
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      // Complete onboarding and navigate to the main app
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    // Navigate to the final onboarding screen
    flatListRef.current?.scrollToIndex({
      index: onboardingData.length - 1,
      animated: true,
    });
  };

  const updateCurrentIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={({ item, index }) => <OnboardingItem item={item} currentIndex={currentIndex} index={index} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentIndex}
        keyExtractor={(_, index) => index.toString()}
      />

      {currentIndex === onboardingData.length - 1 ? (
        // Last screen - show sign up and sign in buttons
        <View style={styles.authButtonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={onSignUp}>
            <Text style={styles.nextText}>Create An Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={onSignIn}>
            <Text style={styles.signInText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Other screens - show skip and next buttons
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1032',
  },
  itemContainer: {
    width,
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  indicator: {
    height: 4,
    width: 10,
    borderRadius: 2,
    marginHorizontal: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  skipButton: {
    padding: 15,
  },
  skipText: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#CCCCCC',
  },
  nextButton: {
    backgroundColor: '#2D52EC',
    borderRadius: 8,
    padding: 15,
    paddingHorizontal: 30,
  },
  nextText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  authButtonContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
    width: '100%',
  },
  signUpButton: {
    backgroundColor: '#2D52EC',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  signInText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
