import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

interface SplashScreenProps {
  onLayoutComplete?: () => void;
}

export function SplashScreen({ onLayoutComplete }: SplashScreenProps) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View 
      style={styles.container} 
      onLayout={onLayoutComplete}
    >
      <Animated.Text 
        style={[
          styles.title,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        KRYPO SYNC
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1032',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 4,
    textAlign: 'center',
  },
});
